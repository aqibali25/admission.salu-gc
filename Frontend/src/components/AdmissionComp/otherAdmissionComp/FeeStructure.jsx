import React from "react";

const FeeStructure = () => {
  return (
    <div className="formConitainer min-h-75 col-md-12 p-4">
      <h2 className="mb-1" style={{ color: "#e9c545" }}>
        Fee Structure
      </h2>

      <hr />

      {/* Programs Overview */}
      <div className="programs-section mb-4">
        <h5 className="mb-3">Programs Offered</h5>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <div className="text-center">
              <h6 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>
                BBA
              </h6>
              <p className="text-muted small mb-1">4-Year Program</p>
              <small className="text-primary">Merit & Self-Finance</small>
            </div>
          </div>
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <div className="text-center">
              <h6 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>
                BS Computer Science
              </h6>
              <p className="text-muted small mb-1">4-Year Program</p>
              <small className="text-primary">Merit & Self-Finance</small>
            </div>
          </div>
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <div className="text-center">
              <h6 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>
                BS English
              </h6>
              <p className="text-muted small mb-1">Language & Literature</p>
              <small className="text-primary">Merit & Self-Finance</small>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Categories */}
      <div className="fee-categories mb-4">
        <h5 className="mb-3">Fee Categories</h5>
        <div className="d-flex flex-wrap gap-3">
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>Admission Fee</span>
              <small className="text-muted">Applicable</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>Tuition Fee</span>
              <small className="text-muted">Per Semester</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span>University Development Fund</span>
              <small className="text-muted">Annual</small>
            </div>
          </div>
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>Examination & Form Fee</span>
              <small className="text-muted">Per Semester</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>Sports Fee</span>
              <small className="text-muted">Annual</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>Library Fee</span>
              <small className="text-muted">Annual</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span>Identity Card Fee</span>
              <small className="text-muted">One Time</small>
            </div>
          </div>
        </div>
        <div
          className="mt-3 p-3"
          style={{ background: "#e3f2fd", borderRadius: "6px" }}
        >
          <small className="text-muted">
            <strong>Note:</strong> Exact fee amounts vary by program, year of
            study, and merit/self-finance category. Please contact the
            admissions office for detailed fee breakdown.
          </small>
        </div>
      </div>

      {/* Refund Policy */}
      <div className="refund-policy mb-4">
        <h5 className="mb-3">Refund Policy</h5>
        <div className="d-flex flex-wrap gap-3">
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <h6 className="mb-3" style={{ color: "#e9c545" }}>
              Semester System
            </h6>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>100% Refund</span>
              <small className="text-success">Up to 7th day</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>50% Refund</span>
              <small className="text-warning">8th - 15th day</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span>No Refund</span>
              <small className="text-danger">After 16th day</small>
            </div>
          </div>
          <div
            className="flex-fill min-w-300 p-3"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "300px",
            }}
          >
            <h6 className="mb-3" style={{ color: "#e9c545" }}>
              Annual System
            </h6>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>100% Refund</span>
              <small className="text-success">Up to 15th day</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>50% Refund</span>
              <small className="text-warning">16th - 30th day</small>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span>No Refund</span>
              <small className="text-danger">After 31st day</small>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fees */}
      <div className="additional-fees mb-4">
        <h5 className="mb-3">Additional Fees</h5>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <div
            className="flex-fill min-w-200 p-3 text-center"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "200px",
            }}
          >
            <h6 className="text-muted mb-1">Duplicate ID Card</h6>
            <h6 className="text-primary mb-0">Rs. 800/-</h6>
          </div>
          <div
            className="flex-fill min-w-200 p-3 text-center"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "200px",
            }}
          >
            <h6 className="text-muted mb-1">Pre-Entry Test Fee</h6>
            <h6 className="text-primary mb-0">Rs. 2500/-</h6>
          </div>
          <div
            className="flex-fill min-w-200 p-3 text-center"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #eee",
              flexBasis: "200px",
            }}
          >
            <h6 className="text-muted mb-1">Prospectus</h6>
            <h6 className="text-primary mb-0">Rs. 1,000/-</h6>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="important-notes">
        <div
          className="p-3"
          style={{
            background: "#fff3cd",
            borderRadius: "8px",
            border: "1px solid #ffeaa7",
          }}
        >
          <h6 className="mb-2" style={{ color: "#856404" }}>
            Important Notes
          </h6>
          <hr className="my-2" />
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-start">
              <span style={{ color: "#856404", marginRight: "8px" }}>•</span>
              <small style={{ color: "#856404" }}>
                The University reserves the right to revise the fee structure
                without prior notice
              </small>
            </div>
            <div className="d-flex align-items-start">
              <span style={{ color: "#856404", marginRight: "8px" }}>•</span>
              <small style={{ color: "#856404" }}>
                Fees vary based on program, year of study, and
                merit/self-finance category
              </small>
            </div>
            <div className="d-flex align-items-start">
              <span style={{ color: "#856404", marginRight: "8px" }}>•</span>
              <small style={{ color: "#856404" }}>
                Transport and hostel facilities are not guaranteed for students
              </small>
            </div>
            <div className="d-flex align-items-start">
              <span style={{ color: "#856404", marginRight: "8px" }}>•</span>
              <small style={{ color: "#856404" }}>
                All fees are subject to change as per University policies
              </small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .min-w-300 {
            flex-basis: 100% !important;
            min-width: 100% !important;
          }
          .min-w-200 {
            flex-basis: calc(50% - 12px) !important;
            min-width: calc(50% - 12px) !important;
          }
        }
        @media (max-width: 576px) {
          .min-w-200 {
            flex-basis: 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeeStructure;
