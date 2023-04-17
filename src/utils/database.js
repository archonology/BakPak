import { openDB } from 'idb';

//initializes the database
const initdb = async () =>
    openDB('bakpak', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('bakpak')) {
                console.log('bakpak database already exists');
                return;
            }
            db.createObjectStore('bakpak', { keyPath: 'id', autoIncrement: true });
            console.log('bakpak database created');
        },
    });

// puts content and adds it to the database
export const putWordsDb = async (savedWords) => {
    console.log(savedWords);
    console.log('PUT to the database');
    const bakPakDB = await openDB('bakpak', 1);
    const transaction = bakPakDB.transaction('bakpak', 'readwrite');
    const store = transaction.objectStore('bakpak');
    //make sure this matches the bakpak entries syntax
    const request = store.put({ savedWords });
    const result = await request;
    console.log('Word saved to the database', result);
};

// gets all the content from the database
export const getWordsDb = async () => {
    console.log('GET all from the database');
    const bakPakDB = await openDB('bakpak', 1);
    const transaction = bakPakDB.transaction('bakpak', 'readonly');
    const store = transaction.objectStore('bakpak');
    const request = store.getAll();
    const result = await request;
    console.log('result', result);
    return result;
};

initdb();
