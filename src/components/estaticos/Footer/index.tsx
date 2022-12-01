
import { Box } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
    return (
        <Box className='footer'>
            <Box className='logo'>GeneratEdu</Box>
            <Box>Links</Box>
            <Box className='direitos'>&copy; Todos os direitos Reservados para GeneratEdu</Box>
                <Box className='icons'>
                    <img src="./images/icons/instagram.png" alt="" />
                    <img src="./images/icons/gmail.png" alt="" />
                    <img src="./images/icons/github.png" alt="" />
                    <img src="./images/icons/twitter.png" alt="" />
                </Box>
        </Box>
    )
}

export default Footer;