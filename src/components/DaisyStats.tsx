import React from "react";
import { Stats } from "react-daisyui";

const DaisyStats: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Statistics</h2>
       <Stats  className="shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Total Page Views</Stats.Stat.Title>
        <Stats.Stat.Value>89,400</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
    </div>
  );
};
export default DaisyStats;