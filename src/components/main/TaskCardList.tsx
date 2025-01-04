import TaskCard from "./TaskCard";

interface TaskCardProps {
    date: string;
    description: string;
    onClick: () => void;
}

interface TaskCardListProps {
taskInfoList: TaskCardProps[];
}

export default function TextCardList({ taskInfoList }: TaskCardListProps) {
    return (
        <div className="flex flex-col gap-[7px] h-full overflow-y-auto">
            {taskInfoList.map((task, index) => (
                <TaskCard
                    key={index}
                    date={task.date}
                    description={task.description}
                    onClick={task.onClick}
                />
            ))}
        </div>
    )
}