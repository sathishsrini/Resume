import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import passport from '../asserts/passport.png'; 
import bg from '../asserts/resume_bg.jpg';

const Resume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Sathish_S_Resume',
  });

  return (
    <div>
      <button onClick={handlePrint} className="print-button">
        Print/Download PDF
      </button>
      <div ref={resumeRef}>
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            width: '794px',
            height: '1123px',
            margin: 'auto',
            padding: '40px',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          }}
        >
          <div className="bg-white bg-opacity-80 p-8">
            {/* Header Section */}
            <div className="flex items-center mb-8">
              <img
                src={passport}
                alt="Profile"
                className="w-28 h-28 rounded-full mr-4"
              />
              <div>
                <h1 className="text-4xl font-bold">Sathish S</h1>
                <p>Chennai, Tamil Nadu, India | sathishsrini499@gmail.com | +91 9962242351 | LinkedIn</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="col-span-1">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                  <p>
                    I am a detail-oriented professional with a B.Tech in Information Technology. I am proficient in data analytics, web development, and programming, with expertise in Python, Power BI, SQL, React, and machine learning. I have demonstrated the ability to enhance data accessibility and operational efficiency. Enthusiastic, adaptable, and eager to bring a fresh perspective to diverse projects and teams.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Education</h2>
                  <div className="mb-4">
                    <h3 className="font-semibold">Anna University, Jaya Engineering College</h3>
                    <p>May 2024, Bachelor of Technology in Information Technology, CGPA: 8.04/10</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold">Velammal Matric Hr.Sec School</h3>
                    <p>May 2020, HSC in Bio-Maths, Percentage: 53%</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Amutha Matric School</h3>
                    <p>May 2018, SSLC, Percentage: 75%</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
                  <ul className="list-disc ml-6">
                    <li>Data Analytics: ICT Academy</li>
                    <li>Full Stack Development: IBM</li>
                    <li>Python Programming: Skill Vertex</li>
                    <li>Graphic Design: Astro Computer Edu</li>
                    <li>Full Stack Development: Infosys</li>
                    <li>Data Visualization: TATA</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                  <ul className="list-disc ml-6">
                    <li>English: Fluent</li>
                    <li>Tamil: Native</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Portfolio</h2>
                  <p><a href="https://portfolio-hazel-mu-80.vercel.app" className="text-blue-600">View Portfolio</a></p>
                </section>
              </div>

              {/* Right Column */}
              <div className="col-span-2">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
                  <h3 className="font-semibold">Data Analytics Intern, Shiash Info Solution</h3>
                  <p>Jan 2023 - Mar 2023, Chennai, Tamil Nadu</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Extracted, cleaned, and transformed data from various sources, ensuring high data quality.</li>
                    <li>Created models and connections between database tables, and developed interactive visualizations using Power BI.</li>
                    <li>Developed and published dashboards and reports, improving operational efficiency by 25% and reducing report preparation time by 30%.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                  <ul className="list-disc ml-6">
                    <li>Programming Languages: Python, SQL, Java (basic)</li>
                    <li>Web Development: React, HTML, CSS, JavaScript, Angular (basic)</li>
                    <li>Backend Development: Django, Flask, Firebase</li>
                    <li>Data Analytics: Power BI, Excel</li>
                    <li>Tools & Technologies: Power BI, SQL, Excel</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                  <ul className="list-disc ml-6">
                    <li>
                      <strong>AI-Powered Journalist Website:</strong> Developed a website integrating an AI model for real-time object detection using YOLOv8, which achieved 90% accuracy. The site allows journalists to analyze live footage, identify objects of interest, and retrieve relevant information, enhancing the reporting process. Technologies used include Python, Django, and React.
                    </li>
                    <li>
                      <strong>Intelligent Garbage Classification System:</strong> Created an AI-driven system to classify and sort garbage using live camera feeds. The model processes video footage to detect different types of waste, providing real-time feedback on proper waste disposal methods. This project was built using Python, TensorFlow, and OpenCV.
                    </li>
                    <li>
                      <strong>Agriculture Management System:</strong> Developed a web-based platform that offers voice-activated search capabilities for agricultural information. The platform uses Angular for the front-end, and Python with Flask for the back-end, enabling farmers to access crop management and weather data through intuitive voice commands.
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
                  <ul className="list-disc ml-6">
                    <li>Published a paper titled "Real-Time Object Detection and Tracking for Drones Using the YOLO Algorithm" in IJARCCE.</li>
                    <li>Participated in IDEATHON’22, showcasing innovative solutions to global challenges.</li>
                    <li>Won first place in a poster design competition.</li>
                    <li>Secured a position in a web design competition during Software Freedom Day.</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
