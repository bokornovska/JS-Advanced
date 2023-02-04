class footballTeam {

    constructor(clubName, country) {

        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }

    newAdditions(footballPlayers) {

        footballPlayers.forEach(line => {
            let [name, age, playerValue] = line.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(p => p.name == name);

            if (player) {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        });

        let result = [];
        this.invitedPlayers.map(p => {
            result.push(p.name);
        });
        return `You Successfully invite ${result.join(', ')}.`;

    }

    signContract(selectedPlayer) {

        let boughtPlayer = '';
        let buyingPrice = 0;

        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let player = this.invitedPlayers.find((p) => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (playerOffer < player.playerValue) {
                let priseDifference = player.playerValue - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priseDifference} million more are needed to sign the contract!`)
            } else {
                player.playerValue = 'Bought';
                boughtPlayer = player.name;
                buyingPrice = playerOffer;
            }
        }
        return `Congratulations! You sign a contract with ${boughtPlayer} for ${buyingPrice} million dollars.`
    }

    ageLimit(name, age) {

        let player = this.invitedPlayers.find((p) => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (player.age < age) {

                let difference = age - player.age;

                if (difference < 5) {
                    return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }

            } else {
                return `${name} is above age limit!`
            }
        }
    }

    transferWindowResult() {

        let result = [];

        result.push("Players list:");
        this.invitedPlayers.sort((a, b) => a.name - b.name).map(e => result.push(`Player ${e.name}-${e.playerValue}`));
        return result.join("\n");
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
