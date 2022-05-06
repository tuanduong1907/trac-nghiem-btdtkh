Validator({
  form: ".formInfo",
  formGroupSelector: ".formItem",
  errorSelector: ".formMessage",
  rules: [
    Validator.isRequired("#fullName", "Nhập họ tên của bạn"),
    Validator.minLength("#fullName", 6),
    Validator.isRequired("#birthday", "Nhập ngày sinh của bạn"),
    Validator.isRequired("#school", "Nhập tên trường của bạn"),
    Validator.isRequired("#class", "Nhập lớp của bạn"),
    Validator.isRequired("#address", "Nhập địa chỉ của bạn"),
  ],

  onSubmit: function (data) {
    console.log(data);
  },
});
