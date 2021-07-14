$(document).ready(function() {
  
    var switches, n, next, id,
        duration = 5000,
        current = 0;
  
    switches = $('.carousel input[name="switch"]');  
    n = switches.length;
    next = ((current + 1) % n);  
    
    $(switches[current]).prop('checked', true);  
    $('.nav_pills span:nth-child('+(current + 1)+')').addClass('animate');
    
    id = setInterval(function(){
       $(switches[next]).prop('checked',true);
       $('.nav_pills span:nth-child('+(current + 1)+')').removeClass('animate');
       current = next;
       $('.nav_pills span:nth-child('+(current + 1)+')').addClass('animate');
       next = ((current + 1) % n);  
    }   
    , duration);  
  
    $('.nav_pills span').click(function() { 
      clearInterval(id);
      $('.nav_pills span:nth-child('+(current + 1)+')').removeClass('animate');
      current = $(this).index();
      next = ((current + 1) % n);  
      $(switches[current]).prop('checked',true);
      $(this).addClass('animate');
      id = setInterval(function(){
         $(switches[next]).prop('checked',true);
         $('.nav_pills span:nth-child('+(current + 1)+')').removeClass('animate');
         current = next;
         $('.nav_pills span:nth-child('+(current + 1)+')').addClass('animate');
         next = ((current + 1) % n); 
         }
      , duration); 
    });
  });
  
  
  
  
  