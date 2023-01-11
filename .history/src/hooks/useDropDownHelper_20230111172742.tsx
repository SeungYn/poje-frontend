import { useRef, useState } from 'react';

export default function useDropDownHelper() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const toggleHandler = () => {
    setIsOpen((v) => !v);
  };
  return <div></div>;
}
