function getClockAngle1(hh_mm: string): number {

    let [hh, mm] = hh_mm.split(':').map(Number);

    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
      console.log('Invalid input. Please input hh24:mm format');
    }
  
    let hourAngle:number = (hh % 12) * 30 + (mm / 60) * 30; 
    let minuteAngle:number = mm * 6; 
  
    let angle:number = Math.abs(hourAngle - minuteAngle);
  
    if (angle > 180) {
      angle = 360 - angle;
    }
  
    return angle;
  }
  
  // Test cases
  console.log(getClockAngle1("01:00"))
  