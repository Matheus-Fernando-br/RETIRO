from app.db.supabase import supabase
from app.services.lote import lote_service


class ConfiguracaoService:

    async def get(self):
        response = (
            supabase
            .table("configuracoes_retiro")
            .select("*")
            .limit(1)
            .execute()
        )

        if not response.data:
            return None

        return response.data[0]

    async def update(
        self,
        lote_atual: str,
    ):
        lote = await lote_service.get_by_name(lote_atual)

        if not lote:
            return None

        configuracao = await self.get()

        if not configuracao:
            return None

        response = (
            supabase
            .table("configuracoes_retiro")
            .update({
                "lote_atual": lote["nome"],
                "valor_inscricao": lote["valor"],
                "updated_at": "now()",
            })
            .eq("id", configuracao["id"])
            .execute()
        )

        if not response.data:
            return None

        return response.data[0]


configuracao_service = ConfiguracaoService()