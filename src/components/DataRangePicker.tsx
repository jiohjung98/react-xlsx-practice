import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataItem } from '../types/DataItem';

interface DateRangePickerProps {
  selectedData: DataItem[];
  setSelectedData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ selectedData, setSelectedData }) => {
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);

  const fetchDataForMonth = (month: Date | null) => {
    if (month) {
      const startOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
      const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);

      const filteredData = selectedData.filter(item => {
        const currentDate = new Date(item.쿠폰적용일);
        return currentDate >= startOfMonth && currentDate <= endOfMonth;
      });

      setSelectedData(filteredData);
    }
  };

  const handleMonthChange = (date: Date | null) => {
    setSelectedMonth(date);
    fetchDataForMonth(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedMonth}
        onChange={handleMonthChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText="월을 선택하세요"
      />
    </div>
  );
};

export default DateRangePicker;
