import "../../../src/component/Button/styles.css";

export const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Carregar +
    </button>
  );
};
