$(document).ready(function () {
    
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    var redfont = 255;
    var greenfont = 255;
    var bluefont = 255;
    $("#solid_color").addClass("active");


    $(".gcolor_palettes_conatiner").hide();

    $("#gradient_color").click(function (e) { 
        $(".gcolor_palettes_conatiner").show();
        $(".color_palettes_conatiner").hide();
        $("#gradient_color").addClass("active");
        $("#solid_color").removeClass("active");
        
        
    });
    $("#solid_color").click(function (e) { 
        $(".color_palettes_conatiner").show();
        $(".gcolor_palettes_conatiner").hide();
        $("#gradient_color").removeClass("active");
        $("#solid_color").addClass("active");

        
    });
    
    change_bgcolor();
    change_fcolor();
    $("#red").change(function (e) { 
        red = $("#red").val();
        change_bgcolor();
        
        
    });
    $("#green").change(function (e) { 
        green = $("#green").val();
        change_bgcolor();

        
    });
    $("#blue").change(function (e) { 
        blue = $("#blue").val();
        change_bgcolor();

    });
    $(".f-r").change(function (e) { 

        redfont = $(this).val();
        change_fcolor();
    });
    $(".f-g").change(function (e) { 

        greenfont = $(this).val();
        change_fcolor();

        
    }); $(".f-b").change(function (e) { 

        bluefont = $(this).val();
        change_fcolor();

        
    });
    
    function change_bgcolor() {
            
            
        var bgcolor = `rgb(`+red+`,`+green+`,`+blue+`)`;
        
    
        $(".color").css("background-color", bgcolor);

        $("#bgcolor").html(bgcolor);        
    }
    function change_fcolor() {
            
            
        var fontcolor = `rgb(`+redfont+`,`+greenfont+`,`+bluefont+`)`;
        
    
        $(".color").css("color", fontcolor);

        $("#fontcolor").html(fontcolor);        

        
    }




    function gc(){
        var letter="0123456789ABCDEF";
        var color="#";
        for(var i=0;i<6;i++){
            color += letter[Math.floor(Math.random()*16)];
        }
        return color;
    }

    

    var colorcounter = 1;
    for(var i= 0;i<=200;i++){
        var colorcode = gc();
        var code = `

            <div class="color_div">
                <div class="color_bg cp`+colorcounter+`">
                
                 
                </div>
                <p>`+colorcode+`</p>
            </div>

        `;

        var classname = `"cp`+colorcounter+`"`;
        

        $(".color_palettes").append(code);
        $(".cp"+colorcounter).css("background-color", colorcode);
        colorcounter+=1;
    }
    $("#cload_more").click(function (e) { 
        e.preventDefault();
        for(var i= 0;i<=200;i++){
            var colorcode = gc();
            var code = `
    
                <div class="color_div">
                    <div class="color_bg cp`+colorcounter+`">
                    
                     
                    </div>
                    <p>`+colorcode+`</p>
                </div>
    
            `;
    
            var classname = `"cp`+colorcounter+`"`;
            
    
            $(".color_palettes").append(code);
            $(".cp"+colorcounter).css("background-color", colorcode);
            colorcounter+=1;
        }
        
    });
    var gcolorcounter = 1;
    for(var i= 0;i<=200;i++){
        var gcolorcode1 = gc();
        var gcolorcode2 = gc();
        var gcode = `

            <div class="gcolor_div">
                <div class="gcolor_bg gp`+gcolorcounter+`">
                
                 
                </div>
                <p>`+gcolorcode1+` `+gcolorcode2+`</p>
            </div>

        `;

        var gcsscode = "linear-gradient(to top left, "+gcolorcode1+","+gcolorcode2 +")"
   

        $(".gcolor_palettes").append(gcode);
        $(".gp"+gcolorcounter).css("background", gcsscode);
        gcolorcounter+=1;
    }

    $("#gload_more").click(function (e) { 
        e.preventDefault();
        for(var i= 0;i<=200;i++){
            var gcolorcode1 = gc();
            var gcolorcode2 = gc();
            var gcode = `
    
                <div class="gcolor_div">
                    <div class="gcolor_bg gp`+gcolorcounter+`">
                    
                     
                    </div>
                    <p>`+gcolorcode1+` `+gcolorcode2+`</p>
                </div>
    
            `;
    
            var gcsscode = "linear-gradient(to top left, "+gcolorcode1+","+gcolorcode2 +")"
       
    
            $(".gcolor_palettes").append(gcode);
            $(".gp"+gcolorcounter).css("background", gcsscode);
            gcolorcounter+=1;
        }
    
      
    });


    
 
});