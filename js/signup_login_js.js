var arrayOfObjects =
    [{"HoTen": "Nguyễn Công Phượng", "Username": "khachhang1@gmail.com", "Password": "111111"},
    { "HoTen": "Lương Xuân Trường", "Username": "khachhang2@gmail.com", "Password": "222222"},
    { "HoTen": "Bùi Tiến Dũng", "Username": "khachhang3@gmail.com", "Password": "333333"}];
    localStorage.setItem('arrayOfObjects', JSON.stringify(arrayOfObjects));
    var retrievedObject = localStorage.getItem('arrayOfObjects');
    console.log('ObjectUsers: ', JSON.parse(retrievedObject));

function getSignUp() {

    // get object user

    var getHoTen = $('#txtHoTen').val();
    var getUserName = $('#txtEmail').val();
    var getPassWord = $('#txtMK').val();

    if (getPassWord != "") {

        arrayOfObjects.push({"HoTen": getHoTen,"Username": getUserName, "Password": getPassWord});

        //}
        localStorage.setItem('arrayOfObjects', JSON.stringify(arrayOfObjects));
        var retrievedObject = localStorage.getItem('arrayOfObjects');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        //console.log("yeah");
    }


    // body...
}
function myClickSignUp() {
    var getHoTen = $('#txtHoTen').val();
    var getUserName = $('#txtEmail').val();
    var getPassWord = $('#txtMK').val();


    if (getPassWord != "") {

        arrayOfObjects.push({"HoTen": getHoTen,"Username": getUserName, "Password": getPassWord});

        //}
        localStorage.setItem('arrayOfObjects', JSON.stringify(arrayOfObjects));
        var retrievedObject = localStorage.getItem('arrayOfObjects');
        console.log('ObjectUsers: ', JSON.parse(retrievedObject));
        //console.log("yeah");
    }

    $('#txtHoTen').val("");
    $('#txtEmail').val("");
    $('#txtMK').val("");
    $('#txtCheckMK').val("");

    $('#txtHoTen').addClass("none");
    $('#txtEmail').addClass("none");
    $('#txtMK').addClass("none");
    $('#txtCheckMK').addClass("none");
    
}
function CheckLogin() {

    //alert("asd");
    var getUserName = $('#txtEmailLogin').val();
    var getPassWord = $('#txtMKLogin').val();

    var check = false;



    for (var i = 0; i < arrayOfObjects.length; i++) {
        var object = arrayOfObjects[i];

        if(getUserName == object.Username) {
            if(getPassWord == object.Password) {
                check = true;
                break;
            }
            else {
                $("#noticeMKLogin").html("Nhập sai mật khẩu");
            }
        }
        else {
            $("#noticeEmailLogin").html("Không tồn tại hoặc nhập sai tài khoản");
        }

    }
    if(check) {
        alert("Đăng nhập thành công");
        $('#txtEmailLogin').val("");
        $('#txtMKLogin').val("");
    }


    // body...
}



$(function () {

    function KiemtraBatBuoc_RegularExpression(txt, re, tb, mess) {
        if (txt.val() == "") {
            txt.addClass("er");
            tb.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(txt.val())) {
            txt.addClass("er");
            tb.html(mess);
            return false;
        }
        txt.removeClass("er");
        txt.addClass("accepted");
        return true;
    }


    $("#txtHoTen").blur(function () {
        KiemtraBatBuoc_RegularExpression($("#txtHoTen"), /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u, $("#noticeHoTen"), "Họ tên phải có ít nhất 2 từ")
    });


    $("#txtEmail").blur(function () {
        KiemtraBatBuoc_RegularExpression($("#txtEmail"), /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, $("#noticeEmail"), "Nhập sai format");
    });


    function KiemTraMatKhau() {
        var getMatKhau = $("#txtMK").val();

        if (getMatKhau.length < 6) {
            $("#txtMK").addClass("er");

            console.log("abc");
            $("#noticeMK").html("Mật khẩu phải có ít nhất 6 ký tự");
            return false;
        }
        else {
            $("#noticeMK").html("");
            $("#txtMK").removeClass("er");
            $("#txtMK").addClass("accepted");
            return true;
        }


        // body...
    }

    $("#txtMK").blur(KiemTraMatKhau);


    function KiemTraLaiMatKhau() {
        var getLaiMatKhau = $("#txtCheckMK").val();
        var getMatKhau = $("#txtMK").val();


        if (getMatKhau != getLaiMatKhau) {
            $("#txtCheckMK").addClass("er");
            $("#noticeCheckMK").html("Mật khẩu phải trùng");
            return false;
        }
        $("#txtCheckMK").removeClass("er");
        $("#txtCheckMK").addClass("accepted");
        $("#noticeCheckMK").html("");
        return true;


        // body...
    }

    $("#txtCheckMK").blur(KiemTraLaiMatKhau);

    $("#btnSubmitSignUp").click(function () {


        if (!KiemtraBatBuoc_RegularExpression($("#txtHoTen"), /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u, $("#noticeHoTen"), "Họ tên phải có ít nhất 2 từ")
            || !KiemTraMatKhau() || !KiemTraLaiMatKhau) {
            $("#noticeLogin").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }



        $('#txtHoTen').addClass("none");
        $('#txtEmail').addClass("none");
        $('#txtMK').addClass("none");
        $('#txtCheckMK').addClass("none");


    })


})