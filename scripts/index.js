$(function(){
    $('body').bind("mousewheel", function() {
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
        $('body').bind("mousewheel", function() {
            return true;
        });
        document.querySelector('.section1').style.display = 'block';
        document.querySelector('.navbar').style.transform = 'translateY(0)';
    },4300);		
});


window.addEventListener('wheel', function(event){
    if (event.deltaY < 0)
        {
            document.querySelector('.section1').style.transform = 'translateY(100%)';
        }
    else if (event.deltaY > 0)
        {
            
            document.querySelector('.section1').style.transform = 'translateY(0)';
        }
        else{
            document.querySelector('.section1').style.transform = 'translateY(100%)';
        }
});


// $('body').bind("mousewheel", function() {
//     return false;
// });



