import styled from 'styled-components';

export const FilmListSection = styled.main`
    height: 100%;
    margin-bottom: ${p => p.theme.space[5]}px;
`;

export const FilmListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[5]}px;
`;

export const FilmListWrapper = styled.div`
    text-align: center;
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover {
        transform: ${p => p.theme.transform.scaleFirst};
    }
`;

export const FilmListTitle = styled.p`
    padding-top: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.reallyBisque};
`;