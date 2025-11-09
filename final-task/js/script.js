// arrow-btn

document.addEventListener("DOMContentLoaded", function () {
  let scrollToTop = document.getElementById("scrollToTop");
  let circle = document.querySelector(".progress-ring__circle");

  let radius = circle.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    let offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    setProgress(scrollPercent);

    if (scrollTop > 200) {
      scrollToTop.classList.add("show");
    } else {
      scrollToTop.classList.remove("show");
    }
  });

  scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// slider

$(document).ready(function () {
  $(".owl-carousel").owlCarousel(

    {
      items: 6, margin: 20, loop: true,
      nav: true,
      navText: [` <i class="fa-solid fa-chevron-left fs-3 fw-bold"></i>`,
        ` <i class="fa-solid fa-chevron-right fs-3 fw-bold"></i>`]
    }
  );
});

//  dashboard

const ctx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Appointments',
      data: [12, 19, 14, 18, 20, 15, 22],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Revenue' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});


// form

// function isValidName(value) {
//   return /^[A-Za-z\u0600-\u06FF\s'-]+$/.test(value.trim());
// }

// function isValidEmail(value) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
// }

// function isEgyptianMobile(value) {
//   return /^01[0125][0-9]{8}$/.test(value.trim());
// }

// function hasAtLeastTwoLetters(value) {
//   const matches = value.match(/[A-Za-z\u0600-\u06FF]/g);
//   return matches && matches.length >= 2;
// }

// let nameValidation = (input) => {
//   let inputValue = input.value.trim()
//   if (inputValue.length < 3)
//     handleError(input, "at least 3 character")
//   else
//     handleError(input)
// }
// let handleError = (input, msg = "") => {
//   input.nextElementSibling.innerText = msg
//   console.log(reg.test(inputValue))
//   if (!reg.test(inputValue)) handleError(input, "enter a valid email")
//   else handleError(input)
// }

//  Handle showing or clearing error
let handleError = (input, msg = "") => {
  input.nextElementSibling.innerText = msg;
};

//  Name Validation (First, Last, Display)
let nameValidation = (input) => {
  let inputValue = input.value.trim();
  if (inputValue.length < 3) {
    handleError(input, "At least 3 characters");
  } else {
    handleError(input);
  }
};

//  Email Validation
let emailValidation = (input) => {
  let inputValue = input.value.trim();
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!reg.test(inputValue)) handleError(input, "Enter a valid email");
  else handleError(input);
};

//  Egyptian Phone Number Validation
let phoneValidation = (input) => {
  let inputValue = input.value.trim();
  let reg = /^(?:\+?20|0)?(10|11|12|15)[0-9]{8}$/;
  if (!reg.test(inputValue))
    handleError(input, "Enter a valid Egyptian number (e.g. 010xxxxxxxx)");
  else handleError(input);
};

//  Designation Validation
let designationValidation = (input) => {
  let inputValue = input.value.trim();
  if (inputValue.length < 2) handleError(input, "Designation is required");
  else handleError(input);
};

// On Submit Validation
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get all inputs
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let displayName = document.getElementById("displayName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let designation = document.getElementById("designation");

  // Run all validations
  nameValidation(firstName);
  nameValidation(lastName);
  nameValidation(displayName);
  emailValidation(email);
  phoneValidation(phone);
  designationValidation(designation);

  //  If all valid (no error messages)
  let hasError = [...document.querySelectorAll("span")].some(
    (span) => span.innerText !== ""
  );

  if (!hasError) {
    alert("Form submitted successfully!");
    this.reset();
    document.querySelectorAll("span").forEach((s) => (s.innerText=""));
}
});