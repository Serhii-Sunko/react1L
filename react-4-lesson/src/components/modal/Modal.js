import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};
  render() {
    const { children, toggleModal } = this.props;
    return (
      <ModalContainer>
        <div className="Modal">
          {children}
          <button type="button" className="modalBtn" onClick={toggleModal}>
            Close
          </button>
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;
