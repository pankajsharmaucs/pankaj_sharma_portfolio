
const Resume = () => (
  <div className="container text-center py-5">
    <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '500px' }}>
      <h2 className="mb-3 text-primary fw-bold">Download My Resume</h2>
      <p className="text-muted mb-4">
        View or download my updated resume to learn more about my experience and skills.
      </p>
      <a
        href="/resume.pdf"
        download
        className="btn btn-outline-primary px-4 py-2"
      >
        <i className="bi bi-download me-2"></i>Download Resume (PDF)
      </a>
    </div>
  </div>
);

export default Resume;
