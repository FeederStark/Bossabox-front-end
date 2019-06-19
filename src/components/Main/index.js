import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header';
import FloatBar from '../FloatBar';
import Card from '../Card';
import AddTool from '../AddTool';
import RemoveTool from '../RemoveTool';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    tools: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
    getTools: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getTools } = this.props;
    getTools();
  }

  render() {
    const { tools } = this.props;
    return (
      <Container>
        <Header />
        <FloatBar />
        {tools.map(tool => (
          <Card key={tool.id} data={tool} />
        ))}
        <AddTool />
        <RemoveTool />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
