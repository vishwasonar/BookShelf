import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
interface BookProps {
	rows: any;
	bookId: number;
	setBookId: (params: any) => any;
}

const Datatable: React.FC<BookProps> = ({ rows, bookId, setBookId }) => {
	const navigate = useNavigate();

	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "title",
			headerName: "Title",
			width: 250,
		},
		{
			field: "author",
			headerName: "Author",
			width: 250,
		},
		{
			field: "genre",
			headerName: "Genre",
			sortable: false,
			width: 150,
		},
		{
			field: "publication_year",
			headerName: "Publication Year",
			type: "text",
			width: 250,
			headerAlign: "right",
			align: "right",
		},
		{
			field: "Action",
			headerName: "Action",
			type: "number",
			width: 250,
			renderCell: (params: any) => {

				return (
					<div className="flex justify-between items-center">
						<svg
							width="20"
							onClick={() => {
								setBookId(params?.row?.id);
								navigate(`/editbook/${params?.row?.id}`);
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
							className="ml-2"
							onClick={() => setBookId(params?.row?.id)}
							viewBox="0 0 25.6 25.6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20.78 7.02a.256.256 0 0 0 .256-.256V4.676a.256.256 0 0 0-.256-.256H4.864a.256.256 0 0 0-.256.256v2.088c0 .142.114.256.256.256H20.78zm0 1.024H4.864a1.28 1.28 0 0 1-1.28-1.28V4.676a1.28 1.28 0 0 1 1.28-1.28H20.78a1.28 1.28 0 0 1 1.28 1.28v2.088a1.28 1.28 0 0 1-1.28 1.28z" />
							<path d="m20.17 7.616-1.456 16.662a.344.344 0 0 1-.326.298H7.256a.344.344 0 0 1-.326-.298L5.474 7.616a.512.512 0 0 0-1.02.088L5.91 24.366c.06.686.658 1.232 1.344 1.232h11.134a1.366 1.366 0 0 0 1.344-1.232l1.456-16.662a.512.512 0 0 0-1.02-.088zm-9.62-3.74V1.282a.26.26 0 0 1 .256-.258h4.032a.26.26 0 0 1 .256.258v2.594a.512.512 0 1 0 1.024 0V1.282A1.28 1.28 0 0 0 14.838 0h-4.032a1.28 1.28 0 0 0-1.28 1.282v2.594a.512.512 0 1 0 1.024 0z" />
							<path d="M12.4 10.27v11.524a.512.512 0 1 0 1.024 0V10.27a.512.512 0 1 0-1.024 0zm-4.81.044.998 11.524a.512.512 0 0 0 1.02-.088L8.61 10.226a.512.512 0 0 0-1.02.088zm9.446-.088-1 11.524a.512.512 0 0 0 1.02.088l.998-11.524a.512.512 0 0 0-1.02-.088z" />
						</svg>
					</div>
				);
			},
		},
	];
	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows.bookData}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default Datatable;
