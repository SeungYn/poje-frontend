import { isDisapperIntro } from '@src/store/portfolio/header';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export default function useIntroObserver() {
  const [] = useRecoilState(isDisapperIntro);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref들록!!');
    const ref = introRef.current;
    const optioins: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: [0.1, 0.5, 1],
    };

    const observer = new IntersectionObserver((entry, observer) => {
      console.log('작동', entry, observer);
    }, optioins);

    if (ref) {
      observer.observe(introRef.current);
    }

    //언마운트 되면 해제시켜줌
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [introRef]);
  return { introRef };
}
