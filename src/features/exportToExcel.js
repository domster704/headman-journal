/**
 * @param {HTMLElement} table
 */
export default function exportToExcel(table) {
    let table_node = table.cloneNode(true);
    let filename = 'table.xls';

    let tableChildren = Array.from(table_node.querySelectorAll('*'));
    tableChildren.forEach(el => {
        el.classList = "";
        if (el.tagName === 'INPUT') {
            el.outerHTML = `${el.value}`;
        }
        if (el.tagName === 'TABLE') {
            el.border = '1';
        }
    });

    let uri = 'data:application/vnd.ms-excel;base64,',
        template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body>${table_node.outerHTML}</body></html>`,
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            })
        }
    let ctx = {worksheet: name || 'Worksheet', table: table_node.outerHTML};

    const a = document.createElement('a');
    let url = uri + base64(format(template, ctx));
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}