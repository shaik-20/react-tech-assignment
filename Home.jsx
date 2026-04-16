import campus from "../images/campus.jpg";
import TestimonialCard from "./TestimonialCard";
import student1 from "../images/student1.jpg";
import student2 from "../images/student2.jpg";
import student3 from "../images/student3.jpg";

const Home = () => {
  const testimonialData = [
    {
      image: student1,
      name: "Priya Sharma",
      role: "Computer Science Graduate, Now at Google",
      description:
        "Tech Valley College gave me the perfect foundation for my career. The practical approach to learning and supportive faculty helped me land my dream job at Google!",
    },
    {
      image: student2,
      name: "Rahul Kumar",
      role: "Web Development Graduate, Freelancer",
      description:
        "The hands-on projects and real-world experience I gained here made me industry-ready. I started my own successful freelancing business right after graduation.",
    },
    {
      image: student3,
      name: "Ananya Patel",
      role: "Data Science Graduate, Now at Microsoft",
      description:
        "The quality of education and placement support at Tech Valley College is exceptional. Highly recommended for anyone serious about a tech career!",
    },
  ];

  return (
    <div>
      <div className="section">
        <h2>Welcome to Tech Valley College</h2>
        <img
          src={campus}
          alt="Main campus building photo"
          className="campus-image"
          width="800"
          height="400"
        />
        <p>
          Welcome to Tech Valley College, a premier institution dedicated to
          excellence in technology education. For over 25 years, we have been
          nurturing young minds and preparing them for successful careers in the
          ever-evolving tech industry.
        </p>
        <p>
          Our state-of-the-art campus, experienced faculty, and industry-aligned
          curriculum make us the perfect choice for students aspiring to become
          tomorrow’s tech leaders.
        </p>
      </div>

      <div className="section">
        <h2>Why Choose Tech Valley College?</h2>
        <br />
        <div className="container">
          <ul>
            <li>
              <strong>Industry-Ready Curriculum:</strong> Our courses are
              designed in collaboration with leading tech companies
            </li>
            <li>
              <strong>Expert Faculty:</strong> Learn from professionals with
              real-world industry experience
            </li>
            <li>
              <strong>Modern Infrastructure:</strong> Access to cutting-edge
              labs and learning facilities
            </li>
            <li>
              <strong>100% Placement Support:</strong> Dedicated placement cell
              with ties to top companies
            </li>
            <li>
              <strong>Affordable Education:</strong> Quality education at
              competitive fee structure
            </li>
            <li>
              <strong>Scholarship Programs:</strong> Merit-based scholarships
              for deserving students
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Quick Facts</h2>
        <table>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Established</td>
            <td>1995</td>
          </tr>
          <tr>
            <td>Total Students</td>
            <td>5,000+</td>
          </tr>
          <tr>
            <td>Faculty Members</td>
            <td>200+</td>
          </tr>
          <tr>
            <td>Courses Offered</td>
            <td>15+</td>
          </tr>
          <tr>
            <td>Campus Area</td>
            <td>50 Acres</td>
          </tr>
          <tr>
            <td>Placement Rate</td>
            <td>95%</td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h2>What Our Students Say</h2>

        <div className="testimonials">
          {testimonialData.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
        <div className="testimonials"></div>
      </div>
    </div>
  );
};

export default Home;
