import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  status: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, status }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Calendar size={16} className="mr-2" />
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MapPin size={16} className="mr-2" />
          {location}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
          <span className="h-2 w-2 bg-green-600 rounded-full inline-block"></span>
          {status}
        </span>
        <button className="px-2 py-1 text-blue-700 border border-blue-700 rounded-lg text-xs bg-white hover:bg-blue-50 transition">
        Manage</button>
      </div>
    </div>
  );
};

export default EventCard;
