import { X } from "phosphor-react";
import { type ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal")!;

  return ReactDOM.createPortal(
    <div className="relative flex overflow-y-scroll justify-center items-center">
      <div>
        <div
          onClick={onClose}
          className={`fixed inset-0 max-h-screen overflow-y-scroll  flex justify-center items-center transition-colors  ${
            open ? "visible bg-black/20" : "invisible"
          }`}
        >
          {/* modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
      bg-white rounded-xl shadow p-6 max-h-[90%] transition-all  overflow-y-scroll ${
        open
          ? "scale-100 scale-x-100 md:scale-100  opacity-100"
          : "scale-125 opacity-0"
      }
      `}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-full text-black bg-white hover:text-gray-100 hover:bg-gray-600 transition-all"
            >
              <X />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
