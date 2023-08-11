let month = +prompt(`nhập tháng cần tìm:`)
let year = +prompt(`nhập số năm cần tìm:`)
function getNumber(month, year) {
    // Tạo một đối tượng ngày từ tháng và năm 
    let date = new Date(year, month);
    // Đặt ngày là 0 để trở về ngày cuối cùng của tháng trước đó
    date.setDate(0);
    return date.getDate();
}
let number = getNumber(month, year);
console.log(`số ngày cần tìm là: ${number}`);
