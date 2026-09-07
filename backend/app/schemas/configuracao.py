from pydantic import BaseModel


class ConfiguracaoRetiro(BaseModel):
    lote_atual: str
    valor_inscricao: float


class ConfiguracaoRetiroResponse(BaseModel):
    id: str
    lote_atual: str
    valor_inscricao: float
    updated_at: str


class ConfiguracaoRetiroUpdate(BaseModel):
    lote_atual: str
    valor_inscricao: float