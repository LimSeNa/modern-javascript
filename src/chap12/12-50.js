// n만틈 어떤 일을 반복
function repeat1(n) {
    for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3