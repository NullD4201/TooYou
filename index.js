const fs = require('fs'); // file system 파일 입출력을 담당하는 모듈.const

let gdata = '';
fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
    // 지금은 비동기 로직.
    // blocking작업이네? -> 시간이 걸리는 작업이네? -> 오케이 프로세스 분리!
    if (err) console.log(err);
    else gdata = data;
}); // 지금 이 원리가 이따가 만들 DB CRUD에도 똑같이 적용됨.
// CRUD도 blocking작업이라, 동기 방식으로 작동되게 로직을 짜줘야 되요.
console.log(gdata);

function first() {
    return new Promise((resolve, reject) => {
        // Promise를 반환하는 함수
        // Promise를 반환하겠다고 선언 -> 자동으로 blocking작업을 시행하는 함수
        // 프로세스를 자동으로 분리해줌.

        resolve('1'); // resolve를 사용하여 실제 반환할 값을 전달
        // reject는 에러를 반환 = throw new Error()
    });
}

// then

// first()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         // 다른 프로세스에서 발생한 에러네? 처리하고 계속 실행하자.
//         console.log(err);
//     });

// 위와 같은 Promise구문을 'callback 구문'
// node.js에는 이 callback을 더욱 간편하게 처리할 수 있게 만들어놓은 게 존재.
// async ~ await 구문.

// async function main() {
//     try {
//         let data = await first();
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// }

function main() {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await first();
            console.log(data);
            resolve(data);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

/**
 * let result = input(); <- blocking 작업
 * console.log(result); <- non-blocking 작업
 *
 * Syncing 작업 non-Syncing작업 (동기 작업과 비동기 작업)
 *
 * Thread Process
 *
 * Scanner sc = new Scanner(System.in); <- blocking 작업
 * System.out.printLn(); <- non-blocking 작업
 *
 */
