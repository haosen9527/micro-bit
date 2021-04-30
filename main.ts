let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (5 > x && 5 > y) {
            x += 1
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
    } else {
        if (-1 < x && -1 < y) {
            led.unplot(x, y)
            basic.pause(100)
            x += -1
            y += -1
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (5 > x && 5 > y) {
            x += 1
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
    } else {
        if (-1 < x && -1 < y) {
            led.unplot(x, y)
            basic.pause(100)
            x += -1
            y += -1
        }
    }
})
