
$("#date").html(new Date());

    $(".save-btn").on("click", function() {
        event.preventDefault();
        var number = $(this).data("num")
        var task = $("#input" + number).val();
        if (task === "") {
            return;
            } else  { 
                localStorage.setItem('task' + number, JSON.stringify(task));
                renderTasks();
                }
    })

function renderTasks() {
    var storage = window.localStorage;

    if (storage.task9) {
    $("#input9").val(jQuery.parseJSON(storage.task9));
    }

    if (storage.task10) {
      $("#input10").val(jQuery.parseJSON(storage.task10));
    }

    if (storage.task11) {
      $("#input11").val(jQuery.parseJSON(storage.task11));
    }

    if (storage.task12) {
      $("#input12").val(jQuery.parseJSON(storage.task12));
      }

    if (storage.task13) {
        $("#input13").val(jQuery.parseJSON(storage.task13));
      }

    if (storage.task14) {
      $("#input14").val(jQuery.parseJSON(storage.task14));
      }

    if (storage.task15) {
        $("#input15").val(jQuery.parseJSON(storage.task15));
      }
    if (storage.task16) {
      $("#input16").val(jQuery.parseJSON(storage.task16));
      }

    if (storage.task17) {
      $("#input17").val(jQuery.parseJSON(storage.task17));
      }
} 
    renderTasks();

    let now = moment(); 
    let hour = now.get('hour');
    
    var hourArray = [$("#hour9"), $("#hour10"), $("#hour11"), $("#hour12"), $("#hour13"), $("#hour14"), $("#hour15"), $("#hour16"), $("#hour17")];

    function compareTime(){ 
      
      for ( i=0; i < hourArray.length; i++){
          if (parseInt(hourArray[i].text()) < parseInt(hour) ) {
            hourArray[i].parent().parent().css("background-color","#F0E68C");
            $(".to-to").css("background-color","#F0E68C");
          } else {
            hourArray[i].parent().parent().css("background-color","#FF7F50");
          }
        }
      } 

  compareTime(); 