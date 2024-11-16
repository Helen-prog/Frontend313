import './App.css';
import Article from '../article/Article';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import data from '../article/db.json';


function App() {

  let site = "My site";
  let description = "I am learning React";

  let nav = {
    "Главная": "/index", "Новости": "/news",
    "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts"
  };

  let db = data.people;
  let icon = data.people.pol;
  let copy = "Copyright - 2024";

  // console.log(db);


  return (
    <div className="App">
      <Header
        title={site}
        slogan={description}
      />
      <Nav
        navigation={nav}

      />
      <Article db={db} icon={icon} />
      <Footer text={copy} />
    </div>
  );
}

export default App;
