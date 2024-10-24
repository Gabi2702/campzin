import { convertData } from "./maskFunctions";

export function TimeOfTournament(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;

  if (diff <= 0) return `Campeonato iniciado em ${convertData(targetDate)}`;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeString = `Em cerca de ${hours} horas`;
  if (minutes > 0) {
    timeString += ` e ${minutes} minutos`;
  }

  const options = {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
  };
  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(target);

  return `${timeString} • ${formattedDate}`;
}