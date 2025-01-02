import AssignmentCard from "./AssignmentCard";
import ImagePlaceholder from "../../assets/images/humorPlaceholder.png";

interface AssignmentCardProps {
    endDate: string;
    endTime: string;
    contents: string;
    onTaskButton: () => void;
}

interface AssignmentCardListProps {
    taskData: AssignmentCardProps[];
}

export default function AssignmentCardList({taskData}: AssignmentCardListProps) {
    return (
        <>
            {taskData && taskData.length > 0 ? (
                taskData.map((item: any, index: number) => (
                <AssignmentCard
                    key={item.id || index}
                    endDate={item.endDate}
                    endTime={item.endTime}
                    contents={item.contents}
                    onTaskButton={item.onTaskButton}
                />
                ))
            ) : (
                <div className="w-full h-full bg-[#FFFFFF] flex-1 flex flex-col items-center justify-center space-y-[12px] rounded-[8px]">
                <img src={ImagePlaceholder} className="h-[168px]" />
                <h1 className="text-[20px] text-[#020617] font-medium">
                    과제를 완료했어요!
                </h1>
                <p className="text-[14px] text-[#020617] font-regular">
                    404, 과제 NOT FOUND...
                </p>

                </div>
            )}
        </>
    )
}