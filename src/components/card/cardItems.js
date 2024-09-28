import Card from "./card";
import CardInputInfoDisabled from "./cardInputInfoDisabled";
import TextLabelInfo from '../text/TextLabelInfo'
import ButtonRedirect from "../button/buttonRedirect";

export default function CardItems({ image, title, text }) {
  return (
    <Card className={"w-[100%] p-2"}>
        <div className="flex w-full p-2">
          <img src={image} alt={title} className="w-[150px] h-[100px] object-cover rounded-md"/>

          <div className="ml-4">
            <p className="font-semibold text-sm">Data inicio - Data Fim</p>
            <h1 className="mt-4 font-semibold text-white">Torneio dos frentistas</h1>
            <div className="mt-4 flex flex-row gap-2 w-full">
              <CardInputInfoDisabled Info={"Rainbow Six Siege"}/>
              <CardInputInfoDisabled Info={"PC"}/>
              <CardInputInfoDisabled Info={"Rounds"}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
        <hr className={`transition-all duration-300 ease-in-out ml-2 my-2 border-primary-light w-[100%]`} />
          <div className="flex flex-row gap-8 justify-between">
            <TextLabelInfo Title={"Premiação"} Info={"$1.390,00"} />
            <TextLabelInfo Title={"Taxa Inscrição"} Info={"$109,00"} />
            <TextLabelInfo Title={"Inscritos"} Info={"10/20"} />
          </div>
        </div>
        <div className="">
          <Card className={"w-[98%] bg-primary-light p-2 flex items-center"}>
            <div className="rounded-full w-12 h-12 bg-white mr-3"></div>
            <TextLabelInfo Title={"Organizado Por"} Info={"Corsário_27"} />
            <div className="ml-auto"> {/* Isto empurra o botão para a direita */}
              <ButtonRedirect Title={"Competir"} urlRedirect={'/tournaments/123'} />
            </div>
          </Card>
        </div>

    </Card>
  )
}
