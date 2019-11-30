let text2001 = "This is the text that should appear for the year 2001. This is the text that should appear for the year 2001. This is the text that should appear for the year 2001. This is the text that should appear for the year 2001. This is the text that should appear for the year 2001."
let text1999 = "This is the text that should appear for the year 1999. This is the text that should appear for the year 1999. This is the text that should appear for the year 1999. This is the text that should appear for the year 1999. This is the text that should appear for the year 1999."
let text2003 = "This is the text that should appear for the year 2003. This is the text that should appear for the year 2003. This is the text that should appear for the year 2003. This is the text that should appear for the year 2003. This is the text that should appear for the year 2003."
let heading2001 = "THE 2001"
let heading1999 = "THE 1999"
let heading2003 = "THE 2003"

window.addEventListener("load", function(){
    console.log('Window loaded and ready to handle events.')
    let earlyButton = document.getElementById("early-button");
    let middleButton = document.getElementById("middle-button");
    let recentButton = document.getElementById("recent-button");
    let content = document.getElementById("content-paragraph");
    let contentImage = document.getElementById("content-image");
    let contentHeading = document.getElementsByTagName("h2")[0];

    content.innerHTML = text1999;
    contentHeading.innerHTML = heading1999;
    contentImage.src = "./engagement.jpg";
    earlyButton.style.fontWeight = "bold";

    earlyButton.addEventListener("click", function(){
        earlyButton.style.fontWeight = "bold";
        middleButton.style.fontWeight = "normal";
        recentButton.style.fontWeight = "normal";
        content.innerHTML = text1999;
        contentImage.src = "./engagement.jpg";
        contentHeading.innerHTML = heading1999;
        
    });
    middleButton.addEventListener("click", function(){
        earlyButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "bold";
        recentButton.style.fontWeight = "normal";
        content.innerHTML = text2001;
        contentImage.src = "./home_improvement.jpg";
        contentHeading.innerHTML = heading2001;
    });
    recentButton.addEventListener("click", function(){
        earlyButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "normal";
        recentButton.style.fontWeight = "bold";
        content.innerHTML = text2003;
        contentImage.src = "./sleep.jpg";
        contentHeading.innerHTML = heading2003;
    });
});