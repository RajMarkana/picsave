$(document).ready(function () {


    $("#totalimg").hide();

    var i = 0;

    $("#black").click(function (e) {

        if (i == 0) {

            $("body").css("background-color", "#232b30");
            $(".search_container").css("color", "white");
            $(".bw").css("color", "whitesmoke");
            $(".theme").find("img").attr("src", "Icon/light.png");
            i = 1;

        }
        else {
            $("body").css("background-color", "whitesmoke");
            $(".search_container").css("color", "black");
            $(".bw").css("color", "grey");

            $(".theme, img").find("img").attr("src", "Icon/dark.png");


            i = 0;

        }


    });
});
$("#search").keypress(function (e) {
    if (e.which == 13) {
        SearchPhoto(1);
    }
});
$(".prevnext").hide();

var pgno = 1;

function SearchPhoto(pgno1) {

    if (pgno1 == 1) {
        pgno = 1;
    }
    $('#topscroll').click();
    $("#pageno").html(pgno);


    console.log(pgno + "pg")

    $("#images").empty();
    if ($('#images').is(':empty')) {



        let empty = `
            <h1 id="msg">Loading...</h1>
        `
        $("#images").append(empty);
        $(".prevnext").hide();

    }


    let id = "[YOUR API KEY]"
    let search = $("#search").val();
    let url = "https://api.unsplash.com/search/photos/?query=" + search + "&client_id=" + id + "&page=" + pgno + "&per_page=30";

    fetch(url)
        .then(function (data) {
            return data.json();

        })
        .then(function (data) {
            console.log(data);

            if (data.total == 0) {
                $("#images").empty();

            }
            else {
                $("#images").empty();


                data.results.forEach(photo => {

                    $("#totalimg").show();

                    let result = `
                        
                        <div class="pic">

                        <img src="${photo.urls.regular}" > 

                                <a href="${photo.links.download}&force=true"><img src="Icon/downloadw.png"></a>
                        
                                <b>❤️${photo.likes}</b>
                         
                        </div>
                        `
                    $("#images").append(result);

                    //image url regular to full+ &w=700&h=300
                    // download link midify as above




                });
                $(".prevnext").show();
                $("#totalimg").show();
                $("#totalimg").html("Showing Results : " + data.total);
                window.total_page = data.total_pages;


                if (pgno == total_page) {
                    $("#next").hide();
                }
                else {
                    $("#next").show();

                }
                if (pgno == 1) {
                    $("#prev").hide();

                }
                else {
                    $("#prev").show();

                }






            }


            if ($('#images').is(':empty')) {

                $("#totalimg").hide();

                if (search == "") {
                    let empty = `
                <h1 id="msg" class="bw">Write Someting to Search...!😕</h1>
                
                `
                    $("#images").append(empty);
                }
                else {

                    let empty = `
                    <h1 id="msg" class="bw">`+ search + ` Not Found...!🧐</h1>
                `
                    $("#images").append(empty);

                }
                $(".prevnext").hide();

            }


            $(".pic a").hide();
            $(".pic .author").hide();
            $(".pic").hover(function (e) {
                $(".pic a").hide();
                $(".pic .author").hide();

                $(this).find("a").fadeIn();
                $(this).find(".author").fadeIn();


            });


        })



}
$("#next").click(function (e) {


    if (pgno <= total_page) {


        pgno++;
        SearchPhoto(pgno)


    }

});
$("#prev").click(function (e) {

    if (pgno >= 1) {


        pgno--;
        SearchPhoto(pgno)



    }

});
$("#topscroll").hide();
