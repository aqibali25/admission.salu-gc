import { FaCloudDownloadAlt } from "react-icons/fa";
import Prospactus from "../../../assets/Prospectus-salu-gc-2022.pdf";

const Prospectus = () => {
  const handleDownloadProspectus = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = Prospactus;
    link.download = "Prospectus-salu-gc-2022.pdf"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="formConitainer h-75 col-md-12 p-4">
      <h2 className=" mb-1" style={{ color: "#e9c545" }}>
        Candidate Status
      </h2>

      <hr />

      <form className="formContainer position-relative">
        {/* Download Challan Card */}
        <div
          className="downloadBox d-flex align-items-center justify-content-between p-3 flex-wrap"
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
              <h6 className="mb-0 fw-bold">Download Prospectus</h6>
              <small>Download Prospectus for admission.</small>
            </div>
          </div>
          <div className="buttonContainer">
            <button
              className="button buttonFilled btn-sm"
              onClick={handleDownloadProspectus}
              type="button"
            >
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prospectus;
