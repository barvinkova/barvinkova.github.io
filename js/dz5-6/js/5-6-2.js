String.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
  }

var timer = new function() {
  var millisec = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var timer;
  var delimeter = ":";
  var stepMillisec = 3;

  this.bind = function () {
    // bind onStart to startBtn
    document.getElementById("startBtn").addEventListener("click", this.onStart);
    // bind onClear to clearBtn
    document.getElementById("clearBtn").addEventListener("click", this.onClear);
    // bind onSplit to splitBtn
    document.getElementById("splitBtn").addEventListener("click", this.onSplit);
  }

  this.onStart = function() {
    // this works when we clicked start
    if (timer > 0) {
      AddToTextArea("Stop");
      // pauseTimer
      clearInterval (timer);
      timer = 0;
      // change button value to Start
      var startBtn = document.getElementById ("startBtn");
      startBtn.value = "Start";
      startBtn.className = "btn btn-success";
    }
    else {
      // start timer
      timer = setInterval(IncreaseTimer, stepMillisec);
      // change start text to Pause
      var startBtn = document.getElementById ("startBtn");
      startBtn.value = "Stop";
      startBtn.className = "btn btn-warning";
    }
  };
  this.onClear = function() {
    // clear timeouts
    clearInterval (timer);
    timer = 0;
    // clear time
    millisec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById ("resultData").value = "";
    // set 0 on input
    Display();
    // set button to start
    var startBtn = document.getElementById ("startBtn");
    startBtn.value = "Start";
    startBtn.className = "btn btn-success";
  };

  this.onSplit = function() {
    AddToTextArea("Split");
  }

  function AddToTextArea(action){
    // adding current tme to textarea
    var textArea = document.getElementById ("resultData");
    textArea.value += "".concat(
      action,
      " ",
      hours.toString().pad(2),delimeter,
      minutes.toString().pad(2),delimeter,
      seconds.toString().pad(2)," ",
      millisec.toString().pad(3),"\n");

  }

  function IncreaseTimer() {
    millisec += stepMillisec;
    if (millisec > 999) {
      seconds += 1;
      millisec = 0;
    }
    if (seconds > 59) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes > 59) {
      hours += 1;
      minutes = 0;
    }
    Display();
    //console.log(millisec);
  }

  function Display() {
    // http://postbarthian.com/javascript/timer.html
    // сформировать строку со временем
    var result = "".concat(
      hours.toString().pad(2),delimeter,
      minutes.toString().pad(2),delimeter,
      seconds.toString().pad(2)," ",
      millisec.toString().pad(3));
    // найти инпут таймера
    var timerInput = document.getElementById("timer");
    // засунуть в инпут таймер строку со временем
    timerInput.value = result;


  }
}

timer.bind();
