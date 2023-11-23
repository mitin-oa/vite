import styled from "styled-components";

const colors = {
  yellowmellow: "#fbe69b",
  lightbrown: "#be8b7b",
  pearl: "#F1CDB3",
  lightblue: "#93CEF0",
};

const StyledHamburger = styled.button<{ open: boolean }>`
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  right: 10px;
  top: 45px;
  min-width: 2.35rem !important;
  height: 2.35rem;
  padding: 3px !important;
  // background: transparent;
  position: absolute;
  top: 2px;
  right: 0;
  display: flex !important;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 2;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 0px;
    background-color: ${({ open }) => (open ? colors.pearl : colors.pearl)};
    transition: all 0.3s linear;
    transform-origin: 1px;
  }

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(-20px)" : "translateX(0)")};
  }
  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const Burger = (props: Props) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </StyledHamburger>
);
