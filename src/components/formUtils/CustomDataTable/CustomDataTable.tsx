import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridToolbar, GridValueGetterParams} from '@mui/x-data-grid';
import React from "react";
import {CustomNoRowsOverlay} from "./CustomNoRowsOverlay";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID'},
    {
        field: 'firstName',
        headerName: 'First name',
        flex:1
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        flex:1
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'string',
        flex:1
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        flex:1,
        sortable: false,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

interface Props {

}

const CustomDataTable:React.FC<Props> = () => {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    noRowsOverlay: CustomNoRowsOverlay,
                    toolbar: GridToolbar,
                }}
                pageSizeOptions={[5,10,15]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export {CustomDataTable}