import DataTable from './DataTable'
import { Pagination } from '@mui/material'
import { useFetchData } from './useFetchData';

function TodoStore() {

  const { data, loading, page, setPage, total } = useFetchData<any>({
    resource: 'todos',
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

export default TodoStore