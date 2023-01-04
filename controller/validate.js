//cách validate: thiết lập các điều kiện nhập dữ liệu
//nếu hợp lệ các tiêu chí => return true; nếu 1 trong các tiêu chí sai thì sẽ báo cho user biết

function kiemTraTrung(idSV, svArr) {
    console.log("idSV, svArr",idSV, svArr);
    //findIndex trả về vị trí của item nếu điều kiện true, nếu ko tìm thấy sẽ return -1
    var viTri = svArr.findIndex(function(item) {
        return item.maSV == idSV;
    });
    if (viTri !== -1) {
        //
        document.getElementById("spanMaSV").innerText = "Mã sinh viên đã tồn tại";
        return false;
    }
    else {
        document.getElementById("spanMaSV").innerText = "";
        return true;
    }
}

//kiểm tra độ dài 6-8 ký tự
function kiemTraDoDai(value, idErr, min, max) {
    var length = value.length;
    if (length < min && length > max) {
        document.getElementById(idErr).innerText = `Độ dài phải từ ${min} đến ${max} kí tự`;
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}