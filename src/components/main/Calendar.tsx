import { CalendarCell } from "./CalendarCell";
import { CalendarHeader } from "./CalendarHeader";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

interface CalendarProps {
  year: number;
  month: number;
  assignmentDates: number[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export default function Calendar({ year, month, assignmentDates, onPrevMonth, onNextMonth }: CalendarProps) {
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthDays = firstDayOfMonth.getDay();
  const nextMonthDays = 6 - lastDayOfMonth.getDay();

  const daysInMonth = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => i + 1);

  function isToday(year: Number, month: Number, date: any) {
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() == date;
  }

  function hasAssignment(date: any) {
    return assignmentDates.includes(date);
  }

  return (
    <div className="w-full h-full p-[8px] border border-[#E2E8F0] border-[1px] rounded-[8px] bg-[#FFFFFF] flex flex-col">
      <div>
        <CalendarHeader
          year={year}
          month={month}
          onPrevMonth={onPrevMonth}
          onNextMonth={onNextMonth}
        />
      </div>
      <div className="grid grid-cols-7 grid-auto-rows w-full h-full">
        {weekDays.map((day, i) => (
          <CalendarCell
            key={`prev-${i}`}
            text={day}
            bgColor="bg-white-100"
            textColor="text-muted_foreground"
          />
        ))}
        {Array.from({ length: prevMonthDays }).map((_, i) => (
          <CalendarCell
            key={`prev-${i}`}
            text={String(prevMonthLastDay - prevMonthDays + i + 1)}
            bgColor="bg-white-100"
            textColor="text-gray_foreground"
          />
        ))}

        {daysInMonth.map((day, i) => (
          (isToday(year, month, day))
          ?
          <CalendarCell
            key={`prev-${i}`}
            text={String(i + 1)}
            bgColor="bg-primary"
            textColor="text-white-100"
          /> 
          : (hasAssignment(day)) ?
          <CalendarCell
            key={`prev-${i}`}
            text={String(day)}
            bgColor="bg-blue-200"
            textColor="text-foreground"
          />
          :
          <CalendarCell
            key={`prev-${i}`}
            text={String(day)}
            bgColor="bg-white-100"
            textColor="text-foreground"
          />
        ))}

        {Array.from({ length: nextMonthDays }).map((day, i) => (
          <CalendarCell
            key={`prev-${i}`}
            text={String(i + 1)}
            bgColor="bg-white-100"
            textColor="text-gray_foreground"
          />
        ))}
      </div>
    </div>
  );
}
