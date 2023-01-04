//file controller dùng để cập nhập thông tin

function layThongTinTuForm() {
  //lấy thông tin từ form
  var _maSV = document.getElementById("txtMaSV").value;
  var _tenSV = document.getElementById("txtTenSV").value;
  var _emailSV = document.getElementById("txtEmail").value;
  var _matKhauSV = document.getElementById("txtPass").value;
  var _diemToan = document.getElementById("txtDiemToan").value * 1;
  var _diemLy = document.getElementById("txtDiemLy").value * 1;
  var _diemHoa = document.getElementById("txtDiemHoa").value * 1;

  //tao object sinh vien (sử dụng lớp đối tượng)
  return new SinhVien(
    _maSV,
    _tenSV,
    _emailSV,
    _matKhauSV,
    _diemToan,
    _diemLy,
    _diemHoa
  );
}


/*render để hiển thị thông tin nhập ra màn hình */
function renderDSSV(svArr) {
  /** render danh sách sinh viên
    => trước hết tạo ra biến để chứa các thẻ tr (tr: table row - các dòng của bảng) */
  var contentHTML = "";
  for (var index = 0; index < svArr.length; index++) {
    var sv = svArr[index];

    //mỗi 1 SV sẽ tạo 1 thẻ td tương ứng => tương ứng với các ô trong bảng
    var contentTr = 
            `<tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.emailSV}</td>
                <td>${sv.tinhDTB()}</td>
                <td>
                <button onclick="xoaSV('${sv.maSV}')" class="btn btn-danger">Xóa</button>
                <button onclick="suaSV('${sv.maSV}')" class="btn btn-warning">Sửa</button>
                </td>
            </tr>`; ////điểm trung bình: tạm thời để là 0  ; '${sv.maSV}' dấu ' dùng để không phân biệt số và chữ, như vậy có thể xóa được dữ liệu ở mục xóa SV
    contentHTML = contentHTML + contentTr;
  }
  //show ra bảng hiển thị
document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

//tim kiem vi tri
function timKiemViTri(id, arr) {
  var viTri = -1;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index].maSV == id) {
      viTri = index;
    }
  }
  return viTri;
}
