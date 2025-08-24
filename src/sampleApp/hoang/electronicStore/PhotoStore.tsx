import DataTable from './DataTable'
import { Pagination } from '@mui/material'
import { useFetchData } from './useFetchData';

function PhotoStore() {

  const { data, loading, page, setPage, total } = useFetchData<any>({
    resource: 'photos',
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

export default PhotoStore