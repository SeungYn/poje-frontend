import React, { useEffect, useRef, useState } from 'react';

type HookType<T extends HTMLElement> = [
  boolean,
  React.RefObject<T>,
  () => void
];

export default function useDropDownHelper<
  T extends HTMLElement
>(): HookType<T> {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<T>(null);

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
  }, [isOpen]);
  return [isOpen, ref, toggleHandler];
}
