"use strict";

// const bmi = 20; // 25以下
// console.log(`あなたのBMIは${bmi}：`);

// if (bmi > 25) {
//   // 条件が満たされない
//   console.log("肥満です"); // この部分は実行されない
// }

// const bmi = 27;
// console.log(`あなたのBMIは${bmi}：`);

// 入力ダイアログから値を指定する
// const bmi = window.prompt("BMIの値を入力してください");
// console.log(`あなたのBMIは${bmi}：`);

// if (bmi > 25) {
//   console.log("肥満です"); // 25より大きいときに表示
// } else if (bmi < 18.5) {
//   console.log("低体重です"); // 18.5より小さいときに表示
// } else {
//   console.log("適正体重です"); // 25以下のときに表示
// }

const bmi = window.prompt("BMIの値を入力してください");
const p_element = document.querySelector("p");
console.log(`あなたのBMIは${bmi}：`);
p_element.textContent = `あなたのBMIは${bmi}：`;

if (bmi > 25) {
  p_element.textContent += "肥満です";
} else if (bmi < 18.5) {
  p_element.textContent += "低体重です";
} else {
  p_element.textContent += "適正体重です";
}

const num1 = 5;
const num2 = 10;

if (num1 >= num2) {
  console.log("num1 は num2 以上の値です");
}

const message = "Thank you";

if (message == "Thank you") {
  console.log("Thank you, too");
}

const num = 10; // Number型
const strNum = "10"; // String型

if (num == strNum) {
  console.log("文字列の10と数値の10は等しい"); // 表示される
}

if (bmi >= 18.5) {
  // ここにはBMIが18.5以上の場合だけ到達する
  if (bmi < 25) {
    // ここにはBMIが18.5以上かつ25未満の場合だけ到達する
    console.log("適正体重です");
  }
}

if (bmi >= 18.5 && bmi < 25) {
  console.log("適正体重です");
}

const msg = bmi > 25 ? "肥満です" : "肥満ではありません";
console.log(msg);

// 略
// const p_element = document.querySelector("p");
console.log(p_element.textContent);

const element = document.getElementById("second");
console.log(element.textContent); // → 2番目のp要素
