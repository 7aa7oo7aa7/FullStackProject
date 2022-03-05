from rest_framework.routers import SimpleRouter
from api.user.viewsets import UserViewSet
from api.auth.viewsets import LoginViewSet, RegisterViewSet, RefreshViewSet

routes = SimpleRouter()

routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegisterViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')
routes.register(r'user', UserViewSet, basename='user')
routes.register(r'user/<uuid:id>', UserViewSet, basename='user-detail')

urlpatterns = [
    *routes.urls
]
