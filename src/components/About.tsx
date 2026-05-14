import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <ul className="para" style={{ listStyleType: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <li><strong>AI/ML Expertise:</strong> Hands-on experience in Machine Learning, Deep Learning, NLP, Computer Vision, Embedded Systems, and GenAI.</li>
          <li><strong>End-to-End Solutions:</strong> Skilled in developing intelligent automation systems, real-time analytics platforms, and sensor-driven apps.</li>
          <li><strong>Core Tools:</strong> Proficient in Python, TensorFlow, PyTorch, and modern AI frameworks.</li>
          <li><strong>Full-Stack Focus:</strong> Experienced in LLM integration, model optimization, scalable deployment, and AI-powered automation.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
