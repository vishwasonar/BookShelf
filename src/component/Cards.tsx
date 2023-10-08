import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteBook } from "../redux/slices/BookSlice";

interface CardComponentProps {
	books: any;
}

const Cards: React.FC<CardComponentProps> = ({ books }) => {

	const navigate = useNavigate();

	const addBook = () => {
		navigate(`/addBook`, {
			state: {
				page: "/cards"
			}
		});
	};

	const dispatch = useDispatch()

	return (
		<div>
			<div className="flex justify-center items-center">
				<div className="text-center">
					<p className="flex justfy-center">This is custom card page with manual pagination</p>
				</div>
				{books.length > 0 && (

					<div className="flex flex-wrap justify-end ml-5">
						<span
							onClick={addBook}
							className="text-white pl-5 cursor-pointer pr-5 pt-1 pb-1 bg-blue-700 rounded"
						>
							Add Book
						</span>
					</div>
				)}
			</div>


			<div className="flex flex-wrap justify-center mt-5">
				{books?.length ? (
					books.map((item: any, key: number) => {
						return (
							<div
								key={item?.id}
								className="p-4 w-96 cursor-pointer"
							// onClick={() => redirectToDetailPage(item?.id)}
							>


								<div className="flex h-full shadow-lg border p-5 flex-col">
									<div className="flex flex-col justify-between flex-grow mb-5">
										<div className="flex justify-between">
											<div className="flex w-full justify-between">
												<p className="text-black font-bold">{item?.title}</p>
												<div className="flex justify-end">
													<svg
														width="20"
														onClick={() => {
															// setBookId(params?.row?.id);
															navigate(`/editbook/${item?.id}`, {
																state: {
																	page: "/cards"
																}
															});
														}}
														className="cursor-pointer"
														height="20"
														viewBox="0 0 0.6 0.6"
														fill="blue"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M.407.057a.025.025 0 0 1 .035 0l.1.1a.025.025 0 0 1 0 .035L.217.517A.025.025 0 0 1 .2.525H.1A.025.025 0 0 1 .075.5V.4A.025.025 0 0 1 .082.382l.25-.25.075-.075zM.35.185.125.41v.065H.19L.415.25.35.185zm.1.029L.49.175.425.11l-.04.04.065.065z"
															fill="blue"
														/>
													</svg>
													<svg
														width="20"
														height="20"
														fill="red"
														className="ml-2 cursor-pointer"
														onClick={async () => {
															await dispatch(deleteBook(item.id))
															toast.success("Book deleted")
														}}
														viewBox="0 0 25.6 25.6"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M20.78 7.02a.256.256 0 0 0 .256-.256V4.676a.256.256 0 0 0-.256-.256H4.864a.256.256 0 0 0-.256.256v2.088c0 .142.114.256.256.256H20.78zm0 1.024H4.864a1.28 1.28 0 0 1-1.28-1.28V4.676a1.28 1.28 0 0 1 1.28-1.28H20.78a1.28 1.28 0 0 1 1.28 1.28v2.088a1.28 1.28 0 0 1-1.28 1.28z" />
														<path d="m20.17 7.616-1.456 16.662a.344.344 0 0 1-.326.298H7.256a.344.344 0 0 1-.326-.298L5.474 7.616a.512.512 0 0 0-1.02.088L5.91 24.366c.06.686.658 1.232 1.344 1.232h11.134a1.366 1.366 0 0 0 1.344-1.232l1.456-16.662a.512.512 0 0 0-1.02-.088zm-9.62-3.74V1.282a.26.26 0 0 1 .256-.258h4.032a.26.26 0 0 1 .256.258v2.594a.512.512 0 1 0 1.024 0V1.282A1.28 1.28 0 0 0 14.838 0h-4.032a1.28 1.28 0 0 0-1.28 1.282v2.594a.512.512 0 1 0 1.024 0z" />
														<path d="M12.4 10.27v11.524a.512.512 0 1 0 1.024 0V10.27a.512.512 0 1 0-1.024 0zm-4.81.044.998 11.524a.512.512 0 0 0 1.02-.088L8.61 10.226a.512.512 0 0 0-1.02.088zm9.446-.088-1 11.524a.512.512 0 0 0 1.02.088l.998-11.524a.512.512 0 0 0-1.02-.088z" />
													</svg>
												</div>
											</div>

										</div>
										<div className="flex w-full justify-between">
											<p className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mt-1">{item?.genre}</p>

										</div>
									</div>
									<hr />
									<div className="flex justify-between mt-5">
										<div>
											<p className="text-black">
												{item?.author}
											</p>
										</div>
										<div>
											<p className="text-black text-right">
												{item?.publication_year}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div
					>
						<div className="flex justify-center flex-col">
							<h1 className="text-2xl font-bold">
								No Data Found
							</h1>
							<span
								onClick={addBook}
								className="cursor-pointer text-blue-700 text-center underline pl-5 pr-5 pt-1 pb-1 rounded"
							>
								Add Book
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cards;
