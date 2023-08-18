const findTheOldest = function(people) {
    return people.reduce(function(max, person){
        if(!person.yearOfDeath){
            let currentYear = (new Date()).getFullYear();
            person.yearOfDeath = currentYear;

            
        }
        return max.yearOfDeath-max.yearOfBirth < person.yearOfDeath-person.yearOfBirth? person:max;
    },
    people[0]
    )

};

// Do not edit below this line
module.exports = findTheOldest;
