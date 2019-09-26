/**
 * Author: Alexandre Chabeau
 * License: MIT
 * Contact: alexandrechabeau.pro@gmail.com
 * Original repos: https://github.com/saucyspray/split-text
 */
class SplitText {
    constructor(_target) {
        this.result = new Object()
        this.result.originalText = _target.innerText
        this.result.splitted = this.split(_target)
        this.result.words = this.result.splitted.querySelectorAll('.wrapper')
        this.result.chars = this.result.splitted.querySelectorAll('.char')
        this.result.spaces = this.result.splitted.querySelectorAll('.spacer')
        return this.result
    }
    createSpan(_class) {
        let span = document.createElement('span')
        span.style.display = "inline-block"
        span.className = _class
        return span
    }
    split(_target) {
        let containerArray = new Array
        const splittedTarget = _target.innerText.split(' ')
        let counter = splittedTarget.length
        splittedTarget.map(word => {
            const wrapper = this.createSpan('wrapper')
            word.split(/(?!^)/).map(char => {
                let el = this.createSpan('char')
                el.innerText = char
                wrapper.appendChild(el)
            })
            counter--
            containerArray.push(wrapper)
            if (counter > 0) {
                let space = this.createSpan('char spacer')
                space.innerHTML = '&nbsp;'
                containerArray.push(space)
            }
        })
        _target.innerHTML = ''
        containerArray.forEach(child => {
            _target.appendChild(child)
        })
        return _target
    }
}
module.exports = SplitText;