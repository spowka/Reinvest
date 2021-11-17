//Функция в течение указанного интервала пробует найти на странице указанный элемент и проскроллить страницу к нему.
//Как только элемент найден, выполнение функции прерывается.
export function scrollToElementDelayed(elementId: string, timeoutMS: number = 10000) {
    let timer: NodeJS.Timer;
    timer = setInterval(() => {
        var $element = <HTMLInputElement>document.getElementById(elementId);
        if ($element) {
            $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            clearInterval(timer);
        }
    }, 1);
    setTimeout(() => clearInterval(timer), timeoutMS);
}