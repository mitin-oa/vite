import React from 'react';
import QuestionMark from "../../public/question_mark.png";

interface DashboardTooltipProps {
  title: string;
}

const DashboardTooltip: React.FC<DashboardTooltipProps> = ({ title }) => (
  <img
    className="dashboard-tooltip"
    src={QuestionMark}
    style={{ marginLeft: '8px' }}
    width="16"
    height="16"
    alt="?"
    title={title}
  />
);



export default DashboardTooltip;