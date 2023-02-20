import { isDisapperIntro } from '@src/store/portfolio/header';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export default function useIntroObserver() {
  const [] = useRecoilState(isDisapperIntro);
	const introRef = useRef<HTMLElement>(null);
	
	useEffect(() => { },
	, [introRef])
  return { introRef };
}
