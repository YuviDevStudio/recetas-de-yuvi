import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return formatInTimeZone(date, "America/Mexico_City", "dd MMM yyyy");
};

export default dateFormat;
