import { ICalendarCellProps } from "../../interfaces/ICalendarCellProps";
import "./scss/CalendarCell.scss";

export default function CalendarCell({ day }: ICalendarCellProps) {
  return (
    <div className={"calendar__cell " + ((day > 0 && day < 32) ? '' : 'disabled')}>
      <div className="calendar__cell__inner">
        {(day > 0 ) ? day : ""}
      </div>
    </div>
  );
}
