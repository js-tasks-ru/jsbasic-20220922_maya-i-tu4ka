function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  let slides = document.querySelectorAll(".carousel__slide");
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let offsetWidth = carouselInner.offsetWidth;
  let width = 0;
  let count = 0; 

  toggleLeftArrow();

  function toggleLeftArrow(){
    if (count <= 1) {
      arrowLeft.style.display = "none";
    }
    if (count <= slides.length) { 
      arrowRight.style.display = "block";
    }
  }
  
  function toggleRightArrow(){
    if (count == (slides.length-2)) {
      arrowRight.style.display = "none";
    }
    if (count <= slides.length) { 
      arrowLeft.style.display = "block";
    }
  }

  arrowRight.addEventListener("click", () => {
    toggleRightArrow();
    
    if (count <= slides.length) { 
      count += 1;
      width += offsetWidth;
      carouselInner.style.transform = `translateX(-${width}px)`;
    }
  })

  arrowLeft.addEventListener("click", () => {
    toggleLeftArrow();

    if (count <= slides.length) { 
      count -= 1;
      width -= offsetWidth;
      carouselInner.style.transform = `translateX(-${width}px)`;
    }
  })
};