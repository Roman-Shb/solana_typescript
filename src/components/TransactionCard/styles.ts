import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledListItem = styled.li`
  list-style-type: none;
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid lightgray;
  border-color: #33a382;
  margin-bottom: 24px;
  margin-right: 32px;
  box-shadow: 3px 2px 2px #33a382;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  background-color: #1e2423;
`;
export const StyledBoldText = styled.span`
  font-weight: 700;
  color: white;
`;

export const StyledText = styled.span`
  margin-left: 4px;
  color: #33a382;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StyledTextAnt = styled.text`
  color: #9cbbb2;
  font-weight: bold;
`;

export const StyledCard = {
  backgroundColor: '#121313',
  borderColor: '#036454',
  margin: 12,
  overflow: 'hidden',
};

export const StyledRow = {
  justifyContent: 'center',
};
