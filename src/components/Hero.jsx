import { Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material"
import {  } from "@mui/icons-material"
const Hero =() => {
return <>
<Toolbar />
<Container>
    <Stack>
    <img src="image-web-3-mobile.jpg" alt="" />
    </Stack>
    <Stack paddingY={3}>
        <Typography variant="h4" component="h1" fontWeight={800}>
            The Bright <br/>Future of Web <br/>3.0?
        </Typography>
        <Typography variant="" component="">
            We dive into the next evolution of the web that claims to put the power
            of the plateform back into the hands of the people. But is it really fulfilling it's promises?
        </Typography>
    </Stack>
    <Stack spacing={2} direction="row" paddingBottom={5}>
    <Button variant="contained" 
    sx={{
        backgroundColor:"hsl(5, 85%, 63%)",
        paddingX:5
        
    }}>Read More</Button>
    </Stack>

</Container>
</>
}


export default Hero


// image-web-3-desktop.jpg