import "../../../src/styles/global-styles.css";

import { PostCard } from "../../component/PostCard/PostCard";
import { Button } from "../../component/Button/Button";
export const Post = ({ filtrar, onClick, searchVal }) => {
  return (
    <section className="container">
      {filtrar.length > 0 && <PostCard filtrar={filtrar} />}
      {filtrar.length === 0 && (
        <p>Não existe posts que tenha o texto inserido</p>
      )}
      <div className="button-container">
        {!searchVal && <Button onClick={onClick} />}
      </div>
    </section>
  );
};
