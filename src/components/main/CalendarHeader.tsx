import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

export function CalendarHeader({ year, month, onPrevMonth, onNextMonth }: { 
    year: number, 
    month: number,
    onPrevMonth: () => void,
    onNextMonth: () => void,
  }) {
    return (
      <div className="flex justify-between px-[10px] py-[8px] items-center">
        <div
          className="border border-[#E2E8F0] rounded-[6px] p-[4px] cursor-pointer"
          onClick={onPrevMonth}
        >
          <img src={LeftArrow} className="w-[16px] h-[16px]" alt="Previous Month" />
        </div>
        <h1 className="text-[14px] font-medium">
          {monthNames[month]} {year}
        </h1>
        <div
          className="border border-[#E2E8F0] rounded-[6px] p-[4px] cursor-pointer"
          onClick={onNextMonth}
        >
          <img src={RightArrow} className="w-[16px] h-[16px]" alt="Next Month" />
        </div>
      </div>
    );
  }