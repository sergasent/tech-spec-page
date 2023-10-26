import './App.css';
import AsideHeader from './components/AsideHeader/AsideHeader';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  return (
    <div className="App">
      <section className="main-section">
        <MainHeader />
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
        <AsideHeader />
      </section>
    </div>
  );
};

export default App;
