from pydantic import BaseModel


class AdminLogin(BaseModel):
    usuario: str
    senha: str