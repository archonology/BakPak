// handle date stamping for reference, ID, and storage
let currentdate = new Date();
export let datetime = (currentdate.getMonth() + 1) + "/"
    + currentdate.getDate() + "/"
    + currentdate.getFullYear() + ' @ '
    + currentdate.getHours() + ':'
    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes() + ':'
    + (currentdate.getSeconds() < 10 ? '0' : '') + currentdate.getSeconds();