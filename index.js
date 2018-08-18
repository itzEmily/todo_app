$(document).ready(function() {
  $("#add-to-do-button").click(function(){
      var description = $("#new-todo-description")
      var pomodoroEstimate = $("#new-pomodoro-estimate")
      $("table").append('<tr><td><input type="checkbox"><a href="show.html">' + description.val() +' </a></td><td><span class="pomodoro-estimate">' + pomodoroEstimate.val() + ' promodoros' +'</span></td></tr>');
    description.val('');
    pomodoroEstimate.val('');
      
  });
});