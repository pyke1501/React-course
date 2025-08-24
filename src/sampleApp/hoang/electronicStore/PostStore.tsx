import DataTable from './DataTable'
import { Pagination } from '@mui/material'
import { useFetchData } from './useFetchData';

function PostStore() {

  const { data, loading, page, setPage, total } = useFetchData<any>({
    resource: 'posts',
    limit: 5
  });
  
  return (
    <>
      <DataTable data={data} loading={loading} />
      <Pagination
        page={page}
        total={total}
        // onChange={setPage}
      />
    </>
  )
}

export default PostStore