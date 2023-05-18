input.onButtonPressed(Button.A, function () {
    radio.sendString("backwards")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.West)
})
radio.setGroup(123)
basic.forever(function () {
	
})
