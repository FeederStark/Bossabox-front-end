import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import AddIcon from '../../assets/images/add.svg';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalsActions } from '../../store/ducks/modals';

import './styles.css';

class AddTool extends Component {
  static propTypes = {
    addToolRequest: PropTypes.func.isRequired,
    closeAddModal: PropTypes.func.isRequired,
    modals: PropTypes.shape({
      add_modal: PropTypes.bool,
    }).isRequired,
  };

  state = {
    title: '',
    link: '',
    description: '',
    tags: '',
  };

  addTool = (e) => {
    e.preventDefault();
    const {
      title, link, description, tags,
    } = this.state;
    const { closeAddModal, addToolRequest } = this.props;
    const arrayTags = tags.split(' ');
    const data = {
      title,
      link,
      description,
      tags: arrayTags,
    };
    addToolRequest(data);
    closeAddModal();
    this.setState({
      title: '',
      link: '',
      description: '',
      tags: '',
    });
  };

  render() {
    const {
      title, link, description, tags,
    } = this.state;
    const { modals, closeAddModal } = this.props;
    return (
      <Modal
        isOpen={modals.add_modal}
        ariaHideApp={false}
        shouldCloseOnOverlayClick
        onRequestClose={closeAddModal}
        contentLabel="Add Tool Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>
          <img src={AddIcon} alt="Add" />
          Add new tool
        </h2>
        <form className="modal-form" onSubmit={this.addTool}>
          <span>Tool name</span>
          <input
            type="text"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <span>Tool link</span>
          <input type="text" value={link} onChange={e => this.setState({ link: e.target.value })} />
          <span>Tool description</span>
          <textarea
            value={description}
            rows="6"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <span>Tags</span>
          <input type="text" value={tags} onChange={e => this.setState({ tags: e.target.value })} />
          <button type="submit">Add tool</button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
  modals: state.modals,
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
)(AddTool);
