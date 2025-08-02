import styled from "styled-components";

export const BgStandardStyled = styled.div`
  .btn {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_1};
    border-radius: 5px;
    padding: 12px 24px;
    width: 100%;
    background: ${({ theme, disabled }) =>
      disabled ? `${theme.COLORS.GRAY_1}` : theme.COLORS.BLUE_1};
    color: ${({ theme, disabled }) =>
      disabled ? `${theme.COLORS.WHITE_1}` : theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    transition: all 0.3s ease;
    &:hover {
      background: ${({ theme, disabled }) =>
        disabled ? `${theme.COLORS.GRAY_1}` : theme.COLORS.WHITE_1};
      border-color: ${({ theme }) => theme.COLORS.WHITE_2};
      color: ${({ theme, disabled }) =>
        disabled ? `${theme.COLORS.WHITE_1}` : theme.COLORS.BLACK_1};
    }
  }
`;
