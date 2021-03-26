
// function throttle(callback, timer = 1000) {
//     let id = null;
//     let flag = true;
//     return function() {
//         if(!id && flag) {
//         id = setTimeout(() => {
//             callback();
//             clearTimeout(id);
//             // flag = true;
//         }, timer);
//         } else {
//         log(`等待中，忽略后面事件的执行!`);
//         // flag = false;
//         }
//     };
// }
  
// throttle
// 节流，是指在单位时间内, 只会触发一次事件，如果事件触发后，又重复触发了同一事件，则忽略后面触发的事件，直到第一次事件的计时⌛️结束
// 应用场景：埋点???

const throttle = (func, delay) => {
    let flag = true;
    return function(args) {
        const that = this;
        if(flag) {
            flag = false;
            func.id = setTimeout(() => {
                func.call(that, args);
                clearTimeout(func.id);
                flag = true;
            }, delay);
        } else {
            // ignore
            console.log(`ignore event`);
        }
    };
};
  