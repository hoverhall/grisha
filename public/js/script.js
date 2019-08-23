$("#sendBtn").click(function(e) {
    makeRequest($("#inpMessField").val())
    $("#inpMessField").val("")
});

$(document).keypress((e) => {
    if (e.which == 13) {
        makeRequest($("#inpMessField").val())
        $("#inpMessField").val("")
    }
});

var makeRequest = (value) => {
    var str = { "message": "" }

    str["message"] = value;

    $.ajax({
        type: "POST",
        data: str,
        url: "/index",
        dataType: "JSON",
        success: msg => uploadMessHistory(msg),
        fail: err => alert("404: Not found - " + err)
    });
}

var oldValues;

var uploadMessHistory = (msg_arr) => {
    if (oldValues != msg_arr) {
        $(".message").remove();
        for (var i = 0; msg_arr.length > i; i++) {
            var json = JSON.parse(msg_arr[i].message)

            $(".messageBox").append(
                `<div class="message">
                <div class="user">
                <!-- <img class="icon"> -->
                <span class="fname">${json.from.first_name} </span>
                <span class="lname">${json.from.last_name}</span>
                </div>
                <div class="mess_content"><p class="message_text">${json.text}</p></div>
                </div>`
            )
        }
        oldValues = msg_arr
    }
}

setInterval((e) => {
    makeRequest("")
}, 500);