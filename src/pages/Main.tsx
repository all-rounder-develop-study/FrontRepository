import AssignmentCard from "../components/main/AssignmentCard";
import ProfileCard from "../components/main/ProfileCard";

import ImagePlaceholder from "../assets/images/humorPlaceholder.png";

export default function Main() {

  const handleLogout = () => {
    console.log("로그아웃 여기에 구현하면 될듯요~~");
  }

  const handleTask1 = () => {
    console.log("첫 번째 과제하러 이동");
  }

  const handleTask2 = () => {
    console.log("두 번째 과제하러 이동");
  }

  let taskData = [
    {
      "endDate": "2024-01-20",
      "endTime": "11 : 59",
      "contents": "이번주까지 [7의 코드] 7장을 읽고 해당 이론을 활용하여 비즈니스 모델을 수립합니다. 이는 추후 프로젝트에 활용될 예정입니다.",
      "onTaskButton": handleTask1
    },
    {
      "endDate": "2024-01-27",
      "endTime": "11 : 59",
      "contents": "이번주까지 [7의 코드] 8장을 읽고 해당 이론을 활용하여 자바 스터디를 진행합니다. 백엔드 무림고수 김나연이 참여하여 스터디를 주도해나갈 예정입니다. ",
      "onTaskButton": handleTask2
    }
  ];

  taskData = [];

  return (
    <div className="w-full h-screen bg-bg-100 flex">
      <ProfileCard
        name="박호건"
        part="백엔드"
        phoneNumber="010-4178-3090"
        email="studyeon5512@soongsil.ac.kr"
        onLogout={handleLogout}
      />
      <div className="px-[32px] py-[24px] w-full">
        <h1 className="text-[20px] font-semibold mb-[10px]">
          남아있는 과제
        </h1>
        <div className="flex space-x-[16px] h-[301px]">
          {taskData && taskData.length > 0 ? (
            taskData.map((item: any) => (
              <AssignmentCard
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
          
        </div>
      </div>
    </div>
  );
}
