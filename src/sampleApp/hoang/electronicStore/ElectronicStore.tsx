import { useEffect, useState } from "react";
import { useFetchData } from "./useFetchData";
import TabsMenu from "./TabsMenu";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

export default function ElectronicStore() {
  const [resource, setResource] = useState('posts');
  const limit = 10;

  const { data, loading, page, setPage, total } = useFetchData<any>(
    `https://jsonplaceholder.typicode.com/${resource}`,
    limit
  );

useEffect(() => {
  console.log("Resource changed:", resource);
}, [resource]);

   return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <TabsMenu onChange={setResource} />
      <DataTable data={data} loading={loading} />
      <Pagination
        page={page}
        total={total}
        limit={limit}
        onChange={setPage}
      />
    </div>
  );
}