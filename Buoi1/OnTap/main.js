//  CỬA SỔ CONSOLE
// console.log('Hello')
// alert('MINDX')
// prompt('Bạn tên gì?')

// CÁC KIỂU DỮ LIỆU
    //Kiểu số : const; var; let
        //const: dùng cho hằng số
        // const myName ='Han';
        //var: khai báo cho biến toàn cục
        //let: khai báo cho biến cục bộ
        //scope: phạm vi 
        // {
        //     let myAge = 20;
        // }
        // console.log(myAge);

// let number1 = 1;
// let number2 = 2;
// let sumNumber = number1+number2;
// console.log(sumNumber);
    //Kiểu chuỗi
// let chuoi1 = 'Hello';
// let chuoi2 = 'My name is Han';
// let noiChuoi = chuoi1+' '+chuoi2
// console.log(noiChuoi);

    //Kiểu undefinded: không xác định
// let a;
// console.log(a);

    //Kiểu null: giá trị rỗng, không tồn tại
    //Kiểu boolean: true/false

//CÁCH KIỂM TRA KIỂU DỮ LIỆU
// let number1 = 1; //number
// let number2 = '1'; //string
// console.log(typeof(number1)) 
// console.log(number1);
// console.log(typeof(number1))

//TOÁN TỬ SO SÁNH
// if (number1 === number2) {
//     console.log('Bằng nhau');
// }
// else {
//     console.log('Không bằng');
// }
// BIẾN

//CÂU LỆNH IF ELSE
// var myName = 'Khoa'

// if (myName =='Han') {
//     console.log('Xin chào' +myName);
// }
// else if (myName == 'Khoa'){
//     alert ('Hello Khoa')
// }
// else {
//     alert ('hello')
// }

//VÒNG LẶP
//while
//do while
//for
//for in
//for of

//ARRAY
let lop = [
    'JSB',
    'JSA',
    'JSI',
    ['JSB03', 'JSB01', 'JSB02']
]
let so = [6,7,8,9,10]
// console.log(lop);
// console.log(lop[3][1]);

//i đại diện cho vị trí của các phần tử trong mảng
// ptu trong mảng luôn bắt đầu từ vị trí thứ 0
for (let i = 0; i<so.length; i++) {
    console.log(so[i]);
}


// lop = [
//     ('Lớp JSB')
//     ('Lớp JSA')
//     ('Lớp JSI')
// ]


