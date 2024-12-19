import ProfileCard from "../components/main/ProfileCard";

export default function Main() {

  const handleLogout = () => {
    console.log("로그아웃 여기에 구현하면 될듯요~~");
  }

  return (
    <div className="w-full h-screen bg-bg-100 flex">
      <ProfileCard
        name="박호건"
        part="백엔드"
        phoneNumber="010-4178-3090"
        email="studyeon5512@soongsil.ac.kr"
        onLogout={handleLogout}
      />
      <h1>메인호오오옴</h1>
    </div>
  );
}
