import React from 'react'

const Book = (props) => {
  const { img, title, authar, children } = props;
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book" onClick={clickHandler}>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{authar}</h4>
      {children}
    </article>
  );
};

export default Book