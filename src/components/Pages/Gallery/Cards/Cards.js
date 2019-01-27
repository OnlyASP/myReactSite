import React, {Component} from 'react';
import './Cards.css';
import ScrollArea from 'react-scrollbar';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closed: false,
            active: 'closed',
            zIndex: 200,
        }
    }

    toggleClosed = () => {
        this.setState({
            closed: !this.state.closed,
        })

        this.state.closed ? this.setState({active: 'closed'}) : this.setState({active: ''})
    }

    render () {
        const {img, icon } = this.props;
		return (
			<div>
			
			<div className='modal-block' >
				<div className={'modal-overlay ' + this.state.active} id="modal-overlay"></div>

				<div className={'card ' + this.state.active} id="modal">
					<button className="close-button" id="close-button" onClick={this.toggleClosed}>X</button>
					<ScrollArea
						speed={0.5}
						className="area"
						contentClassName="content"
						horizontal={false}>
					<div className='card-block'>
						<img src={img} alt="img" className="card-image" />
						<div className='card-info'>
							<h2 className='card-title'>lorem lorem</h2>
							<p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime? 
							Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime?
							Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime? 
							Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime? 
							Omnis aliquid aliquam, necessitatibus cupiditate tenetur dolor magni ipsam recusandae maiores nisi autem at molestiae laboriosam culpa impedit doloribus quidem adipisci porro et! Officiis et, exercitationem suscipit ex cum similique modi maxime? </p>
						</div>
					</div>
					</ScrollArea>
				</div>

				<div id="open-button" className="open-button" onClick={this.toggleClosed}>
					<img src={img} alt="img" className="image-gallery" />
				</div>
			</div>

			<div className="card-footer">
					<div className="name">Lorem ipsum dolor</div>
				<div className="category">photo</div>
			</div>

			</div>
		)	
	}
}

export default Cards;

const modalStyle = {
		overflow: 'hidden',
}

