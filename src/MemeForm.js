import React from 'react'
import {TextField, Button, ButtonGroup, Grid, Box} from '@material-ui/core'

const MemeForm = (props) => {
	return (
		<Box p={2}>
			
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
		
				<Box mt={2}>
					<Grid container direction="row" alignItems="center" justify="space-between">
						<ButtonGroup variant="contained" disableElevation>
							<Button 
								onClick={props.getRandomImg}
								size="large"
							>Choose Image</Button>
							
							<Button 
								type="submit"
								onClick= {props.generateLink}
								size="large"
							>Generate</Button>
						</ButtonGroup>

						<Button download="meme.png" 
							variant="contained" 
							color="primary"
							size="large"
							href={props.data.linkUrl}
							disabled={props.data.btnDisabled ? true : false}
							disableElevation
						>{props.data.isLoading ? "processing" : "download"}</Button>
						</Grid>
					</Box>
			</form>
		</Box>
	)
}

export default MemeForm
