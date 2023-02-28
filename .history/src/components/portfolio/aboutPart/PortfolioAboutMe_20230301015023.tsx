import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';
import { useRecoilState } from 'recoil';
import ModifyBtn from '../common/ModifyBtn';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import { RxGithubLogo } from 'react-icons/rx';
import { FaBloggerB } from 'react-icons/fa';

export default function PortfolioAboutMe() {
  const { aboutMe } = usePortfolioAboutMe();
  const [isModifyMode, setModifyMode] = useRecoilState(
    isModifyModeFormPortfolioAboutMe
  );
  return (
    <>
      
    </>
  );
}

const InfoList = styled.ul`
  position:relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }

  @media screen and (max-width: ${breakPoint.mm}) {
    
    
  }
`;

const InfoItem = styled.li`
  position:relative;
  padding: 2rem 0;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width:100%;
  & > *{
    flex-shrink: 0;
  }
  

  

  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-basis: 100%;
    justify-content: flex-start;
    margin-left:60%;

  }

  @media screen and (max-width: ${breakPoint.s}) {
    flex-basis: 100%;
    
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    flex-basis: 30%;
  }
`;

const InfoText = styled.div`
  margin-left: 1rem;

  & p {
    font-size: ${({ theme }) => theme.fontMiddleSize};
  }

  & p:first-child {
    font-weight: bold;
  }
  & p:last-child {
    font-size: ${({ theme }) => theme.fontRegular};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;



  & > div{
    display:flex;
    align-items: center;
  }

  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }

  @media screen and (max-width: ${breakPoint.mm}) {
    align-items: center;
    flex-direction: column;
    gap:1rem;
  }
`;

const SiteLink = styled.a`
  margin-left:0.8rem;
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;
