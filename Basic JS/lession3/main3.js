//vòng lặp for

var Languages = [
    'English',
    'Japanese',
    'VietNamese',
    'Laos',
    'ThaiLand'
]
var LanguagesLength = Languages.length;
for(var i = 0; i < LanguagesLength; i++){
    console.log(Languages[i]);
}
// vòng lặp for/in
 var User ={
    name: 'Tran Binh',
    Course: 'JS',
    phoneNumber: '09473313',
    age: '21'
 }
 for(var key in User){
    console.log(User[key]);
 }
 //vòng lặp for/of không thể lặp object theo cách thông thường
  for(var value of Languages){
    console.log(value)
  }
  // cách lặp object bằng for/of sử dụng Object.keys hoặc Object.values
  for(var value of Object.keys(User)){
    console.log(User[value])
  }
  //vòng lặp While
  var i = 0;
  while(i< LanguagesLength){
    console.log(Languages[i])
    i++;

  }
  //vòng lặp do/while
  var i = 0
  var isSuccessful = false;
  do {
    i++;
    console.log('nạp thẻ lần'+1);
    //thành công
    if(false){
        isSuccessful = true;
    }
  } while(!isSuccessful && i <= 3);

  //Break trong vòng lặp
  for(i = 0; i < 10; i++){
    console.log(i)
    if(i>=5){
      break;
    }
  }
  //COntinue trong vòng lặp
  for (i = 0; i < 10; i++){
    if(i % 2 !== 0){
      continue;
    }
    console.log(i)
  }
  //vòng lặp lồng nhau
  var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]   
  ];
  for (var i = 0; i < myArray.length; i++){
    for(var j = 0; j <myArray[i].length;j++){
      console.log(myArray[i][j]);
    }
  }
  // Array method
  // for Each()
  // every() trả về kiểu bool 1 phần tử trong mảng sai = false
  // some() trả về kiểu bool 1 phần tử trong mảng đúng thì dừng vòng lặp và trả về true
  // find()
  // filter()
  // Map()
  // Reduce()

  var courses = [
    {id: 0,
      name:'JS',
      coin : 0
    },
    { id: 1,
      name: 'JS',
      coin: 250,
    },
    {  id: 2,
      name: 'JAVA',
      coin: 0,
    },
    {id: 3,
      name: 'C',
      coin: 150,
    }
  ];
   courses.forEach(function(course, index){
    console.log(index, course)
   });

   var iSFree = courses.every(function(course,index){
    return course.coin === 0;
   })
   console.log(iSFree);

   var iSFree = courses.some(function(course,index){
    return course.coin === 0;
   })
   console.log(iSFree);
   
   var findCourse = courses.find(function(course,index){
    return course.name === 'JS';
   })
   console.log(findCourse);

   var filterCourse = courses.filter(function(course,index){
    console.log(course)
    return course.name === 'JAVA';
   })
   console.log(filterCourse);

  var courseHandle = courses.map(function(course,index){
    return {
      id: course.id,
      name: `khoa hoc: ${course.name}`,
      coin: `gia: ${course.coin}`
    }
  })
  console.log(courseHandle)
var i = 0;
var totalCoin = courses.reduce(function(acumulator, currentValue, currentIndex, originArray){
  i++;
  var total = currentValue.coin + acumulator;
  console.table({
    'lượt chạy': i,
    'biển tích trữ': acumulator,
    'Giá Khóa học': currentValue.coin,
    'Tích Trữ được': total
  });
  console.log(currentValue)
  return total;
},0)
console.log(totalCoin)

var depth = [1, 2, 3,[4, 5],6,7,[8, 9]];

var totalNumber = depth.reduce((number, depthItem)=>{
  return number.concat(depthItem)
}
  ,[])
  console.log(totalNumber)

  //includes method

  //String , array
  // console.log(Array.prototype.includes);
  // console.log(String.prototype.includes);
  var myString = 'anh hien alaska';
  console.log(myString.includes('hien', 0));

  //callback
  //1. là hàm
  //2. truyền qua đối số
  //3. Được gọi lại (trong hàm nhận đối số)
  function myFunction(param){
    if(typeof param === 'function'){
      param('hien alaska')
    }
  }
  function myCallback(value){
    console.log('value: ', value);
  }
  myFunction(myCallback)


  Array.prototype.map2 = function(callback){
    var arrayLength = this.length;
    for(i = 0; i< arrayLength; ++i){
      callback(this[i], i)
    }
  }
  var semester = [
    'lop 6',
    'lop 7',
    'lop 8',
    'lop 9'
  ]
  courses.map2(function(course, index){
    console.log(index, course);
  });

  
