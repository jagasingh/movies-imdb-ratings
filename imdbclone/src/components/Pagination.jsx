import React from 'react';

function Pagination({ handleNext, handleprev, pageNo }) {
  return (
    <div className=" left-0 w-full flex justify-center items-center gap-4 bg-black p-4 text-white z-50">
      
      <button
        onClick={handleprev}
        className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Previous
      </button>

      <button
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
        disabled
      >
        {pageNo}
      </button>

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;