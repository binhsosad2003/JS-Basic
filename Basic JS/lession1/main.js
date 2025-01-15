var fullName = 'binh'
alert(fullName);

console.log('log commention')
prompt('Xac nhan du tuoi')
// // built-in function :
// 1. Allert : thông báo trực tiếp trên page
// 2. Console: in ra nội dung ở console
// 3. Confirm: yêu cầu xác nhận trước khi vào page
// 4. Promt: nhập một nội dung ở thông báo trước khi vào page
// 5. Set timeout: truyền vào 1 function set 1 khoảng thời gian tính bằng mmSecond
setTimeout(function(){
    console.log(fullName + Math.random()) 
}, 5000)
// Math.random để in radom ra một chuỗi kí tự ngẫu nhiên                                                                   
// 6. Ser interval: tương tự như setTimeout nhưng chạy liên tục theo định kỳ


// Giới thiệu các toán tử trong JS
// 1. Toán tử số học - Arithmetic
// 2. Toán tử gán - Assigment 
// 3. Toán tử so sánh - Comparison 
// 4. Toán tử login - logical
var a ='5'
var b= '6'
if (a == b){
    console.log('dung')
}else{
    console.log('sai')
}

// Toán tử số học 
// +
// -
// *
// /
// ** lũy thừa 
// % chia lấy số dư
// ++ +1
// -- -1


//Prefic & Postfic khác nhau trong khi thực thi
//Prefic
// việc 1: + 1 cho a, a = a + 1
// việc 2: in ra a sau khi thực thi 
a**= 3
if(a != b){
    console.log(a)
}
//Postfic
// việc 1: in ra một biến a copy  = 5
// việc 2: + 1 cho a , a = a+1
// việc 3: in ra a copy

// Trong điều kiện if else giá trị truyền vào mặc định là true
// ngoại lệ : 0, false, NaN, undefined, chuỗi rỗng, null

// Toán tử logic :
// And &&
// Or ||
// 3 ! not

// Kiểu dữ liệu trong JS

// kiểu nguyên thủy:
// Number
// String
// Boolean
// undefined
// null
// Symbol

// Kiểu phức tạp:
// Function
// Object

//Toán tử logical trong điều kiện if
// && kiểm tra từ bên trái sang thuộc ngoại lệ : 0, false, NaN, undefined, chuỗi rỗng, null thì lấy luôn giá trị đó để làm mặc định
// || kiểm tra từ bên trái sang thuộc ngoại lệ : 0, false, NaN, undefined, chuỗi rỗng, null bỏ qua giá trị đó 

// Một số case sử dụng backslash(/) ex:
// var fullName = 'Tran binh \'dang cap\'';

var firstName = 'Binh';
var lastName = 'Tran';
console.log(`toi la: ${firstName} ${lastName}`)

//Lam viec voi chuoi
var myString = '   Tran binh Vip Pro  ';
//1 length
console.log(myString.length);
//2 find index
console.log(myString.indexOf('vip'));
//3 cut String
console.log(myString.slice(0,5))
//4 Replace
// note biểu thức chính quy: /biểu thức cần tìm/g
console.log(myString.replace('Tran','Thanh'));
//5 Convert to upper case
// console.log(myString.toLowerCase())
//6 Convert to lower case
//7 Trim : loại khoảng trắng 2 đầu
console.log(myString.trim())
//8 Split cắt một chuỗi thành array
var svFPT = 'ngu, dot, dan';
console.log(svFPT.split(', '))
//9 Get a character by index
// console.log(Typeof myString.charAt(1)) trả về 1 String nếu không tìm thấy 
// console,log(myString[1]) trả về undefined nếu không tìm thấy

// Làm việc với Number:
// 1. toString đổi kiểu number thành string
var c = 6.5555;
console.log(c.toString())
// 2. toFixed đổi kiểu number thành String và làm tròn
console.log(c.toFixed(2))

//check array Array.isArray()
var averageSVFPT = [
    'ngu', 'dan', 'pha'
];
//truy xuất mảng
//1 độ dài mảng
//2 lấy phần tử theo index
console.log(averageSVFPT[1])








