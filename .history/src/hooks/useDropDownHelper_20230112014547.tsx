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

  const onClose = useCallback(
    (e: MouseEvent) => {
      if (
        e.target !== null &&
        e.target !== ref.current &&
        !ref.current?.contains(e.target as HTMLElement)
      ) {
        console.log('event');
        setIsOpen(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('click', onClose);

    return () => {
      document.addEventListener('click', onClose);
    };
  }, []);
  return [isOpen, ref, toggleHandler];
}
