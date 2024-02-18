import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  top: 0;
 
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  background-color: lightblue;
  padding: 10px 40px;
  border-bottom-left-radius: 12px 12px;
  border-bottom-right-radius: 12px 12px;
  box-shadow: 0 8px 6px -6px black;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 36px;
  color: inherit;
`;