(function() {
  'use strict';
  var $message = $('#message');
    
  $message.on('mouseenter', function(){
    
    setTimeout(function(){
      $message.find('.outside').html('doces');
    },200);
  });
  
  $message.on('mouseleave', function(){
    
    setTimeout(function(){
      $message.find('.outside').html('&#x2764');
    },250);
  });
}());