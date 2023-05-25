input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
    radio.sendString("A")
    music.playMelody("D F A C5 A C5 A C5 ", 220)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.pause(100)
    basic.clearScreen()
    music.playMelody("C D E F G A B C5 ", 600)
    radio.sendString("rainbow")
})
radio.setGroup(2)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
music.setVolume(255)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("Open")
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("Close")
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("LEDL")
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDR")
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("F", pins.analogReadPin(AnalogPin.P2))
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("B", pins.analogReadPin(AnalogPin.P2))
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("L", pins.analogReadPin(AnalogPin.P1))
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("R", pins.analogReadPin(AnalogPin.P1))
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        } else {
            radio.sendValue("S", pins.analogReadPin(AnalogPin.P8))
            basic.clearScreen()
        }
    }
})
