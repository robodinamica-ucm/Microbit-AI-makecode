bluetooth.onBluetoothConnected(function () {
    basic.showString("c")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("d")
})
blockytalky.onReceivedString(function (key, receivedString) {
    if (receivedString == "avant") {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    }
    if (receivedString == "droite") {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
    }
    if (receivedString == "gauche") {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    }
    if (receivedString == "arriere") {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
    }
    if (receivedString == "stop") {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
