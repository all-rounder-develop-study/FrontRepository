import ProfileCard from "../components/main/ProfileCard";
import AssignmentCardList from "../components/main/AssignmentCardList";
import Calendar from "../components/main/Calendar";
import { useState } from "react";

export default function Main() {

  const handleLogout = () => { console.log("로그아웃 여기에 구현하면 될듯요~~"); }
  const handleTask1 = () => { console.log("첫 번째 과제하러 이동"); }
  const handleTask2 = () => { console.log("두 번째 과제하러 이동"); }

  let taskData = [
    { "endDate": "2024-01-20", "endTime": "11 : 59", "contents": "이번주까지 [7의 코드] 7장을 읽고 해당 이론을 활용하여 비즈니스 모델을 수립합니다. 이는 추후 프로젝트에 활용될 예정입니다.", "onTaskButton": handleTask1 },
    { "endDate": "2024-01-27", "endTime": "11 : 59", "contents": "이번주까지 [7의 코드] 8장을 읽고 해당 이론을 활용하여 자바 스터디를 진행합니다. 백엔드 무림고수 김나연이 참여하여 스터디를 주도해나갈 예정입니다. ", "onTaskButton": handleTask2 }
  ];
  //taskData = [];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
    console.log(month);
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
    console.log(month);
  };

  const taskDates = [
    1, 2, 4, 5, 7, 14, 27
  ]

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
        <h1 className="text-[20px] font-semibold pb-[10px]">
          남아있는 과제
        </h1>
        <div className="flex space-x-[16px] h-[301px]">
          <AssignmentCardList taskData={taskData} />
        </div>
        <div className="mt-[23px]">
          <h1 className="text-[20px] font-semibold pb-[10px]">
            활동 로그
          </h1>
          <div>
            <div className="h-[386px] w-[416px]">
              <Calendar
                year={year}
                month={month}
                assignmentDates={taskDates}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
              />
            </div>
            <></>
          </div>
        </div>
      </div>
    </div>
  );
}
