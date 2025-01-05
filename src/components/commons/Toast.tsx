import AlertMark from '../../assets/icons/alertMark.svg';

interface ToastProps {
    message: string;
    onClose: () => void;
  }
  
export default function Toast({ message, onClose }: ToastProps) {
    return (
      <div className="flex justify-between items-center border border-[1px] border-red-100 bg-white-100 text-white rounded-[8px] p-[16px] gap-[12px]">
        <img src={AlertMark} alt={"alert toast"} className='h-[16px] w-[16px]'/>
            <p className='text-[16px] text-red-100 font-medium'>
                {message}
            </p>
        </div>
    );
};
  