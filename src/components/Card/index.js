import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Highlighter from 'react-highlight-words';

import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalsActions } from '../../store/ducks/modals';

import {
  Container, TopBar, Title, Button, Content, BottomBar,
} from './styles';

const Card = ({ data, openRemoveModal, text }) => (
  <Container>
    <TopBar>
      <Title href={data.link}>{data.title}</Title>
      <Button onClick={() => openRemoveModal(data.id)}>remove</Button>
    </TopBar>
    <Content>{data.description}</Content>
    <BottomBar>
      {data.tags.map(tag => (
        <p key={tag}>
          <Highlighter
            searchWords={[text]}
            autoEscape
            textToHighlight={`#${tag}`}
            highlightStyle={{ background: '#ffe599', margin: 0 }}
          />
        </p>
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
  text: PropTypes.string.isRequired,
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
