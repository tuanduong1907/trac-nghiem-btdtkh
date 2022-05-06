Validator({
  form: ".formInfo",
  formGroupSelector: ".formItem",
  errorSelector: ".formMessage",
  rules: [
    Validator.isRequired("#fullName", "Vui lòng nhập tên chủ tài khoản"),
    Validator.minLength("#fullName", 6),
    Validator.isRequired("#birthday", "Vui lòng nhập STK "),
    Validator.isRequired("#school", "Vui lòng nhập tên ngân hàng"),
    Validator.isRequired("#class", "Vui lòng nhập nội dung tố cáo"),
    Validator.isRequired("#address", "Vui lòng nhập tên của bạn"),
  ],

  onSubmit: function (data) {
    console.log(data);
  },
});
