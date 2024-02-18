import styled from 'styled-components'

export const WrapNavigation = styled.div`
display: flex;
justify-content: center;
align-items: center;
.navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #0d47a1;
    }
}
`;