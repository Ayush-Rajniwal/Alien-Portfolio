const templates = {
  addProject: ({ img, title, tags, desc, links }) => {
    return `<div class="project-card">
          <img src="${img}" width="100%" alt="project image" />
          <div class="project-text">
            <div class="project-name">${title}</div>
            <div class="project-tags">
            ${tags.map(tag => `<div class="pt">${tag}</div>`).join('')}
            </div>
            <div class="project-desc">
            ${desc}
            </div>
          </div>
          <div class="project-links">

            ${links.github !== null ? `<a target="_new" href="${links.github}"><i class="fa fa-github"></i></a>`: ``}
            ${links.live != null ? `<a target="_new" href="${links.live}"><i class="fa fa-external-link"></i></a>` : ``} 
          </div>
        </div>`
  },
  addExperience: ({ date, compName, pos, ts, resp, link }) => {
    return ` <div data-date="${date}" class="experience-card">
          <div class="company">
            <div class="company-name">${compName}</div>
            <div class="job-title">${pos}</div>
          </div>
          <div class="job-desc">
            <ul>
            ${resp.map(ele => `<li>${ele}</li>`).join("")}
            </ul>
          </div>
          <div class="technology-stack">
            ${ts.map(ele => ` <div class="pt">${ele}</div>`).join("")}
          </div>
          ${link.live != null ? `<div class="experience-link">
            <a target="_new" href="${link.live}"><i class="fa fa-external-link"></i></a>
          </div>`: ""}
          
        </div>`
  }
}



const consoleMSG = () => {
  console.log(`%c
Well! Do you want to look at the source code? Use this https://github.com/Ayush-Rajniwal/Alien-Portfolio. 
I created this portfolio from scratch. I took some inspiration from here and there, but most of the stuff is my original creation.
No Code Copy Pasted.
I haven't used any fancy framework because I want to up-lift my basics of web-development skills. I hope you will like it.😊`,
    'background: #7adac0; color: #1b3966; font-size:16px;font-weight:700');
}
$(document).ready(function () {
  consoleMSG();

  var canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 200;

  for (var i = 0; i < stars; i++) {
    x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight;
    context.fillStyle = "white";
    context.fillRect(x, y, 2, 2);
  }

  // Set Startfield width and height
  document.getElementById("starfield").style.width = document.body.clientWidth + "px";
  document.getElementById("starfield").style.height = document.body.clientHeight + "px";

  //Populate projects
  const projectHolder = $(".project-holder");
  projects.forEach(project => {
    projectHolder.append(templates.addProject(project))
  })

  //Populate experience
  const experienceHolder = $(".experience-holder");
  experience.forEach(exp => {
    experienceHolder.append(templates.addExperience(exp))
  })

})


$('.alien-btn').click(() => {
  const msgBox = $("#msg-box");
  if ($('.alien-btn').text() == "Don't Click") {

    $('.alien-btn').text("Back");
    msgBox.html(`Help! Help! Help!, I am stuck on a planet called Earth🌍. Space Co-ordinate(∠5.2°, Σ 212.A, δ-X.9).
These people call themself Humans👩‍🤝‍🧑🏻.

Food🍝 is not free here. I have to earn money💰 to survive. So, I am creating this portfolio to find a job.
I hope you guys will figure out my co-ordinate soon and take me back to my planet.

  Regards,
  Ayush


  ☌⎍⊬⌇, ⟟ ⏃⋔ ⌇⏁⎍☊☍ ⍜⋏ ⏃ ⌿⌰⏃⋏⟒⏁ ☊⏃⌰⌰⟒⎅ ⟒⏃⍀⏁⊑🌍. ⌇⌿⏃☊⟒ ☊⍜-⍜⍀⎅⟟⋏⏃⏁⟒(∠5.2°, σ 212.⏃, δ-⌖.⏕ ).
   ⏁⊑⟒⌇⟒ ⌿⟒⍜⌿⌰⟒ ☊⏃⌰⌰ ⏁⊑⟒⋔⌇⟒⌰⎎ ⏃⌇ ⊑⎍⋔⏃⋏⌇👩‍🤝‍🧑🏻.
 
  ⎎⍜⍜⎅🍝 ⟟⌇ ⋏⍜⏁ ⎎⍀⟒⟒ ⊑⟒⍀⟒. ⟟ ⊑⏃⎐⟒ ⏁⍜ ⟒⏃⍀⋏💰 ⟟⏁. ⌇⍜, ⟟ ⏃⋔ ☊⍀⟒⏃⏁⟟⋏☌ ⏁⊑⟟⌇ ⌿⍜⍀⏁⎎⍜⌰⟟⍜ ⏁⍜ ⎎⟟⋏⎅ ⏃ ⟊⍜⏚.
   ⟟ ⊑⍜⌿⟒ ⊬⍜⎍ ☌⎍⊬⌇ ⍙⟟⌰⌰ ⎎⟟☌⎍⍀⟒ ⍜⎍⏁ ⋔⊬ ☊⍜-⍜⍀⎅⟟⋏⏃⏁⟒ ⌇⍜⍜⋏ ⏃⋏⎅ ⏁⏃☍⟒ ⋔⟒ ⏚⏃☊☍ ⏁⍜ ⋔⊬ ⌿⌰⏃⋏⟒⏁.
 
  ⍀⟒☌⏃⍀⎅⌇,
  ☊⊬⌿⊑⟒⍀
  `)
  }
  else {
    $('.alien-btn').text("Don't Click");
    msgBox.html(`Hi👋, Glad you're on my Portfolio.
   
          I am an upcoming Software Developer. I love💕 creating awesome⭐ stuff with my code like Satellite📡 , Blackhole🌌, Rockets🚀 as you see on this Portfolio (More awesome⭐ stuff @ <a target="_new" href="https://codepen.io/Ayush-Rajniwal" >Codepen <i class="fa fa-codepen"></i></a>).

          I have my passion for building kinds of stuff that are not only beautiful💇‍♂️ but valuable to others.

          I'm in my final year of BTech(CSE) and looking for a fulltime opportunity. If my skills match your company's requirements then you can drop me a mail @<a href="mailto:ayush.rajniwal@gmail.com">📧ayush.rajniwal@gmail.com</a >.

          My Team(👨🏼‍🤝‍👨🏼👩‍🤝‍🧑) also stood-up as 1st🏆 runner up in Smart India Hackathon 2019.

          You can connect with me on <a target="_new"href="https://www.linkedin.com/in/ayush-rajniwal-b14b03165/"><i class="fa fa-linkedin"></i></a> <a target="_new" href="https://twitter.com/AyushRajniwal"><i class="fa fa-twitter"></i></a>.
`)
  }



})

// resize canvas on screen size change
$(document).resize(() => {
  document.getElementById("starfield").style.width = document.body.clientWidth + "px";
  document.getElementById("starfield").style.height = document.body.clientHeight + "px";

})
