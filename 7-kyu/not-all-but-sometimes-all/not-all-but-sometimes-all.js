function remove(str, what) {
    for (let char in what) {
        for (let i = 0; i < what[char]; i++) {
            str = str.replace(char, "");
        }
    }
    return str;
}
​