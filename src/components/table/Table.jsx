import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'


const Tables = () => {
  
  const rows = [
    {
      id:11111,
      product: "Bag",
      img: "https://i.ibb.co/BgNhPBW/bag.jpg",
      customer: "CLARISSE KOUAKOU",
      date: "30 May",
      amount: 758,
      method: "Cash on Delevery",
      status: "Pending"
    },
    {
      id:22222,
      product: "Wine",
      img: "https://i.ibb.co/4f8619R/wine.png",
      customer: "JEAN LUC YAO",
      date: "03 May",
      amount: 258,
      method: "Cash on Delevery",
      status: "Approved"
    },
    {
      id:33333,
      product: "Shoes",
      img: "https://i.ibb.co/Xz9NBdT/shoes.jpg",
      customer: "MIKA LOBOSS",
      date: "25 June",
      amount: 158,
      method: "Cash on Delevery",
      status: "Pending"
    },
    {
      id:4444,
      product: "VESTON",
      img: "https://i.ibb.co/BwMBCQj/veston.jpg",
      customer: "BAUDOIN YAO",
      date: "14 July",
      amount: 758,
      method: "Cash on Delevery",
      status: "Approved"
    },
    {
      id:55555,
      product: "WATCH",
      img: "https://i.ibb.co/18BnWBL/rolex.jpg",
      customer: "MICHEL KOUADIO",
      date: "28 DECEMBER",
      amount: 1758,
      method: "Cash on Delevery",
      status: "Pending"
    },
    {
      id:66666,
      product: "HEAD PHONE",
      img: "https://i.ibb.co/SdmvmQd/headphone.png",
      customer: "SERGE KOKOUA",
      date: "30 NOVEMBER",
      amount: 58,
      method: "Cash on Delevery",
      status: "Approved"
    },
  ]
  
  return (
    <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>Tracking ID</TableCell>
            <TableCell className='tablecell'>Product</TableCell>
            <TableCell className='tablecell'>Customer</TableCell>
            <TableCell className='tablecell'>Date</TableCell>
            <TableCell className='tablecell'>Amount</TableCell>
            <TableCell className='tablecell'>Payment Method</TableCell>
            <TableCell className='tablecell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className='tablecell'>
                 <div className="cellWrapper">
                    <img src={row.img} alt=""  className='image' />
                    {row.product}
                 </div>
              </TableCell>
              <TableCell className='tablecell'>{row.customer}</TableCell>
              <TableCell className='tablecell'>{row.date}</TableCell>
              <TableCell className='tablecell'>{row.amount}</TableCell>
              <TableCell className='tablecell'>{row.method}</TableCell>
              <TableCell className='tablecell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables