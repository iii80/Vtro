export function calcTime({ startTime, endTime }) {
  const start = startTime
  const end = endTime
  if (start === end) return [false, 0]
  const now = new Date()
  var [starthour, startmin] = start.split(':').map(v=>Number(v))
  var [endhour, endmin] = end.split(':').map(v=>Number(v))
  var [hour, min] = [Number(now.getHours()), Number(now.getMinutes())]
  
  endhour = endhour > starthour ? endhour :
  endhour<starthour?endhour+24:
  // hour 相同  17:30 -> 17:00
  endmin>startmin?endhour:endhour+24
  console.log(endhour)
  if ((hour > starthour || (hour == starthour && min > startmin)) &&
    (hour < endhour || (hour == endhour && endmin < min))
  ) {
    // on 剩余时间
    let t = ((endhour*60+endmin)-(hour*60+min))*60
    return [true, t]
  } else {
    // off bt后开启 last 持续时间
    let bt = ((starthour*60+startmin)+(hour*60+min))*60
    let last = ((endhour*60+endmin)-(starthour*60+startmin))*60
    return [false, last, bt]
  }

  /**
   * 1 隔夜
   * 2 不隔夜
   */
  // if (endhour < starthour ||
  //   (endhour == starthour || endmin < startmin)) {
  //   if ((hour > starthour || (hour == starthour || min > startmin)) ||
  //     (hour < endhour || (hour == endhour || endmin < min))
  //   ) {
  //     // on 
  //   } else {
  //     // off
  //   }
  // } else {
  //   if ((hour > starthour || (hour == starthour || min > startmin)) &&
  //     (hour < endhour || (hour == endhour || endmin < min))
  //   ) {
  //     // on
  //   }else{
  //     // off
  //   }
}