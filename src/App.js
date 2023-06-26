import "./App.css";
import logo from "./logo.svg";
import { AnimatedLogo, Darkness } from "./Styled-components/BasicStyling";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./Styled-components/Button";
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
  );
}

export default App;
