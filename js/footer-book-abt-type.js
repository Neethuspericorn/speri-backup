var aboutFooter = `<div class="blue-background">
    <div class="sp-container">
    <div class="sp-row">
        <div class="sp-col-md-8 sp-col-sm-12">
        <div class="content-sections">
            <div class="heading">Let’s Get Your <span>Project Started!</span>
            </div>
            <a href="book-a-free-consultation.html">
            <button class="btn btn-book-exp free-consultation-btn">Book Free Consultation With Our Experts <img src="../img/arrow-right .svg" alt="Meeting" width="24" height="24">
            </button>
            </a>
        </div>
        </div>
        <div class="sp-col-md-4 sp-col-sm-12">
        <div class="back-up-image">
            <img src="../img/abt-mtng.svg" alt="Project Started" width="334" height="401">
        </div>
        </div>
    </div>
    </div>
</div>
`;

const footerAbtPromise = document.getElementById("footer_aboutType");
footerAbtPromise.insertAdjacentHTML("beforeend", aboutFooter);
