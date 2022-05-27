const userAge = confirm('Есть ли вам 18 лет?');

if (!userAge) {
    alert('Вам запрещено проходить опрос');
} else {
    let timeToWakeUp = prompt('Во сколько вы встаете?', '');
    console.log(timeToWakeUp);
    if (timeToWakeUp !== null) {
        Number(timeToWakeUp);
        if (isNaN(timeToWakeUp)) {
            alert('Hекорректный ввод');
        } else if (timeToWakeUp > 0 && timeToWakeUp <= 5) {
            alert('Очень рано');
        } else if (timeToWakeUp > 5 && timeToWakeUp <= 8) {
            alert('Все равно рано');
        } else if (timeToWakeUp > 8 && timeToWakeUp <= 11) {
            alert('Нормально');
        } else if (timeToWakeUp > 11 && timeToWakeUp <= 14) {
            alert('Слишком поздно');
        } else if (timeToWakeUp > 14 && timeToWakeUp <= 24) {
            alert('Очень-очень поздно');
        } else if (timeToWakeUp <= 0 || timeToWakeUp > 24) {
            alert('Научись пользоваться часами!');
        }
    }
}