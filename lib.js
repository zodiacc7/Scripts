const bp = query => document.querySelector(query);
const elementExists = query => bp(query) !== null;
function captchaExists() {return (!!unsafeWindow.grecaptcha || !!unsafeWindow.turnstile || elementExists(".rscaptcha") || elementExists("#gpcaptcha") || elementExists(('[action*="/verify"] input[type="number"],[action*="/verify"] input[type="text"]')));}
function click(query) {bp(query)?.click();}
function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {click(query);}, timeInSec * 1000);}}
function Captchacheck() {
    let captchaOK = true;
    if (elementExists('.h-captcha') || elementExists('#captcha-hcaptcha')) captchaOK = unsafeWindow.hcaptcha.getResponse().length !== 0;
    else if (unsafeWindow.turnstile || elementExists('.cf-turnstile') || elementExists('#captcha-turnstile')) captchaOK = unsafeWindow.turnstile.getResponse().length !== 0;
    else if (elementExists('.g-recaptcha') || elementExists('#captchaShortlink') || elementExists('#captcha_container') || elementExists('#captchaShortlinker') || elementExists('#captcha-recaptcha')) captchaOK = unsafeWindow.grecaptcha.getResponse().length !== 0;
    else if (elementExists('#iconcaptcha')) captchaOK = elementExists('.iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success');
    if (captchaOK && elementExists(".rscaptcha")) return !elementExists(".rscaptcha .dot[style='display:none;']") && !elementExists(".captcha-error");
    if (elementExists("#gpcaptcha")) return !elementExists("#gpcaptcha input[value='']");
    return captchaOK;
}

function Captchaklik(query, timeInSec = 1, act = 'click') {
    if (elementExists(query)) {
        var timer = setInterval(function() {
            if (Captchacheck()) {
                bp(query)[act]();
                clearInterval(timer);
            }
        }, timeInSec * 1000);
    }
}

const BpAll = query => document.querySelectorAll(query);
const domainCheck = domains => new RegExp(domains).test(location.host);
function submit(query) {bp(query).submit();}
function waitForElm(query, callback) {setTimeout(function() {
    if (elementExists(query)) {callback(bp(query));} else {waitForElm(query, callback);}}, 1000);}
function SubmitIfExists(query, timeInSec = 1, funcName = 'setTimeout') {
    if (elementExists(query)) {window[funcName](function() {submit(query);}, timeInSec * 1000);}}
function Checkvisibility(query) {
    if (!elementExists(query)) return false;
    let elem = bp(query)
    if (!elem.offsetHeight && !elem.offsetWidth) return false;
    if (getComputedStyle(elem).visibility === 'hidden') return false;
    return true;
}
function clickIfElementvisibile(query, timeInSec = 1, funcName = 'setTimeout') {if (Checkvisibility(query)) {window[funcName](function() {click(query);}, timeInSec * 1000);}}
function Captchasub(query, act = 'submit', timeInSec = 0.5) {
    if (elementExists(query)) {var timer = setInterval(function() {
        if (Captchacheck()) {bp(query)[act]();clearInterval(timer);}}, timeInSec * 1000);}}
function fireMouseEvents(query) {const element = bp(query);if (!element) return;
                                 ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventName => {
                                     if (element.fireEvent) {element.fireEvent('on' + eventName);} else {
                                         const eventObject = document.createEvent('MouseEvents');
                                         eventObject.initEvent(eventName, true, false);element.dispatchEvent(eventObject);}});}

function Booster() {let FastInt = '{{1}}';if (FastInt === '{{1}}') {FastInt = '';}let varDelayArg = '{{2}}';
                    if (varDelayArg === '{{2}}') {varDelayArg = '';}let boostArg = '{{3}}';
                    if (boostArg === '{{3}}') {boostArg = '';}if (FastInt === '') {FastInt = '.?';}
                    else if (FastInt.charAt(0) === '/' && FastInt.slice(-1) === '/') {FastInt = FastInt.slice(1, -1);}
                    else {FastInt = FastInt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}
                    const FastInter = new RegExp(FastInt);let varDelay = varDelayArg !== '*' ? parseInt(varDelayArg, 10) : -1;
                    if (isNaN(varDelay) || isFinite(varDelay) === false) {varDelay = 1000;}let boost = parseFloat(boostArg);
                    boost = isNaN(boost) === false && isFinite(boost) ? Math.min(Math.max(boost, 0.02), 50) : 0.05;
                    self.setTimeout = new Proxy(self.setTimeout, {apply: function(target, thisArg, args){const [a, b] = args;if ((varDelay === -1 || b === varDelay) && FastInter.test(a.toString())) {args[1] = b * boost;} return target.apply(thisArg, args);}});
                    self.setInterval = new Proxy(self.setInterval, {apply: function(target, thisArg, args){const [a, b] = args;if ((varDelay === -1 || b === varDelay) && FastInter.test(a.toString())) {args[1] = b * boost;} return target.apply(thisArg, args);}});}
if (elementExists("[class='main-wrapper']") || window.name.includes("popUpWindow")) return;
if (elementExists("[href='http://blockadblock.com']")) {window.location.reload(true);return;}
function getRandomCoordinateInCircle(radius) {
    let x, y;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
    } while (x * x + y * y > 1);
    return {
        x: Math.round(x * radius),
        y: Math.round(y * radius)
    };
}
function triggerEvent(element, eventType, properties) {
    const event = new MouseEvent(eventType, properties);
    element.dispatchEvent(event);
}
function clickButton(bp) {
    const button = document.querySelector(bp);

    if (button) {
        const rect = button.getBoundingClientRect();
        const radius = Math.min(rect.width, rect.height) / 2;
        const { x, y } = getRandomCoordinateInCircle(radius);

        const clientX = rect.left + radius + x;
        const clientY = rect.top + radius + y;

        const commonProperties = {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: clientX,
            clientY: clientY,
            screenX: clientX,
            screenY: clientY,
            pageX: clientX,
            pageY: clientY,
            pointerId: 1,
            pointerType: "touch",
            isPrimary: true,
            width: 1,
            height: 1,
            pressure: 0.5,
            button: 0,
            buttons: 1
        };

        triggerEvent(button, 'pointerdown', commonProperties);
        triggerEvent(button, 'mousedown', commonProperties);
        triggerEvent(button, 'pointerup', { ...commonProperties, pressure: 0 });
        triggerEvent(button, 'mouseup', commonProperties);
        triggerEvent(button, 'click', commonProperties);

    }
}
function touch(bp) {
    const minDelay = 40;
    const maxDelay = 130;
    const delay = 100;
    const button = document.querySelector(bp);
    const rect = button.getBoundingClientRect();
    function getRandomCoordinate(min, max) {
        return Math.random() * (max - min) + min;
    }
    const x = getRandomCoordinate(rect.left, rect.right);
    const y = getRandomCoordinate(rect.top, rect.bottom);
    if (typeof TouchEvent === 'function') {
        try {
            const touchObj = new Touch({
                identifier: Date.now(),
                target: button,
                clientX: x,
                clientY: y,
                radiusX: 2.5,
                radiusY: 2.5,
                rotationAngle: 10,
                force: 0.5,
            });

            const touchStartEvent = new TouchEvent("touchstart", {
                cancelable: true,
                bubbles: true,
                touches: [touchObj],
                targetTouches: [touchObj],
                changedTouches: [touchObj],
            });

            button.dispatchEvent(touchStartEvent);
            setTimeout(() => {
                const touchEndEvent = new TouchEvent("touchend", {
                    cancelable: true,
                    bubbles: true,
                    touches: [],
                    targetTouches: [],
                    changedTouches: [touchObj],
                });
                button.dispatchEvent(touchEndEvent);
            }, delay);
        } catch (error) {;}
    }
}
var memefi = [
    {text:"Bull Market Dangers: 8 Risk Factors That Could Hurt You",Code:"63956"},
    {text:"Pump And Dump Schemes: How Crypto Whales Crush Small Investors",Code:"20234"},
    {text:"How To Make $10,000 Per Month With These Niches",Code:"23700"},
    {text:"Make the Most of a Bull Market: 7 Hidden Opportunities for Big Gains",Code:"35688"},
    {text:"How To Make Money Online With These Apps",Code:"52811"},
    {text:"How Hackers Stole $450 Million in Bitcoin-And How to Keep Yours Safe",Code:"23525"},
    {text:"How To Make Money On Text Writing Online",Code:"05432"},
    {text:"EARN WITH DAPPS: HOW TO GET STARTED WITH ZERO INVESTMENT",Code:"65673"},
    {text:"How I Made The Most Expensive Online Course in 2024",Code:"11586"},
    {text:"Don’t Lose Your Crypto: 9 Simple Steps to Lock Down Your Wallet",Code:"32397"},
    {text:"How To Start Your Own Business From Zero",Code:"41211"},
    {text:"Passive Income in Crypto: The Secret Behind DeFi Lending",Code:"95146"},
    {text:"BITCOIN’S GREATEST BULL MARKETS: THE BIGGEST PRICE SURGES IN HISTORY",Code:"57823"},
    {text:"BEFORE YOU INVEST IN CRYPTO, WATCH OUT FOR THESE DEADLY SCAMS",Code:"34669"},
    {text:"Crypto Gold Rush 2024? Signs Of The Next Bull Market Are Here",Code:"48675"},
    {text:"The Truth About Rug Pulls And Fake Icos: Crypto’s Biggest Scams",Code:"98236"},
    {text:"How to Make $10,000/Month Writing Online",Code:"45688"},
    {text:"WHY YOU KEEP LOSING MONEY IN CRYPTO – FIX IT NOW",Code:"11529"},
    {text:"5 Steps To Start Your First Business",Code:"98213"},
    {text:"GAMING FOR CASH: HOW DAPPS TURN YOUR SKILLS INTO CRYPTO",Code:"31954"},
    {text:"BEST SECRETS OF SUCCESSFUL ENTREPRENEURS",Code:"99335"},
    {text:"THE BEST BEGINNER TRADING STRATEGIES EXPLAINED – DON’T MISS OUT",Code:"85554"},
    {text:"THE MOST PROFITABLE TAP-TO-EARN GAMES IN TELEGRAM APP IN 2025 ",Code:"42622"},
    {text:"HOW TO AUTOMATE CRYPTO PROFITS: YEARN FINANCE VS. ALCHEMIX",Code:"14287"},
    {text:"HOW TO START A BUSINESS FROM NOTHING",Code:"41323"},
    {text:"TURN NEWS INTO PROFITS: MASTERING THE SWING & NEWS TRADING GAME",Code: "53320"},
    {text:"THE SECRET FORMULA THAT LAUNCHES BILLION-DOLLAR COMPANIES MEMEGIRLS CODE",Code: "42437"},
    {text:"TURN YOUR FOOTBALL KNOWLEDGE INTO PROFITS:THE SORARE EXPERIENCE",Code: "72941"},
    {text:"TELEGRAM MOBILE PLAY TO EARN CRYPTO GAMES", Code: "42666"},
    {text:"Arbitrage And DCA: The Safest Crypto Trading Tactics Explained",Code: "99944"},
    {text:"How To Start Your Small Business",Code: "42111"},
    {text:"INVEST IN REAL ESTATE WITHOUT MILLIONS? HERE’S HOW",Code: "56912"},
    {text:"HOW TO BUILD A BUSINESS THAT WORKS SECRETS OF ENTREPRENEURS",Code: "42491"},
];
