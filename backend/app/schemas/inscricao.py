from pydantic import BaseModel
from typing import Optional


class InscricaoCreate(BaseModel):
    nome: str
    email: str
    telefone: str
    cpf: str

    restricao_medicamentos: str
    membresia: str
    igreja: Optional[str] = None
    camisa: str
    voluntariado: bool

    pagamento: Optional[str] = None


class StatusUpdate(BaseModel):
    pagamento_status: str