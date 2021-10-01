
$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});

$(function () {
  $("#datepicker-to").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});
(function () {
  "use strict";

  $(".input-file").each(function () {
    var $input = $(this),
      $label = $input.next(".js-labelFile"),
      labelVal = $label.html();

    $input.on("change", function (element) {
      var fileName = "";
      if (element.target.value)
        fileName = element.target.value.split("\\").pop();
      fileName
        ? $label.addClass("has-file").find(".js-fileName").html(fileName)
        : $label.removeClass("has-file").html(labelVal);
    });
  });
})();
(function () {
  "use strict";

  $(".input-file-csv").each(function () {
    var $input = $(this),
      $label = $input.next(".js-labelFile"),
      labelVal = $label.html();

    $input.on("change", function (element) {
      var fileName = "";
      if (element.target.value)
        fileName = element.target.value.split("\\").pop();
      fileName
        ? $label.addClass("has-file").find(".js-fileName").html(fileName)
        : $label.removeClass("has-file").html(labelVal);
    });
  });
})();
