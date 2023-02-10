declare function getTextData(body: any): {
    selectionData: {
        struct: number[];
        str: any;
        offsets: any[];
        quads: any[];
    };
    linkData: any[];
};
declare function isInvalidNode(node: any): boolean;
declare function getClientUrl(): string;
declare function sendDataToClient(): void;
declare const debounceSendDataOnMutation: (...args: any[]) => void;
declare const debounceSendDataOnTransition: (...args: any[]) => void;
