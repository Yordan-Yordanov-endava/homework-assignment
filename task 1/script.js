// First Task

class DynamicArray {
    arr = [];
    arr2 = [];
    length = 0;
    constructor(arrLength) {
      this.length = arrLength;
    }
    add(value) {
      if (this.arr.length >= this.length) {
        this.arr2 = [...this.arr, ...this.arr];
        return this.arr2;
      } else {
        this.arr.push(value);
        return this.arr;
      }
    }
    remove(index) {
      this.arr = this.arr.filter((_, i) => i !== index);
      return this.arr;
    }
  }
  
  const dynamic = new DynamicArray(3);
  
  dynamic.add(1);
  dynamic.add(2);
  dynamic.add(3);
  dynamic.add(4);
  console.log(dynamic.arr);
  console.log(dynamic.arr2);
  dynamic.remove(0);
  console.log(dynamic.arr);
