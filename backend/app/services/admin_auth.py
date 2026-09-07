import os
from datetime import datetime, timedelta, timezone

import jwt
from dotenv import load_dotenv
from fastapi import HTTPException
from fastapi.security import HTTPAuthorizationCredentials


load_dotenv()


ALGORITHM = "HS256"
TOKEN_EXPIRE_MINUTES = 60


def create_access_token(username: str) -> str:
    secret = os.getenv("ADMIN_JWT_SECRET")

    if not secret:
        raise RuntimeError(
            "ADMIN_JWT_SECRET não configurada."
        )

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": username,
        "exp": expire,
    }

    return jwt.encode(
        payload,
        secret,
        algorithm=ALGORITHM,
    )


def verify_access_token(
    credentials: HTTPAuthorizationCredentials,
):
    secret = os.getenv("ADMIN_JWT_SECRET")

    if not secret:
        raise HTTPException(
            status_code=500,
            detail="Chave JWT não configurada.",
        )

    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            secret,
            algorithms=[ALGORITHM],
        )

        username = payload.get("sub")

        if not username:
            raise HTTPException(
                status_code=401,
                detail="Token inválido.",
            )

        return username

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Token expirado.",
        )

    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Token inválido.",
        )