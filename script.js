//동기적 VS 비동기적
//동기적인 프로그래밍
/* console.log(1)
setTimeout(function() {
    console.log(5)
}, 1000)
console.log(2)
console.log(3) */
//비동기적 프로그래밍
//setTimeout -- 정해진 시간이 지나면 callback함수를 호출
//네트워크 통신/파일 입출력 -> 시간이 오래걸림, 오래 기다린 다음에 다음 작업 

//동기적인 콜백 
/* function print1(print) {
    print()
}
print1(() => console.log("print1")); */
//비동기적인 콜백
/* function print2(print, timeout) {
    setTimeout(print, timeout);
}
print2(() => console.log("print2"), 2000) */
//콜백지옥
//서버로부터 사용자의 데이터를 받는 클래스
/* class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => { 
            if(id==='osm' && password==='1234') {
                onSuccess(id)
            }else {
                onError(new Error("ID 또는 PASSWORD가 일치하지 않습니다."))
            }
        }, 2000)
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'osm') {
                onSuccess({name:'osm', role:'admin'})
            }else {
                onError(new Error("권한이 없습니다."))
            }
        }, 1000)
    }
}
const userStorage = new UserStorage()
const id = prompt("ID를 입력하세요.")
const password = prompt("PASSWORD를 입력하세요.")
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Welcome ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            (error) => {
                console.log(eroor)
            }
        )
    },
    (error) => {
        console.log(error);
    }
) */

/* const promise = new Promise((resolve, reject) => {
    console.log("Network 작업...")
    setTimeout(() => {
        resolve(new Error('Network Error'))
    }, 2000)
})
promise.then((value) => {
    console.log(value) //약속된 작업
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("무조건 실행")
}) */
//promise 안에 있는 작업이 실행이 끝나면 resolve가 실행됨, 

//프로미스 체이닝
/* const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
fetchNumber
    .then((num) => {num * 2})
    .then((num) => {num * 3})
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num-1), 1000)
        })
    })
    .then((num) => console.log(num)) */

/* class UserStorage {
    loginUser(id, password, onSuccess) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if(id==='osm' && password==='1234') {
                    resolve(id)
                }else {
                    reject(new Error("ID 또는 PASSWORD가 일치하지 않습니다."))
                }
            }, 2000)
        })
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'osm') {
                        resolve({name:'osm', role:'admin'})
                }else {
                    reject(new Error("권한이 없습니다."))
                }
            }, 1000)
        })
    } 
    }
    const userStorage = new UserStorage()
    const id = prompt("ID를 입력하세요.")
    const password = prompt("PASSWORD를 입력하세요.")
    userStorage
        .loginUser(id, password)
        //.then((user) => userStorage.getRoles(user)) 아래 코드와 같은 user와 중복
        .then(userStorage.getRoles)
        .then((user) => alert(`Your role is ${user.role}`))
        //.catch((error) => console.log(error)) 아래 코드와 같은 기능
        .catch(console.log) */

/* async function 함수명() {
    aswit 비동기 함수();
} */
/* async & await
function fetchItem() {
    return new Promise((resolve, reject) => {
        var items = [1,2,3]
        resolve(items)
    })
}
async function logItems() {
    var result = await fetchItem(); //비동기 함수
    console.log(result)
} */

/* async function fetchUser() {
    //async를 사용하면 자동으로 promise 객체를 만들어 줌. 간략화를 위해 쓰는 경우도 있음
    //return new Promise((resolve, reject) => {
    //사용자 정보 가져오는 비동기 함수(시간걸림)
    //resolve('osm');
    }) 
    return "osm";
}
const user = fetchUser()
user.then((user) => {
    console.log(user);
}) */

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
async function getApple() {
    await delay(5000)
    return 'apple'
}
async function getBanana() {
    await delay(5000)
    return 'bananan'
} 
// async function pickFruits() {
//     // return getApple()
//     //     .then(apple => {
//     //     return getBanana()
//     //         .then(banana => `${apple} + ${banana}`)
//     // })

//     // const apple = await getApple(); //5초
//     // const banana = await getBanana(); //5초 await로 인한 10초가 걸림
//     // return `${apple} + ${banana}`

//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     // 거의 5초만에 작업이 끝남
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`
// } 
function pickFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'))
}
pickFruits().then(console.log)