import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }
  closeModal = (e) => {
    if (e.code === "Escape") {
      this.props.toogleModal();
    }
  };
  onHandleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { children, toggleModal } = this.props;
    return (
      <ModalContainer onClick={this.onHandleBackdropClick}>
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
