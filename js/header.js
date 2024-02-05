var navbar = `
<header id="header">
    <div class="container-fluid">
        <div class="nav-menu"><a href="https://www.spericorn.com/" class="logo" title="Spericorn-Technology"><img alt="logo" src="../img/logo-white.svg" height="38" width="162" class="logo-dark" id="logoToggle"></a>
            <nav><input type="checkbox" id="show-menu-input-checkbox" role="button"><label for="show-menu-input-checkbox" id="main-menu-toggler" class="flex-container flex-vcenter flex-hcenter"><div id="main-menu-toggler-icon" class="flex-grow"></div></label>
                <ul
                    class="menu-ul" id="mainMenu">
                    <li><a href="https://www.spericorn.com/">Home</a></li>
                    <li><a href="javascript:" id="navLinkMob" class="nav-link-mob">Services</a>
                        <div class="sub-menu-outer">
                            <div class="sub-menu-cover">
                                <div class="left-box"><strong>Our Services</strong>
                                    <p>Well experienced and skilful developers Are working for us and the following are some of the services we provide</p>
                                    <div class="img-sct"><img src="../img/submenu-img.svg" width="362" height="226" alt="Service image"></div>
                                </div>
                                <div class="other-list-items">
                                    <ol id="sub-menu-ul">
                                        <li><a href="../artificial-intelligence-company.html"><i><img src="../img/sub-menu-cion-07.svg" width="52" height="52" alt="Artificial Intelligence Solutions"></i><span>Artificial Intelligence Solutions</span></a></li>
                                        <li><a href="../blockchain-development-company.html"><i><img src="../img/sub-menu-cion-06.svg" width="52" height="52" alt="Blockchain Development"></i><span>Blockchain Development</span></a></li>
                                        <li><a href="../iot-development-company.html"><i><img src="../img/sub-menu-cion-05.svg" width="52" height="52" alt="IoT Development"></i><span>IoT Development</span></a></li>
                                        <li><a href="../web-app-development-company.html"><i><img src="../img/sub-menu-cion-01.svg" width="52" height="52" alt="Web App Development"></i><span>Web App Development</span></a></li>
                                        <li><a href="../mob-app-development-company.html"><i><img src="../img/sub-menu-cion-02.svg" width="52" height="52" alt="Mobile App Development"></i><span>Mobile App Development</span></a></li>
                                        <li><a href="../web-design-company.html"><i><img src="../img/sub-menu-cion-03.svg" width="52" height="52" alt="Web Designing"></i><span>Web Designing</span></a></li>
                                        <li><a href="../digital-marketing-agency.html"><i><img src="../img/sub-menu-cion-04.svg" width="52" height="52" alt="Digital Marketing"></i><span>Digital Marketing</span></a></li>
                                        <li><a href="../chatgpt.html"><i><img src="../img/chat_gpt_icon.svg" width="52" height="52" alt="ChatGPT"></i><span>ChatGPT
                                            </span></a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="../life-at-spericorn.html" id="life_sp_nav">Life at spericorn</a></li>
                    <li><a href="../case-studies.html" id="case_study_nav">Case Studies</a></li>
                    <li><a href="../careers.html" id="careers_sub_nav">Careers</a></li>
                    <li><a href="../about-us.html">About</a></li>
                    <li><a href="../contact-us.html">Contact</a></li>
                    <li class="mr-0 pr-0"><a class="btn-blue " href="../book-a-free-consultation.html"><span class="icon"><img src="../img/btn-icn.svg" alt="Book a free consultation" width="20" height="20"></span>Book a free consultation</a></li>
                    </ul>
            </nav>
        </div>
    </div>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", navbar);

// url

(function () {
    var element = document.getElementById("header");
    var logodark = document.getElementById("logoToggle");
    if (document.body.classList.contains('logo-dark-body')){
        logodark.src = "img/logo-dark.svg";
    }
    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('#mainMenu li a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].className += "active";
        }
    }

    var bodyElement = document.getElementsByTagName('body');

    // Contact page
    if(current==='contact-us.html'){
        element.classList.add("service-header");
    }

    // Life at spericorn sub page
    for(var j=0; j< bodyElement.length; j++){
        if (bodyElement[j].classList.contains('life-at-sp-body')){
            document.getElementById('life_sp_nav').classList.add("active");
            element.classList.add("service-header");
        }
    }

    // Career sub page
    for(var k=0; k< bodyElement.length; k++){
        if (bodyElement[k].classList.contains('careers-menu-body')){
            document.getElementById('careers_sub_nav').classList.add("active");
            element.classList.add("service-header");
        }
    }

    // Case study sub page
    for(var i=0; i< bodyElement.length; i++){
        if (bodyElement[i].classList.contains('case-study-body')){
            document.getElementById('case_study_nav').classList.add("active");
            element.classList.add("service-header");
        }
    }

    // Service sub menu

    var subActive = document.querySelectorAll('#sub-menu-ul li a');
    for(var i=0; i< subActive.length; i++){
        if (subActive[i].classList.contains('active')){
            subActive[i].classList.remove("active");
            document.getElementById('navLinkMob').classList.add("active");
        }
    }

    // Service marketing page
    for(var i=0; i< bodyElement.length; i++){
        if (bodyElement[i].classList.contains('service-sub-body')){
            document.getElementById('navLinkMob').classList.add("active");
            element.classList.add("service-header");
        }
    }



})();