import React from 'react'
import './memeDisplay.css'
import {Box} from '@material-ui/core'

const MemeDisplay = (props) => {
	return (
		<Box padding={2}>
			<div className="meme">
				<img src={props.data.imgUrl} alt=""/>
				<h2 className="top">{props.data.topText}</h2>
				<h2 className="bottom">{props.data.bottomText}</h2>
			</div>
		</Box>
	)
}

export default MemeDisplay
