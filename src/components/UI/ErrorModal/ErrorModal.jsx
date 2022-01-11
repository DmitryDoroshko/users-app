import React from "react";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    const { onConfirm } = props;
    return <div className={styles["backdrop"]} onClick={onConfirm} />;
};

const ErrorModalOverlay = (props) => {
    const { errorTitle, errorText, onConfirm } = props;
    return (
        <div className={styles["error-modal"]}>
            <Card>
                <header className={styles["modal-header"]}>
                    <h2>{errorTitle}</h2>
                </header>
                <main className={styles["modal-content"]}>{errorText}</main>
                <footer className={styles["error-footer"]}>
                    <Button
                        type="button"
                        className="btn-error"
                        onButtonClick={onConfirm}
                    >
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    );
};

const ErrorModal = (props) => {
    const { errorTitle, errorText, onConfirm } = props;

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ErrorModalOverlay
                    errorTitle={errorTitle}
                    errorText={errorText}
                    onConfirm={onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
