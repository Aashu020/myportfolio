import React, { useEffect, useState } from "react";

function Toaster({ message, type = "success", duration = 4000, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`toast align-items-center text-bg-${type} border-0 show position-fixed bottom-0 end-0 m-4`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ zIndex: 9999 }}
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          onClick={() => {
            setShow(false);
            if (onClose) onClose();
          }}
        ></button>
      </div>
    </div>
  );
}

export default Toaster;
