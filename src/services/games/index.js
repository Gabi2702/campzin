import SupabaseService from "../supabase/actions";

export class GameService extends SupabaseService {
  constructor(){
    super("games")
  }
}