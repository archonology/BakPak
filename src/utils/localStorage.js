import React, { useEffect } from "react";
import { useState } from "react";
export const getSavedWords = () => {
    const saved = localStorage.getItem('saved_words');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
};

export const useLocalStr = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        return getSavedWords(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

};