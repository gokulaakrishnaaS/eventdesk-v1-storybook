import React from "react";

import ButtonDaisy from "../components/ButtonDaisy";
import CalendarRangePicker from "../components/CalendarRangePicker";
import DaisyThemeToggle from "../components/DaisyThemeToggle";

// Direct React-DaisyUI imports
import { Button,Toggle } from "react-daisyui";
import DaisyCountDown from "../components/DaisyCountDown";
import DaisyStats from "../components/DaisyStats";
import DaisyTable from "../components/DasiyTable";
import DaisySteps from "../components/DaisySteps";
import DaisyToggle from "../components/DaisyToggle";


const DaisyTestPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-base-100 p-6">
      {/* Theme Toggle in top-right corner */}
      <div className="absolute top-4 right-4">
        <DaisyThemeToggle />
      </div>

      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a test page to demonstrate the Date Range Picker.</p>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Section: Buttons + Accordion */}
        <div className="flex-1 space-y-6">
          <div className="space-x-4">
            <ButtonDaisy />
            <Button color="primary" className="font-poppins">Primary Button</Button>
            <Button color="secondary" className="font-poppins">Secondary Button</Button>
            <Button color="accent" className="font-poppins">Accent Button</Button>
            </div>

        <DaisyCountDown />
        <DaisyStats />
        <DaisyTable />
        <DaisySteps />
        <Toggle />
        <DaisyToggle />
        </div>

        {/* Right Section: Calendar */}
        <div className="flex-1">
          <CalendarRangePicker />
        </div>
      </div>
    </div>
  );
};

export default DaisyTestPage;
