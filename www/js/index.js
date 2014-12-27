 $(document).ready(function(){
      $('.main-navigation').hover(function(){
        $(".carousel-control").css("z-index","99");
        $('.form-search').css("z-index","99");
        $('.carousel-indicators').css("z-index","99");
        $('.guide-href').css("z-index","99");

      },
      function(){
        $(".carousel-control").css("z-index","100");
        $('.form-search').css("z-index","100");
        $('.carousel-indicators').css("z-index","100");
        $('.guide-href').css("z-index","100");
      });

      $('#counter').countdown({
    timestamp : (new Date(2014, 12, 31)).getTime() + 01*01*01*60*1000
      });

      $("#phone").mask("+7 (999) 999-9999");
      $("#phone2").mask("+7 (999) 999-9999");

     
      
      
    });