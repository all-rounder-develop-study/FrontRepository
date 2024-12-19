import { Link } from "react-router-dom";

export default function SignupContainer() {
  return (
    <div className="w-full h-screen flex-center bg-bg-100">
      <div className="p-6 w-[384px] bg-white-100 rounded-lg custom-shadow">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-[24px] font-semibold">Sign Up</h1>
          <p className="text-gray-600 text-[14px]">계정 정보를 입력해주세요</p>
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
            <p className="mb-1 text-gray-500 text-[10px]">
              비밀번호는 영문, 숫자, 특수기호를 포함하여 작성해주세요
            </p>
            <p className="mb-2 text-[14px]">비밀번호 확인</p>
            <input
              type="password"
              className="w-full h-9 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="w-full h-12 bg-blue-500 text-white-100 rounded-lg mt-4">
            다음으로
          </button>
        </div>
        <div className="flex justify-center gap-1 mt-4">
          <p className="text-[14px] text-gray-600">이미 계정이 있다면?</p>
          <Link to="/" className="text-[14px] text-blue-500 font-medium">
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
