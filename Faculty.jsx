import faculty1 from "../images/faculty1.jpg";
import faculty2 from "../images/faculty2.jpg";
import faculty3 from "../images/faculty3.jpg";
import faculty4 from "../images/faculty4.jpg";
import faculty5 from "../images/faculty5.jpg";
import faculty6 from "../images/faculty6.jpg";
import FacultyCard from "./FacultyCard";

const Faculty = () => {
  const facultyData = [
    {
      image: faculty1,
      name: "Dr. Rajesh Kumar",
      role: "Head of Computer Science Department",
      qualifications: "Ph.D. in Computer Science, IIT Delhi",
      description:
        "Dr. Kumar has 18 years of teaching experience and specializes in Artificial Intelligence and Machine Learning. He has published over 30 research papers in international journals and has worked with leading tech companies on AI projects.",
      specializations: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
      ],
    },
    {
      image: faculty2,
      name: "Prof. Meera Desai",
      role: "Head of Web Development Department",
      qualifications: "M.Tech in Information Technology, IIT Bombay",
      description:
        "Prof. Desai is an expert in modern web technologies with 15 years of industry and teaching experience. She has worked as a senior developer at multiple startups and brings real-world insights to the classroom.",
      specializations: [
        "Full Stack Development",
        "React and Node.js",
        "Progressive Web Apps",
        "Cloud Technologies",
      ],
    },
    {
      image: faculty3,
      name: "Dr. Amit Verma",
      role: "Head of Data Science Department",
      qualifications: "Ph.D. in Statistics, University of Delhi",
      description:
        "Dr. Verma brings 14 years of experience in data analytics and machine learning. He has consulted for Fortune 500 companies and teaches students how to extract meaningful insights from complex datasets.",
      specializations: [
        "Data Analytics",
        "Machine Learning",
        "Statistical Modeling",
        "Big Data Technologies",
      ],
    },
    {
      image: faculty4,
      name: "Prof. Sneha Reddy",
      role: "Head of Cyber Security Department",
      qualifications: "M.Tech in Cyber Security, NIT Warangal",
      description:
        "Prof. Reddy is a certified ethical hacker with 12 years of experience in cybersecurity. She has worked with government agencies and private organizations to strengthen their security infrastructure.",
      specializations: [
        "Ethical Hacking",
        "Network Security",
        "Cryptography",
        "Security Auditing",
      ],
    },
    {
      image: faculty5,
      name: "Dr. Vikram Singh",
      role: "Head of Mobile Development Department",
      qualifications: "Ph.D. in Mobile Computing, IISc Bangalore",
      description:
        "Dr. Singh has 16 years of experience in mobile app development and has published extensively on mobile computing. He has developed apps used by millions of users worldwide.",
      specializations: [
        "Android Development",
        "iOS Development",
        "React Native",
        "Mobile UI/UX Design",
      ],
    },
    {
      image: faculty6,
      name: "Prof. Anjali Gupta",
      role: "Head of Digital Marketing Department",
      qualifications: "MBA in Digital Marketing, MICA Ahmedabad",
      description:
        "Prof. Gupta brings 10 years of digital marketing experience from leading agencies. She has managed campaigns for major brands and teaches students the latest marketing strategies and tools.",
      specializations: [
        "SEO and SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Marketing Analytics",
      ],
    },
  ];

  return (
    <div>
      <div className="section">
        <h2>Our Faculty</h2>
        <p>
          Our faculty members are our greatest strength. Each brings a wealth of
          academic knowledge and industry experience, ensuring students receive
          education that is both theoretical and practical.
        </p>
      </div>

      <div className="section">
        <h3>Faculty Highlights</h3>
        <table>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>Total Faculty Members</td>
            <td>200+</td>
          </tr>
          <tr>
            <td>Professors with PhD</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Industry Professionals</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Average Experience</td>
            <td>12 Years</td>
          </tr>
          <tr>
            <td>Student-Faculty Ratio</td>
            <td>25:1</td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h3 className="faculty-heading">Department Head</h3>
        <div className="faculty-container">
          {/* <div className="faculty-card"> */}
          {facultyData.map((item, index) => (
            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              qualifications={item.qualifications}
              description={item.description}
              specializations={item.specializations}
            />
          ))}
          {/* </div> */}
        </div>
      </div>

      <div className="section">
        <h3>What Makes Our Faculty Outstanding</h3>
        <div className="faculty-outstanding-card">
          <ol>
            <li className="number-styling">
              <b>Industry Experience:</b> Over 60% of our faculty have worked in
              top tech companies
            </li>
            <li>
              <b>Research Focus:</b> Our faculty publish regularly in
              international journals and conferences
            </li>
            <li>
              <b>Student Mentorship:</b> Each faculty member mentors students
              personally for career guidance
            </li>
            <li>
              <b>Continuous Learning:</b> Faculty members regularly update their
              skills with new technologies
            </li>
            <li>
              <b>Industry Connections:</b> Strong networks help students with
              internships and placements
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
