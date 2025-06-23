function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
function celciusToFahrenheit(cel){
    return (cel * 9)/5 + 32;
}
module.exports={
    generateRandomNumber,
    celciusToFahrenheit,
};