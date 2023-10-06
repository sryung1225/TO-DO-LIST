import styled from "styled-components";
import { CRed } from "../colors";

export const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 5px 36px 5px 10px;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 36px;
  height: 36px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 8px);
    left: 50%;
    width: 2px;
    height: 16px;
    background-color: ${(props) => props.theme.accentColor};
  }
  &::after {
    transform: rotate(90deg);
  }
`;

export const Valid = styled.p`
  padding: 2px 5px;
  color: ${CRed};
  font-size: 14px;
  text-align: left;
`;

/* CreateToDo */
export const ToDoForm = styled(Form)`
  font-size: 40px;
`;

export const ToDoInput = styled(Input)`
  height: 50px;
`;

export const ToDoButton = styled(Button)`
  height: 48px;
  &::before,
  &::after {
    top: calc(50% - 10px);
    height: 20px;
  }
`;
