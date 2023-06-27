radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        servos.P1.run(50)
        servos.P2.run(-50)
    } else if (receivedNumber == 1) {
        servos.P1.run(-50)
        servos.P2.run(-50)
    } else if (receivedNumber == 2) {
        servos.P1.run(50)
        servos.P2.run(50)
    } else if (receivedNumber == 3) {
        servos.P1.run(-50)
        servos.P2.run(50)
    } else if (receivedNumber == 4) {
        servos.P1.stop()
        servos.P2.stop()
    }
})
radio.setGroup(95)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else if (false) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(4)
    }
})
