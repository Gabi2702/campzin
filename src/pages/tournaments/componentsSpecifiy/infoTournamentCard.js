import CardFixed from "../../../components/card/cardFixed";

export default function InfoTournamentCard({ tournament }) {
  return (
    <CardFixed Title={"Informações Gerais"} className="col-start-1 col-span-2 h-[150px] w-full p-2">
      <div className="flex items-center justify-between ml-2">
        {/* Imagem e texto */}
        <div className="flex items-center">
          <img
            src={"https://sm.ign.com/ign_br/screenshot/default/image1_z8je.jpg"}
            alt={""}
            className="w-[150px] h-[90px] object-cover rounded-md mr-4"
          />
          <div>
            <h1 className="font-semibold text-white text-2xl">Torneio de verão</h1>
            <p className="font-semibold text-white text-sm mt-2">
              Em cerca de 16 horas • Mon, October 07, 13:00 BRT
            </p>
          </div>
        </div>

        {/* Botão */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Entrar
        </button>
      </div>
    </CardFixed>
  );
}
