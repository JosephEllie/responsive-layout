import * as React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';



const Headlines = ({count, img, headline, news}) => {
  return (
    <Container>
        <Box sx={{
            display:"flex",
            gap: 3,
            paddingY:2
        }}>
        <Stack>
                <img src={`./${img}`}
                    alt="" 
                    width={100}/>
            </Stack>
        
        <Stack>
            <Typography textAlign="left"> 
                    {count}
            </Typography>
            <Typography textAlign="left"
                        variant='h6'
                        component='p'
                        fontWeight={600}
            > 
                    {headline}
            </Typography>
            <Typography textAlign="left"
                        variant='body1'
                        component='p'
            > 
                {news}
            </Typography>
            </Stack>
        </Box>
        </Container>
  );
}

export default Headlines