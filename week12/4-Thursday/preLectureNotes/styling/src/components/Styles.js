
import styled from 'styled-components';

export  const StyledDiv = styled.div`

  margin: 40px;
  border: 5px solid pink;
  background-color: green;
  font-size: 30px;

`;

export const StyledButton = styled.button`

    font-size: 20px;
    padding: 10px;
    border: ${props => props.border || "solid 4px purple"};
    &:hover {
        background-color: yellow;
    }
`;



