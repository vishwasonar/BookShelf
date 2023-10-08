// src/components/BookTable.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Cards from '../component/Cards';
import Navbar from '../component/Navbar';
import {
    selectBooks,
    selectCurrentPage,
    selectPageSize,
    selectSortBy,
    selectSortOrder,
    setBooks,
    setCurrentPage,
    setPageSize,
    setSortBy,
    setSortOrder,
} from '../redux/slices/CustomBookSlice';

const BookTable: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    const currentPage = useSelector(selectCurrentPage);
    const pageSize = useSelector(selectPageSize);
    const sortBy = useSelector(selectSortBy);
    const sortOrder = useSelector(selectSortOrder);

    interface Book {
        id: number;
        title: string;
        author: string;
        genre: string;
        publication_year: any
        // Add other properties as needed
    }

    const bookData = useSelector((state: any) => state.CustomBookReducer.bookData);



    const compare = (a: Book, b: Book) => {
        const sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1;

        if (sortBy === 'title') {
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
        } else if (sortBy === 'author') {
            return a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 1;
        } else if (sortBy === 'genre') {
            return a.genre.toLowerCase() < b.genre.toLowerCase() ? -1 : 1;
        }

        // Default case: return 0 for no change in order
        return 0;
    };


    const sortedBooks = [...bookData].sort(compare);


    // Pagination
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedBooks = sortedBooks.slice(startIndex, endIndex);




    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("isUserLoggedIn");
        navigate("/");
    };

    const handleHomePage = () => {
        navigate("/dashboard");
    };

    const handleCardsPage = () => {
        navigate("/cards");
    };


    return (
        <>
            <div className="flex flex-col h-screen justify-between">
                <Navbar
                    handleLogout={handleLogout}
                    handleHomePage={handleHomePage}
                    handleCardsPage={handleCardsPage}
                />
                <div className='mb-5'>
                    <Cards books={paginatedBooks} />
                </div>
                <footer className='sticky bottom-0 '>
                    <div className="w-full sticky bottom-0 blue-button flex justify-end bg-white px-4 py-3 flex items-center border-t border-gray-200 sm:px-6">
                        <span className="mr-5">{`Page ${currentPage}`}</span>
                        <button className={currentPage === 1 ? "text-gray-200 mr-5" : "mr-5 text-blue-400 underline"} disabled={currentPage === 1} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                            Previous
                        </button>
                        <button disabled={paginatedBooks.length === 0} className={paginatedBooks.length >= 1 ? "mr-5 text-blue-400 underline" : "text-gray-200 mr-5"} onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                            Next
                        </button>
                        <select
                            value={pageSize}
                            className="text-black"
                            onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
                        >
                            <option value={5}>5 per page</option>
                            <option value={10}>10 per page</option>
                            <option value={15}>15 per page</option>
                        </select>
                    </div>

                </footer>
            </div>
        </>
    );
};

export default BookTable;
