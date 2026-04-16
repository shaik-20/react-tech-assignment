import campus from "../images/campus.jpg";
import library from "../images/library.jpg";
import lab from "../images/lab.jpg";

const About = () => {
  return (
    <>
      <div className="section">
        <h2>About Tech Valley College</h2>
        <img
          src={campus}
          className="campus-image"
          alt="Main campus building photo"
          width="800"
          height="400"
        />
        <h3>Our Story</h3>
        <br />
        <p>
          Founded in 1995, Tech Valley College began with a vision to provide
          world-class technology education accessible to students from all
          backgrounds. What started as a small institution with 100 students has
          grown into one of the region’s most respected technology colleges,
          serving over 5,000 students annually.
        </p>
        <br />
        <p>
          Our journey has been marked by continuous innovation in curriculum
          design, teaching methodologies, and industry partnerships. Today, we
          stand proud as an institution that has produced thousands of
          successful tech professionals working across the globe.
        </p>
      </div>

      <div className="section">
        <h3>Our Mission</h3>
        <br />
        <div className="container2">
          <p>
            To provide high-quality, affordable technology education that
            prepares students for successful careers in the digital age. We are
            committed to fostering innovation, critical thinking, and practical
            skills that meet industry demands.
          </p>
        </div>

        <h3>Our Vision</h3>
        <br />
        <div className="container2">
          <p>
            To be recognized as the leading technology education institution in
            the region, known for excellence in teaching, industry
            collaboration, and student success.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container3">
          <h3>Core Values</h3>
          <br />
          <ul>
            <li>
              <strong>Excellence:</strong> Commitment to the highest standards
              in education
            </li>
            <li>
              <strong>Innovation:</strong> Encouraging creative thinking and new
              ideas
            </li>
            <li>
              <strong>Integrity:</strong> Maintaining honesty and strong moral
              principles
            </li>
            <li>
              <strong>Inclusivity:</strong> Welcoming students from all
              backgrounds
            </li>
            <li>
              <strong>Industry Focus:</strong> Keeping curriculum aligned with
              market needs
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>World-class Facilities</h3>
        <br />

        <div className="container4">
          <div className="facilitycard">
            <img
              src={library}
              alt="Library photo"
              className="facility-img"
              width="400"
              height="300"
            />
            <h3>Modern Library</h3>
            <p>
              Our extensive library houses over 50,000 books, journals, and
              digital resources. With comfortable reading areas and 24/7 digital
              access, students have everything they need for research and
              learning.
            </p>
          </div>

          <div className="facilitycard">
            <img
              src={lab}
              alt="Computer lab photo"
              className="facility-img"
              width="400"
              height="300"
            />
            <h3>Advanced Computer Labs</h3>
            <p>
              State-of-the-art computer labs equipped with the latest hardware
              and software. Each lab is designed for specific courses, providing
              hands-on experience with industry-standard tools.
            </p>
          </div>

          <div>
            <h3>Additional Facilities</h3>

            <div className="additionalFacilitiesContainer">
              <ul className="left-ul">
                <li>High-speed campus-wide WiFi</li>
                <li>Sports complex and gym</li>
                <li>Cafeteria with healthy meal options</li>
              </ul>
              <ul className="right-ul">
                <li>Student lounge and recreation areas</li>
                <li>Auditorium with 500+ seating capacity</li>
                <li>Medical center with full-time staff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
