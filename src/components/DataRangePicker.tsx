/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataItem } from '../types/DataItem';

interface DateRangePickerProps {
  totalData: DataItem[];
  setSelectedData: (data: DataItem[]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ totalData, setSelectedData }) => {
  const [selectedStartMonth, setSelectedStartMonth] = useState<Date | null>(null);
  const [selectedEndMonth, setSelectedEndMonth] = useState<Date | null>(null);

  const fetchDataForRange = () => {
    // 선택된 범위 내의 데이터 필터링
    const filteredData = totalData.filter(item => {
      if (selectedStartMonth && selectedEndMonth) {
        const couponDate = new Date(item.쿠폰적용일);
        const startMonthYear = selectedStartMonth.getFullYear();
        const startMonthIndex = selectedStartMonth.getMonth();
        const endMonthYear = selectedEndMonth.getFullYear();
        const endMonthIndex = selectedEndMonth.getMonth();
        const dataMonthYear = couponDate.getFullYear();
        const dataMonthIndex = couponDate.getMonth();

        return (
          (dataMonthYear > startMonthYear || (dataMonthYear === startMonthYear && dataMonthIndex >= startMonthIndex)) &&
          (dataMonthYear < endMonthYear || (dataMonthYear === endMonthYear && dataMonthIndex <= endMonthIndex))
        );
      }
      return true;
    });

    setSelectedData(filteredData);
  };

  const handleRangeSelection = () => {
    fetchDataForRange();
  };

  const handleStartMonthChange = (date: Date | null) => {
    setSelectedStartMonth(date);
  };

  const handleEndMonthChange = (date: Date | null) => {
    setSelectedEndMonth(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedStartMonth}
        onChange={handleStartMonthChange}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        placeholderText="조회를 시작할 달을 선택하세요"
      />
      <DatePicker
        selected={selectedEndMonth}
        onChange={handleEndMonthChange}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        placeholderText="조회를 끝낼 달을 선택하세요"
      />

      <button onClick={handleRangeSelection}>기간 선택</button>
    </div>
  );
};

export default DateRangePicker;
