import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieDetailsMain = styled.main`
    max-width: 1600px;
    margin: 0 auto;
    span {
        display: block;
        margin-left: 10px;
        margin-bottom: ${p => p.theme.space[5]}px;
    }
`;

export const MovieDetailsMainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        display: inline-block;
        max-height: 500px;
        max-width: 400px;
    }
`;

export const MovieDetailsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[5]}px;
    margin-left: ${p => p.theme.space[5]}px;
    h2 {
        color: ${p => p.theme.colors.cherryRed};
    }
    h3 {
        color: ${p => p.theme.colors.reallyBisque};
    }
    span {
        max-width: 1200px;
    }
`;

export const MovieDetailsGenresList = styled.ul`
    display: flex;
    li {
        &:not(:first-child) {
        margin-left: ${p => p.theme.space[4]}px;
        }
    }
`;

export const MovieDetailsAdditionalWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    margin: ${p => p.theme.space[5]}px auto;
    h3 {
        color: ${p => p.theme.colors.reallyBisque};
    }
`;

export const MovieDetailsAdditionalNavigate = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    li {
        margin-top: ${p => p.theme.space[4]}px;
        padding: ${p => p.theme.space[3]}px;
        border-radius: ${p => p.theme.radii.md};
        border: ${p => `${p.theme.borders.normal} ${p.theme.colors.cherryRed}`};
        background-color: ${p => p.theme.colors.reallyBisque};
        &:not(:first-child) {
            margin-left: ${p => p.theme.space[4]}px;
        }
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
            transform: scale(1.15);
            box-shadow: 0px 5px 10px ${p => p.theme.colors.cherryRed};
            background-color: ${p => p.theme.colors.cherryRed};
        }
    }
`;

export const NavTitle = styled(NavLink)`
    padding: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.cherryRed};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: ${p => p.theme.colors.reallyBisque};
    }
`;