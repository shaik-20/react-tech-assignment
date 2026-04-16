const Contact = () => {
  return (
    <>
      <div className="section">
        <h2>Contact Us</h2>
        <p>
          We’re here to help! Whether you have questions about our programs,
          admission process, or anything else, feel free to reach out to us.
        </p>
      </div>

      <div className="section">
        <h3>Get in Touch</h3>
        <div className="contactContainer">
          <div className="contact-card">
            <h3>Main Office:</h3>
            <p className="contact-details">
              {" "}
              Tech Valley College, Sector 15, Knowledge Park, Bangalore -
              560001, Karnataka, India
            </p>
            <br />
            <p>
              Phone:{" "}
              <a href="+91 123-456-7890" className="links-in-card">
                +91 123-456-7890
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@techvalley.edu" className="links-in-card">
                info@techvalley.edu
              </a>
              <br />
              Website: www.techvalley.edu
            </p>
          </div>

          <div className="contact-card">
            <h3>Admissions Office:</h3>
            <p className="contact-details">
              {" "}
              Phone: <a href="+91 123-456-7891">+91 123-456-7891</a>
              <br />
              Email:{" "}
              <a href="admissions@techvalley.edu">admissions@techvalley.edu</a>
              <br />
              Timings: Monday to Saturday, 9:00 AM - 5:00 PM
            </p>
          </div>

          <div className="contact-card">
            <h3>Placement Cell:</h3>
            <p className="contact-details">
              Phone: <a href="+91 123-456-7892">+91 123-456-7892</a>
              <br />
              Email:{" "}
              <a href="placements@techvalley.edu">placements@techvalley.edu</a>
              <br />
              Timings: Monday to Friday, 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Send Us a Message</h3>
        <p>
          Have a question? Fill out this form and we’ll get back to you within
          24 hours.
        </p>
        <br />
        <div className="form-container">
          <form>
            <label for="name">Your Name*</label>
            <input type="text" id="name" name="name" className="text-input" />
            <br />
            <br />
            <label for="email">Your Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-input"
            />
            <br />
            <br />
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{10}"
              maxlength="10"
              className="text-input"
            />
            <br />
            <br />
            <label for="subjet">Subject* </label>
            <select id="subjet" name="subjet" className="select">
              <option value="general inquiry">General Inquiry</option>
              <option value="admission information">
                Admission Information
              </option>
              <option value="course details">Course Details</option>
              <option value="placement information">
                Placement Information
              </option>
              <option value="Scholarship information">
                Scholarship Information
              </option>
              <option value="technical support">Technical Support</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <label for=" i am a">I am a*</label>
            <input
              type="radio"
              id="prospective student"
              name="i am a"
              className="radio-check"
            />
            <label for="prospective student" className="rc-label">
              Prospective Student
            </label>
            <input
              type="radio"
              id="current student"
              name="i am a"
              className="radio-check"
            />
            <label for="current student" className="rc-label">
              Current Student
            </label>
            <input
              type="radio"
              id="parent"
              name="i am a"
              className="radio-check"
            />
            <label for="parent" className="rc-label">
              Parent/Guardian
            </label>
            <input
              type="radio"
              id="alumni"
              name="i am a"
              className="radio-check"
            />
            <label for="alumni" className="rc-label">
              Alumni
            </label>
            <br />
            <input
              type="radio"
              id="other"
              name="i am a"
              className="radio-check"
            />
            <label for="other" className="rc-label">
              Other
            </label>
            <br />
            <label for="message">Message*</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Write your message here"
              className="text-input"
            />
            <label>
              Would you like to receive updates about Tech Valley College? :
            </label>
            <input
              type="checkbox"
              name="update"
              value="yes"
              className="radio-check"
            />
            Yes, I would like to receive newsletters and updates
            <br />
            <br />
            <button className="submit" type="submit">
              Send Message
            </button>
            <button className="reset" type="reset">
              Clear Form
            </button>
          </form>
        </div>
      </div>

      <div className="section">
        <h3>Visit Our Campus</h3>
        <p>
          We encourage prospective students and parents to visit our campus. See
          our facilities, meet our faculty, and experience the Tech Valley
          environment firsthand.
        </p>
        <h3>Directions:</h3>
        <ul>
          <div>
            <li>By Metro: Get down at Knowledge Park Station, Gate 3</li>
            <li>By Bus: Routes 15, 23, 45 stop directly at college gate</li>
            <li>By Car: Ample parking available on campus</li>
            <li>Nearest Railway Station: Bangalore Central (15 km)</li>
            <li>Nearest Airport: Kempegowda International Airport (35 km)</li>
          </div>
        </ul>
      </div>

      <div className="section">
        <h3>When to Visit</h3>
        <table>
          <tr>
            <th>Day</th>
            <th>Timings</th>
          </tr>
          <tr>
            <td className="tableHeading">Monday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Tuesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Wednesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Thursday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Friday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Saturday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td className="tableHeading">Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
        <p>
          Please note: Campus is closed on public holidays. For special visits
          on closed days, please contact us in advance.
        </p>
      </div>

      <div className="section">
        <h3>Specific Departments</h3>

        <table>
          <tr>
            <th>Department</th>
            <th>Contact Person</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>Dr. Rajesh Kumar</td>
            <td className="tableHeading3">rajesh@techvalley.edu</td>
          </tr>
          <tr>
            <td>Web Development </td>
            <td>Prof. Meera Desai</td>
            <td className="tableHeading3">meera@techvalley.edu</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Dr. Amit Verma</td>
            <td className="tableHeading3">amit@techvalley.edu</td>
          </tr>
          <tr>
            <td>Cyber Security</td>
            <td>Prof. Sneha Reddy</td>
            <td className="tableHeading3">sneha@techvalley.edu</td>
          </tr>
          <tr>
            <td>Mobile Development</td>
            <td>Dr. Vikram Singh</td>
            <td className="tableHeading3">vikram@techvalley.edu</td>
          </tr>
          <tr>
            <td>Digital Marketing</td>
            <td>Prof. Anjali Gupta</td>
            <td className="tableHeading3">anjali@techvalley.edu</td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h3>Follow Us on Social Media</h3>
        <p>
          Stay updated with the latest news, events, and achievements from Tech
          Valley College.
        </p>

        <ul>
          <div className="social-links">
            <li>
              <a href="https://facebook.com/techvalleycollege" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/techvalley" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/school/tech-valley-college"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li>
              <a href="https://instagram.com/techvalleycollege" target="_blank">
                instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com/techvalleycollege" target="_blank">
                youtube
              </a>{" "}
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Contact;
