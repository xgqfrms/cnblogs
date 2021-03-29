/**
 * @description UserEventsChecker 检测工具
 * @author eric
 * @class UserEventsChecker
 * @created 2021.03.26
 * @modified 2021.03.26
 */
class UserEventsChecker {
    constructor (name = '', callback = () => '') {
        // init
        this.name = name?.toLocaleLowerCase() ?? 'default name';
        this.init(callback);
    }
    init (callback) {
        this.keyboardEvents(callback);
        this.mouseEvents(callback);
        this.pointerEvents(callback);
    }
    static autoGetKeys (e = {}) {
        const {
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
            type,
            code,
            charCode,
            key,
            keyCode,
            which,
        } = e ?? {};
        // 🚀 通过 ES6 解构获取 prototype 上隐藏的 keys
        return {
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
            type,
            code,
            charCode,
            key,
            keyCode,
            which,
        };
    }
    keyboardEvents (callback = () => '') {
        // keyboard events: down, up, press
        document.addEventListener('keydown', (e) => {
            // console.log('keydown e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('keyup', (e) => {
            // console.log('keyup e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('keypress', (e) => {
            // console.log('keypress e', e);
            callback(AutoGetKeys(e));
        });
    }
    mouseEvents (callback = () => '') {
        // mouse events: click, dblclick, mouseup, mousedown, mousemove
        document.addEventListener('click', (e) => {
            // console.log('mouse click e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('dblclick', (e) => {
            // console.log('mouse dblclick e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('mouseup', (e) => {
            // console.log('mouse up e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('mousedown', (e) => {
            // console.log('mouse down e', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('mousemove', (e) => {
            // console.log('mouse move e', e);
            callback(AutoGetKeys(e));
        });
    }
    pointerEvents (callback = () => '') {
        // pointer events: down, up, move, over, out, enter, and leave
        document.addEventListener('pointerdown', (e) => {
            // console.log('pointer down', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointerup', (e) => {
            // console.log('pointer up', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointermove', (e) => {
            // console.log('pointer move', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointerover', (e) => {
            // console.log('pointer over', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointerout', (e) => {
            // console.log('pointer out', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointerenter', (e) => {
            // console.log('pointer enter', e);
            callback(AutoGetKeys(e));
        });
        document.addEventListener('pointerleave', (e) => {
            // console.log('pointer leave', e);
            callback(AutoGetKeys(e));
        });
    }
}

/**
 *
 * @e events
 */
const AutoGetKeys = (e = {}) => {
    const {
        altKey,
        ctrlKey,
        metaKey,
        shiftKey,
        type,
        code,
        charCode,
        key,
        keyCode,
        which,
    } = e;
    // 🚀 通过 ES6 解构获取 prototype 上隐藏的 keys
    return {
        altKey,
        ctrlKey,
        metaKey,
        shiftKey,
        type,
        code,
        charCode,
        key,
        keyCode,
        which,
    };
};


// export {
//     // UserEventsChecker,
//     AutoGetKeys,
// };

// export default UserEventsChecker;
