import os

from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv

from app.schemas.admin import AdminLogin


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

    return {
        "authenticated": True,
    }