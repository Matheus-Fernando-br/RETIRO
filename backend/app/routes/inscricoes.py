from fastapi import APIRouter, Depends, HTTPException

from app.schemas.inscricao import (
    InscricaoCreate,
    StatusUpdate,
)

from app.services.inscricao import inscricao_service
from app.dependencies.admin_auth import require_admin


router = APIRouter(
    prefix="/api/inscricoes",
    tags=["Inscrições"],
)


@router.post("")
async def create_inscricao(data: InscricaoCreate):
    try:
        return await inscricao_service.create(
            data.model_dump()
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.get("")
async def get_inscricoes(
    _admin: str = Depends(require_admin),
):
    try:
        return await inscricao_service.get_all()
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


# IMPORTANTE: deixar a rota pública antes de /{inscricao_id}
@router.get("/public/{inscricao_id}")
async def get_inscricao_publica(
    inscricao_id: str,
):
    try:
        inscricao = await inscricao_service.get_by_id(
            inscricao_id
        )

        if not inscricao:
            raise HTTPException(
                status_code=404,
                detail="Inscrição não encontrada.",
            )

        return inscricao

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.get("/{inscricao_id}")
async def get_inscricao(
    inscricao_id: str,
    _admin: str = Depends(require_admin),
):
    try:
        inscricao = await inscricao_service.get_by_id(
            inscricao_id
        )

        if not inscricao:
            raise HTTPException(
                status_code=404,
                detail="Inscrição não encontrada.",
            )

        return inscricao

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.put("/{inscricao_id}/status")
async def update_status(
    inscricao_id: str,
    data: StatusUpdate,
    _admin: str = Depends(require_admin),
):
    if data.pagamento_status not in [
        "pendente",
        "pago",
        "cancelado",
    ]:
        raise HTTPException(
            status_code=400,
            detail="Status de pagamento inválido.",
        )

    try:
        inscricao = await inscricao_service.update_status(
            inscricao_id,
            data.pagamento_status,
        )

        if not inscricao:
            raise HTTPException(
                status_code=404,
                detail="Inscrição não encontrada.",
            )

        return inscricao

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )