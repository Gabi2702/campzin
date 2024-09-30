import SupabaseService  from "../supabase/actions";

class TournamentService extends SupabaseService {
    constructor(){
        super("tournaments")
    }
}

export default TournamentService;