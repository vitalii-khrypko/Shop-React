import "./Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <p>© {new Date().getFullYear()} Shop React. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
