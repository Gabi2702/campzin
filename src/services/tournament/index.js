import SupabaseService  from "../supabase/actions";

class TournamentService extends SupabaseService {
    constructor(){
        super("tournaments")
    }


    fieldsTournament(){
        return `* ,
        platform_id (
            name
        ),
        type_tournament_id(
            name
        ),
        game_id!inner(name)(
            name
        )
        `
    }

    tournamentByGame(game){
        return ['game_id.search_query', game]
    }

    async getAllTournamentsNoParams(){
        return await this.selectAll(this.fieldsTournament())
    }

    async getAllTournamentsByGame(game){
        return await this.selectSpecify(this.fieldsTournament(),this.tournamentByGame(game))
    }

    async getAllTournaments(game){
        if(game != null){
            return await this.getAllTournamentsByGame(game)
        }
        return await this.getAllTournamentsNoParams()
    }

}

export default TournamentService;
