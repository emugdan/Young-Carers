var pwi;
var pw = "rk-yc-22";
pwi = prompt("Bitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
while (pwi != pw) {
    if (pwi == null) {
        window.location = "index.html"
    }
    pwi = prompt("Falsches Passwort\nBitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
}
