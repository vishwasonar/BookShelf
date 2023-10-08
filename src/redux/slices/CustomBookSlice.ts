// src/features/CustomBookSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Book {
    id: number;
    title: string;
    author: string;
    publication_year: number;
    genre: string;
}

interface BooksState {
    bookData: Book[];
    itemsPerPage: number;
    currentPage: number;
    pageSize: number;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}


const initialState: BooksState = {
    bookData: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            publication_year: 1925,
            genre: "Fiction",
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publication_year: 1960,
            genre: "Fiction",
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            publication_year: 1949,
            genre: "Dystopian",
        },

        {
            id: 4,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            publication_year: 1951,
            genre: "Fiction",
        },
        {
            id: 5,
            title: "Moby-Dick",
            author: "Herman Melville",
            publication_year: 1851,
            genre: "Adventure",
        },
        {
            id: 6,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            publication_year: 1937,
            genre: "Fantasy",
        },
        {
            id: 7,
            title: "The Hunger Games",
            author: "Suzanne Collins",
            publication_year: 2008,
            genre: "Dystopian",
        },
        {
            id: 8,
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            publication_year: 1997,
            genre: "Fantasy",
        },
        {
            id: 9,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            author: "J.R.R. Tolkien",
            publication_year: 1954,
            genre: "Fantasy",
        },
        {
            id: 10,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            publication_year: 1813,
            genre: "Classic",
        },
    ],
    itemsPerPage: 5,
    currentPage: 1,
    pageSize: 5, // Set your desired page size
    sortBy: 'title', // Default sorting field
    sortOrder: 'asc', // Default sorting order
};



const CustomBookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.bookData.push(action.payload);
        },
        editBook: (state, action: PayloadAction<Book>) => {

            const index = state.bookData.findIndex(
                (book) => book.id === action.payload.id
            );
            if (index !== -1) {
                state.bookData[index] = action.payload;
            }
        },
        deleteBook: (state, action: PayloadAction<number>) => {
            state.bookData = state.bookData.filter(
                (book) => book.id !== action.payload
            );
        },
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.bookData = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.sortOrder = action.payload;
        },
    },
});

export const {
    setBooks,
    setCurrentPage,
    setPageSize,
    setSortBy,
    setSortOrder,
} = CustomBookSlice.actions;

export const selectBooks = (state: RootState) => state.CustomBookReducer.bookData;
export const selectCurrentPage = (state: RootState) => state.CustomBookReducer.currentPage;
export const selectPageSize = (state: RootState) => state.CustomBookReducer.pageSize;
export const selectSortBy = (state: RootState) => state.CustomBookReducer.sortBy;
export const selectSortOrder = (state: RootState) => state.CustomBookReducer.sortOrder;

export const CustomBookReducer = CustomBookSlice.reducer;
