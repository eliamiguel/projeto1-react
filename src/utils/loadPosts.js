export const loadPosts = async () => {
  const { page, postPorpage } = this.state;
  const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const fotosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, fotos] = await Promise.all([postResponse, fotosResponse]);

  const postsjson = await posts.json();
  const fotosjson = await fotos.json();

  const postAndFotos = postsjson.map((post, index) => {
    return { ...post, cover: fotosjson[index].url };
  });

  return postAndFotos;
};
