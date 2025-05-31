import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NewEventPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewEventPopup: React.FC<NewEventPopupProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-30 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        className="fixed right-0 top-0 h-full w-full max-w-3xl bg-white z-50 shadow-lg overflow-y-auto"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        
                        <div className="px-6 flex justify-between items-center border-b border-gray-200 bg-white sticky top-0 z-50">
                            <h2 className="text-2xl font-medium mb-4">New Event Booking</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>

                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 text-sm font-medium px-6">
                            <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">1 Event</button>
                            <button className="py-2 px-4 text-gray-500 hover:text-gray-700">2 Itinerary</button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Column 1 */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Client Name</label>
                                    <input type="text" className="input" defaultValue="Jordan" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Client Phone No</label>
                                    <input type="text" className="input" defaultValue="+19876500000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Event Name</label>
                                    <input type="text" className="input" defaultValue="Jordan's Movie Premiere" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input type="date" className="input" defaultValue="2025-04-27" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input type="date" className="input" defaultValue="2025-04-27" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">About Event</label>
                                    <textarea className="input h-24 resize-none" placeholder="Type something..." />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="restrict" className="accent-blue-600" />
                                    <label htmlFor="restrict" className="text-sm text-gray-700">Restrict Guests</label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Expected No. of Guests</label>
                                    <input type="number" className="input" placeholder="Enter No. of Guests" />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Client Email</label>
                                    <input type="email" className="input" defaultValue="Jordan's Movie Premiere" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Client Address</label>
                                    <input type="text" className="input" defaultValue="Sidney No. 1 Lake Park" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Event Location</label>
                                    <input type="text" className="input" defaultValue="Sidney No. 1 Lake Park" />
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Start Time</label>
                                        <div className="flex gap-1">
                                            <select className="input p-1"><option>05</option></select>
                                            <select className="input p-1"><option>00</option></select>
                                            <select className="input p-1"><option>PM</option></select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">End Time</label>
                                        <div className="flex gap-1">
                                            <select className="input p-1"><option>05</option></select>
                                            <select className="input p-1"><option>00</option></select>
                                            <select className="input p-1"><option>PM</option></select>
                                        </div>
                                    </div>

                                   
                                </div>
                                 <div>
                                        <label className="block text-sm font-medium text-gray-700">Approval Request</label>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-sm">Yes</span>
                                            <input type="checkbox" className="accent-blue-600" />
                                            <span className="text-sm">No</span>
                                        </div>
                                    </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="flex justify-end px-6 py-4 border-t border-gray-200">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow">Next</button>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NewEventPopup;