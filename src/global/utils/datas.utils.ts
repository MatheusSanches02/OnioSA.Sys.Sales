export function formatarData(data: any, configs?: any) {
  if (!data) {
    return undefined;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  };

  if (configs) {
    if (configs.onlyDate) {
      delete options.hour;
      delete options.minute;
      delete options.second;
    } else if (configs.onlyTime) {
      delete options.year;
      delete options.month;
      delete options.day;
    } else if (configs.onlyHourAndMinutes) {
      delete options.year;
      delete options.month;
      delete options.day;
      delete options.second;
    }
  }

  return new Intl.DateTimeFormat("pt-BR", options)
    .format(new Date(data))
    .toString();
}
