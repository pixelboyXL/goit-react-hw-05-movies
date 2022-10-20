import styled from "styled-components";

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
    li {
        height: 407px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: ${p => p.theme.space[4]}px;
        width: 280px;
        cursor: pointer;
        transition: ${p => p.theme.transition.cubicBezier};
        &:hover {
            transform: ${p => p.theme.transform.scaleSecond};
        }
        img {
            width: 200px;
            height: 300px;
            border-radius: ${p => p.theme.radii.md};
            border: ${p => `${p.theme.borders.normal} ${p.theme.colors.cherryRed}`};
        }
        p {
            color: ${p => p.theme.colors.cherryRed};
        }
        span {
            color: ${p => p.theme.colors.reallyBisque};
        }
    }
`;