//로그인 페이지
import { Link } from "react-router-dom";

export default function LoginContainer() {
  return (
    <div className="w-full h-screen flex-center bg-bg-100 ">
      <div className="p-6 w-[384px] bg-white-100 rounded-lg custom-shadow">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-[24px] font-semibold">Login</h1>
          <p className="text-gray-600 text-[14px]">스터디 관리 서비스</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[14px]">아이디</p>
            <input className="w-full h-9 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[14px]">비밀번호</p>
            <input
              type="password"
              className="w-full h-9 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 mb-1"
            />
          </div>
          <button className="w-full h-12 bg-blue-500 text-white-100 rounded-lg ">
            Login
          </button>
        </div>
        <div className="flex justify-center gap-1 mt-4">
          <p className="text-[14px] text-gray-600">계정이 없으신가요?</p>
          <Link to="/signup" className="text-[14px] text-blue-500 font-medium">
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}
