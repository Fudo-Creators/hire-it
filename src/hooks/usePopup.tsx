import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

type Portal = {
  children: ReactNode;
};

function usePopup(btnClassName?: string) {
  const [showPopup, setShowPopup] = useState(true);

  const Portal = ({ children }: Portal) =>
    ReactDOM.createPortal(children, document.body);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLBodyElement;

      if (
        (target.closest(".popup__show") && target.closest(".popup")) ||
        target.classList[0] === "popup__close"
      ) {
        setShowPopup(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    setShowPopup(false);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("blur");
    } else {
      document.body.classList.remove("blur");
    }
  }, [showPopup]);

  return { showPopup, setShowPopup, Portal };
}

export default usePopup;
