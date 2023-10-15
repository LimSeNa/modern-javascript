new Array(4294967295);

// 전달된 인수가 0~4,294,967,295를 벗어나면 RangeError 발생
new Array(4294967296); // RangeError: Invalid array length

// 전달된 인수가 음수이면 에러 발생
new Array(-1); // RangeError: Invalid array length