"use client";

import { Modal } from "@/components/shared/Modal";
import { TextReveal } from "@/components/shared/TypingAnimation";
import { useState, useRef } from "react";

export const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("loading");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    openModal();
    setMessageStatus("loading");
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMessageStatus("success");
    } catch (error) {
      setMessageStatus("error");
    }
  };

  const modalRef = useRef();

  const openModal = () => {
    (modalRef.current as any)?.openModal();
  };

  return (
    <>
      <form className=" pt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className=" w-full bg-white dark:bg-black border-neutral-500 border rounded-xl p-4 text-white"
          placeholder="Name"
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <div className=" py-4">
          <input
            type="email"
            className=" w-full bg-white dark:bg-black border-neutral-500 border rounded-xl p-4 text-white"
            placeholder="Email"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <textarea
          className=" w-full bg-white dark:bg-black border-neutral-500 border rounded-xl p-4 text-white"
          placeholder="Message"
          required
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
        <div className=" pt-4">
          <button
            className="p-4 w-full bg-black dark:bg-neutral-500 rounded-xl hover:bg-black/70 dark:hover:bg-neutral-300 ease-in-out duration-300 text-xl dark:text-black text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <Modal ref={modalRef}>
        <>
          {messageStatus === "loading" && (
            <div className=" w-full flex items-center justify-center py-12">
              <TextReveal text="Loading..." className=" text-white text-3xl" />
            </div>
          )}
          {messageStatus === "success" && (
            <div className=" w-full  py-12">
              <TextReveal
                text="Message Send!"
                className=" text-white text-3xl text-center"
              />
              <p className=" text-neutral-500 text-center">
                Thank you for contacting me, you will have my response as soon
                as possible.
              </p>
            </div>
          )}
          {messageStatus === "error" && <p>Error!</p>}
        </>
      </Modal>
    </>
  );
};
