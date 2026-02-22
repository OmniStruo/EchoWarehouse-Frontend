const localStorageService = {
    set: (key: string, value: any) => {
        const _item = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, _item);
    },
    get: (key: string): any => {
        const item = localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : null;
        } catch (e) {
            return item;
        }
    },
    remove: (key: string) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
}

export default localStorageService;