$(document).ready(function () {
  const answerItem = document.querySelectorAll(".answerItem");
  answerItem.forEach((item) =>
    item.addEventListener("click", (e) => {
        answerItem.forEach(item => {
            item.classList.remove('answerItemActive')
        })
      e.target.classList.toggle("answerItemActive");
    })
  );
});
