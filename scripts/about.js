let cgtc = document.getElementById("cgtc");
let cgte = document.getElementById("cgte");
let cgtd = document.getElementById("cgtd");
let cgtsc = document.getElementById("cgtsc");
let cgtt = document.getElementById("cgtt");

let gtCorporationDes = document.getElementById("gtCorporationDes");

let gEximDes = document.getElementById("gEximDes");

let gtDesignDes = document.getElementById("gtDesignDes");

let gtScDes = document.getElementById("gtScDes");

let gtTransportDes = document.getElementById("gtTransportDes");


$(function(){
    document.getElementById('indicator1').style.opacity='1';  
    document.getElementById('cgtc').style.color = 'green';
    gtCorporationDes.style.display = 'block';
    
    setTimeout(function(){


        gtCorporationDes.style.opacity = '1';

    },100); 
});


cgtc.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';


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

    document.getElementById('cgtc').style.color = 'green';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';
    gtCorporationDes.style.display = 'block';
    
    setTimeout(function(){
        

        gtCorporationDes.style.opacity = '1';

    },100);
});

cgte.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';


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

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'green';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';

    gtEximDes.style.display = 'block';


    setTimeout(function(){

        gtEximDes.style.opacity = '1';

    },100);  
});

cgtd.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';


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

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'green';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'black';
    

    gtDesignDes.style.display = 'block';


    setTimeout(function(){

        gtDesignDes.style.opacity = '1';

    },100);  
});

cgtsc.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';


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

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'green';
    document.getElementById('cgtt').style.color = 'black';
    
    gtScDes.style.display = 'block';

    setTimeout(function(){
        gtScDes.style.opacity = '1';
    },100);  
});

cgtt.addEventListener("click", function( event ) {
    gtCorporationDes.style.display = 'none';



    gtCorporationDes.style.opacity = '0';


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

    document.getElementById('cgtc').style.color = 'black';
    document.getElementById('cgte').style.color = 'black';
    document.getElementById('cgtd').style.color = 'black';  
    document.getElementById('cgtsc').style.color = 'black';
    document.getElementById('cgtt').style.color = 'green';   

    gtTransportDes.style.display = 'block';

    setTimeout(function(){

        gtTransportDes.style.opacity = '1';

    },100);  
});




let gtCorporation = document.querySelector('.gtCorporation');
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'green';
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'green';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
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
            
                document.getElementById('cgtc').style.color = 'green';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'green';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
                
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'green';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'green';
                document.getElementById('cgtt').style.color = 'black';
                
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'green';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'green';   
            
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
            
                document.getElementById('cgtc').style.color = 'black';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'green';
                document.getElementById('cgtt').style.color = 'black';
            
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
            
                document.getElementById('cgtc').style.color = 'green';
                document.getElementById('cgte').style.color = 'black';
                document.getElementById('cgtd').style.color = 'black';  
                document.getElementById('cgtsc').style.color = 'black';
                document.getElementById('cgtt').style.color = 'black';
                gtCorporationDes.style.display = 'block';
                
                setTimeout(function(){
            
            
                    gtCorporationDes.style.opacity = '1';
            
                },100);
            },200);
        } 

    });
