function countDown(num) {
  let time = setInterval(function () {
    if (num <= 0) {
      clearInterval(time)
      console.log('Done!')
    } else {
      num--
      console.log(num)
    }
  }, 1000)
}

countDown(10)

function randomGame() {
  let num
  let times = 0
  let timer = setInterval(function () {
    num = Math.random()
    times++
    if (num > 0.75) {
      clearInterval(timer)
      console.log(`It took ${times} ${times > 1 ? 'tries' : 'try'}!`)
    }
  }, 1000)
}

randomGame()
