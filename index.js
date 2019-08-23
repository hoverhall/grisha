const TelegramBot = require('node-telegram-bot-api');

const token = '911921474:AAEqraHODB7HOxVRe3XS7_0y4v_d-DJFXFU';

const bot = new TelegramBot(token, {polling: true});

var bool = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

bot.on('text', (ctx) => {
    const frases2 = [
        "лох",
        "підар",
        "успєшний человек",
        "членосос",
        "той хто їв гівно",
        "сєпаратюга, на вила тебе",
        "москаль",
        "бездарна свиня",
        "це ти, шо я ше можу сказати?",
    ]

    const frases = [
        "ахуительная история, расскажи еще",
        "та ну, не гони",
        "пиздишь",
        "круто сказано",
        "нихуя ты сказанул",
        "ахаазахазахза",
        "чушь собачая",
        "правду тянешь..",
        "заебись история",
        "иди подмойся",
        "ору блять",
        "иди работать сука",
        "полностью согласен с этой шлюхой",
        "Да заткнись ты уже",
        "Может все таки по пивку?)",
        "Идите погуляйте"
    ]

    var msg = ctx.text.toLowerCase().split(" ");

    var max_frases = "Совпадение не думаю, Срамота, снизу пидор, сверху пидор, братишка я покушать принес, вот это поворот, стартуем, вангую, уважай мою власть, хули с него взять, дай ему на клыка, цьомки бомки, всмысле?!, шоб вы понимали, шалом, проканало, ми так не вигребем, аплуа, тай таке, ри-розвиток, пидара ответ, ебет?,  Максимальный урод, другоі нема, бачок потик, еблан, зрада, з тебе сіськи в лс, знову напилось і всяку бурду несе, я з сбу хулі приїбався, це фіаско, ти собака сутула мовчи, сверху подкаблучник, факти давай, глаголь, мамку ебав, батя пизди дасть, ніколи так не кажи ніколи, за камінгаут,"
    frases.push.apply(frases, max_frases.split(", "));
    const chatId = ctx.chat.id;
    if (ctx.text.toLowerCase() === "хто я?") {
        let frase = frases2[getRandomInt(1, frases2.length-1)]
        bot.sendMessage(chatId, ctx.from.first_name + ", ти " + frase)
    }

    // for (var i = 0; i < msg.length; i++) {
    //     if (msg[i] === "хто" || msg[i] === "хто?" || msg[i] === "хто," || msg[i] === "хто.") {
    //         for (var n = 0; n < msg.length; n++) {
    //             if (msg[n] === "ти" || msg[n] == "він" || msg[n] === "ти?" || msg[n] == "він?"
    //             || msg[n] === "ти," || msg[n] == "він," || msg[n] === "ти." || msg[n] == "він."
    //             || msg[n] == "я" || msg[n] === "я," || msg[n] == " я." || 
    //             msg[n] !== "гріша" || msg[n] !== "гріша," || msg[n] !== "гріша.") {
    //                 let frase = frases2[getRandomInt(1, frases2.length-1)]
    //                 bot.sendMessage(chatId, "Він " + frase)
    //             } else if (msg[n] === "гріша" || msg[n] === "гріша," || msg[n] === "гріша.") {
    //                 bot.sendMessage(chatId, "Гріша бот, так шо іді нахой")
    //             }
    //         }
    //     }

    // if ("хто" in msg & "ти" in msg) {
    //     let frase = frases2[getRandomInt(1, frases2.length-1)]
    //     bot.sendMessage(chatId, "Він" + frase)
    // }

    if (getRandomInt(1, 100) < 40) {
        let frase = frases[getRandomInt(1, frases.length-1)]
        bot.sendMessage(chatId, frase)
    }
})

// bot.startPolling();