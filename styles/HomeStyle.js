import styled from "styled-components";

export const HomeContainerStyle = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/background/bg-mockup.jpg");
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  .h_title {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }
  .h_sub_title {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S30};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }
`;
