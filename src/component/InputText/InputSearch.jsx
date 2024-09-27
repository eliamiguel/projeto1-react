import "../../../src/component/InputText/styles.css";

export const InputSearch = ({ searchVal, onChange }) => {
  return (
    <div className="inputSearch">
      <input
        type="search"
        value={searchVal}
        onChange={onChange}
        placeholder="Procure por titulo"
      />
    </div>
  );
};
