 import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const Item = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
`;