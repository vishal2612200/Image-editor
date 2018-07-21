/*function filtered(){
    // var iblur = $('#blurinput').val();
    var iblur = document.getElementById("blurinput").value;
    //var pan1 = $('#blur').val();
    var icontrast = document.getElementById("contrastinput").value;
    //var  = $('#blur').val();
    //var ibrightness = document.getElementById("brightnessinput").value;
    var igrayscale = document.getElementById("grayscaleinput").value;
    var iHue = document.getElementById("Hueinput").value;
    var iinvert = document.getElementById("invertinput").value;
    var isaturate = document.getElementById("saturateinput").value;
    var isepia = document.getElementById("sepiainput").value;
    var iopacity = document.getElementById("opacityinput").value;
    var ixshadow = document.getElementById("x-shadowinput").value;
    var iyshadow = document.getElementById("y-shadowinput").value;
    var icolor = document.getElementById("colorinput").value;
    var ispread = document.getElementById("spreadinput").value;

    //var img =document.getElementById("img1");
    //img.css({
    //  webkitfilter: 'blur('+iblur+'px) contrast('+icontrast+'px) brightness('+ibrightness+'px) opacity('+iopacity+'px)',
    // filter: 'blur('+iblur+'px) contrast('+icontrast+'px) brightness('+ibrightness+'px) opacity('+iopacity+'px)'
    //  Mozfilter: 'blur('+iblur+'px) brightness('+icontrast+'px) brightness('+ibrightness+'px) opacity('+iopacity+'px)'

    //});
    //var img =document.getElementById("img1");
    var img = $("#img1");
     img.css({
        WebkitFilter: 'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)',
        
       MozFilter: 'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)',
        
      filter:'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)'
    });
    //});
    $('#blur').html(iblur+'px');
};*/

function filtered() {
    var iblur = $('#blurinput').val();
    var ibrightness = $('#brightnessinput').val();
    var icontrast = $('#contrastinput').val();

    var igrayscale = $('#grayscaleinput').val();
    var iHue = $('#Hueinput').val();
    var iinvert = $('#invertinput').val();
    var iopacity = $('#opacityinput').val();
    var isaturate = $('#saturateinput').val();
    var isepia = $('#sepiainput').val();
    var ixshadow = $('#x-shadowinput').val();
    var iyshadow = $('#y-shadowinput').val();
    var ispread = $('#spreadinput').val();
    var icolor = $('#colorinput').val();



    var img = $("#img1");
    
   
     img.css({
       WebkitFilter: 'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)',
        
       MozFilter: 'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)',
        
      filter:'blur('+iblur+'px) brightness('+ibrightness+'%) contrast('+icontrast+'%) drop-shadow('+ixshadow+'px '+iyshadow+'px '+ispread+'px '+icolor+') grayscale('+igrayscale+'%) hue-rotate('+iHue+'deg) invert('+iinvert+'%) opacity('+iopacity+'%) saturate('+isaturate+'%) sepia('+isepia+'%)'
      });


    $('#p1').html(iblur+'px');
    $('#p2').html(ibrightness+'%');
    $('#p3').html(icontrast+'%');
  
    $('#p5').html(igrayscale+'%');
    $('#p6').html(iHue+'deg');
    $('#p7').html(iinvert+'%');
    $('#p8').html(iopacity+'%');
    $('#p9').html(isaturate+'%')
    $('#p10').html(isepia+'%')
  }
  