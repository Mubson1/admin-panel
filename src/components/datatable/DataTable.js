import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const DataTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user',
            headerName: 'User',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className='cellWithImg'>
                        <img className='cellImg' src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 230 
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 100,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
                )
            }
        },
    ];

    const rows = [
        { id: 1, username: 'Snow', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "active", email: 'Jon@gmail.com', age: 35 },
        { id: 2, username: 'Lannister', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "passive", email: 'Cersei@gmail.com', age: 42 },
        { id: 3, username: 'Lannister', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "active", email: 'Jaime@gmail.com', age: 45 },
        { id: 4, username: 'Stark', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "pending", email: 'Arya@gmail.com', age: 16 },
        { id: 5, username: 'Targaryen', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "active", email: 'Daenerys@gmail.com', age: 22 },
        { id: 6, username: 'Melisandre', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "passive", email: 'Melisandre@gmail.com', age: 150 },
        { id: 7, username: 'Clifford', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "active", email: 'Ferrara@gmail.com', age: 44 },
        { id: 8, username: 'Frances', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "passive", email: 'Rossini@gmail.com', age: 36 },
        { id: 9, username: 'Roxie', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "pending", email: 'Harvey@gmail.com', age: 65 },
        { id: 10, username: 'Roxie', img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",status: "pending", email: 'Harvey@gmail.com', age: 65 },
    ];
      
    



    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to='/users/test' style={{textDecoration:"none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ]

    return (
        <div className='datatable'>
            <div className='datatableTitle'>
                Add New User
                <Link to="/users/new" className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable
