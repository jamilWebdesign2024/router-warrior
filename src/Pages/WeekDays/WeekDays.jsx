import React from 'react';

const Weekdays = () => {
  

  return (
    <div className="flex gap-4">
        {

        }
      {days.map((day, index) => (<div
          key={day}
          className={`px-4 py-1 rounded-full text-sm font-medium 
            ${index === currentDay 
              ? 'text-orange-500 bg-orange-100' // Current day style
              : 'text-gray-400 bg-gray-100'    // Other days style (optional)
            }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
