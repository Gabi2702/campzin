export function convertData(data) {
    const [datePart, timePart] = data.split('T'); 
    const [ano, mes, dia] = datePart.split('-');
  
    const hora = timePart.split(':').slice(0, 2).join(':');
  
    return `${dia}/${mes}/${ano} às ${hora}`;
  }

export function formatToBRL(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }