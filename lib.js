const bp = query => query instanceof Element ? query : document.querySelector(query);
const elementExists = query => bp(query) !== null;
function captchaExists() {return (!!unsafeWindow.grecaptcha || !!unsafeWindow.turnstile || elementExists(".rscaptcha") || elementExists("#gpcaptcha") || elementExists(('[action*="/verify"] input[type="number"],[action*="/verify"] input[type="text"]')));}
function click(query) {bp(query)?.click();}
function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {click(query);}, timeInSec * 1000);}}
function Captchacheck() {
    let captchaOK = true;
    if (elementExists('.h-captcha') || elementExists('#captcha-hcaptcha')) captchaOK = unsafeWindow.hcaptcha.getResponse().length !== 0;
    else if (unsafeWindow.turnstile || elementExists('.cf-turnstile') || elementExists('#captcha-turnstile')) captchaOK = !!unsafeWindow.turnstile.getResponse();
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function timertosec(query) {
    if (!bp(query)) return 0;
    return bp(query).textContent?.replace(/[^\d:]/g, '').split(':').map(Number).reduceRight((seconds, v, i, arr) => seconds + v * Math.pow(60, arr.length - 1 - i), 0);}
const findElement = txt => Array.from(document.querySelectorAll('*')).find(el => {return (txt instanceof RegExp ? el.textContent.match(txt) : el.textContent.includes(txt)) && el.children.length === 0;});
function qint(query,regex = /(.*)/g) {return parseInt(bp(query)?.textContent.match(regex)[0]);}//text to int
function qfloat(query,regex = /(.*)/g) {return parseFloat(bp(query)?.textContent.match(regex)[0]);}//text to float
function tiq(text,query = 'button:enabled'){return Array.from(document.querySelectorAll(query)).find((el) => text instanceof RegExp ? el.textContent.match(text):el.textContent.includes(text));}//text in query
function clickBytext(text,query = 'button:enabled') {tiq(text,query)?.click();}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            //view: window,
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
