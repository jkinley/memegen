import React from 'react'
import {TextField, Button, Grid} from '@material-ui/core'

const MemeForm = (props) => {
	return (
		
		<form onSubmit={props.generateLink} noValidate>
			<TextField
				fullWidth
				variant="outlined"
				type="text" 
				name="topText"
				placeholder="Top Text"						
				value={props.data.topText}
				onChange={props.handleChange}
				margin="normal"
			/>
			<TextField
				fullWidth
				variant="outlined"
				type="text" 
				name="bottomText"
				placeholder="Bottom Text"
				value={props.data.bottomText}
				onChange={props.handleChange}
				margin="normal"
			/>

		<Grid container direction="row" alignItems="center" justify="space-between">
			<div>
			<Button 
				variant="contained" 
				onClick={props.getRandomImg}
				size="large"
				disableElevation
			>Choose Image</Button>
			
			<Button 
				type="submit"
				variant="contained"
				onClick= {props.generateLink}
				size="large"
				disableElevation
			>Generate!</Button>
			</div>

			<Button download="meme.png" 
				variant="contained" 
				color="primary"
				size="large"
				href={props.data.linkUrl}
				disabled={props.data.btnDisabled ? true : false}
				disableElevation
			>{props.data.isLoading ? "processing" : "download"}</Button>
			
			</Grid>

		</form>
	)
}

export default MemeForm
