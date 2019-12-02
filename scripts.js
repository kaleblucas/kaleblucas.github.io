window.addEventListener("load", function(){
    
    console.log('Window loaded and ready to handle events.');
   
    //declare elements
    let leftButton = document.getElementById("left-button");
    let middleButton = document.getElementById("middle-button");
    let rightButton = document.getElementById("right-button");
    let contentParagraph = document.getElementById("content-paragraph");
    let contentHeading = document.getElementsByTagName("h2")[0];
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
    };
    let mayaQuote = new Quote('Maya Angelou',`"If you don&#8217;t like something, change it.<br>
    &nbsp;&nbsp;If you can&#8217;t change it, change your attitude."`);
    let sheddQuote = new Quote('John A. Shedd', `"A ship in harbor is safe, but that is not what<br>&nbsp;&nbsp;ships are built for."`);
    let frostQuote = new Quote('Robert Frost',`"In three words I can sum up everything I've<br>&nbsp;&nbsp;learned about life: it goes on."`)
    let emersonQuote = new Quote('Ralph Waldo Emerson', `"Don&#8217;t go where the path may lead, go instead<br>&nbsp;&nbsp;where there is no path and leave a trail."`)
    let virgilQuote = new Quote('Virgil Abloh', `"My style is to never say no."<br>`)
    
    let quoteArray = [mayaQuote,sheddQuote,frostQuote,emersonQuote,virgilQuote];

    function randomSelection(arr){
        let index = Math.floor(Math.random()*arr.length);
        return arr[index];
     };

    function setQuote(quoteArr){
        let quoteTextElem = document.getElementById("quote-text");
        let quoteAuthorElem = document.getElementById("quote-author");
        let selectedQuote = randomSelection(quoteArr);
        quoteTextElem.innerHTML = selectedQuote.quote
        quoteAuthorElem.innerHTML = selectedQuote.author
    };

    //declare Content class and setContent() function
    class Content {
        constructor(heading, paragraph, image){
            this.heading = heading;
            this.paragraph = paragraph;
            this.image = image;
        }
    };

    function setContent(contentObject){
            contentHeading.innerHTML = contentObject.heading;
            contentParagraph.innerHTML = contentObject.paragraph;
            contentImage.style = "initial"
            contentImage.src = contentObject.image;
    };

    //live content
    let engagementContent = new Content(
        heading = "THE LOVER",
        paragraph = `Several years ago, I met the most amazing woman that I know. Seriously people, she&#8217;s awesome: a professional bad-ass, tasteful designer, and an unforgiving critic on anything I don&#8217;t do well. We were made for each other.<br><br>
            In 2018, we travelled across the Carribean Sea and landed in Aruba. Some sun-burned faces and sandy socks later, we were engaged. This is one of the few moments in my life that were planned appropriately. Thanks to that intuition, I have a short film documenting the occasion.<br><br>
            <a href='https://www.youtube.com/watch?v=kLQjj4FRUwg' target='_blank'>Check it out here.</a>`,
        image = "./engagement.jpg"
        ); 
    let sleepContent = new Content(
        heading = "THE SLEEPER",
        paragraph = `Other than work, sleep is the only single task that has decided to take up a third of my day. Not only that, but it even takes time straddling my thoughts throughout the rest of it. I cannot get a break with this concept! Regardless, it&#8217;s probably one of the most valuable aspects of my life, and it&#8217;s been with me from the start.<br><br>
            We&#8217;ve had some rocky roads on the journey, and it&#8217;s even plagued me with a few nightmares. There&#8217;s one nightmare where I try and escape the X-Men&#8217;s space shuttle with the help of a few of my super-friends, but we&#8217;ve never succeeded.<br><br>
            Just think, tonight I&#8217;ll be enjoying some sleep. Guaranteed.`,
        image = "./sleep.jpg"
        );
    let homeImprovementContent = new Content(
        heading = "THE HOME IMPROVER",
        paragraph =`In the Fall of 2019, my fianc&eacute; and I bought a house! After looking at all of our options, we decided on a house built in 1927!<br><br>
            Just for reference, in 1927:
            <ul>
                <li>construction of Mt. Rushmore began</li>
                <li>silent film &#8217;Metropolis&#8217; was released</li>
                <li>color television was invented</li>
                <li>our house was built!</li>
            </ul><br>
            When I&#8217;m not coding or working, you can typically find me trying to make improvements to our house. As it turns out, century-old houses require some upkeep.`,
        image = "./home_improvement.jpg"
        );
    let sleepButton = "REST";
    let engagementButton = "LOVE";
    let homeImprovementButton = "HOME";
    let liveButtons = [sleepButton,engagementButton,homeImprovementButton];
    let liveContent = [sleepContent, engagementContent, homeImprovementContent];

    //play content 
    let bikingContent = new Content(
        heading = "THE RIDER",
        paragraph = `I&#8217;ll admit, I can be a lazy exerciser. I discovered biking to be the happy medium between decent exercise and a sense of adventure.<br><br>
            Several summers ago, I decided to take my biking to the next level and commit to a 2-day venture bound by bike. I spent day after day training to ensure my body would be ready to sit in a saddle for an extended period of time.<br><br>
            I began the trek in Lafayette, Indiana and set sail for Chicago, Illinois.<br><br>
            After fourteen hours on the saddle, I landed in my destination and reaped my reward: a genuine Chicago slice of deep-dish pizza.`,
        image = "./biking.jpg"
    );
    let recordsContent = new Content(
        heading = "THE TUNES JAMMER",
        paragraph = `I spend the majority of my day with headphones on or records spinning. My father was a DJ, and I&#8217;ve taken inherited his love affair with music. Here are a few of my favorite slabs of wax that I&#8217;ve collected:
            <ul style='margin-left:-10px;'>
                <li>Tame Impala&mdash;<span class="album">Currents</span></li>
                <li>Johnny Guitar Watson&mdash;<span class="album">Ain&#8217;t That a Bitch</span></li>
                <li>Fugees&mdash;<span class="album">The Score</span></li>
                <li>Prince&mdash;<span class="album">Purple Rain</span></li>
                <li>Dizzy Gillespie&mdash;<span class="album">Night in Tunisia</span></li>
                <li>Count Basie&mdash;<span class="album">Evergreens</span></li>
                <li>Madvillain&mdash;<span class="album">Madvillainy</span></li>
                <li>Funkadelic&mdash;<span class="album">Maggot Brain</span></li>
                <li>Erykah Badu&mdash;<span class="album">World Wide Underground</span></li>
            </ul>`,
        image = "./records.jpg");
    let coffeeContent = new Content(
        heading = "THE COFFEE CONSUMER",
        paragraph = `Coffee is a link between cultures and a nostalgic aspect to many as its intrinsic feature is a chemical that wakes up most of America.<br><br>
            From single origins to experimental blends, I wake up every morning to a creative endeavor in brewing an adventurous cup of coffee, seeking a delicious symphony of flavors rather than a cacophony of them.<br><br>
            My at-home menu consists of pour-overs designed to discover the inherent flavors of an origin, or lattes whipped together through the espresso machine designed to explore the harsh nature of a proper espresso.<br><br>
            I have yet to find the &#8217;perfect cup&#8217;, but maybe one day I&#8217;ll come close.`,
            image = "./coffee.jpg");
    let bikingButton = "RIDE";
    let recordsButton = "LISTEN";
    let coffeeButton = "DRINK";
    let playButtons = [bikingButton, recordsButton, coffeeButton];
    let playContent = [bikingContent, recordsContent, coffeeContent];

    //work content
    let manosContent = new Content(
        heading = "THE BOTTLE ARTIST",
        paragraph = `In 2015, I was working for a small, specialty production shop called Mano&#8217;s Wine and Gifts. I crafted wine bottles that featured neat, custom designs. The &#8217;crafting&#8217; consisted of:
            <ul>
                <li>application of specialty film</li>
                <li>hand-etching the designs directly onto the bottle&#8217;s face</li>
                <li>hand-painting the bottles with bright, attractive palettes</li>
                <li>the gruesome process of cleaning each bottle</li>
            </ul>
            We ended up with some rather cool results at the end of the day, and I got to keep one of the bottles!`,
        image = "./manos.jpg"
    );
    let artAndFrameContent = new Content(
        heading = "THE PICTURE FRAMER",
        paragraph = `In 2016, I decided to stay creative, but move toward directly serving folks by elevating their prized-possessions. I spent a year as a picture framer at Art and Frame Warehouse. It was a pleasure to handle client&#8217;s priceless works and transform them into something conventionally presentable.<br><br>
            We worked on a range of items, from rare, one-of-a-kind band posters, to 18th-century firearms.<br><br>
            My time here taught valuable, introductory lessons toward effective communication, handling client needs, and how to do the job right the first time.`, 
        image = "./art_n_frame.jpg"
    );
    let finiteContent = new Content(
        heading = "THE DESIGNER",
        paragraph = `In 2017, I jumped career paths to something more intellectually-stimulating: mechanical drafting and design.<br><br>
            I&#8217;ve discovered drafting to be that mediating process that allows an engineer or architect to communicate with the shop or developer. There&#8217;s an intimacy that develops through the investigation of the ideas of the engineer and the translation of those ideas to model and drawing with CAD.<br><br>
            During my time here, I&#8217;ve gained a deeper connection and passion for things that I don&#8217;t have much relation to: industrial logging machines, food processing equipment, steel structures, and many more.`,
        image = "./finite.jpg"
    );
    let manosButton = "2015";
    let artAndFrameButton = "2016";
    let finiteButton = "2017";
    let workButtons = [manosButton,artAndFrameButton,finiteButton];
    let workContent = [manosContent,artAndFrameContent,finiteContent];

    //navlink functions
    function setNav(buttonArr){
        leftButton.innerHTML = buttonArr[0];
        middleButton.innerHTML = buttonArr[1];
        rightButton.innerHTML = buttonArr[2];
    }

    //executeTimeLineButton() function
    function executeTimeLineButton(button, index){
        if (button.innerHTML === liveButtons[index]){
            setContent(liveContent[index]);
        } else if (button.innerHTML === workButtons[index]){
            setContent(workContent[index]);
        } else if (button.innerHTML === playButtons[index]){
            setContent(playContent[index]);
        } 
    };

    //set button bold functions
    function setLeftButtonBold(){
        leftButton.style.fontWeight = "bold";
        middleButton.style.fontWeight = "normal";
        rightButton.style.fontWeight = "normal";
    };
    function setMiddleButtonBold(){
        leftButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "bold";
        rightButton.style.fontWeight = "normal";
    };
    function setRightButtonBold(){
        leftButton.style.fontWeight = "normal";
        middleButton.style.fontWeight = "normal";
        rightButton.style.fontWeight = "bold";
    };
    //begin html modifying code

    //set initial content
    setNav(liveButtons);
    setQuote(quoteArray);

    //addtnl event handling
    //timeline links

    leftButton.addEventListener("click", function(){
        setLeftButtonBold();
        executeTimeLineButton(leftButton,0);
    });

    middleButton.addEventListener("click", function(){
        setMiddleButtonBold();
        executeTimeLineButton(middleButton,1);
    });

    rightButton.addEventListener("click", function(){
        setRightButtonBold();
        executeTimeLineButton(rightButton,2);
    });

    //nav links
    liveButton.addEventListener("click", function(){
        setNav(liveButtons)
        setContent(liveContent[0]);
        setLeftButtonBold();
    });

    workButton.addEventListener("click", function(){
        setNav(workButtons)
        setContent(workContent[0]);
        setLeftButtonBold();
    });

    playButton.addEventListener("click", function(){
        setNav(playButtons)
        setContent(playContent[0]);
        setLeftButtonBold();
    });
});