$(document).ready(function () {
  // Handle certification item clicks
  $(".certification-item").click(function () {
    var pdfUrl = $(this).data("pdf");
    $("#pdfFrame").attr("src", pdfUrl);
    $("#pdfModal").modal("show");
  });

  // Set perfect square ratio for certification items
  function setImageRatio() {
    $(".certification-item").each(function () {
      var width = $(this).width();
      $(this).css("height", width + "px");

      // Ensure background image is centered and covers the area
      $(this).css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });
    });
  }

  // Call on page load
  setImageRatio();

  // Call on window resize
  $(window).resize(function () {
    setImageRatio();
  });
});
