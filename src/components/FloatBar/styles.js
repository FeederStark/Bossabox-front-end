import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

export const SearchBar = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 6px 7px 6px 26px;
  border-radius: 5px;
  background: #f5f4f3 url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13;
    color: #121212;
    border: 0;
    background: #f5f4f3;
    width: -webkit-fill-available;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: #f5f4f3;
  border-radius: 3px;
  transition: all 150ms;
  box-shadow: 0 0 0 2px #000;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const Label = styled.label``;

export const Button = styled.button`
  font-weight: bold;
  font-size: 16px;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 6px 7px;
  border-radius: 5px;
  background: #365df0;
  border: 0;
  color: #fff;

  &:hover {
    background: #2f55cc;
  }

  &:active {
    background: #244aa8;
  }

  img {
    width: 25px;
  }
`;
