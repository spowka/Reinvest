import { loadScript } from 'src/app/admin/shared/helpers/script-helper';
import { defaultMapCenter } from 'src/app/consts';
import { GeoService } from 'src/app/admin/shared/geo-service/geo.service';

declare const ymaps: any;
let ymapsLoaded: boolean = false;

export function getYmaps(): any {
    return ymapsLoaded ? ymaps : null;
}

export function initYandexMap(geoService: GeoService, mapElementId: string, onMapCreated: (map: any) => void) {
    let timer: NodeJS.Timer;
    timer = setInterval(() => {
        var $element = <HTMLInputElement>document.getElementById(mapElementId);
        if ($element) {
            loadMap();
            clearInterval(timer);
        }
    }, 5);
    setTimeout(() => clearInterval(timer), 10000);

    function loadMap() {
        if (ymapsLoaded) {
            createMap();
        } else {
            geoService.getYandexApiKey().subscribe(
                (data: any) => {
                    const yandexApiKey = data.key;
                    loadScript(`https://api-maps.yandex.ru/2.1/?apikey=${yandexApiKey}&lang=ru_RU`, (ev) => {
                        ymapsLoaded = true;
                        createMap();
                    });
                });
        }
    }

    function createMap() {
        ymaps.ready(() => {
            let map = new ymaps.Map(mapElementId,
                { center: defaultMapCenter, zoom: 10 },
                { searchControlProvider: 'yandex#search' }
            );
            map.container.getElement().style.width = '100%';
            map.container.fitToViewport();

            onMapCreated(map);
        });
    }
}

