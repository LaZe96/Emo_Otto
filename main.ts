function pohyb () {
    if (mp1 != ma1) {
        if (mp1 > ma1) {
            ma1 = ma1 + 1
        } else {
            ma1 = ma1 - 1
        }
        robotbit.Servo(robotbit.Servos.S1, ma1)
    }
    if (mp2 != ma2) {
        if (mp2 > ma2) {
            ma2 = ma2 + 1
        } else {
            ma2 = ma2 - 1
        }
        robotbit.Servo(robotbit.Servos.S2, ma2)
    }
    if (mp3 != ma3) {
        if (mp3 > ma3) {
            ma3 = ma3 + 1
        } else {
            ma3 = ma3 - 1
        }
        robotbit.Servo(robotbit.Servos.S3, ma3)
    }
    if (mp4 != ma4) {
        if (mp4 > ma4) {
            ma4 = ma4 + 1
        } else {
            ma4 = ma4 - 1
        }
        robotbit.Servo(robotbit.Servos.S4, ma4)
    }
    if (mp5 != ma5) {
        if (mp5 > ma5) {
            ma5 = ma5 + 1
        } else {
            ma5 = ma5 - 1
        }
        robotbit.Servo(robotbit.Servos.S5, ma5)
    }
    if (mp6 != ma6) {
        if (mp6 > ma6) {
            ma6 = ma6 + 1
        } else {
            ma6 = ma6 - 1
        }
        robotbit.Servo(robotbit.Servos.S6, ma6)
    }
    if (mp7 != ma7) {
        if (mp7 > ma7) {
            ma7 = ma7 + 1
        } else {
            ma7 = ma7 - 1
        }
        robotbit.Servo(robotbit.Servos.S7, ma7)
    }
    if (mp8 != ma8) {
        if (mp8 > ma8) {
            ma8 = ma8 + 1
        } else {
            ma8 = ma8 - 1
        }
        robotbit.Servo(robotbit.Servos.S8, ma8)
    }
}
function postoj (posun: boolean) {
    mp1 = 62
    mp2 = 70
    mp3 = 56
    mp4 = 62
    mp5 = 180
    mp6 = 40
    mp7 = 0
    mp8 = 140
    if (posun) {
        robotbit.Servo(robotbit.Servos.S1, mp1)
        robotbit.Servo(robotbit.Servos.S2, mp2)
        robotbit.Servo(robotbit.Servos.S3, mp3)
        robotbit.Servo(robotbit.Servos.S4, mp4)
        robotbit.Servo(robotbit.Servos.S5, mp5)
        robotbit.Servo(robotbit.Servos.S6, mp6)
        robotbit.Servo(robotbit.Servos.S7, mp7)
        robotbit.Servo(robotbit.Servos.S8, mp8)
        ma1 = mp1
        ma2 = mp2
        ma3 = mp3
        ma4 = mp4
        ma5 = mp5
        ma6 = mp6
        ma7 = mp7
        ma8 = mp8
        basic.pause(200)
        a1 = 0
        a1ms = mil + randint(0,1000)
        a2 = 0
        a2ms = mil + randint(0, 1000)
        a3 = 0
        a3ms = mil + randint(0, 1000)
    }
}
function oci () {
    if (op != oa) {
        if (op == 0) {
            strip.clear()
            strip.show()
            oa = 0
            oms = control.millis()
        }
        if (op == 1) {
            strip.clear()
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            oa = 1
        }
        if (op == 2) {
            strip.clear()
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            oa = 2
        }
        if (op == 3) {
            strip.clear()
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            oa = 3
        }
    }
}
function a_nohy (pocet: number, cakaj: number) {
    //Zdvíhanie nôh
    if (a2 == 0 && mil > a2ms) {
        a2 = 1
        a2o = pocet
        if (cakaj == 0) {
            a2ms = mil + randint(5000, 15000)
        } else {
            a2ms = mil + cakaj
        }
    }
    if (a2 == 1 && ma2 == mp2 && ma4 == mp4) {
        mp2 = 100
        mp4 = 35
        a2 = 2
    }
    if (a2 == 2 && ma2 == mp2 && ma4 == mp4) {
        mp2 = 90
        mp4 = 45
        if (a2o > 0) {
            a2 = 1
            a2o = a2o - 1
        } else {
            a2 = 3
        }
    }
    if (a2 == 3 && ma2 == mp2 && ma4 == mp4 && mil > a2ms) {
        a2 = 0
        mp2 = 70
        mp4 = 62
        if (cakaj == 0) {
            a2ms = mil + randint(5000, 15000)
        } else {
            a2ms = mil + cakaj
        }
    }
}
function kont_pad () {
    if (input.isGesture(Gesture.LogoDown)) {
        if (p == 0) {
            p = 1
            op = 1
            oms = mil + 5000
            h = 0
            up = 1
            kf = 0
            kl = 0
            postoj(true)
        }
    } else {
        if (p == 0) {
            a_nohy(3,2000)
            if (a2 == 0) {
                music.playMelody("C F C", 400)
            }
        } else {
            p = 0
            h = mil
            postoj(true)
            up = 2
            if (oa < 2 || oa > 3) {
                op = 2
                oms = mil + 500
            }
        }
    }
}
function usmev () {
    if (up != ua) {
        if (up == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . . . . .
                . . . . .
                `)
            ua = 1
        }
        if (up == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
                `)
            ua = 2
        }
        if (up == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            ua = 3
        }
        if (up == 4) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # . . . #
                # # # # #
                . . . . .
                `)
            ua = 4
        }
        if (up == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                # . # . #
                . . . . .
                . . . . .
                `)
            ua = 5
        }
    }
}
function a_oci () {
    if (mil > oms) {
        if (oa == 1) {
            op = 0
            oms = mil + 100
        }
        if (oa == 0) {
            op = 1
            oms = mil + 5000 + randint(3000, 10000)
        }
        if (oa == 2) {
            op = 3
            oms = mil + 500
        }
        if (oa == 3) {
            op = 2
            oms = mil + 500
        }
    }
}
function reset2h () {
    if (mil > 3600000) {
        control.reset()
    }
}
// animácia pri čakaní
function a_cakaj () {
    if (p == 1) {
        //Úsmev
        if (mil > ums) {
            up = randint(3, 5)
            ums = mil + 3000 + randint(0, 5000)
        }
        //Dlane
        if (a1 == 0 && mil>a1ms) {
            a1 = 1
            a1o = randint(0,3)
            a1ms = mil + randint(0, 20000)
        }
        if (a1 == 1 && ma6 == mp6 && ma8 == mp8 && mil > a1ms) {
            a1 = 2
            mp6 = 50
            mp8 = 130
        }
        if (a1 == 2 && ma6 == mp6 && ma8 == mp8) {
            if (a1o > 0) {
                a1 = 1
                a1o = a1o - 1
            } else {
                a1 = 3
            }
            mp6 = 30
            mp8 = 150
        }
        if (a1 == 3 && ma6 == mp6 && ma8 == mp8) {
            a1 = 0
            mp6 = 40
            mp8 = 140
            a1ms = mil + 5000 + randint(0,10000)
        }
        //Zdvíhanie nôh
        if (a2 == 0 && mil > a2ms) {
            a2 = 1
            a2o = randint(0, 2)
            a2ms = mil + randint(0, 20000)
            rnd = randint(0, 5)
            if (rnd == 1) {
                mp2 = 55
                mp4 = 47
            } else {
                if (rnd == 2) {
                    mp2 = 85
                    mp4 = 77
                }
            }
        }
        if (a2 == 1 && ma2 == mp2 && ma4 == mp4 && mil > a2ms) {
            a2 = 2
            mp2 = 100
            mp4 = 35 
        }
        if (a2 == 2 && ma2 == mp2 && ma4 == mp4) {
            if (a2o > 0) {
                a2 = 1
                a2o = a2o - 1
            } else {
                a2 = 3
            }
            mp2 = 90
            mp4 = 45
        }
        if (a2 == 3 && ma2 == mp2 && ma4 == mp4 && mil > a2ms) {
            a2 = 0
            mp2 = 70
            mp4 = 62
            a2ms = mil + 5000 + randint(0, 10000)
        }        
        //Zdvíhanie ramien
        if (a3 == 0 && mil > a3ms) {
            a3 = 1
            a3o = randint(0, 2)
            a3ms = mil + randint(0, 20000)
        }
        if (a3 == 1 && ma5 == mp5 && ma7 == mp7 && mil > a3ms) {
            a3 = 2
            mp5 = 120 - randint(0, 30)
            mp7 = 60 + randint(0, 30)
        }
        if (a3 == 2 && ma5 == mp5 && ma7 == mp7) {
            if (a3o > 0) {
                a3 = 1
                a3o = a3o - 1
                mp5 = 170 - randint(0, 30)
                mp7 = 10 + randint(0, 30)
            } else {
                a3 = 0
                mp5 = 180
                mp7 = 0
                a3ms = mil + 5000 + randint(0, 30000)
            }
        }
        if (a1 == 0 && a2 == 0 && a3 == 0 && mil > pms) {
            p = 2
            a2ms = mil
        }
    }
}
function a_kracaj () {
    if (p == 2 || p == 3) {
        up = 1
        if (a2 == 0 && mil > a2ms) {
            postoj(true)
            rnd = randint(1, 10)
            if (rnd > kf) {
                a2o = rnd - kf
            } else {
                p = 3
                if (rnd == kf) {
                    rnd = rnd - 1
                }
                a2o = kf - rnd
            }
            kf = rnd
            a2ms = mil + 500
            a2 = 1
        }
        if (a2 == 1 && ma1 == mp1 && ma3 == mp3 && mil > a2ms) {
            a2 = 2
            if (a2o % 2 == 0) {
                mp2 = 50
                mp4 = 42
            } else {
                mp2 = 90
                mp4 = 82
            }
        }
        if (a2 == 2 && ma2 == mp2 && ma4 == mp4) {
            if (p == 2) {
                if (a2o % 2 == 0) {
                    mp1 = 82
                    mp3 = 76
                } else {
                    mp1 = 42
                    mp3 = 36
                }
            } else {
                if (a2o % 2 == 0) {
                    mp1 = 42
                    mp3 = 36
                } else {
                    mp1 = 82
                    mp3 = 76
                }
            }
            if (a2o > 0) {
                a2 = 1
                a2o = a2o - 1
            } else {
                a2 = 3
            }
        }
        if (a2 == 3 && ma1 == mp1 && ma3 == mp3) {
            a2 = 4
            mp1 = 62
            mp2 = 70
            mp3 = 56
            mp4 = 62
            a2ms = mil + 1000
        }
        if (a2 == 4 && ma1 == mp1 && ma2 == mp2 && ma3 == mp3 && ma4 == mp4 && mil > a2ms) {
            p = 1
            a2 = 0
            up = 3
            pms = mil + randint(5000,15000)
        }
    }
}
let mil = 0
let ua = 0
let up = 0
let ums = 0
let oa = 0
let op = 0
let oms = 0
let h = 0
let pms = 0
let rnd = 0
let kf = 0
let kl = 0
let a1 = 0
let a2 = 0
let a3 = 0
let a1ms = 0
let a2ms = 0
let a3ms = 0
let a1o = 0
let a2o = 0
let a3o = 0
let ma8 = 0
let mp8 = 0
let ma7 = 0
let mp7 = 0
let ma6 = 0
let mp6 = 0
let ma5 = 0
let mp5 = 0
let ma4 = 0
let mp4 = 0
let ma3 = 0
let mp3 = 0
let ma2 = 0
let mp2 = 0
let ma1 = 0
let mp1 = 0
let strip: neopixel.Strip = null
let p = 0
let hms = 0
//p=0 prevratený
//p=1 čakám
p = 2
op = 1
up = 1
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
led.setBrightness(32)
music.setVolume(100)
if (input.isGesture(Gesture.LogoDown)) {
	
}
postoj(true)
basic.forever(function () {
    mil = control.millis()
    //Zobrazenie očí
    oci()
    //Zobrazenie úsmevu
    usmev()
    //Pohybovanie
    pohyb()
    //Kontrola časovača
    reset2h()
    //Výpočet animácie očí
    a_oci()
    //Kontrola padnutia
    kont_pad()
    //Výpočet animácie čakania, P=1
    a_cakaj()
    //Výpočet animácie kráčania, P=2
    a_kracaj()
})
