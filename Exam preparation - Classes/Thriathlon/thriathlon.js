class Triathlon {

    constructor(competitionName) {

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];

    }

    addParticipant(participantName, participantGender) {

        if (this.participants[participantName] === undefined) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        } else {
            return `${participantName} has already been added to the list`
        }


    }

    completeness(participantName, condition) {

        if (this.participants[participantName] === undefined) {
            throw new Error(`${participantName} is not in the current participants list`)
        } else {
            if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
            } else if (condition >= 30 && condition < 60) {
                let completedCount = 1;
                return `${participantName} could only complete ${completedCount} of the disciplines`
            } else if (condition >= 60 && condition < 90) {
                let completedCount = 2;
                return `${participantName} could only complete ${completedCount} of the disciplines`
            } else if (condition >= 90) {
                let participantGender = this.participants[participantName];
                this.listOfFinalists.push({ name: participantName, gender: participantGender })
                delete this.participants[participantName];
                return `Congratulations, ${participantName} finished the whole competition`
            }
        }

    }

    rewarding(participantName) {

        let player = this.listOfFinalists.find(p => p.name == participantName);

        if (!player) {
            return `${participantName} is not in the current finalists list`
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }


    }

    showRecord(criteria) {

        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`
        }

        if (criteria === "male" || criteria === "female") {

            let finalistsByGender = this.listOfFinalists.filter(
                (finalist) => finalist.gender === criteria
            );

            if (finalistsByGender.length === 0) {
                return `There are no ${gender} finalists`;
            } else {
                return `${finalistsByGender[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }

        } else if (criteria === "all") {

            let sortedFinalists = this.listOfFinalists.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            let result = [`List of all ${this.competitionName} finalists:`];
            sortedFinalists.forEach((finalist) => {
                result.push(`${finalist.name}`);
            });

            return result.join("\n");
        }
    }

}


// showRecord (criteria)
// Accept 1 argument:
// •	criteria – a string
// This method returns information based on the criteria. The three possible types of criteria are: "male", "female" or "all".

// If the list of finalists is empty, return the following message: 
// `There are no finalists in this competition`

// If there are no finalists with the given criteria, return: 
// `There are no ${participantGender}'s that finished the competition`

// If there are finalists with the given criteria, return a message with the firstly added participant in the following format:
// `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;
// Otherwise if the criteria is all, return all finalists from the list of finalists array in following format:
// •	On first line show the following message:
// `List of all ${competitionName} finalists:`
// •	On the following lines, display the names of each finalist sorted  in ascending order:
// `${participantName}`


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

