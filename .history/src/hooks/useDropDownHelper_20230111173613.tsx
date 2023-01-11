import React, { useEffect, useRef, useState } from 'react';

export default function useDropDownHelper() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const toggleHandler = () => {
    setIsOpen((v) => !v);
	};
	
	useEffect(() => {
		const onClick = (e: React.MouseEvent<HTMLElement>) => {
			if(ref.current !== null && !ref.current.contains(e.target as HTMLElement))
		}
	})
  return <div></div>;
}
