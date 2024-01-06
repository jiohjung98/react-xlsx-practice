import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import TableComponent from './DataTable';
import { DataItem } from '../types/DataItem';
import ReactPaginate from 'react-paginate';
import './Pagination.css'; 

function ExcelDownloadButton() {
    const totalData: DataItem[] = [
        { 쿠폰적용일: "2023.10.21", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '100회', 쿠폰할인금액: '10원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.01'},
        { 쿠폰적용일: "2023.10.20", 쿠폰번호: 29, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '99회', 쿠폰할인금액: '50원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.02'},
        { 쿠폰적용일: "2023.10.19", 쿠폰번호: 28, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '98회', 쿠폰할인금액: '100원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.03'},
        { 쿠폰적용일: "2023.10.18", 쿠폰번호: 27, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '97회', 쿠폰할인금액: '150원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.04'},
        { 쿠폰적용일: "2023.10.17", 쿠폰번호: 26, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '96회', 쿠폰할인금액: '200원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.05'},
        { 쿠폰적용일: "2023.10.16", 쿠폰번호: 26, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '95회', 쿠폰할인금액: '300원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.06'},
        { 쿠폰적용일: "2023.10.15", 쿠폰번호: 25, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '94회', 쿠폰할인금액: '400원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.07'},
        { 쿠폰적용일: "2023.10.14", 쿠폰번호: 24, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '93회', 쿠폰할인금액: '500원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.08'},
        { 쿠폰적용일: "2023.10.13", 쿠폰번호: 23, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '92회', 쿠폰할인금액: '600원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.09'},
        { 쿠폰적용일: "2023.10.12", 쿠폰번호: 22, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '91회', 쿠폰할인금액: '650원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.10'},
        { 쿠폰적용일: "2023.10.11", 쿠폰번호: 21, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '90회', 쿠폰할인금액: '700원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.11'},
        { 쿠폰적용일: "2023.10.10", 쿠폰번호: 20, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '89회', 쿠폰할인금액: '750원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.12'},
        { 쿠폰적용일: "2023.10.09", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '88회', 쿠폰할인금액: '800원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.13'},
        { 쿠폰적용일: "2023.10.08", 쿠폰번호: 19, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '87회', 쿠폰할인금액: '850원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.14'},
        { 쿠폰적용일: "2023.10.07", 쿠폰번호: 18, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '86회', 쿠폰할인금액: '900원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.15'},
        { 쿠폰적용일: "2023.10.06", 쿠폰번호: 17, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '85회', 쿠폰할인금액: '950원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.16'},
        { 쿠폰적용일: "2023.10.05", 쿠폰번호: 16, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '84회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.17'},
        { 쿠폰적용일: "2023.10.04", 쿠폰번호: 15, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '83회', 쿠폰할인금액: '1050원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.18'},
        { 쿠폰적용일: "2023.10.03", 쿠폰번호: 14, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '82회', 쿠폰할인금액: '1100원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.19'},
        { 쿠폰적용일: "2023.10.02", 쿠폰번호: 13, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '81회', 쿠폰할인금액: '1200원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.01", 쿠폰번호: 12, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '80회', 쿠폰할인금액: '1300원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.21'},
    ];

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0); 

    const [sortBy, setSortBy] = useState('쿠폰적용일');

    const handleSortBy = (criteria: string) => {
        setSortBy(criteria);
    };

    const sortedData = [...totalData].sort((a, b) => {
        if (sortBy === '쿠폰적용일') {
            return new Date(a.쿠폰적용일).getTime() - new Date(b.쿠폰적용일).getTime();
        } else if (sortBy === '쿠폰할인금액') {
            return parseInt(a.쿠폰할인금액) - parseInt(b.쿠폰할인금액);
        } else if (sortBy === '정산완료일') {
            return new Date(a.정산완료일).getTime() - new Date(b.정산완료일).getTime();
        } else if (sortBy === '사용건수') {
            return parseInt(a.사용건수) - parseInt(b.사용건수);
        }
        return 0;
    });



    const offset = currentPage * itemsPerPage;
    const currentData = sortedData.slice(offset, offset + itemsPerPage);

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(currentData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, '다운로드.xlsx');
    };

    const handleDownloadAll = () => {
        const worksheet = XLSX.utils.json_to_sheet(totalData); 
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, '전체_다운로드.xlsx');
    };

    const handlePageClick = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
          <TableComponent data={currentData} />
          <button onClick={handleDownload}>현재 페이지 엑셀 다운로드</button>
          <button onClick={handleDownloadAll}>전체 데이터 엑셀 다운로드</button>
          <button onClick={() => handleSortBy('쿠폰적용일')}>쿠폰 적용일 순</button>
          <button onClick={() => handleSortBy('쿠폰할인금액')}>금액 순</button>
          <button onClick={() => handleSortBy('정산완료일')}>정산 완료일 순</button>
          <button onClick={() => handleSortBy('사용건수')}>사용건수 순</button>
      
          <ReactPaginate 
            className="pagination" 
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'hidden'}
            pageCount={Math.ceil(totalData.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      );
}

export default ExcelDownloadButton;
