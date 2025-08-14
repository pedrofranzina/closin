const Footer = () => {
    return (
        <footer className="bg-[#503B31] h-[200px]">
            <div className="flex justify-between lg:justify-around mx-auto h-full items-center px-4">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row gap-4">
                        <a
                            href="https://www.instagram.com/pedrofranzina"
                        >
                            <img className="w-6 h-6" src="/img/instagram.png" alt="Instagram Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/pedrofranzina/">
                            <img className="w-6 h-6" src="/img/linkedin.png" alt="LinkedIn Icon" />
                        </a>
                        <a href="https://www.facebook.com/pedrofranzina">
                            <img className="w-6 h-6" src="/img/facebook.png" alt="Facebook Icon" />
                        </a>
                        <a href="https://www.github.com/pedrofranzina">
                            <img className="w-6 h-6" src="/img/github.png" alt="GitHub Icon" />
                        </a>
                    </div>
                    <div className="mt-4 flex space-x-4">
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;