var useTemplate= _.template($('#imgTmpl').html());
var tmplString = "";
var $overlay = $('<div id= "overlay"><div>');
var $img = $('<img width=300>');
var $caption = $('<h2></h2>');
var $button = $('<button type="button" name="return" id= "return"> <- Back To Album</button>');


$overlay.append($button);
$overlay.append($img);
$overlay.append($caption);
$("body").append($overlay);





$('section').on('click', 'a', function(event){
    event.preventDefault();
    console.log(this);
    var which = $(this).attr('name');
    var type = $(this).attr('class');
    console.log(which);
    console.log(type);

    if(type !== 'album' ){
          console.log("this is an image not an album");
          var link = $(this).children("img").attr('src');
          var caption= $(this).children("img").attr('alt');
          console.log(link);
          console.log(caption);
          $img.attr("src", link);
          $caption.text(caption);
          $overlay.show();
    }
    else{
          // console.log("selecting an album");
          $('header').removeClass('active');
          $('.sideBar').addClass('active');
          $('section').addClass('partial');
          $('section h1').addClass('active');
          // $('.albums').removeClass('active');
          $('section h1').text(which);
          // console.log("what is going on!!!");
          tmplString= "";
          albums[which].forEach(function(el){
            tmplString += useTemplate(el);
          });
          // console.log(tmplString);
          $('section li').remove();
          $('section').append(tmplString);
    }
  });


  $('aside').on('click', 'a', function(event){
    event.preventDefault();
    var which = $(this).attr('name');
    console.log(which);
    console.log(which.length);

    if(which === "Home"){
      $('header').addClass('active');
      $('.sideBar').removeClass('active');
      $('section').removeClass('partial');
      $('section h1').removeClass('active');
      // $('.albums').addClass('active');
      $('section li').remove();
      tmplString= "";
      albums[which].forEach(function(el){
        tmplString += useTemplate(el);
      });
      $('section').append(tmplString);
    }

    else{
          $('section h1').text(which);
          $('section li').remove();
          tmplString= "";
          albums[which].forEach(function(el){
            tmplString += useTemplate(el);
          });
          $('section').append(tmplString);
    }
  });

  $('#return').on('click', function(){
    $overlay.hide();
  });
