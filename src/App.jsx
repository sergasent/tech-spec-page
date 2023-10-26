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
        <main className="main-section__main">
          <h1 className="main-section__title">
            Техническая поддержка сайтов, CRM систем и мобильных приложений
          </h1>
          <p className="main-section__subtitle">
            Профессиональное техническое сопровождение и обслуживание сайтов:
            полный комплекс услуг от опытных экспертов
          </p>
        </main>
      </section>
      <section className="aside-section" aria-label="Контакты">
        <header className="header header_type_aside"></header>
      </section>
    </div>
  );
};

export default App;
