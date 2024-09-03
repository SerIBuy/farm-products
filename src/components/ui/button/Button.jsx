import './Button.css';

export default function Button({ children, minWidth }) {
    return (
        <button type="button" style={{ minWidth: minWidth }} className="button">{children}</button>
    )
}