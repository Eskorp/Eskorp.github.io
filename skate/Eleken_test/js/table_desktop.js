

$(".Ins-list_icon_rectangle").click(function(){
    $(".header-wrap").css({"justify-content":"space-between","padding":"0px 230px 0px 130px"}); 
    $(".header-wrap_nav-list").css({"display":"flex"});  
    $(".Ins-list_icon_burger").css({"display":"block"});
    $(".Ins-list_icon_rectangle").css({"display":"block"});
    $(".container").css({"display":"none"});
    $(".table-head").css({"display":"none"});
    $(".main-table").css({"display":"flex","flex-wrap":"wrap" ,"justify-content":"center"});
    $(".table-content").css({"flex-direction": "column" , "align-items":"center","border":"1px solid #D3D3D3","padding":"5px 45px 0px 45px","height":"auto","justify-content":"space-between","margin":"40px 35px 20px 35px","width":"260px"});
    $(".content_item").css({"width":"100%","font-size":"15px", "border-bottom":"1px solid #D3D3D3","height":"40px", "justify-content":"flex-start"});
    $(".table-head_item_title").css({"display":"flex","font-size":"14px"});
    $(".table-head_item_title1").css({"flex-grow":"5"});  
    $(".over").css({"margin":"-5px -45px -5px -45px","padding":"0", "display":"flex", "width":"75%", "height":"40px", "border-radius":"0px","justify-content":"center","font-size":"20px"});
    $(".buy").css({"margin":"-5px -45px -5px 45px","padding":"0", "display":"flex", "width":"75%", "height":"40px","border-radius":"0px","justify-content":"center","font-size":"20px"});
    $(".content_item_month").css({"justify-content":"center","font-size":"38px", "margin":"20px 0px 20px 0px"});
    $(".content_item:nth-child(4)").css({"margin":"0"});
    $(".content_item:nth-child(5)").css({"margin":"0"});
    $(".content_item:nth-child(6)").css({"margin":"0"});
    $(".item_icon_image").css({"width":"70px"});
    $(".content_item:nth-child(1)").css({"height":"75px", "border-bottom":"0px"});
    $(".content_item:nth-child(8)").css({"height":"70px", "border-bottom":"0px", "align-self":"flex-end"});
    $(".content_item_1").css({"margin":"0px"});
    $(".content_item:nth-child(9)").css({"border-bottom":"0px"});
    $(".footer-text1").css({"display":"block"});  
})
    
    $(".Ins-list_icon_burger").click(function(){
    $(".table-head").css({"display":"flex"});
    $(".main-table").css({"display":"block"});
    $(".table-content").css({"flex-direction": "row" , "align-items":"center","border":"0px","padding":"0px 0px 20px 0px","height":"auto","justify-content":"flex-start","margin":"30px 70px 0px 70px","width":"auto","border-bottom": "1px solid #D3D3D3"});
    $(".content_item").css({"width":"11.11111%","font-size":"100%", "border-bottom":"0px","height":"auto", "justify-content":"flex-start"});
    $(".table-head_item_title").css({"display":"none","font-size":"100%"});
    $(".over").css({"margin":"0px 5px 0px 0px","padding":"1px 6px", "display":"block", "width":"auto", "height":"25", "border-radius":"3px","font":"400 13.3333px Arial"});
    $(".buy").css({"margin":"0px","padding":"1px 6px", "display":"block", "width":"65", "height":"25","border-radius":"3px","justify-content":"flex-start","font":"400 13.3333px Arial"});
    $(".content_item_month").css({"justify-content":"flex-start","align-items":"auto"});
    $(".content_item:nth-child(4)").css({"margin":"0px 0px 0px -30px"});
    $(".content_item:nth-child(5)").css({"margin":"0px 0px 0px 15px"});
    $(".content_item:nth-child(6)").css({"margin":"0px 0px 0px -30px"});
    
    $(".item_icon_image").css({"width":"50px"});
    $(".content_item:nth-child(1)").css({"height":"auto", "border-bottom":"0px"});
    $(".content_item:nth-child(8)").css({"height":"auto", "border-bottom":"0px", "align-self":"auto"});
    $(".content_item_1").css({"margin":"0px 30px 0px 0px"});
    $(".content_item:nth-child(9)").css({"border-bottom":"0px","justify-content": "flex-end"});
})




$(window).resize(function() {
  if ($(window).width() < 1258) {
    $(".table-head").css({"display":"none"});
    $(".main-table").css({"display":"flex","flex-wrap":"wrap" ,"justify-content":"center"});
    $(".table-content").css({"flex-direction": "column" , "align-items":"center","border":"1px solid #D3D3D3","padding":"5px 45px 0px 45px","height":"auto","justify-content":"space-between","margin":"40px 35px 20px 35px","width":"260px"});
    $(".content_item").css({"width":"100%","font-size":"15px", "border-bottom":"1px solid #D3D3D3","height":"45px", "justify-content":"flex-start"});
    $(".table-head_item_title").css({"display":"block","font-size":"15px"});
    $(".table-head_item_title1").css({"flex-grow":"5"});  
    $(".over").css({"margin":"-5px -45px -5px -45px","padding":"0", "display":"flex", "width":"75%", "height":"45px", "border-radius":"0px","justify-content":"center"});
    $(".buy").css({"margin":"-5px -45px -5px 45px","padding":"0", "display":"flex", "width":"75%", "height":"45px","border-radius":"0px","justify-content":"center"});
    $(".content_item_month").css({"justify-content":"center","font-size":"30px"});
    $(".content_item:nth-child(4)").css({"margin":"0"});
    $(".content_item:nth-child(5)").css({"margin":"0"});
    $(".content_item:nth-child(6)").css({"margin":"0"});
    $(".item_icon_image").css({"width":"70px"});
    $(".content_item:nth-child(1)").css({"height":"75px", "border-bottom":"0px"});
    $(".content_item:nth-child(8)").css({"height":"70px", "border-bottom":"0px", "align-self":"flex-end"});
    $(".content_item_1").css({"margin":"0px"});
    $(".content_item:nth-child(9)").css({"border-bottom":"0px"});
    $(".Ins-list_icon_burger").css({"display":"none"});
    $(".Ins-list_icon_rectangle").css({"display":"none"});
    $(".Ins-list").css({"padding":"20px 0px 20px 0px"}); 
    $(".footer-text1").css({"display":"none"});
    $(".container").css({"display":"block"});
    $(".header-wrap_nav-list").css({"display":"none"});
    $(".header-wrap_list_item").css({"display":"list-item"});
    $(".header-wrap").css({"display":"block","padding":"0px 30px 0px 30px","height":"auto"}); 
    $(".header-wrap_block").css({"height":"60px","width":"100%"});   
    
  }
 
});

    if(window.matchMedia('(max-width: 1256px)').matches){
        $(".table-head").css({"display":"none"});
    $(".main-table").css({"display":"flex","flex-wrap":"wrap" ,"justify-content":"center"});
    $(".table-content").css({"flex-direction": "column" , "align-items":"center","border":"1px solid #D3D3D3","padding":"5px 45px 0px 45px","height":"auto","justify-content":"space-between","margin":"40px 35px 20px 35px","width":"260px"});
    $(".content_item").css({"width":"100%","font-size":"15px", "border-bottom":"1px solid #D3D3D3","height":"45px", "justify-content":"flex-start"});
    $(".table-head_item_title").css({"display":"block","font-size":"15px"});
    $(".table-head_item_title1").css({"flex-grow":"5"});  
    $(".over").css({"margin":"-5px -45px -5px -45px","padding":"0", "display":"flex", "width":"75%", "height":"45px", "border-radius":"0px","justify-content":"center"});
    $(".buy").css({"margin":"-5px -45px -5px 45px","padding":"0", "display":"flex", "width":"75%", "height":"45px","border-radius":"0px","justify-content":"center"});
    $(".content_item_month").css({"justify-content":"center","font-size":"30px"});
    $(".content_item:nth-child(4)").css({"margin":"0"});
    $(".content_item:nth-child(5)").css({"margin":"0"});
    $(".content_item:nth-child(6)").css({"margin":"0"});
    $(".item_icon_image").css({"width":"70px"});
    $(".content_item:nth-child(1)").css({"height":"75px", "border-bottom":"0px"});
    $(".content_item:nth-child(8)").css({"height":"70px", "border-bottom":"0px", "align-self":"flex-end"});
    $(".content_item_1").css({"margin":"0px"});
    $(".content_item:nth-child(9)").css({"border-bottom":"0px"});
    $(".Ins-list_icon_burger").css({"display":"none"});
    $(".Ins-list_icon_rectangle").css({"display":"none"});
    $(".Ins-list").css({"padding":"20px 0px 20px 0px"}); 
    $(".footer-text1").css({"display":"none"});
    $(".container").css({"display":"block"});
    $(".header-wrap_nav-list").css({"display":"none"});
    $(".header-wrap_list_item").css({"display":"list-item"});
    $(".header-wrap").css({"display":"block","padding":"0px 30px 0px 30px","height":"auto"}); 
    $(".header-wrap_block").css({"height":"60px","width":"100%"});  
    }





if(window.matchMedia('(max-width: 840px)').matches){
    $(".Ins-list_block").css({"text-align":"center"}); 
    $(".header-wrap").css({"padding":"0px 30px 0px 30px"}); 
    $(".footer-text").css({"text-align":"center","margin":"0px"});
    $(".footer").css({"text-align":"center","padding":
    "50px 20px 0px 20px","justify-content":"center"});
   
}



$(window).resize(function() {
  if ($(window).width() < 840) {
    $(".Ins-list_block").css({"text-align":"center"}); 
    $(".header-wrap").css({"text-align":"center"});  
    $(".footer-text").css({"text-align":"center","margin":"0px"});
    $(".footer").css({"text-align":"center","padding":
    "50px 20px 0px 20px","justify-content":"center"});
  }
 
});

$(window).resize(function() {
  if ($(window).width() > 840) {
    $(".Ins-list_block").css({"text-align":"left"}); 
    $(".header-wrap").css({"padding":"0px 30px 0px 30px"});
    $(".footer-text").css({"text-align":"left"});
    $(".footer").css({"text-align":"left","padding":"50px 70px 0px 70px","justify-content":"flex-start"});
  }
 
});



$(window).resize(function() {
  if ($(window).width() >= 1258) {
    $(".header-wrap").css({"justify-content":"space-between","padding":"0px 230px 0px 130px","display":"flex"}); 
    $(".header-wrap_nav-list").css({"display":"flex"});
    $(".header-wrap_list_item").css({"display":"inline-block"});
    $(".header-wrap_block").css({"width":"100px"});  
    $(".Ins-list_icon_burger").css({"display":"block"});
    $(".Ins-list_icon_rectangle").css({"display":"block"});
    $(".container").css({"display":"none"});
    $(".footer-text1").css({"display":"block"});
    $(".footer-text").css({"margin-right":"20px"});
  
  }
 
});

$(".container").click(function () {
if ($(".header-wrap_nav-list").is(":hidden")) {   
   $(".header-wrap_nav-list").slideDown("fast");
   } else {
      $(".header-wrap_nav-list").slideUp("fast");
}
});
    








