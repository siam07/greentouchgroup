var body = document.getElementsByTagName("BODY")[0];
let homePagem = document.querySelectorAll('.homePage');




$(function(){
    if(window.innerWidth < 500){
        document.querySelector('.mvo').style.display = 'none';
        document.querySelector('.section1').style.display = 'none';



        
        setTimeout(function(){
            $('.flyin').removeClass('hidden');
            setTimeout(function(){
                $('.flyin2').removeClass('hidden2');
                setTimeout(function(){
                    document.querySelector('.logosection').style.transform = 'translateY(-100%)';
                    setTimeout(function(){
                        document.querySelector('.logosection').style.display = 'none';
                    },1400);
                },1300);
                
            },1400);
        },500);
    }
    setTimeout(function(){
        document.querySelector('.heading1').style.transform = 'translateY(0)';
        document.querySelector('.paragraph1').style.transform = 'translateY(0)';
        document.querySelector('.heading1').style.opacity = '1';
        document.querySelector('.paragraph1').style.opacity = '1';
        document.querySelector('.scrolltostart').style.display = 'block';
        document.querySelector('.mvo').style.display = 'block';
        setTimeout(function(){
        document.querySelector('.scrolltostart').style.transform = 'translateY(0)';
        if (window.innerWidth > 500 ) {
            document.querySelector('.mission').style.transform = 'translateX(-63%)';
            document.querySelector('.vision').style.transform = 'translateX(-63%)';
            document.querySelector('.overview').style.transform = 'translateX(-63%)';
        }
        if (window.innerWidth < 500 ) {
            document.querySelector('.mission').style.transform = 'translateX(-70%)';
            document.querySelector('.vision').style.transform = 'translateX(-70%)';
            document.querySelector('.overview').style.transform = 'translateX(-70%)';
        }
        },500);
        setTimeout(function(){
            document.querySelector('.indexHamburger').style.opacity = '1';
            document.querySelector('.itm1').style.transform = 'translateY(0)';
            document.querySelector('.itm2').style.transform = 'translateY(0)';
            document.querySelector('.itm3').style.transform = 'translateY(0)';
            document.querySelector('.itm4').style.transform = 'translateY(0)';
            document.querySelector('.itm5').style.transform = 'translateY(0)';
            document.querySelector('.itm1').style.opacity = '1';
            document.querySelector('.itm2').style.opacity = '1';
            document.querySelector('.itm3').style.opacity = '1';
            document.querySelector('.itm4').style.opacity = '1';
            document.querySelector('.itm5').style.opacity = '1';
            document.querySelector('.logo').style.transform = 'translateY(0)';
            document.querySelector('.logo').style.opacity = '1';
        },1000);
    },4100);
});







document.querySelector('.indexHomePage').style.display = 'block';
document.querySelector('.indexCompanyPage').style.display = 'none';
for(var i = 0; i < homePagem.length; i++){
  if(window.innerWidth < 500){
      homePagem[i].addEventListener("click", function( event ) {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("crossed");
        line1.classList.toggle("open");
        line2.classList.toggle("open");
        line3.classList.toggle("open");
        document.querySelector('.indexHamburger').style.opacity = '0';
          document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
          document.querySelector('.scrolltostart').style.transitionDelay = '0s';
          
          document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
          document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

          document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
          document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
          
          document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
          document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

          document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
          document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

          document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
          document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
          
          document.querySelector('.companydecriptionH').style.opacity = '0';
          document.querySelector('.companydecriptionP').style.opacity = '0';

          document.querySelector('.companydecriptionH2').style.opacity = '0';
          document.querySelector('.companydecriptionP2').style.opacity = '0';

          document.querySelector('.companydecriptionH3').style.opacity = '0';
          document.querySelector('.companydecriptionP3').style.opacity = '0';

          document.querySelector('.companydecriptionH4').style.opacity = '0';
          document.querySelector('.companydecriptionP4').style.opacity = '0';

          document.querySelector('.companydecriptionH5').style.opacity = '0';
          document.querySelector('.companydecriptionP5').style.opacity = '0';

          document.querySelector('.section1').style.transform = 'translateY(100%)';    
          document.querySelector('.section2').style.transform = 'translateY(100%)';
          document.querySelector('.section3').style.transform = 'translateY(100%)';
          document.querySelector('.section4').style.transform = 'translateY(100%)';
          document.querySelector('.section5').style.transform = 'translateY(100%)';
          
              document.querySelector('.transitionp1').style.display = 'block';
              document.querySelector('.transitionp2').style.display = 'block';
          setTimeout(function(){
              document.querySelector('.transitionp1').style.transform = 'translateX(0)';
              document.querySelector('.transitionp2').style.transform = 'translateX(0)';
              document.querySelector('.section1').style.transform = 'translateY(100%)';

              document.getElementById('sec1').style.display = 'none';
              document.getElementById('sec2').style.display = 'none';
              document.getElementById('sec3').style.display = 'none';
              document.getElementById('sec4').style.display = 'none';
              document.getElementById('sec5').style.display = 'none';
              

              document.querySelector('.mission').style.transform = 'translateX(-110%)';
              document.querySelector('.vision').style.transform = 'translateX(-110%)';
              document.querySelector('.overview').style.transform = 'translateX(-110%)';

              document.querySelector('.heading1').style.transform = 'translateY(100%)';
              document.querySelector('.paragraph1').style.transform = 'translateY(100%)';
              document.querySelector('.heading1').style.opacity = '0';
              document.querySelector('.paragraph1').style.opacity = '0';
              setTimeout(function(){
                  document.querySelector('.pageIndication').style.display = 'none';
                  document.querySelector('.indicatorOn1').style.display = 'none';
                  document.querySelector('.indicatorOn2').style.display = 'none';
                  document.querySelector('.indicatorOn3').style.display = 'none';
                  document.querySelector('.indicatorOn4').style.display = 'none';
                  document.querySelector('.indicatorOn5').style.display = 'none';

                  
                  
                  body.style.backgroundImage = 'url(photos/background.jpg)';
                  document.getElementById('sec').style.display = 'block';
                  document.querySelector('.caption1').style.display = 'block';
                  document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                  document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';

                  document.querySelector('.heading1').style.transform = 'translateY(0)';
                  document.querySelector('.paragraph1').style.transform = 'translateY(0)';
                  document.querySelector('.heading1').style.opacity = '1';
                  document.querySelector('.paragraph1').style.opacity = '1';
                  document.querySelector('.indexHamburger').style.opacity = '1';

                  setTimeout(function(){
                      document.querySelector('.transitionp1').style.display = 'none';
                      document.querySelector('.transitionp2').style.display = 'none';
                      document.getElementById('sec1').style.display = 'none';
                  },600);
              },800);
          },200);

          setTimeout(function(){
              document.querySelector('.scrolltostart').style.transform = 'translateY(0)';
              document.querySelector('.scrolltostart').style.transitionDelay = '.5s';
              document.querySelector('.mission').style.transform = 'translateX(-63%)';
              document.querySelector('.vision').style.transform = 'translateX(-63%)';
              document.querySelector('.overview').style.transform = 'translateX(-63%)';
              setTimeout(function(){
                  document.querySelector('.section1').style.transform = 'translateY(100%)';
                  document.querySelector('.scrolltostart').style.display = 'block';
              },500);
          },1400); 
      }, false);
  }

}






































let sect = document.getElementById("sec");
let sect1 = document.getElementById("sec1");
let sect2 = document.getElementById("sec2");
let sect3 = document.getElementById("sec3");
let sect4 = document.getElementById("sec4");
let sect5 = document.getElementById("sec5");

sect.addEventListener('touchstart', handleTouchStart, false);        
sect.addEventListener('touchmove', handleTouchMove, false);

sect1.addEventListener('touchstart', handleTouchStart1, false);        
sect1.addEventListener('touchmove', handleTouchMove1, false);

sect2.addEventListener('touchstart', handleTouchStart2, false);        
sect2.addEventListener('touchmove', handleTouchMove2, false);

sect3.addEventListener('touchstart', handleTouchStart3, false);        
sect3.addEventListener('touchmove', handleTouchMove3, false);

sect4.addEventListener('touchstart', handleTouchStart4, false);        
sect4.addEventListener('touchmove', handleTouchMove4, false);

sect5.addEventListener('touchstart', handleTouchStart5, false);        
sect5.addEventListener('touchmove', handleTouchMove5, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.mission').style.transform = 'translateX(-110%)';
            document.querySelector('.vision').style.transform = 'translateX(-110%)';
            document.querySelector('.overview').style.transform = 'translateX(-110%)';
            setTimeout(function(){
                document.querySelector('.scrolltostart').style.transition = '.5s';
                document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                    document.querySelector('.section5').style.transform = 'translateY(100%)';

                    setTimeout(function(){
                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';
                        
                        document.querySelector('.pageIndication').style.display = 'block';

                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';

                        
                        
                        document.querySelector('.indicatorOn1').style.display = 'inline-block';

                        body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
                        document.getElementById('sec1').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.section1').style.display = 'block';
                        document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                        setTimeout(function(){
                            document.getElementById('sec').style.display = 'none';
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
                        document.querySelector('.section1').style.opacity = '1';
                        document.querySelector('.section1').style.transform = 'translateY(0)';

                        setTimeout(function(){
                            document.querySelector('.companydecriptionH').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionP').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionH').style.opacity = '1';
                            document.querySelector('.companydecriptionP').style.opacity = '1';
                        },700);
                    },1500);
                },200);
            },500); 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};










function handleTouchStart1(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove1(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

            document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';

            document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

            document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

            document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';

            document.querySelector('.companydecriptionH').style.opacity = '0';
            document.querySelector('.companydecriptionP').style.opacity = '0';

            document.querySelector('.companydecriptionH2').style.opacity = '0';
            document.querySelector('.companydecriptionP2').style.opacity = '0';

            document.querySelector('.companydecriptionH3').style.opacity = '0';
            document.querySelector('.companydecriptionP3').style.opacity = '0';

            document.querySelector('.companydecriptionH4').style.opacity = '0';
            document.querySelector('.companydecriptionP4').style.opacity = '0';

            document.querySelector('.companydecriptionH5').style.opacity = '0';
            document.querySelector('.companydecriptionP5').style.opacity = '0';


            document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH').style.opacity = '0';
            document.querySelector('.companydecriptionP').style.opacity = '0';

                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                        
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                    document.querySelector('.section5').style.transform = 'translateY(100%)';

                    document.querySelector('.section1').style.opacity = '1';
                    document.querySelector('.section2').style.opacity = '0';
                    document.querySelector('.section3').style.opacity = '0';
                    document.querySelector('.section4').style.opacity = '0';
                    document.querySelector('.section5').style.opacity = '0';

                    setTimeout(function(){
                        document.querySelector('.indicatorOn1').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';

                        document.querySelector('.pageIndication').style.display = 'block';

                        document.querySelector('.indicatorOn1').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';

                        
                        
                        document.querySelector('.indicatorOn2').style.display = 'inline-block';

                        document.getElementById('sec1').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtebg.jpg)';
                        document.getElementById('sec2').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
                        document.querySelector('.section2').style.opacity = '1';
                        document.querySelector('.section2').style.transform = 'translateY(0)';

                        setTimeout(function(){
                            document.querySelector('.companydecriptionH2').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionP2').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionH2').style.opacity = '1';
                            document.querySelector('.companydecriptionP2').style.opacity = '1';

                            document.querySelector('.mission').style.transform = 'translateX(-110%)';
                            document.querySelector('.vision').style.transform = 'translateX(-110%)';
                            document.querySelector('.overview').style.transform = 'translateX(-110%)';
                            document.querySelector('.scrolltostart').style.transition = '.5s';
                            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                        },700);
                    },1500);
                },200);
                setTimeout(function(){
                    // document.querySelector('.scrolltostart').style.display = 'none';
                },500);
        } else {
            /* right swipe */
            document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH').style.opacity = '0';
            document.querySelector('.companydecriptionP').style.opacity = '0';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                document.querySelector('.section1').style.transform = 'translateY(100%)';
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                setTimeout(function(){
                    document.querySelector('.pageIndication').style.display = 'none';
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';

                    
                    body.style.backgroundImage = 'url(photos/background.jpg)';
                    document.getElementById('sec').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'block';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                        document.getElementById('sec1').style.display = 'none';
                    },600);
                },800);
            },200);

            setTimeout(function(){
                document.querySelector('.mission').style.transform = 'translateX(-63%)';
                document.querySelector('.vision').style.transform = 'translateX(-63%)';
                document.querySelector('.overview').style.transform = 'translateX(-63%)';
                setTimeout(function(){
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.scrolltostart').style.display = 'block';
                    setTimeout(function(){
                        document.querySelector('.scrolltostart').style.transform = 'translateY(0)';
                    },100);
                },500);
            },1400); 
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



















function handleTouchStart2(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove2(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
                                document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
                                document.querySelector('.companydecriptionH2').style.opacity = '0';
                                document.querySelector('.companydecriptionP2').style.opacity = '0';
                                document.querySelector('.section3').style.transform = 'translateY(100%)';    
                                document.querySelector('.transitionp1').style.display = 'block';
                                    document.querySelector('.transitionp2').style.display = 'block';
                                    setTimeout(function(){
                                        document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                                        document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                                        document.querySelector('.section1').style.transform = 'translateY(100%)';
                                        document.querySelector('.section2').style.transform = 'translateY(100%)';
                                        document.querySelector('.section3').style.transform = 'translateY(100%)';
                                        document.querySelector('.section4').style.transform = 'translateY(100%)';
                                        document.querySelector('.section5').style.transform = 'translateY(100%)';

                                        document.querySelector('.section1').style.opacity = '0';
                                        document.querySelector('.section2').style.opacity = '0';
                                        document.querySelector('.section3').style.opacity = '0';
                                        document.querySelector('.section4').style.opacity = '0';
                                        document.querySelector('.section5').style.opacity = '0';

                                        setTimeout(function(){
                                            document.querySelector('.pageIndication').style.display = 'block';

                                            document.querySelector('.indicatorOn1').style.display = 'none';
                                            document.querySelector('.indicatorOn2').style.display = 'none';
                                            document.querySelector('.indicatorOn4').style.display = 'none';
                                            document.querySelector('.indicatorOn5').style.display = 'none';
                    
                                            
                                            
                                            document.querySelector('.indicatorOn3').style.display = 'inline-block';

                                            document.getElementById('sec2').style.display = 'none';
                                            body.style.backgroundImage = 'url(photos/gtdbg.jpg)';
                                            document.getElementById('sec3').style.display = 'block';
                                            document.querySelector('.caption1').style.display = 'none';
                                            document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                                            document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                                            setTimeout(function(){
                                                
                                                document.querySelector('.transitionp1').style.display = 'none';
                                                document.querySelector('.transitionp2').style.display = 'none';
                                            },600);
                                        },800);
                                        setTimeout(function(){
                                            document.querySelector('.section3').style.opacity = '1';
                                            document.querySelector('.section3').style.transform = 'translateY(0)';

                                            setTimeout(function(){
                                                document.querySelector('.companydecriptionH3').style.transform = 'translateY(0)';
                                                document.querySelector('.companydecriptionP3').style.transform = 'translateY(0)';
                                                document.querySelector('.companydecriptionH3').style.opacity = '1';
                                                document.querySelector('.companydecriptionP3').style.opacity = '1';

                                                document.querySelector('.mission').style.transform = 'translateX(-110%)';
                                                document.querySelector('.vision').style.transform = 'translateX(-110%)';
                                                document.querySelector('.overview').style.transform = 'translateX(-110%)';
                                                document.querySelector('.scrolltostart').style.transition = '.5s';
                                                document.querySelector('.scrolltostart').style.transform = 'translateY(110%)';
                                            },700);
                                        },1500);
                                    },200);
                                    setTimeout(function(){
                                        // document.querySelector('.scrolltostart').style.display = 'none';
                                    },500); 
        } else {
            /* right swipe */
            document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH2').style.opacity = '0';
            document.querySelector('.companydecriptionP2').style.opacity = '0';
            document.querySelector('.section1').style.transform = 'translateY(100%)';    
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
            document.querySelector('.transitionp1').style.transform = 'translateX(0)';
            document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
            document.querySelector('.section1').style.transform = 'translateY(100%)';
            document.querySelector('.section2').style.transform = 'translateY(100%)';
            document.querySelector('.section3').style.transform = 'translateY(100%)';
            document.querySelector('.section4').style.transform = 'translateY(100%)';
            document.querySelector('.section5').style.transform = 'translateY(100%)';

            document.querySelector('.section1').style.opacity = '0';
            document.querySelector('.section2').style.opacity = '0';
            document.querySelector('.section3').style.opacity = '0';
            document.querySelector('.section4').style.opacity = '0';
            document.querySelector('.section5').style.opacity = '0';

            setTimeout(function(){
            document.querySelector('.pageIndication').style.display = 'block';

            document.querySelector('.indicatorOn2').style.display = 'none';
            document.querySelector('.indicatorOn3').style.display = 'none';
            document.querySelector('.indicatorOn4').style.display = 'none';
            document.querySelector('.indicatorOn5').style.display = 'none';

            
            
            document.querySelector('.indicatorOn1').style.display = 'inline-block';

            document.getElementById('sec2').style.display = 'none';
            body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
            document.getElementById('sec1').style.display = 'block';
            document.querySelector('.caption1').style.display = 'none';
            document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
            document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
            setTimeout(function(){
                
                document.querySelector('.transitionp1').style.display = 'none';
                document.querySelector('.transitionp2').style.display = 'none';
            },600);
            },800);
            setTimeout(function(){
            document.querySelector('.section1').style.opacity = '1';
            document.querySelector('.section1').style.transform = 'translateY(0)';

            setTimeout(function(){
                document.querySelector('.companydecriptionH').style.transform = 'translateY(0)';
                document.querySelector('.companydecriptionP').style.transform = 'translateY(0)';
                document.querySelector('.companydecriptionH').style.opacity = '1';
                document.querySelector('.companydecriptionP').style.opacity = '1';
            },700);

            },1500);
            },200);
            setTimeout(function(){
            // document.querySelector('.scrolltostart').style.display = 'none';
            },500); 
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};










function handleTouchStart3(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove3(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
                            document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';
                            document.querySelector('.companydecriptionH3').style.opacity = '0';
                            document.querySelector('.companydecriptionP3').style.opacity = '0';
                            document.querySelector('.section4').style.transform = 'translateY(100%)';    
                            document.querySelector('.transitionp1').style.display = 'block';
                                document.querySelector('.transitionp2').style.display = 'block';
                                setTimeout(function(){
                                    document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                                    document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                                    document.querySelector('.section5').style.transform = 'translateY(100%)';

                                    document.querySelector('.section1').style.opacity = '0';
                                    document.querySelector('.section2').style.opacity = '0';
                                    document.querySelector('.section3').style.opacity = '0';
                                    document.querySelector('.section4').style.opacity = '0';
                                    document.querySelector('.section5').style.opacity = '0';

                                    setTimeout(function(){
                                        document.querySelector('.pageIndication').style.display = 'block';

                                        document.querySelector('.indicatorOn1').style.display = 'none';
                                        document.querySelector('.indicatorOn2').style.display = 'none';
                                        document.querySelector('.indicatorOn3').style.display = 'none';
                                        document.querySelector('.indicatorOn5').style.display = 'none';
                
                                        
                                        
                                        document.querySelector('.indicatorOn4').style.display = 'inline-block';

                                        document.getElementById('sec3').style.display = 'none';
                                        body.style.backgroundImage = 'url(photos/gtscbg.jpg)';
                                        document.getElementById('sec4').style.display = 'block';
                                        document.querySelector('.caption1').style.display = 'none';
                                        document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                                        document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                                        setTimeout(function(){
                                            
                                            document.querySelector('.transitionp1').style.display = 'none';
                                            document.querySelector('.transitionp2').style.display = 'none';
                                        },600);
                                    },800);
                                    setTimeout(function(){
                                        document.querySelector('.section4').style.opacity = '1';
                                        document.querySelector('.section4').style.transform = 'translateY(0)';

                                        setTimeout(function(){
                                            document.querySelector('.companydecriptionH4').style.transform = 'translateY(0)';
                                            document.querySelector('.companydecriptionP4').style.transform = 'translateY(0)';
                                            document.querySelector('.companydecriptionH4').style.opacity = '1';
                                            document.querySelector('.companydecriptionP4').style.opacity = '1';

                                            document.querySelector('.mission').style.transform = 'translateX(-110%)';
                                            document.querySelector('.vision').style.transform = 'translateX(-110%)';
                                            document.querySelector('.overview').style.transform = 'translateX(-110%)';
                                            document.querySelector('.scrolltostart').style.transition = '.5s';
                                            document.querySelector('.scrolltostart').style.transform = 'translateX(-110%)';
                                        },700);
                                    },1500);
                                },200);
                                setTimeout(function(){
                                    // document.querySelector('.scrolltostart').style.display = 'none';
                                },500);
        } else {
            /* right swipe */
            document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
                                document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';
                                document.querySelector('.companydecriptionH3').style.opacity = '0';
                                document.querySelector('.companydecriptionP3').style.opacity = '0';
                                document.querySelector('.section2').style.transform = 'translateY(100%)';    
                                document.querySelector('.transitionp1').style.display = 'block';
                                    document.querySelector('.transitionp2').style.display = 'block';
                                    setTimeout(function(){
                                        document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                                        document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                                        document.querySelector('.section1').style.transform = 'translateY(100%)';
                                        document.querySelector('.section2').style.transform = 'translateY(100%)';
                                        document.querySelector('.section3').style.transform = 'translateY(100%)';
                                        document.querySelector('.section4').style.transform = 'translateY(100%)';
                                        document.querySelector('.section5').style.transform = 'translateY(100%)';

                                        document.querySelector('.section1').style.opacity = '0';
                                        document.querySelector('.section2').style.opacity = '0';
                                        document.querySelector('.section3').style.opacity = '0';
                                        document.querySelector('.section4').style.opacity = '0';
                                        document.querySelector('.section5').style.opacity = '0';

                                        setTimeout(function(){
                                            document.querySelector('.pageIndication').style.display = 'block';

                                            document.querySelector('.indicatorOn1').style.display = 'none';
                                            document.querySelector('.indicatorOn3').style.display = 'none';
                                            document.querySelector('.indicatorOn4').style.display = 'none';
                                            document.querySelector('.indicatorOn5').style.display = 'none';
                    
                                            
                                            
                                            document.querySelector('.indicatorOn2').style.display = 'inline-block';

                                            document.getElementById('sec3').style.display = 'none';
                                            body.style.backgroundImage = 'url(photos/gtebg.jpg)';
                                            document.getElementById('sec2').style.display = 'block';
                                            document.querySelector('.caption1').style.display = 'none';
                                            document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                                            document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                                            setTimeout(function(){
                                                
                                                document.querySelector('.transitionp1').style.display = 'none';
                                                document.querySelector('.transitionp2').style.display = 'none';
                                            },600);
                                        },800);
                                        setTimeout(function(){
                                            document.querySelector('.section2').style.opacity = '1';
                                            document.querySelector('.section2').style.transform = 'translateY(0)';

                                            setTimeout(function(){
                                                document.querySelector('.companydecriptionH2').style.transform = 'translateY(0)';
                                                document.querySelector('.companydecriptionP2').style.transform = 'translateY(0)';
                                                document.querySelector('.companydecriptionH2').style.opacity = '1';
                                                document.querySelector('.companydecriptionP2').style.opacity = '1';
                                            },700);
                                        },1500);
                                    },200);
                                    setTimeout(function(){
                                        // document.querySelector('.scrolltostart').style.display = 'none';
                                    },500);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};















function handleTouchStart4(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove4(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
                        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';
                        document.querySelector('.companydecriptionH4').style.opacity = '0';
                        document.querySelector('.companydecriptionP4').style.opacity = '0';
                        document.querySelector('.section5').style.transform = 'translateY(100%)';
                            document.querySelector('.transitionp1').style.display = 'block';
                            document.querySelector('.transitionp2').style.display = 'block';
                            setTimeout(function(){
                                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                                document.querySelector('.section1').style.transform = 'translateY(100%)';
                                document.querySelector('.section2').style.transform = 'translateY(100%)';
                                document.querySelector('.section3').style.transform = 'translateY(100%)';
                                document.querySelector('.section4').style.transform = 'translateY(100%)';
                                document.querySelector('.section5').style.transform = 'translateY(100%)';

                                document.querySelector('.section1').style.opacity = '0';
                                document.querySelector('.section2').style.opacity = '0';
                                document.querySelector('.section3').style.opacity = '0';
                                document.querySelector('.section4').style.opacity = '0';
                                document.querySelector('.section5').style.opacity = '0';

                                setTimeout(function(){
                                    document.querySelector('.pageIndication').style.display = 'block';

                                    document.querySelector('.indicatorOn1').style.display = 'none';
                                    document.querySelector('.indicatorOn2').style.display = 'none';
                                    document.querySelector('.indicatorOn3').style.display = 'none';
                                    document.querySelector('.indicatorOn4').style.display = 'none';
            
                                    
                                    
                                    document.querySelector('.indicatorOn5').style.display = 'inline-block';

                                    document.getElementById('sec4').style.display = 'none';
                                    body.style.backgroundImage = 'url(photos/gttbg.jpg)';
                                    document.getElementById('sec5').style.display = 'block';
                                    document.querySelector('.caption1').style.display = 'none';
                                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                                    setTimeout(function(){
                                        
                                        document.querySelector('.transitionp1').style.display = 'none';
                                        document.querySelector('.transitionp2').style.display = 'none';
                                    },600);
                                },800);
                                setTimeout(function(){
                                    document.querySelector('.section5').style.opacity = '1';
                                    document.querySelector('.section5').style.transform = 'translateY(0)';

                                    setTimeout(function(){
                                        document.querySelector('.companydecriptionH5').style.transform = 'translateY(0)';
                                        document.querySelector('.companydecriptionP5').style.transform = 'translateY(0)';
                                        document.querySelector('.companydecriptionH5').style.opacity = '1';
                                        document.querySelector('.companydecriptionP5').style.opacity = '1';

                                        document.querySelector('.mission').style.transform = 'translateX(-110%)';
                                        document.querySelector('.vision').style.transform = 'translateX(-110%)';
                                        document.querySelector('.overview').style.transform = 'translateX(-110%)';
                                        document.querySelector('.scrolltostart').style.transition = '.5s';
                                        document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                                    },700);
                                },1500);
                            },200);
                            setTimeout(function(){
                                // document.querySelector('.scrolltostart').style.display = 'none';
                            },500);
        } else {
            /* right swipe */
            document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
                        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';
                        document.querySelector('.companydecriptionH4').style.opacity = '0';
                        document.querySelector('.companydecriptionP4').style.opacity = '0';
                        document.querySelector('.section3').style.transform = 'translateY(100%)';    
                        document.querySelector('.transitionp1').style.display = 'block';
                            document.querySelector('.transitionp2').style.display = 'block';
                            setTimeout(function(){
                                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                                document.querySelector('.section1').style.transform = 'translateY(100%)';
                                document.querySelector('.section2').style.transform = 'translateY(100%)';
                                document.querySelector('.section3').style.transform = 'translateY(100%)';
                                document.querySelector('.section4').style.transform = 'translateY(100%)';
                                document.querySelector('.section5').style.transform = 'translateY(100%)';

                                document.querySelector('.section1').style.opacity = '0';
                                document.querySelector('.section2').style.opacity = '0';
                                document.querySelector('.section3').style.opacity = '0';
                                document.querySelector('.section4').style.opacity = '0';
                                document.querySelector('.section5').style.opacity = '0';

                                setTimeout(function(){
                                    document.querySelector('.pageIndication').style.display = 'block';

                                    document.querySelector('.indicatorOn1').style.display = 'none';
                                    document.querySelector('.indicatorOn2').style.display = 'none';
                                    document.querySelector('.indicatorOn4').style.display = 'none';
                                    document.querySelector('.indicatorOn5').style.display = 'none';
            
                                    
                                    
                                    document.querySelector('.indicatorOn3').style.display = 'inline-block';

                                    document.getElementById('sec4').style.display = 'none';
                                    body.style.backgroundImage = 'url(photos/gtdbg.jpg)';
                                    document.getElementById('sec3').style.display = 'block';
                                    document.querySelector('.caption1').style.display = 'none';
                                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                                    setTimeout(function(){
                                        
                                        document.querySelector('.transitionp1').style.display = 'none';
                                        document.querySelector('.transitionp2').style.display = 'none';
                                    },600);
                                },800);
                                setTimeout(function(){
                                    document.querySelector('.section3').style.opacity = '1';
                                    document.querySelector('.section3').style.transform = 'translateY(0)';

                                    setTimeout(function(){
                                        document.querySelector('.companydecriptionH3').style.transform = 'translateY(0)';
                                        document.querySelector('.companydecriptionP3').style.transform = 'translateY(0)';
                                        document.querySelector('.companydecriptionH3').style.opacity = '1';
                                        document.querySelector('.companydecriptionP3').style.opacity = '1';
                                    },700);
                                },1500);
                            },200);
                            setTimeout(function(){
                                // document.querySelector('.scrolltostart').style.display = 'none';
                            },500);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};














function handleTouchStart5(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove5(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH5').style.opacity = '0';
            document.querySelector('.companydecriptionP5').style.opacity = '0';
            document.querySelector('.section5').style.transform = 'translateY(100%)';
                document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                    document.querySelector('.section5').style.transform = 'translateY(100%)';

                    document.querySelector('.section1').style.opacity = '0';
                    document.querySelector('.section2').style.opacity = '0';
                    document.querySelector('.section3').style.opacity = '0';
                    document.querySelector('.section4').style.opacity = '0';
                    document.querySelector('.section5').style.opacity = '0';

                    setTimeout(function(){
                        document.querySelector('.pageIndication').style.display = 'block';

                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';

                        
                        document.querySelector('.indicatorOn1').style.display = 'inline-block';

                        document.getElementById('sec5').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
                        document.getElementById('sec1').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
                        document.querySelector('.section1').style.opacity = '1';
                        document.querySelector('.section1').style.transform = 'translateY(0)';

                        setTimeout(function(){
                            document.querySelector('.companydecriptionH').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionP').style.transform = 'translateY(0)';
                            document.querySelector('.companydecriptionH').style.opacity = '1';
                            document.querySelector('.companydecriptionP').style.opacity = '1';

                            document.querySelector('.mission').style.transform = 'translateX(-110%)';
                            document.querySelector('.vision').style.transform = 'translateX(-110%)';
                            document.querySelector('.overview').style.transform = 'translateX(-110%)';
                            document.querySelector('.scrolltostart').style.transition = '.5s';
                            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                        },700);
                    },1500);
                },200);
                setTimeout(function(){
                    // document.querySelector('.scrolltostart').style.display = 'none';
                },500);    
        } else {
            /* right swipe */
            document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH5').style.opacity = '0';
            document.querySelector('.companydecriptionP5').style.opacity = '0';   
            document.querySelector('.section4').style.transform = 'translateY(100%)';    
            document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                    
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                    document.querySelector('.section5').style.transform = 'translateY(100%)';

                    document.querySelector('.section1').style.opacity = '0';
                    document.querySelector('.section2').style.opacity = '0';
                    document.querySelector('.section3').style.opacity = '0';
                    document.querySelector('.section4').style.opacity = '0';
                    document.querySelector('.section5').style.opacity = '0';

                    setTimeout(function(){
                        document.querySelector('.pageIndication').style.display = 'block';

                        document.querySelector('.indicatorOn1').style.display = 'none';
                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';

                        document.querySelector('.indicatorOn4').style.display = 'inline-block';

                        document.getElementById('sec5').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtscbg.jpg)';
                        document.getElementById('sec4').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
                        document.querySelector('.section4').style.opacity = '1';
                        document.querySelector('.section4').style.transform = 'translateY(0)';

                        document.querySelector('.companydecriptionH4').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP4').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH4').style.opacity = '1';
                        document.querySelector('.companydecriptionP4').style.opacity = '1';
                    },1500);
                },200);
                setTimeout(function(){
                    // document.querySelector('.scrolltostart').style.display = 'none';
                },500);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
































let mission = document.getElementById("mp1");
let vision = document.getElementById("vp1");
let overview = document.getElementById("op1");



mission.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {   
        // highlight the mouseover target
            document.querySelector('.mission').style.transform = 'translateX(-70%)';
            document.querySelector('.mission').style.background = '#0f9d58';
            document.querySelector('.mission').style.color = 'white';
            document.querySelector('.mission').style.borderRadius = '10px';
    
            document.getElementById("mp1").style.opacity = '0';
            document.querySelector('.mission').style.paddingLeft = '70vw';
            document.querySelector('.mission').style.height = '4vh';
            document.querySelector('.vision').style.transform = 'translateX(-70%)';
            document.querySelector('.overview').style.transform = 'translateX(-70%)';
    // reset the color after a short delay
        }
}, false);

vision.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {   
    // highlight the mouseover target
        document.querySelector('.vision').style.transform = 'translateX(-70%)';
        document.querySelector('.vision').style.background = '#0f9d58';
        document.querySelector('.vision').style.color = 'white';
        document.querySelector('.vision').style.borderRadius = '10px';

        document.getElementById("vp1").style.opacity = '0';
        document.querySelector('.vision').style.paddingLeft = '73vw';
        document.querySelector('.vision').style.height = '4vh';
        document.querySelector('.mission').style.transform = 'translateX(-70%)';
        document.querySelector('.overview').style.transform = 'translateX(-70%)';
    }
}, false);

overview.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {   
        // highlight the mouseover target
        document.querySelector('.overview').style.transform = 'translateX(-70%)';
        document.querySelector('.overview').style.background = '#0f9d58';
        document.querySelector('.overview').style.color = 'white';
        document.querySelector('.overview').style.borderRadius = '10px';

        document.getElementById("op1").style.opacity = '0';
        document.querySelector('.overview').style.paddingLeft = '65vw';
        document.querySelector('.overview').style.height = '4vh';
        document.querySelector('.mission').style.transform = 'translateX(-70%)';
        document.querySelector('.vision').style.transform = 'translateX(-70%)';
    }
}, false);















indicatorOn1.addEventListener("click", function( event ) {
    if(window.innerWidth < 500){
        document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH').style.opacity = '0';
        document.querySelector('.companydecriptionP').style.opacity = '0';

        document.querySelector('.companydecriptionH2').style.opacity = '0';
        document.querySelector('.companydecriptionP2').style.opacity = '0';

        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';

        document.querySelector('.companydecriptionH4').style.opacity = '0';
        document.querySelector('.companydecriptionP4').style.opacity = '0';

        document.querySelector('.companydecriptionH5').style.opacity = '0';
        document.querySelector('.companydecriptionP5').style.opacity = '0';

        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                document.querySelector('.section1').style.transform = 'translateY(100%)';    
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                document.getElementById('sec1').style.display = 'none';
                document.getElementById('sec2').style.display = 'none';
                document.getElementById('sec3').style.display = 'none';
                document.getElementById('sec4').style.display = 'none';
                document.getElementById('sec5').style.display = 'none';

                setTimeout(function(){
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn1').style.display = 'inline-block';
                    
                    body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
                    document.getElementById('sec1').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section1').style.opacity = '1';
                    document.querySelector('.section1').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH').style.opacity = '1';
                        document.querySelector('.companydecriptionP').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500);
    }
  }, false);





  indicatorOn2.addEventListener("click", function( event ) {
    if(window.innerWidth < 500){
        document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH').style.opacity = '0';
        document.querySelector('.companydecriptionP').style.opacity = '0';

        document.querySelector('.companydecriptionH2').style.opacity = '0';
        document.querySelector('.companydecriptionP2').style.opacity = '0';

        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';

        document.querySelector('.companydecriptionH4').style.opacity = '0';
        document.querySelector('.companydecriptionP4').style.opacity = '0';

        document.querySelector('.companydecriptionH5').style.opacity = '0';
        document.querySelector('.companydecriptionP5').style.opacity = '0';

        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                document.querySelector('.section1').style.transform = 'translateY(100%)';    
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                document.getElementById('sec1').style.display = 'none';
                document.getElementById('sec2').style.display = 'none';
                document.getElementById('sec3').style.display = 'none';
                document.getElementById('sec4').style.display = 'none';
                document.getElementById('sec5').style.display = 'none';

                setTimeout(function(){
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn2').style.display = 'inline-block';
                    
                    body.style.backgroundImage = 'url(photos/gtebg.jpg)';
                    document.getElementById('sec2').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec1').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section2').style.opacity = '1';
                    document.querySelector('.section2').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH2').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP2').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH2').style.opacity = '1';
                        document.querySelector('.companydecriptionP2').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500);
    }
  }, false);



indicatorOn3.addEventListener("click", function( event ) {
    if(window.innerWidth < 500){
        document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH').style.opacity = '0';
        document.querySelector('.companydecriptionP').style.opacity = '0';

        document.querySelector('.companydecriptionH2').style.opacity = '0';
        document.querySelector('.companydecriptionP2').style.opacity = '0';

        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';

        document.querySelector('.companydecriptionH4').style.opacity = '0';
        document.querySelector('.companydecriptionP4').style.opacity = '0';

        document.querySelector('.companydecriptionH5').style.opacity = '0';
        document.querySelector('.companydecriptionP5').style.opacity = '0';

        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                document.querySelector('.section1').style.transform = 'translateY(100%)';    
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                document.getElementById('sec1').style.display = 'none';
                document.getElementById('sec2').style.display = 'none';
                document.getElementById('sec3').style.display = 'none';
                document.getElementById('sec4').style.display = 'none';
                document.getElementById('sec5').style.display = 'none';

                setTimeout(function(){
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn3').style.display = 'inline-block';
                    
                    body.style.backgroundImage = 'url(photos/gtdbg.jpg)';
                    document.getElementById('sec3').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec2').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section3').style.opacity = '1';
                    document.querySelector('.section3').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH3').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP3').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH3').style.opacity = '1';
                        document.querySelector('.companydecriptionP3').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500);
    }   
}, false);

indicatorOn4.addEventListener("click", function( event ) {   
    if(window.innerWidth < 500){
        document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH').style.opacity = '0';
        document.querySelector('.companydecriptionP').style.opacity = '0';

        document.querySelector('.companydecriptionH2').style.opacity = '0';
        document.querySelector('.companydecriptionP2').style.opacity = '0';

        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';

        document.querySelector('.companydecriptionH4').style.opacity = '0';
        document.querySelector('.companydecriptionP4').style.opacity = '0';

        document.querySelector('.companydecriptionH5').style.opacity = '0';
        document.querySelector('.companydecriptionP5').style.opacity = '0';

        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                document.querySelector('.section1').style.transform = 'translateY(100%)';    
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                document.getElementById('sec1').style.display = 'none';
                document.getElementById('sec2').style.display = 'none';
                document.getElementById('sec3').style.display = 'none';
                document.getElementById('sec4').style.display = 'none';
                document.getElementById('sec5').style.display = 'none';

                setTimeout(function(){
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn4').style.display = 'inline-block';
                    
                    body.style.backgroundImage = 'url(photos/gtscbg.jpg)';
                    document.getElementById('sec4').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec3').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section4').style.opacity = '1';
                    document.querySelector('.section4').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH4').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP4').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH4').style.opacity = '1';
                        document.querySelector('.companydecriptionP4').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500);   
        }
}, false);

indicatorOn5.addEventListener("click", function( event ) {
    if(window.innerWidth < 500){
        document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';

        document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
        
        document.querySelector('.companydecriptionH').style.opacity = '0';
        document.querySelector('.companydecriptionP').style.opacity = '0';

        document.querySelector('.companydecriptionH2').style.opacity = '0';
        document.querySelector('.companydecriptionP2').style.opacity = '0';

        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';

        document.querySelector('.companydecriptionH4').style.opacity = '0';
        document.querySelector('.companydecriptionP4').style.opacity = '0';

        document.querySelector('.companydecriptionH5').style.opacity = '0';
        document.querySelector('.companydecriptionP5').style.opacity = '0';

        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateX(0)';
                document.querySelector('.transitionp2').style.transform = 'translateX(0)';

                document.querySelector('.section1').style.transform = 'translateY(100%)';    
                document.querySelector('.section2').style.transform = 'translateY(100%)';
                document.querySelector('.section3').style.transform = 'translateY(100%)';
                document.querySelector('.section4').style.transform = 'translateY(100%)';
                document.querySelector('.section5').style.transform = 'translateY(100%)';

                document.querySelector('.section1').style.opacity = '0';
                document.querySelector('.section2').style.opacity = '0';
                document.querySelector('.section3').style.opacity = '0';
                document.querySelector('.section4').style.opacity = '0';
                document.querySelector('.section5').style.opacity = '0';

                document.getElementById('sec1').style.display = 'none';
                document.getElementById('sec2').style.display = 'none';
                document.getElementById('sec3').style.display = 'none';
                document.getElementById('sec4').style.display = 'none';
                document.getElementById('sec5').style.display = 'none';

                setTimeout(function(){
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn5').style.display = 'inline-block';
                    
                    body.style.backgroundImage = 'url(photos/gttbg.jpg)';
                    document.getElementById('sec5').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateX(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateX(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec4').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section5').style.opacity = '1';
                    document.querySelector('.section5').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH5').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP5').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH5').style.opacity = '1';
                        document.querySelector('.companydecriptionP5').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500); 
    }
    
}, false);










scrollclick.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {  
        document.querySelector('.mission').style.transform = 'translateX(-110%)';
        document.querySelector('.vision').style.transform = 'translateX(-110%)';
        document.querySelector('.overview').style.transform = 'translateX(-110%)';
        setTimeout(function(){
            document.querySelector('.scrolltostart').style.transition = '.5s';
            document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                setTimeout(function(){
                    document.querySelector('.indicatorOn2').style.display = 'none';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'none';
                    document.querySelector('.indicatorOn5').style.display = 'none';
                    
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn1').style.display = 'inline-block';

                    body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
                    document.getElementById('sec1').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                    setTimeout(function(){
                        document.getElementById('sec').style.display = 'none';
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
                    document.querySelector('.section1').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.companydecriptionH').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionP').style.transform = 'translateY(0)';
                        document.querySelector('.companydecriptionH').style.opacity = '1';
                        document.querySelector('.companydecriptionP').style.opacity = '1';
                    },700);
                },1500);
            },200);
        },500);
    }
}, false);
















// <---COMPANY PAGE SCRIPT--->



let cgtcMobile = document.getElementById("cgtcMobile");
let cgteMobile = document.getElementById("cgteMobile");
let cgtdMobile = document.getElementById("cgtdMobile");
let cgtscMobile = document.getElementById("cgtscMobile");
let cgttMobile = document.getElementById("cgttMobile");

let gtCorporationDesMobile = document.getElementById("gtCorporationDesMobile");
let gtCorporationImgMobile = document.getElementById("gtCorporationImgMobile");

let gEximDesMobile = document.getElementById("gEximDesMobile");
let gtEximImgMobile = document.getElementById("gtEximImgMobile");

let gtDesignDesMobile = document.getElementById("gtDesignDesMobile");
let gtDesignImgMobile = document.getElementById("gtDesignImgMobile");

let gtScDesMobile = document.getElementById("gtScDesMobile");
let gtScImgMobile = document.getElementById("gtScImgMobile");

let gtTransportDesMobile = document.getElementById("gtTransportDesMobile");
let gtTransportImgMobile = document.getElementById("gtTransportImgMobile");





gt1.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {
        document.querySelector('.indexHomePage').style.display = 'none';
        document.querySelector('.indexCompanyPage').style.display = 'none';
        document.querySelector('.indexCompanyPageMobile').style.display = 'block';

        gtCorporationDesMobile.style.display = 'none';
        gtCorporationImgMobile.style.display = 'none';
        gtCorporationImgMobile.style.transform = 'translateY(100%)';

        gtCorporationDesMobile.style.opacity = '0';
        gtCorporationImgMobile.style.opacity = '0';

        gtEximDesMobile.style.display = 'none';
        gtEximImgMobile.style.display = 'none';
        gtEximImgMobile.style.transform = 'translateY(100%)';

        gtEximDesMobile.style.opacity = '0';
        gtEximImgMobile.style.opacity = '0';
        
        gtDesignDesMobile.style.display = 'none';
        gtDesignImgMobile.style.display = 'none';
        gtDesignImgMobile.style.transform = 'translateY(100%)';
        
        gtDesignDesMobile.style.opacity = '0';
        gtDesignImgMobile.style.opacity = '0';

        gtScDesMobile.style.display = 'none';
        gtScImgMobile.style.display = 'none';
        gtScImgMobile.style.transform = 'translateY(100%)';

        gtScDesMobile.style.opacity = '0';
        gtScImgMobile.style.opacity = '0';

        gtTransportDesMobile.style.display = 'none';
        gtTransportImgMobile.style.display = 'none';
        gtTransportImgMobile.style.transform = 'translateY(100%)';

        gtTransportDesMobile.style.opacity = '0';
        gtTransportImgMobile.style.opacity = '0';

        document.getElementById('indicator1Mobile').style.opacity='1'; 
        document.getElementById('indicator2Mobile').style.opacity='0';
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';

        document.getElementById('cgtcMobile').style.color = '#0f9d58';
        document.getElementById('cgteMobile').style.color = 'black';
        document.getElementById('cgtdMobile').style.color = 'black';  
        document.getElementById('cgtscMobile').style.color = 'black';
        document.getElementById('cgttMobile').style.color = 'black';
        gtCorporationDesMobile.style.display = 'block';
        gtCorporationImgMobile.style.display = 'block';
        setTimeout(function(){

            gtCorporationImgMobile.style.transform = 'translateY(0)';
            gtCorporationDesMobile.style.opacity = '1';
            gtCorporationImgMobile.style.opacity = '1';
        },100);
    }
}, false);



gt2.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {
        document.querySelector('.indexHomePage').style.display = 'none';
        document.querySelector('.indexCompanyPage').style.display = 'none';
        document.querySelector('.indexCompanyPageMobile').style.display = 'block';

        gtCorporationDesMobile.style.display = 'none';
        gtCorporationImgMobile.style.display = 'none';
        gtCorporationImgMobile.style.transform = 'translateY(100%)';

        gtCorporationDesMobile.style.opacity = '0';
        gtCorporationImgMobile.style.opacity = '0';

        gtEximDesMobile.style.display = 'none';
        gtEximImgMobile.style.display = 'none';
        gtEximImgMobile.style.transform = 'translateY(100%)';

        gtEximDesMobile.style.opacity = '0';
        gtEximImgMobile.style.opacity = '0';
        
        gtDesignDesMobile.style.display = 'none';
        gtDesignImgMobile.style.display = 'none';
        gtDesignImgMobile.style.transform = 'translateY(100%)';
        
        gtDesignDesMobile.style.opacity = '0';
        gtDesignImgMobile.style.opacity = '0';

        gtScDesMobile.style.display = 'none';
        gtScImgMobile.style.display = 'none';
        gtScImgMobile.style.transform = 'translateY(100%)';

        gtScDesMobile.style.opacity = '0';
        gtScImgMobile.style.opacity = '0';

        gtTransportDeMobile.style.display = 'none';
        gtTransportImMobile.style.display = 'none';
        gtTransportImMobile.style.transform = 'translateY(100%)';

        gtTransportDesMobile.style.opacity = '0';
        gtTransportImgMobile.style.opacity = '0';

        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator2Mobile').style.opacity='1';
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';

        document.getElementById('cgtcMobile').style.color = 'black';
        document.getElementById('cgteMobile').style.color = '#0f9d58';
        document.getElementById('cgtdMobile').style.color = 'black';  
        document.getElementById('cgtscMobile').style.color = 'black';
        document.getElementById('cgttMobile').style.color = 'black';

        gtEximDesMobile.style.display = 'block';
        gtEximImgMobile.style.display = 'block';

        setTimeout(function(){
            gtEximImgMobile.style.transform = 'translateY(0)';
            gtEximDesMobile.style.opacity = '1';
            gtEximImgMobile.style.opacity = '1';
        },100); 
    } 
}, false);


gt3.addEventListener("click", function( event ) { 
    if (window.innerWidth < 500 ) {
        document.querySelector('.indexHomePage').style.display = 'none';
        document.querySelector('.indexCompanyPage').style.display = 'none';
        document.querySelector('.indexCompanyPageMobile').style.display = 'block';

        gtCorporationDesMobile.style.display = 'none';
        gtCorporationImgMobile.style.display = 'none';
        gtCorporationImgMobile.style.transform = 'translateY(100%)';

        gtCorporationDesMobile.style.opacity = '0';
        gtCorporationImgMobile.style.opacity = '0';

        gtEximDesMobile.style.display = 'none';
        gtEximImgMobile.style.display = 'none';
        gtEximImgMobile.style.transform = 'translateY(100%)';

        gtEximDesMobile.style.opacity = '0';
        gtEximImgMobile.style.opacity = '0';
        
        gtDesignDesMobile.style.display = 'none';
        gtDesignImgMobile.style.display = 'none';
        gtDesignImgMobile.style.transform = 'translateY(100%)';
        
        gtDesignDesMobile.style.opacity = '0';
        gtDesignImgMobile.style.opacity = '0';

        gtScDesMobile.style.display = 'none';
        gtScImgMobile.style.display = 'none';
        gtScImgMobile.style.transform = 'translateY(100%)';

        gtScDesMobile.style.opacity = '0';
        gtScImgMobile.style.opacity = '0';

        gtTransportDesMobile.style.display = 'none';
        gtTransportImgMobile.style.display = 'none';
        gtTransportImgMobile.style.transform = 'translateY(100%)';

        gtTransportDesMobile.style.opacity = '0';
        gtTransportImgMobile.style.opacity = '0';

    
        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator2Mobile').style.opacity='0';
        document.getElementById('indicator3Mobile').style.opacity='1';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';

        document.getElementById('cgtcMobile').style.color = 'black';
        document.getElementById('cgteMobile').style.color = 'black';
        document.getElementById('cgtdMobile').style.color = '#0f9d58';  
        document.getElementById('cgtscMobile').style.color = 'black';
        document.getElementById('cgttMobile').style.color = 'black';
        

        gtDesignDesMobile.style.display = 'block';
        gtDesignImgMobile.style.display = 'block';

        setTimeout(function(){
            gtDesignImgMobile.style.transform = 'translateY(0)';
            gtDesignDesMobile.style.opacity = '1';
            gtDesignImgMobile.style.opacity = '1';
        },100);  
    }
}, false);


gt4.addEventListener("click", function( event ) { 
    if (window.innerWidth < 500 ) {
        document.querySelector('.indexHomePage').style.display = 'none';
        document.querySelector('.indexCompanyPage').style.display = 'none';
        document.querySelector('.indexCompanyPageMobile').style.display = 'block';

        gtCorporationDesMobile.style.display = 'none';
        gtCorporationImgMobile.style.display = 'none';
        gtCorporationImgMobile.style.transform = 'translateY(100%)';

        gtCorporationDesMobile.style.opacity = '0';
        gtCorporationImgMobile.style.opacity = '0';

        gtEximDesMobile.style.display = 'none';
        gtEximImgMobile.style.display = 'none';
        gtEximImgMobile.style.transform = 'translateY(100%)';

        gtEximDesMobile.style.opacity = '0';
        gtEximImgMobile.style.opacity = '0';
        
        gtDesignDesMobile.style.display = 'none';
        gtDesignImgMobile.style.display = 'none';
        gtDesignImgMobile.style.transform = 'translateY(100%)';
        
        gtDesignDesMobile.style.opacity = '0';
        gtDesignImgMobile.style.opacity = '0';

        gtScDesMobile.style.display = 'none';
        gtScImgMobile.style.display = 'none';
        gtScImgMobile.style.transform = 'translateY(100%)';

        gtScDesMobile.style.opacity = '0';
        gtScImgMobile.style.opacity = '0';

        gtTransportDesMobile.style.display = 'none';
        gtTransportImgMobile.style.display = 'none';
        gtTransportImgMobile.style.transform = 'translateY(100%)';

        gtTransportDesMobile.style.opacity = '0';
        gtTransportImgMobile.style.opacity = '0';


        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator2Mobile').style.opacity='0';
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='1';
        document.getElementById('indicator5Mobile').style.opacity='0';

        document.getElementById('cgtcMobile').style.color = 'black';
        document.getElementById('cgteMobile').style.color = 'black';
        document.getElementById('cgtdMobile').style.color = 'black';  
        document.getElementById('cgtscMobile').style.color = '#0f9d58';
        document.getElementById('cgttMobile').style.color = 'black';
        
        gtScDesMobile.style.display = 'block';
        gtScImgMobile.style.display = 'block';

        setTimeout(function(){
            gtScImgMobile.style.transform = 'translateY(0)';
            gtScDesMobile.style.opacity = '1';
            gtScImgMobile.style.opacity = '1';
        },100);  
    }
}, false);


gt5.addEventListener("click", function( event ) {
    if (window.innerWidth < 500 ) {
        document.querySelector('.indexHomePage').style.display = 'none';
        document.querySelector('.indexCompanyPage').style.display = 'none';
        document.querySelector('.indexCompanyPageMobile').style.display = 'block';

        gtCorporationDesMobile.style.display = 'none';
        gtCorporationImgMobile.style.display = 'none';
        gtCorporationImgMobile.style.transform = 'translateY(100%)';

        gtCorporationDesMobile.style.opacity = '0';
        gtCorporationImgMobile.style.opacity = '0';

        gtEximDesMobile.style.display = 'none';
        gtEximImgMobile.style.display = 'none';
        gtEximImgMobile.style.transform = 'translateY(100%)';

        gtEximDesMobile.style.opacity = '0';
        gtEximImgMobile.style.opacity = '0';
        
        gtDesignDesMobile.style.display = 'none';
        gtDesignImgMobile.style.display = 'none';
        gtDesignImgMobile.style.transform = 'translateY(100%)';
        
        gtDesignDesMobile.style.opacity = '0';
        gtDesignImgMobile.style.opacity = '0';

        gtScDesMobile.style.display = 'none';
        gtScImgMobile.style.display = 'none';
        gtScImgMobile.style.transform = 'translateY(100%)';

        gtScDesMobile.style.opacity = '0';
        gtScImgMobile.style.opacity = '0';

        gtTransportDesMobile.style.display = 'none';
        gtTransportImgMobile.style.display = 'none';
        gtTransportImgMobile.style.transform = 'translateY(100%)';

        gtTransportDesMobile.style.opacity = '0';
        gtTransportImgMobile.style.opacity = '0';

    
        document.getElementById('indicator1Mobile').style.opacity='0';
        document.getElementById('indicator2Mobile').style.opacity='0';
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='1';

        document.getElementById('cgtcMobile').style.color = 'black';
        document.getElementById('cgteMobile').style.color = 'black';
        document.getElementById('cgtdMobile').style.color = 'black';  
        document.getElementById('cgtscMobile').style.color = 'black';
        document.getElementById('cgttMobile').style.color = '#0f9d58';   

        gtTransportDesMobile.style.display = 'block';
        gtTransportImgMobile.style.display = 'block';

        setTimeout(function(){
            gtTransportImgMobile.style.transform = 'translateY(0)';
            gtTransportDesMobile.style.opacity = '1';
            gtTransportImgMobile.style.opacity = '1';
        },100);   
    }
}, false);