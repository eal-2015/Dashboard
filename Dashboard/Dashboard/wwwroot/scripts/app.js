//Person is now string
function Welcome(person) {
    return "Hello, " + person;
}
function ClickMeButton() {
    var user = new Friend();
    document.getElementById("divMsg").innerHTML = Welcome(user.name);
}
var Friend = (function () {
    function Friend() {
        this.name = "Jeppe";
    }
    return Friend;
}());
//# sourceMappingURL=app.js.map