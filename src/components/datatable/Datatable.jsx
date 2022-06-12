import  './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) =>{
        return(
          <div className="cellAction">
                <Link to="/users/test" style={{textDecoration: "none"}}>
                  <div className="viewButton">view</div>
                </Link>
                <div className="deleteButton">delete</div>
            </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new User
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
            Add User
        </Link>

      </div>
        <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable