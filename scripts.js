window.addEventListener("load", function(){
    
    console.log('Window loaded and ready to handle events.')
   
    //declare elements
    let leftButton = document.getElementById("left-button");
    let middleButton = document.getElementById("middle-button");
    let rightButton = document.getElementById("right-button");
    let contentParagraph = document.getElementById("content-paragraph");
    let contentHeading = document.getElementsByTagName("h2")[0];
    let content = document.getElementById("content");
    let contentImage = document.getElementById("content-image");;
    let liveButton = document.getElementById("live-button");
    let workButton = document.getElementById("work-button");
    let playButton = document.getElementById("play-button");
    
    //declare quotes and setQuote() function
    class Quote {
        constructor(author, quote){
            this.author = "&mdash;"+author;
            this.quote = quote;
        }        
    }
    let mayaQuote = new Quote('Maya Angelou',`"If you don&#8217;t like something, change it.<br>
    &nbsp;&nbsp;If you can&#8217;t change it, change your attitude."`);
    
    let quoteArray = [mayaQuote];

    function setQuote(quoteArr){
        let quoteTextElem = document.getElementById("quote-text");
        let quoteAuthorElem = document.getElementById("quote-author");
        quoteTextElem.innerHTML = quoteArr[0].quote
        quoteAuthorElem.innerHTML = quoteArr[0].author
    }

    //declare Content class and setContent() function
    class Content {
        constructor(heading, paragraph, image){
            this.heading = heading;
            this.paragraph = paragraph;
            this.image = image;
        }
    }

    function setContent(contentObject){
            contentHeading.innerHTML = contentObject.heading;
            contentParagraph.innerHTML = contentObject.paragraph;
            contentImage.src = contentObject.image;
    }
    //live content
    let engagementContent = new Content(heading = "THE ENGAGEMENT",paragraph = "Several years ago, I met the most amazing woman that I know. Seriously people, she&#8217;s awesome: a professional bad-ass, tasteful designer, and an unforgiving critic on anything I don&#8217;t do well. We were made for each other. <br><br>In 2018, we travelled across the Carribean Sea and landed in Aruba. Some sun-burned faces and sandy socks later, we were engaged. This is one of the few moments in my life that were planned appropriately. Thanks to that intuition, I have a short film documenting the occasion. <a href='https://www.youtube.com/watch?v=kLQjj4FRUwg'>Check it out here.</a>", image = "./engagement.jpg"); 
    let sleepContent = new Content(heading = "SLEEP", paragraph = "Other than work, sleep is the only single task that has decided to take up a third of my day. Not only that, but it even takes time straddling my thoughts throughout! I cannot get a break with this concept! Regardless, it&#8217;s probably one of the most valuable aspects of my life, and it&#8217;s been with me from the start. <br><br>We&#8217;ve had some rocky roads on the journey, and it&#8217;s even plagued me with a few nightmares. There&#8217;s one nightmare where I try and escape The Blackbird, the X-Men&#8217;s iconic space shuttle, with the help of a few of my super-friends, but we&#8217;ve never succeeded. <br><br>  Just think, tonight I&#8217;ll be enjoying some sleep. Guaranteed.", image = "./sleep.jpg");
    let homeImprovementContent = new Content(heading = "HOME IMPROVEMENT",paragraph =undefined);
    let sleepButton = "REST"
    let engagementButton = "LOVE"
    let homeImprovementButton = "HOME"
    // let liveButtons = [sleepButton,engagementButton,homeImprovementButton]
    //play content 
    let bikingContent = new Content(heading = "THE RIDE",paragraph = undefined);
    let recordsContent = new Content(heading = "THE TUNES",paragraph = undefined);
    let coffeeContent = new Content(heading = "ESPRESSO",paragraph = undefined);
    let bikingButton = "RIDE"
    let recordsButton = "LISTEN"
    let coffeeButton = "DRINK"
    // let playButtons = [bikingButton, recordsButton, coffeeButton]
    //work content
    let manosContent = new Content(heading = "BOTTLE ARTIST",paragraph = undefined);
    let artAndFrameContent = new Content(heading = "PICTURE FRAMING",paragraph = undefined);
    let finiteContent = new Content(heading = "MECHANICAL DESIGNER",paragraph = undefined);
    let manosButton = "2015"
    let artAndFrameButton = "2016"
    let finiteButton = "2017"
    // let workButtons = [manosButton,artAndFrameButton,finiteButton];

    //begin html modifying code

    //set initial content
    setNavToLive();
    contentParagraph.innerHTML = (`
        <p id="quote">
            <span id="quote-text"></span><br>
            <span style="float:right;" id="quote-author"></span>
        </p>
    `); 
    contentImage.src = "./quote_image.png";
    setQuote(quoteArray);

    //navlink functions
    function setNavToLive(){
        leftButton.innerHTML = sleepButton;
        middleButton.innerHTML = engagementButton;
        rightButton.innerHTML = homeImprovementButton;
    }
    function setNavToWork(){
        leftButton.innerHTML = manosButton;
        middleButton.innerHTML = artAndFrameButton;
        rightButton.innerHTML = finiteButton;
    }
    function setNavToPlay(){
        leftButton.innerHTML = bikingButton;
        middleButton.innerHTML = recordsButton;
        rightButton.innerHTML = coffeeButton;
    }


    //addtnl event handling
    //timeline links
    leftButton.addEventListener("click", function(){
        leftButton.style.fontWeight = "bold";
        middleButton.style.fontWeight = "normal";
        rightButton.style.fontWeight = "normal";
        if (leftButton.innerHTML === sleepButton){
            setContent(sleepContent);
        } else if (leftButton.innerHTML === bikingButton){
            setContent(bikingContent);
        } else if (leftButton.innerHTML === manosButton){
            setContent(manosContent);
        }
        
        
    });
    middleButton.addEventListener("click", function(){
        leftButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "bold";
        rightButton.style.fontWeight = "normal";
        if (middleButton.innerHTML === engagementButton){
            setContent(engagementContent);
        } else if (middleButton.innerHTML === artAndFrameButton){
            setContent(artAndFrameContent);
        } else if (middleButton.innerHTML === recordsButton){
            setContent(recordsContent);
        }
    });
    rightButton.addEventListener("click", function(){
        leftButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "normal";
        rightButton.style.fontWeight = "bold";
        if (rightButton.innerHTML === homeImprovementButton){
            setContent(homeImprovementContent);
        } else if (rightButton.innerHTML === finiteButton){
            setContent(finiteContent);
        } else if (rightButton.innerHTML === coffeeButton){
            setContent(coffeeContent);
        }
    });

    //nav links
    liveButton.addEventListener("click", function(){
        setNavToLive()
        setContent(sleepContent);
    });
    workButton.addEventListener("click", function(){
        setNavToWork()
        setContent(manosContent);
    });
    playButton.addEventListener("click", function(){
        setNavToPlay()
        setContent(bikingContent);
    });
});