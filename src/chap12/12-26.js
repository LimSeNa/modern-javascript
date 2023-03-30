// jQuery의 ajax 메서드에 객체를 인수로 전달하는 예
$.ajax({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Lim' },
    cache: false
});