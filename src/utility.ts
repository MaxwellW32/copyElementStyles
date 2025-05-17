export function ensureHtmlElement(selector: string) {
    const visibilityBtn = document.querySelector(selector)
    if (visibilityBtn === null) throw new Error(`not seeing ${selector}`)

    return visibilityBtn as HTMLElement
}