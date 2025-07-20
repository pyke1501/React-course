import React, { useState, useEffect, useCallback } from 'react';
import JobCard from './JobCard';
import './hoangJobBoard.css';

const JOBS_PER_PAGE = 6;

interface IJob {
  "by": string,
  "id": number,
  "score": number,
  "time": number,
  "title": string,
  "type": string,
  "url": string,
}

function HoangJobBoard() {
    const [jobIds, setJobIds] = useState<number[]>([]);
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    console.log('jobs: ', jobs)

    // Hàm để lấy danh sách ID của các công việc
    const fetchJobIds = useCallback(async () => {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
      }
        const data = await response.json();
        setJobIds(data);
      } catch (err) {
        setError('Không thể tải danh sách ID công việc');
        console.error('Lỗi khi fetch job IDs:', err);
      } finally {
        setLoading(false);
      }
    }, []);

    // Hàm để lấy chi tiết của một công việc
  const fetchJobDetails = useCallback(async (id: number) => {
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Lỗi khi fetch chi tiết công việc ${id}:`, err);
      return null;
    }
  }, []);

  // Tải các công việc ban đầu hoặc khi người dùng click "Load more"
  const loadJobs = useCallback(async (startIndex: number) => {
    setLoading(true);
    const endIndex = startIndex + JOBS_PER_PAGE;
    const idsToLoad = jobIds.slice(startIndex, endIndex);

    if (idsToLoad.length === 0 && startIndex > 0) { // Đã tải hết
      setHasMore(false);
      setLoading(false);
      return;
    }

    const jobPromises = idsToLoad.map(id => fetchJobDetails(id));
    const newJobs = (await Promise.all(jobPromises)).filter(job => job !== null);

    setJobs(prevJobs => [...prevJobs, ...newJobs]);
    setCurrentPage(prevPage => prevPage + 1);

    // if (endIndex >= jobIds.length) { // Kiểm tra xem còn công việc để tải không
    //   setHasMore(false);
    // }
    setLoading(false);
  }, [jobIds, fetchJobDetails]);

  // Effect để tải ID các công việc khi component mount
  useEffect(() => {
    fetchJobIds();
  }, [fetchJobIds]);

  // Effect để tải các công việc đầu tiên sau khi có jobIds
  // useEffect(() => {`
  //   if (jobIds.length > 0 && jobs.length === 0 && !loading) {
  //     loadJobs(0);
  //   }
  // }, [jobIds, jobs.length, loading, loadJobs]);
  useEffect(() => {
    if (jobIds.length > 0) {
      loadJobs(0);
    }
  }, [jobIds]);

  const handleLoadMore = () => {
    loadJobs(currentPage * JOBS_PER_PAGE);
  };

  if (error) {
    return <div className="job-board-container error">Lỗi: {error}</div>;
  }

  // Tùy chỉnh phần loading spinner hoặc text
  if (loading && jobs.length === 0) {
    return <div className="job-board-container loading">Đang tải các công việc...</div>;
  }

  return (
    <div className="job-board-container">
      <h1>Jobs Board</h1>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {hasMore && !loading && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Tải thêm
        </button>
      )}
      {loading && jobs.length > 0 && <div className="loading-more">Đang tải thêm...</div>}
      {!hasMore && jobs.length > 0 && <div className="no-more-jobs">Đã tải hết công việc!</div>}
    </div>
  );
}

export default HoangJobBoard;