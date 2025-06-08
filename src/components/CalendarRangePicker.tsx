// CalendarRangePicker.tsx
import React, { useRef, useState, useEffect } from 'react';


const CalendarRangePicker: React.FC = () => {

  const [label, setLabel] = useState('Select Date Range');
  const [open, setOpen] = useState(false);
  const rangeRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calendar = rangeRef.current;
    if (!calendar) return;

    const onChange = (e: Event) => {
      const target = e.target as HTMLElement;
      const value = (target as any).value;
      setLabel(value);
      setOpen(false);
    };

    calendar.addEventListener('change', onChange);
    return () => {
      calendar.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <div className="form-control w-full max-w-xs dropdown dropdown-bottom relative">
      <button
        className="input input-bordered input-primary flex items-center justify-between w-full"
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="dropdown-content absolute top-full left-0 bg-base-100 rounded-box shadow-lg p-4 z-50"
        >
          <calendar-range
            ref={rangeRef}
            className="cally calendar calendar-primary"
          >
            <svg
              aria-label="Previous"
              className="fill-current size-4"
              data-slot="previous"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg
              aria-label="Next"
              className="fill-current size-4"
              data-slot="next"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
            <calendar-month className="calendar-month"></calendar-month>
          </calendar-range>
        </div>
      )}
    </div>
  );
};

export default CalendarRangePicker;
