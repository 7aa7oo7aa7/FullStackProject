from api.user.serializers import UserSerializer
from api.user.models import User
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permissions_classes = [IsAuthenticated]
    http_method_names = ['get']

    def get_queryset(self):
        return User.objects.all() if self.request.user.is_superuser else None
    
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]
        object = User.objects.get(pk=lookup_field_value)
        self.check_object_permissions(self.request, object)
        return object
