import React from "react";
import ReactDOM from "react-dom";
// import App from './App.js';
import "./index.css";
let hope = [
  {
    img: "https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg",
    author: "bhavin sheth",
  },
  {
    img: "https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg",
    author: "hello world ",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {hope.map((item) => {
        // console.log(item);
        return <Book {...item}></Book>;
      })}
    </section>
  );
}

let Book = ({ img, author }) => {
  console.log({ img });
  return (
    <article className="card">
      <img src={img} alt="" />
      <h3>{author}</h3>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
