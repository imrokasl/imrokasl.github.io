/*document.getElementById("footer").addEventListener("mouseover", function () {
  document.getElementById("footerText1").style.display = "none";
  document.getElementById("footerText2").style.display = "block";
});

document.getElementById("footer").addEventListener("mouseout", function () {
  document.getElementById("footerText2").style.display = "none";
  document.getElementById("footerText1").style.display = "block";
}); 
*/
// Easter egg :) try to find it
var _0x894612=_0x5ba7;!function($,x){for(var _=_0x5ba7,t=$();;)try{if(-parseInt(_(352))/1*(parseInt(_(355))/2)+-parseInt(_(369))/3+parseInt(_(363))/4+parseInt(_(360))/5+parseInt(_(365))/6+-parseInt(_(353))/7+-parseInt(_(359))/8*(parseInt(_(370))/9)==841658)break;t.push(t.shift())}catch(e){t.push(t.shift())}}(_0x3893,841658);var clicks=0;function _0x5ba7($,x){var _=_0x3893();return(_0x5ba7=function($,x){return _[$-=352]})($,x)}function _0x3893(){var $=["<p>\uD83D\uDC25You found me the easter egg \uD83E\uDD5A</p>","126liMhHZ","afterend","footer","congratulations!","8kknhdK","5513010YJyuuB","getElementById","scrollBy","5781804XfuEZw","addEventListener","6681642gBtKEP","click",'<link rel="stylesheet" href="CSS/Easteregg.css">',"insertAdjacentHTML","3947667rStljS","5068161cWvpGQ","2397MrIvkd","5529811TVjwKi",];return(_0x3893=function(){return $})()}document[_0x894612(361)](_0x894612(357))[_0x894612(364)](_0x894612(366),function(){var $=_0x894612;5==(clicks+=1)&&(console.log($(358)),(node=document[$(361)]($(357)))[$(368)]($(356),$(367)),node[$(368)]($(356),$(354)),window[$(362)](0,100))});

//theme buttons start-----------------------------------------------
// Theme
const body = document.body;

// Apply the cached theme on reload


try {
  // Code that may throw an error
  // Apply the cached theme on reload
  const theme = localStorage.getItem("theme");
  const isSolar = localStorage.getItem("isSolar");

  if (theme) {
    body.classList.add(theme);
  }

  // Button function Handlers
function dark() {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
}

function light() {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
}
} catch (error) {
  // Code to handle the error (can be omitted)

}

//theme buttons end-----------------------------------------------
/* sketchfab iframe */
document.getElementById("house").addEventListener("click", function () {
  document
    .getElementById("iframe1")
    .setAttribute(
      "src",
      "https://sketchfab.com/models/1f67ddb7cebd47ee921fcd312ed884cd/embed"
    );
});

document.getElementById("house").addEventListener("click", function () {
  document.getElementById("house").style.display = "none";
  document.getElementById("iframe1").style.display = "block";
});
/* sketchfab iframe ends */

//popup code
function mailPopup() {
  document.querySelector("#mailPopup").style.display = "block";
  /* decodeEmail() */
}
function closesmail() {
  document.getElementById('mailPopup').style.display = 'none';
}

// theme code end --------------------------------------

/* 
// bot detector -------------------------------------
// Function to detect bots
function detectBot() {
  var isBot = false;

  if (window.self !== window.top) {
    isBot = true;
  }

  // Check if the user agent contains common words in bot useragents
  var userAgent = navigator.userAgent.toLowerCase();
  var botKeywords = ["bot", "crawler", "spider", "crawling", "googlebot", "crawl"];
  for (var i = 0; i < botKeywords.length; i++) {
    if (userAgent.indexOf(botKeywords[i]) !== -1) {
      isBot = true;
      break;
    }
  }

    // Check if local storage is available
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
    } catch (e) {
      isBot = true;
    }

  return isBot;
}
 // bot testing
function detectBot() {
  return true;
} 

// Usage
if (detectBot()) {
  // Detected as a bot
  document.getElementById("mali").textContent = "[Bot detected. Consider using another browser if you're not a robot.]";
  console.log("Bot detected!");
} else {
  // Likely a human

// add script to element with id "humanverified"
  var scriptElement = document.getElementById("humanverified");
  scriptElement.src = "Javascript/mailloader.js";

  console.log("Likely a human.");
}
 */
// forum submit script ---------------------------------------------

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!!!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

// forum submit script end ------------------------------------------------