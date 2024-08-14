"use client";
import { CirculeCloseSvg } from "@/components/svg/CirculeCloseSvg";
import { useState, forwardRef, useImperativeHandle } from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = forwardRef(({ children }: ModalProps, ref) => {
  const [active, setActive] = useState(false);

  const closeModal = () => {
    setActive(false);
  };

  const openModal = () => {
    setActive(true);
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <>
      {active ? (
        <div className="fixed inset-0 z-50 bg-black/30 w-screen h-screen animate-fade">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 px-4 ">
            <div className="relative w-full xl:w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-2 border-black rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4 dark:bg-neutral-800 ease-in-out duration-300 ">
                <div className=" w-full flex justify-end">
                  <CirculeCloseSvg onClick={closeModal} />
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
});

Modal.displayName = "Modal";
export default Modal;
