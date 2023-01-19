import ms from 'ms'
import lunchtime from './lunchtime'
import millisecondsUntil from './millisecondsUntil'

function howLongUntilLunch(hours = 12, minutes = 30): string {
  const millisecondsUntilLunchTime = millisecondsUntil(
    lunchtime(hours, minutes)
  )
  const result = ms(millisecondsUntilLunchTime, { long: true })
  console.log(result)
  return result
}

howLongUntilLunch()

export default howLongUntilLunch
