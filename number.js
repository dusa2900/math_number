

 $(document).ready(
    function(){
      
        $('#fact').click(
            function()
            {
                let number=$('#number').val();
              
                
                $.get("http://numbersapi.com/"+number,
                function(view)
                {
                    $('#view').text(view);
                  console.log(view); 

                }
                
                )
            }
        )
       
      $('#mfact').click(
          function()
          {
              let number=$('#number').val();
              $.get("http://numbersapi.com/"+number+"/math",
              
              function(view)
              {
                  $('#view').text(view);
                  console.log(view);
              })
          }
      ) 

          $('#getdate').click(
              function()
              {
                  var day=$('#day').val();
                  var month=$('#month').val();

                  $.get("http://numbersapi.com/" +day+"/"+month+"/date"),
                  function(view)
                  {
                      $('#view').text(view)
                      console.log(view);
                  }
              }
          )


    }
)

   
       

    }
)

$(document).ready(
    function(){
      
        $('#getdate').click(
            function()
            {
                let Month=$('#month').val();
              
                
                $.get("http://numbersapi.com/"+Month,
                function(view)
                {
                    $('#month1').text(view);
                  console.log(view); 

                }
                
                )
            }
        )
   
       

    }
)
/**
 * 
 *   let day=$('#day').val();
                let month=$('#month').val();



             
 */