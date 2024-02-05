// tab script
function fullTab1(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    countIncrement();

}



function fullTab2(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



// tab script End 




// add your custom js //

// Accodion
var accItem = document.getElementsByClassName("accordion-header");
var accBody = document.getElementsByClassName('accordion-body');
for (var i = 0; i < accItem.length; i++) {
    accItem[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(accItem, 'active', 'remove');
        setClass(accBody, 'show', 'remove');
        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            var eleHeight = this.nextElementSibling.clientHeight;
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

//Tab 
function tabToggle(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-panel");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    countIncrement();
    evt.preventDefault();
}

// Technology hover effect
var techBtn = document.getElementsByClassName("technology-card-inner");
for (var i = 0; i < techBtn.length; i++) {
    techBtn[i].onmouseover = function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        this.querySelector('.anm-span').setAttribute("style", "left: " + x + "px;top : " + y + "px")
    }
}

//Count Increment
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function countIncrement() {
    const counters = document.querySelectorAll('.number-count');
    const intialValue = 0
    const speed = 70;
    counters.forEach(counter => {
        const updateCount = async() => {
            const target = counter.getAttribute('data-target');
            for (var i = intialValue; i <= target; i = i + target / 8) {
                await sleep(speed)
                value = Math.round(i);
                if (value < 10) {
                    counter.innerText = "0" + value;
                } else {
                    counter.innerText = value;
                }
            }
        }
        updateCount();
    })
}

function scrollFunction() {
    var isLoaded = "false";
    var isGalaryLoaded = "false";

    document.addEventListener('scroll', function(e) {
        const verticalSec = document.querySelector('.vertical-section');
        const galarySec = document.querySelector('.tab-content-area ');
        if (galarySec.getBoundingClientRect().top <= window.innerHeight / 1.2 && isGalaryLoaded == "false") {
            countIncrement();
            isGalaryLoaded = "true"
        }
        if (verticalSec.getBoundingClientRect().top <= window.innerHeight / 2 && isLoaded == "false") {
            countIncrement();
            isLoaded = "true"
        }

    });
}

countIncrement();
scrollFunction();



// slider AR

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// plusSlides();
// currentSlide();
// slider AR End


// // Clickable Dropdown

// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// // Clickable Dropdown End