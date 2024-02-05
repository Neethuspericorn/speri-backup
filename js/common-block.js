var commonHistory = ` <div class="sp-d-flex history-block">
    <div class="sp-d-flex areas-expertise-wrapper">
        <div class="expertise-block-sm">
            <div class="expertise-sm-inner">
                <div class="expertise-text-block">
                    <div class="hed">Making History</div>
                    <div class="expertise-list">
                        <p>10+ <span>Years</span></p>
                            <p>650+ <span>Projects</span></p></div>
                    <div class="expertise-list">
                        <p>230+ <span>Clients</span></p>
                            <p>70+ <span>Countries</span></p></div>
                </div>
            </div>
        </div>

    </div>
    <div class="sp-d-flex areas-expertise-wrapper flex-wrap">
        <div class="sp-d-flex expertise-block-lg">
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">Web &amp; Mobile<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="custom web and mobile" src="../img/cart.svg" height="28" width="31"></div>
                        <div class="text-cover"><span class="count">350+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">Fintech<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="custom web and mobile" src="../img/cart.svg" height="28" width="31"></div>
                        <div class="text-cover"><span class="count">5+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">AI<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="custom web and mobile" src="../img/cart.svg" height="28" width="31"></div>
                        <div class="text-cover"><span class="count">10+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">Blockchain<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="ECommerce Solution" src="../img/exp-2.svg" height="29" width="36"></div>
                        <div class="text-cover"><span class="count">25+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">IOT<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="Banking Solution" src="../img/exp-3.svg" height="28" width="43"></div>
                        <div class="text-cover"><span class="count">10+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">Logistics,CRM &amp; ERP<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="E-learning Solution" src="../img/exp-4.svg" height="28" width="31"></div>
                        <div class="text-cover"><span class="count">60+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">E-commerce &amp; learning<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="Health Care Solution" src="../img/exp-5.svg" height="33" width="35"></div>
                        <div class="text-cover"><span class="count">75+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
            <div class="expertise-card">
                <div class="expertise-card-inner">
                    <div class="expertise-card-title">
                        <div class="his-hed">Others<br><span>Solution</span></div>
                    </div>
                    <div class="sp-d-flex icon-wrapper">
                        <div class="icon-cover"><img alt="Logistics and ERP Solution" src="../img/exp-6.svg" height="35" width="34"></div>
                        <div class="text-cover"><span class="count">100+</span><span class="count-label">Projects</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const historyBlock = document.getElementById("history-section");
    historyBlock.insertAdjacentHTML("beforeend", commonHistory);

});
