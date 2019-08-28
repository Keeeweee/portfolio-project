from rest_framework import permissions


class IsAdminUserOrReadOnly(permissions.IsAdminUser):
    """
    Custom permission to only allow superusers to edit objects.
    """

    def has_permission(self, request, view):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        is_admin = super().has_permission(request, view)
        return request.method in permissions.SAFE_METHODS or is_admin

