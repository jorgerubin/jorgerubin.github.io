/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name && email && phone) {
    enableSubmitButton();
  } else {
    disableSubmitButton();
  }
}

function enableSubmitButton() {
  document.getElementById("submitButton").classList.remove("disabled");
}
function disableSubmitButton() {
  document.getElementById("submitButton").classList.add("disabled");
}


// Animaciones con Intersection Observer
// Asegúrate de incluir Animate.css en tu HTML
document.addEventListener("DOMContentLoaded", function () {
  const observer_izq = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate__fadeInLeft");
        observer_izq.unobserve(entry.target); // solo se anima una vez
      }
    });
    },
  {
    threshold: 0.1 // 10% del elemento visible activa la animación
  });

  const observer_der = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate__fadeInRight");
        observer_der.unobserve(entry.target); // solo se anima una vez
      }
    });
    },
  {
    threshold: 0.1 // 10% del elemento visible activa la animación
  });

  const observer_arr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate__fadeInUp");
        observer_arr.unobserve(entry.target); // solo se anima una vez
      }
    });
    },
  {
    threshold: 0.1 // 10% del elemento visible activa la animación
  });

  const observer_aba = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate__fadeInDown");
        observer_aba.unobserve(entry.target); // solo se anima una vez
      }
    });
    },
  {
    threshold: 0.1 // 10% del elemento visible activa la animación
  });

  document.querySelectorAll(".carta-izq").forEach(el => {
    observer_izq.observe(el);
  });

  document.querySelectorAll(".carta-der").forEach(el => {
    observer_der.observe(el);
  });

  document.querySelectorAll(".carta-arr").forEach(el => {
    observer_arr.observe(el);
  });

  document.querySelectorAll(".carta-aba").forEach(el => {
    observer_aba.observe(el);
  });

});
