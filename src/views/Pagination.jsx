import React from 'react';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

const Pagination = ({
  pageNumber,
  totalItem,
  parPage,
  showItem,
  setPageNumber,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  console.log(totalPage, 'totalPage');

  let startPage = pageNumber;

  console.log(startPage, 'startPage');

  let dif = totalPage - pageNumber;

  console.log(dif, 'dif');

  if (dif <= showItem) {
    startPage = totalPage - showItem + 1;
  }
  if (startPage <= 0) {
    startPage = 1;
  }
  let endPage = startPage + showItem - 1;

  console.log(endPage, 'endPage');

  if (endPage > totalPage) {
    endPage = totalPage;
  }

  const createButton = () => {
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer ${
            pageNumber === i
              ? 'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white'
              : 'bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]'
          }`}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdKeyboardDoubleArrowLeft />
        </li>
      )}
      {createButton()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
