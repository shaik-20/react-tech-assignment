const Admissions = () => {
  return (
    <>
      <div className="section">
        <h2>Admissions</h2>
        <p>
          Join Tech Valley College and start your journey towards a successful
          tech career. Our admission process is designed to be simple,
          transparent, and merit-based.
        </p>
      </div>

      <div className="section">
        <h3>How to Apply</h3>
        <br />
        <div className="container">
          <ol>
            <li>
              <b>Fill Online Application: </b>Complete the application form
              below with accurate information
            </li>

            <li>
              <b>Submit Documents: </b>Upload required documents (marksheets, ID
              proof, photo)
            </li>
            <li>
              <b>Entrance Test: </b>Appear for our entrance examination (for
              degree programs)
            </li>
            <li>
              <b>Interview: </b>Selected candidates will be called for a
              personal interview
            </li>
            <li>
              <b>Final Admission: </b>Pay fees and confirm your seat upon
              selection
            </li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h3>Admission Schedule 2024-25</h3>
        <table>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Application Start Date</td>
            <td>January 15, 2024</td>
          </tr>
          <tr>
            <td>Application Last Date</td>
            <td>May 31, 2024</td>
          </tr>
          <tr>
            <td>Entrance Test Date </td>
            <td>June 15, 2024</td>
          </tr>
          <tr>
            <td>Results Announcement</td>
            <td>June 30, 2024</td>
          </tr>
          <tr>
            <td>Interview Period </td>
            <td>July 1-10, 2024</td>
          </tr>
          <tr>
            <td>Final Admission </td>
            <td>July 15-20, 2024</td>
          </tr>
          <tr>
            <td>classes Begin </td>
            <td>August 1, 2024</td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h3>Eligibility Requirements</h3>
        <div className="programs">
          <b>For Degree Programs:</b>
          <ul>
            <li>Minimum 50% marks in 12th standard</li>
            <li>
              Mathematics is mandatory for Computer Science and IT programs
            </li>
            <li>Age limit: 17-25 years</li>
            <li>Must clear entrance examination</li>
          </ul>
        </div>

        <div className="programs">
          <b>For Diploma Programs:</b>
          <ul>
            <li>12th pass from recognized board</li>
            <li>No minimum percentage required</li>
            <li>Direct admission based on 12th marks</li>
            <li>Age limit: 17-30 years</li>
          </ul>
        </div>

        <div className="programs">
          <b>For Certificate Programs:</b>
          <ul>
            <li>10th or 12th pass</li>
            <li>No entrance exam required</li>
            <li>First come, first served basis</li>
            <li>Age limit: 16-35 years</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>Fee Details</h3>
        <p>
          We believe in providing quality education at affordable prices. Our
          fee structure is transparent with no hidden charges.
        </p>
        <table>
          <tr>
            <th>Program Type</th>
            <th>Annual Fee</th>
            <th>Includes</th>
          </tr>
          <tr>
            <td>Degree Programs</td>
            <td className="boldSize">₹70,000 - ₹1,00,000</td>
            <td>Tuition, Lab, Library</td>
          </tr>
          <tr>
            <td>Diploma Programs</td>
            <td className="boldSize">₹50,000 - ₹60,000</td>
            <td>Tuition, Lab, Library</td>
          </tr>
          <tr>
            <td>Certificate Programs</td>
            <td className="boldSize">₹25,000 - ₹40,000</td>
            <td>Tuition, Lab Access</td>
          </tr>
        </table>
        <p>
          Payment can be made in two installments. Scholarships are available
          for meritorious and financially needy students.
        </p>
      </div>

      <div className="section">
        <h3>Scholarship Opportunities</h3>
        <br />

        <div className="scholarship">
          <ol>
            <li>
              <b>Merit Scholarship: </b>50% fee waiver for students scoring
              above 90% in entrance test
            </li>
            <li>
              <b>Need-Based Scholarship: </b>Up to 30% fee waiver based on
              family income
            </li>
            <li>
              <b>Sports Scholarship: </b>25% fee waiver for state/national level
              players
            </li>
            <li>
              <b>Girl Child Scholarship: </b>20% fee waiver for all female
              students
            </li>
            <li>
              <b>SC/ST Scholarship: </b>Government scholarships as per state
              norms
            </li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h3>Online Application Form</h3>
        <br />
        <p>
          Fill out the form below to apply for admission. All fields marked with
          * are mandatory.
        </p>
        <br />
        <div className="form-container">
          <b>Personal Information Section:</b>
          <br />
          <br />
          <form>
            <label htmlFor="full name">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="text-input"
            />
            <br />
            <br />

            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-input"
            />
            <br />
            <br />

            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              maxlength="10"
              placeholder="Enter 10-digits"
              className="text-input"
            />
            <br />
            <br />

            <label htmlFor="dob">Date of Birth*</label>
            <input type="date" id="dob" name="dob" className="text-input" />
            <br />
            <br />

            <label>Gender*</label>
            <input
              type="radio"
              id="male"
              name="gender"
              className="radio-check"
            />
            <label htmlFor="male" className="rc-label">
              Male
            </label>

            <input
              type="radio"
              id="female"
              name="gender"
              className="radio-check"
            />
            <label htmlFor="female" className="rc-label">
              Female
            </label>

            <input
              type="radio"
              id="other"
              name="gender"
              className="radio-check"
            />
            <label htmlFor="other" className="rc-label">
              Other
            </label>

            <label htmlFor="category">Category</label>
            <select id="category" name="category" className="select">
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />

            <b>Academic InhtmlFormation Section</b>

            <label htmlFor="qualification">Highest Qualification*</label>
            <select className="select">
              <option value="10th Pass">10th Pass</option>
              <option value="12th Pass">12th Pass</option>
              <option value="graduate">Graduate</option>
              <option value="post graduate">Post Graduate</option>
            </select>
            <br />
            <br />

            <b>Program Selection Section</b>

            <label htmlFor="program type">Program Type*</label>

            <input
              type="radio"
              id="degreeProgram"
              name="programType"
              className="radio-check"
            />
            <label htmlFor="degree program" className="rc-label">
              Degree Program
            </label>

            <input
              type="radio"
              id="diplomaProgram"
              name="programType"
              className="radio-check"
            />
            <label htmlFor="diploma program" className="rc-label">
              Diploma Program
            </label>

            <input
              type="radio"
              id="CertificateProgram"
              name="programType"
              className="radio-check"
            />
            <label htmlFor="Certificate program" className="rc-label">
              Certificate Program
            </label>

            <label>Terms and Conditions*</label>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="radio-check"
            />
            <label htmlFor="terms" className="rc-label">
              I agree to the terms and conditions and confirm that all
              information provided is accurate
            </label>
            <br />
            <br />

            <button className="submit" type="submit">
              Submit Application
            </button>

            <button className="reset" type="reset">
              Reset Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Admissions;
