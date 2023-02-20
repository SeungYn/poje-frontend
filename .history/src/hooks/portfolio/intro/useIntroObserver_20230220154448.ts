import { isDisapperIntro } from '@src/store/portfolio/header';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export default function useIntroObserver() {
  const [] = useRecoilState(isDisapperIntro);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref들록!!');
    let observer;
    if (introRef.current) {
      const optioins: IntersectionObserverInit = {
        rootMargin: '0px',
        threshold: [0.1, 0.5, 1],
      };

      observer = new IntersectionObserver((entry, observer) => {
        console.log('작동', entry, observer);
      }, optioins);

      observer.observe(introRef.current);
    }
  }, [introRef]);
  return { introRef };
}
