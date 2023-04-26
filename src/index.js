//include jquery into the bundle and store its contents into the $ variable
import '../style/index.scss';

window.onload = () => [
    document.querySelector('card').classList.add('heart');
    setTimeout(() => {
        document.querySelector('card').classList.remove('heart');
        document.querySelector('card').classList.add('spadet');
    }, 1000; // 1 second
];


let generateRandomNumber(){
    let numb = Math.floor(Math.random() * 12);
    let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let suit = {"diamond", "spade", "heart", "club"}
}