import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalsActions } from '../../store/ducks/modals';

import {
  Container, TopBar, Title, Button, Content, BottomBar,
} from './styles';

const Card = ({ data, openRemoveModal }) => (
  <Container>
    <TopBar>
      <Title href={data.link}>{data.title}</Title>
      <Button onClick={() => openRemoveModal(data.id)}>remove</Button>
    </TopBar>
    <Content>{data.description}</Content>
    <BottomBar>
      {data.tags.map(tag => (
        <span key={tag}>{`#${tag}`}</span>
      ))}
    </BottomBar>
  </Container>
);

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  openRemoveModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ToolsActions,
    ...ModalsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
