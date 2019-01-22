import React, {Component} from 'react';
import './About.css';
import Modal from 'react-modal';

class About extends Component{
  constructor() {
      super();
      this.state = {
        modalIsOpen: false
      };
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
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

  render () {
      return (
        <div id = "element">
        <button
            className="butn2"
            id="aboutPage"
            onClick={this.openModal}>
            < i className="fa fa-fw fa-cloud"></i>
            <span>About OurNYC</span>
        </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
 }
}


export default About;
