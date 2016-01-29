function check_name(data, error) {
    if(data == ""){
        error.push("名前が未入力です");
    }
    return error;
}

function check_tel(data, error) {
    if(data == ""){
        error.push("電話番号が未入力です");
    }
    return error;
}
