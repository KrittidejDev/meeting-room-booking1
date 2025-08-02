import styled from "styled-components";

export const HeaderWidgetContainer = styled.header`
  position: fixed;
  top: 0;
  left: 268px;
  right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_7};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  background: ${({ theme }) => theme.COLORS.WHITE_1};
  z-index: 999;
  .header_content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    .header_left {
      .page_title {
        margin: 0;
        color: ${({ theme }) => theme.COLORS.GRAY_6};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
        font-wight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      }
    }
    .header_right {
      display: flex;
      align-items: center;
      gap: 16px;
      .user_info {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .user_name {
        font-size: 14px;
        font-weight: 500;
        color: #2c3e50;
      }

      .logout_btn {
        padding: 8px 16px;
        background-color: #e74c3c;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #c0392b;
        }

        &:active {
          transform: translateY(1px);
        }
      }
    }
  }
`;
