import { useState } from 'react';

export default function CommonModal() {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) <></>;
  return <div>나는 모달</div>;
}
