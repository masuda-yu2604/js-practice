"use strict";

console.log("Hello World!!");

const p1 = document.getElementById("dom");
console.log(p1.textContent); // → Document Object Modelの略です。

const p2 = document.querySelector("p");
console.log(p2.textContent); // → Document Object Modelの略です。

const lis = document.querySelectorAll("li");
console.log(lis); // → NodeList(3) [li, li, li]

console.log(lis[0].textContent); // → D … Document
console.log(lis[1].textContent); // → O … Object
console.log(lis[2].textContent); // → M … Model

// for (const li of lis) {
//   console.log(li.textContent); // → D … Document → ...
//   li.textContent = "DOM!!"; // HTMLが書き換わる
// }

const lisArray = Array.from(lis); // NodeListを配列に変換
const newLis = lisArray.map((li) => li.textContent + "!!");
console.log(newLis);

const lis2 = document.getElementsByTagName("li");
console.log(lis2); // → HTMLCollection(3) [li, li, li]

const lisArray2 = Array.from(lis2); // 配列に変換

for (const li of lisArray2) {
  console.log(li.textContent);
}

// lisArray2.forEach((li) => (li.textContent = "DOM!!"));

for (let i = 0; i < lisArray2.length; i++) {
  console.log(lisArray2[i].textContent);
}

const img = document.getElementsByTagName("img")[0];
console.log(img); // → <img>

const ps = document.getElementsByClassName("explain");
console.log(ps); // → HTMLCollection(2) [p, p]

const inputs = document.getElementsByName("dom");
console.log(inputs); // → NodeList(3) [input, input, input]

const a = document.getElementById("link"); // a要素
console.log(a);

const p = a.parentElement; // 親要素
console.log(p);

const img2 = a.firstElementChild; // 最初の子要素
console.log(img2);

// const ul = document.querySelector("ul");
// console.log(ul.childNodes);
// → NodeList(7) [text, li, text, li, text, li, text]
// 改行文字がテキストノードとして li 要素の間に含まれる

const ul = document.getElementById("list"); // 親要素 → ul

const li1 = ul.firstElementChild; // 最初の子要素 → li1
console.log(li1.textContent); // → D … Document

const li2 = li1.nextElementSibling; // li1の次の兄弟要素 → li2
console.log(li2.textContent); // → O … Object

const li3 = li2.nextElementSibling; // li2の次の兄弟要素 → li3
console.log(li3.textContent); // → M … Model

const ul2 = document.getElementById("list"); // 親要素 → ul

const li3s = ul2.lastElementChild; // 最後の子要素 → li3
console.log(li3s.textContent); // → M … Model

const li2s = li3s.previousElementSibling; // li3の前の兄弟要素 → li2
console.log(li2s.textContent); // → O … Object

const li1s = li2s.previousElementSibling; // li2の前の兄弟要素 → li1
console.log(li1s.textContent); // → D … Document

const ul3 = document.getElementById("list");

for (let li = ul3.firstElementChild; li != null; li = li.nextElementSibling) {
  console.log(li.textContent);
}

// const ul = document.getElementById("list"); // 親要素 ul
const newLi = document.createElement("li"); // li要素を生成
newLi.textContent = "DOM!!";

// ul.appendChild(newLi); // ul要素の最後尾にliエレメントを追加

const li_1st = ul.firstElementChild; // ul要素の先頭の子要素

// ul.insertBefore(newLi, li_1st); // ul要素の先頭の子要素の手前に挿入
// ul.insertBefore(newLi, li_1st.nextElementSibling); // ul要素の先頭の子要素の次の兄弟要素の手前に挿入

// const ul = document.getElementById('list');

// const li1 = ul.firstElementChild; // 1番目の要素
// const li2 = li1.nextElementSibling; // 2番目の要素
// const li3 = li2.nextElementSibling; // 3番目の要素

// ul.appendChild(li1); // 先頭要素が最後尾に移動する
// ul.insertBefore(li3, li2); // 2番目と3番目の要素が入れ替わる

// const ul = document.getElementById('list');
// const li1 = ul.firstElementChild;  // 1番目の子要素
// const newLi = document.createElement('li');  // 新しいli要素
// newLi.textContent = 'DOM!!';

// ul.replaceChild(newLi, li1); // 1番目の子要素と新しい要素を置換

const removedLi1 = ul.removeChild(li1); // 1番目の子要素を削除
removedLi1.textContent = "Remoooved!!"; // 削除されてもまだ使える
document.body.appendChild(removedLi1); // 別の場所で再利用

while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}
