export function dateFormat(data: any, configs?: any) {
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

export function deadlineCalculate(days: number, orderDate?: Date): Date {
  if (!orderDate) {
    orderDate = new Date();
  }

  let newDate = new Date(orderDate);

  if (
    Object.prototype.toString.call(newDate) !== "[object Date]" ||
    isNaN(newDate.getTime())
  ) {
    throw new Error("Invalid date provided");
  }

  newDate.setUTCDate(newDate.getUTCDate() + days);

  return newDate;
}
