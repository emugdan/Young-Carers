var pwi;
var pw = "rk-yc-22";
pwi = prompt("Bitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
while (pwi != pw) {
    alert("Falsches Passwort!")
    pwi = prompt("Bitte geben Sie das Passwort ein um diesen Inhalt abzurufen.", "");
    //window.location = "../teaching.html"
}