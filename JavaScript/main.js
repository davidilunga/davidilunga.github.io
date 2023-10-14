const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email_addr = document.getElementById('email_addr');
const phone_input = document.getElementById('phone_input');
const message = document.getElementById('message');
const scrolldown = document.getElementById("scrolldown");
const header = document.getElementById("home");

//------------------------------------------- Smooth Scrolling -----------------------------------------------

const home = document.getElementById('home-tag');
const about = document.getElementById('about-tag');
const experience = document.getElementById('experience-tag');
const skills = document.getElementById('skills-tag');
const projects = document.getElementById('projects-tag');
const testimonials = document.getElementById('testimonials-tag');
const contact = document.getElementById('contact-tag');

window.onload = function () {
  window.scrollTo(0,0);
}
//------------------------------------------- Close Nav -----------------------------------------------

function closeNav(){
 const close = document.getElementById("close");
 close.click();
}

//------------------------------------------- SMTP Send Email -----------------------------------------------

var form = document.getElementById("contact_form");

function handleForm(event) {
    event.preventDefault();

    var nameRGEX = /^[A-Za-z]+$/;
    var phoneRGEX_personal = /^((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})?$/;
    var phoneRGEX_personal_2 = /^((\0\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})?$/;
    var phoneRGEX_business =/^\s*\(?(020[7,8]{1}\)?[ ]?[0-9]{1}[0-9]{2}[ ]?[0-9]{4})\s*$/
    var emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,4})$/;

    var first_nameResult = nameRGEX.test(first_name.value.trim());
    var last_nameResult = nameRGEX.test(last_name.value.trim());
    var emailResult = emailRGEX.test(email_addr.value.trim());
    var phoneResult_personal = phoneRGEX_personal.test(phone_input.value.trim());
    var phoneResult_personal_2 = phoneRGEX_personal_2.test(phone_input.value.trim());
    var phoneResult_business = phoneRGEX_business.test(phone_input.value.trim());

    console.log(first_name.value);
    console.log(last_name.value);
    console.log(email_addr.value);
    console.log(phone_input.value);

    if (first_nameResult == false){
        alert("Invalid First Name. Please enter a valid first name to continue.");
    }

    if (last_nameResult == false){
        alert("Invalid Last Name. Please enter a valid last name to continue.");
    }

    if (emailResult == false){
        alert("Invalid Email. Please enter a valid email to continue.");
    }

    if (phoneResult_personal == false && phoneResult_personal_2 == false && phoneResult_business == false){
        alert("Invalid Contact Number. Please enter a valid UK number, beginning with +44 or 0 or 020 to continue.");
    }


    if (first_nameResult == true && last_nameResult == true && emailResult == true && (phoneResult_personal == true || phoneResult_personal_2 == true|| phoneResult_business == true)) {
        console.log("All fields validated");
        console.log("Sending email...")
        // write html for proper format to be sent in mail
        let email_body = `
        <b>Name: </b>${first_name.value}&nbsp;${last_name.value}
        <br><br>
        <b>Email: </b>${email_addr.value}
        <br><br>
        <b>Phone no: </b>${phone_input.value}
        <br></br><br>
        <b>Message: </b>${message.value}
        `

        Email.send({
            SecureToken: "b24b3ca7-3b2b-482d-b0b7-46df75d0e9a9",
            To: "snipezrek@gmail.com",
            From: "snipezrek@gmail.com",
            Subject: "Portfolio - New Connection",
            Body: email_body
        }).then(
            message => alert("Great news! Your email has officially been sent and is on its way to David. Please give him a few days to respond to your email. Thank you. ")
        );
    } else {
        console.log("One or more fields invalid");
    }

}

form.addEventListener("submit", handleForm);
//------------------------------------------- Back To the Top Button ---------------------------------------------
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  document.querySelector('header').classList.toggle ('window-scroll', window.scrollY > 0)

  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

//------------------------------------------- Smooth Scrolling -----------------------------------------------

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

//------------------------------------------- Fill Testimonials -----------------------------------------------

const testimonials_row = document.querySelector('.testimonials .row');
const add_testimonial = document.querySelector('#add_profile');

const testimonials_list = [];

let testimonials_item = new Testimonials("Muhammed", "Mirza", "CEO- Founder @ Homecraft Partners", "https://www.linkedin.com/in/muhammad-mirza-4b6393194/", "&nbsp;I had the pleasure of working closely with David during our time at Meta. David is an exceptional Application Engineer with a keen understanding of complex technical systems and a remarkable ability to translate customer requirements into practical, efficient solutions. His problem-solving skills were instrumental in tackling some of the most challenging projects we faced and consistently demonstrated a deep understanding of the applications we were working on.&nbsp;&nbsp;");
testimonials_list.push(testimonials_item);

testimonials_item = new Testimonials("Adrian", "Yong", "Embedded Applications Specialist @ Meta", "https://www.linkedin.com/in/adrian-yong/", "&nbsp;David is a great colleague. Being a fast learner, he is willing to undertake new systems and processes and adapt to them. He is also very skilled in coding and made some tools to cut down time spent on some of our processes, making it easier to carry out our tasks and send off the work items at a sooner date than anticipated. He is also a joy to be around, brightening the team's atmosphere.&nbsp;&nbsp;");
testimonials_list.push(testimonials_item);

testimonials_item = new Testimonials("Morad", "Ahmed", "Senior SOC Analyst at Exponential-e", "https://www.linkedin.com/in/mo-a-one1two2three3/", "&nbsp;While we collaborated on various group projects at university, David often spoke of his role as an Embedded Applications Specialist at Meta. Even then, his profound insights into the intricacies of programming were evident. David's fervour for the subject goes beyond mere tasks; he is driven by an innate desire to innovate and elevate every piece of work. From our time together and the stories he shared, it's clear that when he channels his energy into a programming challenge, the results are consistently exceptional.&nbsp;&nbsp;");
testimonials_list.push(testimonials_item);

console.log(testimonials_list);

for (let i = 0; i < testimonials_list.length; i++) {
  addHTML(testimonials_list[i]);
};

function addHTML(testimonials) {
  const column = document.createElement('div');
  column.className = 'col-lg-4 text-center';

  const profile = document.createElement('div');
  profile.className = 'profile';

  const testimonials_text = document.createElement('blockquote');
  testimonials_text.id = 'profile-text'

  testimonials_text.innerHTML = `${testimonials.message}`;

  const profile_info = document.createElement('div');
  profile_info.className = 'profile-info';

  profile_info.innerHTML = `<span> ${testimonials.first_name + ` ` + testimonials.last_name} </span><p>${testimonials.current_position}</p>
  <a href="${testimonials.linkedin}" target="_blank"><i class="ri-linkedin-fill"></i></a>`


  profile.appendChild(testimonials_text);
  profile.appendChild(profile_info);
  column.appendChild(profile);
  testimonials_row.appendChild(column);
}
/*--------------------------------------------------------------- Scroll Methods ---------------------------------------------------------------*/

home.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  home.classList.add('navbar-active');
  console.log('Home Clicked');
});

about.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  about.classList.add('navbar-active');
  console.log('About Clicked');
});

experience.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  experience.classList.add('navbar-active');
  console.log('Experience Clicked');
});

skills.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  skills.classList.add('navbar-active');
  console.log('Skills Clicked');
});

projects.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  projects.classList.add('navbar-active');
  console.log('Projects Clicked');
});

testimonials.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  testimonials.classList.add('navbar-active');
  console.log('Testimonials Clicked');
});

contact.addEventListener('click', ()=>{
  document.querySelector('.navbar-active').classList.remove('navbar-active');
  contact.classList.add('navbar-active');
  console.log('Contact Clicked');
});
/*--------------------------------------------------------------- End of Methods ---------------------------------------------------------------*/

function Testimonials(first_name, last_name, current_position, linkedin, message){
  this.first_name = first_name;
  this.last_name = last_name;
  this.current_position = current_position;
  this.linkedin = linkedin;
  this.message = message;
}
