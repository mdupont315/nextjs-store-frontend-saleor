import { styled } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  flex: 1;
  margin-top: 24px;
  /* min-height: 90vh; */
`;

export const GeneralError = styled.p`
  color: ${props => props.theme.colors.error} !important;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10.5rem;
  margin: 1rem auto;
`;
