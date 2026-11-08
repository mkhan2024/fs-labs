import "./Header.css";

function Header() {
    return (
        <header>
            <div className="header-left">
                <img
                    src="/pixell-river-logo.svg"
                    alt="Pixell River Financial logo"
                    className="logo"
                />
            </div>
            <div className="header-text">
                <h1>Pixell River Employee Directory</h1>
                <span>Hi, welcome to the staff directory.</span>
            </div>
        </header>
    );
}

export default Header;