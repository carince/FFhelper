declare global {
    interface Window {
        api: {
            fileDialog: () => void;
            run: () => void;
        },
        settings: {
            update: (category: string, setting: string, data: any) => void;
        }
    }
}

export { };