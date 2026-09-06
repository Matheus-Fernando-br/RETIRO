from app.db.supabase import supabase


class InscricaoService:

    async def create(self, data: dict):
        response = (
            supabase
            .table("inscricoes")
            .insert(data)
            .execute()
        )

        return response.data[0]

    async def get_all(self):
        response = (
            supabase
            .table("inscricoes")
            .select("*")
            .order("created_at", desc=True)
            .execute()
        )

        return response.data

    async def get_by_id(self, inscricao_id: str):
        response = (
            supabase
            .table("inscricoes")
            .select("*")
            .eq("id", inscricao_id)
            .maybe_single()
            .execute()
        )

        return response.data

    async def update_status(
        self,
        inscricao_id: str,
        pagamento_status: str,
    ):
        response = (
            supabase
            .table("inscricoes")
            .update({
                "pagamento_status": pagamento_status,
            })
            .eq("id", inscricao_id)
            .execute()
        )

        return response.data[0] if response.data else None


inscricao_service = InscricaoService()