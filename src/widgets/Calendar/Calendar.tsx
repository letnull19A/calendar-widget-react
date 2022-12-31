import { useState, useEffect } from "react";
import { ICalendarProps } from "../../interfaces/ICalendarProps";
import CalendarCell from "../CalendarCell/CalendarCell";
import CalendarNavigator from "../CalendarNavigator/CalendarNavigator";
import "./scss/Calendar.scss";
import "./../../extensions";
import { Direction } from "./../../enums/Direction";
import CalendarBody from "../CalendatBody/CalendarBody";

export default function Calendar(props: ICalendarProps) {
  const [date, setDate] = useState<Date>();
  const [calendarData, setCalendarData] = useState<Array<number>>();

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {

    const days = [];
    const month = date?.getMonth() ?? 0;
    const year = date?.getFullYear() ?? 0;
    const begin = date?.beginMonthOf(month, year) ?? 0;
    var day = 0;
    const daysInMonth = date?.daysInMonth(month + 1, year) ?? 0;

    for (var i = 0; i < 42; i++) {

		if (begin === 0 && i === 0)
			day++;

    	if (i >= begin - 1 && day <= daysInMonth) {
    	  days?.push(day);
    	  day++;
    	} else {
    	  days?.push(0);
    	}
    }
	
    setCalendarData(days);
  }, [date]);

  const switchMonth = (direction: Direction): void => {
    var originDate = date;

    if (direction === Direction.Next) {
      originDate?.setMonth(originDate.getMonth() + 1);
    } else {
      originDate?.setMonth(originDate.getMonth() - 1);
    }

    originDate?.setDate(1)

    setDate(new Date(originDate ?? 0));
  };

  return (
    <div className="calendar">
      <CalendarNavigator date={date} onClick={switchMonth}></CalendarNavigator>
	  <CalendarBody content={calendarData ?? new Array<number>()}/>
    </div>
  );
}
