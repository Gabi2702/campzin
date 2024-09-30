export function convertData(data){
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}