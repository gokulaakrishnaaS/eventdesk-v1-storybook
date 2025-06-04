import React from "react";

import CalendarRangePicker from "../components/CalendarRangePicker";
import Accordion from "../components/Accordion";
import ThemeToggle from "../components/ThemeToggle";

const TestPage: React.FC = () => {
  return (
    <div className="p-4">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a test page to demonstrate the Date Range Picker.</p>
      <Accordion />
      <CalendarRangePicker />
    </div>
  );
};

export default TestPage;