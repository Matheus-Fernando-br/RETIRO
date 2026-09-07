import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.admin import router as admin_router
from app.routes.inscricoes import router as inscricoes_router
from app.routes.configuracao import (
    router as configuracao_router,
)

load_dotenv()


app = FastAPI(
    title="Retiro API",
    description="API para gerenciamento das inscrições do Retiro",
    version="1.0.0",
)


FRONTEND_URL = os.getenv(
    "FRONTEND_URL",
    "http://localhost:3000",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        FRONTEND_URL,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(inscricoes_router)
app.include_router(admin_router)
app.include_router(configuracao_router)

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
    }