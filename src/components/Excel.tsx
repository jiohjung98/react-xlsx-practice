import React from 'react';
import * as XLSX from 'xlsx';
import TableComponent from './DataTable';

function ExcelDownloadButton() {
    const data = [
        { name: "홍길동", age: 30, email: "hong@gmail.com" },
        { name: "김철수", age: 20, email: "kim@gmail.com" },
        // 이런식으로 원하는 데이터를 넣으세요.
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
