function drawLottery() {
    var minNumber = parseInt(document.getElementById("min").value);
    var maxNumber = parseInt(document.getElementById("max").value);
  
    if (isNaN(minNumber) || isNaN(maxNumber)) {
      alert("請輸入有效的數字！");
      return;
    }
  
    if (minNumber > maxNumber) {
      alert("最小值不得大於最大值！");
      return;
    }
  
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "抽到的數字是：" + randomNumber;
    resultElement.style.fontSize = "72px"; // 將字體大小設定為36px
  }
  