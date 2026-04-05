import { useNavigate } from 'react-router-dom';

const typeBadge = {
  'Full-time': 'badge-fulltime',
  'Part-time': 'badge-parttime',
  'Contract': 'badge-contract',
  'Remote': 'badge-remote',
};

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div
      className="card job-card h-100 border-0 shadow-sm"
      onClick={() => navigate(`/jobs/${job.jobId}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/jobs/${job.jobId}`)}
    >
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="card-title fw-semibold text-primary-custom mb-0">{job.title}</h6>
          <span className={`badge ${typeBadge[job.jobType] || 'bg-secondary'} ms-2 flex-shrink-0`}>
            {job.jobType}
          </span>
        </div>

        <p className="text-muted mb-1 small">
          <i className="bi bi-building me-1"></i>{job.companyName}
        </p>
        <p className="text-muted mb-2 small">
          <i className="bi bi-geo-alt me-1"></i>{job.location}
        </p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="badge bg-light text-dark border">
            <i className="bi bi-bar-chart me-1"></i>{job.experienceLevel}
          </span>
          {job.salaryRange && (
            <span className="text-success-custom small fw-medium">
              {job.salaryRange}
            </span>
          )}
        </div>

        <div className="text-muted mt-2 small">
          <i className="bi bi-calendar3 me-1"></i>Posted {job.postedAt}
        </div>
      </div>
    </div>
  );
}
