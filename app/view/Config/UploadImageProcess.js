

Ext.define('ianMizi.view.Config.UploadImageProcess', {
});



var globalUploadImageProcess_ImageResult;

function UploadImage() {


    var ImgCompenant = localStorage.getItem("ImageCompenant");
    var Module = localStorage.getItem("Module");
    var file = document.getElementById(ImgCompenant).files[0];


    var fileName = document.getElementById(ImgCompenant).files[0].name;
    //localStorage.setItem("UploadImageProcess_ImageName", fileName);
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName = fileName;
    //  var AccountName = document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value;
   // alert(globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName);
    //var FileSize = file.size / 1024; // in MB
    //console.log(FileSize);
    //if (FileSize > 4096) {


    //    swalFireFail("Image size cannot exceeds 4 MB!");
    //    // CustomeMsgBoxShow('Image size exceeds 200 KB!');
    //    return;
    //    // $(file).val(''); //for clearing with Jquery
    //} else {

    if (file) {

        if (file.type.match("image.*")) {
            var reader = new FileReader();
            reader.readAsDataURL(file/*, "UTF-8"*/);
            reader.onload = function (event) {
                globalUploadImageProcess_ImageResult = event.target.result;
                //document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value = fileName;
                // console.log("Original Size:" + globalUserPicProfile64);




                if (Module == "FloatPanel_AyohaStoreMerchant_AddEditItem") {
                    //  Ext.getCmp('htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture').setSrc(globalUploadImageProcess_ImageResult);
                    Ext.getCmp('htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture').setHtml('<img src="' + globalUploadImageProcess_ImageResult + '"  style="width:100%;height:' + globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage + 'px"  alt="Company Name">');
                }


                ResizeImage(ImgCompenant);

            };


        }
        else {
            //  img64AccPicProfile = Picture;
        }
    }



    //}
}


function ResizeImage(Compenant) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById(Compenant).files;
        var file = filesToUploads[0];
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                globalUploadImageProcess_ImageResult = "";

                globalUploadImageProcess_ImageResult = canvas.toDataURL(file.type);

                // document.getElementById('output').src = dataurl;

                // Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + dataurl + '"  style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>');

                // console.log("Resize image:" + globalUserPicProfile64)
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}
