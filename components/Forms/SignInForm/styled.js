import styled from "styled-components";

export const SignInFormStyled = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .f_title {
    margin-bottom: 28px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
  .input_wrap {
    margin-bottom: 18px;
    &.mb_22 {
      margin-bottom: 22px;
    }
  }
  .btn_wrap {
    margin-left: auto;
    margin-right: 0;
    width: 140px;
  }
  .action_more_row {
    display: flex;
    justify-content: center;
    column-gap: 5px;
    .btn_more_item {
      text-decoration: underline;
      color: ${({ theme }) => theme.COLORS.BLACK_2};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
    }
  }
`;
