import React from "react";
import DateGroup from "./EventDateGroup";

const EventsTimeline = () => {
    const data = [
        {
            date: "12 April 2025",
            day: "Saturday", // Corrected: 12 April 2025 was a Saturday
            events: [
                {
                    title: "Alex's Birthday Party",
                    date: "13 May, 2025 – 11:00 AM - 13 May, 2025 – 06:00 PM",
                    location: "Sidney No. 1 Lake Park",
                    status: "Completed",
                },
                {
                    title: "Alex's Birthday Party",
                    date: "13 May, 2025 – 11:00 AM - 13 May, 2025 – 06:00 PM",
                    location: "Sidney No. 1 Lake Park",
                    status: "Completed",
                },
                {
                    title: "Alex's Birthday Party",
                    date: "13 May, 2025 – 11:00 AM - 13 May, 2025 – 06:00 PM",
                    location: "Sidney No. 1 Lake Park",
                    status: "Completed",
                },
            ],
        },
        {
            date: "15 April 2025",
            day: "Tuesday",
            events: [
                {
                    title: "Team Meeting",
                    date: "15 April, 2025 – 02:00 PM - 15 April, 2025 – 03:30 PM",
                    location: "Conference Room A",
                    status: "Completed",
                },
                {
                    title: "Client Presentation",
                    date: "15 April, 2025 – 04:00 PM - 15 April, 2025 – 05:00 PM",
                    location: "Online - Zoom",
                    status: "Completed",
                },
            ],
        },
        {
            date: "20 April 2025",
            day: "Sunday",
            events: [
                {
                    title: "Family Picnic",
                    date: "20 April, 2025 – 10:00 AM - 20 April, 2025 – 03:00 PM",
                    location: "Greenwood Park",
                    status: "Completed",
                },
            ],
        },
        {
            date: "25 April 2025",
            day: "Friday",
            events: [
                {
                    title: "Workshop: Web Development",
                    date: "25 April, 2025 – 09:00 AM - 25 April, 2025 – 12:00 PM",
                    location: "Tech Hub Center",
                    status: "Completed",
                },
                {
                    title: "Lunch with Colleagues",
                    date: "25 April, 2025 – 01:00 PM - 25 April, 2025 – 02:00 PM",
                    location: "Downtown Café",
                    status: "Completed",
                },
            ],
        },
    ];

    return (
        <div className="bg-[#F9FBFD] min-h-screen">
            {data.map((group, idx) => (
                <DateGroup key={idx} {...group} />
            ))}
        </div>
    );
};

export default EventsTimeline;
