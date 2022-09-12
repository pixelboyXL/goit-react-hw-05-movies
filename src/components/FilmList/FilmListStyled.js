import styled from 'styled-components';

export const FilmListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[5]}px;
`;

export const FilmListDiv = styled.div`
    text-align: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.07);
    }
`;

export const FilmListTitle = styled.p`
    padding-top: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.reallyBisque};
`;