import ButtonClick from "../../../components/button/buttonClick";
import CardFixed from "../../../components/card/cardFixed";
import { TimeOfTournament } from "../../../utils/calculateFuntions";

export default function InfoTournamentCard({ tournament }) {
  return (
    <CardFixed Title={"Informações Gerais"} className="col-start-1 col-span-2 h-[150px] w-full p-2">
      <div className="flex items-center justify-between ml-2">
        <div className="flex items-center">
          <img
            src={tournament.image}
            alt={""}
            className="w-[150px] h-[90px] object-cover rounded-md mr-4"
          />
          <div>
            <h1 className="font-semibold text-white text-2xl">{tournament.name}</h1>
            <p className="font-semibold text-white text-sm mt-2">
              {TimeOfTournament(tournament.date_init)}
            </p>
          </div>
        </div>

        <ButtonClick Title={"Participar"} />
      </div>
    </CardFixed>
  );
}
