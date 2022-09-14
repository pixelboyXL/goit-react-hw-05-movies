import styled from "styled-components";

export const ReviewsList = styled.ul`
    li {
        &:not(:last-child) {
            margin-bottom: ${p => p.theme.space[4]}px;
        }
        p {
            color: ${p => p.theme.colors.reallyBisque};
        }
    }
`;