var anto = 160
var yanto = 140
var retno = 150

if (anto > yanto) {
    if (anto > retno) {
        if (yanto > retno) {
            console.log("anto yang tertinggi ke 1")
            console.log("yanto yang tertinggi ke 2")
            console.log("rento yang terpendek")
        } else {
            console.log("anto yang tertinggi ke 1")
            console.log("retno yang tertinggi ke 2")
            console.log("yanto yang terpendek")
        }
    } else {
        console.log("retno yang tertinggi ke 1")
        console.log("anto yang tertinggi ke 2")
        console.log("yanto yang terpendek")
    }
} else {
    if (yanto > retno) {
        if (anto > retno) {
            console.log("yanto yang tertinggi ke 1")
            console.log("anto yang tertinggi ke 2")
            console.log("retno yang terpendek")
        } else {
            console.log("yanto yang tertinggi ke 1")
            console.log("retno yang tertinggi ke 2")
            console.log("anto yang terpendek")
        }
    } else {
        console.log("retno yang tertinggi ke 1")
        console.log("yanto yang tertinggi ke 2")
        console.log("anto yang terpendek")
    }
}