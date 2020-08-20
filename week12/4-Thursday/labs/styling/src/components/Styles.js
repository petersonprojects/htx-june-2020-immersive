import styled from 'styled-components';


// these style components allow you to pass in props so you can changed the conidtions of the styling based on 
// constraints that you set

export const StyledDiv = styled.div`
    margin: 40px;
    border: 5px solid pink;
    background-color: green;
    font-size:30px;
`;

export const StyledButton = styled.button`
    font-size: 40px;
    padding: 10px;
    border: ${props => props.border || "solid 4px purple"};
    &:hover {
        background-color: yellow;
    }

`;
