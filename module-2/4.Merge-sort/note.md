### 📘 Topic: Merge Sort

---

**Q: Merge Sort কী?**  
**A:**  
Merge Sort হলো একটি **Divide and Conquer** ভিত্তিক sorting algorithm. এটি একটি list কে ভাগ করে ছোট ছোট অংশে ভেঙে, প্রতিটিকে sort করে আবার merge করে final sorted array তৈরি করে।

---

**Q: Merge Sort কিভাবে কাজ করে?**  
**A:**  
1. প্রথমে array টিকে **recursively দুইভাগে ভাগ** করা হয় যতক্ষণ না একক element পাওয়া যায়।  
2. এরপর প্রতিটি ভাগকে **sorted ভাবে merge** করা হয়।  
3. এইভাবে ধাপে ধাপে merge করে **final sorted array** তৈরি হয়।

---

**Q: Merge Sort কেনো শিখবো / ব্যবহার করবো?**  
**A:**  
- এটি একটি **stable sorting** algorithm (একই value থাকলে order change হয় না)।  
- সব সময়ই এর **time complexity O(n log n)** — যা Bubble/Insertion sort এর চেয়ে efficient।  
- বড় dataset এর ক্ষেত্রে ভালো performance দেয়।  
- downside হলো এটি **extra space** ব্যবহার করে।

---

**Q: Merge Sort এর Time & Space Complexity কত?**  
**A:**  
- 🕒 Time Complexity:  
  - Best: O(n log n)  
  - Average: O(n log n)  
  - Worst: O(n log n)  
- 🧠 Space Complexity: O(n) (merge করার সময় temporary array লাগে)

---

**Q: Merge Sort এর JavaScript কোড কেমন?**  
**A:**  
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}


⸻

Q: Merge Sort কোথায় ব্যবহার হয়?
A:
	•	বড় file গুলোকে external sort করার সময়
	•	Linked list sort করার সময়
	•	বড় dataset গুলোকে guaranteed time এ sort করার প্রয়োজন হলে
