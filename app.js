// const btn = document.getElementById("btnSend");
const form = document.getElementById("form-login");
console.log("js");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("first");
});

// btn.addEventListener("click", () => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "backend/index.php", true);
//   xhr.onload = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         let data = xhr.response;
//         console.log(data);
//       }
//     }
//   };
//   xhr.send();
//   //   console.log("hello");
// });
