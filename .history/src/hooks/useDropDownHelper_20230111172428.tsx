import { useRef, useState } from 'react';

export default function useDropDownHelper() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  return <div></div>;
}
