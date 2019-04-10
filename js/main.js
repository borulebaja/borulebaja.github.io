$(document).ready(function() {
$(".loader-container").fadeOut("slow");
});

new TypeIt("#typeit", {
   strings: ["Software Developer", "Sports Fanatic"],
   speed: 100,
   breakLines: false,
   autoStart: true,
   loop: true
});
