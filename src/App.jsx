import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="main-section">
        <header className="header header__type_main">
          <img className="logo" src="" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link>Преимущества</Link>
              </li>
              <li>
                <Link>Услуги</Link>
              </li>
              <li>
                <Link>Виджет</Link>
              </li>
              <li>
                <Link>Кому</Link>
              </li>
              <li>
                <Link>Тарифы</Link>
              </li>
              <li>
                <Link>Блог</Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <section className="aside-section"></section>
    </div>
  );
};

export default App;
