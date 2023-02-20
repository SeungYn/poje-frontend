import { isDisapperIntro } from '@src/store/portfolio/header';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

export default function useIntroObserver() {
  const setState = useSetRecoilState(isDisapperIntro);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref들록!!');
    const ref = introRef.current;
    const optioins: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: [0.2],
    };

    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        //인트로가 0.8비율이 안보이면 recoil에 안보인다고 해줌
        setState(true);
      } else {
        setState(false);
      }
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
  }, [introRef, setState]);
  return { introRef };
}
