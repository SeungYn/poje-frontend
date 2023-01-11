import React, { useCallback, useEffect, useRef, useState } from 'react';

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

  const onClose = useCallback((e: MouseEvent) => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    console.log(123);

    document.addEventListener('click', onClose);

    return () => {
      document.addEventListener('click', onClose);
    };
  }, []);
  return [isOpen, ref, toggleHandler];
}
