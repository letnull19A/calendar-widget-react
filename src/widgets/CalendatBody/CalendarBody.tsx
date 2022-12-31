import ICalendarBodyProps from "../../interfaces/ICalendarBodyProps";
import CalendarCell from "../CalendarCell/CalendarCell";
import "./scss/CalendarBody.scss";

export default function CalendarBody(props: ICalendarBodyProps) {
  const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  return (
    <div className="calendar__body">
      <div className="calendar__body-header">
        {weekDays.map((item) => (
          <div className="calendar__body-header__day">{item}</div>
        ))}
      </div>
      <div className="calendar__body-content">
        {props.content?.map((item) => (
          <CalendarCell day={item as number} />
        ))}
      </div>
    </div>
  );
}
