import { SupabaseInsert } from "../supabase/actions";

export async function InsertTeam(Data){
    return await SupabaseInsert("team",Data)
}