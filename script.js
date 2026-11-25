//your code here
const textArea = document.querySelector("#evaluatedText");
const wordCount = document.querySelector("#wordCount");

textArea.addEventListener("input", () => {
    let text = textArea.value.trim();

    if (text === "") {
        wordCount.textContent = 0;
    } else {
        let words = text.split(/\s+/);
        wordCount.textContent = words.length;
    }
});