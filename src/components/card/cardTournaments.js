import Card from "./card";
import CardInputInfoDisabled from "./cardInputInfoDisabled";
import TextLabelInfo from '../text/TextLabelInfo'
import ButtonRedirect from "../button/buttonRedirect";
import { convertData, formatToBRL } from "../../utils/maskFunctions";

export default function CardTournaments({ InfoTournament }) {
  return (
    <Card className={"w-[100%] p-2"}>
        <div className="flex w-full p-2">
          <img src={InfoTournament.image} alt={InfoTournament.name} className="w-[150px] h-[100px] object-cover rounded-md"/>
          <div className="ml-4">
            <p className="font-semibold text-sm">{convertData(InfoTournament.date_init)} - {convertData(InfoTournament.date_end)}</p>
            <h1 className="mt-4 font-semibold text-white">{InfoTournament.name}</h1>
            <div className="mt-4 flex flex-row gap-2 w-full">
              <CardInputInfoDisabled Info={InfoTournament.game_id.name}/>
              <CardInputInfoDisabled Info={InfoTournament.platform_id.name}/>
              <CardInputInfoDisabled Info={InfoTournament.type_tournament_id.name}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
        <hr className={`transition-all duration-300 ease-in-out ml-2 my-2 border-primary-light w-[100%]`} />
          <div className="flex flex-row gap-8 justify-between">
            <TextLabelInfo Title={"Premiação"} Info={formatToBRL(InfoTournament.prize_pool)} />
            <TextLabelInfo Title={"Taxa Inscrição"} Info={formatToBRL(InfoTournament.inscription)} />
            <TextLabelInfo Title={"Inscritos"} Info={`${InfoTournament.inscripted} / ${InfoTournament.limit_participants}`} />
          </div>
        </div>
        <div className="">
          <Card className={"w-[98%] bg-primary-light p-2 flex items-center"}>
            <div className="rounded-full w-12 h-12 bg-white mr-3"></div>
            <TextLabelInfo Title={"Organizado Por"} Info={InfoTournament.creator} />
            <div className="ml-auto">
              <ButtonRedirect Title={"Competir"} urlRedirect={`/tournaments/${InfoTournament.id}`} />
            </div>
          </Card>
        </div>
    </Card>
  )
}
