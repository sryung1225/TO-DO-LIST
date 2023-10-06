import styled from "styled-components";
import { CRed } from "../colors";

export const Item = styled.li`
  margin: 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 2px dashed ${(props) => props.theme.accentColor};
  border-radius: 10px;
`;

export const Text = styled.p`
  padding-bottom: 10px;
  font-size: 26px;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  color: ${(props) => props.theme.accentColor};
  font-size: 18px;
`;

export const DeleteButton = styled(Button)`
  color: ${CRed};
`;
