
// document.addEventListener("DOMContentLoaded", function () {
//   var navLinks = document.querySelectorAll(".navbar .navitem");
//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       var targetId = link.getAttribute("href");
//       if (targetId && targetId.length > 1) {
//         targetId = targetId.substring(1);
//         var targetSection = document.getElementById(targetId);

//         if (targetSection) {
//           targetSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdown = document.querySelector(".dropdown");
//   var hidnav = document.querySelector(".hidnav");

//   hidnav.addEventListener("click", function (event) {
//     event.preventDefault();
//     dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
//   });
// });
var consmallLinks = document.querySelectorAll(".consmall");

consmallLinks.forEach(function (consmall) {
  consmall.addEventListener("click", function () {
    var targetHref = consmall.getAttribute("href");
    if (targetHref && targetHref.length > 1) {
      window.open(targetHref, "_blank");
    }
  });
});
var projsmall = document.querySelectorAll(".pg2small");
projsmall.forEach(function (pg2small) {
  pg2small.addEventListener("click", function () {
    var targetHref = pg2small.getAttribute("href");
    if (targetHref && targetHref.length > 1) {
      window.open(targetHref, "_blank");
    }
  });
});
var skill=document.querySelectorAll(".allskills");
skill.forEach(function(allskills){
  allskills.addEventListener("click", function () {
    var targetHref = allskills.getAttribute("href");
    if (targetHref && targetHref.length > 1) {
      window.open(targetHref, "_blank");
    }
  });
});
function downloadCV() {
  var downloadLink = document.getElementById("downloadLink");
  if (downloadLink) {
    downloadLink.click();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar .navitem");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = link.getAttribute("href");
      if (targetId && targetId.length > 1) {
        targetId = targetId.substring(1);
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  var dropdown = document.querySelector(".dropdown");
  var hidnav = document.querySelector(".hidnav");

  hidnav.addEventListener("click", function (event) {
    event.preventDefault();
    var dropcon = document.querySelector(".dropcon");
    dropcon.style.display = dropcon.style.display === "none" ? "block" : "none";
  });
});

const typed=new Typed('.multiple-text',{
  strings:['Frontend Developer' ,'Student' , 'Backend Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:100,
  loop:true,
})
