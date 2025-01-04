interface CalendarCellProps {
  text: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

export function CalendarCell({ text, bgColor = "#", textColor = "#020617", onClick }: CalendarCellProps) {  
  return (
    <div
      className={`${bgColor} w-full h-full flex items-center justify-center rounded-[6px]`}
      onClick={onClick}
    >
      <p className={`${textColor} text-[14px] font-regular cursor-default`}>{text}</p>
    </div>
  );
}