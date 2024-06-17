var lotto = [];
// - `Math.random() * 45;` → 0 이상 ~ 45 미만 실수(float) → 우리는 1부터 45까지가 필요
// - `Math.random() * 45 + 1;` → 1 이상 ~ 46 미만 실수(float) → 정수(int)여야 함
// - `parseInt(Math.random() * 45 + 1);` → 1 이상 ~ 46 미만 정수(int) 완성
while(lotto.length < 6) {
  var num = parseInt(Math.random()*45+1);
  // lotto 배열에 num이 이미 포함되어 있는지 확인
  // 없으면 -1을 반환
  if (lotto.indexOf(num) == -1) {  
    //num이 배열에 없을 경우 num을 lotto 배열에 추가
    lotto.push(num);
  }    
}   
// 오름차순으로 배열 정리
lotto.sort((a,b) => a-b);
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");