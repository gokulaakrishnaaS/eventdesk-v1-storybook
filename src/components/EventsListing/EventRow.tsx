import React from "react";

export interface Event {
    name: string;
    client: string;
    startDate: string;
    endDate: string;
    location: string;
    status: "Completed" | "Ongoing" | "Upcoming"; // Add more if needed
}

interface EventRowProps {
    key: React.Key;
    event: any;
}

const EventRow: React.FC<EventRowProps> = ({ key, event }) => {
    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition border-b border-gray-200 ">
            <td className="px-4 py-3">
                <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                {event.name}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700">
                {event.client}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700">
                {event.startDate}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700">
                {event.endDate}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700">
                {event.location}
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
                <span
                    className={`px-2 py-1 text-xs font-normal rounded-full ${event.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : event.status === "Ongoing"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                        }`}
                >
                    {event.status}
                </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap flex items-center space-x-2">

                <button className="px-2 py-1 text-blue-700 border border-blue-700 rounded-lg text-xs bg-white hover:bg-blue-50 transition">
                    Manage</button  >
            </td>
        </tr>
    );
};

export default EventRow;
