'use-strict';


module.exports.Justifier = (parag, long) => {

    let arrParag = parag.split(' ');
    let line = '';
    let arrLines = [];
    let lastWord = arrParag[arrParag.length - 1];

    arrParag.map(word => {

        if (line.length == 0) {
            line = word;

        } else {

            if (line.length + word.length + 1 < long) {
                line = `${line} ${word}`;

            } else {

                let lon = long - line.length;
                line = adjSpaces(line, lon);
                arrLines.push(line);
                line = word;

                if (line == lastWord) {
                    adjSpaces(line, lon);
                    arrLines.push(line);
                }
            }
        }
    });

    return arrLines;
};

let adjSpaces = (elements, spaces) => {

    let initialSpaces = elements.split(" ").length - 1;
    let spacesPositions = positionSpaces(elements);
    let spacesToInsert = Math.trunc(spaces / initialSpaces);
    let restOfSpaces = spaces % initialSpaces;

    if (spacesToInsert > 0) {

        for (let index = 0; index < initialSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + " ".repeat(spacesToInsert) + (elements).slice(spacesPositions[index] + index);
        }

        for (let index = 0; index < restOfSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + " " + (elements).slice(spacesPositions[index] + index);
        }

    } else {

        for (let index = 0; index < restOfSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + " " + (elements).slice(spacesPositions[index] + index);
        }

    }

    return elements;
};

let positionSpaces = (elements) => {
    let spacesPositions = [];
    let elementsList = elements.split(" ");
    let position = 0;

    for (let index = 0; index < elementsList.length - 1; index++) {
        position = position + elementsList[index].length + 1;
        spacesPositions.push(position);
    }

    return spacesPositions;
};