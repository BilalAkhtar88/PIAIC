export function countCharacters(text) {
    // Remove whitespaces and count characters
    const cleanedText = text.replace(/\s/g, '');
    return cleanedText.length;
}
export function countWords(text) {
    // Split the text by whitespaces and count non-empty elements
    const words = text.split(/\s+/).filter((word) => word !== '');
    return words.length;
}
