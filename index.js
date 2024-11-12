$(document).ready(function () {
  // 여기다가코드를쓰세요~
  $(".box").on("mouseover", function () {
    $(".box").removeClass("active");
    $(this).addClass("active");
  });

  for (var i = 0; i < 9999; i++) {
    $(".class").css("z-index", -i);
    console.log(Math.random() * 100 + 50);
    size = 10;
    $(".speech-bubble34").css(
      "width",
      Math.random() * size * Math.random() * size + 50
    );
    $(".speech-bubble35").css(
      "width",
      Math.random() * size * Math.random() * size + 70
    );
    $(".speech-bubble37").css(
      "width",
      Math.random() * size * Math.random() * size + 80
    );
    $(".speech-bubble22").css(
      "width",
      Math.random() * size * Math.random() * size + 80
    );
    $(".speech-bubble20").css(
      "width",
      Math.random() * size * Math.random() * size + 80
    );
    $(".speech-bubble10").css(
      "width",
      Math.random() * size * Math.random() * size + 80
    );
    $(".speech-bubble16").css(
      "width",
      Math.random() * size * Math.random() * size + 80
    );
    $(".speech-bubble34").css("height", Math.random() * size + 50);
    $(".speech-bubble35").css("height", Math.random() * size + 70);
    $(".speech-bubble37").css("height", Math.random() * size + 80);
    $(".speech-bubble22").css("height", Math.random() * size + 100);
    $(".speech-bubble20").css("height", Math.random() * size + 100);
    $(".speech-bubble10").css("height", Math.random() * size + 100);
    $(".speech-bubble16").css("height", Math.random() * size + 100);
  }
});

/*    
    $(this).css("background-color", "blue");
    $(this).css("border-radius", "30px");
    $(this).css("width", "240px");
  });
});

*/
