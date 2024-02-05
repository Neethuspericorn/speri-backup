var footer = ` <div class="footer-section">
<div class="sp-container container-custom sp-d-flex">
    <div class="footer-top-wrapper wid-out f-logo-block">
        <div class="footer-col-block footer-otr">
            <div class="footer-details-cover">
                <p class="footer-logo m-0"><a href="https://www.spericorn.com/"><img src="../img/logo-dark.svg" alt="development" width="162" height="38"></a></p>
                <div class="contact-block"><a class="contact-link" href="mailto:contact@spericorn.com"><span class="icon"><img src="../img/mail-sm.svg" alt="Mail" width="21" height="14"></span><span class="icon-label">contact@spericorn.com</span></a><a class="contact-link"
                        href="tel:+91 471-4612777"><span class="icon"><img src="../img/phone-sm.svg" alt="Phone" width="21" height="14"></span><span class="icon-label">+91 471-4612777</span></a><a class="contact-link" href="skype:service.spericorn?call"><span class="icon"><img src="../img/serv-sm.svg" alt="Service" width="21" height="14"></span><span class="icon-label">service.spericorn</span></a></div>
            </div>
        </div>
    </div>
    <div class="footer-top-wrapper flex-1">
        <div class="footer-col-block">
            <div class="link-outer">
                <div class="ft-hed">Quick Links</div>
                <ul class="footer-ul">
                    <li><a href="https://www.spericorn.com/" target="_blank">Home</a></li>
                    <li><a href="../about-us.html" target="_blank">About</a></li>
                    <li><a href="../case-studies.html" target="_blank">Case Studies</a></li>
                </ul>
                <ul class="footer-ul">

                    <li><a href="../careers.html" target="_blank">Careers</a></li>
                    <li><a href="../blogs.html" target="_blank">Blogs</a></li>
                    <li><a href="../interview-status.html" target="_blank">Check my interview status </a></li>
                    <li><a href="../contact-us.html" target="_blank">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-col-block">
            <div class="link-outer">
                <div class="ft-hed">Technologies</div>
                <ul class="footer-ul">
                    <li><a href="../angular.html">Angular</a></li>
                    <li><a href="../react-js.html">React JS</a></li>
                    <li><a href="../node-js.html">Node JS</a></li>
                </ul>
                <ul class="footer-ul">
                    <li><a href="../python.html">Python</a></li>
                    <li><a href="../javascript.html">Javascript</a></li>
                    <li><a href="../wordpress.html">Wordpress</a></li>
                    <li><a href="../php.html">PHP</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-col-block">
            <div class="link-outer">
                <div class="ft-hed">Expertise</div>
                <ul class="footer-ul">
                    <li><a href="../laravel.html">Laravel</a></li>
                    <li><a href="../codeigniter.html">CodeIgniter</a></li>
                    <li><a href="../coldfusion.html">ColdFusion</a></li>
                </ul>
                <ul class="footer-ul">
                    <li><a href="../dot-net.html">Dot Net</a></li>
                    <li><a href="../android.html">Android</a></li>
                    <li><a href="../react-native.html">React Native</a></li>
                    <li><a href="../ionic.html">Ionic</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-col-block">
            <div class="link-outer">
                <div class="ft-hed">Services</div>
                <ul class="footer-ul">
                    <li><a href="../web-app-development-company.html" target="_blank">Web App Development</a></li>
                    <li><a href="../mob-app-development-company.html" target="_blank">Mobile App Development</a></li>
                    <li><a href="../digital-marketing-agency.html" target="_blank">Digital Marketing</a></li>
                </ul>
                <ul class="footer-ul">
                    <li><a href="../iot-development-company.html" target="_blank">IOT Development</a></li>
                    <li><a href="../web-design-company.html" target="_blank">Web Designing</a></li>
                    <li><a href="../blockchain-development-company.html" target="_blank">Blockchain Development</a></li>
                    <li><a href="../artificial-intelligence-company.html" target="_blank">Artificial Intelligence Solutions</a></li>

                </ul>
            </div>
        </div>
    </div>
</div>
</div>
<div class="copy-right-section">
<div class="sp-container container-custom">
    <div class="copy-right-cover">
        <div class="follow-us-section">
            <div class="social-icon-outer sp-d-flex"><a href="https://www.facebook.com/spericorntechnology/" target="_blank"><img src="../img/facebook.svg" alt="facebook" width="11" height="24"></a><a href="https://twitter.com/spericorn" target="_blank"><img src="../img/twitter.svg" alt="twitter" width="22" height="18"></a>
                <a
                    href="https://www.linkedin.com/company/spericorn-technology-pvt-ltd?originalSubdomain=in" target="_blank"><img src="../img/linkedin.svg" alt="linkedin" width="25" height="18"></a><a href="https://www.instagram.com/spericorntechnology/" target="_blank"><img src="../img/instagram.svg" alt="linkedin" width="30" height="16"></a></div>
        </div>
        <div class="copy-text">
            <p><span id="copyright-year"></span> Spericorn Technology Inc. All Rights Reserved | <a href="../cookies-policy.html" target="_blank">Cookies Policy</a> | <a href="../privacy-policy.html" target="_blank">Privacy Policy</a></p>
        </div>
        <div class="app-icon-outer sp-d-flex">
            <a href="https://apps.apple.com/us/app/erp-spericorn/id6444275248" target="_blank">
                <img src="../img/apple_footer.webp" alt="Ios App Downlaod" width="100" height="25">
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.spericorn.erp&pli=1" target="_blank">
                <img src="../img/google_footer.webp" alt="Ios App Downlaod" width="100" height="25">
            </a>

        </div>
    </div>
</div>
</div>

`;



function toggleChat() {
    var chatWindow = document.getElementById("chat-window");
    var chatButtonImg = document.getElementById("chat-button-img");

    if (chatWindow.classList.contains('hide')) {
        chatWindow.classList.remove('hide');
        chatWindow.classList.add('show');

    }
}
function closeChat() {
    var chatWindow = document.getElementById("chat-window");
    if (chatWindow.classList.contains('show')) {
        chatWindow.classList.remove('show');
        chatWindow.classList.add('hide');
      }
}




// disable submit button
$(document).ready(function(){
    var chatWindow = document.getElementById("chat-window");
    var chatButtonImg = document.getElementById("chat-button-img");
    chatButtonImg.src = "/img/bot.svg";
    // enter button venet trigger
$("#question_field").keyup(function(event) {
    // checking length of input field
    if($(this).val().trim().length !=0) {

        if (event.keyCode === 13) {

            // click event trigger
            $("#send_button").click();
            // disable double click
            var el = $(this);
            el.prop('disabled', true);
            // timer to disable input field
            setTimeout(function(){el.prop('disabled', false); }, 3000);
        }
        }
});

$('#question_field').keyup(function(){
    if($(this).val().trim().length !=0)
        $('#send_button').attr('disabled', false);
    else
        $('#send_button').attr('disabled',true);
})
});

function socket_call(){

    $('#send_button').attr('disabled',true);

    console.log("socket_call")

var socket = new WebSocket('wss://chatgpt-demo.spericorn.com/ws/');

var question = document.getElementById('question_field').value

var keep_context = document.getElementById("keep_context_field").value;

var div1 = document.getElementById('chat_box');
// get current time
var current_time = get_current_time();

div1.innerHTML += `<div class="client-msg msg-otr">
      <div class="otr">
         <div class="chat-avathar"><img src="img/Ellipse-chat.png" alt=""></div>
         <div class="msg-container">
            <div class="msg">
                <p>${question}</p>
            </div>
            <div class="time text-right"><span>${current_time}</span></div>
         </div>

      </div>
   </div>
   <div class="company-msg msg-otr chat-loder unique_class_name">
        <div class="otr">
           <div class="chat-avathar"><img src="img/woman.svg" alt=""  width="25" height="25"></div>
           <div class="msg">
                <img src="img/chat-loader.gif" class="imgLoader"/>
           </div>
        </div>
     </div>
   `;

// scroll to bottom
$('#chat_box').scrollTop($('#chat_box')[0].scrollHeight + 80);

document.getElementById('question_field').value = '';

socket.addEventListener('open', function (event) {
    console.log('sending to socket')

socket.send(JSON.stringify({"command": "get_chats", "question": question, "keep_context":keep_context}));

});

socket.onmessage = function(event){

var data = JSON.parse(event.data);

var question = data.question;

var answer = data.answer;

var keep_context = data.keep_context;

var hiddenField_context = document.getElementById("keep_context_field");

hiddenField_context.value = keep_context;

console.log('keep_context', keep_context)

var div2 = document.getElementById('chat_box');

// script to hide loader
var divsToHide = document.getElementsByClassName("unique_class_name"); //divsToHide is an array
for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.visibility = "hidden"; // or
    divsToHide[i].style.display = "none"; // depending on what you're doing
}

var current_time = get_current_time();
// script to add answer

div2.innerHTML += `
    <div class="company-msg msg-otr">
      <div class="otr">
         <div class="chat-avathar"><img src="img/woman.svg" alt="" width="25" height="25"></div>
         <div class="msg-container">
            <div class="msg">
                <p>${answer}</p>
            </div>
            <div class="time"><span>${current_time}</span></div>
         </div>

      </div>
   </div>`;

// scroll to bottom
$('#chat_box').scrollTop($('#chat_box')[0].scrollHeight);

console.log('keep hidden')

}

}


function get_current_time(){

    const currentTime = new Date();

    // Get the current hour in 12-hour format
    let hours = currentTime.getHours();
    const meridiem = hours >= 12 ? 'pm' : 'am';

    // Convert the hour to 12-hour format
    hours = hours % 12 || 12;

    // Get the current minutes
    const minutes = currentTime.getMinutes();

    // Construct the formatted time string
    const formattedTime = hours + '.' + minutes + ' ' + meridiem;

    return formattedTime

}




const footr = document.getElementById("footer-section");

footr.insertAdjacentHTML("beforeend", footer);