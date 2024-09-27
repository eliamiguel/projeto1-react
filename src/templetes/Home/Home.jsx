import React, { Component } from "react";
import "../../../src/styles/global-styles.css";
import { InputSearch } from "../../component/InputText/InputSearch";
import { Post } from "../../component/Post/Post";

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPorpage: 6,
    searchVal: "",
  };

  componentDidMount = async () => {
    const { page, postPorpage } = this.state;
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const fotosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, fotos] = await Promise.all([postResponse, fotosResponse]);

    const postsjson = await posts.json();
    const fotosjson = await fotos.json();

    const postAndFotos = postsjson.map((post, index) => {
      return { ...post, cover: fotosjson[index].url };
    });

    this.setState({
      allPosts: postAndFotos,
      posts: postAndFotos.slice(page, postPorpage),
    });
  };

  handleClick = () => {
    const { posts, page, postPorpage, allPosts } = this.state;
    const nextPage = page + postPorpage;
    const nextPosts = allPosts.slice(page, nextPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleChange = ({ target }) => {
    const text = target.value.toLowerCase();
    this.setState({ searchVal: text });
  };

  render() {
    const { posts, cover, searchVal, allPosts } = this.state;

    const filtrar = !!searchVal
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchVal);
        })
      : posts;

    return (
      <>
        <div className="container-secao">
          <InputSearch valeu={searchVal} onChange={this.handleChange} />
        </div>
        <Post filtrar={filtrar} onClick={this.handleClick} valeu={searchVal} />
      </>
    );
  }
}
