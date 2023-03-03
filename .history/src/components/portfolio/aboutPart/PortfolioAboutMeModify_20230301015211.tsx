import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import useAboutMeModifyForm from '@src/hooks/portfolio/aboutMe/useAboutMeModifyForm';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import { useRecoilState } from 'recoil';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';
import LoadingSpiner from '../common/LoadingSpiner';
import { RxGithubLogo } from 'react-icons/rx';
import { FaBloggerB } from 'react-icons/fa';

export default function PortfolioAboutMeModify() {
  const { form, onChange, onSubmit } = useAboutMeModifyForm();
  const { isLoading } = usePortfolioAboutMe();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFormPortfolioAboutMe
  );
  return (
    <div>f</div>
  );
}

const FormContainer = styled.form``;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;

const InfoItem = styled.li`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  @media screen and (max-width: ${breakPoint.ss}) {
    flex-basis: 100%;
  }

  @media screen and (min-width: ${breakPoint.mmm}) {
    flex-basis: 50%;
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    flex-basis: 30%;
  }
`;

const InfoText = styled.div`
  margin-left: 1rem;
  width: 100%;
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

const InputText = styled.input`
  font-size: ${({ theme }) => theme.fontRegular};
  width: 90%;
  outline:none;
  border:none;
  border-bottom:1px solid black;
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

const SiteLink = styled.input`
  margin-left:0.8rem;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  outline:none;
  border:none;
  border-bottom:1px solid black;
`;
