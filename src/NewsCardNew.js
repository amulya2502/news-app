import React from "react";

export default function NewsCardNew({article}) {
    console.log("Article Data:",article)
  return (
    <div className="max-w-sm mx-8 my-4 p-4 shadow-md rounded-md bg-white">
      <img src={article.urlToImage} className="h-72" />
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p>
       {article.description}
       <a href={article.url} target="_blank" className="border-2 border-solid font-bold">Go to main page</a>
        </p>
      <p className="font-bold text-xl my-3">{article.author}</p>
      <p className="font-bold text-xl "> {article.publishedAt}</p>

    </div>
  );
}
