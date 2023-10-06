import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 140px;
  height: 40px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    width: 2px;
    height: 10px;
    background-color: ${(props) => props.theme.accentColor};
  }
  &::before {
    right: 20px;
    transform: rotate(135deg);
  }
  &::after {
    right: 14px;
    transform: rotate(45deg);
  }
`;

export const Select = styled.select`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  font-size: 18px;
  /* 우측 펼치기 아이콘 삭제 */
  appearance: none;
  -webkit-appearance: none; /* chrome */
  -moz-appearance: none; /* firefox */
`;

export const Option = styled.option``;
