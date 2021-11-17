export type CalendarLocale = {
    firstDayOfWeek: number,
    dayNames: string[],
    dayNamesShort: string[],
    dayNamesMin: string[],
    monthNames: string[],
    monthNamesShort: string[],
    today: string,
    clear: string,
    dateFormat: string,
};

export const CurrentCalendarLocale: CalendarLocale = {
    firstDayOfWeek: 0,
    dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yy'
};