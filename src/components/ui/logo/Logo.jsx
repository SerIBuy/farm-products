import './Logo.css';
import logo from '../../../assets/logo.svg';

export default function Logo() {
    return (
        <a href="/" className="logo__link">
            <img src={logo} alt="Логотип" />
            <span className="logo__text">Фермерские продукты</span>
        </a>
    )
}