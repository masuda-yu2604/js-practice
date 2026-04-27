"use strict";

console.log("Hello World!!");

const servants = ["犬", "猿", "雉"];

function showServants() {
  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢 ${servants.length} 名です。`);
}

showServants();

// servants.push("鬼");
// showServants();

// servants.push("桃");
// showServants();

function appendServants(newcomer) {
  servants.push(newcomer); // ← 受け取った変数を使って書ける

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢 ${servants.length} 名です。`);
}

// appendServants("鬼");
// appendServants("桃");
// appendServants("爺");

function appendServants(newcomer1, newcomer2) {
  servants.push(newcomer1);
  servants.push(newcomer2);

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢 ${servants.length} 名です。`);
}

// const servants = ["犬", "猿", "雉"];

// appendServants("赤鬼", "青鬼");
// appendServants("桃", "栗");
// appendServants("爺", "婆");

function swapServants(newcomer) {
  servants.push(newcomer);
  const fired = servants.shift(); // 先頭要素を取り出し

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢 ${servants.length} 名です。`);

  return fired;
}

const retired = swapServants("鬼");
console.log(`${retired}さん、これまでありがとう！`);
console.log(`${swapServants("桃")}さん、これまでありがとう！`);

// 配列を戻り値とする関数
function getArray() {
  return ["A", "B", "C"]; // 配列を返す
}
const array = getArray();
console.log(array[1]); // → B

// オブジェクトを戻り値とする関数
function getObject() {
  return { a: "A", b: "B", c: "C" }; // オブジェクトを返す
}
const obj = getObject();
console.log(obj.a); // → A

function getArray() {
  return ["A", "B", "C"];
}

const [a, b, c] = getArray();

console.log(a); // → A
console.log(b); // → B
console.log(c); // → C

function getObject() {
  return { a: "A", b: "B", c: "C" };
}

// プロパティaとcの値だけ受け取る
const { a: a_value, c: c_value } = getObject();

console.log(a_value); // → A
console.log(c_value); // → C

const array2 = [1, 2, 3];
const newArray = array2.map((el) => {
  const squared = el * el;
  return squared; // 新しい配列の要素になる
});
console.log(newArray); // → [1, 4, 9]

const sayHello = (who) => `Hello ${who}!!`; // 関数宣言

const msg = sayHello("World"); // 関数呼び出し
console.log(msg); // → Hello World!!

const obj2 = {
  name: "OJK",
  sayHello() {
    console.log("Hello World!!");
  },
};

obj2.sayHello(); // → Hello World!!

const obj3 = {
  name: "OJK",
  sayHello() {
    // 同じオブジェクト内のプロパティが使える
    console.log(`Hello ${this.name}!!`);
  },
  sayHelloTwice() {
    this.sayHello(); // 同じオブジェクト内のメソッドが使える
    this.sayHello();
  },
};

obj3.sayHello(); // → Hello OJK!!

obj3.name = "桃太郎";
obj3.sayHelloTwice(); // → Hello 桃太郎!! Hello 桃太郎!!
