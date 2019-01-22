import React, { Component } from 'react';
import Modal from 'react-modal';
import '../styles/About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }
    openModal = () => {
        this.setState({modalIsOpen: true});
        this.props.handlerCloseSideBar();
        console.log(this.state)
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    render() {
        return (
            <div id="element">
                <button  
                    className="btn2" 
                    id="people"
                    onClick={this.openModal}>
                    {/* <i className="fa fa-fw fa-comments"></i> */}
                    <span>About</span>
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    ariaHideApp={false}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="About"
                    overlayClassName="modal-overlay"
                ></Modal>
                <div>
                    <button 
                        className="buttonClose"
                        onClick={this.closeModal}
                        ><i className="fa fa-fw fa-times"></i></button>
                    <h2 
                        ref={subtitle => this.subtitle = subtitle}
                        className="h2">
                    </h2>
                    <div className="aboutDisplay">
                    </div>
                </div>
            </div>
        );
    }
}

export default About;