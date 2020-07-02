// eventListner 

// on 속성을 이용하여 이벤트를 등록시에는 이벤트 당 하나의 함수 밖에 등록이 안됨
// EventListener를 이용하면 여러 이벤트를 등록가능 (권장방식)

addEventListener(eventType, listenerFunction);
removeEventListener(eventType, listenerFunction);
dispatchEventListener(event);


// 사용 예제 
var myBtn = document.getElementById("my-btn");

myBtn.addEventListener("click", function(e) {
    alert("MyBtn Clicked");
}); // 이벤트 등록

function mbMouseOverHandler(e) {
    alert("MyByn MouseOvered");
    myBtmn.removeEventListener("mouseover", mbMouseOverHandler);
}

myBtn.addEventListener("mouseover", mbMouseOverHandler);

/*Internet Explorer 예외처리
addEventListener 등의 함수는 IE9 이상부터 지원합니다.
IE8은 attachEvent 함수가 존재하며, 그 이하 버전은 onclick 등의 속성을 사용해야합니다.
*/

function addEventListener(obj, evt, func) {

    if ('addEventListener' in window)
        obj.addEventListener(evt, func, false);

    else if ('attachEvent' in window)
        obj.attachEvent('on' + evt, func);

    else
        obj["on" + evt] = func;
}


// jQuery 이벤트 

// on이라는 메소드를 통해 이벤트등록 가능 

$('#some-object').on('click', function(event) {
    alert('jQuery event');
})