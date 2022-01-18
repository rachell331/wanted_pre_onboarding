import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	*{
    box-sizing : border-box;
    cursor: default;
  }
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
