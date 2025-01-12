import { FaFilePdf } from "react-icons/fa";  // Import the PDF icon from react-icons
import resume from "../assets/Ashwinram M_Resume.pdf"; // Correct the path to your resume

const Resume = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 md:px-24 flex justify-center">
      {/* Simple Download Resume Button */}
      <a
        href={resume}  // Correct path to resume PDF
        download="Ashwinram_M_Resume" // Automatically triggers a download with a name
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-white text-black border-2 border-black rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        aria-label="Download Resume"
      >
        <FaFilePdf className="mr-2" /> {/* PDF icon with some space */}
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
