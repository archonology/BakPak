export const savedWordsArr = (wordArr) => {
    if (wordArr.length) {
        localStorage.setItem('saved_words', JSON.stringify(wordArr));
    } else {
        localStorage.removeItem('saved_words');
    }
};