from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist
from api.user.models import User
from api.user.serializers import UserSerializer

class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        token = self.get_token(self.user)
        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(token)
        data['access'] = str(token.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)
        
        return data

class RegisterSerializer(UserSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    id = serializers.UUIDField(required=False, write_only=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)
    password = serializers.CharField(required=True, write_only=True, min_length=8, max_length=128)

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user
