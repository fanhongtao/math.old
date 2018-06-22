$(document).ready(function() {
  $("#calc1").click(function() {
    var x1 = parseFloat($("#x1").val());
    var x2 = parseFloat($("#x2").val());
    var y1 = parseFloat($("#y1").val());
    var y2 = parseFloat($("#y2").val());
    var y21 = y2 - y1;
    var x21 = x2 - x1;
    if ($('#type option:selected').text() == "x3") {
      var x3 = parseFloat($("#num3").val());
      var y3 = ((y2 - y1) * (x3 - x2))/(x2 - x1)  + y2;
      $("#result").val(y3);
    } else {
      var y3 = parseFloat($("#num3").val());
      var x3 = ((y3 - y2) * (x2 - x1))/(y2 - y1)  + x2;
      $("#result").val(x3);
    }
  });

  $("#calc2").click(function() {
    var x1 = parseFloat($("#c2x1").val());
    var x2 = parseFloat($("#c2x2").val());
    var y1 = parseFloat($("#c2y1").val());
    var y2 = parseFloat($("#c2y2").val());
    var y21 = y2 - y1;
    var x21 = x2 - x1;
    var start = (x1 > x2) ? x2 : x1;
    var stop = (x1 > x2) ? x1 : x2;
    var result = "";
    for (var x3 = start+1; x3 < stop; x3++) {
      var y3 = ((y2 - y1) * (x3 - x2))/(x2 - x1)  + y2;
      if (Number.isInteger(y3)){
        result = result +　"(" + x3 + "," + y3 + ")\n"
      }
    }
    if (result == "") {
      result = "没有符合条件的点。"
    }
    $("#result2").val(result);
  });
});