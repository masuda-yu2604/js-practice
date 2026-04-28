"use strict";

// const list = [
//   "images/01.jpg",
//   "images/02.jpg",
//   "images/03.jpg",
//   "images/04.jpg",
//   "images/05.jpg",
//   "images/06.jpg",
//   "images/07.jpg",
//   "images/08.jpg",
//   "images/09.jpg",
//   "images/10.jpg",
// ];

const list = [];

for (let i = 0; i < 10; i += 1) {
  if (i === 9) {
    list.push(`images/10.jpg`);
    break;
  }
  list.push(`images/0${i + 1}.jpg`);
}

console.log(list);

const img = document.getElementById("main"); // 画像
const [leftArrow, rightArrow] = document.getElementsByTagName("span");

let imgN = 0; // 現在のファイル番号

const p = document.createElement("p"); // p要素を生成
p.style.color = "lightgray"; // p要素の文字色を設定

const div = document.getElementById("photo"); // 親要素を取得
div.insertBefore(p, img.nextElementSibling); // img要素の下にp要素を追加

const setImage = () => {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
};

// ↓ DOMContentLoadedイベントリスナーの設定 ↓
document.addEventListener("DOMContentLoaded", () => {
  setImage();
});

leftArrow.addEventListener("click", () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  setImage();
});

rightArrow.addEventListener("click", () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage();
});

const playButton = document.createElement("button"); // 再生ボタン
playButton.textContent = "自動再生する";
div.appendChild(playButton); // div#photo要素の一番下の子要素にする

let autoplay = false;

playButton.addEventListener("click", () => {
  if (autoplay == false) {
    playButton.textContent = "無効"; // ボタンの表示を変更
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false; // 初期値falseに戻す
    playButton.textContent = "自動再生する";
  }
});

// const stopButton = document.createElement("button");
// stopButton.textContent = "停止する";
// div.appendChild(stopButton);

// stopButton.addEventListener("click", () => {
//   clearInterval(autoplay);
//   autoplay = false; // 初期値falseに戻す
//   playButton.textContent = "自動再生する";
// });
