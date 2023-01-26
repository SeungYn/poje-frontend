import { useState } from 'react';

export default function useModifyMode() {
  const [isModifyMode, setIsModifyMode] = useState<boolean>(false);
  const toggleModify = () => {
    setIsModifyMode((e) => !e);
  };
  return { isModifyMode, toggleModify };
}
