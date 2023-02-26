var arrN = [];

//thêm số n
document.getElementById("btn-them-so").onclick = function () {
  var themSo = document.getElementById("them-so").value;
  var output = document.getElementById("mang-so");
  arrN.push(themSo);
  output.innerHTML = arrN + " ";
};

// Bài 1: tính tổng số Dương

document.getElementById("btn-tinh-tong-duong").onclick = function () {
  var ketQuaB1 = 0;
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (arrN[i] > 0) {
      ketQuaB1 += Number(arrN[i]);
    }
  }
  document.getElementById("ket-qua-b1").innerHTML =
    "Tổng số dương: " + ketQuaB1;
};

// Bài 2: Đếm số Dương

document.getElementById("btn-dem-so-duong").onclick = function () {
  var ketQuaB2 = 0;
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (arrN[i] > 0) {
      ketQuaB2 += 1;
    }
  }
  document.getElementById("ket-qua-b2").innerHTML =
    "Có " + ketQuaB2 + " số dương trong mãng";
};

//Bài 3: tìm số nhỏ nhất trong mãng

document.getElementById("btn-tim-so-min").onclick = function () {
  var ketQuaB3 = arrN[0];
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (Number(arrN[i]) < Number(ketQuaB3)) {
      ketQuaB3 = arrN[i];
    }
  }
  document.getElementById("ket-qua-b3").innerHTML =
    "Số nhỏ nhất là: " + ketQuaB3;
};

//Bài 4: tìm số dương nhỏ nhất

document.getElementById("btn-tim-so-duong-min").onclick = function () {
  var newArr = [];
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (arrN[i] > 0) {
      newArr.push(arrN[i]);
    }
  }
  var newArrLength = newArr.length;
  var ketQuaB4 = newArr[0];
  for (i = 0; i < newArrLength; i++) {
    if (Number(newArr[i]) < ketQuaB4) {
      ketQuaB4 = newArr[i];
    }
  }

  document.getElementById("ket-qua-b4").innerHTML =
    "Số dương nhỏ nhất là: " + ketQuaB4;
};

// Bài 5: tìm số chẳn cuối cùng

document.getElementById("btn-tim-so-chan-last").onclick = function () {
  debugger;
  var ketQuaB5 = "";
  var arrnLength = arrN.length;
  for (var i = arrnLength - 1; i > 0; i--) {
    if (arrN[i] % 2 == 0 && arrN[i] != 0) {
      ketQuaB5 = arrN[i];
      break;
    } else {
      ketQuaB5 = -1;
    }
  }
  document.getElementById("ket-qua-b5").innerHTML = ketQuaB5;
};

//Bài 6 đổi vị trí 2 số nhập vào
document.getElementById("btn-doi-vi-tri-so").onclick = function () {
  var temPo = 0;
  var nhapSo1 = document.getElementById("vi-tri-can-doi1").value;
  var nhapSo2 = document.getElementById("vi-tri-can-doi2").value;
  temPo = arrN[nhapSo1];
  arrN[nhapSo1] = arrN[nhapSo2];
  arrN[nhapSo2] = temPo;
  document.getElementById("ket-qua-b6").innerHTML = arrN;
};

//Bài 7 Sắp theo thứ tự tăng dần
document.getElementById("btn-sap-xep-tang").onclick = function () {
  debugger;
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength - 1; i++) {
    for (var j = 0; j < arrnLength - i - 1; j++) {
      if (+arrN[j] > +arrN[j + 1]) {
        var temPo = arrN[j];
        arrN[j] = arrN[j + 1];
        arrN[j + 1] = temPo;
      }
    }
  }
  document.getElementById("ket-qua-b7").innerHTML = arrN;
};

//Bài 8 tìm số nguyên tố
document.getElementById("btn-tim-so-nguyen-to").onclick = function () {
  var ketQuaB8 = 0;
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (kiemTra_snt(arrN[i])) {
      ketQuaB8 = arrN[i];

      break;
    }
  }
  document.getElementById("ket-qua-b8").innerHTML = ketQuaB8;
};

//Bài 9 đếm số nguyên

/* thêm số */
var arrNb9 = [];
document.getElementById("btn-them-so-b9").onclick = function () {
  var themSob9 = document.getElementById("them-so-b9").value;
  var outputb9 = document.getElementById("mang-so-b9");
  arrNb9.push(themSob9);
  outputb9.innerHTML = arrNb9 + " ";
};

/* đếm số nguyên */
document.getElementById("btn-dem-so-nguyen").onclick = function () {
  debugger;
  var ketQuaB9 = 0;
  var arrNb9Length = arrNb9.length;
  for (var i = 0; i < arrNb9Length; i++) {
    if (Number.isInteger(Number(arrNb9[i]))) {
      ketQuaB9++;
    }
  }
  document.getElementById("ket-qua-b9").innerHTML = ketQuaB9;
};

//Bài 10 So sánh Âm Dương
document.getElementById("btn-so-sanh").onclick = function () {
  debugger;
  var arrDuong = [];
  var arrAm = [];
  var arrnLength = arrN.length;
  for (var i = 0; i < arrnLength; i++) {
    if (arrN[i] > 0 && arrN[i] !== 0) {
      arrDuong.push(arrN[i]);
    }
    if (arrN[i] < 0 && arrN[i] !== 0) {
      arrAm.push(arrN[i]);
    }
  }
  var soluongAm = arrAm.length;
  var soluongDuong = arrDuong.length;
  if (soluongAm > soluongDuong) {
    document.getElementById("ket-qua-b10").innerHTML = "Số Âm > Số Dương";
  } else if (soluongDuong > soluongAm) {
    document.getElementById("ket-qua-b10").innerHTML = "Số Dương > Số Âm";
  } else {
    document.getElementById("ket-qua-b10").innerHTML = "Số Âm = Số Dương";
  }
};
