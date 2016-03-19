$(document).ready(function(){

  // var operators = {
  //   "+" : function(a, b) {return a + b},
  //   "-" : function(a, b) {return b - a},
  //   "x" : function(a, b) {return a * b},
  //   "/" : function(a, b) {return b / a}

  $(".button").on("click", function() {

    if ($(this).val() == "CE") {
      //$(this).val() == "";
      //$(".textbox").val("");
      //console.log($(this).val());
      //console.log($(".textbox").val().slice(0, -1));
      if ($(".textbox").val().length == "1") {
        $(".textbox").val("");
      } else {
        var temp = $(".textbox").val().slice(0, -1);
        $(".textbox").val(temp);
      }
    }

    else if ($(this).val() == "ON/c") {
      $(".textbox").val("");
    }

    else if ($(this).val() == "+/-") {
      $(".textbox").val("-"+$('.textbox').val());
    }

    else if ($(this).val() == "%") {
      $(".textbox").val($('.textbox').val()+$(this).val());
    }

    else if ($(this).val() == ":-)") {
      var emojis = ["(╯°□°)╯︵ ┻━┻", "ʘ‿ʘ", ">_>", "┬─┬ノ( º _ ºノ)", "(~_^)", "~(˘▾˘~)", "(¬‿¬)", "(ಥ﹏ಥ)"]
      var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      $(".textbox").val(randomEmoji);
    }

    else if ($(this).val() == "MRC" || $(this).val() == "M-" || $(this).val() == "M+" ) {
      //var span = document.getElementById("textbox-id");
      //span.style.fontSize = "8px"
      $(".textbox").val("Not available!");
    }

    else if ($(this).val() == "+" || $(this).val() == "-" || $(this).val() == "*" || $(this).val() == "/" ){
      //op = $(this).val();
      //console.log(op)
      // $(".textbox").val("");
      $(".textbox").val($('.textbox').val()+$(this).val());
      //total = operators[op](parseFloat(number), parseFloat(number2))
      //number2 = number;
      //number = 0;
      //number2 += parseFloat($(this).val())
    }

    else if ($(this).val() == "0" || $(this).val() == "1" || $(this).val() == "2" || $(this).val() == "3"
                || $(this).val() == "4" || $(this).val() == "5" || $(this).val() == "6" || $(this).val() == "7"
                || $(this).val() == "8" || $(this).val() == "9" || $(this).val() == ".") {
      $(".textbox").val($('.textbox').val()+$(this).val());
      //alert($(this).val());
      //$(".textbox").val($('.textbox').val()+$(this).val());
      //number += $(this).val();
      //console.log("number (before) is "+number);
      //total = operators[op](parseFloat(total), parseFloat(number))
      //console.log("total is: "+total)
    }

    else if ($(this).val() == "=") {
      //$(".textbox").val(parseFloat(number) + parseFloat(number2));
      // $(".textbox").val(operators[op](parseFloat(total), parseFloat(number)).toFixed(2));
      //$(".textbox").val(total);
      try {
        $(".textbox").val(eval($(".textbox").val()).toFixed(4));
      } catch (e) {
          $(".textbox").val("Error!");
      }
    }
  });
});
