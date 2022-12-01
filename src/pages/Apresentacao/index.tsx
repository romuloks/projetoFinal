import React from 'react';
import { Box } from '@material-ui/core';
import './style.css';

const Apresentacao = () => {
    return (
        <Box className='container'>
            <Box className='hHome'>
                <h1>Bem-Vindo(a) à GENERATEDU</h1>
                <h2>A Rede Social que Gera Educação</h2>
            </Box>
        </Box>
    )
}

export default Apresentacao;