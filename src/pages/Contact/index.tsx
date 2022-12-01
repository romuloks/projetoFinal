import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './style.css';

const Contact = () => {
    return(
        <Box className='container'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6}>
            <Box padding={10}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto' >Entre em contato com a gente!</Typography>
                        <TextField id='nome' label='nome' variant="outlined" name='nome' margin='normal' fullWidth/>
                        <TextField id='usuario' label='usuário' variant="outlined" name='usuario' margin='normal' fullWidth/>
                        <TextField id='assunto' label='assunto' variant="outlined" name='assunto' margin='normal' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant="contained" className='button'>
                            Enviar
                        </Button>
                        </Box>
                </form>
            </Box>
        </Grid>
        </Grid>
        </Box>
    )
}

export default Contact;