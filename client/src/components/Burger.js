import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../styles/Burger.css';

class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    handlerCloseSideBar = () => {
        this.setState({menuOpen: false});
    }
    
    handler = (e) => {
        this.setState({
            menuOpen: false
        });
    }

    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu 
                className="menu"
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
            <h1>OurNYC</h1>
                <div id="social">
                    <a href="/" className="fa fa-fw fa-facebook"><span>facebook</span></a>
                    <a href="/" className="fa fa-fw fa-twitter"><span>twitter</span></a>
                    <a href="/" className="fa fa-fw fa-instagram"><span>instagram</span></a>
                    <p>Copyright @ 2018 OurNYC. All rights reserved.</p>
                </div>
            </Menu>
        );
    }
}

export default Burger;