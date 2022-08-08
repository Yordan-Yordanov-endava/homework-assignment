const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const paragraph = document.querySelector('.paragraph');

// Second Task

let str = "";
let array;

const outputBoolean = (arr) => {
  const arr2 = [];
  const arr3 = [];
  let value = false;
  
  if (arr.length % 2 !== 0) {
    paragraph.innerHTML = value;
    return;
  } 

  for (let i = 0; i < arr.length; i++) {
    if (i > arr.length / 2 - 1) {
      arr3.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr3.reverse();

  for (let i = 0; i < arr2.length || i < arr3.length; i++) {
    const curr = arr2[i];
    const curr2 = arr3[i];
    if (curr === "[" && curr2 === "]") {
        value = true;
    }
    if (curr === "{" && curr2 === "}") {
        value = true;
    }
    if (curr === "(" && curr2 === ")") {
        value = true;
    }
  }
  paragraph.innerHTML = value;
};

btn.addEventListener("click", () => {
    str = input.value;
    array = str.split("");
    outputBoolean(array);
  });
  
  