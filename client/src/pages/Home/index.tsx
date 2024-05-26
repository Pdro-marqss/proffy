// Imagens
import logoImg from '../../assets/logo.svg';
import homeImg from '../../assets/landing.svg';

// Icones
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

// Css
import './styles.css';

export function Home() {
  return (
    <div id="page-home">
      <div id="page-home-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={homeImg} alt="Desenho de pessoas usando celulares e notebooks como se estivessem tento aulas online" className='hero-image' />

        <div className="buttons-container">
          <a href="#" className='study'>
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="#" className='give-classes'>
            <img src={giveClassesIcon} alt="Dar aulas" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}