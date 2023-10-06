import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px 10px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 60px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Status = styled.span`
  display: inline-block;
  margin: 50px 0 -10px auto;
  padding: 5px 10px;
  font-size: 26px;
  color: #fff;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 10px 10px 0 0;
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const None = styled.div`
  margin: 5px 0;
  padding: 20px;
  background-color: #fff;
  border: 2px dashed ${(props) => props.theme.accentColor};
  border-radius: 10px;
  font-size: 18px;
`;
