let value = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Welcome Master!")
    } else {
        value = pins.analogReadPin(AnalogPin.P0)
        if (value >= 500) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.setAudioPin(AnalogPin.P1)
            music.ringTone(262)
            basic.pause(500)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
