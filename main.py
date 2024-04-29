def AutoTorch():
    global range2
    range2 = strip.range(0, Math.map(input.light_level(), 0, 20, 12, 0))
    strip.clear()
    range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
    strip.show()
    basic.pause(200)
def LiftTorch():
    global range2
    range2 = strip.range(0, Math.map(input.rotation(Rotation.PITCH), 0, 90, 0, 12))
    strip.clear()
    range2.show_color(neopixel.colors(NeoPixelColors.WHITE))
    strip.show()
    basic.pause(200)
def LaserPointer():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
def Debug(name: str, text: str):
    serial.write_line("" + name + ": " + "")
def distance():
    led.plot_bar_graph(sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS),
        30)
range2: neopixel.Strip = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)

def on_forever():
    LiftTorch()
    LaserPointer()
    distance()
basic.forever(on_forever)
