import styled from 'styled-components';

export const SearchBar = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[5]}px;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    background-color: ${p => p.theme.colors.reallyBisque};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.cherryRed}`};
    border-radius: ${p => p.theme.radii.sm};
`;

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: ${p => p.theme.transition.cubicBezier};
    cursor: pointer;
    outline: none;
    background-color: ${p => p.theme.colors.tastyCoffe};
    &:hover {
        opacity: 1;
    }
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    border: none;
    outline: none;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.reallyBisque};
    &::placeholder {
        font: inherit;
        font-size: ${p => p.theme.fontSizes.m};
    }
`;