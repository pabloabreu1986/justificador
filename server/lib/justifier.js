'use-strict';


module.exports.Justifier = (parag, long, pat) => {

    let arrParag = parag.split(' ');
    let line = '';
    let arrLines = [];
    let lastWord = arrParag[arrParag.length - 1];

    arrParag.map(word => {

        if (line.length == 0) {
            line = word;

        } else {

            if (line.length + word.length + 1 < long) {
                line = `${line}${pat}${word}`;

            } else {

                let lon = long - line.length;
                line = adjSpaces(line, lon, pat);
                arrLines.push(line);
                line = word;

                if (line == lastWord) {
                    adjSpaces(line, lon, pat);
                    arrLines.push(line);
                }
            }
        }
    });

    return arrLines;
};

let adjSpaces = (elements, spaces, pat) => {

    let initialSpaces = elements.split(pat).length - 1;
    let spacesPositions = positionSpaces(elements, pat);
    let spacesToInsert = Math.trunc(spaces / initialSpaces);
    let restOfSpaces = spaces % initialSpaces;

    if (spacesToInsert > 0) {

        for (let index = 0; index < initialSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + pat.repeat(spacesToInsert) + (elements).slice(spacesPositions[index] + index);
        }

        for (let index = 0; index < restOfSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + pat + (elements).slice(spacesPositions[index] + index);
        }

    } else {

        for (let index = 0; index < restOfSpaces; index++) {
            elements = (elements).slice(0, spacesPositions[index] + index) + pat + (elements).slice(spacesPositions[index] + index);
        }

    }

    return elements;
};

let positionSpaces = (elements, pat) => {
    let spacesPositions = [];
    let elementsList = elements.split(pat);
    let position = 0;

    for (let index = 0; index < elementsList.length - 1; index++) {
        position = position + elementsList[index].length + 1;
        spacesPositions.push(position);
    }

    return spacesPositions;
};