import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div className="w-full -mt-20">
      {articles.map((article, index) => (
        <div key={index} className={index % 3 === 0 ? 'bg-[#4E8188] hover:bg-[#105963] hover:scale-105 transition ease-in-out duration-300 py-8' : index % 3 === 1 ? 'bg-[#6D6E6E] hover:[#6178a3] hover:scale-105 transition ease-in-out duration-300  no-underline py-8' : 'bg-teal-700'}>
          <Card article={article} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
