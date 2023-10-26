import './Main.scss';
import AsideHeader from '../AsideHeader/AsideHeader';
import MainHeader from '../MainHeader/MainHeader';

const Main = () => {
  return (
    <div className="main">
      <div className="main__left-container">
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
      </div>
      <div className="main__right-container">
        <section className="aside-section" aria-label="Контакты">
          <AsideHeader />
        </section>
      </div>
    </div>
  );
};

export default Main;
