$(function(){
    document.querySelector('.mvo').style.display = 'none';
    document.querySelector('.section1').style.display = 'none';

    sec.addEventListener('swiped-down', function(e) {
        if (event.deltaY > 0)
        {   
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
});




sec1.addEventListener('swiped-down', function(e) {
    if (event.deltaY < 0)
        {   
            
            document.querySelector('.companydecriptionH').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH').style.opacity = '0';
            document.querySelector('.companydecriptionP').style.opacity = '0';
            document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                document.querySelector('.transitionp2').style.transform = 'translateY(0)';
                document.querySelector('.section1').style.transform = 'translateY(100%)';
                setTimeout(function(){
                    document.querySelector('.pageIndication').style.display = 'none';
                    document.querySelector('.indicatorOn1').style.display = 'none';
                    body.style.backgroundImage = 'url(photos/background.jpg)';
                    document.getElementById('sec').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'block';
                    document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
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


        if (event.deltaY > 0)
        {   
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
                    document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(0)';
        
                        
                    document.querySelector('.section1').style.transform = 'translateY(100%)';
                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                    document.querySelector('.section3').style.transform = 'translateY(100%)';
                    document.querySelector('.section4').style.transform = 'translateY(100%)';
                    document.querySelector('.section5').style.transform = 'translateY(100%)';
        
                    setTimeout(function(){
                        document.querySelector('.indicatorOn1').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn4').style.display = 'none';
                        document.querySelector('.indicatorOn5').style.display = 'none';
        
                        document.querySelector('.pageIndication').style.display = 'block';
                        document.querySelector('.indicatorOn1').style.display = 'none';
                        document.querySelector('.indicatorOn2').style.display = 'inline-block';
        
                        document.getElementById('sec1').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtebg.jpg)';
                        document.getElementById('sec2').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
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
            
        }
});




sec2.addEventListener('wheel', function(event){
    console.log(event.deltaY);
    if (event.deltaY < 0)
        {   
            document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH2').style.opacity = '0';
            document.querySelector('.companydecriptionP2').style.opacity = '0';
            document.querySelector('.section1').style.transform = 'translateY(100%)';    
            document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.pageIndication').style.display = 'block';
                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn1').style.display = 'inline-block';

                        document.getElementById('sec2').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
                        document.getElementById('sec1').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                        setTimeout(function(){
                            
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
                setTimeout(function(){
                    // document.querySelector('.scrolltostart').style.display = 'none';
                },500); 
        }


        if (event.deltaY > 0)
        {
            document.querySelector('.companydecriptionH2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP2').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH2').style.opacity = '0';
            document.querySelector('.companydecriptionP2').style.opacity = '0';
            document.querySelector('.section3').style.transform = 'translateY(100%)';    
            document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.pageIndication').style.display = 'block';
                        document.querySelector('.indicatorOn2').style.display = 'none';
                        document.querySelector('.indicatorOn3').style.display = 'inline-block';

                        document.getElementById('sec2').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtdbg.jpg)';
                        document.getElementById('sec3').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
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
            
        }
});




sec3.addEventListener('wheel', function(event){
    if (event.deltaY < 0)
        {   
            document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';
            document.querySelector('.companydecriptionH3').style.opacity = '0';
            document.querySelector('.companydecriptionP3').style.opacity = '0';
            document.querySelector('.section2').style.transform = 'translateY(100%)';    
            document.querySelector('.transitionp1').style.display = 'block';
                document.querySelector('.transitionp2').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                    setTimeout(function(){
                        document.querySelector('.pageIndication').style.display = 'block';
                        document.querySelector('.indicatorOn3').style.display = 'none';
                        document.querySelector('.indicatorOn2').style.display = 'inline-block';

                        document.getElementById('sec3').style.display = 'none';
                        body.style.backgroundImage = 'url(photos/gtebg.jpg)';
                        document.getElementById('sec2').style.display = 'block';
                        document.querySelector('.caption1').style.display = 'none';
                        document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                        document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                        setTimeout(function(){
                            
                            document.querySelector('.transitionp1').style.display = 'none';
                            document.querySelector('.transitionp2').style.display = 'none';
                        },600);
                    },800);
                    setTimeout(function(){
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


    if (event.deltaY > 0)
    {
        document.querySelector('.companydecriptionH3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionP3').style.transform = 'translateY(100%)';
        document.querySelector('.companydecriptionH3').style.opacity = '0';
        document.querySelector('.companydecriptionP3').style.opacity = '0';
        document.querySelector('.section4').style.transform = 'translateY(100%)';    
        document.querySelector('.transitionp1').style.display = 'block';
            document.querySelector('.transitionp2').style.display = 'block';
            setTimeout(function(){
                document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                setTimeout(function(){
                    document.querySelector('.pageIndication').style.display = 'block';
                    document.querySelector('.indicatorOn3').style.display = 'none';
                    document.querySelector('.indicatorOn4').style.display = 'inline-block';

                    document.getElementById('sec3').style.display = 'none';
                    body.style.backgroundImage = 'url(photos/gtscbg.jpg)';
                    document.getElementById('sec4').style.display = 'block';
                    document.querySelector('.caption1').style.display = 'none';
                    document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                    document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                    setTimeout(function(){
                        
                        document.querySelector('.transitionp1').style.display = 'none';
                        document.querySelector('.transitionp2').style.display = 'none';
                    },600);
                },800);
                setTimeout(function(){
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
        
    }
});


sec4.addEventListener('wheel', function(event){

if (event.deltaY < 0)
{   
    document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
    document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';
    document.querySelector('.companydecriptionH4').style.opacity = '0';
    document.querySelector('.companydecriptionP4').style.opacity = '0';
    document.querySelector('.section3').style.transform = 'translateY(100%)';    
    document.querySelector('.transitionp1').style.display = 'block';
        document.querySelector('.transitionp2').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.transitionp1').style.transform = 'translateY(0)';
            document.querySelector('.transitionp2').style.transform = 'translateY(0)';

            setTimeout(function(){
                document.querySelector('.pageIndication').style.display = 'block';
                document.querySelector('.indicatorOn4').style.display = 'none';
                document.querySelector('.indicatorOn3').style.display = 'inline-block';

                document.getElementById('sec4').style.display = 'none';
                body.style.backgroundImage = 'url(photos/gtdbg.jpg)';
                document.getElementById('sec3').style.display = 'block';
                document.querySelector('.caption1').style.display = 'none';
                document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                setTimeout(function(){
                    
                    document.querySelector('.transitionp1').style.display = 'none';
                    document.querySelector('.transitionp2').style.display = 'none';
                },600);
            },800);
            setTimeout(function(){
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

if (event.deltaY > 0)
{

    document.querySelector('.companydecriptionH4').style.transform = 'translateY(100%)';
    document.querySelector('.companydecriptionP4').style.transform = 'translateY(100%)';
    document.querySelector('.companydecriptionH4').style.opacity = '0';
    document.querySelector('.companydecriptionP4').style.opacity = '0';
    document.querySelector('.section5').style.transform = 'translateY(100%)';
        document.querySelector('.transitionp1').style.display = 'block';
        document.querySelector('.transitionp2').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.transitionp1').style.transform = 'translateY(0)';
            document.querySelector('.transitionp2').style.transform = 'translateY(0)';

            setTimeout(function(){
                document.querySelector('.pageIndication').style.display = 'block';
                document.querySelector('.indicatorOn4').style.display = 'none';
                document.querySelector('.indicatorOn5').style.display = 'inline-block';

                document.getElementById('sec4').style.display = 'none';
                body.style.backgroundImage = 'url(photos/gttbg.jpg)';
                document.getElementById('sec5').style.display = 'block';
                document.querySelector('.caption1').style.display = 'none';
                document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
                document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
                setTimeout(function(){
                    
                    document.querySelector('.transitionp1').style.display = 'none';
                    document.querySelector('.transitionp2').style.display = 'none';
                },600);
            },800);
            setTimeout(function(){
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
    
}
});





sec5.addEventListener('wheel', function(event){

if (event.deltaY < 0)
{
document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
document.querySelector('.companydecriptionH5').style.opacity = '0';
document.querySelector('.companydecriptionP5').style.opacity = '0';   
document.querySelector('.section4').style.transform = 'translateY(100%)';    
document.querySelector('.transitionp1').style.display = 'block';
    document.querySelector('.transitionp2').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.transitionp1').style.transform = 'translateY(0)';
        document.querySelector('.transitionp2').style.transform = 'translateY(0)';

        setTimeout(function(){
            document.querySelector('.pageIndication').style.display = 'block';
            document.querySelector('.indicatorOn5').style.display = 'none';
            document.querySelector('.indicatorOn4').style.display = 'inline-block';

            document.getElementById('sec5').style.display = 'none';
            body.style.backgroundImage = 'url(photos/gtscbg.jpg)';
            document.getElementById('sec4').style.display = 'block';
            document.querySelector('.caption1').style.display = 'none';
            document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
            setTimeout(function(){
                
                document.querySelector('.transitionp1').style.display = 'none';
                document.querySelector('.transitionp2').style.display = 'none';
            },600);
        },800);
        setTimeout(function(){
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

if (event.deltaY > 0)
{


document.querySelector('.companydecriptionH5').style.transform = 'translateY(100%)';
document.querySelector('.companydecriptionP5').style.transform = 'translateY(100%)';
document.querySelector('.companydecriptionH5').style.opacity = '0';
document.querySelector('.companydecriptionP5').style.opacity = '0';
document.querySelector('.section5').style.transform = 'translateY(100%)';
    document.querySelector('.transitionp1').style.display = 'block';
    document.querySelector('.transitionp2').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.transitionp1').style.transform = 'translateY(0)';
        document.querySelector('.transitionp2').style.transform = 'translateY(0)';

        setTimeout(function(){
            document.querySelector('.pageIndication').style.display = 'block';
            document.querySelector('.indicatorOn5').style.display = 'none';
            document.querySelector('.indicatorOn1').style.display = 'inline-block';

            document.getElementById('sec5').style.display = 'none';
            body.style.backgroundImage = 'url(photos/gtcbg.jpg)';
            document.getElementById('sec1').style.display = 'block';
            document.querySelector('.caption1').style.display = 'none';
            document.querySelector('.transitionp1').style.transform = 'translateY(100%)';
            document.querySelector('.transitionp2').style.transform = 'translateY(-100%)';
            setTimeout(function(){
                
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
}
});		
});
