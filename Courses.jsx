const Courses = () => {
  return (
    <div>
      <div className="section">
        <h2>Our Courses</h2>
        <p>
          Tech Valley College offers a diverse range of technology programs
          designed to meet the evolving needs of the industry. All our courses
          combine theoretical knowledge with practical skills, ensuring
          graduates are job-ready from day one.
        </p>
      </div>

      <div className="section">
        <h3>Available Programs</h3>
        <table>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fees (per year)</th>
            <th>Eligibility</th>
          </tr>
          <tr>
            <td> Bachelor of Computer Science (B.Sc CS)</td>
            <td className="blue">3 Years</td>
            <td>₹80,000</td>
            <td>12th Pass with Math</td>
          </tr>
          <tr>
            <td>Bachelor of Information Technology (BIT)</td>
            <td className="blue">3 Years</td>
            <td>₹75,000</td>
            <td>12th Pass any stream</td>
          </tr>
          <tr>
            <td>Bachelor of Computer Applications (BCA)</td>
            <td className="blue">3 Years</td>
            <td>₹70,000</td>
            <td>12th Pass with Math</td>
          </tr>
          <tr>
            <td>Master of Computer Applications (MCA)</td>
            <td className="blue">2 Years</td>
            <td>₹1,00,000</td>
            <td>Graduate in any stream</td>
          </tr>
          <tr>
            <td>Diploma in Web Development</td>
            <td className="blue">1 Year</td>
            <td>₹50,000</td>
            <td>12th Pass</td>
          </tr>
          <tr>
            <td>Diploma in Data Science</td>
            <td className="blue">1 Years</td>
            <td>₹60,000</td>
            <td>12th Pass with Math</td>
          </tr>
          <tr>
            <td>Diploma in Cyber Security</td>
            <td className="blue">1 Years</td>
            <td>₹55,000</td>
            <td>12th Pass</td>
          </tr>
          <tr>
            <td>Certificate in Python Programming</td>
            <td className="blue">6 Months</td>
            <td>₹25,000</td>
            <td>10th Pass</td>
          </tr>
          <tr>
            <td>Certificate in Digital Marketing</td>
            <td className="blue">6 Months</td>
            <td>₹30,000</td>
            <td>10th Pass</td>
          </tr>
          <tr>
            <td>Certificate in Graphic Design</td>
            <td className="blue">6 Months</td>
            <td>₹28,000</td>
            <td>10th Pass</td>
          </tr>
          <tr>
            <td>Certificate in Mobile App Development</td>
            <td className="blue">6 Months</td>
            <td>₹35,000</td>
            <td>12th Pass</td>
          </tr>
          <tr>
            <td>Certificate in AI & Machine Learning</td>
            <td className="blue">6 Months</td>
            <td>₹40,000</td>
            <td>12th Pass with Math</td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h3>Programs by Category</h3>

        <div className="program-conatiner">
          <div className="program-Card">
            <h3>Degree Programs (3-4 Years)</h3>
            <ol>
              <li>Bachelor of Computer Science (B.Sc CS)</li>
              <li>Bachelor of Information Technology (BIT)</li>
              <li>Bachelor of Computer Applications (BCA)</li>
              <li>Master of Computer Applications (MCA)</li>
            </ol>
          </div>

          <div className="program-Card">
            <h3>Diploma Programs (1 Year)</h3>
            <ol>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Cyber Security</li>
            </ol>
          </div>

          <div className="program-Card">
            <h3>Certificate Programs (6 Months)</h3>
            <ol>
              <li>Python Programming</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Mobile App Development</li>
              <li>AI & Machine Learning</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Featured Courses</h3>

        <div className="card">
          <h4>Bachelor of Computer Science (B.Sc CS)</h4>
          <strong>Duration: </strong>3 Years
          <br />
          <strong>Fees: </strong>₹80,000 per year
          <br />
          <strong>Total Seats:</strong>120
          <br />
          <strong>Eligibility: </strong>12th Pass with Mathematics
          <br />
          <p>
            Our flagship program covers fundamentals of computer science
            including programming, data structures, algorithms, databases, and
            software engineering. Students work on real-world projects and
            complete internships with leading tech companies.
          </p>
          <br />
          <h4>Key Subjects:</h4>
          <ul>
            <li>C, C++, and Java Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Management Systems</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Web Technologies</li>
            <li>Software Engineering</li>
            <li>Artificial Intelligence Basics</li>
          </ul>
        </div>

        <div className="card">
          <h4>Diploma in Web Development</h4>
          <strong>Duration: </strong>1 year
          <br />
          <strong>Fees: </strong>₹50,000
          <br />
          <strong>Total Seats: </strong>60
          <br />
          <strong>Eligibility: </strong>12th Pass any stream
          <p>
            Intensive program covering both front-end and back-end web
            development. Students learn to build complete, professional websites
            and web applications from scratch.
          </p>
          <br />
          <h4>What You’ll Learn:</h4>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>React.js and Modern Frameworks</li>
            <li>Node.js and Express</li>
            <li>Database Integration</li>
            <li>Responsive Design</li>
            <li>Version Control with Git</li>
            <li>Deployment and Hosting</li>
          </ul>
        </div>

        <div className="card">
          <h4>Diploma in Data Science</h4>
          <strong>Duration: </strong>1 year
          <br />
          <strong>Fees: </strong>₹60,000
          <br />
          <strong>Total Seats: </strong>40
          <br />
          <strong>Eligibility: </strong>12th Pass with Mathematics
          <p>
            Comprehensive program covering data analysis, machine learning, and
            visualization. Perfect for those looking to start a career in one of
            the most indemand fields.
          </p>
          <br />
          <h4>Skills You’ll Gain:</h4>
          <ul>
            <li>Python for Data Science</li>
            <li>Statistics and Probability</li>
            <li>Data Visualization</li>
            <li>Machine Learning Basics</li>
            <li>SQL and Database Queries</li>
            <li>Data Cleaning and Processing</li>
            <li>Real-world Data Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
