 $(document).ready(function(){
      $('.main-navigation').hover(function(){
        $(".carousel-control").css("z-index","99");
        $('.form-search').css("z-index","99");
        $('.carousel-indicators').css("z-index","99");
      },
      function(){
        $(".carousel-control").css("z-index","100");
        $('.form-search').css("z-index","100");
        $('.carousel-indicators').css("z-index","100");
      });
      
    });