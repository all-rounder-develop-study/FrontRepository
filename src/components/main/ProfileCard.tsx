import LogOutIcon from '../../assets/icons/log-out.svg';

interface ProfileCardProps {
    name: string;
    part: string;
    phoneNumber: string;
    email: string;
    onLogout: () => void;
}

export default function ProfileCard({name, part, phoneNumber, email, onLogout}: ProfileCardProps) {
    return (
        <div className="w-[258px] h-full pt-[70px] pb-[32px] px-[24px] bg-[#ffffff] flex flex-col justify-between">
            <div className="w-fill flex flex-col items-center justify-center space-y-[4px]">
                <h1 className="text-[20px] font-semibold">박호건</h1>
                <div className="inline-block bg-[#f1f5f9] text-[12px] font-semibold rounded-lg px-[10px] py-[4px]">
                    백엔드
                </div>
                <p className="text-[12px] text-[#475569] text-regular">
                    010-0000-0000
                </p>
                <p className="text-[12px] text-[#475569] text-regular">
                    studyeon5512@soongsil.ac.kr
                </p>
                <div className="h-[32px]"></div>
                <hr className="border-t bg-[#E2E8F0] w-full h-[1px] t-[32px]" />
            </div>
            <div>
                <hr className="border-t bg-[#E2E8F0] w-full h-[1px] t-[32px]" />
                <div className="h-[32px]"></div>
                <div
                    className="h-[40px] flex items-center space-x-[8px] px-[16px] cursor-pointer hover:bg-[#E2E8F0] rounded-md transition-all duration-500 ease-in-out"
                    onClick={onLogout}
                >
                    <img src={LogOutIcon} className="w-[24px] h-[24px] " />
                    <p className="text-[14px] font-semibold text-[#475569]">로그아웃</p>
                </div>
            </div>
        </div>
    )
}