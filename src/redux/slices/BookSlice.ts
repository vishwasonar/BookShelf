import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
	id: number;
	title: string;
	author: string;
	publication_year: number;
	genre: string;
}

interface BooksState {
	bookData: Book[];
	currentPage: number;
	itemsPerPage: number;
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
	currentPage: 1,
	itemsPerPage: 10, // Change this as needed
};

const BookSlice = createSlice({
	name: "books",
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
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
	},
});

export const { addBook, editBook, deleteBook, setCurrentPage } =
	BookSlice.actions;

export const BookSliceReducer = BookSlice.reducer;
