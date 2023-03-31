// <!-- плавный скролл -->
  
  $(document).ready(function () {
  $(".button").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var scrollTo = $(this).attr("href");
      $("html,body").animate(
        {
          scrollTop: $(scrollTo).offset().top,
        },
        800
      );
    });
  });
  $(".button2").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var scrollTo = $(this).attr("href");
      $("html,body").animate(
        {
          scrollTop: $(scrollTo).offset().top,
        },
        800
      );
    });
  });


// <!-- скрипт текст -->

  $("#btn4txt").click(function () {
    let valofin = $('input[name="firstinput"]').val();
    $("#result").html(valofin);
  });
  // смена фона
  $(".btn_fon1").click(function () {
    $("#result").toggleClass("fonclick1");
  });
  $(".btn_fon2").click(function () {
    $("#result").toggleClass("fonclick2");
  });
  $(".btn_fon3").click(function () {
    $("#result").toggleClass("fonclick3");
  });
  $(".btn_fon4").click(function () {
    $("#result").toggleClass("fonclick4");
  });
  $(".btn_fon5").click(function () {
    $("#result").toggleClass("fonclick5");
  });
  $(".btn_fon6").click(function () {
    $("#result").toggleClass("fonclick6");
  });
  $(".btn_fon7").click(function () {
    $("#result").toggleClass("fonclick7");
  });
  $(".btn_fon8").click(function () {
    $("#result").toggleClass("fonclick8");
  });
  $(".btn_fon9").click(function () {
    $("#result").toggleClass("fonclick9");
  });
  $(".btn_fon10").click(function () {
    $("#result").toggleClass("fonclick10");
  });
  $(".btn_fon11").click(function () {
    $("#result").toggleClass("fonclick11");
  });
  $(".btn_fon12").click(function () {
    $("#result").toggleClass("fonclick12");
  });


// слайдер текста

  $(".slider").on("input", function () {
    var v = $(this).val();
    $("#result").css("font-size", v + "vw");
  });

// клон результат

  $(".button2").click(function () {
    $(".container2").clone().appendTo(".maindiv_clone");
    $(".fon, .text, .filter, .button2, .predmet").addClass("boole");
  });


// изменение цвета кнопок

  $(".color_yt").click(function () {
    $("#result").css("color", "white");
  });
  $(".color_bl").click(function () {
    $("#result").css("color", "black");
  });
  $(".color_yellow").click(function () {
    $("#result").css("color", "#FFF000");
  });
  $(".color_blue").click(function () {
    $("#result").css("color", "#0101C5");
  });
  $(".color_pink").click(function () {
    $("#result").css("color", "#FF56FF");
  });
  $(".color_green").click(function () {
    $("#result").css("color", "#19E672");
  });
// изменение фильтра
  $(".fbtn_1").click(function () {
    $("#result").toggleClass("f1_navy");
  });
  $(".fbtn_2").click(function () {
    $("#result").toggleClass("f2_yellow");
  });
  $(".fbtn_3").click(function () {
    $("#result").toggleClass("f3_pink");
  });
  $(".fbtn_4").click(function () {
    $("#result").toggleClass("f4_green");
  });
  $(".fbtn_5").click(function () {
    $("#result").toggleClass("f5_blue");
  });
  $(".fbtn_6").click(function () {
    $("#result").toggleClass("f6_purple");
  });
  $(".fbtn_7").click(function () {
    $("#result").toggleClass("f7_lightgreen");
  });
  $(".fbtn_8").click(function () {
    $("#result").toggleClass("f8_red");
  });

// изменение размера по клику

  let count = 0;
  $(
    ".elem_1, .elem_2, .elem_3, .elem_5, .elem_6, .elem_7, .elem_8, .elem_9, .elem_10, .elem_11, .elem_12, .elem_13, .elem_14, .elem_16, .elem_17, .elem_18, .elem_19 "
  ).click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("resize");
    }
    if (count == 3) {
      $(this).addClass("resize2");
    }
  });
  $(".elem_15 ").click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("resizeguitar");
    }
    if (count == 3) {
      $(this).addClass("resizeguitar2");
    }
  });
  $(".elem_4 ").click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("resizemilk");
    }
    if (count == 3) {
      $(this).addClass("resizemilk2");
    }
  });

// перетаскивание

  $(".cnst").draggable();
});
$(document).ready(function () {
  $(".cnst").mouseup(function () {});
});

// попап

$(document).ready(function () {
  $(".btn_print").click(function () {
    if ($(".popup").hasClass("pop")) {
      $(".popup").removeClass("pop");
    }
  });
});