// [[제어문]]

// [조건문]

// if, else
var score = 0;
if (score >= 90)
    alert('A');
else if (score >= 80)
    alert('B');
else if (score >= 70)
    alert('C');
else
    alert('F');


// switch
switch (n){
    case 0 :
        break;
    case 1 :
        break;
}


// 논리 && and || or ! Not

/*
몇 가지 값 이외에는 boolean 형변환시 모두 true가 됩니다.
false가 되는 특정한 값들은 아래가 있습니다.

0, "" (빈 문자열), undefined, null, NaN
*/


// [반복문]

// while 
var i = 0
while (true){
    document.write(i);
    if (++i > 5) break;
}

// for 
var colors = ['red', 'blue', 'green'];
for (var i = 0; i < 3; i++ ){
    document.write(colors[i])
}

// for in 
var me = {
    'name' : 'young',
    'birth' : 1996,
    'sex' : 'm'
}

document.write('<h3>colors</h3>')

for (var i in colors)
    document.write(i + ": " + colors[i]+'<br>');


document.write('<h3>me</h3>')

for (var i in me)
    document.write(i+": "+colors[i]+'<br>');

    