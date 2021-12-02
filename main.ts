input.onButtonPressed(Button.A, function () {
	
})
let value = 0
radio.setGroup(2500)
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P1)
    value = pins.analogReadPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Welcome Master!")
    } else {
        if (value >= 950) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.ringTone(1000090)
            music.setVolume(255)
            basic.pause(500)
            radio.sendString("Pantry Sabotaged")
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    }
})
