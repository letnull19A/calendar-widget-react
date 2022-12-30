import { useEffect } from "react";
import { Direction } from "../../enums/Direction";
import ICalendarNavigatorProps from "../../interfaces/ICalendarNavigatorProps";
import "./scss/CalendarNavigator.scss";

export default function CalendarNavigator(props: ICalendarNavigatorProps) {

	const monthNameOf = (month: number = 0): string => {

		const monthList = new Array<string>(
			"Январь", "Февраль", 
			"Март", "Апрель", "Май", 
			"Июнь", "Июль", "Август", 
			"Сентябрь", "Октябрь", "Ноябрь", 
			"Декабрь");

		return monthList[month];
	}

	return (
		<div className="calendar-navigator">
			<div className="calendar-navigator__container">
				<div className="calendar-navigator__date">
					<span className="calendar-navigator__date-label">
						{props.date?.getDate() + " " + monthNameOf(props.date?.getMonth())}
					</span>
				</div>
				<div className="calendar-navigator__control">
					<button className="calendar-navigator__prev" onClick={() => props.onClick(Direction.Prev)}>Предыдущий</button>
					<button className="calendar-navigator__next" onClick={() => props.onClick(Direction.Next)}>Следующий</button>
				</div>
			</div>
		</div>
	);
}
