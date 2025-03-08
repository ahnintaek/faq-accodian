// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".qna");
  
//     buttons.forEach(button => {
//       button.addEventListener("click", function () {
//         const qna = this.closest(".qna"); // 해당 FAQ 블록 선택
//         qna.classList.toggle("active"); // 활성화 토글
//       });
//     });
//   });
  

//   document.addEventListener("DOMContentLoaded", function () {
//     const qnaBlocks = document.querySelectorAll(".qna");

//     qnaBlocks.forEach(qna => {
//         qna.addEventListener("click", function () {
//             this.classList.toggle("active");
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
  const qnaBlocks = document.querySelectorAll(".qna");

  qnaBlocks.forEach(qna => {
      const button = qna.querySelector(".toggle");
      const img = button.querySelector("img");

      qna.addEventListener("click", function () {
          this.classList.toggle("active");

          if (this.classList.contains("active")) {
              img.src = "assets/images/icon-minus.svg";
          } else {
              img.src = "assets/images/icon-plus.svg";
          }
      });
  });
});

