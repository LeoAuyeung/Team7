import React, {Component} from 'react';
import './About.css';
import Modal from 'react-modal';

class About extends Component{
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
        this.setState({modalIsOpen: true});
        this.props.handlerCloseSideBar();
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render(){
      return(
        <div id = "element">
          <button
                  className="btn2"
                  id = "about"
                  onClick = {this.openModal}>
                  <i className="fa fa-user-o"></i>
                    <span>About OurNYC</span>
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    ariaHideApp={false}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // style={customStyles}
                    contentLabel="Example Modal"
                    className="about"
                    overlayClassName="modal-overlay"
                >
                <div>
                    <button
                        className="buttonClose"
                        onClick={this.closeModal}
                        ><i className="fa fa-fw fa-times"></i></button>
                    <h2
                        ref={subtitle => this.subtitle = subtitle}
                        className="h2">
                    Weather Updates</h2>

                </div>
                <div className="aboutPage">
                    <aboutPage />
                </div>
            </Modal>
        </div>
        );
    }
}


export default About;
