import "../../../src/component/PostCard/styles.css";

export const PostCard = ({ filtrar }) => {
  return (
    <div className="post-content">
      {filtrar.map((post) => (
        <div className="posts">
          <img src={post.cover} alt={post.title} />
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
