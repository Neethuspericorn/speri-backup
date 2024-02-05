var promiseSection = `<div class="promise-content">
    <div class="hed-sec">We Ensure Customer Satisfaction!</div>
    <p>Have an idea? Work with us and see how it goes. We promise to go the extra mile for every project that we
    take onboard.</p>
    <div class="sp-col-12 p-0 mt-10">
    <a href="contact-us.html">
        <div class="btn-sec">
        <button class="btn-light-blue mt-10 free-consultation-btn">
            <span class="icon">
            <img src="img/btn-icn.svg" alt="button-icon" width="20" height="20">
            </span>Book Free Consultation With Our Experts </button>
        </div>
    </a>
    </div>
    </div>
    <div class="promise-img-section">
        <img src="img/satisfaction-img.svg" alt="promise-img" width="270" height="258">
    </div>
`;

const footerPromise = document.getElementById("footer_promise");
footerPromise.insertAdjacentHTML("beforeend", promiseSection);
