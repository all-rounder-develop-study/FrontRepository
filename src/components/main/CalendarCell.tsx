export function CalendarCell({ text, bgColor = "#", textColor = "#020617" }: { text: string; bgColor: string; textColor: string }) {
  
    return (
      <div className={`${bgColor} w-full h-full flex items-center justify-center rounded-[6px]`}>
        <p className={`${textColor} text-[14px] font-regular cursor-default`}>{text}</p>
      </div>
    );
  }