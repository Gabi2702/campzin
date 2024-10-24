import SupabaseService  from "../supabase/actions";

class TournamentService extends SupabaseService {
    constructor(){
        super("tournaments")
    }


    fieldsTournament(){
        return `* ,
        plataform_id (
            name
        ),
        creator_id (
            nickname
        ),
        type_tournament_id (
            name
        ),
        status_progress_id (
            name
        ),
        time_checkin_id (
            time
        ),
        game_id!inner(name) (
            name
        )
        `
    }

    tournamentByGame(game){
        return ['game_id.search_query', game]
    }

    tournamentById(id){
        return ['id',id]
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

    async getTournamentById(id){
        return await this.selectSpecify(this.fieldsTournament(),this.tournamentById(id))
    }

}

export default TournamentService;
