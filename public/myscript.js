$(function() {

  $('.nav li').click(function(e){
    $('.nav li').attr('id', ''); //make all navtabs inactive
    $(this).attr('id', 'activetab'); //make the one we clicked active

    //hide all of the fieldsets
    $('fieldset').attr('class', 'hidden');

    whichitem=$(this).attr('title'); //get the title of the nav we clicked

    //make the class of what we cleared not hidden
    $("fieldset[title='"+whichitem+"']").attr('class', '');
  });

  $('.prev').click(function(e){
    var listItem = document.getElementById('activetab'); //find out which navtab is active
    whichOne=$('li').index(listItem); //get the index of the navtab

    $('.nav li').attr('id', ''); //make all the navtabs inactive
    $(".nav li:eq("+(whichOne-1)+")").attr('id', 'activetab'); //make previous tab active

    $('fieldset').attr('class', 'hidden'); //hide all the fieldsets
    $("fieldset:eq("+(whichOne-1)+")").attr('class', ''); //show the previous fieldset
  });



  $('.next').click(function(e){
    var listItem = document.getElementById('activetab'); //find out which navtab is active
    whichOne=$('li').index(listItem); //get the index of the navtab

    $('.nav li').attr('id', ''); //make all the navtabs inactive
    $(".nav li:eq("+(whichOne+1)+")").attr('id', 'activetab'); //make next tab active

    $('fieldset').attr('class', 'hidden'); //hide all the fieldsets
    $("fieldset:eq("+(whichOne+1)+")").attr('class', ''); //show the next fieldset
  });




  $("form#myform").on('submit',function(e) {
    e.preventDefault();
  	$('#message').empty(); //clear message when people resubmit
  	$('.alert').remove(); //remove alert when people resubmit

  	if (($("input:#myname").val() == "") || ($("input:#myemail").val() == "") || ($("input:#myurl").val() == "")) {

  		if (($("input:#myname").val() == "")) {
  			$("#message").append('<div class="message">Step 1: You forgot to include your name</div>').hide().fadeIn(200);
  			$("#myname").after('<div class="alert" id="alertname">Enter your name</div>');
  		}

  		if (($("input:#myemail").val() == "")) {
  			$("#message").append('<div class="message">Step 1: You forgot to include an email address</div>').hide().fadeIn(200);
  			$("#myemail").after('<div class="alert" id="alertemail">Enter an email address</div>');
  		}

  		if (($("input:#myurl").val() == "")) {
  			$("#message").append('<div class="message">Step 2: You forgot to include your web site URL</div>').hide().fadeIn(200);
  			$("#myurl").after('<div class="alert" id="alerturl">Enter a site URL</div>');
  		}

  		return false;
  	}
  	return true;
  });


});
