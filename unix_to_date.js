function timeConverter(UNIX_timestamp, type) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var datetime = {
        "year": a.getFullYear(),
        "month": months[a.getMonth()],
        "date": a.getDate(),
        "hour": a.getHours(),
        "min": a.getMinutes(),
        "sec": a.getSeconds()
    }

    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    if (type == "date") {
        return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    } else {
        return datetime;
    }
}