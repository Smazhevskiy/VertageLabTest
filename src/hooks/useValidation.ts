export const validateHex = (hexColor:string) => {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(hexColor)
}