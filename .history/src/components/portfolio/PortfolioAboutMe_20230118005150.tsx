import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function PortfolioAboutMe() {
  return (
    <CommonSection>
      <CommonHeader>
        <AiFillTag />
        <HeaderTitle>About Me</HeaderTitle>
      </CommonHeader>
      <InfoList>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPencilFill />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <AiFillCalendar />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPersonFill />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <FaMapMarkerAlt />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <MdEmail />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
      </InfoList>
    </CommonSection>
  );
}

const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

const CommonHeader = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
  border-bottom: 1px solid black;
`;

const InfoList = styled.ul`
  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;

const InfoItem = styled.li``;

const InfoText = styled.div``;
