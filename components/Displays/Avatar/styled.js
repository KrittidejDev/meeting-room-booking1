import styled from "styled-components";

export const AvatarContainer = styled.img`
  border-radius: 36px;
  box-shadow: 0px 2px 2px 0px #0000001a;
  border: 2px solid ${({ theme }) => theme.COLORS.WHITE_1};
  width: 36px;
  height: 36px;
  object-fit: cover;
  object-position: center;
  background: ${({ theme }) => theme.COLORS.GRAY_1};

  &.theme_rectangle {
    border-radius: 3px;
  }
`;
