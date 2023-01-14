import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;

  font: inherit;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {

}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

input[type="text"]{
  outline: none;
  
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button{
  outline: none;
  background:none;
  border:none;
  cursor:pointer;
  padding:0;
}

*{
  box-sizing: border-box;
}
html{
	height:100%;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
	height:100%;
  

}

a{
  text-decoration:none;
  color:inherit;
}
`;

// common

export const CommonBtn = styled.button`
  display: flex;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textAccentColor};
  border: 2px solid ${(props) => props.theme.textAccentColor};
  border-radius: 5rem;
  padding: 0.8rem 2rem;

  & span {
    position: relative;
  }

  & span::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 0%;
    height: 4px;
    background-color: ${(props) => props.theme.textAccentColor};
    transition: width 0.1s linear;
  }

  &:hover span::after {
    width: 100%;
  }
`;
