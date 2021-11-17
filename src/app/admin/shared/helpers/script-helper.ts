export function loadScript(url: string, onload: (event: any) => void) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = onload;
    body.appendChild(script);
}