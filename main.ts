// Radio group is 2500
let value = 0
radio.setGroup(2500)
// Set the flex sensor
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P1)
    value = pins.analogReadPin(AnalogPin.P0)
    // If the A button is pressed show this string
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("Welcome Master!")
    } else {
        // When the flex sensor is less than 950 start the LED and buzzer. If not the buzzer and LED are off.
        if (value < 950) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.ringTone(3000)
            music.setVolume(255)
            basic.pause(500)
            radio.sendString("Pantry Sabotaged")
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    }
})
