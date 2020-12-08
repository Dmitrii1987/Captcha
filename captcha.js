let captcha;
let alphabets = "AaBbCcDdFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status = document.getElementById('status');
generateCaptcha = () => {
    let first = Math.floor((Math.random() *10));
    let second = alphabets[Math.floor((Math.random() * alphabets.length))];
}