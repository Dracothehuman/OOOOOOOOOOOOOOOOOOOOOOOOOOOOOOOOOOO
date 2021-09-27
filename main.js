function soundS()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8LZC512lP/model.json", modalReady)
}
function modalReady()
{
    classifier.classify(gotResult);
}
function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;

        document.getElementById("sound").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuarcy - "+(results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("sound").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById("Mewtwo");
        img2 = document.getElementById("Houndoom");
        img3 = document.getElementById("Sceptile");
        img4 = document.getElementById("Rayquaza");

        if(results[0].label == "EEEEEEEEEEEE"){
            img1.src = "Mewtwo_Gif.gif";
            img2.src = "Houndoom1.png";
            img3.src = "sceptile.png";
            img4.src = "Rayquaza.png";
        }
        else if(results[0].label =="Punch"){
            img1.src = "Mewtwo.png";
            img2.src = "Houndoom_Gif.gif";
            img3.src = "sceptile.png";
            img4.src = "Rayquaza.png";
        }
        else if(results[0].label =="Snap"){
            img1.src = "Mewtwo.png";
            img2.src = "Houndoom1.png";
            img3.src = "sceptile_gif.gif";
            img4.src = "Rayquaza.png";
        }
        else{
            img1.src = "Mewtwo.png";
            img2.src = "Houndoom1.png";
            img3.src = "sceptile.png";
            img4.src = "RayGif.gif";
        }

    }
}
