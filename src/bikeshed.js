import bikeList from './bikelist';

function validate(bike) {
    if(bike.name.length === 0) {
        return 'Cyklen skal have et navn!';
    }
    for(let i = 0; i < bikeList.length; i++) {
        const entry = bikeList[i];
        if(entry.name === bike.name) {
            return 'Cykel findes allerede i listen!'
        }
    }
    return '';
}

function createBike(bike) {
    const validationMessage = validate(bike);
    if(validationMessage) {
        throw Error(validationMessage);
    }
    bikeList.push(bike);
}

function removeBike(bikeName) {
    for(let i = 0; i < bikeList.length; i++) {
        const entry = bikeList[i];
        if(entry.name === bikeName) {
            bikeList.splice(i, 1);
            return;
        }
    }
}

function getBikes() {
    return bikeList;
}

export {
    createBike,
    removeBike,
    getBikes
};