import React from "react";
import { ChevronDown, LayoutGrid, List, Plus, Search } from "lucide-react";
import SearchBar from "../Base/SearchBar";


interface EventsHeaderProps {
    viewMode: 'list' | 'grid';
    setViewMode: (mode: 'list' | 'grid') => void;
    onNewEventClick: () => void;
}

const EventsHeader: React.FC<EventsHeaderProps> = ({ viewMode, setViewMode, onNewEventClick }) => {
    return (
        <div className="bg-[#F9FBFD] font-poppins">
            {/* Title and button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
                <button
                    onClick={onNewEventClick} // ✨ trigger the popup
                    className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FDB] text-white font-medium px-5 py-4 rounded-lg text-sm shadow"
                >
                    <Plus size={16} />
                    New Event Booking
                </button>
            </div>

            {/* Search + Filters + View Mode + Month Dropdown */}
            <div className="flex flex-wrap justify-between items-center gap-y-4">
                {/* Search */}
                <SearchBar></SearchBar>
                {/* <div className="flex-1 max-w-md">
                    
                    <input
                        type="text"
                        placeholder="Search Event..."
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 bg-white"
                    />
                </div> */}

                {/* View Mode */}
                <div className="flex items-center gap-2">
                    <div className="flex bg-white rounded-md p-1">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
                                }`}
                        >
                            <List size={18} />
                        </button>
                        
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
                                }`} 
                        >
                            <LayoutGrid size={18} />
                        </button>
                        
                    </div>


                </div>
            </div>
            <div className="flex justify-between items-center mt-4 mb-6">

                {/* Filters */}
                <div className="flex gap-6 md:gap-12 items-center text-xs font-medium text-gray-700 ">
                    <button className="relative text-blue-600 border-b-2 border-blue-600 pb-1">
                        All Events
                        <span className="absolute -top-2 -right-4 md:-right-8 bg-white-200 text-white-800 text-xs rounded-full px-1.5 py-1 border border-gray-300 shadow-sm">40</span>
                    </button>
                    <button className="relative">
                        Ongoing
                        <span className="absolute -top-2 -right-4 md:-right-8 bg-yellow-200 text-yellow-800 text-xs rounded-full px-1.5 py-1 border border-yellow-300 shadow-sm">10</span>
                    </button>
                    <button className="relative">
                        Upcoming
                        <span className="absolute -top-2 -right-4 md:-right-8 bg-blue-200 text-blue-800 text-xs rounded-full px-1.5 py-1 border border-blue-300 shadow-sm">10</span>
                    </button>
                    <button className="relative">
                        Completed
                        <span className="absolute -top-2 -right-4 md:-right-8 bg-green-200 text-green-800 text-xs rounded-full px-1.5 py-1 border border-green-300 shadow-sm">10</span>
                    </button>
                </div>

                {/* Month Dropdown */}
                <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border font-medium border-gray-200 rounded-md shadow-sm text-sm text-gray-700">
                        April
                        <ChevronDown size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventsHeader;
