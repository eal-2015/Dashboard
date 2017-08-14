//Person is now string
function Welcome(person: string) {
    return "Hello, " + person;
}

function ClickMeButton() {
    let user = new Friend();
    document.getElementById("divMsg").innerHTML = Welcome(user.name);
}

class Friend{
    name: string;
    constructor(){
        this.name = "Jeppe"
    }
}