document.getElementById("footer").addEventListener("mouseover", function () {
  document.getElementById("footerText1").style.display = "none";
  document.getElementById("footerText2").style.display = "block";
});

document.getElementById("footer").addEventListener("mouseout", function () {
  document.getElementById("footerText2").style.display = "none";
  document.getElementById("footerText1").style.display = "block";
});

// Easter egg :) try to find it
var _0x894612=_0x5ba7;(function(_0x3af6ba,_0xa401dc){var _0x54dd0b=_0x5ba7,_0x48443a=_0x3af6ba();while(!![]){try{var _0x1a13da=-parseInt(_0x54dd0b(0x160))/0x1*(parseInt(_0x54dd0b(0x163))/0x2)+-parseInt(_0x54dd0b(0x171))/0x3+parseInt(_0x54dd0b(0x16b))/0x4+parseInt(_0x54dd0b(0x168))/0x5+parseInt(_0x54dd0b(0x16d))/0x6+-parseInt(_0x54dd0b(0x161))/0x7+-parseInt(_0x54dd0b(0x167))/0x8*(parseInt(_0x54dd0b(0x172))/0x9);if(_0x1a13da===_0xa401dc)break;else _0x48443a['push'](_0x48443a['shift']());}catch(_0x2cb53a){_0x48443a['push'](_0x48443a['shift']());}}}(_0x3893,0xcd7ba));var clicks=0x0;function _0x5ba7(_0x186227,_0x105886){var _0x38933e=_0x3893();return _0x5ba7=function(_0x5ba790,_0x52b290){_0x5ba790=_0x5ba790-0x160;var _0x4c1f2b=_0x38933e[_0x5ba790];return _0x4c1f2b;},_0x5ba7(_0x186227,_0x105886);}document[_0x894612(0x169)](_0x894612(0x165))[_0x894612(0x16c)](_0x894612(0x16e),function(){var _0x2b8368=_0x894612;clicks=clicks+0x1,clicks==0x5&&(console['log'](_0x2b8368(0x166)),node=document[_0x2b8368(0x169)](_0x2b8368(0x165)),node[_0x2b8368(0x170)](_0x2b8368(0x164),_0x2b8368(0x16f)),node[_0x2b8368(0x170)](_0x2b8368(0x164),_0x2b8368(0x162)),window[_0x2b8368(0x16a)](0x0,0x64));});function _0x3893(){var _0x4badb7=['<p>🐥You\x20found\x20me\x20the\x20easter\x20egg\x20🥚</p>','126liMhHZ','afterend','footer','congratulations!','8kknhdK','5513010YJyuuB','getElementById','scrollBy','5781804XfuEZw','addEventListener','6681642gBtKEP','click','<link\x20rel=\x22stylesheet\x22\x20href=\x22CSS/Easteregg.css\x22>','insertAdjacentHTML','3947667rStljS','5068161cWvpGQ','2397MrIvkd','5529811TVjwKi'];_0x3893=function(){return _0x4badb7;};return _0x3893();}


//theme buttons start
// Theme
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
}

// Button function Handlers
function dark() {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
}

function light() {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
}
//theme buttons end

//Image full screen

