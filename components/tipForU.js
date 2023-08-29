import React from 'react';

const TipComponent = ({ block }) => {
  return (
    block.tipTitle && block.tipText && block.tipImage && (
      <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1 w-1/2">
            <img className="w-full pr-2" src={getStrapiMedia(block.tipImage)} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{block.tipTitle}</h2>
            <p className="text-sm">{block.tipText}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default TipComponent;
