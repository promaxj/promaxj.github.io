function drawLottery() {
    var minNumber = parseInt(document.getElementById("min").value);
    var maxNumber = parseInt(document.getElementById("max").value);
    var excludeNumbersInput = document.getElementById("exclude").value;
    var excludeNumbers = excludeNumbersInput.split(",").map(function(number) {
      return parseInt(number.trim());
    });
  
    if (isNaN(minNumber) || isNaN(maxNumber)) {
      alert("請輸入有效的數字！");
      return;
    }
  
    if (minNumber > maxNumber) {
      alert("最小值不得大於最大值！");
      return;
    }
  
    if (excludeNumbers.some(function(number) { return isNaN(number); })) {
      alert("請輸入有效的排除數字！");
      return;
    }
  
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    } while (excludeNumbers.includes(randomNumber));
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "抽到的數字是：" + randomNumber;
    resultElement.style.fontSize = "72px"; // 將字體大小設定為36px
  }
  