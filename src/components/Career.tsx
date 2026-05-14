import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>ParkNSecure Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed NLP-powered chatbot automation system for smart parking management using Python and Natural Language Processing techniques. Optimized inference pipeline and API workflow using caching mechanisms to reduce response latency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>CodTech IT Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Performed advanced data preprocessing, feature engineering, and class imbalance handling using SMOTE techniques. Evaluated machine learning models using cross-validation, ROC-AUC, precision-recall, and performance metrics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>GITAM University- 8.17 CGPA</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Studied Artificial Intelligence and Machine Learning, focusing on Deep Learning, NLP, Computer Vision, and Predictive Analytics. Built various real-world AI applications and intelligent automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
