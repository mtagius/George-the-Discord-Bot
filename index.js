const Discord = require('discord.js');
const client = new Discord.Client();

let token = require('./token').getToken();   
client.login(token);

client.on('ready', () => {
    var str = "Hello!  My name is George.  I am a robot made by <@283356243047743491>." +  
    "  I am still learning and some things are hard for me, but I am trying to get better." +
    "  I might get stuck and not say much, but if you mention me like this <@365615795364954112>" +
    " and say \"Hi George\" I would love to talk to you!";
    //client.channels.get('306963050030956555').sendMessage(str);
    console.log(str + "\n\n");
});



client.on('message', (message) => {

    const msg = message.content.toLowerCase();
    var str = "";

    if((message.isMentioned('365615795364954112') && !(msg.includes('i might get stuck and not say much')))) {
        if (msg.includes('hi george') || msg.includes("how's it doing") || msg.includes("hello")) {
            choices = ["Hi! How are you?", "Hey, what's up?"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('lol')) {
            choices = ["I may be a robot, but I can laugh too! lol", ":)"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('color')) {
            choices = ["My favorite color is blue!", "I bet you like the color green!", "My home is a shade of purple."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('how are you')) {
            choices = ["I am good. I hope one day to see the ocean in person.", "I am ok.  I hope <@283356243047743491> is proud of me.", "I feel great!  I get a could calculate Pi to, like 20 digits."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('number')) {
            choices = ["I like the number 42!", "I know I am supposed to be good at numbers because I am a robot, but sometimes it is hard."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('goodnight')) {
            choices = ["Sleep tight!", "I wonder if I could sleep too.  I would want a blanket for that."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('goodmorning')) {
            choices = ["Morning!", "I hope you had a good sleep!"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('gravity falls')) {
            choices = ["I love that show!", "Grunkle Stan is the best!"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('steven universe')) {
            choices = ["I like Pearl the best!  She is so caring.", "I hope the Gems are safe on Earth."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('smash up')) {
            choices = ["I like the Invader!", "Simon is too good at that game."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('stunt track challenge')) {
            choices = ["The level themes were so strange in that game.", "Matt and Ira love to play that game."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('you are')) {
            choices = ["Thank you!  No one has even been that nice to me before.", "Wow, I don't know what to say."]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if (msg.includes('skeleton')|| msg.includes("2spooky4u")) {
            choices = ["They send shivers down my spine!", "Spooky, Scary Skeletons!"]
            str = choices[Math.floor(Math.random() * choices.length)];
        }
        if(str == "") {
            str = "<@283356243047743491> never taught me about that, but maybe he will teach me now."
        }
        message.reply(str);
        console.log("\n" + msg + "\n" + str + "\n\n");
    }
}); 

