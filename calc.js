$(document).ready(function() {

  var num = $('.num');
  var oper = $('.operator');
  var eq = $('#equals');
  var ac = $('#allClear');
  var del = $('#delete');
  var screen = $('#screen');
  
  var memory = [];

  num.click(function() {
    screen.append($(this).val());
    memory.push($(this).val())
  })
  
  oper.click(function() {
    screen.empty();
    memory.push($(this).val());
  })
  
  eq.click(function() {
    screen.empty();
    var ans = eval(memory.join(""));
    screen.append(ans);
  })
  
  ac.click(function() {
    memory = [];
    screen.empty();
  })
  del.click(function() {
    screen.empty();
  })

})