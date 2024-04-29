function AutoTorch () {
    range = strip.range(0, Math.map(input.lightLevel(), 0, 20, 12, 0))
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(200)
}
function LiftTorch () {
    range = strip.range(0, Math.map(input.rotation(Rotation.Pitch), 0, 90, 0, 12))
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(200)
}
function LaserPointer () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
function Debug (name: string, text: string) {
    serial.writeLine("" + name + ": " + "")
}
function distance () {
    led.plotBarGraph(
    sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    ),
    30
    )
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    LiftTorch()
    LaserPointer()
    distance()
})
