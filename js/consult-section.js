var consultSection = ` <p class="content">Our team of Angular experts creates compelling and result-driven web applications that take your business to the next level.</p>
<a href="book-a-free-consultation.html">
    <button class="btn btn-book-exp free-consultation-btn">Book Free Consultation With Our Experts
        <img src="../img/arrow-right .svg" alt="Meeting" width="24" height="24">
    </button>
</a>
`;

document.addEventListener('DOMContentLoaded', function() {

    const consultBlock = document.getElementById("consult-sec");
    consultBlock.insertAdjacentHTML("afterend", consultSection);
});
