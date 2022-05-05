$(document).ready(function () {
  const answerItem = document.querySelectorAll(".answerItem");
  const questionItem = document.querySelectorAll(".questionItem");
  const btnSubmit = document.querySelector("#btnSubmit");
  const templateModal = `
    <div class="modalDialog">
    <div class="modalContainer">
        <div class="modalHeader">
            <p>Xác nhập nộp bài thi </p>
            <div class="modalClose modalDiaClose">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                </svg>
            </div>
        </div>
        <div class="modalContent">
            <p class="modalContentHeading">Bạn có chắc chắn muốn nộp bài thi?</p>
            <p>Nhấn xác nhận để nộp bài thi này!</p>
            <p>Nhấn hủy để ngừng nộp bài thi!</p>
            <div class="modalContentBtnWrap">
                <button class="modalContentBtn modalDiaBtnClose button Secondary">Hủy</button>
                <button class="modalContentBtn modalDiaBtnConfirm button buttonPrimary1">Xác nhận</button>
            </div>
        </div>
    </div>
  </div>
  `;
  const templateModalConfirm = `
    <div class="modalDialog">
    <div class="modalContainer">
        <div class="modalHeader">
            <p>Kết Quả Bài Thi Trắc Nghiệm</p>
        </div>
        <div class="modalContent">
            <p class="modalContentHeading">Kết quả của bạn</p>
            <p><span>Số điểm:</span> 9</p>
            <p><span>Số câu trả lời đúng:</span> 9/10</p>
            <div class="modalContentBtnWrap">
              <button class="modalContentBtn modalBtnConfirm button buttonPrimary1">Kết thúc</button>
            </div>
        </div>
    </div>
  </div>
  `;
  //
  answerItem.forEach((item) =>
    item.addEventListener("click", (e) => {
      answerItem.forEach((item) => {
        item.classList.remove("answerItemActive");
      });
      e.target.classList.toggle("answerItemActive");
    })
  );

  //
  questionItem.forEach((item) =>
    item.addEventListener("click", (e) => {
      questionItem.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.toggle("active");
      console.log(e.target);
    })
  );

  // Timmer
  let startingMinutes = 3;
  let time = startingMinutes * 60;

  const countDownEl = document.getElementById("coundown");

  setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds}`;
    if (time < 0) {
      countDownEl.innerHTML = "Hết giờ";
    }
    time--;
  }

  // modal submit
  btnSubmit.addEventListener("click", (e) => {
    document.body.insertAdjacentHTML("beforeend", templateModal);
  });
  document.body.addEventListener("click", (e) => {
    const modalDialog = document.querySelector(".modalDialog");
    if (e.target.matches(".modalDiaBtnClose")) {
      modalDialog.remove();
    } else if (e.target.matches(".modalDiaClose")) {
      modalDialog.remove();
    } else if (e.target.matches(".modalDiaBtnConfirm")) {
      modalDialog.remove();
      document.body.insertAdjacentHTML("beforeend", templateModalConfirm);
    } else if (e.target.matches(".modalBtnConfirm")) {
      modalDialog.remove();
    }
  });
  // end modal submit

  // answer 
    const textValSelected = document.querySelectorAll(".textValSelected");
    function handleChangeAnswer(e) {
      const answerId = e.target.dataset.answer;
      answerItem.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      textValSelected.forEach((el) => {
        el.classList.remove("active");
        if (el.getAttribute("data-answer") === answerId) {
          el.classList.add("active");
        }
      });
    }
    answerItem.forEach((el) =>
      el.addEventListener("click", handleChangeAnswer)
    );
  // end answer
});
