/*      Problem - 1
        Write a program to print all even numbers from 1 to N.
        অনুবাদ: 1 থেকে N পর্যন্ত সমস্ত জোড় সংখ্যা প্রিন্ট করার জন্য একটি প্রোগ্রাম লিখুন।
*/

function evenNumber(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  
  const evenNum = evenNumber(20);
  // console.log(evenNum);
  
  /*
          Problem: 02
          Write a program to find the sum of numbers from N to M.
          অনুবাদ: N থেকে M পর্যন্ত সংখ্যার যোগফল বের করার জন্য একটি প্রোগ্রাম লিখুন ।
  */
  
  function sum(n, m) {
    let res = 0;
    for (i = n; i <= m; i++) {
      res += i;
    }
    return res;
  }
  
  const sumNum = sum(5, 15);
  // console.log(sumNum);
  
  /*
          Problem: 03
          Write a function that takes the base and height of a triangle and return its area.
          অনুবাদ: একটি ফাংশন লিখুন যা একটি ত্রিভুজের ভিত্তি এবং উচ্চতা নেয় এবং এর ক্ষেত্রফল রিটার্ন করে।
   */
  
  function triangleArea(base, hight) {
    return (base * hight) / 2;
  }
  
  const triangle = triangleArea(3, 6);
  // console.log(triangle);
  
  /**
          Problem: 04
          Write a function that takes a word and returns the new word without including the first two characters.
          অনুবাদ: একটি ফাংশন লিখুন যা একটি শব্দ(স্ট্রিং ) নেয় এবং প্রথম দুটি অক্ষর অন্তর্ভুক্ত না করে নতুন শব্দটি(স্ট্রিং) রিটার্ন করে।
   * 
   */
  
  function newWord(str) {
    let newStr = "";
    for (let i = 2; i < str.length; i++) {
      newStr += str[i];
    }
    return newStr;
  }
  
  const testName = newWord("zissad");
  // console.log(testName);
  
  /** 
   * 
          Problem: 05
          Write a function that takes an array and return the first and last elements as a new array.
          অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি নতুন অ্যারে হিসাবে প্রথম এবং শেষ উপাদানগুলি রিটার্ন করে।
   * 
   */
  
  function arrayFL(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    newArr.push(arr.length - 1);
    return newArr;
  }
  
  const firstLastElement = arrayFL([2, 5, 8, 13, 56]);
  // console.log(firstLastElement);
  
  /**
   * 
          Problem: 06
          Write a function that takes an array and return a reverse array.
          অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি বিপরীত অ্যারে রিটার্ন করে।
   */
  
  function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  const reverse = reverseArray([1, 2, 3, 4, 5, 6, 7]);
  // console.log(reverse);
  
  /**
            Problem: 07
          Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
          অনুবাদ: একটি ফাংশন লিখুন যা স্ট্রিং এবং সংখ্যার একটি অ্যারে নেয় এবং অ্যারেটি ফিল্টার করে যাতে এটি শুধুমাত্র পূর্ণসংখ্যার একটি অ্যারে রিটার্ন করে।
   */
  
  function numbers(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
  
  const filterNumber = numbers([1, "stack", 3, 6, 3, "w", 3, "learner"]);
  // console.log(filterNumber);
  
  /**
            Problem: 08
          write a function that takes an array and a string as arguments and return the index number of the string.
          অনুবাদ: একটি ফাংশন লিখুন যা আর্গুমেন্ট হিসাবে একটি অ্যারে এবং একটি স্ট্রিং নেয় এবং স্ট্রিংয়ের সূচক (ইনডেক্স ) নম্বর রিটার্ন করে।
   */
  
  function findIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return 'found str';
      } else {
              return 'Not found'
      }
    }
  }
  
  const index = findIndex(['red', 'green','blue','white','black'], 'black')