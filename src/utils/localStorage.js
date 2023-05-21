import { useEffect } from "react";
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

export const getSavedRecordings = () => {
    const saved = localStorage.getItem('saved_recordings');
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

export const removeEntry = (date) => {
    const savedEntries = localStorage.getItem('saved_entries')
        ? JSON.parse(localStorage.getItem('saved_entries'))
        : null;

    if (!savedEntries) {
        return false;
    }

    const updatedEntries = savedEntries?.filter((savedEntry) => savedEntry.date !== date);
    localStorage.setItem('saved_entries', JSON.stringify(updatedEntries));

    return true;
};

export const useLocalForRecordings = (key, defaultValue) => {

    // console.log(key);
    // console.log(defaultValue);
    const [value, setValue] = useState(() => {
        return getSavedRecordings(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

};

export const removeRecording = (date) => {
    const savedEntries = localStorage.getItem('saved_recordings')
        ? JSON.parse(localStorage.getItem('saved_recordings'))
        : null;

    if (!savedEntries) {
        return false;
    }

    const updatedEntries = savedEntries?.filter((savedEntry) => savedEntry.date !== date);
    localStorage.setItem('saved_recordings', JSON.stringify(updatedEntries));

    return true;
};