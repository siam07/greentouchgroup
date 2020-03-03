

let cgtcm = document.getElementById("chairMobile");
let cgtem = document.getElementById("mdMobile");
let cgtdm = document.getElementById("directorMobile");
let cgtscm = document.getElementById("directorFBAMobile");
let cgttm = document.getElementById("cooMobile");












$(function(){
    document.getElementById('indicator1Mobile').style.opacity='1';  
    document.getElementById('chairMobile').style.color = '#0f9d58';
    gtCorporationDes.style.display = 'block';
    gtCorporationImg.style.display = 'block';
    
    setTimeout(function(){


        gtCorporationDes.style.opacity = '1';

    },100); 
});


cgtcm.addEventListener("click", function( event ) {
    gtCorporationDes.style.opacity = '0';
    gtCorporationImg.style.transform = 'translateY(100%)';

    gtEximDes.style.opacity = '0';
    gtEximImg.style.transform = 'translateY(100%)';

    gtDesignDes.style.opacity = '0';
    gtDesignImg.style.transform = 'translateY(100%)';

    gtScDes.style.opacity = '0';
    gtScImg.style.transform = 'translateY(100%)';


    gtTransportDes.style.opacity = '0';
    gtTransportImg.style.transform = 'translateY(100%)';

    setTimeout(function(){
    
        $(document).ready(function () {
            window.scrollTo(0,0);
        });
    
        
        gtCorporationDes.style.display = 'none';
        gtCorporationImg.style.display = 'none';
        gtCorporationImg.style.transform = 'translateY(100%)';
    
        gtCorporationDes.style.opacity = '0';
        gtCorporationImg.style.opacity = '0';
    
        gtEximDes.style.display = 'none';
        gtEximImg.style.display = 'none';
        gtEximImg.style.transform = 'translateY(100%)';
    
        gtEximDes.style.opacity = '0';
        gtEximImg.style.opacity = '0';
        
        gtDesignDes.style.display = 'none';
        gtDesignImg.style.display = 'none';
        gtDesignImg.style.transform = 'translateY(100%)';
        
        gtDesignDes.style.opacity = '0';
        gtDesignImg.style.opacity = '0';
    
        gtScDes.style.display = 'none';
        gtScImg.style.display = 'none';
        gtScImg.style.transform = 'translateY(100%)';
    
        gtScDes.style.opacity = '0';
        gtScImg.style.opacity = '0';
    
        gtTransportDes.style.display = 'none';
        gtTransportImg.style.display = 'none';
        gtTransportImg.style.transform = 'translateY(100%)';
    
        gtTransportDes.style.opacity = '0';
        gtTransportImg.style.opacity = '0';
    

        document.getElementById('indicator1Mobile').style.opacity='1'; 
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';
        document.getElementById('indicator6Mobile').style.opacity='0';
    
        document.getElementById('chairMobile').style.color = '#0f9d58';
        document.getElementById('mdMobile').style.color = 'black';
        document.getElementById('directorMobile').style.color = 'black';  
        document.getElementById('directorFBAMobile').style.color = 'black';
        document.getElementById('cooMobile').style.color = 'black';
    
        gtCorporationDes.style.display = 'block';
        gtCorporationImg.style.display = 'block';
    
        setTimeout(function(){
            gtCorporationImg.style.display = 'block';
            gtCorporationImg.style.transform = 'translateY(0)';
            gtCorporationDes.style.opacity = '1';
            gtCorporationImg.style.opacity = '1';
        },100);  
    },200);
});

cgtem.addEventListener("click", function( event ) {
    gtCorporationDes.style.opacity = '0';
    gtCorporationImg.style.transform = 'translateY(100%)';

    gtEximDes.style.opacity = '0';
    gtEximImg.style.transform = 'translateY(100%)';

    gtDesignDes.style.opacity = '0';
    gtDesignImg.style.transform = 'translateY(100%)';

    gtScDes.style.opacity = '0';
    gtScImg.style.transform = 'translateY(100%)';


    gtTransportDes.style.opacity = '0';
    gtTransportImg.style.transform = 'translateY(100%)';

    setTimeout(function(){
    
        $(document).ready(function () {
            window.scrollTo(0,0);
        });
    
        
        gtCorporationDes.style.display = 'none';
        gtCorporationImg.style.display = 'none';
        gtCorporationImg.style.transform = 'translateY(100%)';
    
        gtCorporationDes.style.opacity = '0';
        gtCorporationImg.style.opacity = '0';
    
        gtEximDes.style.display = 'none';
        gtEximImg.style.display = 'none';
        gtEximImg.style.transform = 'translateY(100%)';
    
        gtEximDes.style.opacity = '0';
        gtEximImg.style.opacity = '0';
        
        gtDesignDes.style.display = 'none';
        gtDesignImg.style.display = 'none';
        gtDesignImg.style.transform = 'translateY(100%)';
        
        gtDesignDes.style.opacity = '0';
        gtDesignImg.style.opacity = '0';
    
        gtScDes.style.display = 'none';
        gtScImg.style.display = 'none';
        gtScImg.style.transform = 'translateY(100%)';
    
        gtScDes.style.opacity = '0';
        gtScImg.style.opacity = '0';
    
        gtTransportDes.style.display = 'none';
        gtTransportImg.style.display = 'none';
        gtTransportImg.style.transform = 'translateY(100%)';
    
        gtTransportDes.style.opacity = '0';
        gtTransportImg.style.opacity = '0';
    

        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator3Mobile').style.opacity='1';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';
        document.getElementById('indicator6Mobile').style.opacity='0';
    
        document.getElementById('chairMobile').style.color = 'black';
        document.getElementById('mdMobile').style.color = '#0f9d58';
        document.getElementById('directorMobile').style.color = 'black';  
        document.getElementById('directorFBAMobile').style.color = 'black';
        document.getElementById('cooMobile').style.color = 'black';
    
        gtEximDes.style.display = 'block';
        gtEximImg.style.display = 'block';
    
        setTimeout(function(){
            gtEximImg.style.display = 'block';
            gtEximImg.style.transform = 'translateY(0)';
            gtEximDes.style.opacity = '1';
            gtEximImg.style.opacity = '1';
        },100);  
    },200);
});

cgtdm.addEventListener("click", function( event ) {
    gtCorporationDes.style.opacity = '0';
    gtCorporationImg.style.transform = 'translateY(100%)';

    gtEximDes.style.opacity = '0';
    gtEximImg.style.transform = 'translateY(100%)';

    gtDesignDes.style.opacity = '0';
    gtDesignImg.style.transform = 'translateY(100%)';

    gtScDes.style.opacity = '0';
    gtScImg.style.transform = 'translateY(100%)';


    gtTransportDes.style.opacity = '0';
    gtTransportImg.style.transform = 'translateY(100%)';

    setTimeout(function(){
    
        $(document).ready(function () {
            window.scrollTo(0,0);
        });
    
        
        gtCorporationDes.style.display = 'none';
        gtCorporationImg.style.display = 'none';
        gtCorporationImg.style.transform = 'translateY(100%)';
    
        gtCorporationDes.style.opacity = '0';
        gtCorporationImg.style.opacity = '0';
    
        gtEximDes.style.display = 'none';
        gtEximImg.style.display = 'none';
        gtEximImg.style.transform = 'translateY(100%)';
    
        gtEximDes.style.opacity = '0';
        gtEximImg.style.opacity = '0';
        
        gtDesignDes.style.display = 'none';
        gtDesignImg.style.display = 'none';
        gtDesignImg.style.transform = 'translateY(100%)';
        
        gtDesignDes.style.opacity = '0';
        gtDesignImg.style.opacity = '0';
    
        gtScDes.style.display = 'none';
        gtScImg.style.display = 'none';
        gtScImg.style.transform = 'translateY(100%)';
    
        gtScDes.style.opacity = '0';
        gtScImg.style.opacity = '0';
    
        gtTransportDes.style.display = 'none';
        gtTransportImg.style.display = 'none';
        gtTransportImg.style.transform = 'translateY(100%)';
    
        gtTransportDes.style.opacity = '0';
        gtTransportImg.style.opacity = '0';
    

        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='1';
        document.getElementById('indicator5Mobile').style.opacity='0';
        document.getElementById('indicator6Mobile').style.opacity='0';
    
        document.getElementById('chairMobile').style.color = 'black';
        document.getElementById('mdMobile').style.color = 'black';
        document.getElementById('directorMobile').style.color = '#0f9d58';  
        document.getElementById('directorFBAMobile').style.color = 'black';
        document.getElementById('cooMobile').style.color = 'black';
    
        gtDesignDes.style.display = 'block';
        gtDesignImg.style.display = 'block';
    
        setTimeout(function(){
            gtDesignImg.style.display = 'block';
            gtDesignImg.style.transform = 'translateY(0)';
            gtDesignDes.style.opacity = '1';
            gtDesignImg.style.opacity = '1';
        },100);  
    },200);   
});

cgtscm.addEventListener("click", function( event ) {
    gtCorporationDes.style.opacity = '0';
    gtCorporationImg.style.transform = 'translateY(100%)';

    gtEximDes.style.opacity = '0';
    gtEximImg.style.transform = 'translateY(100%)';

    gtDesignDes.style.opacity = '0';
    gtDesignImg.style.transform = 'translateY(100%)';

    gtScDes.style.opacity = '0';
    gtScImg.style.transform = 'translateY(100%)';


    gtTransportDes.style.opacity = '0';
    gtTransportImg.style.transform = 'translateY(100%)';


    setTimeout(function(){
    
        $(document).ready(function () {
            window.scrollTo(0,0);
        });
    
        
        gtCorporationDes.style.display = 'none';
        gtCorporationImg.style.display = 'none';
        gtCorporationImg.style.transform = 'translateY(100%)';
    
        gtCorporationDes.style.opacity = '0';
        gtCorporationImg.style.opacity = '0';
    
        gtEximDes.style.display = 'none';
        gtEximImg.style.display = 'none';
        gtEximImg.style.transform = 'translateY(100%)';
    
        gtEximDes.style.opacity = '0';
        gtEximImg.style.opacity = '0';
        
        gtDesignDes.style.display = 'none';
        gtDesignImg.style.display = 'none';
        gtDesignImg.style.transform = 'translateY(100%)';
        
        gtDesignDes.style.opacity = '0';
        gtDesignImg.style.opacity = '0';
    
        gtScDes.style.display = 'none';
        gtScImg.style.display = 'none';
        gtScImg.style.transform = 'translateY(100%)';
    
        gtScDes.style.opacity = '0';
        gtScImg.style.opacity = '0';
    
        gtTransportDes.style.display = 'none';
        gtTransportImg.style.display = 'none';
        gtTransportImg.style.transform = 'translateY(100%)';
    
        gtTransportDes.style.opacity = '0';
        gtTransportImg.style.opacity = '0';
    

        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='1';
        document.getElementById('indicator6Mobile').style.opacity='0';
    
        document.getElementById('chairMobile').style.color = 'black';
        document.getElementById('mdMobile').style.color = 'black';
        document.getElementById('directorMobile').style.color = 'black';  
        document.getElementById('directorFBAMobile').style.color = '#0f9d58';
        document.getElementById('cooMobile').style.color = 'black';
    
        gtScDes.style.display = 'block';
        gtScImg.style.display = 'block';
    
        setTimeout(function(){
            gtScImg.style.display = 'block';
            gtScImg.style.transform = 'translateY(0)';
            gtScDes.style.opacity = '1';
            gtScImg.style.opacity = '1';
        },100);  
    },200);

    
});

cgttm.addEventListener("click", function( event ) {
    gtCorporationDes.style.opacity = '0';
    gtCorporationImg.style.transform = 'translateY(100%)';

    gtEximDes.style.opacity = '0';
    gtEximImg.style.transform = 'translateY(100%)';

    gtDesignDes.style.opacity = '0';
    gtDesignImg.style.transform = 'translateY(100%)';

    gtScDes.style.opacity = '0';
    gtScImg.style.transform = 'translateY(100%)';


    gtTransportDes.style.opacity = '0';
    gtTransportImg.style.transform = 'translateY(100%)';

    setTimeout(function(){
    
        $(document).ready(function () {
            window.scrollTo(0,0);
        });
    
        
        gtCorporationDes.style.display = 'none';
        gtCorporationImg.style.display = 'none';
        gtCorporationImg.style.transform = 'translateY(100%)';
    
        gtCorporationDes.style.opacity = '0';
        gtCorporationImg.style.opacity = '0';
    
        gtEximDes.style.display = 'none';
        gtEximImg.style.display = 'none';
        gtEximImg.style.transform = 'translateY(100%)';
    
        gtEximDes.style.opacity = '0';
        gtEximImg.style.opacity = '0';
        
        gtDesignDes.style.display = 'none';
        gtDesignImg.style.display = 'none';
        gtDesignImg.style.transform = 'translateY(100%)';
        
        gtDesignDes.style.opacity = '0';
        gtDesignImg.style.opacity = '0';
    
        gtScDes.style.display = 'none';
        gtScImg.style.display = 'none';
        gtScImg.style.transform = 'translateY(100%)';
    
        gtScDes.style.opacity = '0';
        gtScImg.style.opacity = '0';
    
        gtTransportDes.style.display = 'none';
        gtTransportImg.style.display = 'none';
        gtTransportImg.style.transform = 'translateY(100%)';
    
        gtTransportDes.style.opacity = '0';
        gtTransportImg.style.opacity = '0';
    

        document.getElementById('indicator1Mobile').style.opacity='0'; 
        document.getElementById('indicator3Mobile').style.opacity='0';
        document.getElementById('indicator4Mobile').style.opacity='0';
        document.getElementById('indicator5Mobile').style.opacity='0';
        document.getElementById('indicator6Mobile').style.opacity='1';
    
        document.getElementById('chairMobile').style.color = 'black';
        document.getElementById('mdMobile').style.color = 'black';
        document.getElementById('directorMobile').style.color = 'black';  
        document.getElementById('directorFBAMobile').style.color = 'black';
        document.getElementById('cooMobile').style.color = '#0f9d58';
    
        gtTransportDes.style.display = 'block';
        gtTransportImg.style.display = 'block';
    
        setTimeout(function(){
            gtTransportImg.style.display = 'block';
            gtTransportImg.style.transform = 'translateY(0)';
            gtTransportDes.style.opacity = '1';
            gtTransportImg.style.opacity = '1';
        },100);  
    },200);

    
});












let sect = document.getElementById("gtCorporationDes");
let sect1 = document.getElementById("gtEximDes");
let sect2 = document.getElementById("gtDesignDes");
let sect3 = document.getElementById("gtScDes");
let sect4 = document.getElementById("gtTransportDes");




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
            gtCorporationDes.style.opacity = '0';
            gtCorporationImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='1';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = '#0f9d58';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtEximDes.style.display = 'block';
                gtEximImg.style.display = 'block';
            
                setTimeout(function(){
                    gtEximImg.style.display = 'block';
                    gtEximImg.style.transform = 'translateY(0)';
                    gtEximDes.style.opacity = '1';
                    gtEximImg.style.opacity = '1';
                },100);  
            },200);
        
        } 
        
        
        
        
        
        else {
            /* right swipe */            
            gtCorporationDes.style.opacity = '0';
            gtCorporationImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='1';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = '#0f9d58';
            
                gtTransportDes.style.display = 'block';
                gtTransportImg.style.display = 'block';
            
                setTimeout(function(){
                    gtTransportImg.style.display = 'block';
                    gtTransportImg.style.transform = 'translateY(0)';
                    gtTransportDes.style.opacity = '1';
                    gtTransportImg.style.opacity = '1';
                },100);  
            },200);
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
            gtEximDes.style.opacity = '0';
            gtEximImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='1';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = '#0f9d58';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtDesignDes.style.display = 'block';
                gtDesignImg.style.display = 'block';
            
                setTimeout(function(){
                    gtDesignImg.style.display = 'block';
                    gtDesignImg.style.transform = 'translateY(0)';
                    gtDesignDes.style.opacity = '1';
                    gtDesignImg.style.opacity = '1';
                },100);  
            },200);
        
        } 
        
        
        
        
        
        else {
            /* right swipe */            
            gtEximDes.style.opacity = '0';
            gtEximImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='1'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = '#0f9d58';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtCorporationDes.style.display = 'block';
                gtCorporationImg.style.display = 'block';
            
                setTimeout(function(){
                    gtCorporationImg.style.display = 'block';
                    gtCorporationImg.style.transform = 'translateY(0)';
                    gtCorporationDes.style.opacity = '1';
                    gtCorporationImg.style.opacity = '1';
                },100);  
            },200);
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
            gtDesignDes.style.opacity = '0';
            gtDesignImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='1';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = '#0f9d58';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtScDes.style.display = 'block';
                gtScImg.style.display = 'block';
            
                setTimeout(function(){
                    gtScImg.style.display = 'block';
                    gtScImg.style.transform = 'translateY(0)';
                    gtScDes.style.opacity = '1';
                    gtScImg.style.opacity = '1';
                },100);  
            },200);
        
        } 
        
        
        
        
        
        else {
            /* right swipe */            
            gtDesignDes.style.opacity = '0';
            gtDesignImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='1';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = '#0f9d58';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtEximDes.style.display = 'block';
                gtEximImg.style.display = 'block';
            
                setTimeout(function(){
                    gtEximImg.style.display = 'block';
                    gtEximImg.style.transform = 'translateY(0)';
                    gtEximDes.style.opacity = '1';
                    gtEximImg.style.opacity = '1';
                },100);  
            },200);
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
            gtScDes.style.opacity = '0';
            gtScImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='1';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = '#0f9d58';
            
                gtTransportDes.style.display = 'block';
                gtTransportImg.style.display = 'block';
            
                setTimeout(function(){
                    gtTransportImg.style.display = 'block';
                    gtTransportImg.style.transform = 'translateY(0)';
                    gtTransportDes.style.opacity = '1';
                    gtTransportImg.style.opacity = '1';
                },100);  
            },200);
        
        } 
        
        
        
        
        
        else {
            /* right swipe */            
            gtScDes.style.opacity = '0';
            gtScImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='1';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = '#0f9d58';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'blacks';
            
                gtDesignDes.style.display = 'block';
                gtDesignImg.style.display = 'block';
            
                setTimeout(function(){
                    gtDesignImg.style.display = 'block';
                    gtDesignImg.style.transform = 'translateY(0)';
                    gtDesignDes.style.opacity = '1';
                    gtDesignImg.style.opacity = '1';
                },100);  
            },200);
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
            gtTransportDes.style.opacity = '0';
            gtTransportImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='1'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = '#0f9d58';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtCorporationDes.style.display = 'block';
                gtCorporationImg.style.display = 'block';
            
                setTimeout(function(){
                    gtCorporationImg.style.display = 'block';
                    gtCorporationImg.style.transform = 'translateY(0)';
                    gtCorporationDes.style.opacity = '1';
                    gtCorporationImg.style.opacity = '1';
                },100);  
            },200);
        
        } 
        
        
        
        
        
        else {
            /* right swipe */            
            gtTransportDes.style.opacity = '0';
            gtTransportImg.style.transform = 'translateY(100%)';
        
            setTimeout(function(){
    
                $(document).ready(function () {
                    window.scrollTo(0,0);
                });
            
                
                gtCorporationDes.style.display = 'none';
                gtCorporationImg.style.display = 'none';
                gtCorporationImg.style.transform = 'translateY(100%)';
            
                gtCorporationDes.style.opacity = '0';
                gtCorporationImg.style.opacity = '0';
            
                gtEximDes.style.display = 'none';
                gtEximImg.style.display = 'none';
                gtEximImg.style.transform = 'translateY(100%)';
            
                gtEximDes.style.opacity = '0';
                gtEximImg.style.opacity = '0';
                
                gtDesignDes.style.display = 'none';
                gtDesignImg.style.display = 'none';
                gtDesignImg.style.transform = 'translateY(100%)';
                
                gtDesignDes.style.opacity = '0';
                gtDesignImg.style.opacity = '0';
            
                gtScDes.style.display = 'none';
                gtScImg.style.display = 'none';
                gtScImg.style.transform = 'translateY(100%)';
            
                gtScDes.style.opacity = '0';
                gtScImg.style.opacity = '0';
            
                gtTransportDes.style.display = 'none';
                gtTransportImg.style.display = 'none';
                gtTransportImg.style.transform = 'translateY(100%)';
            
                gtTransportDes.style.opacity = '0';
                gtTransportImg.style.opacity = '0';
            

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='1';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = '#0f9d58';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtScDes.style.display = 'block';
                gtScImg.style.display = 'block';
            
                setTimeout(function(){
                    gtScImg.style.display = 'block';
                    gtScImg.style.transform = 'translateY(0)';
                    gtScDes.style.opacity = '1';
                    gtScImg.style.opacity = '1';
                },100);  
            },200);
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
















 