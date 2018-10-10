$('.wrapper-stu li').click(function(){
    if( $(this).next().is(":hidden")){
        $(this).next().show(200);
    }else
    $(this).next().hide(200);
    
})