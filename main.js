const toTopButton = document.querySelector(".footer_gototop");
const handleScroll = (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
toTopButton.addEventListener("click", handleScroll);
