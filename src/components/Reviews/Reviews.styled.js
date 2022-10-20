import styled from "styled-components";
import { device } from "components/GlobalStyles";

export const ReviewsList = styled.ul`
    @media ${device.mobileOnly} {
        text-align: center;
    }
    li {
        &:not(:last-child) {
            margin-bottom: ${p => p.theme.space[4]}px;
        }
        p {
            color: ${p => p.theme.colors.reallyBisque};
        }
    }
`;