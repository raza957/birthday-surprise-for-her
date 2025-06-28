$(document).ready(function () {
  $("#wishButton").click(function () {
    // 1. Hidden message dikhana
    $("#specialWish").toggle();

    // 2. Sound play karna
    $("#birthdaysound")[0].play();

    // 3. Heavy Confetti effect (zyada particles)
    confetti({
      particleCount: 300,
      spread: 120,
      origin: { y: 0.6 }
    });

    // 4. Optional: Button light effect
    $("#wishButton").addClass("shiny");
    setTimeout(function () {
      $("#wishButton").removeClass("shiny");
    }, 3000);
  });
});

document.getElementById("alertButton").addEventListener("click", function () {
  Swal.fire({
    title: 'Happy Birthday! 🎂',
    text: 'Here’s a little surprise for you dear ranjna!',
    imageUrl:'images/img2.png',
    background: '#f0f8ff',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Birthday Surprise dear ranjna',
    confirmButtonText: 'Thank you!'
  });
});
$("h1").click(function () {
  $(this).css("color", "rgb(71, 175, 107)");
  $(this).css("text-shadow", "2px 2px 4px rgba(17, 95, 205, 0.5)");
  $(this).css("font-weight", "bold");
  $(this).animate({toggle: "highlight"}, 1000);
});
$(document).ready(function () {
  $("#alertButton").hover(
    function () {
      $(this).css("background-color", "rgb(0, 0, 200)");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "navy");
      $(this).css("color", "white");
    }
  );
});
$(document).ready(function () {
  $("#wishButton").hover(
    function () {
      $(this).css("background-color", "rgb(0, 128, 0)");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "green");
      $(this).css("color", "white");
    }
  );
});
$(document).ready(function () {
  $("p").hover(
    function () {
      $(this).css("color", "rgb(36, 179, 211)");
      $(this).css("font-weight", "bold");
    },
    function () {
      $(this).css("color", "rgba(8, 135, 190, 0.76)");
      $(this).css("font-weight", "normal");
      }
    );
  
    $("h1").hover(
      function () {
        $(this).css("color", "rgb(11, 58, 67)");
        $(this).css("text-shadow", "2px 2px 4px rgba(22, 158, 222, 0.5)");
      },
      function () {
        $(this).css("color", "hsl(240, 7.70%, 5.10%)");
        $(this).css("text-shadow", "none");
      }
    );
  });

$(document).ready(function () {
  $("body").css("background-color", "rgb(255, 255, 0)");
  $("body").css("font-family", "Arial, sans-serif");
  $("body").css("margin", "0");
  $("body").css("padding", "20px");
});


