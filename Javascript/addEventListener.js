// Easter egg :) try to find it
// Find the footer element
function secretmessage(){

const link = Object.assign(document.createElement('link'), {
  rel: 'stylesheet',
  href: 'CSS/Easteregg.css'
});

document.querySelector('head').appendChild(link);

const footer = document.querySelector('footer');

const paragraph = document.createElement('p');
paragraph.textContent = '🔴';
footer.insertAdjacentElement('afterend', paragraph);

function scroll200(){
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth'
});
}
setTimeout(function() {
  scroll200()
}, 200);

setTimeout(function() {
  scroll200()
}, 400);

setTimeout(function() {
  scroll200()
}, 600);

setTimeout(function() {
  scroll200()
}, 800);

sessionStorage.setItem("NICE", "🔴 (Dont forget to write me an email!!)");
}
// counter--------
const footer = document.querySelector('footer');

let clickCount = 0;

function handleClick() {
  clickCount++;

  if (clickCount === 10) {
    secretmessage()
  }
}

// Add a click event listener to the footer
footer.addEventListener('click', handleClick);


//theme buttons start--------------------------------------------------------------------------
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
  decodeEmail()
}
function closesmail() {
  document.getElementById('mailPopup').style.display = 'none';
}

// theme code end --------------------------------------

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
//  function detectBot() {
//    return true;
// } 

// Usage
if (detectBot()) {
  // Detected as a bot
  document.getElementById("mali").textContent = "[Bot detected. Consider using another browser.]";
  console.log("Bot detected!");
} else {
  // Likely a human

  // add script to element with id "humanverified"
  var scriptElement = document.getElementById("humanverified");
  scriptElement.src = "Javascript/mailloader.js";

  console.log("Likely a human.");
}

// forum submit script with rate limiting ---------------------------------------------

var form = document.getElementById("my-form");
var lastSubmissionTime = localStorage.getItem("lastSubmissionTime"); // Retrieve the last submission time from local storage

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");

  // Calculate the current time
  var currentTime = new Date().getTime();

  // Check if the last submission time is null or if it has been more than time  ↓↓↓↓↓↓↓ Here
  if (lastSubmissionTime === null || currentTime - parseInt(lastSubmissionTime) > 120000) {
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
        form.reset();

        // Update the last submission time with the current time and store it in local storage
        lastSubmissionTime = currentTime.toString();
        localStorage.setItem("lastSubmissionTime", lastSubmissionTime);
      } else {
        response.json().then(data => {
          if (data.errors) {
            status.innerHTML = data.errors.map(error => error.message).join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
  } else {
    status.innerHTML = "You can only submit the form once every 2 minutes.";
  }
}

form.addEventListener("submit", handleSubmit);

// forum submit script end ------------------------------------------------
// for electron app -----------------------------------------------
function runCodeInElectron() {
  // Check if the user agent contains "Electron"
  if (navigator.userAgent.includes("Electron")) {
    // Code to run in Electron app
    console.log("Running code in Electron!");
    
    // Create and configure the link element
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "CSS/electron.css";
    document.head.appendChild(link);

  }
}
runCodeInElectron();

// document names------------------------------------------------------------
function RContacts() {
  document.title = "Rokas Contacts";
}

function RPorfolio() {
  document.title = "Rokas Porfolio";
}
//-----------------------------------------------------
