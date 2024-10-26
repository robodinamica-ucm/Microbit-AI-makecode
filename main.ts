bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    basic.showString("c")
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    basic.showString("d")
})
blockytalky.onReceivedString(function on_received_string(key: string, receivedString: string) {
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
