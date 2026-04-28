"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

const input = document.querySelector("input"); // input要素
const output = document.getElementById("output"); // div#output要素
const submit = document.getElementById("submit"); // button#submit要素

// 追加 ↓
const ul = document.createElement("ul");
output.appendChild(ul);

let listItems = []; // リストデータを一時保持する配列

// ［記録］ボタンを押したら…
submit.addEventListener("click", () => {
  //   output.textContent = input.value; // div要素に表示
  //   storage.store = input.value; // 'store'キーに入力値を記録

  // 追加 ↓
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);

  // 追加
  listItems.push(input.value); // 配列にli要素の内容を追加
  storage.store = JSON.stringify(listItems); // 配列 → JSONにして保存

  input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  //   const storagedData = storage.store || "ここに内容を表示します";
  //   output.textContent = storagedData;
});

// 記録
storage.num = 123; // ウェブストレージには '123' として記録される

// 型を確認
console.log(typeof storage.num); // → string（文字列）

// 読み込み
const num = parseInt(storage.num); // 読み込み時に数値に変換する

const remove = document.createElement("button");
remove.textContent = "ストレージデータを削除";
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener("click", () => {
  delete storage.store;
  ul.textContent = "";
  listItems = [];
});

const link = document.createElement("button");
link.textContent = "別ページへ飛ぶ";
document.body.insertBefore(link, remove);

link.addEventListener("click", () => {
  location.href = "page.html";
  // window.open('page.html', '_self');
});

document.addEventListener("DOMContentLoaded", () => {
  if (storage.store != undefined) {
    listItems = JSON.parse(storage.store); // JSON → 配列

    for (const item of listItems) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }
  }
});
