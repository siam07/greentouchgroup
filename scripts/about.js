let cgtc = document.getElementById("chair");
let cgtee = document.getElementById("adviser");
let cgte = document.getElementById("md");
let cgtd = document.getElementById("director");
let cgtsc = document.getElementById("directorFBA");
let cgtt = document.getElementById("coo");


let cgtcm = document.getElementById("chairMobile");
let cgteem = document.getElementById("adviserMobile");
let cgtem = document.getElementById("mdMobile");
let cgtdm = document.getElementById("directorMobile");
let cgtscm = document.getElementById("directorFBAMobile");
let cgttm = document.getElementById("cooMobile");


let gtCorporationDes = document.getElementById("gtCorporationDes");

let gtEximeDes = document.getElementById("gtEximeDes");

let gEximDes = document.getElementById("gEximDes");

let gtDesignDes = document.getElementById("gtDesignDes");

let gtScDes = document.getElementById("gtScDes");

let gtTransportDes = document.getElementById("gtTransportDes");






const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const links = document.querySelectorAll(".nav-links li");
let vh = window.innerHeight * 0.01;
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navLinks.style.setProperty('--vh1',`${vh}px`);
  hamburger.classList.toggle("crossed");
  line1.classList.toggle("open");
  line2.classList.toggle("open");
  line3.classList.toggle("open");

});




$(function(){
    document.getElementById('indicator1').style.opacity='1';  
    document.getElementById('chair').style.color = '#0f9d58';
    document.getElementById('indicator1Mobile').style.opacity='1';  
    document.getElementById('chairMobile').style.color = '#0f9d58';
    gtCorporationDes.style.display = 'block';
    
    setTimeout(function(){


        gtCorporationDes.style.opacity = '1';

    },100); 
});


cgtc.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';


    gtCorporationDes.style.opacity = '0';



    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';




    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1').style.opacity='1'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';
    document.getElementById('indicator6').style.opacity='0';

    document.getElementById('chair').style.color = '#0f9d58';
    document.getElementById('adviser').style.color = 'black';
    document.getElementById('md').style.color = 'black';
    document.getElementById('director').style.color = 'black';  
    document.getElementById('directorFBA').style.color = 'black';
    document.getElementById('coo').style.color = 'black';
    gtCorporationDes.style.display = 'block';
    
    setTimeout(function(){
        

        gtCorporationDes.style.opacity = '1';

    },100);
});

cgtee.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';



    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='1';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';
    document.getElementById('indicator6').style.opacity='0';

    document.getElementById('chair').style.color = 'black';
    document.getElementById('adviser').style.color = '#0f9d58';
    document.getElementById('md').style.color = 'black';
    document.getElementById('director').style.color = 'black';  
    document.getElementById('directorFBA').style.color = 'black';
    document.getElementById('coo').style.color = 'black';

    gtEximeDes.style.display = 'block';


    setTimeout(function(){

        gtEximeDes.style.opacity = '1';

    },100);  
});
cgte.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='1';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';
    document.getElementById('indicator6').style.opacity='0';

    document.getElementById('chair').style.color = 'black';
    document.getElementById('adviser').style.color = 'black';
    document.getElementById('md').style.color = '#0f9d58';
    document.getElementById('director').style.color = 'black';  
    document.getElementById('directorFBA').style.color = 'black';
    document.getElementById('coo').style.color = 'black';

    gtEximDes.style.display = 'block';


    setTimeout(function(){

        gtEximDes.style.opacity = '1';

    },100);  
});

cgtd.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='1';
    document.getElementById('indicator5').style.opacity='0';
    document.getElementById('indicator6').style.opacity='0';

    document.getElementById('chair').style.color = 'black';
    document.getElementById('adviser').style.color = 'black';
    document.getElementById('md').style.color = 'black';
    document.getElementById('director').style.color = '#0f9d58';  
    document.getElementById('directorFBA').style.color = 'black';
    document.getElementById('coo').style.color = 'black';
    

    gtDesignDes.style.display = 'block';


    setTimeout(function(){

        gtDesignDes.style.opacity = '1';

    },100);  
});

cgtsc.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='1';
    document.getElementById('indicator6').style.opacity='0';

    document.getElementById('chair').style.color = 'black';
    document.getElementById('adviser').style.color = 'black';
    document.getElementById('md').style.color = 'black';
    document.getElementById('director').style.color = 'black';  
    document.getElementById('directorFBA').style.color = '#0f9d58';
    document.getElementById('coo').style.color = 'black';
    
    gtScDes.style.display = 'block';

    setTimeout(function(){
        gtScDes.style.opacity = '1';
    },100);  
});

cgtt.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';
    document.getElementById('indicator6').style.opacity='1';

    document.getElementById('chair').style.color = 'black';
    document.getElementById('adviser').style.color = 'black';
    document.getElementById('md').style.color = 'black';
    document.getElementById('director').style.color = 'black';  
    document.getElementById('directorFBA').style.color = 'black';
    document.getElementById('coo').style.color = '#0f9d58';  

    gtTransportDes.style.display = 'block';

    setTimeout(function(){

        gtTransportDes.style.opacity = '1';

    },100);  
});







cgtcm.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';


    gtCorporationDes.style.opacity = '0';



    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';




    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1Mobile').style.opacity='1'; 
    document.getElementById('indicator2Mobile').style.opacity='0';
    document.getElementById('indicator3Mobile').style.opacity='0';
    document.getElementById('indicator4Mobile').style.opacity='0';
    document.getElementById('indicator5Mobile').style.opacity='0';
    document.getElementById('indicator6Mobile').style.opacity='0';

    document.getElementById('chairMobile').style.color = '#0f9d58';
    document.getElementById('adviserMobile').style.color = 'black';
    document.getElementById('mdMobile').style.color = 'black';
    document.getElementById('directorMobile').style.color = 'black';  
    document.getElementById('directorFBAMobile').style.color = 'black';
    document.getElementById('cooMobile').style.color = 'black';
    gtCorporationDes.style.display = 'block';
    
    setTimeout(function(){
        

        gtCorporationDes.style.opacity = '1';

    },100);
});

cgteem.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';



    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1Mobile').style.opacity='0'; 
    document.getElementById('indicator2Mobile').style.opacity='1';
    document.getElementById('indicator3Mobile').style.opacity='0';
    document.getElementById('indicator4Mobile').style.opacity='0';
    document.getElementById('indicator5Mobile').style.opacity='0';
    document.getElementById('indicator6Mobile').style.opacity='0';

    document.getElementById('chairMobile').style.color = 'black';
    document.getElementById('adviserMobile').style.color = '#0f9d58';
    document.getElementById('mdMobile').style.color = 'black';
    document.getElementById('directorMobile').style.color = 'black';  
    document.getElementById('directorFBAMobile').style.color = 'black';
    document.getElementById('cooMobile').style.color = 'black';

    gtEximeDes.style.display = 'block';


    setTimeout(function(){

        gtEximeDes.style.opacity = '1';

    },100);  
});
cgtem.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


    document.getElementById('indicator1Mobile').style.opacity='0'; 
    document.getElementById('indicator2Mobile').style.opacity='0';
    document.getElementById('indicator3Mobile').style.opacity='1';
    document.getElementById('indicator4Mobile').style.opacity='0';
    document.getElementById('indicator5Mobile').style.opacity='0';
    document.getElementById('indicator6Mobile').style.opacity='0';

    document.getElementById('chairMobile').style.color = 'black';
    document.getElementById('adviserMobile').style.color = 'black';
    document.getElementById('mdMobile').style.color = '#0f9d58';
    document.getElementById('directorMobile').style.color = 'black';  
    document.getElementById('directorFBAMobile').style.color = 'black';
    document.getElementById('cooMobile').style.color = 'black';

    gtEximDes.style.display = 'block';


    setTimeout(function(){

        gtEximDes.style.opacity = '1';

    },100);  
});

cgtdm.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1Mobile').style.opacity='0'; 
    document.getElementById('indicator2Mobile').style.opacity='0';
    document.getElementById('indicator3Mobile').style.opacity='0';
    document.getElementById('indicator4Mobile').style.opacity='1';
    document.getElementById('indicator5Mobile').style.opacity='0';
    document.getElementById('indicator6Mobile').style.opacity='0';

    document.getElementById('chairMobile').style.color = 'black';
    document.getElementById('adviserMobile').style.color = 'black';
    document.getElementById('mdMobile').style.color = 'black';
    document.getElementById('directorMobile').style.color = '#0f9d58';  
    document.getElementById('directorFBAMobile').style.color = 'black';
    document.getElementById('cooMobile').style.color = 'black';
    

    gtDesignDes.style.display = 'block';


    setTimeout(function(){

        gtDesignDes.style.opacity = '1';

    },100);  
});

cgtscm.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1Mobile').style.opacity='0'; 
    document.getElementById('indicator2Mobile').style.opacity='0';
    document.getElementById('indicator3Mobile').style.opacity='0';
    document.getElementById('indicator4Mobile').style.opacity='0';
    document.getElementById('indicator5Mobile').style.opacity='1';
    document.getElementById('indicator6Mobile').style.opacity='0';

    document.getElementById('chairMobile').style.color = 'black';
    document.getElementById('adviserMobile').style.color = 'black';
    document.getElementById('mdMobile').style.color = 'black';
    document.getElementById('directorMobile').style.color = 'black';  
    document.getElementById('directorFBAMobile').style.color = '#0f9d58';
    document.getElementById('cooMobile').style.color = 'black';
    
    gtScDes.style.display = 'block';

    setTimeout(function(){
        gtScDes.style.opacity = '1';
    },100);  
});

cgttm.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';

    

    gtEximeDes.style.display = 'none';



    gtEximeDes.style.opacity = '0';


    gtEximDes.style.display = 'none';



    gtEximDes.style.opacity = '0';

    
    gtDesignDes.style.display = 'none';

    
    gtDesignDes.style.opacity = '0';


    gtScDes.style.display = 'none';


    gtScDes.style.opacity = '0';


    gtTransportDes.style.display = 'none';


    gtTransportDes.style.opacity = '0';


 
    document.getElementById('indicator1Mobile').style.opacity='0'; 
    document.getElementById('indicator2Mobile').style.opacity='0';
    document.getElementById('indicator3Mobile').style.opacity='0';
    document.getElementById('indicator4Mobile').style.opacity='0';
    document.getElementById('indicator5Mobile').style.opacity='0';
    document.getElementById('indicator6Mobile').style.opacity='1';

    document.getElementById('chairMobile').style.color = 'black';
    document.getElementById('adviserMobile').style.color = 'black';
    document.getElementById('mdMobile').style.color = 'black';
    document.getElementById('directorMobile').style.color = 'black';  
    document.getElementById('directorFBAMobile').style.color = 'black';
    document.getElementById('cooMobile').style.color = '#0f9d58';  

    gtTransportDes.style.display = 'block';

    setTimeout(function(){

        gtTransportDes.style.opacity = '1';

    },100);  
});





























let gtCorporation = document.querySelector('.gtCorporation');
let gtExime = document.querySelector('.gtExime');
let gtExim = document.querySelector('.gtExim');
let gtDesign = document.querySelector('.gtDesign');
let gtStoneCrusher = document.querySelector('.gtStoneCrusher');
let gtTransport = document.querySelector('.gtTransport');


    gtCorporation.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
        
            
            gtCorporationDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='1';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = '#0f9d58';  

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='1';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = '#0f9d58';  
            
            
                gtTransportDes.style.display = 'block';

            
                setTimeout(function(){
                    gtTransportDes.style.opacity = '1';

                },100);  
            },200);
        }

        if (event.deltaY > 0)
        {
        
            
            gtCorporationDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='1';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = '#0f9d58';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black';  

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='1';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = '#0f9d58';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtEximeDes.style.display = 'block';
        
            
                setTimeout(function(){
                    gtEximeDes.style.opacity = '1';
            
                },100);  
            },200);
        } 

    });
    gtExime.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
        
            
            gtEximDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='1'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = '#0f9d58';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

                document.getElementById('indicator1Mobile').style.opacity='1'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = '#0f9d58';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtCorporationDes.style.display = 'block';
                
            
                setTimeout(function(){
            
                    gtCorporationDes.style.opacity = '1';
            
                },100); 
            },200);
        }
        
        if (event.deltaY > 0)
        {
        
            
            gtEximDes.style.opacity = '0';
        
            setTimeout(function(){ 
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='1';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = '#0f9d58';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='1';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = '#0f9d58';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
                
            
                gtEximDes.style.display = 'block';
            
            
                setTimeout(function(){
            
                    gtEximDes.style.opacity = '1';
            
                },100); 
            },200);
        } 

    });
    gtExim.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
        
            
            gtEximDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='1';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = '#black';
                document.getElementById('adviser').style.color = '#0f9d58';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='1';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = '#0f9d58';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtEximeDes.style.display = 'block';
                
            
                setTimeout(function(){
            
                    gtEximeDes.style.opacity = '1';
            
                },100); 
            },200);
        }
        
        if (event.deltaY > 0)
        {
        
            
            gtEximDes.style.opacity = '0';
        
            setTimeout(function(){ 
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='1';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = '#0f9d58';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

 
                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='1';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = '#0f9d58';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
                
            
                gtDesignDes.style.display = 'block';
            
            
                setTimeout(function(){
            
                    gtDesignDes.style.opacity = '1';
            
                },100); 
            },200);
        } 

    });
    gtDesign.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            
            gtDesignDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='1';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = '#0f9d58';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='1';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = '#0f9d58';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
                
            
                gtEximDes.style.display = 'block';
        
            
                setTimeout(function(){

                    gtEximDes.style.opacity = '1';
            
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        { 

            
            gtDesignDes.style.opacity = '0';
        
            setTimeout(function(){ 
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='1';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = '#0f9d58';
                document.getElementById('coo').style.color = 'black'; 
 
                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='1';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = '#0f9d58';
                document.getElementById('cooMobile').style.color = 'black';
                
                gtScDes.style.display = 'block';

            
                setTimeout(function(){

                    gtScDes.style.opacity = '1';

                },100); 
            },200);
        } 

    });
    
    gtStoneCrusher.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {

            
            gtScDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='1';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = '#0f9d58';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 

 
                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='1';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = '#0f9d58';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtDesignDes.style.display = 'block';
            
            
                setTimeout(function(){
            
                    gtDesignDes.style.opacity = '1';
            
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        {

            
            gtScDes.style.opacity = '0';
        
            setTimeout(function(){  
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='1';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = '#0f9d58'; 
 
                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='1';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = '#0f9d58';  
            
                gtTransportDes.style.display = 'block';

            
                setTimeout(function(){

                    gtTransportDes.style.opacity = '1';

                },100);
            },200);  
        } 

    });
    
    gtTransport.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {

            
            gtScDes.style.opacity = '0';
        
            setTimeout(function(){
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='1';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = 'black';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = '#0f9d58';
                document.getElementById('coo').style.color = 'black'; 
 
                document.getElementById('indicator1Mobile').style.opacity='0'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='1';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = 'black';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = '#0f9d58';
                document.getElementById('cooMobile').style.color = 'black';
            
                gtScDes.style.display = 'block';
            
                setTimeout(function(){
                    gtScDes.style.opacity = '1';
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        {
            
            gtTransportDes.style.opacity = '0';
        
            setTimeout(function(){ 
                gtCorporationDes.style.display = 'none';
            
            
            
                gtCorporationDes.style.opacity = '0';



                gtEximeDes.style.display = 'none';
            
            
            
                gtEximeDes.style.opacity = '0';
            
            
            
            
            
            
                gtEximDes.style.display = 'none';
            
            
            
                gtEximDes.style.opacity = '0';
            
                
                gtDesignDes.style.display = 'none';

                
                gtDesignDes.style.opacity = '0';
            
            
                gtScDes.style.display = 'none';

            
                gtScDes.style.opacity = '0';
            
            
                gtTransportDes.style.display = 'none';

            
                gtTransportDes.style.opacity = '0';
            
            
            
                document.getElementById('indicator1').style.opacity='1'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = '#0f9d58';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black'; 



                document.getElementById('indicator1').style.opacity='1'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
                document.getElementById('indicator6').style.opacity='0';
            
                document.getElementById('chair').style.color = '#0f9d58';
                document.getElementById('adviser').style.color = 'black';
                document.getElementById('md').style.color = 'black';
                document.getElementById('director').style.color = 'black';  
                document.getElementById('directorFBA').style.color = 'black';
                document.getElementById('coo').style.color = 'black';

                document.getElementById('indicator1Mobile').style.opacity='1'; 
                document.getElementById('indicator2Mobile').style.opacity='0';
                document.getElementById('indicator3Mobile').style.opacity='0';
                document.getElementById('indicator4Mobile').style.opacity='0';
                document.getElementById('indicator5Mobile').style.opacity='0';
                document.getElementById('indicator6Mobile').style.opacity='0';
            
                document.getElementById('chairMobile').style.color = '#0f9d58';
                document.getElementById('adviserMobile').style.color = 'black';
                document.getElementById('mdMobile').style.color = 'black';
                document.getElementById('directorMobile').style.color = 'black';  
                document.getElementById('directorFBAMobile').style.color = 'black';
                document.getElementById('cooMobile').style.color = 'black';
                gtCorporationDes.style.display = 'block';



                gtCorporationDes.style.display = 'block';
                
                setTimeout(function(){
            
            
                    gtCorporationDes.style.opacity = '1';
            
                },100);
            },200);
        } 

    });
