import { useState, useEffect } from 'react';
import './MyClass.css';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";


Modal.setAppElement('#root'); // This binds your root element to React Modal

function MyClass() {
    const [classes, setClasses] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newClassName, setNewClassName] = useState('');

    const addClass = () => {
        setClasses([...classes, newClassName]);
        setNewClassName(''); // Reset the input field
        setModalIsOpen(false); // Close the modal
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="class-container">
            {classes.map((className, index) => (
                <div key={index} className="class-box">
                    {className}
                </div>
            ))}
            <div className="class-box add-new" onClick={openModal}>
                반 추가
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add New Class"
                className="Modal"
                overlayClassName="Overlay"
            >
                <h2>새 클래스 이름 입력하세요.</h2>
                <input 
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                />
                <button onClick={addClass}>확인</button>
                <button onClick={closeModal}>닫기</button>
            </Modal>
        </div>
    );
}

export default MyClass;
