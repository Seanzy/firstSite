// $("#reveal").before("text").after("text");
// $("#reveal").hide();

$(document).ready();

// $("img").hover(function(){
//   $("#reveal").show();
// });

// $("img").hover(function(){
//   $("#reveal").show().animate({

//     left: '250px',
//   })
// });

$("#test").attr("src", "img/best.jpg")

$("button").click(function(){
    // $("#reveal").show();
    $("reveal").animate({height: '300px', opacity: '.4'}, "slow");
    
    // var div = $("div");
    // div.animate({height: '300px', opacity: '0.4'}, "slow");
    // div.animate({width: '300px', opacity: '0.8'}, "slow");
    // div.animate({height: '100px', opacity: '0.4'}, "slow");
    // div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});

// $("button").click(function(){
//     $("div").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     });
// }); 

