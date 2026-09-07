from fastapi import Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.services.admin_auth import verify_access_token


security = HTTPBearer()


def require_admin(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    return verify_access_token(credentials)