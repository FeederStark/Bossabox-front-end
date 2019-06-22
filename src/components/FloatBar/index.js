import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ModalsActions } from '../../store/ducks/modals';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import {
  Container,
  SearchForm,
  SearchBar,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
  Button,
} from './styles';

import AddIcon from '../../assets/images/add.svg';

class FloatBar extends Component {
  static propTypes = {
    openAddModal: PropTypes.func.isRequired,
    getTools: PropTypes.func.isRequired,
  };

  state = {
    search: '',
    checked: false,
  };

  handleCheck = () => {
    const { getTools } = this.props;
    const { checked, search } = this.state;
    this.setState({ checked: !checked }, () => getTools(search, !checked));
  };

  handleSearch = (e) => {
    const { getTools } = this.props;
    const { checked } = this.state;
    const text = e.target.value;
    this.setState({ search: text }, () => getTools(text, checked));
  };

  render() {
    const { search, checked } = this.state;
    const { openAddModal } = this.props;
    console.log(this.props);
    return (
      <Container>
        <SearchForm onSubmit={e => e.preventDefault()}>
          <SearchBar>
            <input type="text" placeholder="search" value={search} onChange={this.handleSearch} />
          </SearchBar>
          <Label>
            <CheckboxContainer>
              <HiddenCheckbox checked={checked} onChange={this.handleCheck} />
              <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </Icon>
              </StyledCheckbox>
            </CheckboxContainer>
          </Label>
          <span>search in tags only</span>
        </SearchForm>
        <Button onClick={openAddModal}>
          <img src={AddIcon} alt="Add" />
          Add
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modals: state.modals,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalsActions,
    ...ToolsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloatBar);
