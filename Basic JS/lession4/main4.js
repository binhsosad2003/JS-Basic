//for each 2
Array.prototype.forEach2 = function(callback){
    for(var index in this){
       if (this.hasOwnProperty(index)){
        callback(this[index, index, this]);
       }
    }
}
var courses = [
    'JS',
    'Java',
    'C++',
    'C#'
]
console.log(courses)

courses.forEach2(function(course, index, array){
    console.log(course, index, array)
})
// filter 2
Array.prototype.filter2 = function(callback){
    var output =[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (result){
                output.push(this[index])
            }
        }
    }
    return output;
}  
let coursess = [
    {
        name: 'Java',
        coin: 500
    },
    {
        name: 'Ruby',
        coin: 1500
    },
    {
        name: 'JS',
        coin: 300
    },
    {
        name: 'C#',
        coin: 1000
    }
];

let filterCourse = coursess.filter2(function(course, index, array){
    return course.coin > 700;
})
    console.log(filterCourse)
//every2
Array.prototype.every2 = function(callback){
    var output = true;
    for (var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this);
            if (!result){
                output = false;
                break;
            }
        }
    }
    return output;
}
let semesters = [
    {
        name: 'Math',
        endSubmition: 2025,
        IsEnding: true,
    },
    {
        name: 'Biology',
        endSubmition: 2022,
        IsEnding: true,
    },
    {
        name: 'Chemistry',
        endSubmition: 2023,
        IsEnding: true,
    },
    {
        name: 'Physic',
        endSubmition: 2024,
        IsEnding: true,
    }
];
let everySemester = semesters.every2(function(semester,index,array){
    return semester.IsEnding;
})
console.log(everySemester);
// HTML DOM có 3 thành phần : 
// 1. Element: ID, class, tag
//CSS selector, HTML collection 
// 2. Attribute
// 3. text
//Browser: HTML -> DOM -> WEB API
document.write('Hello gays')

// var headingNode = document.getElementById('heading')
// console.log({
//     element: headingNode
// })
// let HeadingNodes = document.getElementsByClassName('heading')
// console.log({
//     element : HeadingNodes
// })
// let HeadingNodes = document.getElementsByTagName('h1')
// console.log({
//     element : HeadingNodes
// })
let HeadingNode = document.querySelector('.heading')// .div . thẻ: first child or .div .thẻ: nth-child(stt của thẻ)
console.log({
    element : HeadingNode
})
 //JSON : Javascript Object Notation là 1 định dạng dữ liệu(chuỗi)
 // JSON: Number, Boolean, Null, Array, Object, String.
  
 let json = '{"Name":"Tran Binh","Age":22}';

 let Object = JSON.parse(json);
 console.log(Object);

 //Async: setTimeOut, setInterval, fetch, XMLHttpRequest, file reading , request animation frame
//Promise
//1. Pending
//2. Fullfilled
//3. Rejected

let promise = new Promise(function(){
    //logic thành công: resolve() ; Thất bại: reject()
});
 promise
    .then(function(){
        console.log('succesfully')
    })
    .catch(function(){
        console.log('Failure')
    })
    .finally(function(){
        console.log('Done')
    })
    function sleep(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve,ms)
        })
    }
    sleep(1000)
    .then(()=>{
        console.log(1);
        return sleep(1000)
    })
    .then(()=>{
        console.log(2);
        return sleep(1000)
    })