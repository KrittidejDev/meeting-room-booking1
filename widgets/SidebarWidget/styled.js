import styled from "styled-components";

export const SidebarWidgetStyled = styled.div`
  width: 268px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 1000;
  .sidebar_header {
    padding: 27px 30px 24px 30px;
  }
  .sidebar_title {
    padding: 14px 18px 8px 18px;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S10};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGAULR};
  }
  .sidebar_nav {
    padding: 0 18px 0 0px;
    .menu_item {
      .menu_link {
        position: relative;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        display: flex;
        align-items: center;
        column-gap: 14px;
        padding: 15px 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          background: ${({ theme }) => theme.COLORS.GRAY_5};
        }
        &.active {
          background: ${({ theme }) => theme.COLORS.BLUE_2};
        }
        .menu_icon {
          font-size: 18px;
          width: 20px;
          text-align: center;
        }
        .menu_label {
          flex: 1;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGAULR};
        }
        .menu_arrow {
          transition: transform 0.3s ease;
          &.open {
            transform: rotate(90deg);
          }
        }
      }
      .submenu {
        .submenu_link {
          padding: 15px 15px 15px 50px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          cursor: pointer;
          &:last-child {
            border-bottom: none;
          }

          &:hover {
            background-color: #253440;
          }

          &.active {
            .submenu_icon {
              background: ${({ theme }) => theme.COLORS.RED_1};
            }
          }
          .submenu_icon {
            border-radius: 8px;
            width: 8px;
            height: 8px;
            background: ${({ theme }) => theme.COLORS.WHITE_1};
          }
          .submenu_label {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGAULR};
          }
        }
      }
    }
  }
`;
