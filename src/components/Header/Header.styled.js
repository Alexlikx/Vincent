import styled from 'styled-components';

export const HeaderStyled = styled.header`
padding: 24px 32px;
display: flex;
justify-content: space-between;
    .header-logo svg {
        fill: var(--theme-color);
        transition: fill .3s ease-in-out;
    }
    .header-content {
        display: flex;
        align-items: center;
        .theme-change-btn {
            border: none;
            background-color: transparent;
            padding: 10px;
            margin-right: 20px;
            svg {
                width: 20px;
                height: 20px;
                fill: var(--theme-color);
                transition: fill .3s ease-in-out;
            }
        }
        .header-menu {
            padding: 10px;
            border: none;
            background-color: transparent;
            svg line {
                stroke: var(--theme-color);
                transition: stroke .3s ease-in-out;
            }
        }
    }

`