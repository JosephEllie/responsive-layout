import { Box, Container, Stack, Typography } from "@mui/material"
const News = () =>{
    return <Container sx={{
        paddingBottom:5
    }}>
        <Box>
        <Stack  bgcolor="hsl(240, 100%, 5%)" 
                padding={3}>
            <Typography 
                variant="h4" 
                component="h1" 
                sx={{
                color:"hsl(35, 77%, 62%)"
                }}>
          New
        </Typography>
        <Typography 
                paddingTop={3} 
                variant="h5" 
                component="h1" 
                color="hsl(36, 100%, 99%)">
            Hydrogen Vs Electric Cars
        </Typography>
        <Typography 
                color="hsl(236, 13%, 42%)" 
                paddingTop={1} 
                paddingBottom={3}>
           Will hydrogen-fueled cars ever catch up to EVs?
        </Typography>
        <hr  />
        <Typography 
                paddingTop={3} 
                variant="h5" 
                component="h1" 
                color="hsl(36, 100%, 99%)">
            The Downsides of AI Artistry
        </Typography>
        <Typography 
                color="hsl(236, 13%, 42%)" 
                paddingTop={1} 
                paddingBottom={3}>
           What are the possible adverse effects of on-demand AI image generation
        </Typography>
        <hr  />
        <Typography 
                paddingTop={3} 
                variant="h5" 
                component="h1" 
                color="hsl(36, 100%, 99%)">
            Is VC Funding Drying Up
        </Typography>
        <Typography 
                color="hsl(236, 13%, 42%)" 
                paddingTop={1} 
                paddingBottom={3}>
           Private funding by VC firms is down 50% YOY. We take a look at what that means.
        </Typography>
</Stack>
    </Box>
    </Container>
}

export default News