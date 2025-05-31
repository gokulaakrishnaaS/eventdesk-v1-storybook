import React from "react";
import EventCard from "./EventCard";

interface EventData {
  title: string;
  date: string;
  location: string;
  status: string;
}

interface DateGroupProps {
  date: string;
  day: string;
  events: EventData[];
}

const DateGroup: React.FC<DateGroupProps> = ({ date, day, events }) => {
  return (
    <div className="flex gap-6 bg-[#F9FBFD] font-['Poppins']">
      {/* Date & Line */}
      <div className=" text-right relative pr-7 ">
        <div className="text-blue-600 font-medium">{date}</div>
        <div className="text-sm text-gray-500">{day}</div>
        <div className="absolute top-3.5 right-[-7px] h-full border-l-2 border-gray-200"></div>
        <div className="absolute top-3 left-[100%] w-3 h-3 bg-blue-600 rounded-full"></div>
      </div>

      {/* Events */}
      <div className="flex-1 flex flex-col py-2 gap-4">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default DateGroup;
