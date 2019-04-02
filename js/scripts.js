$(document).ready(function(){
  $("button#submit").click(function(event) {
    var finalNum = parseInt($("input#final").val());
    console.log(finalNum);
    var countBy = parseInt($("input#numberMult").val());
    console.log(countBy);


$("#userResult").append(function() {
  var i = 0;
  for (var i = 0; i < finalNum; i + countBy) {
    i = i + countBy;
    console.log(i);
    // return;

}

  });
  event.preventDefault();
  });

});
