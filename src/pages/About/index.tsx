import React from 'react';
import './style.css';
import { Box } from '@material-ui/core';

const About = () => {
    return (
        <Box className='container'>
            <div className='about'>
                <h1>Sobre nós</h1>

                <p>Somos um grupo de jovens que participam de um Bootcamp da Generation, promovido por um projeto da Prefeitura do Rio de Janeiro - Programadores Cariocas. Visando o conhecimento na área do desenvolvimento na tecnologia.</p>

                <h2>Missão e Visão</h2>

                <p>Nossa missão e visão através do nosso projeto GENERATEDU - GERAR EDUCAÇÃO, é propor uma rede voltada ao público de alunos e professores da rede pública, fazendo o compartilhamento de pensamentos, feedbacks e ideias inovadoras para métodos de ensinamentos massivos que são estabelecidos ao mesmo módulo há séculos. Acreditamos que faltam estímulos mais dinâmicos e atrativos, para os jovens se interessarem mais pela Educação.</p>
            </div>
        </Box>
    )
}

export default About;