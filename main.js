//array để thêm sinh viên vào mảng (phải tạo ngoài hàm)
var DSSV = [];

//lấy dữ liệu từ localStorage khi user load trang
let dataJson = localStorage.getItem("DSSV_LOCAL");
console.log("🚀 ~ file: main.js:6 ~ dataJson", dataJson)

//kiểm tra nếu có data ở localStorage thì mới gán vào array DSSV
if (dataJson != null) { //nếu user chưa nhập dữ liệu thì sẽ null; có dữ liệu thì sẽ là khác null và khai báo biến bên dưới
    var dataArr = JSON.parse(dataJson);
    //dữ liệu lấy lên từ localStorage sẽ bị mất method => từ array ko có method tinhDTB => convert thành array có method tinhDTB bằng map()
    DSSV = dataArr.map(function(item) {
        var sv = new SinhVien(
            item.maSV, 
            item.tenSV,
            item.emailSV,
            item.matKhauSV,
            item.diemToan,
            item.diemLy,
            item.diemHoa,
        ); 
        return sv;
    });
    renderDSSV(DSSV);
}

//thêm sinh viên
function themSV() {
    var sv = layThongTinTuForm();

    //validate: kiểm tra dữ liệu nhập vào có thỏa mãn các tiêu chí hay ko
    var isValid = true;   ///khai báo để khi có dữ liệu nhập trùng thì sẽ thông báo
    isValid = kiemTraTrung(sv.maSV, DSSV) && kiemTraDoDai(sv.maSV, "spanMaSV", 6, 8);
console.log({isValid});
    //validate độ dài 6-8 ký tự
    kiemTraDoDai(sv.maSV, "spanMaSV", 6, 8);

    if (isValid) {
        //khi dữ liệu nhập không trùng thì sẽ: push thêm sv vào mảng DSSV
        DSSV.push(sv); 
        //convert array DSSV thành json
        var dssvJson = JSON.stringify(DSSV);

        // lưu json vào trong localStorage
        localStorage.setItem("DSSV_LOCAL", dssvJson);
        renderDSSV(DSSV);  //=> để hiển thị được data trong bảng 
    }  
    
}

//xóa sinh viên
function xoaSV(idSV) {
    //splice(viTri, 1)
    var viTri = timKiemViTri(idSV, DSSV);
    if (viTri != -1) {    // -1 nghĩa là không tìm được
        DSSV.splice(viTri, 1);
        renderDSSV(DSSV);
    }
}

//sửa sinh viên
function suaSV(idSV) {
    var viTri = timKiemViTri(idSV, DSSV);
    if (viTri != -1) {
        var sv = DSSV[viTri];
        console.log("🚀 ~ file: main.js:39 ~ suaSV ~ sv", sv);

        //disabled: mục đích khi sửa dữ liệu thì không thể sửa được mục mã sinh viên
        document.getElementById("txtMaSV").disabled = true; 
    }
}
