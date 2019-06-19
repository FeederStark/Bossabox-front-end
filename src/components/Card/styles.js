import styled from 'styled-components';
import RemoveIcon from '../../assets/images/remove.svg';

export const Container = styled.div`
  width: 50%;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 3px solid black;
  border-radius: 5px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.a`
  color: blue;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0 20px 0 35px;
  background: url(${RemoveIcon}) no-repeat 15px;
  background-size: 15px;
  border: none;
  height: 30px;
  border-radius: 5px;
`;

export const Content = styled.div`
  margin-top: 10px;
`;

export const BottomBar = styled.div`
  margin: 10px 0 5px;
  display: flex;
  justify-content: flex-start;

  span {
    font-weight: bold;
    margin-left: 5px;
    &:first-child {
      margin-left: 0px;
    }
  }
`;
