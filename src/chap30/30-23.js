const today = new Date();

// 밀리 지정
today.getSeconds(30);
today.getSeconds(); // 30

// 초/밀리초 지정
today.getSeconds(10, 0); // HH:MM:10:000
today.getSeconds(); // 10