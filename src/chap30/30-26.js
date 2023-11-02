// today의 지정 로캘은 KST
const today = new Date();

// UTC와 today의 지정 로캘인 KST와의 차이는 -9시간
today.getTimezoneOffset() / 60; // -9