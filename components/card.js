import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`} legacyBehavior>
      <a>
        <div id="card" className="container w-full md:w-1/2 lg:w-1/2 mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row overflow-hidden w-full">
            <div className="w-full md:w-96">
              <div className="relative pb-3/4">
                <NextImage image={article.attributes.image} className="absolute object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full md:pl-6 py-4 text-white flex flex-col justify-center space-y-8">
              <h3 className="font-semibold text-3xl leading-tight truncate text-white uppercase hover:no-underline">{article.attributes.title}</h3>
              <p className="mt-1 text-xl">
                {article.attributes.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
