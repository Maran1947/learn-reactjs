import React from 'react';
import axios from 'axios';
import './Quote_Generator.css';
import Loader from 'react-loader-spinner';

class quote_generator extends React.Component {

	state = { advice: '', loading: false };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		this.setState({ loading: true });
		axios.get('https://api.adviceslip.com/advice')
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice: advice, loading: false });
			})

			.catch((error) => {
				this.setState({ advice: error.message, loading: false})
				// console.log(error);
			})
	}

	render() {
		// const { advice } = this.state;

		return (
			<div className="app">
				<div className="quote_card">
					<h1 className="heading">
						{this.state.loading ? <Loader type="ThreeDots"
							color="#00BFFF"
							height={100}
							width={100}
							timeout={3000} /> : this.state.advice}
					</h1>
					<button className="button" onClick=
						{this.fetchAdvice}>
						<span>Give Me Advice</span>
					</button>
				</div>
			</div>
		);
	}
}

export default quote_generator;
