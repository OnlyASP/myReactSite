import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closed: false,
            active: 'closed',
        }
    }

    toggleClosed = () => {
        this.setState({
            closed: !this.state.closed,
        })

        this.state.closed ? this.setState({active: 'closed'}) : this.setState({active: ''})
    }

    render () {
        const {img, icon, start, finish, leftImg, rightImg } = this.props;
        return (
            <div className='modal-block grid-gallery' >
                <div className={'modal-overlay ' + this.state.active} id="modal-overlay"></div>

                <div className={'modal ' + this.state.active} id="modal">
                    <span className="left-img modal-span" onClick={leftImg}>«</span>
                    <button className="close-button" id="close-button" onClick={this.toggleClosed}>X</button>
                    <img src={img} alt="img" className="modal-guts" />
                    <div className='countImg'><span>{start} / {finish}</span><br/> Pages</div>
                    <span className="right-img modal-span" onClick={rightImg}>»</span>
                </div>

                <div id="open-button" className="open-button" onClick={this.toggleClosed}>
                    <img src={img} alt="img" className="image-gallery" />
                </div>
            </div>
        )
    }
}
export default Modal;