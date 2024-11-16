import logo from './logo.svg';
import './Header.css';

function Header(props) {
    let {title, slogan} = props;
    
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <h3>{slogan}</h3>
        </header>
    )
}

export default Header;