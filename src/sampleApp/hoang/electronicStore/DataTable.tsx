import styles from './DataTable.module.css';
import { Rating } from '@mui/material';

type DataTableProps = {
    data: [];
    loading: boolean
};

export default function DataTable( { data, loading}: DataTableProps){
    if(loading) return <p>Loading...</p>

    return(
        <table className={styles.table} style={{ width: '100%', borderCollapse: 'collapse'}}>
           <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Price</th>
            </tr>
           </thead>
           <tbody> 
            {data.map((item: any)=> (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                    <td className={styles.actionCell}>1749</td>
                </tr>
            ))}
           </tbody>
        </table>
    );
}