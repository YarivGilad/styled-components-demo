import { ReactNode } from "react";
import styled, { keyframes, css } from "styled-components";
import { lighten, darken, cssVar } from "polished";
import { flexbox } from "../styles/mixins.ts";

interface Props {
  children?: ReactNode;
}

export function TopBar({ children }: Props) {
  return (
    <Div>
      {children}
      <img className="logo" src="./icons/logo.svg" alt="logo" />
      <Button>Click</Button>
      <SpecialBtn bg="skyBlue">Click</SpecialBtn>
      <Button bg="orange">Click</Button>
      <SpecialBtn bg="lime">Click</SpecialBtn>
    </Div>
  );
}

const spin = keyframes`
  to {transform: rotate(360deg)}
`;

const Div = styled.div`
  background: slategray;

  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;

  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  ${flexbox({ jc: "space-around" })}

  h1 {
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
    @media (min-width: 768px) {
      color: black;
    }
  }

  img.logo {
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }

  @media (min-width: 768px) {
    background-color: green;
  }
`;
interface ButtonProps {
  bg?: string;
}
const Button = styled.button.attrs<ButtonProps>(({ bg }) => {
  const style = { '--bg': `${bg || 'DeepPink'}` } as React.CSSProperties;
  return { style }
})`
  outline-style: none;
  border-style: none;
  /* 
  background: DeepPink;
  background-color: ${(props) => props.bg || "DeepPink"};
  background-color: ${({ bg }) => bg || "DeepPink"}; 
  */
  background-color: var(--bg);
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;

  &:hover {
    background: ${({ bg }) => lighten(0.1, bg || "DeepPink")};
  }
  &:active {
    background: ${({ bg }) => darken(0.1, bg || "DeepPink")};
  }
`;

const SpecialBtn = styled(Button)`
  border: white 2px solid;
  border-radius: 0;
`;
