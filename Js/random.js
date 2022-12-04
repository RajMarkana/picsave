$(document).ready(function () {

    var i = 0;
    $("#black").click(function (e) {

        if (i == 0) {

            $("body").css("background-color", "#232b30");
            $(".search_container").css("color", "white");
            $(".bw").css("color", "whitesmoke");
            $(".theme").find("img").attr("src", "icon/light.png");
            i = 1;

        }
        else {
            $("body").css("background-color", "whitesmoke");
            $(".search_container").css("color", "black");
            $(".bw").css("color", "grey");

            $(".theme, img").find("img").attr("src", "icon/dark.png");


            i = 0;

        }


    });

    function callpic() {


        let id = "eI4ensPee7LiZ2boqvI_aFgzXRFdjyBTDJnClUEVkzI"
        let url = "https://api.unsplash.com/photos/random/?&client_id=" + id + "";

        fetch(url)
            .then(function (data) {
                return data.json();

            })
            .then(function (data) {
                console.log(data);

                let result = `
            <img src="${data.links.download}"' id='random_img'><br>
            <div class="random_img_option">

            <a  href="${data.links.download}&force=true"'><i class="fa fa-download"></i></a>
            <p>❤️${data.likes}</p>
            <button id="random_btn"><i class="fas fa-shuffle"></i></button>


            </div>
            `;
                $(".random_image").empty();
                $(".random_image").html(result);
            })
    }

    callpic()


    $("#random_btn").on("click", function () { callpic(); });

    $(".random_image").on("click", "#random_btn", function () {
        callpic();
    });













});