const countdown = () => {
    const countDate = new Date('June 18, 2022 14:00:00').getTime()
    const currentDate = new Date().getTime()
    const gap = countDate - currentDate

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMin = Math.floor((gap % hour) / minute)
    const textSec = Math.floor((gap % minute) / second)

    document.querySelector(".day").innerText = textDay + 'd'
    document.querySelector(".hour").innerText = textHour + 'h'
    document.querySelector(".min").innerText = textMin + 'm'
    document.querySelector(".sec").innerText = textSec + 's'

    if(textDay <= 0){
        document.querySelector(".day").innerText = ""
        document.querySelector(".dayText").innerText = ""
    } else {
        document.querySelector(".dayText").innerText = "AAAAA"
    }
    if(textHour <= 0){
        document.querySelector(".hour").innerText = ""
        document.querySelector(".hourText").innerText = ""
    } else {
        document.querySelector(".hourText").innerText = "AAAAAAAAA"
    }
    if(textMin <= 0){
        document.querySelector(".min").innerText = ""
        document.querySelector(".minText").innerText = ""
    } else {
        document.querySelector(".minText").innerText = "AAAAAAA"
    }
    if(textSec <= 0){
        document.querySelector(".sec").innerText = ""
        document.querySelector(".secText").innerText = ""
    } else {
        document.querySelector(".secText").innerText = "AAAAAAAA"
    }

    if(gap <= 0){
        document.querySelector(".day").innerText = ""
    document.querySelector(".hour").innerText = "Sveikas s"
    document.querySelector(".min").innerText = "ugrįžęs!"
    document.querySelector(".sec").innerText = ""
    }
    console.log(gap)
}

setInterval(countdown, 1000)