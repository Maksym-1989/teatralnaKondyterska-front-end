import React, { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCancel();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onCancel();
    }
  };

  render() {
    const { url, onCancel } = this.props;
    return createPortal(
      <div className={styles.ModalOverlay} onClick={this.handleOverlayClick}>
        <div className={styles.ModalContent}>
          <button
            type="button"
            onClick={onCancel}
            className={styles.CloseModalBtn}
          ></button>

          <img src={url} alt={url} className={styles.img} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default ModalWindow;
