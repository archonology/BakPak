import React, { useEffect } from "react";
import { useState } from "react";
export const getSavedWords = () => {
    const saved = localStorage.getItem('saved_words');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
};

export const getSavedEntries = () => {
    const saved = localStorage.getItem('saved_entries');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
};

// accessing local storage to set the state for the saved words offCanvas -- a custom hook.

export const useLocalStr = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        return getSavedWords(key, defaultValue);
    });



    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

};

// same custom hook as above, but for saved notebook entries.
export const useLocalForEntries = (key, defaultValue) => {

    // console.log(key);
    // console.log(defaultValue);
    const [value, setValue] = useState(() => {
        return getSavedEntries(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

};