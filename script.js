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

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".min").innerText = textMin
    document.querySelector(".sec").innerText = textSec

    if(textDay <= 0){
        document.querySelector(".day").innerText = ""
        document.querySelector(".dayText").innerText = ""
    } else {
        document.querySelector(".dayText").innerText = "Dienos"
    }
    if(textHour <= 0){
        document.querySelector(".hour").innerText = ""
        document.querySelector(".hourText").innerText = ""
    } else {
        document.querySelector(".hourText").innerText = "Valandos"
    }
    if(textMin <= 0){
        document.querySelector(".min").innerText = ""
        document.querySelector(".minText").innerText = ""
    } else {
        document.querySelector(".minText").innerText = "Minutės"
    }
    if(textSec <= 0){
        document.querySelector(".sec").innerText = ""
        document.querySelector(".secText").innerText = ""
    } else {
        document.querySelector(".secText").innerText = "Sekundės"
    }
}

setInterval(countdown, 500)