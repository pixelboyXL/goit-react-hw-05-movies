import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

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

export const AppBarList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AppBarItem = styled.li`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.15);
        text-shadow: 0px 5px 10px ${p => p.theme.colors.reallyBisgue};
    }
    &:not(:first-child) {
        margin-left: ${p => p.theme.space[4]}px;
    }
`;

export const NavTitle = styled(NavLink)`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.clearlyWhite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
        color: ${p => p.theme.colors.cherryRed};
    }
`;

export const ErrorSection = styled.section`
    text-align: center;
    padding: 20px;
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
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: ${p => p.theme.colors.reallyBisque};
        background-color: ${p => p.theme.colors.cherryRed};
    }
`;