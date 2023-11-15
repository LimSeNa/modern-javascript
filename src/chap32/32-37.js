// 커멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
    return camelCase.replace(/.[A-Z]/g, match => {
        console.log(match); // oW
        return match[0] + '_' + match[1].toLowerCase();
    });
}

const camelCase = 'helloWorld';
camelToSnake(camelCase); // hello_world

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, match => {
        console.log(match); // _w
        return match[1].toUpperCase();
    });
}

const snakeCase = 'hello_world';
snakeToCamel(snakeCase); // helloWorld