import React, { useState } from "react";
import Toast from "./Toast";

interface ToastContainerProps {
    onAddToast: (addToast: (message: string) => void) => void;
}

const ToastContainer = ({onAddToast}: ToastContainerProps) => {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const addToast = (message: string) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  React.useEffect(() => {
    onAddToast(addToast);
  }, [onAddToast])

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end gap-[8px]">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
