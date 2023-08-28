// navbar

$('#sideMenu').click(function(){
    $('.box').css({left:'0',transition: 'all 1s' })
})

$('#navbar i').click(function(){
    $('.box').css({left:'-250px' ,transition : 'all 1s'})
})


// slidedown
$('.title').click(function(){
   
$('.caption').not($(this).next()).slideUp(500)
$(this).next().slideToggle(500)

})


// scroll smoothing
$('#navbar a').click(function(){
    let selected=$(this).attr('href')
    let selectionTop=$(selected).offset().top
    $('body , html').animate({scrollTop:selectionTop},2000)
})




// textarea
$('textarea').keyup(function(){
    let arealength=$(this).val().length
    if(100-arealength<=0){
      $('.number').text('your charachters are finished')  
    }else{
        $('.number').text( 100-arealength)  
    }


})

