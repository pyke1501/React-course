import styles from './Pagination.module.css';

type PaginationProps = {
  page: number;
  total: number;
  limit: number;
  onChange: (p: number) => void;
};

export default function Pagination({ page, total, limit, onChange}: PaginationProps) {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className={styles.pagination} style={{ marginTop: '1rem'}}>
            <button className={styles.pageButton} disabled={page === 1} onClick={() => onChange(page - 1)}>Prev</button>
            <span className={styles.pageInfo}> Page {page} / {totalPages}</span>
            <button className={styles.pageButton} disabled={page === totalPages} onClick={() => onChange(page + 1)}>Next</button>
        </div>
    )
}