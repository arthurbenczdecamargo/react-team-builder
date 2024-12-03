import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <h3>Developed by Arthur Alexandre Bencz de Camargo Filho</h3>
                <a href="https://github.com/arthurbenczdecamargo" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + '/images/github-logo.png'} alt='github profile' />
                </a>
            </section>
        </footer>)
}


export default Footer