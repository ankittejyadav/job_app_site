import { useState, useMemo } from 'react';
import mockJobs from '../data/mockJobs';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 12;

const allLocations = [...new Set(mockJobs.map((j) => j.location))].sort();
const allJobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const allLevels = ['Entry', 'Mid', 'Senior'];

export default function JobListingPage() {
  const [keyword, setKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);

  const activeJobs = useMemo(() => mockJobs.filter((j) => j.isActive), []);

  const filtered = useMemo(() => {
    let results = activeJobs;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      results = results.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.companyName.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q)
      );
    }

    if (locationFilter) {
      results = results.filter((j) => j.location === locationFilter);
    }
    if (jobTypeFilter) {
      results = results.filter((j) => j.jobType === jobTypeFilter);
    }
    if (levelFilter) {
      results = results.filter((j) => j.experienceLevel === levelFilter);
    }

    if (sortBy === 'recent') {
      results = [...results].sort((a, b) => b.postedAt.localeCompare(a.postedAt));
    }

    return results;
  }, [activeJobs, searchTerm, locationFilter, jobTypeFilter, levelFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(keyword);
    setCurrentPage(1);
  }

  function clearFilters() {
    setKeyword('');
    setSearchTerm('');
    setLocationFilter('');
    setJobTypeFilter('');
    setLevelFilter('');
    setSortBy('recent');
    setCurrentPage(1);
  }

  const hasFilters = searchTerm || locationFilter || jobTypeFilter || levelFilter;

  return (
    <div className="container py-4">
      {/* Search bar */}
      <div className="row mb-4">
        <div className="col">
          <form onSubmit={handleSearch}>
            <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden">
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search by job title, company, or keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className="btn btn-primary-custom px-4" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Filters row */}
      <div className="row g-2 mb-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label small fw-medium text-muted">
            <i className="bi bi-geo-alt me-1"></i>Location
          </label>
          <select
            className="form-select form-select-sm"
            value={locationFilter}
            onChange={(e) => { setLocationFilter(e.target.value); setCurrentPage(1); }}
          >
            <option value="">All Locations</option>
            {allLocations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label small fw-medium text-muted">
            <i className="bi bi-clock me-1"></i>Job Type
          </label>
          <select
            className="form-select form-select-sm"
            value={jobTypeFilter}
            onChange={(e) => { setJobTypeFilter(e.target.value); setCurrentPage(1); }}
          >
            <option value="">All Types</option>
            {allJobTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label small fw-medium text-muted">
            <i className="bi bi-bar-chart me-1"></i>Level
          </label>
          <select
            className="form-select form-select-sm"
            value={levelFilter}
            onChange={(e) => { setLevelFilter(e.target.value); setCurrentPage(1); }}
          >
            <option value="">All Levels</option>
            {allLevels.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label small fw-medium text-muted">
            <i className="bi bi-sort-down me-1"></i>Sort
          </label>
          <select
            className="form-select form-select-sm"
            value={sortBy}
            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
          >
            <option value="recent">Most Recent</option>
            <option value="relevant">Most Relevant</option>
          </select>
        </div>

        <div className="col-md-2 d-flex align-items-end">
          {hasFilters && (
            <button className="btn btn-outline-secondary btn-sm w-100" onClick={clearFilters}>
              <i className="bi bi-x-circle me-1"></i>Clear All
            </button>
          )}
        </div>
      </div>

      {/* Active filters display */}
      {hasFilters && (
        <div className="d-flex flex-wrap gap-2 mb-3">
          {searchTerm && (
            <span className="badge filter-badge">
              Search: "{searchTerm}"
              <button className="btn-close btn-close-white ms-1" style={{ fontSize: '0.5rem' }}
                onClick={() => { setSearchTerm(''); setKeyword(''); setCurrentPage(1); }}></button>
            </span>
          )}
          {locationFilter && (
            <span className="badge filter-badge">
              {locationFilter}
              <button className="btn-close btn-close-white ms-1" style={{ fontSize: '0.5rem' }}
                onClick={() => { setLocationFilter(''); setCurrentPage(1); }}></button>
            </span>
          )}
          {jobTypeFilter && (
            <span className="badge filter-badge">
              {jobTypeFilter}
              <button className="btn-close btn-close-white ms-1" style={{ fontSize: '0.5rem' }}
                onClick={() => { setJobTypeFilter(''); setCurrentPage(1); }}></button>
            </span>
          )}
          {levelFilter && (
            <span className="badge filter-badge">
              {levelFilter}
              <button className="btn-close btn-close-white ms-1" style={{ fontSize: '0.5rem' }}
                onClick={() => { setLevelFilter(''); setCurrentPage(1); }}></button>
            </span>
          )}
        </div>
      )}

      {/* Results count */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="text-muted mb-0 small">
          Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> jobs
          {searchTerm && <> matching "<em>{searchTerm}</em>"</>}
        </p>
      </div>

      {/* Job cards grid */}
      {paginated.length > 0 ? (
        <div className="row g-3 mb-4">
          {paginated.map((job) => (
            <div key={job.jobId} className="col-sm-6 col-lg-4">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-inbox fs-1 text-muted"></i>
          <p className="mt-2 text-muted">No jobs found. Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
