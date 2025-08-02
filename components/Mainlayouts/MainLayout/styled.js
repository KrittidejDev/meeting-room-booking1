import styled from "styled-components";

export const MainLayoutStyled = styled.div`
  min-width: ${({ theme }) => theme.SCREENS.LAPTOP};
  min-height: 100vh;
  display: flex;
  .main_content {
    flex: 1;
    margin-left: 268px;
    display: flex;
    flex-direction: column;
    .content_area {
      margin-top: 70px;
      min-height: calc(100vh - 70px);
      overflow-y: auto;
    }
  }
`;
