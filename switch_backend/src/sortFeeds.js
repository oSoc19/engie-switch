module.exports = (a, b) => {
    if (new Date(a.dateTime) > new Date(b.dateTime)) {
        return -1;
    }
    if (new Date(a.dateTime) < new Date(b.dateTime)) {
        return 1;
    }
    return 0;
}