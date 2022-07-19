

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  
  $("#slidetoggle").click(function(){
  
    
               $("#project2-tab").slideToggle();
               $("#slidetoggle2").toggleClass('click');
              //  $("#project-1").slideToggle();
               
  });


  $("#slidetoggle2").click(function(){

    $("#library-tab").slideToggle();
    $("#arrow").toggleClass('click');
    
  })

 