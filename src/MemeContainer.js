import React, { Component } from "react";
import html2canvas from "html2canvas";
import MemeDisplay from './MemeDisplay'
import MemeForm from './MemeForm'
import {Container, Box} from '@material-ui/core'


class MemeContainer extends Component {
	state = {
		topText: "",
		bottomText: "",
		imgUrl: "https://i.imgflip.com/1bij.jpg",
		imgWidth: " ",
		imgHeight: " ",
		allMemeImgs: [],
		isLoading: false,
		linkUrl: null,
		btnDisabled: true
	};

	componentDidMount = () => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((response) => {
				const { memes } = response.data;
				this.setState({
					loading: false,
					allMemeImgs: memes,
				});
			});
	};

	// Events
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	getRandomImg = (e) => {
		e.preventDefault();
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
		const { url, width, height } = this.state.allMemeImgs[randNum];
		this.setState({
			imgUrl: url,
			imgWidth: width,
			imgHeight: height,
			link: null,
			btnDisabled: true
		});
	};

	generateLink = (e) => {
		this.setState({ isLoading: true });
		e.preventDefault();

		var options = {
			allowTaint: true,
			useCORS: true,
			scale: 1,
		};

		html2canvas(document.querySelector(".meme"), options)
			.then((canvas) => {
				return canvas
					.toDataURL("image/png")
					.replace("image/png", "image/octet-stream");
			})
			.then((link) => {
				this.setState({ linkUrl: link, isLoading: false, btnDisabled: false });
			});
	};

	render() {
		return (
			<main>
				<Container maxWidth="sm">

					<Box padding="2rem">
						<MemeDisplay data={this.state}/>
					</Box>
					<MemeForm
						handleChange={this.handleChange}
						generateLink={this.generateLink}
						getRandomImg={this.getRandomImg}
						data={this.state}
					/>
				</Container>
			</main>
		);
	}
}

export default MemeContainer;
