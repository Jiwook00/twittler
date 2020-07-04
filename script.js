// your code here

// 값들 지정해주기
let inputUsername = document.querySelector('#inputusername')
let inputComment = document.querySelector('#inputComment')
let clickTweetButton = document.querySelector('#tweetbutton')
let checkTweetButton = document.querySelector('#checktweetbutton')
let backButtonClick = document.querySelector('#backchecktweetbutton')

// 트윗버튼 클릭했을때 appendNewComment함수실행
// 앞쪽에 트윗 추가
// 온클릭 이벤트 실행
clickTweetButton.onclick = appendNewComment
checkTweetButton.onclick = randomTweet
backButtonClick.onclick = backButton


// 날짜 구하는 함수
function getDate () {
    let today = new Date();
    let month = today.getMonth() + 1
    time = today.getFullYear() + '-' + month + '-' + today.getDate() + ' '
    + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
}


//  앞쪽에 트윗 추가하기 appendNewComment함수
// + 날짜 추가
function appendNewComment () {
    let li = document.createElement('li');

    getDate();
   
    if(inputUsername.value.length === 0 || inputComment.value.length === 0) {
      return alert("이름 또는 내용을 입력해 주세요")
     }  
    

    

    li.className = 'aComment';
    li.innerHTML = '<div class= "absolute">' + time + '</div>' + '<div class= "username">' + inputUsername.value + 
                  '</div><div class= "content">' + inputComment.value + '<hr>' + '</div>'
    
    let parent = document.querySelector('#tweetAllcomment')
  
    parent.prepend(li)

    let userInfo = {}
    userInfo.user = inputUsername.value
    userInfo.message = inputComment.value
    userInfo.created_at = time

    DATA.push(userInfo)
    
    addNew()

   
 
  }


  //랜덤 트윗 생성 함수
  function randomTweet () {
    let li = document.createElement('li');
    
randomUserName = randomUser[getRandomInt(0, randomUser.length)];

randomTweetMessage = randomMessage[getRandomInt(0, randomMessage.length)];

  getDate () 

    li.className = 'aComment';
    li.innerHTML = '<div class= "absolute">' + time + '</div>' + '<div class= "username">' + randomUserName + 
                  '</div><div class= "content">' + randomTweetMessage + '</div>' + '<hr>';
    
    let parent = document.querySelector('#tweetAllcomment')
  
    parent.prepend(li)

    let randomUserInfo = {}
    randomUserInfo.user = randomUserName
    randomUserInfo.message = randomTweetMessage
    randomUserInfo.created_at = time

    DATA.push(randomUserInfo)

    addNew()

}

  
///비교해서 보이지 않게 하기
function findUserComment(selectedUsername) {
  let tweetBox = document.querySelectorAll('li.aComment')
  let nameInTweetBox = document.querySelectorAll('div.username');

  for(i = 0; i < tweetBox.length; i++) {
   if(nameInTweetBox[i].innerText.match(selectedUsername)) {
    tweetBox[i].style.display = ""; 
 } else {
    tweetBox[i].style.display = "none"
}
}
}


function backButton() {
  let tweetBox = document.querySelectorAll('li.aComment')
  let nameInTweetBox = document.querySelectorAll('div.username');

  for(i = 0; i < tweetBox.length; i++) {
    tweetBox[i].style.display = ""; 
}
}










  let addNew = function() {
    let addNewUserName = document.querySelector('.username')
    addNewUserName.onclick = findClickName
  }

  
//
  let clickName = document.querySelectorAll('.username')

for(let i = 0; i < clickName.length; i++){
  clickName[i].onclick = findClickName
}
 
function findClickName() {
     let findedname = event.target.textContent;
     findUserComment(findedname);
   }



// document.querySelectorAll('.aComment')





// function filterName (findedname) {
//   for(let i = 0; i < DATA.length; 1++) {

//     if( DATA[i].user !== String(findedname) ) {
     
//        document.querySelectorAll('.aComment')[i].style.display = 'none'
    
//     }
//    }
//   } 




  // function appendNewComment () 함수가 실행 되었을때



// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';



