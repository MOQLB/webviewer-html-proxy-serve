declare function getPageHeight(): number;
declare const linkSelectors: "\n  a:not([href]), \n  a[href=\"\"], \n  a[href]:not([href^=\"#\"]):not([href^=\"tel:\"]):not([href^=\"sms:\"]):not([href^=\"mailto:\"]):not([href^=\"javascript:\"])\n";
declare namespace mutationObserverConfig {
    const attributes: boolean;
    const childList: boolean;
    const subtree: boolean;
    const characterData: boolean;
}
