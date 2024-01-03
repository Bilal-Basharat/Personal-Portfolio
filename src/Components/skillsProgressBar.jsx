import React from 'react';

const SkillProgressBar = ({ skill, progress }) => {
  const strokeWidth = 10; // Adjust the strokeWidth as needed

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progressValue = (circumference * (100 - progress)) / 100;

  return (
    <div className="skillsBlockInside">
      <svg height="100" width="100">
        <circle
          className="progress-circle-background"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressValue}
        />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="progress-text">
          {`${progress}%`}
        </text>
      </svg>

      <h4>{skill}</h4>
    </div>
  );
};

export default SkillProgressBar;
