export function compare(a, b) {
  let comparison = 0;
  const aDay = [a.day, a.shift];
  const bDay = [b.day, b.shift];
  aDay > bDay ? comparison++ : comparison--;
  return comparison;
}

export function convertWeekValuesToNames(value) {
  let day = "";
  switch (value) {
    case "0":
      day = "Domingo";
      break;
    case "1":
      day = "Segunda";
      break;
    case "2":
      day = "Terça";
      break;
    case "3":
      day = "Quarta";
      break;
    case "4":
      day = "Quinta";
      break;
    case "5":
      day = "Sexta";
      break;
    case "6":
      day = "Sábado";
      break;
    case "m":
      day = "manhã";
      break;
    case "t":
      day = "tarde";
      break;
    default:
      day = "";
  }
  return day;
}
