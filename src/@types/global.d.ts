declare global {
    interface Window {
        api: {
            fileDialog: () => void;
            run: () => void;
        },
        settings: {
            update: (setting: string, data: any) => void;
        }
    }
}

export { };