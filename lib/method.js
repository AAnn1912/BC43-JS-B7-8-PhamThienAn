//Kiểm tra số nguyên tố

function kiemTra_snt(x) {
  var ketQuaKT = true;
  var u = 0;
  for (var soHang = 1; soHang <= x; soHang++) {
    if (x % soHang == 0) {
      u++;
    }
  }
  if (u !== 2) {
    ketQuaKT = false;
  }
  return ketQuaKT;
}
