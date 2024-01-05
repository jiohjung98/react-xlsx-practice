import React from 'react';
import * as XLSX from 'xlsx';
import TableComponent from './DataTable';
import { DataItem } from '../types/DataItem';

function ExcelDownloadButton() {
    const data: DataItem[] = [
        { 쿠폰적용일: "2023.10.21", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '100회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.20", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '99회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.19", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '98회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.18", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '97회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.17", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '96회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.16", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '95회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.15", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '94회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.14", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '93회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.13", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '92회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.12", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '91회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.11", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '90회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.10", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '89회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.09", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '88회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.08", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '87회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.07", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '86회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.06", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '85회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.05", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '84회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.04", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '83회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.03", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '82회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.02", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '81회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
        { 쿠폰적용일: "2023.10.01", 쿠폰번호: 30, 관리쿠폰명: "가을 선착순 쿠폰", 사용건수: '80회', 쿠폰할인금액: '1000원', 쿠폰취소금액:'0원', 지원금액: '500원', 정산금액: '1000원', 정산완료일:'2023.11.20'},
    ];

    const handleDownload = () => {
        /* 배열을 워크시트로 만들기 */
        const worksheet = XLSX.utils.json_to_sheet(data);

        /* 워크북 만들기 */
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        /* 파일로 저장 */
        XLSX.writeFile(workbook, "다운로드.xlsx");
    };

    return (
        <div>
          <TableComponent data={data} />
          <button onClick={handleDownload}>엑셀 다운로드</button>
        </div>
      );
}

export default ExcelDownloadButton;
