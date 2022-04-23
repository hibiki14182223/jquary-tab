$('.blue').css({
    "background-color":"blue",
    "width":"300px",
    "height":"300px",
});



let count=1;
function fx(x)
{
    $(".name").children().css('color',"red");
    x=count;
    return false;
}

console.log(fx(6));

$(".class").on("click", function()
{
  let index =$(".class").index(this);
  
  $(".class").removeClass("isActive");
  $(".t-area").removeClass("isActive");
  $(this).addClass("isActive");
  $(".t-area").eq(index).addClass("isActive");
  console.log("変えました");








})












