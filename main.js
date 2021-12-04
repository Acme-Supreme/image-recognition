Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot(){
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_url+'"/>'
    });
}
console.log(ml5.version)    
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aLYzwTeHe/model.json',modelLoaded);
function modelLoaded(){
console.log("modelisLoaded")
}
function check(){
    Img=document.getElementById("captured_image");
    classifier.classify(Img,Get_Result);
}

function Get_Result(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object").innerHTML=result[0].label;
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
    
}