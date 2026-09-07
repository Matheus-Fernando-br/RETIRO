from app.db.supabase import supabase


class LoteService:

    async def get_all(self):
        response = (
            supabase
            .table("lotes_retiro")
            .select("*")
            .order("created_at")
            .execute()
        )

        return response.data

    async def get_by_id(self, lote_id: str):
        response = (
            supabase
            .table("lotes_retiro")
            .select("*")
            .eq("id", lote_id)
            .maybe_single()
            .execute()
        )

        return response.data

    async def get_by_name(self, nome: str):
        response = (
            supabase
            .table("lotes_retiro")
            .select("*")
            .eq("nome", nome)
            .maybe_single()
            .execute()
        )

        return response.data

    async def update(
        self,
        lote_id: str,
        valor: float,
    ):
        response = (
            supabase
            .table("lotes_retiro")
            .update({
                "valor": valor,
            })
            .eq("id", lote_id)
            .execute()
        )

        return response.data[0] if response.data else None


lote_service = LoteService()