import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ModalsActions } from '../../store/ducks/modals';

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
  };

  state = {
    checked: false,
  };

  handleCheck = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const { checked } = this.state;
    const { openAddModal } = this.props;
    return (
      <Container>
        <SearchForm onSubmit={() => {}}>
          <SearchBar>
            <input type="text" placeholder="search" />
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

const mapDispatchToProps = dispatch => bindActionCreators(ModalsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloatBar);
