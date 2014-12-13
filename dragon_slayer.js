var slaying = true;

while(slaying) {
    if (youHit) {
        console.log("You hit!");
        totalDamage += damageThisRound;
            if (totalDamage >= 4) {
                console.log("You win!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
    } else {
        console.log("You missed!");
        slaying = false;
    }
}