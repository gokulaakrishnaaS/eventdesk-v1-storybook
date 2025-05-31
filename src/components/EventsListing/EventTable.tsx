import React from "react";
import EventRow from "./EventRow";
import type { Event } from "./EventRow"; // 👈 type-only import


const events = [
    {
        name: "Arjun's Art Exhibition",
        client: "Sanya",
        startDate: "02 June, 2025 - 04:30 PM",
        endDate: "02 June, 2025 - 08:00 PM",
        location: "Mumbai Art Gallery",
        status: "Upcoming",
    },
    {
        name: "Tech Innovators Summit",
        client: "Nikhil",
        startDate: "15 July, 2025 - 09:00 AM",
        endDate: "15 July, 2025 - 05:00 PM",
        location: "Silicon Valley Convention Center",
        status: "Upcoming",
    },
    {
        name: "Zara's Book Launch",
        client: "Zara",
        startDate: "22 May, 2025 - 05:00 PM",
        endDate: "22 May, 2025 - 07:00 PM",
        location: "London Central Library",
        status: "Completed",
    },
    {
        name: "Aiden & Mira's Engagement",
        client: "Mira",
        startDate: "28 June, 2025 - 06:30 PM",
        endDate: "28 June, 2025 - 10:30 PM",
        location: "Hyatt Regency Ballroom, Chicago",
        status: "Upcoming",
    },
    {
        name: "Fusion Music Night",
        client: "Dev",
        startDate: "10 August, 2025 - 07:00 PM",
        endDate: "10 August, 2025 - 11:00 PM",
        location: "Sydney Opera House",
        status: "Cancelled",
    },
];


const EventsTable: React.FC = () => {
    return (
        <div className="overflow-x-auto border border-gray-200 p-1 shadow-sm rounded-lg">
            <table className="min-w-full bg-white text-left ">
                <thead className="bg-gray-50 text-gray-500 text-xs font-small font-light tracking-wider border-b border-gray-200">                    
                    <tr>
                        <td className="px-4 py-3">
                            <input type="checkbox" />
                        </td>
                        <td className="px-4 py-3">Event Name</td>
                        <td className="px-4 py-3">Client Name</td>
                        <td className="px-4 py-3">Start Date</td>
                        <td className="px-4 py-3">End Date</td>
                        <td className="px-4 py-3">Location</td>
                        <td className="px-4 py-3">Status</td>
                        <td className="px-4 py-3">Action</td>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {events.map((event, index) => (
                        <EventRow key={index} event={event} />
                    ))}
                    {/* <EventRow event={events} /> */}
                    {/* Add more <EventRow event={...} /> here if needed */}
                </tbody>
            </table>
        </div>
    );
};

export default EventsTable;