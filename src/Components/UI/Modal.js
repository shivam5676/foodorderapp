import { Fragment } from "react";
import classes from "../UI/Modal.module.css";
import ReactDOM  from "react-dom";

const BackDrop = (props) => {
  return;
  <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
//we can create both files in sepereatye folder like other component but they are not too large coded file thats why we added them here
const portalElement = document.getElementById("overlays");
const Modal =(props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop></BackDrop>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {/* <Backdrop></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay> */}
    </Fragment>
  );
};
export default Modal
