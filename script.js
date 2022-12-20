const faqButton = () => {
  const toggleBtn = document.querySelectorAll(".faqCard__button");

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("open");
    });
  });

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
};

faqButton();
