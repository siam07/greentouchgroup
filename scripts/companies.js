let cgtc = document.getElementById("cgtc");
let cgte = document.getElementById("cgte");
let cgtd = document.getElementById("cgtd");
let cgtsc = document.getElementById("cgtsc");
let cgtt = document.getElementById("cgtt");

let gtCorporationDes = document.getElementById("gtCorporationDes");
let gtCorporationImg = document.getElementById("gtCorporationImg");

let gEximDes = document.getElementById("gEximDes");
let gtEximImg = document.getElementById("gtEximImg");

let gtDesignDes = document.getElementById("gtDesignDes");
let gtDesignImg = document.getElementById("gtDesignImg");

let gtScDes = document.getElementById("gtScDes");
let gtScImg = document.getElementById("gtScImg");

let gtTransportDes = document.getElementById("gtTransportDes");
let gtTransportImg = document.getElementById("gtTransportImg");
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
    document.getElementById('cgtc').style.color = 'green';
    gtCorporationDes.style.display = 'block';
    gtCorporationImg.style.display = 'block';
    setTimeout(function(){

        gtCorporationImg.style.transform = 'translateY(0)';
        gtCorporationDes.style.opacity = '1';
        gtCorporationImg.style.opacity = '1';
    },100); 
});


cgtc.addEventListener("click", function( event ) {
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

    document.getElementById('indicator1').style.opacity='1'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';

    document.getElementById('cgtc').style.color = 'green';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';
    gtCorporationDes.style.display = 'block';
    gtCorporationImg.style.display = 'block';
    setTimeout(function(){
        gtCorporationImg.style.display = 'block';
        gtCorporationImg.style.transform = 'translateY(0)';
        gtCorporationDes.style.opacity = '1';
        gtCorporationImg.style.opacity = '1';
    },100);
});

cgte.addEventListener("click", function( event ) {
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

    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='1';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'green';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';

    gtEximDes.style.display = 'block';
    gtEximImg.style.display = 'block';

    setTimeout(function(){
        gtEximImg.style.display = 'block';
        gtEximImg.style.transform = 'translateY(0)';
        gtEximDes.style.opacity = '1';
        gtEximImg.style.opacity = '1';
    },100);  
});

cgtd.addEventListener("click", function( event ) {
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

 
    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='1';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='0';

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'green';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';
    

    gtDesignDes.style.display = 'block';
    gtDesignImg.style.display = 'block';

    setTimeout(function(){
        gtDesignImg.style.transform = 'translateY(0)';
        gtDesignDes.style.opacity = '1';
        gtDesignImg.style.opacity = '1';
    },100);  
});

cgtsc.addEventListener("click", function( event ) {
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

 
    document.getElementById('indicator1').style.opacity='0'; 
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='1';
    document.getElementById('indicator5').style.opacity='0';

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'green';
    document.getElementById('cgtt').style.color = 'black';
    
    gtScDes.style.display = 'block';
    gtScImg.style.display = 'block';

    setTimeout(function(){
        gtScImg.style.transform = 'translateY(0)';
        gtScDes.style.opacity = '1';
        gtScImg.style.opacity = '1';
    },100);  
});

cgtt.addEventListener("click", function( event ) {
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

 
    document.getElementById('indicator1').style.opacity='0';
    document.getElementById('indicator2').style.opacity='0';
    document.getElementById('indicator3').style.opacity='0';
    document.getElementById('indicator4').style.opacity='0';
    document.getElementById('indicator5').style.opacity='1';

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'green';   

    gtTransportDes.style.display = 'block';
    gtTransportImg.style.display = 'block';

    setTimeout(function(){
        gtTransportImg.style.transform = 'translateY(0)';
        gtTransportDes.style.opacity = '1';
        gtTransportImg.style.opacity = '1';
    },100);  
});




let gtCorporation = document.querySelectorAll('.gtCorporation');
let gtExim = document.querySelector('.gtExim');
let gtDesign = document.querySelectorAll('.gtDesign');
let gtStoneCrusher = document.querySelectorAll('.gtStoneCrusher');
let gtTransport = document.querySelectorAll('.gtTransport');


for(var i = 0; i < gtCorporation.length; i++){

    gtCorporation[i].addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            gtCorporationImg.style.transform = 'translateY(100%)';
            
            gtCorporationDes.style.opacity = '0';
            gtCorporationImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='1';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'green';
            
                gtTransportDes.style.display = 'block';
                gtTransportImg.style.display = 'block';
            
                setTimeout(function(){
                    gtTransportImg.style.transform = 'translateY(0)';
                    gtTransportDes.style.opacity = '1';
                    gtTransportImg.style.opacity = '1';
                },100);  
            },200);
        }

        if (event.deltaY > 0)
        {
            gtCorporationImg.style.transform = 'translateY(100%)';
            
            gtCorporationDes.style.opacity = '0';
            gtCorporationImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='1';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'green';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
                gtEximDes.style.display = 'block';
                gtEximImg.style.display = 'block';
            
                setTimeout(function(){
                    gtEximImg.style.transform = 'translateY(0)';
                    gtEximDes.style.opacity = '1';
                    gtEximImg.style.opacity = '1';
                },100);  
            },200);
        } 

    });
    
    gtExim.addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            gtEximImg.style.transform = 'translateY(100%)';
            
            gtEximDes.style.opacity = '0';
            gtEximImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='1'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'green';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
                gtCorporationDes.style.display = 'block';
                gtCorporationImg.style.display = 'block';
            
                setTimeout(function(){
                    gtCorporationImg.style.transform = 'translateY(0)';
                    gtCorporationDes.style.opacity = '1';
                    gtCorporationImg.style.opacity = '1';
                },100); 
            },200);
        }
        
        if (event.deltaY > 0)
        {
            gtEximImg.style.transform = 'translateY(100%)';
            
            gtEximDes.style.opacity = '0';
            gtEximImg.style.opacity = '0';
            setTimeout(function(){ 
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
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='1';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'green';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
                
            
                gtDesignDes.style.display = 'block';
                gtDesignImg.style.display = 'block';
            
                setTimeout(function(){
                    gtDesignImg.style.transform = 'translateY(0)';
                    gtDesignDes.style.opacity = '1';
                    gtDesignImg.style.opacity = '1';
                },100); 
            },200);
        } 

    });
    
    gtDesign[i].addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            gtDesignImg.style.transform = 'translateY(100%)';
            
            gtDesignDes.style.opacity = '0';
            gtDesignImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='1';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'green';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
                gtEximDes.style.display = 'block';
                gtEximImg.style.display = 'block';
            
                setTimeout(function(){
                    gtEximImg.style.transform = 'translateY(0)';
                    gtEximDes.style.opacity = '1';
                    gtEximImg.style.opacity = '1';
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        { 
            gtDesignImg.style.transform = 'translateY(100%)';
            
            gtDesignDes.style.opacity = '0';
            gtDesignImg.style.opacity = '0';
            setTimeout(function(){ 
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
            
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='1';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'green';
                document.getElementById('cgtt').style.color = 'black';
                
                gtScDes.style.display = 'block';
                gtScImg.style.display = 'block';
            
                setTimeout(function(){
                    gtScImg.style.transform = 'translateY(0)';
                    gtScDes.style.opacity = '1';
                    gtScImg.style.opacity = '1';
                },100); 
            },200);
        } 

    });
    
    gtStoneCrusher[i].addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            gtScImg.style.transform = 'translateY(100%)';
            
            gtScDes.style.opacity = '0';
            gtScImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='1';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'green';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
                gtDesignDes.style.display = 'block';
                gtDesignImg.style.display = 'block';
            
                setTimeout(function(){
                    gtDesignImg.style.transform = 'translateY(0)';
                    gtDesignDes.style.opacity = '1';
                    gtDesignImg.style.opacity = '1';
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        {
            gtScImg.style.transform = 'translateY(100%)';
            
            gtScDes.style.opacity = '0';
            gtScImg.style.opacity = '0';
            setTimeout(function(){  
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
            
            
                document.getElementById('indicator1').style.opacity='0';
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='1';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'green';   
            
                gtTransportDes.style.display = 'block';
                gtTransportImg.style.display = 'block';
            
                setTimeout(function(){
                    gtTransportImg.style.transform = 'translateY(0)';
                    gtTransportDes.style.opacity = '1';
                    gtTransportImg.style.opacity = '1';
                },100);
            },200);  
        } 

    });
    
    gtTransport[i].addEventListener('wheel', function(event){
        if (event.deltaY < 0)
        {
            gtTransportImg.style.transform = 'translateY(100%)';
            
            gtScDes.style.opacity = '0';
            gtTransportImg.style.opacity = '0';
            setTimeout(function(){
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
            
                document.getElementById('indicator1').style.opacity='0'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='1';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'green';
                document.getElementById('cgtt').style.color = 'black';
            
                gtScDes.style.display = 'block';
                gtScImg.style.display = 'block';
            
                setTimeout(function(){
                    gtScImg.style.transform = 'translateY(0)';
                    gtScDes.style.opacity = '1';
                    gtScImg.style.opacity = '1';
                },100); 
            },200);
        }
        if (event.deltaY > 0)
        {
            gtTransportImg.style.transform = 'translateY(100%)';
            
            gtTransportDes.style.opacity = '0';
            gtTransportImg.style.opacity = '0';
            setTimeout(function(){ 
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
            
                document.getElementById('indicator1').style.opacity='1'; 
                document.getElementById('indicator2').style.opacity='0';
                document.getElementById('indicator3').style.opacity='0';
                document.getElementById('indicator4').style.opacity='0';
                document.getElementById('indicator5').style.opacity='0';
            
                document.getElementById('cgtc').style.color = 'green';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
                gtCorporationDes.style.display = 'block';
                gtCorporationImg.style.display = 'block';
                setTimeout(function(){
            
                    gtCorporationImg.style.transform = 'translateY(0)';
                    gtCorporationDes.style.opacity = '1';
                    gtCorporationImg.style.opacity = '1';
                },100);
            },200);
        } 

    });

}
