from app.db.supabase import supabase


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
        valor_inscricao: float,
    ):
        configuracao = await self.get()

        if not configuracao:
            return None

        response = (
            supabase
            .table("configuracoes_retiro")
            .update({
                "lote_atual": lote_atual,
                "valor_inscricao": valor_inscricao,
                "updated_at": "now()",
            })
            .eq("id", configuracao["id"])
            .execute()
        )

        if not response.data:
            return None

        return response.data[0]


configuracao_service = ConfiguracaoService()