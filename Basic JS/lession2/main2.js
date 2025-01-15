// làm việc với Array

// 1. to String
// 2. Join biến array thành chuỗi có thể thay đổi đc dấu
// 3. Pop 
// 4. Push
// 5. Shift
// 6. UnShift
// 7. Splicing
// 8. Concat
// 9. Slicing

var languages = [
    'english',
    'vietnamese',
    'rushian'
]

console.log(languages.toString());
console.log(languages.join(', '));
console.log(languages.pop()); //xóa phần tử cuối mảng và hiện ra phần tử đã xóa
console.log(languages.push('chinese','Japanese')); //thêm phần tử cuối mảng
console.log(languages.shift()); //xóa phần tử đầu mảng và hiện ra phần tử đã xóa
console.log(languages.unshift('Laos',"Korean")) //thêm phần tử đầu mảng
languages.splice(3,2,'Thanland','Romania'); //xóa theo yêu cầu trỏ vào vị trí của index và độ dài và chèn một chuỗi mới
console.log(languages)

var languages2 = ['Frence','German'];
console.log(languages.concat(languages2)); // nối mảng
console.log(languages2.slice(1,2)) //xóa phần tử chỉ định

//function
//Tham số trong hàm
function panCake(){
    console.log(arguments) // có tính chất giống mảng
}
panCake(['chili','carrea', 'chocolate']);

function human(){
    var emotionHuman = '';
    for(var param of arguments){
        emotionHuman+= `${param} -`
    }
    console.log (emotionHuman);
}
human('hard', 'kind', 'selfish', 'charming')



//Declaration function có thể đc sử dụng trên dòng định nghĩa
function showmassage() {
    console.log('pro');
}
//Expression function không thể sử dụng trên dòng định nghĩa
var showmassage2 = function (){
    console.log('noob');

}

function Cong(a, b){
    return a + b;
}

var Result = Cong(2,5);
console.log(Result);

//khởi tạo đối tượng
//prototype thêm trực tiếp một thuộc tính vào hàm khởi tạo đối tượng ở bên ngoài

function User(firstName, lastName,phoneNumber,Course){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.Course = Course;
}
User.prototype.className = 'D6';

var Author = new User('Binh', 'Tran', '09879274','English');
var Student = new User('A', 'Tran Van','01482932', 'French');

console.log(Author);
console.log(Student);


var date = new Date();
var day = date.getDate();
console.log(day)


//toán tử 3 ngôi
var Timeline ={
    year : '2024',
    payment : '300000'
}
if (Timeline.payment != 0){
    console.log(`${Timeline.payment} dong`)
} else{
    console.log('miễn phí')
}

var result = Timeline.payment > 0? `${Timeline.payment} dong`:`Miễn phí`;
console.log(result)