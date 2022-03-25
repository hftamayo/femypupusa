import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return(
        <div onClick={props.onClose}></div>
    );
};

const ModalOverLay = (props) => {
    return(
        <div>
            <div>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;