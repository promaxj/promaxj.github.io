function drawLottery() {
    var minNumber = 1; // 最小數字
    var maxNumber = 100; // 最大數字
  
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    document.getElementById("result").innerHTML = "抽到的數字是：" + randomNumber;
    resultElement.style.fontSize = "36px"; // 將字體大小設定為36px
  }