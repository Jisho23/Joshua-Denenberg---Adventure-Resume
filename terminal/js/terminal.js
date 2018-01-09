// ===== Global Terminal Variables ===========================================================
var toggleInput = true;

$(function() {
  // ===== Onload Functions ===========================================================
  displayResize();
  messageServer("get games");

  // ===== Event Handlers =============================================================
  // ----- Input Submit ---------------------------------------------------------------

  $("#console").submit(function(event) {
    event.preventDefault();
    if (toggleInput) {
      var inputString = $("#input").val();
      inputString = inputString.trim();
      $("#input").val("");
      toScreen(inputString, "user");
      if (inputString !== "") {
        messageServer(inputString);
        if (inputString !== inputBuffer[inputBuffer.length - 1]) {
          inputBuffer.push(inputString);
        }
      }
    }
    inputBufferIndex = inputBuffer.length;
  });
  // ----- Input Buffer ---------------------------------------------------------------
  var inputBuffer = [];
  var inputBufferIndex = 0;
  $(document).keydown(function(event) {
    switch (event.which) {
      case 38: // up
        if (inputBufferIndex > 0) {
          --inputBufferIndex;
        }
        $("#input").val(inputBuffer[inputBufferIndex]);
        break;
      case 40: // down
        if (inputBufferIndex < inputBuffer.length) {
          ++inputBufferIndex;
        }
        $("#input").val(inputBuffer[inputBufferIndex]);
        break;
      default:
        return;
    }
    event.preventDefault();
  });
  // ----- Window Resize Listener -----------------------------------------------------
  $(window).resize(function() {
    displayResize();
  });
});

$(window).resize(function() {
  displayResize();
});

// ===== Functions ======================================================================
// ----- Send Message to Server ---------------------------------------------------------
function messageServer(message) {
  $.post(window.location.href + "console", { input: message }, function(data) {
    toScreen(data.response, "console");
  }).fail(function() {
    toScreen("Unable to reach server.", "terminal");
  });
}
// ----- Insure Terminal Appearance -----------------------------------------------------
function displayResize() {
  $("#display").height($(window).height() - 30);
  $("#display").scrollTop($("#display")[0].scrollHeight);
}

// ---action store ------

var actionStore = [];

// ----- Write to Screen ----------------------------------------------------------------
var userAction = "";
function toScreen(message, actor) {
  debugger;
  if (message.slice(0, message.indexOf(" ")) === "Congrats!") {
    debugger;
    let audio = $("#audio2")[0];
    audio.volume = 0.1;
    audio.play();
  }
  if (message === "prior") {
    userAction = "> " + message + "\n \n";
    if (actionStore.length > 1) {
      battleTextScroll(userAction, actionStore[actionStore.length - 2], 0);
    } else {
      battleTextScroll(userAction, "Are you trying to break this game?!", 0);
    }
  } else if (actor === "console") {
    var displayString = $("#display").val() + message + "\n";
    battleTextScroll(userAction, message, 0);
    if (message !== "I don't know how to do that." && message !== "") {
      actionStore.push(userAction + message);
    }
    $("#display").scrollTop($("#display")[0].scrollHeight);
  } else {
    toggleInput = !toggleInput;
    userAction = "> " + message + "\n \n";
  }
}

function battleTextScroll(fullText, message, index) {
  if (index < message.length) {
    let audio = $("#audio1")[0];
    audio.volume = 0.1;
    audio.play();
    $("#display").val(fullText + message[index]);
    index++;
    fullText = $("#display").val();
    setTimeout(function() {
      battleTextScroll(fullText, message, index);
    }, 12);
  } else {
    if (!toggleInput) {
      toggleInput = true;
    }
  }
}
