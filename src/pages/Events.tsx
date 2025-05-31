import React, { useState } from 'react';
import EventsTable from '../components/EventsListing/EventTable';
import EventsHeader from '../components/EventsListing/EventsHeader';
import EventsTimeline from '../components/EventsListing/EventsTimeline';
import NewEventPopup from '../components/EventsListing/NewEventPopup';

const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showPopup, setShowPopup] = useState(false); // ✨ new

  return (
    <div className="space-y-6 font-poppins">
      <EventsHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        onNewEventClick={() => setShowPopup(true)} // ✨ pass handler
      />
      {viewMode === 'list' ? <EventsTable /> : <EventsTimeline />}

      <NewEventPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Events;
