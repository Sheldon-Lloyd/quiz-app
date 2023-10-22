$('#answers button').on('click', function() {
  $answer = $(this).text();
  $('#answers button').prop('disabled', true);
  $(this).prop('disabled', false);
  if($answer=='2010'){
    $(this).addClass('correct');
  }
  else{
    $(this).addClass('incorrect')
  }


});

$('#again').on('click', function() {
  $answer = $(this).text();
  $('#answers button').prop('disabled', false);

    $('#answers button').removeClass('correct');
  
  
    $('#answers button').removeClass('incorrect')
  


});
