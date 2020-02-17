
  var body = document.getElementsByTagName("BODY")[0];
  let sec = document.getElementById("sec");
  let sec1 = document.getElementById("sec1");
//   let sec2 = document.getElementById("sec2");
//   let sec3 = document.getElementById("sec3");
//   let sec4 = document.getElementById("sec4");
//   let sec5 = document.getElementById("sec5");

$(function(){
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
        document.querySelector('.mission').style.transform = 'translateY(85%)';
        document.querySelector('.vision').style.transform = 'translateY(85%)';
        document.querySelector('.overview').style.transform = 'translateY(85%)';
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

                    sec.addEventListener('wheel', function(event){
                            if (event.deltaY > 0)
                            {   
                                
                                document.querySelector('.mission').style.transform = 'translateY(100%)';
                                document.querySelector('.vision').style.transform = 'translateY(100%)';
                                document.querySelector('.overview').style.transform = 'translateY(100%)';
                                setTimeout(function(){
                                    document.querySelector('.scrolltostart').style.transition = '.5s';
                                    document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
                                    document.querySelector('.transitionp1').style.display = 'block';
                                    document.querySelector('.transitionp2').style.display = 'block';
                                    setTimeout(function(){
                                        document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                                        document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                                        setTimeout(function(){
                                            body.style.backgroundImage = 'url(../photos/gtcbg.jpg)';
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




                    sec1.addEventListener('wheel', function(event){
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
                                        body.style.backgroundImage = 'url(../photos/background.jpg)';
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
                                    document.querySelector('.mission').style.transform = 'translateY(85%)';
                                    document.querySelector('.vision').style.transform = 'translateY(85%)';
                                    document.querySelector('.overview').style.transform = 'translateY(85%)';
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
                                document.querySelector('.companydecriptionH').style.opacity = '0';
                                document.querySelector('.companydecriptionP').style.opacity = '0';
                                    document.querySelector('.section2').style.transform = 'translateY(100%)';
                                    document.querySelector('.transitionp1').style.display = 'block';
                                    document.querySelector('.transitionp2').style.display = 'block';
                                    setTimeout(function(){
                                        document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                                        document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                                        setTimeout(function(){
                                            document.getElementById('sec1').style.display = 'none';
                                            body.style.backgroundImage = 'url(../photos/gtebg.jpg)';
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
                                            document.getElementById('sec2').style.display = 'none';
                                            body.style.backgroundImage = 'url(../photos/gtcbg.jpg)';
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
                                            document.getElementById('sec2').style.display = 'none';
                                            body.style.backgroundImage = 'url(../photos/gtdbg.jpg)';
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
                                            document.getElementById('sec3').style.display = 'none';
                                            body.style.backgroundImage = 'url(../photos/gtebg.jpg)';
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
                                        document.getElementById('sec3').style.display = 'none';
                                        body.style.backgroundImage = 'url(../photos/gtscbg.jpg)';
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
                                    document.getElementById('sec4').style.display = 'none';
                                    body.style.backgroundImage = 'url(../photos/gtdbg.jpg)';
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
                                    document.getElementById('sec4').style.display = 'none';
                                    body.style.backgroundImage = 'url(../photos/gttbg.jpg)';
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
                                document.getElementById('sec5').style.display = 'none';
                                body.style.backgroundImage = 'url(../photos/gtscbg.jpg)';
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
                        document.querySelector('.section1').style.transform = 'translateY(100%)';
                        document.querySelector('.transitionp1').style.display = 'block';
                        document.querySelector('.transitionp2').style.display = 'block';
                        setTimeout(function(){
                            document.querySelector('.transitionp1').style.transform = 'translateY(0)';
                            document.querySelector('.transitionp2').style.transform = 'translateY(0)';

                            setTimeout(function(){
                                document.getElementById('sec5').style.display = 'none';
                                body.style.backgroundImage = 'url(../photos/gtcbg.jpg)';
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
    document.querySelector('.mission').style.background = '#1b8713';
    document.querySelector('.mission').style.color = 'white';
    document.querySelector('.mission').style.borderRadius = '5px';
  // reset the color after a short delay
}, false);

test2.addEventListener("mouseover", function( event ) {   
// highlight the mouseover target
    document.querySelector('.vision').style.transform = 'translateY(0)';
    document.querySelector('.vision').style.background = '#1b8713';
    document.querySelector('.vision').style.color = 'white';
    document.querySelector('.vision').style.borderRadius = '5px';
}, false);

test3.addEventListener("mouseover", function( event ) {   
// highlight the mouseover target
    document.querySelector('.overview').style.transform = 'translateY(0)';
    document.querySelector('.overview').style.background = '#1b8713';
    document.querySelector('.overview').style.color = 'white';
    document.querySelector('.overview').style.borderRadius = '5px';
}, false);




test1.addEventListener("mouseout", function( event ) {   
// highlight the mouseover target
    document.querySelector('.mission').style.transform = 'translateY(85%)';
    document.querySelector('.mission').style.background = '#81f533';
    document.querySelector('.mission').style.color = 'black';
    document.querySelector('.mission').style.borderRadius = '400px';
// reset the color after a short delay
}, false);

test2.addEventListener("mouseout", function( event ) {   
    // highlight the mouseover target
    document.querySelector('.vision').style.transform = 'translateY(85%)';
    document.querySelector('.vision').style.background = '#81f533';
    document.querySelector('.vision').style.color = 'black';
    document.querySelector('.vision').style.borderRadius = '400px';
}, false);

test3.addEventListener("mouseout", function( event ) {   
    // highlight the mouseover target
    document.querySelector('.overview').style.transform = 'translateY(85%)';
    document.querySelector('.overview').style.background = '#81f533';
    document.querySelector('.overview').style.color = 'black';
    document.querySelector('.overview').style.borderRadius = '400px';
}, false);


function myFunction(event) {
    var y = event.deltaY;
    console.log('y');
  }




let scrollclick = document.getElementById("scrollclick");




scrollclick.addEventListener("click", function( event ) {   
    document.querySelector('.mission').style.transform = 'translateY(100%)';
    document.querySelector('.vision').style.transform = 'translateY(100%)';
    document.querySelector('.overview').style.transform = 'translateY(100%)';
    setTimeout(function(){
        document.querySelector('.scrolltostart').style.transition = '.5s';
        document.querySelector('.scrolltostart').style.transform = 'translateY(100%)';
        document.querySelector('.transitionp1').style.display = 'block';
        document.querySelector('.transitionp2').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.transitionp1').style.transform = 'translateY(0)';
            document.querySelector('.transitionp2').style.transform = 'translateY(0)';

            setTimeout(function(){
                body.style.backgroundImage = 'url(../photos/gtcbg.jpg)';
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
            },1500);
        },200);
        setTimeout(function(){
            // document.querySelector('.scrolltostart').style.display = 'none';
        },500);
    },500);
}, false);





