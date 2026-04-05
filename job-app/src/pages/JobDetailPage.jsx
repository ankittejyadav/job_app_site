import { useParams, useNavigate } from 'react-router-dom';
import mockJobs from '../data/mockJobs';

export default function JobDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = mockJobs.find((j) => j.jobId === id);

  if (!job) {
    return (
      <div className="container py-5 text-center">
        <i className="bi bi-exclamation-circle fs-1 text-muted"></i>
        <h4 className="mt-3">Job not found</h4>
        <button className="btn btn-primary-custom mt-3" onClick={() => navigate('/jobs')}>
          <i className="bi bi-arrow-left me-2"></i>Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <button
        className="btn btn-outline-secondary btn-sm mb-3"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left me-1"></i>Back to Results
      </button>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          {/* Header */}
          <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
            <div>
              <h2 className="fw-bold text-primary-custom mb-1">{job.title}</h2>
              <p className="fs-5 text-muted mb-2">
                <i className="bi bi-building me-1"></i>{job.companyName}
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark border">
                  <i className="bi bi-geo-alt me-1"></i>{job.location}
                </span>
                <span className="badge bg-light text-dark border">
                  <i className="bi bi-clock me-1"></i>{job.jobType}
                </span>
                <span className="badge bg-light text-dark border">
                  <i className="bi bi-bar-chart me-1"></i>{job.experienceLevel}
                </span>
                {job.salaryRange && (
                  <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle">
                    <i className="bi bi-currency-dollar me-1"></i>{job.salaryRange}
                  </span>
                )}
              </div>
            </div>
            <button className="btn btn-primary-custom btn-lg mt-3 mt-md-0">
              <i className="bi bi-send me-2"></i>Apply Now
            </button>
          </div>

          <hr />

          {/* Posted date */}
          <p className="text-muted small mb-4">
            <i className="bi bi-calendar3 me-1"></i>Posted on {job.postedAt}
            {!job.isActive && (
              <span className="badge bg-danger ms-2">No longer accepting applications</span>
            )}
          </p>

          {/* Description */}
          <section className="mb-4">
            <h5 className="fw-semibold text-primary-custom mb-3">
              <i className="bi bi-file-text me-2"></i>Description
            </h5>
            <p className="text-body-secondary lh-lg">{job.description}</p>
          </section>

          {/* Responsibilities */}
          <section className="mb-4">
            <h5 className="fw-semibold text-primary-custom mb-3">
              <i className="bi bi-list-check me-2"></i>Responsibilities
            </h5>
            <div className="text-body-secondary">
              {job.responsibilities.split('\n').map((line, i) => (
                <p key={i} className="mb-1">{line}</p>
              ))}
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-4">
            <h5 className="fw-semibold text-primary-custom mb-3">
              <i className="bi bi-award me-2"></i>Qualifications
            </h5>
            <div className="text-body-secondary">
              {job.qualifications.split('\n').map((line, i) => (
                <p key={i} className="mb-1">{line}</p>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="text-center pt-3 border-top">
            <button className="btn btn-primary-custom btn-lg px-5">
              <i className="bi bi-send me-2"></i>Apply for this Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
