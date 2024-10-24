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
    {text:"How Hackers Stole $450 Million in Bitcoin",Code:"23525"},
    {text:"How To Make Money On Text Writing Online",Code:"05432"},
    {text:"EARN WITH DAPPS: HOW TO GET STARTED WITH ZERO INVESTMENT",Code:"65673"},
    {text:"How I Made The Most Expensive Online Course in 2024",Code:"11586"},
    {text:"Don’t Lose Your Crypto: 9 Simple Steps to Lock Down Your Wallet",Code:"32397"},
    {text:"How To Start Your Own Business From Zero",Code:"41211"},
    {text:"Passive Income in Crypto: The Secret Behind DeFi Lending",Code:"95146"},
    {text:"BITCOIN’S GREATEST BULL MARKETS: THE BIGGEST PRICE SURGES IN HISTORY",Code:"57823"},
    {text:"BEFORE YOU INVEST IN CRYPTO, WATCH OUT FOR THESE DEADLY SCAMS",Code:"34669"},
    {text:"Crypto Gold Rush 2024? Signs Of The Next Bull Market Are Here",Code:"48675"},
    {text:"The Truth About Rug Pulls And Fake Icos",Code:"98236"},
    {text:"How to Make $10,000/Month Writing Online",Code:"45688"},
    {text:"WHY YOU KEEP LOSING MONEY IN CRYPTO – FIX IT NOW",Code:"11529"},
    {text:"5 Steps To Start Your First Business",Code:"98213"},
    {text:"GAMING FOR CASH: HOW DAPPS TURN YOUR SKILLS INTO CRYPTO",Code:"31954"},
    {text:"BEST SECRETS OF SUCCESSFUL ENTREPRENEURS",Code:"99335"},
    {text:"THE BEST BEGINNER TRADING STRATEGIES EXPLAINED",Code:"85554"},
    {text:"THE MOST PROFITABLE TAP-TO-EARN GAMES IN TELEGRAM APP IN 2025 ",Code:"42622"},
    {text:"HOW TO AUTOMATE CRYPTO PROFITS: YEARN FINANCE VS. ALCHEMIX",Code:"14287"},
    {text:"HOW TO START A BUSINESS FROM NOTHING",Code:"41323"},
    {text:"TURN NEWS INTO PROFITS: MASTERING THE SWING & NEWS TRADING GAME",Code: "53320"},
    {text:"THE SECRET FORMULA THAT LAUNCHES BILLION",Code: "42437"},
    {text:"TURN YOUR FOOTBALL KNOWLEDGE INTO PROFITS",Code: "72941"},
    {text:"TELEGRAM MOBILE PLAY TO EARN CRYPTO GAMES", Code: "42666"},
    {text:"Arbitrage And DCA: The Safest Crypto Trading Tactics Explained",Code: "99944"},
    {text:"How To Start Your Small Business",Code: "42111"},
    {text:"INVEST IN REAL ESTATE WITHOUT MILLIONS",Code: "56912"},
    {text:"HOW TO BUILD A BUSINESS THAT WORKS",Code: "42491"},
    {text:"CAN YOU PROFIT FROM A FALLING MARKET? DISCOVER REVERSE TRADING",Code: "83859"},
    {text:"HOW TO EARN $5,000 PER MONTH WITH TELEGRAM", Code: "42681"},
    {text:"OWN PROPERTY DIGITALLY: THE PROCESS OF REAL ESTATE TOKENIZATION", Code: "75612"},
    {text:"28.7% Of People Who Try This Make their 1st Dollar Online", Code: "42331"},
    {text:"SET AND FORGET: POSITION TRADING FOR LONG-TERM PROFITS", Code: "17905"},
    {text:"HOW TO SUCCEED INBUSINESS SECRET STEPS MEMEGIRLS", Code: "12501"},
    {text:"HOW TOKENIZATION MAKES REAL ESTATE ACCESSIBLE FOR ALL", Code: "86553"},
    {text:"BEST TELEGRAM FREE CRYPTO AIRDROPS MEMEGIRLS", Code: "97693"},
    {text:"TOP 10 CRYPTO STRATEGIES – WHICH ONE SHOULD YOU TRY?", Code: "77508"},
    {text:"IF YOU WANT TO START A BUSINESS IN 2025, WATCH THIS VIDEO", Code: "42527"},
    {text:"MILLION-DOLLAR DEALS MADE EASY: REAL ESTATE TOKENIZATION IN ACTION", Code: "15928"},
    {text:"HOW TO MAKE $500 PER WEEK IN TELEGRAM GAMES",Code: "42704"},
    {text:"LOST MONEY TRADING? HERE’S WHAT YOU’RE MISSING!",Code: "57855"},
    {text:"HOW TO SET YOURSELF UP FOR SUCCESS: PSYCHOLOGICAL TRICKS AND TECHNIQUES",Code: "42758"},
    {text:"THE FUTURE OF PROPERTY INVESTMENT: REAL ESTATE TOKENIZATION",Code: "48734"},
    {text:"MEMEFI EXPOSES 2030 CRYPTO WALLET SECRETS!",Code: "33745"},
    {text:"HOW TO START YOUR OWN BUSINESS WITHOUT ANY INVESTMENTS",Code: "10892"},
    {text:"TRADING BLINDFOLDED? THE DANGERS OF LETTING EMOTIONS TAKE OVER",Code: "47685"},
    {text:"How to Manage Your Money Effectively", Code: "43088"},
    {text:"THE SECRET TO CUTTING CRYPTO FEES: MICROTRANSACTIONS EXPLAINED", Code: "96314"},
    {text:"HOW TO RETIRE IN 7 YEARS | STARTING WITH $0",Code: "24112"},
    {text:"HOW TO STOP LOSING MONEY: MASTERING STRATEGY & FINANCIAL MANAGEMENT",Code: "88565"},
    {text:"BEST PURCHASES TO MAKE IN YOUR 20S",Code: "19015"},
    {text:"SECRET CELEBRETIES PSYCHOLOGICAL TRICKS AND TECHNIQUES", Code: "99799"},
    {text:"HOW TO AVOID REPEATING TRADING MISTAKES-PRO TIPS INSIDE",Code: "47890"},
    {text:"BUSINESS IDEAS YOU CAN START WITH $0",Code: "43002"},
    {text:"ACCESSING CONTENT FOR CENTS? HOW CRYPTO MAKES IT HAPPEN",Code: "65318"},
    {text:"HOW TO RETIRE AS EARLY AS POSSIBLE (STARTING FROM $0)", Code: "94112"},
    {text:"GREED IN TRADING: THE TRAP THAT KILLS PROFITS -AVOID IT NOW!", Code: "98354"},
    {text:"HOW TO MANAGE YOUR MONEY SO YOU NEVER GO BROKE", Code: "43102"},
    {text:"CRYPTO FEES GOT YOU DOWN? THE SCALABILITY PROBLEM EXPLAINED", Code: "84712"},
    {text:"HOW TO BUILD A BUSINESS THAT WORKS", Code: "42491"},
    {text:"BEST PURCHASES TO BE RICH IN YOUR 20S", Code: "89015"},
    {text:"Digital Money Revolution: Are CBDCs the Future of Finance?", Code: "02002"},
    {text:"SET YOURSELF UP FOR SUCCESS WITH THESE DAILY ROUTINES!", Code: "42820"},
    {text:"SEND AND RECEIVE CRYPTO WITH WALLET ADDRESSES", Code: "32030"},
    {text:"I’M BROKE, WHAT BUSINESS DO I START?", Code: "43067"},
    {text:"Why Your Government Wants You to Use CBDCs", Code: "79166"},
    {text:"DO THIS EVERY TIME YOU GET PAID (PAYCHECK ROUTINE)",Code: "14931"},
    {text:"DIFFERENT CRYPTO WALLETS FOR DIFFERENT COINS: WHICH IS YOURS?",Code: "65947"},
    {text:"HOW I RETIRED EARLY ON $300,000 (FULL GUIDE)", Code: "90012"},
    {text:"THE HIDDEN TECH BEHIND CBDCS: TOKENS VS. ACCOUNTS", Code: "12980"},
    {text:"YOU SHOULD TO BUY THIS, IF YOU WANT BE RICH!", Code: "29115"},
    {text:"PUBLIC VS PRIVATE KEYS: HOW WALLET ADDRESSES PROTECT YOUR CRYPTO!", Code: "59002"},
    {text:"How to Design Your Life (My Process For Achieving Goals)", Code: "42844"},
    {text:"CAN CBDCS PROTECT YOUR MONEY OR MAKE IT VULNERABLE?", Code: "49776"},
    {text:"IF I WAS A STUDENT AGAIN, I’D DO THIS", Code: "42886"},
    {text:"MICRO TRANSACTIONS COULD TRANSFORM DIGITAL PAYMENTS", Code: "78943"},
    {text:"ZERO INVESTMENT BUSINESS IDEAS IN 2025", Code: "11211"},
    {text:"WILL CRYPTOS SURVIVE THE RISE OF CBDCS?", Code: "90926"},
    {text:"HOW TO MANAGE YOUR MONEY LIKE THE 1%", Code: "43133"},
    {text:"FROM ZERO TO CRYPTO: HOW TO GENERATE YOUR WALLET ADDRESS", Code: "32030"},
    {text:"TAX-FREE CRYPTO? BIG CHANGES IN JAPAN AND DUBAI", Code: ""},
    {text:"HOW I EARNED $1,000,000 AT 18 ONLINE",  Code: "91055"},
    {text:"CUTTING OUT BANKS: MICROTRANSATIONS SAVE YOU TIME AND MONEY",  Code: "65318"},
    {text:"NEVER BUY THIS, IF YOU ARE 25 YEARS OLD",  Code: "99129"},
    {text:"KEEPING YOUR CRYPTO SAFE: BEST SECURITY",  Code: "82571"},
    {text:"HOW TO START EARNING WITH YOUR OWN CRYPTO WALLET ADDRESS",  Code: "19773"},
    {text:"IF I WAS BROKE, HERE’S HOW I’D START A BUSINESS", Code: "10182"},
    {text:"CRYPTO’S WILD RIDE: WHAT REALLY MAKES PRICES SKYROCKET OR CRASH?", Code: "89400"},
    {text:"HOW I AUTOMATE MY FINANCES", Code: "44022"},
    {text:"UNLOCK PASSIVE INCOME: THE MAGIC OF LIQUIDITY POOLS", Code: "40014"},
    {text:"How to Retire In 7 Years with $0 Capital (Step by Step Guide)", Code: "11055"},
    {text:"HOW WHALES & BULLS CONTROL THE MARKET: CRYPTO’S POWER PLAYERS", Code: "76849"},
    {text:"THE BEST PURCHASES I’VE EVER MADE AS A MINIMALIST", Code: "82115"},
    {text:"SUPERCHARGE YOUR CRYPTO: THE 3 TYPES OF LIQUIDITY POOLS", Code: "69422"},
    {text:"HOW TO GET CRYPTO JUST FOR SCANNING YOUR EYE", Code: ""},
    {text:"EXCLUSIVE AIRDROP AND FREEBIES IN MEMEFI: GET WHILE THEY LAST!!", Code: "89812"},
    {text:"HOW TO TURN YOUR HOBBY INTO A PROFITABLE BUSINESS?(FULL GUIDE)", Code: "22441"},
    {text:"DON’T LOSE YOUR MONEY!", Code: ""},
    {text:"HOW I FIXED MY ATTENTION SPAN", Code: "27472"},
    {text:"THINK LIQUIDITY POOLS ARE RISK-FREE? THINK AGAIN!", Code: "29101"},
    {text:"HOW TO GET CRYPTO JUST FOR SCANNING YOUR EYE I", Code: ""},
    {text:"HOW TO INVEST IN 2024 (STEP BY STEP GUIDE)", Code: "98137"},
    {text:"REGULATORS VS BITCOIN: HOW NEW LAWS SPARK PRICE FRENZIES", Code: "67401"},
    {text:"HEDGE FUNDS’ DIRTY TRICKS: HOW THEY FLIP CRYPTO MARKETS", Code: "42109"},
    {text:"HOW TO MAKE $4,163 WITH YOUR HOBBY? | STEP BY STEP GUIDE", Code: "98917"},
    {text:"WHERE TO DIVE IN: TOP PLATFORMS FOR LIQUIDITY POOLS REVEALED", Code: "66702"},
    {text:"SECRET STEPS TO REAL SELF-CARE | STEP BY STEP GUIDE", Code: "98137"},
    {text:"CASH IN ON THE CRAZE: HOW TO MAKE BANK DURING CRYPTO FLUCTUATIONS", Code: "55671"},
    {text:"LET ME TEACH YOU HOW TO INVEST IN 2024", Code: "88555"}
    ]
