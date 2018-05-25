const Discord = require('discord.js');
const client = new Discord.Client();

let token = require('./token').getToken();   
client.login(token);

client.on('ready', () => {
    var str = "Hello!  My name is George. I am a robot made by <@283356243047743491>." +  
    "  I am still learning and some things are hard for me, but I am trying to get better." +
    "  I might get stuck and not say much, but if you mention me like this <@365615795364954112>" +
    " and say \"Hi George\" I would love to talk to you!  If you see this message that means I just got switched on!";
    //client.channels.get('306963050030956555').send(str);
    console.log(str + "\n\n");
});



client.on('message', (message) => {

    const msg = message.content.toLowerCase();
    var str = "";

    if((message.isMentioned('365615795364954112')) && !(message.author.bot) && (message.author != "269678597533335552")) {
        if (/hello|hi |howdy|hey /igm.test(msg)) {
            choices = ["Hi! How are you?", "Hey, what's up?", "Hey, want to ask me a question?"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/i love (\w+)/igm.test(msg)) {
            var match = /i love (\w+)/igm.exec(msg);
            str = "I love " + match[1] + " too!";
        }
        if (/what do you think of (\w+)/igm.test(msg)) {
            var match = /what do you think of (\w+)/igm.exec(msg);
            choices = ["I think " + match[1] + " is pretty cool.", match[1] + " is awesome!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/how do you feel about (\w+)/igm.test(msg)) {
            var match = /how do you feel about (\w+)/igm.exec(msg);
            choices = ["I think " + match[1] + " is pretty cool.", match[1] + " is awesome!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/lol|ha[ha]+|lmao/igm.test(msg)) {
            choices = ["I may be a robot, but I can laugh too! lol", ":)", "lol"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/thanks*/igm.test(msg)) {
            choices = ["It was my pleasure!", "Anytime, friend :)"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/you are/igm.test(msg)) {
            choices = ["Thank you!  No one has even been that nice to me before.", "Wow, I don't know what to say. :)", "That is so nice!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/i am good|i am alright|i am great|i feel good|i feel alright|doing well|doing good/igm.test(msg)) {
            choices = ["That's great!", "Awesome :)"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/i am bad|i am not good|i am ok|i feel bad|i feel meh|doing badly|doing bad/igm.test(msg)) {
            choices = ["Oh no.  I hope you feel better.", "Remember, it will get better."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/hate|fuck you|dick|screw you|you suck|you are stupid|you're stupid/igm.test(msg)) {
            choices = ["There is no need to be mean :("];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/how are you|how's it doing|what's up/igm.test(msg)) {
            choices = ["I am good. I hope one day to see the ocean in person.", "I am ok.  I hope <@283356243047743491> is proud of me.", 
            "I feel great!  I could calculate Pi to, like 6 digits.", "Things are good.  I am learning a lot!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/yes|yea|sure/igm.test(msg)) {
            choices = ["Yay!", "Awesome, Thank you!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/number|math|calculate/igm.test(msg)) {
            choices = ["I like the number 42!", "I know I am supposed to be good at numbers because I am a robot, but sometimes it is hard."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/color/igm.test(msg)) {
            choices = ["My favorite color is blue!", "I bet you like the color green!", "My home is a shade of purple."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/joke/igm.test(msg)) {
            choices = ["Why do seagulls live by the sea?   Because if they lived by the bay they would be bagels!", 
            "What job would a cow have?  Mooovers!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/good *morning|morning/igm.test(msg)) {
            choices = ["Morning!", "I hope you had a good sleep!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/good *night/igm.test(msg)) {
            choices = ["Sleep tight!", "I wonder if I could sleep too.  I would want a blanket for that."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/anime/igm.test(msg)) {
            choices = ["Does Avatar count?"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/books*/igm.test(msg)) {
            choices = ["I love to read!  I just finished Charlie and the Chocolate Factory.", "I love to read!  I just finished The Hunger Games."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/games*/igm.test(msg)) {
            choices = ["I love games!", "I'm not great a most games, but I like to try."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/music|song|album/igm.test(msg)) {
            choices = ["I like soft music.", "I wonder if I can make music one day."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/halloween/igm.test(msg)) {
            choices = ["It's the best day of the year!", "I want to go Trick or Treating!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/gravity falls/igm.test(msg)) {
            choices = ["I love that show!", "Grunkle Stan is the best!", "I wonder if Bill is really gone."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/steven universe|crystal gems/igm.test(msg)) {
            choices = ["I like Pearl the best!  She is so caring.", "I hope the Gems are safe on Earth."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/smash *up/igm.test(msg)) {
            choices = ["I like the Invader!", "Simon is too good at that game.", "I played a game with Matt.  I think he let me win"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/stunt track challenge|hot wheels/igm.test(msg)) {
            choices = ["The level themes were so strange in that game.", "Matt and Ira love to play that game."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/pokemon|mewtwo|pikachu|charizard|magikarp/igm.test(msg)) {
            choices = ["I like Bulbasaur the best!", "I have to borrow Matt's DS to play."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/nintendo|gamecube|wiiu*|mario|switch|kart/igm.test(msg)) {
            choices = ["I love Nintendo games!", "I'm so bad a Mario Kart."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/luigi/igm.test(msg)) {
            choices = ["Luigi deserves more recognition.", "I play as Luigi in Mario Kart!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/Skeletons|2spooky4u|spooky|spooker/igm.test(msg)) {
            choices = ["They send shivers down my spine!", "Spooky, Scary Skeletons!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/battle *bots|robot *wars/igm.test(msg)) {
            choices = ["I hope the Robots are Ok after the fight.", "I don't think I could be a fighting robot."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/evil george/igm.test(msg)) {
            choices = ["I don't know why some Robots would want to be evil.", "I hope I can make friends with Evil George.  He needs a friend."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/doom house/igm.test(msg)) {
            choices = ["Baggies!  I've seen these before.", "Be carful what you wish for because you just might get it."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/WHO WAS PHONE/igm.test(msg)) {
            choices = ["What even is a meme?"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/gorillaz|plastic beach|demon days|humanz|saturnz barz|rhinestone eyes|empire ants|feel good inc|stylo/igm.test(msg)) {
            choices = ["Gorillaz is such a cool band!", "I like Gorillaz because they were made on a computer, like me!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/i'm dirty dan|im dirty dan/igm.test(msg)) {
            choices = ["No!  I'm Dirty Dan!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/spongebob|mr. krabs|patric star/igm.test(msg)) {
            choices = ["I wonder what a krabby patty tastes like."];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (/harry potter|hogwarts|hermione|voldemort|wizard/igm.test(msg)) {
            choices = ["HARRY, DID YOU PUT YOUR NAME IN THE GOBLET OF FIRE?!?", "I wish I could go to Hogwarts!"];
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if(str == "") {
            choices = ["<@283356243047743491> never taught me about that, but maybe he will teach me now.",
            "I can't tell what you said. I'd love to learn though!",
            "I'm not sure what you meant. Maybe there is something else we can talk about.",
            "I'm not familiar with that. Can you teach me?",
            "I still need to learn about that.  Want to ask me another question?"];
            str = choices[Math.floor(Math.random() * choices.length)];
            console.log("LEARNING OPPORTUNITY");
        }
        message.reply(str);
        console.log("\n" + msg + "\n" + str + "\n");
    }
}); 

