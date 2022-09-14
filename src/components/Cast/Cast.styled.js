import styled from "styled-components";

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
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
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
            transform: scale(1.1);
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