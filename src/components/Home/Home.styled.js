import styled from 'styled-components';

export const HomeStyled = styled.article`
    padding-top: 120px;
    .home-title {
        font-family: 'Inter', sans-serif;
        max-width: 840px;
        font-style: normal;
        font-weight: 500;
        font-size: 72px;
        line-height: 88px;
        color: var(--theme-color);
        transition: color .3s ease-in-out;
        text-transform: uppercase;
    }
    .home-grid {
        display: grid;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        margin-top: 120px;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 32px;
        grid-row-gap: 80px;
        .home-card {
            text-decoration: none;
            &:hover .card-arrow {
                transform: translateX(30px);
            }
        }
        .card1 {
            grid-row-start: 1;
        }
        .card2 {
            grid-column-start: 0;
            align-self: center;
            grid-row: 1;
            grid-column: span 4;
            justify-self: start;
        }
        .card3 {
            grid-column-start: 0;
            grid-row-start: 2;
            justify-self: end;
        }
        .card4 {
            grid-row-start: 2;
            grid-column-start: 2;
            justify-self: end;
        }
        .card5 {
            grid-row-start: 3;
            grid-column: 1;
        }
        .card6 {
            grid-row-start: 3;
            grid-column-start: 0;
        }
    }
    .home-card-name {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: var(--theme-color);
        text-transform: uppercase;
        text-decoration: none;
        .card-name-number {
            margin-right: 40px;
            opacity: 0.4;
        }
        .card-arrow {
            margin-left: 15px;
            fill: var(--theme-color);
            transition: transform .3s ease-in-out;
        }
    }
    .works {
        .works-title {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 72px;
            line-height: 88px;
            text-transform: uppercase;
            margin-top: 180px;
        }
        .works-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 40px;
            text-transform: uppercase;
            margin-top: 48px;
        }
        .works-block {
            display: flex;
            margin-top: 180px;
            justify-content: space-between;
            align-items: center;
        }
        .works-imgs {
            position: relative;
            display: flex;
            .central-img {
                position: absolute;
                left: 10%;
                top:10%;
            }
        }
        .works-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 24px;
            h4 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                text-transform: uppercase;
                margin: 8px 0;
            }
            h5 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                margin: 0;
                text-transform: uppercase;
            }
            h6 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                opacity: 0.4;
                margin: 0;
                text-transform: uppercase;
                margin-left: 60px;
            }
        }
    }
    footer {
        margin-top: 180px;
        margin-bottom: 100px;
        display: flex;
        justify-content: space-between;
        .main-contact-link {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            text-decoration: none;
            color: var(--theme-color);
        }
        .footer-link {
            color: var(--theme-color);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            text-decoration: none;
            padding: 10px 32px;
            &:hover {
                svg {
                    transform: translate(10px, -10px);
                }
            }
            &:not(:last-child) {
                border-right: 1px solid var(--theme-color);
            }
            svg {
                fill: var(--theme-color);
                margin-left: 8px;
                transition: transform .3s ease-in-out;
            }
        }
        .scroll-top {
            padding: 8px 14px;
            margin-left: 40px;
            border-radius: 50%;
            border: 1px solid var(--theme-color);
            svg {
                fill: var(--theme-color);
            }
        }
    }
`