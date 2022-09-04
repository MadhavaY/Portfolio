

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




  //   Projects

  var Projects = [

    {
      "heading" : "Online Library website",
      "img" :      "./project3.png",
      "text"  : `This is a website to manage a library online. Made using Bootstrap and JavaScript. You can add a book to the library and remove it effortlessly. 
      Find the source code for the project here :

      <a href="https://github.com/MadhavaY/Library-website-using-Javascript" target="_blank">

          <svg xmlns="http://www.w3.org/2000/svg" id="git-project-link" role="img"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
              <title>GitHub</title>
              <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
              </path>
          </svg>


      </a>`
    },

     {
        "heading"  : "Food ordering website",
        "img"  :  "./project4.png",  
        "text"     : `Food ordering web page like zomato or swiggy. Fully responsive website made using HTML and CSS. Find the source code of the webpage here :


        <a href="https://github.com/MadhavaY/grubhub" target="_blank">



            <svg xmlns="http://www.w3.org/2000/svg" id="git-project-link" role="img"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                <title>GitHub</title>
                <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
            </svg> `
    },

    {
      "heading"  : "Random Quotes",
      "img"  :   "./project5.png",
      "text"    : `Random Quotes generator made using Javascript. All the new quotes are generated using an API. Find the source code of the webpage here :


      <a href="https://github.com/MadhavaY/RandomQuotesGenerator" target="_blank">



          <svg xmlns="http://www.w3.org/2000/svg" id="git-project-link" role="img"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
              <title>GitHub</title>
              <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
              </path>
          </svg>`
  },


  {
    "heading"  : "Netflix",
    "img"  :   "./project2.png",
    "text"    : `Netflix sign in page with form validation. Find the source code of the webpage here :


    <a href="https://github.com/MadhavaY/Netflix-SignIn-page" target="_blank">



        <svg xmlns="http://www.w3.org/2000/svg" id="git-project-link" role="img"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
            <title>GitHub</title>
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
        </svg>`
}
  ]

  

  let nxtarrow = document.getElementById('next-arrow');
  let prevarrow = document.getElementById('prev-arrow');
  console.log(nxtarrow);
  console.log(prevarrow);

  let heading = document.getElementById('title');
  let text = document.getElementById('text');
  let img = document.getElementById('Projectimg');
  // console.log(img.src);

  var currentHead = 0;

  nxtarrow.onclick = function(){

    console.log('clicked')
    if(currentHead == (Projects.length -1)){
       currentHead = 0;
    }
    else{
      currentHead++;
    }

    var title = Projects[currentHead].heading;
    var para = Projects[currentHead].text;
    var imgsrc = Projects[currentHead].img;
    heading.innerHTML = title;
    text.innerHTML = para;
    img.src = imgsrc;

    }



    prevarrow.onclick = function(){

      console.log('clicked')
      if(currentHead == (Projects.length +1)){
         currentHead = 0;
      }
      else{
        currentHead++;
      }
  
      var title = Projects[currentHead].heading;
      var para = Projects[currentHead].text;
      var imgsrc = Projects[currentHead].img;
      heading.innerHTML = title;
      text.innerHTML = para;
      img.src = imgsrc;
  
      }

  
// ********** Blogs *********

let title = document.getElementById('Blog-title');

title.innerHTML = "Blogs";



// ********* Dark mode ********

const checkbox = document.getElementById('checkbox');
// const text = document.getElementById()

checkbox.addEventListener('change', ()=>{

  document.body.classList.toggle('light');
 
  // navbra
  $('.navbar ul li a').toggleClass('light');


  // left
  $('.left ul li a').toggleClass('light');
  $('.left ul::after').toggleClass('light');

  // right
  $('.email a').toggleClass('light');
  $('.email::after').toggleClass('light');

  // mainhead
  $('.main-heading-container').toggleClass('light');
  $('.mainhead').toggleClass('light');
  $('.heading p').toggleClass('light');

  // about
  $('#heading2').toggleClass('light');
  $('.info').toggleClass('light');
  $('.about-container p,span').toggleClass('light');
  $('#heading3').toggleClass('light');
  $('.skill-container').toggleClass('light');

  // projects
  $('#project-heading').toggleClass('light');
  $('.projects').toggleClass('light');
  $('.library-project p').toggleClass('light');
  $('#git-project-link').toggleClass('light');

  // blogs
  $('.blogs h2').toggleClass('light');
  $('.blog h3').toggleClass('light');
  $('.blog').toggleClass('light');
  $('.blog p').toggleClass('light');

  
})
