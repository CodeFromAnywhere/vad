const currentScript = typeof window === "undefined" ? null : window.document.currentScript as HTMLScriptElement | null
let basePath = ""
if (currentScript) {
  basePath = currentScript.src
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "")
    .replace(/\/[^\/]+$/, "/")
}

export const assetPath = (file: string) => {
  return basePath + file
}
