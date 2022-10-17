var pwi;
var pw = "rk-yc-22";
pwi = prompt("Bitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
while (pwi != pw) {
    if (pwi == null || pwi == '' || pwi == false || !pwi) {
        window.location = "index.html";
        break;
    }
    pwi = prompt("Falsches Passwort\nBitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
}
