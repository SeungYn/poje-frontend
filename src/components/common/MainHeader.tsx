import styled from 'styled-components';
import LoginView from './LoginView';
import { IoMailOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useUser from '@src/hooks/auth/useUser';
import { useNoteAlarm } from '@src/hooks/note';

type props = {
  isHomePath: boolean;
};

type styledPropsType = {
  isHomePath: boolean;
};

export default function MainHeader({ isHomePath }: props) {
  const navigate = useNavigate();
  const { user } = useUser();
  const noteAlarm = useNoteAlarm();

  return (
    <Header isHomePath={isHomePath}>
      <Title onClick={() => navigate('/job/전체/1')}>POJE</Title>
      <RightWrapper>
        <Nav isHomePath={isHomePath}>
          {user && (
            <Item isHomePath={isHomePath} data-type='note'>
              {noteAlarm && <NoteCount data-type='note'>N</NoteCount>}
              <IoMailOutline
                className='icon'
                data-type='note'
                title='note-icon'
              />
            </Item>
          )}
        </Nav>
        <LoginView isHomePath={isHomePath} />
      </RightWrapper>
    </Header>
  );
}

const Header = styled.header<styledPropsType>`
  position: ${(props) => (props.isHomePath ? 'fixed' : 'sticky')};
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 4rem;
  border-bottom: 2px solid
    ${(props) =>
      props.isHomePath ? props.theme.borderColor : props.theme.borderColor};
  background: ${(props) =>
    props.isHomePath ? 'rgba(0, 0, 0, 0.1)' : props.theme.bgColor};
  color: ${(props) =>
    props.isHomePath ? props.theme.textAccentColor : props.theme.textColor};

  .icon {
    display: flex;
    align-items: center;
    font-size: 3rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  font-weight: bold;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav<styledPropsType>`
  display: flex;
  align-items: center;
`;

const Item = styled.button<styledPropsType>`
  position: relative;
  color: ${(props) =>
    props.isHomePath ? props.theme.textAccentColor : props.theme.textColor};
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
`;

const NoteCount = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: ${({ theme }) => theme.fontSmall};
  padding: 0.2rem;
  color: white;
  background: red;
  border-radius: 50%;
`;
