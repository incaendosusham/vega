$( document ).ready(function() {
    var fileName = '';
    $('#submit').on('click', function(event) {
        event.preventDefault();
        var fNameError, lNameError, emailError, addressError,ownWheel,fourWheel,publicWheel;
        var fName=$("#fname input").val();
        $('.error').html('');
        if(!fName) {
            fNameError =" Please enter your first name";
            $("#fname .error").html(fNameError);
        }

        var lName=$("#lname input").val();
        if(!lName){
            lNameError=" Please enter your last name";
            $("#lname .error").html(lNameError);
        }
        var email=$("#email input").val();
        if(!email){
            emailError="Please enter a valid email";
            $("#email .error").html(emailError);
        }
        var address=$("#address input").val();
        if(!address){
            addressError="Please enter your address";
            $("#address .error").html(addressError);
        }
        if(!fileName) {
            $('#resume .error').html('Please enter file');

        }

        if(fName && lName && address && email && fileName) {
            alert("form submitted");
        }
    })



    $('#resume input').on('change', function(ev) {
        var files = ev.target.files;
        fileName = files[0].name;
    });

   $('.test').click(function(){
    
    selected_value = $("input[name='my_options']:checked").val();
    if(selected_value=="own"){
      $("#check").show();
    }
    else
    {
$("#check").hide();
}

});
   
      $(".div_add").click(function() {
          div = document.createElement('div');
          $(div).addClass("inner").html("Live Young live free");
          $(".parent").append(div);
        });
 });

      


   //     $("#check").hide();
    
//    });
  //  $(".own").click(function(){
    //    $("#check").show();
//
//});
