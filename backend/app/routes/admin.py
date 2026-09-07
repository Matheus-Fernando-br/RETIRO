import os

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException

from app.schemas.admin import AdminLogin
from app.services.admin_auth import create_access_token


load_dotenv()


router = APIRouter(
    prefix="/api/admin",
    tags=["Admin"],
)


@router.post("/login")
async def admin_login(data: AdminLogin):
    admin_usuario = os.getenv("ADMIN_USERNAME")
    admin_senha = os.getenv("ADMIN_PASSWORD")

    if not admin_usuario or not admin_senha:
        raise HTTPException(
            status_code=500,
            detail="Credenciais administrativas não configuradas.",
        )

    if (
        data.usuario != admin_usuario
        or data.senha != admin_senha
    ):
        raise HTTPException(
            status_code=401,
            detail="Usuário ou senha incorretos.",
        )

    token = create_access_token(admin_usuario)

    return {
        "access_token": token,
        "token_type": "bearer",
    }