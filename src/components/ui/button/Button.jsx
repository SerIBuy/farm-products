import style from "./Button.module.css";

export default function Button({ children, minWidth }) {
  return (
    <button
      type="button"
      style={{ minWidth: minWidth }}
      className={style.button}
    >
      {children}
    </button>
  );
}
