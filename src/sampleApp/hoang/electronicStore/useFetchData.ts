import { useEffect, useState } from "react";

interface FetchProps {
    limit: number,
    resource: string
}

export function useFetchData<T>({
    limit,
    resource
}: FetchProps) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=${limit}&_page=${page}`)
        .then(res => {
            const totalCount = res.headers.get('x-total-count');
            if(totalCount) setTotal(Number(totalCount));
            return res.json();
        })
        .then(json => {
            console.log('====================================');
            console.log('====================================', json, typeof json);
            const data = Array.isArray(json) ? json : [];
            setData(data)
        })
        .catch(() => {
            setData([])
        })
        .finally(()=> setLoading(false));
    }, [limit, page, resource]);


    return { data, loading, page, setPage, total }
}