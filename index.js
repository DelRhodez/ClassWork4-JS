// function logArguments(){
//     for(i=0; i<arguments.length; i++)
//     console.log(`argument ${(i+1)} = ${arguments[i]}`)
//    }

// logArguments(1,2,3)
// Минимум из произвольного количества чисел

// function mean(){
//     if (arguments.length === 0) return 0;
//     sum = 0;
//     for(i=0;i<arguments.length;i++)
//     sum += arguments[i];
//     return sum / arguments.length;
//    }

//    console.log(mean(1,2,3))
//    или
//    function mean(arr){
//     if (!arr.length) return 0;
//     sum = 0;
//     for(i=0;i<arr.length;i++)
//     sum += arr[i];
//     console.log(arguments)
//     return sum / arr.length;
//    }
//    console.log(mean([1,2,3]))

// function parity(x) {
//     if(x % 2 == 0)
//     parity = "even";
//     else
//     parity = "odd";
// }
// console.log(parity(3));
// console.log(parity(2)); Ошибочный строка

// let x = 1;
// function logX(){
//     console.log(typeof x); typeof чисто как проверочный
//    }

// logX()
// function logX(){
//     let x;
//     console.log(x);
// }
// x = 1;
// logX()

// let x ="Global"
// function high(){
//     let x = "High";
//     function low() {
//         let x = "low"
//         console.log("Low:" + x)
//        }
//        low()
//        console.log("High: " + x)
//     }
//     high()
//     console.log("Global: " + x)

// function bakePizza() {
//     console.log("Заготовить тесто")
//     console.log("Заложить начинку")
//     bake("Pizza");
//     console.log("Подать к столу")
// }
// function bake(x) {
// // const bake = (x) => {
//     console.log("- Разогреть духовку")
//     console.log("- Поставить туда " + x)
//     console.log("- Подождать 20 минут")
// }
// bakePizza()

// function factorial (n) {
//     if(n <= 1) return 1;
//     let result = 1;
//     for(let i=1; i<=n; i++) {
//         result = result * i;
//     }
//     return result
// }
// console.log(factorial(5))

// function factorial (n) {
//     if(n <= 2) return n;
//     console.log()
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// function fibonacci(n){
//     if (n <= 2) return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
//     return (n <= 2) ? 1 : fibonacci(n-1) + fibonacci(n-2);
//    }
// console.log(fibonacci(9))

// Задание для самостоятельной работы
// function StringFrom(){
//     let result = arguments[0]
//     for(let i=1; i<arguments.length; i++) {
//         result = result + " " + arguments[i];
//    }
//    return result;
// }
//    console.log(StringFrom('I have', 5, 'apples'))

// function min() {
//     let minimum = arguments[0]
//     for (let i=1; i<arguments.length; i++) {
//         if(arguments[i] < minimum) minimum = arguments[i]
//     }
//     return minimum
// }
// console.log(min(2,3,1))

function is2(n) {
    if(n === 0) return false;
    if(n <= 2) return true;
    if(n % 2) return false;
    return is2(n / 2)

}
console.log(is2(33))