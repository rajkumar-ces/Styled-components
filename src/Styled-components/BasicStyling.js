import styled, { keyframes } from "styled-components";

// we have made some basic styling of button with the help of styled-components package.
// we have also used props to decide the style of that particular component.

export const StyledButton = styled.button`
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#fff")};
  }
`;

// Extended styling :
//Here we are pasing the styledButton inside the styled().
// to reuse the existing component and to add some more styles in it.
// Also to avoid n num of props passing and conditional checking we can use like this.

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

//Other feather styled components offers is the ability to provide polymorphic props
//eg: <FancyButton as='a' >Fancy Button</FancyButton>
// adding as='a' makes it as an anhor tag which you can inspect and see it in the browser.

//Pseudo classes:
// changing the color while hovering and focussing on the button element.
// To do that add &:hover etc,... as above....
// active state, before, after, checked etc,....

//Passed Props and Adding Attributes:
//To set the attributes we can use it by following process,
//we can also directly give the attributes in the app.js component itself.
// eg : <StyledButton type='submit' >Styled Button</StyledButton>

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translate(4px);
  }
`;

//we can also set the attribute values based on the props
// eg: export const SubmitButton = styled(StyledButton).attrs((props) => ({
//   props.variant === "outline" ? ....., : ......};
// }))

//Animation support with styled components:
//Here we have made a animation of rotate to the logo of react with styled components keyframes keyword.

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

// Themeprovider is a theme setter for all the pages which is given by the styled-components
// In app.js the themeprovider is given as a theme setter and the theme for it is given at the top.

export const Darkness = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

//Global styling - app.js
