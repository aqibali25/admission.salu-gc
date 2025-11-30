import { FaCloudDownloadAlt } from "react-icons/fa";
import SamplePaper1 from "../../../assets/Prospectus-salu-gc-2022.pdf";
import SamplePaper2 from "../../../assets/Prospectus-salu-gc-2022.pdf";
import SamplePaper3 from "../../../assets/Prospectus-salu-gc-2022.pdf";

const SamplePapers = () => {
  // Sample papers data - you can add more here
  const samplePapers = [
    {
      id: 1,
      name: "Sample Paper 1 ",
      file: SamplePaper1,
      filename: "sample-paper-1.pdf",
    },
    {
      id: 2,
      name: "Sample Paper 2 ",
      file: SamplePaper2,
      filename: "sample-paper-2.pdf",
    },
    {
      id: 3,
      name: "Sample Paper 3 ",
      file: SamplePaper3,
      filename: "sample-paper-3.pdf",
    },
  ];

  const handleDownloadSamplePaper = (paper) => {
    const link = document.createElement("a");
    link.href = paper.file;
    link.download = paper.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="formConitainer h-75 col-md-12 p-4">
      <h2 className="mb-1" style={{ color: "#e9c545" }}>
        Sample Papers
      </h2>

      <hr />

      <form className="formContainer position-relative">
        {/* Download Sample Papers */}
        <div className="sample-papers-section">
          <h5 className="mb-3" style={{ color: "#e9c545" }}>
            Available Sample Papers ({samplePapers.length})
          </h5>
          {samplePapers.map((paper) => (
            <div
              key={paper.id}
              className="downloadBox d-flex align-items-center justify-content-between p-3 flex-wrap mb-2"
              style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #eee",
                gap: "10px",
              }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="me-3 d-flex justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#e9ecef",
                  }}
                >
                  <FaCloudDownloadAlt size={20} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">{paper.name}</h6>
                  <small>Download sample paper for practice.</small>
                </div>
              </div>
              <div className="buttonContainer">
                <button
                  className="button buttonFilled btn-sm"
                  onClick={() => handleDownloadSamplePaper(paper)}
                  type="button"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SamplePapers;
