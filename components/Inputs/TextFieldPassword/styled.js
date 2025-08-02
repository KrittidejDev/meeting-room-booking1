import styled from "styled-components";

export const TextFieldPasswordStyled = styled.div`
  width: 100%;
  .label {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
  .input_password_block {
    position: relative;
    input {
      border-radius: 10px;
      border: 1px solid
        ${({ theme, isError }) =>
          isError ? theme.COLORS.RED_1 : theme.COLORS.GRAY_2};
      padding: 12px 16px;
      width: calc(100% - 34px);
      background: ${({ theme, disabled }) =>
        disabled ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE_1};
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-family: inherit;
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_3};
      }
      &:focus {
      }
    }
    .icon_visible {
      position: absolute;
      top: 12px;
      right: 14px;
      cursor: pointer;
    }
  }
  .errors {
    margin-top: 2px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }

  .theme_standard {
  }
`;
