import React, { useEffect, useRef, useState } from 'react';

type HookType = [boolean, React.RefObject<HTMLElement>, () => void];

export default function useDropDownHelper() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const toggleHandler = () => {
    setIsOpen((v) => !v);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        ref.current !== null &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        toggleHandler();
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }
    return () => {
      window.addEventListener('click', (e: MouseEvent) => {
        onClick(e);
      });
    };
  }, []);
  return [isOpen, ref, toggleHandler];
}
