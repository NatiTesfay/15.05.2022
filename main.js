// var myArray = ['hello', 'w', 8568 , true];
// console.log(myArray[2]);

// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
    
// }

// var names = ['shimon , nati , lior , daniel , ran'];
// console.log(names);

// var myArray = ['shimon' , 'nati' , 'lior' , 'daniel' , 'ran'];
// console.log(myArray)
// console.log(myArray[3])
// for (var i = 0; i<myArray.length; i++) {
//     console.log(myArray[i]);
// }

// var myArray =[100,200,300,400,500,600,700,800];
// console.log(myArray[5]);
// for (var i =0; i<myArray.length; i++) {
//     console.log(myArray[i]);
// }


// var myArray = [1,5,2,6,30,15,9,44,8,7];
// // var tempArray; //הוספת משתנה ללא ערך
// // var tempindex=0; // הוספת משתנה עם ערך
// console.log(myArray);
// for (var i =0; i < myArray.length ; i++) {
//     if (myArray[i]%2==0) {
//     // tempArray[tempindex++] = myArray[i]; // יצירת מערך של מספרים זוגיים
//     console.log(myArray[i]);
//     }
// }


// var myArray = ['hello',2,'world','jacob',6,7,'bye',96];
// for (var i =0; i<myArray.length; i++) {
//     if (myArray[i] * 0 != 0) { //פעולה חשבונית על הטקסט
//         console.log(myArray[i]); 
//     }
//     // if (myArray[i]%2!=0 && myArray[i] % 2==0) {
//     // console.log(myArray[i]);
//     // }
// }


// var somArray = [];
// somArray.push(3); //פונקציית פוש נותנת להוסיף נתון למערך
// somArray.push(7); //פונקציית פוש נותנת להוסיף נתון למערך
// somArray.push(52); //פונקציית פוש נותנת להוסיף נתון למערך


// var somArray = [];
// somArray.push(9);
// console.log(somArray)

// var somArray = [];
//  console.log(somArray);
//  for (var i = 0; i<10; i++) {
//      somArray.push(i);
//  }


// var myArray = [5,3,7,8,11];
// var sum = 0; 
// var avg = 0;
// for (var i =0 ; i< myArray.length; i++) {
//     sum +=myArray[i];
    
//     avg = sum /i;

   
// }
// console.log(sum)
// console.log(avg);


// var myArray = ['nati', 'avi','ron','ram','lior'];
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


// function myfunc(x){
//  var myArray = [2,5,8,9];
//  for (var i =0 ; i<myArray.length;i++) {
//      if(x ==  [i]){

//    return console.log(true);
//      }
//  else{
//      return console.log(false);
//  }
//  }
// }
// myfunc(5);

// function myfunc(){
//     var myArray =[2,5,7,6,9,2];
//     for (var i=0; i < myArray.length; i++) {
//          if (myArray[i] %2==0){
//              console.log(myArray[i]);
//          }
//     }
// }
// myfunc();


// function myfunc(x=[],y=[]){
//     if (x.length == y.length) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// myfunc([1,2,4,],[2,4,5,]);


// function myfunc(array=[]){
//     max =array[0]
//    for (var i =0; i<array.length; i++) {
//        if (max <array[i]) {
//            max=array[i];
//        }
//    }
//    console.log(max);
// } 
// myfunc([1,2,5,47,7]);


// function myfunc(array=[]){
//     minIndex = 0
// min = array[0];
// for (var i =0; i>array.length; i++) {
//     if (min>array[i]) {
//         min = array[i];
//         minIndex = i;
//     }  
// }
// console.log(min,minIndex);
// }
// myfunc([1,2,5,47])


// function myfunc(array=[]){
//     var sum =0;
//     for (var i =0;i<array.length; i++) {
//          sum =sum+array[i];

//     }
//     console.log(sum);
// }
// myfunc([1,2,5,4]);

// var array =[0];
// function myfunc(array=[]){
//    var nums = array

//    for (var i =0; i<array.length; i++) {
//        if (nums <array[i]) {
//            nums=array[i];
//        }
       
//    }
//    console.log(Math.max(...nums)*Math.min(...nums));
// } 
// myfunc([11,2,30,50]);

// function myfunc([]){
//     var myArray =[7,10,3,5,2,8];
//     for (var i = 0; i<myArray.length; i++) {
//         if (myArray[i]%2 == 0) {
//             console.log(myArray[i],i);
//         }
//     }
// }
// myfunc([])

// function myfunc([]){
//     var myArray=[4,7,90,55,60];
//     var sum =0;
//     for (var i =0; i < myArray.length; i++) {
//         if (myArray[i] %2 == 1) {
//           sum = sum + myArray[i];
//           console.log(sum);
//         }
//     }
// }
// myfunc([])

// function myfunc([]){
//     var names =['avi','or','yossi','ran'];
//     var name =0;
//     for (var i = 0; i < names.length; i++ ) {
//     }
// }
// myfunc([]);


// function maxMin(sumArray) {
//     var min =sumArray[0];
//    for (var i = 0; i < sumArray.length; i++) {
//        if (min > sumArray[i]) {
//          min = sumArray[i];
//         //    console.log(i ,"i");
//            console.log(sumArray[i] ,"sumArray");
//         //    console.log(sumArray[0]);
//        }
//    }
// }
// var c = [20,50,8,36]
 
// maxMin(c);



// function ages([]) {
//     var nums =[10,20,15,30,64];
// for (var i = 0; i < nums.length; i++) {
//           if (nums[i] >20) {
//               return nums[i];
//           }
//         console.log(nums[i]);
//     }
// }
// ages([]);


// function namePeople() {
//     var nums = [5,10,15,20,8];
//     var sum = [5+10+15+20+8];
//     for (let i = 0; i < nums.length; i++) {
//          if (sum <= 13) {
//              console.log('bar-mizva');
//          }
//          if (sum == 12) {
//              console.log('bat-mizva');
//          } else { 
//              console.log('kid');
//          }
//          return sum;
//     }
// }
// namePeople();

// function funcText() {
//     var text= ['javascrit is not JAVA'];
//     for (let i = 0; i <= 1000; i++) {
//         if (text[i] < 0) {
//         }
//         console.log(text[i]);
//     }
// }
// funcText();
