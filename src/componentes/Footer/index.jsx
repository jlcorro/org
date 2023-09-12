import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href=''>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/jairo-corro/'>
                <img src="/img/likedin.png" alt='linkedin' />
            </a>
            <a href='https://github.com/jlcorro'> 
                <img src="/img/github.png" alt='github' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por JairoCorro</strong>
    </footer>
}

export default Footer