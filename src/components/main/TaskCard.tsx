interface TaskCardProps {
    date: string;
    description: string;
    onClick: () => void;
}

export default function TaskCard({date, description, onClick}: TaskCardProps) {
    return (
        <div className="flex flex-col gap-[4px] bg-white-100 w-[455px] p-[19px] rounded-[10px]">
            <h2 className="text-[14px] text-foreground font-medium cursor-default">
                {date + " 과제"}
            </h2>
            <p className="text-[14px] text-muted_foreground font-regular line-clamp-2 cursor-default">
                {description}
            </p>
            <div 
                className="inline-block self-start bg-primary px-[12px] py-[2.5px] rounded-[6px] cursor-pointer hover:bg-gray-800 transition-all duration-400 ease-in-out"
                onClick={onClick}
            >
                <p className="text-[14px] text-primary_foreground font-medium">
                    과제보러가기
                </p>
            </div>
        </div>
    );
}