from fastapi import APIRouter, Depends, HTTPException

from app.schemas.configuracao import (
    ConfiguracaoRetiroUpdate,
)
from app.services.configuracao import (
    configuracao_service,
)
from app.dependencies.admin_auth import require_admin

router = APIRouter(
    prefix="/api/configuracoes",
    tags=["Configurações"],
)


@router.get("")
async def get_configuracao():
    try:
        configuracao = (
            await configuracao_service.get()
        )

        if not configuracao:
            raise HTTPException(
                status_code=404,
                detail="Configuração não encontrada.",
            )

        return configuracao

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.put("")
async def update_configuracao(
    data: ConfiguracaoRetiroUpdate,
    _admin: str = Depends(require_admin),
):
    if not data.lote_atual.strip():
        raise HTTPException(
            status_code=400,
            detail="O lote é obrigatório.",
        )

    try:
        configuracao = (
            await configuracao_service.update(
                data.lote_atual,
            )
        )

        if not configuracao:
            raise HTTPException(
                status_code=404,
                detail="Lote não encontrado.",
            )

        return configuracao

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )