interface AssignmentCardProps {
    endDate: string;
    endTime: string;
    contents: string;
    onTaskButton: () => void;
}

export default function AssignmentCard({endDate, endTime, contents, onTaskButton}: AssignmentCardProps) {
    return (
        <div className="bg-[#4E3ABA] w-[243px] h-[301px] px-[22px] py-[36px] flex flex-col justify-between rounded-[10px]">
            <h1 className="text-[#FFFFFF] font-semibold text-[20px]">
                {endDate} <br /> {endTime}까지
            </h1>
            <div className="h-[80px]">
                <p className="text-[#FFFFFF] font-regular text-[14px] line-clamp-4">
                    {contents}
                </p>
            </div>
            <div
                className="inline-block bg-[#FFFFFF] rounded-[6px] px-[16px] py-[8px] w-fit cursor-pointer hover:bg-[#D2D8E0] transition-all duration-400 ease-in-out"
                onClick={onTaskButton}
            >
                <p className="text-[#020617] font-medium text-[14px]">
                    과제하러가기
                </p>
            </div>
        </div>
    )
}