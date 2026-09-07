from pydantic import BaseModel


class LoteUpdate(BaseModel):
    valor: float


class LoteResponse(BaseModel):
    id: str
    nome: str
    valor: float
    created_at: str
    updated_at: str