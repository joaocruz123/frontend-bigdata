import { styled } from "styled-components";

const ButtonIcon = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #4e5561;
  border: 1px solid #818894;
  background-color: none;
  padding: 0.5em;
  border-radius: 0.5em;
  height: 50px;
  margin: 0.2rem;
  cursor: pointer;

  :hover {
    color: #bbbbbb;
  }
`;
export default function Icon({ children }) {
  return (
    <>
      <ButtonIcon>{children}</ButtonIcon>
    </>
  );
}
