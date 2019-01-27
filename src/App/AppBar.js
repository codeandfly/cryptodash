import React from 'react';
import styled, {css} from 'styled-components';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 180px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const ControlButtonEl = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 2px 2px 30px #03ff03;
    /* color: #03ff03; */

  `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name, active}) => {
  return (
    <ControlButtonEl active={active}>
      {toProperCase(name)}
    </ControlButtonEl>
  )
}

const AppBar = () => {
  return (
    <Bar>
      <Logo>CyptoDash</Logo>
      <div/>
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  )
}

export default AppBar;