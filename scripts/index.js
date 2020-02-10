$(function(){
    $(window).on('mousewheel DOMMouseScroll', function() {
        return false;
    });
    
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
    setTimeout(function(){
        document.querySelector('.heading1').style.transform = 'translateY(0)';
        document.querySelector('.paragraph1').style.transform = 'translateY(0)';
        document.querySelector('.heading1').style.opacity = '1';
        document.querySelector('.paragraph1').style.opacity = '1';
        document.querySelector('.scrolltostart').style.display = 'block';
        document.querySelector('.mvo').style.display = 'block';
        setTimeout(function(){
        document.querySelector('.scrolltostart').style.transform = 'translateY(0)';
        document.querySelector('.mission').style.transform = 'translateY(80%)';
        document.querySelector('.vision').style.transform = 'translateY(80%)';
        document.querySelector('.overview').style.transform = 'translateY(80%)';
        },500);
        setTimeout(function(){
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
            setTimeout(function(){
                document.querySelector('.section1').style.display = 'block';
                setTimeout(function(){
                    window.addEventListener('wheel', function(event){
                        if (event.deltaY < 0)
                            {   
                                document.querySelector('.mission').style.transform = 'translateY(80%)';
                                document.querySelector('.vision').style.transform = 'translateY(80%)';
                                document.querySelector('.overview').style.transform = 'translateY(80%)';
                                setTimeout(function(){
                                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                                    document.querySelector('.scrolltostart').style.display = 'block';
                                    setTimeout(function(){
                                        document.querySelector('.scrolltostart').style.transform = 'translateY(0)';
                                    },100);
                                },500);     
                            }
                        else if (event.deltaY > 0)
                            {
                                document.querySelector('.mission').style.transform = 'translateY(100%)';
                                document.querySelector('.vision').style.transform = 'translateY(100%)';
                                document.querySelector('.overview').style.transform = 'translateY(100%)';
                                setTimeout(function(){
                                    document.querySelector('.scrolltostart').style.transition = '.5s';
                                    document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                                    document.querySelector('.section1').style.transform = 'translateY(0)';
                                    setTimeout(function(){
                                        // document.querySelector('.scrolltostart').style.display = 'none';
                                    },500);
                                },500);
                                
                            }
                            else{
                                document.querySelector('.section1').style.transform = 'translateY(100%)';
                            }
                    });
                },100);
            },2000);
        },1000);
    },4100);		
});

let test1 = document.getElementById("m");
let test2 = document.getElementById("v");
let test3 = document.getElementById("o");
test1.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
    document.querySelector('.mission').style.transform = 'translateY(0)';
  // reset the color after a short delay
}, false);

test2.addEventListener("mouseover", function( event ) {   
// highlight the mouseover target
    document.querySelector('.vision').style.transform = 'translateY(0)';
}, false);

test3.addEventListener("mouseover", function( event ) {   
// highlight the mouseover target
    document.querySelector('.overview').style.transform = 'translateY(0)';
}, false);




test1.addEventListener("mouseout", function( event ) {   
// highlight the mouseover target
    document.querySelector('.mission').style.transform = 'translateY(80%)';
// reset the color after a short delay
}, false);

test2.addEventListener("mouseout", function( event ) {   
    // highlight the mouseover target
    document.querySelector('.vision').style.transform = 'translateY(80%)';
}, false);

test3.addEventListener("mouseout", function( event ) {   
    // highlight the mouseover target
    document.querySelector('.overview').style.transform = 'translateY(80%)';
}, false);