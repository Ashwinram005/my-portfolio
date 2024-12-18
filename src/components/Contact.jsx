import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";  // Import professional icons

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Get in Touch
        </h2>

        {/* Contact Details */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to connect. You can find me on the following platforms:
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ashwinram-m-425314291?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrlN5BHd4QtujJAp%2BPRUDbA%3D%3D"  // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-700 hover:text-blue-900 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ashwinram005"  // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Email */}
          <a
            href="mailto:ashwinrammohan2005@gmail.com"  // Replace with your email
            className="text-3xl text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Additional Message */}
        <p className="mt-6 text-base text-gray-500">
          I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
