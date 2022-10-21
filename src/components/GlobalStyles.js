import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #9a9385;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${p => p.theme.colors.justBlack};
        text-decoration: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
    body::-webkit-scrollbar {
        width: 20px;
    }
    body::-webkit-scrollbar-track {
        background-color: transparent;
		margin-block: ${p => p.theme.space[3]}px;
		border-radius: ${p => p.theme.radii.md};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${p => p.theme.colors.reallyBisque};
		border-radius: ${p => p.theme.radii.md};
		border: ${p => `${p.theme.borders.medium} ${p.theme.colors.cherryRed}`};
    }
`;

const size = {
    mobile: '480',
    tablet: '768',
    desktop: '1280',
};

export const device = {
    mobile: `(min-width: ${size.mobile}px)`,
    mobileOnly: `(max-width: ${size.tablet - 0.02}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    tabletOnly: `(max-width: ${size.desktop - 0.02}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
};

export const AppBarList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AppBarItem = styled.li`
    cursor: pointer;
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover {
        transform: ${p => p.theme.transform.scaleThird};
        text-shadow: ${p => p.theme.shadows.shadowSecond};
    }
    &:not(:first-child) {
        margin-left: ${p => p.theme.space[4]}px;
    }
`;

export const NavTitle = styled(NavLink)`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.clearlyWhite};
    transition: ${p => p.theme.transition.cubicBezier};
    &.active {
        color: ${p => p.theme.colors.cherryRed};
    }
`;

export const ErrorSection = styled.section`
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
    img {
        padding-bottom: ${p => p.theme.space[5]}px;
        display: block;
        margin: 0 auto;
    }
`;

export const NavButton = styled(NavLink)`
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.md};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.cherryRed}`};
    color: ${p => p.theme.colors.cherryRed};
    background-color: ${p => p.theme.colors.reallyBisque};
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover {
        color: ${p => p.theme.colors.reallyBisque};
        background-color: ${p => p.theme.colors.cherryRed};
    }
`;

export const AdditionalMessageStyle = styled.span`
    text-align: center;
`;