import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';

function usePopup(btnClassName?: string) {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        (!e.target.closest('.popup__show') && !e.target.closest('.popup')) ||
        e.target.classList[0] === 'popup__close'
      ) {
        setShowPopup(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    setShowPopup(false);
  }, []);

  const onShowPopup = (boolean: boolean) => {
    setShowPopup(boolean);
  };
  

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [showPopup]);

  return { showPopup, onShowPopup };
}

export default usePopup;
