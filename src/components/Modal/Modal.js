import { useEffect, useRef } from 'react';
import RulesPortal from './RulesPortal';
import { CSSTransition } from "react-transition-group";

import styles from './modal.module.scss'

function Modal({ modalOpen, handleClose }) {
    const nodeRef = useRef(null)
    useEffect(() => {
        const closeOnEsc = (e) => e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEsc)
        return () => {
            document.body.removeEventListener('keydown', closeOnEsc)
        }
    }, [handleClose])

    if (!modalOpen) return null;
  
    return (
        <RulesPortal wrapperId='react-portal-modal-container'>
            <CSSTransition
                in={modalOpen}
                timeout={{entry: 0, exit: 300}}
                unmountOnExit
                classNames={styles.modal}
                nodeRef={nodeRef}
            >
                <div className={styles.modal} ref={nodeRef}>
                    <div className={styles.rules}>
                        <img src='/assets/image-rules.svg' alt='rules'/>
                    </div>
                    <button onClick={handleClose} className={styles.closeBtn}>
                        Close
                    </button>
                  
                </div>
            </CSSTransition>
        </RulesPortal>
    );
  }
  export default Modal;