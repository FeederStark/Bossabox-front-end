import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import RemoveIcon from '../../assets/images/remove.svg';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalsActions } from '../../store/ducks/modals';

import './styles.css';

function RemoveTool({ modals, closeRemoveModal, removeTool }) {
  function deleteTool() {
    removeTool(modals.tool_id);
    closeRemoveModal();
  }
  return (
    <Modal
      isOpen={modals.remove_modal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick
      onRequestClose={closeRemoveModal}
      contentLabel="Add Tool Modal"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <h2>
        <img src={RemoveIcon} alt="Add" />
        Remove Tool
      </h2>
      <div className="modal-div">
        <p>
          Are you sure you want to remove <b>this?</b>
        </p>
        <div>
          <button className="cancel" type="button" onClick={closeRemoveModal}>
            Cancel
          </button>
          <button className="remove" type="button" onClick={deleteTool}>
            Yes, remove
          </button>
        </div>
      </div>
    </Modal>
  );
}

RemoveTool.propTypes = {
  closeRemoveModal: PropTypes.func.isRequired,
  modals: PropTypes.shape({
    close_modal: PropTypes.bool,
  }).isRequired,
  removeTool: PropTypes.func.isRequired,
};

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
)(RemoveTool);
