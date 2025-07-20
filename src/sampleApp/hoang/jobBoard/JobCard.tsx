import React from 'react';
import './JobCard.css'; // Import CSS cho JobCard

function JobCard({ job }) {
  // Chuyển đổi timestamp sang định dạng ngày tháng dễ đọc
  const date = new Date(job.time * 1000).toLocaleString();

  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-meta">
        By <span className="job-poster">{job.by}</span> &bull; <span className="job-date">{date}</span>
      </p>
      {/* Bạn có thể thêm các thông tin khác nếu muốn, ví dụ: <p>{job.text}</p> */}
    </div>
  );
}

export default JobCard;