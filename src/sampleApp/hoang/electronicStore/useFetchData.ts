import { useEffect, useState } from "react";

export function useFetchData<T>(url: string, limit:number) {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}?_limit=${limit}&_page=${page}`).then(res => {
            const totalCount = res.headers.get('x-total-count');
            if(totalCount) setTotal(Number(totalCount));
            return res.json();
        })
        .then(json => {
            console.log('====================================');
            console.log("API Response: " + JSON.stringify(json, null, 2));
            console.log('====================================');
           setData(json)
        })
        .finally(()=> setLoading(false));
    }, [url, limit, page]);

    return { data, loading, page, setPage, total }
}