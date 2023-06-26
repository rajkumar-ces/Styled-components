import "./App.css";
import logo from "./logo.svg";
import Proptypes from "./Prop-Types/Proptypes";
import { AnimatedLogo, Darkness } from "./Styled-components/BasicStyling";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./Styled-components/Button";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}
`;

function App() {
  return (
    <>
      {/* <div>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className='App'>
            <AnimatedLogo src={logo} />
            <br />
            <button className='normal_button'>Normal Button</button>
            <br />
            <StyledButton>Styled Button</StyledButton>
            <br />
            <StyledButton variant='outline'>Props Styled Button</StyledButton>
            <br />
            <FancyButton>Fancy Button</FancyButton>
            <br />
            <SubmitButton>Submit</SubmitButton>
            <br />
            <Darkness>Dark Theme</Darkness>
          </div>
        </ThemeProvider>
      </div> */}
      <div>
        <Proptypes
          name='Kamal'
          age={22}
          email='kamal007@gmail.com'
          children={["001", "002"]}
        />
      </div>
    </>
  );
}

Proptypes.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  children: PropTypes.array,
};

//checking the type of input we getting from the user
//Highly useful in highlevel projects, since the developer may miss the type of data they send to the user.

export default App;
