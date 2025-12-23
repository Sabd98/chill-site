$(".show").click(() => {
  const passKey = $(".pass-key");
  const showIcon = $(".show");

  if (passKey.attr("type") === "password") {
    passKey.attr("type", "text");
    showIcon.html('<i class="fas fa-eye-slash"></i>');
  } else {
    passKey.attr("type", "password");
    showIcon.html('<i class="fas fa-eye"></i>');
  }
});

$(".show2").click(() => {
  const passKey2 = $(".pass-key2");
  const showIcon2 = $(".show2");

  if (passKey2.attr("type") === "password") {
    passKey2.attr("type", "text");
    showIcon2.html('<i class="fas fa-eye-slash"></i>');
  } else {
    passKey2.attr("type", "password");
    showIcon2.html('<i class="fas fa-eye"></i>');
  }
});
