import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      if (start && end) {
        setStartDate(start);
        setEndDate(end);
      }
    }
  };

  return (
    <div>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        placeholderText="조회 기간을 선택하세요"
      />
      <p>
        {startDate && endDate && (
          <>선택된 기간: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</>
        )}
      </p>
    </div>
  );
}

export default DateRangePicker;
