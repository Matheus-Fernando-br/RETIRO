from fastapi import APIRouter, Depends, HTTPException

from app.dependencies.admin_auth import require_admin
from app.schemas.lote import LoteUpdate
from app.services.lote import lote_service


router = APIRouter(
    prefix="/api/lotes",
    tags=["Lotes"],
)


@router.get("")
async def get_lotes():
    try:
        return await lote_service.get_all()

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.get("/{lote_id}")
async def get_lote(
    lote_id: str,
    _admin: str = Depends(require_admin),
):
    try:
        lote = await lote_service.get_by_id(lote_id)

        if not lote:
            raise HTTPException(
                status_code=404,
                detail="Lote não encontrado.",
            )

        return lote

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


@router.put("/{lote_id}")
async def update_lote(
    lote_id: str,
    data: LoteUpdate,
    _admin: str = Depends(require_admin),
):
    if data.valor <= 0:
        raise HTTPException(
            status_code=400,
            detail="O valor do lote deve ser maior que zero.",
        )

    try:
        lote = await lote_service.update(
            lote_id,
            data.valor,
        )

        if not lote:
            raise HTTPException(
                status_code=404,
                detail="Lote não encontrado.",
            )

        return lote

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )