export function domInjector(seletor) {
    return function (target, propoerKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propoerKey, {
            get: getter
        });
    };
}
