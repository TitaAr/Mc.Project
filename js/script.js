$(document).ready(function(){
    $(".owl-carousel").owlCarousel({items: 4,nav:true});
  });

  const navbar={
      button:"",
      nav:document.querySelector(".main-nav"),
  };
  const schedule={
      buttons:document.querySelectorAll(".schedule-nav a"),
      days:document.querySelectorAll(".schedule-day"),
  };
  function hideDays(){
      schedule.days.forEach((elem)=>{elem.classList.remove("active");
    });
      schedule.buttons.forEach((elem)=>{elem.classList.remove("active");
    });
  }
  schedule.buttons.forEach(function(elem, i){
      elem.onclick=function(){
          hideDays();
          elem.classList.add("active");
          schedule.days[i].classList.add("active");
      }
  });
  function scrollHander(e){
      if(window.pageYOffset>300) navbar.nav.classList.add("fixed");
      else navbar.nav.classList.remove("fixed");
  }
 ;
    var form= document.getElementById("REGISTRATIONS");
    var btn=document.getElementById("button");
    var btn2=document.getElementById("button2");
    var span=document.getElementsByClassName("close")[0];

 btn.onclick=function(){
     form.style.display="block"
};
 btn2.onclick=function(){
     form.style.display="block"
};
span.onclick=function(){
    form.style.display="none"
};
window.onclick=function (event){
   if(event.target==form){
       form.style.display="none"
   };
};
;
