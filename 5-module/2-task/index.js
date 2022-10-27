function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  
  btn.addEventListener("click", () => {
    document.querySelector("#text").toggleAttribute("hidden");
  })
};