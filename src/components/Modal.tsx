import React from 'react'
import './Modal.scss';
type ModalProps = {
    active: boolean 
    setActive: Function
    children? :React.ReactNode
  }
export const Modal: React.FC<ModalProps> = (props) => {
    const { active, setActive, children } = props
    return (
        <div className={active ? "modal active" : "modal" }>
            <div className="modal-content">
                {children}
            <button className="modal-content-btn" onClick={ () => setActive(false) }>Закрыть</button>
            </div>
            
        </div>
    )
}
