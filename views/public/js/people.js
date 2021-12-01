function getSearch() {
    let t = window.location.search !== '' ? window.location.search : '?';
    t = t.split('?')[1];
    console.log(t);
    t = t.split('&');
    let t2 = new Array();
    for (let tt of t) {
        t2.push(tt.split('='));
    }
    return t2;
}

function joinSearch(s) {
    let t = new Array();
    for (let t2 of s) {
        t.push(t2.join('='));
    }
    let t3 = t.join('&');
    return `?${t3.substring(0, t3.length)}`;
}

function setCategory(c) {
    let s = getSearch();
    let t = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] == 'category') {
            t = true;
            s[i][1] = c.toString();
        }
    }
    if (t == false) s.push(['category', c.toString()]);

    location.href = `/people${joinSearch(s)}`;
}
