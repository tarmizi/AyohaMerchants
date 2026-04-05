Ext.define('ianMizi.view.Config.Configs', {
});

var FlatBillID;
var FlatBillStatus;
var FlatBillUpdateDate;
var FlatBillID_ID;

var currentTimeGlobal = new Date()



function AddRoutePages(val) {
    // console.log(val);
    //var n = ArrappRoute.includes(Page);
    var n = ArrappRouteisOpen.includes(val);
    if (n) {
        console.log(val);
    } else {
        //ArrappRoute.push(Page);
        //ArrappRouteisOpen.push(val);

        // ArrappRoute.push(Page);
        console.log(val);
        ArrappRouteisOpen.push(val);

    }

    //console.log(ArrappRouteisOpen.length);

    // console.log(ArrappRouteisOpen.length);

}


function RoutePages() {



    var a = swal.isVisible();
    if (a) {
        swal.close();
        return;
    }

    var ii = ArrappRouteisOpen.length - 1;
    var pagesRoute;
    if (ArrappRouteisOpen.length > 0) {
        pagesRoute = ArrappRouteisOpen[ii];


        console.log(pagesRoute);

        eval(pagesRoute);

        var indexss = ArrappRouteisOpen.indexOf(pagesRoute);
        if (indexss > -1) {

            ArrappRouteisOpen.splice(indexss, 1);
        }
        ii--;

    } else {
        FloatPanel_ExitDialogBoxShow();
    }



}

//function RemovePages(Page,val) {
function RemovePages(val) {
    //var indexs = ArrappRoute.indexOf(Page);
    //if (indexs > -1) {      
    //    ArrappRoute.splice(indexs, 1);
    //}

    console.log(val);

    var indexss = ArrappRouteisOpen.indexOf(val);
    if (indexss > -1) {
        ArrappRouteisOpen.splice(indexss, 1);
    }

}

//function swalFireSuccess(Msg) {
//    Swal.fire({
//        position: 'center',
//        icon: 'success',
//        title: '<font size=5 >'+Msg+'</font>',
//        showConfirmButton: true,
//        // timer: 2500
//    });
//}

//function swalFireFail(Msg) {



//    Swal.fire({
//        title: '<font size=5 color=red>Failed!</font><br><font size=3 color=red>' + Msg + '</font>',
//        text: '',
//        imageUrl: "resources/icons/error1.gif",
//        imageWidth: 400,
//        imageHeight: 230,
//        showCloseButton: true,
//        showCancelButton: false,
//        //  confirmButtonColor: '#3085d6',
//        confirmButtonColor: 'red',
//        cancelButtonColor: '#d33',
//        confirmButtonText: 'OK',
//        footer: '<a href>Ayoha Reward v 1.0</a>'
//    }).then(function (result) {
//        if (result.isConfirmed) {



//        }
//    });


//    Ext.Viewport.unmask();
//}

//function swalFireFail(Msg) {
//    //Swal.fire({
//    //    position: 'center',
//    //    icon: 'error',
//    //    title: '<font size=5 color=red>' + Msg + '</font>',
//    //    showConfirmButton: true,
//    //    // timer: 2500
//    //});




//    Swal.fire({
//        title: '',
//        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
//        title: '<font size=3 color=red>' + Msg + '</font>',
//        imageUrl: "resources/icons/error1.gif",
//        imageWidth: 150,
//        imageHeight: 150,
//        showCloseButton: true,
//        showCancelButton: false,
//        //  confirmButtonColor: '#3085d6',
//        confirmButtonColor: '#9932cc',
//        cancelButtonColor: '#d33',
//        confirmButtonText: 'OK',
//        //footer: '<a href>Ayoha Reward v 1.0</a>'
//    })

//}


//function swalFireWarning(Msg) {
//    //Swal.fire({
//    //    position: 'center',
//    //    icon: 'error',
//    //    title: '<font size=5 color=red>' + Msg + '</font>',
//    //    showConfirmButton: true,
//    //    // timer: 2500
//    //});




//    Swal.fire({
//        title: '',
//        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
//        title: '<font size=4 color=black>' + Msg + '</font>',
//        imageUrl: "resources/icons/attention1.png",
//        imageWidth: 150,
//        imageHeight: 150,
//        showCloseButton: true,
//        showCancelButton: false,
//        //  confirmButtonColor: '#3085d6',
//        confirmButtonColor: '#9932cc',
//        cancelButtonColor: '#d33',
//        confirmButtonText: 'OK',
//        //footer: '<a href>Ayoha Reward v 1.0</a>'
//    })

//}

//function swalFireGeneralMsg(Msg) {
//    Swal.fire({
//        title: GetCurrAyohaVersion(),
//        text: Msg,
//        showConfirmButton: false,
//        imageUrl: "resources/icons/cloudrewardlogopurple.png",
//        imageWidth: 400,
//        imageHeight: 230,
//        imageAlt: 'Cloud-Reward Pro v 1.0',
//        footer: '<a href>ianMizi Technology Sdn Bhd</a>'
//    })
//}
//function swalFireInformationMsg(Msg) {
//    Swal.fire({
//        // title: GetCurrAyohaVersion(),
//        text: Msg,
//        showConfirmButton: false,
//        imageUrl: "resources/icons/informationPurple1.png",
//        imageWidth: 400,
//        imageHeight: 150,
//        //   imageAlt: 'Cloud-Reward Pro v 1.0',
//        footer: '<a href>Ayoha Reward v 1.0</a>'
//    })
//}




function swalFireSuccess(Msg) {
   // event.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<font size=5 >' + Msg + '</font>',
        showConfirmButton: true,
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        // timer: 2500
    });
}


function swalFireFail(Msg) {
  // event.preventDefault();

var nMssg=Msg.replace("Save Failed!!!<br>","");
    Swal.fire({
      title: '<font size=5 color=black>Error!</font><br><font size=3 color=grey>' + nMssg.replace("size=2","size=3") + '</font><br>',
      //  title: '<font size=4 color=black>Error!</font><br>',
     //   text: Msg,
    //     width:200,
    height:200,
      width: '400px', /*set width container*/
       //height: '150px', /*set width container*/
        imageUrl: "resources/icons/wired-gradient-1140-error.gif",
       imageWidth: 200,
       imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });


    Ext.Viewport.unmask();
}




function swalFireUpgradePro(msg) {
    // event.preventDefault();
  

      Swal.fire({
        title: '<font size=5 color=black>Upgrade Pro Version !</font><br><font size=3 color=grey>' + msg + ' Not Available in this Version</font><br>',
        //  title: '<font size=4 color=black>Error!</font><br>',
       //   text: Msg,
      //     width:200,
      height:200,
        width: '400px', /*set width container*/
         //height: '150px', /*set width container*/
          imageUrl: "resources/icons/proOren.png",
         imageWidth: 200,
         imageHeight: 200,
          showCloseButton: true,
          showCancelButton: false,
          //  confirmButtonColor: '#3085d6',
          confirmButtonColor: 'purple',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
          footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
      }).then(function (result) {
          if (result.isConfirmed) {
  
  
  
          }
      });
  
  
      Ext.Viewport.unmask();
  }







function swalFireFailLogin() {
    // event.preventDefault();
  

      Swal.fire({
        title: '<font size=5 color=black>Login Failed!</font><br><font size=3 color=grey>Invalid UserName Or Password</font><br>',
        //  title: '<font size=4 color=black>Error!</font><br>',
       //   text: Msg,
      //     width:200,
      height:200,
        width: '400px', /*set width container*/
         //height: '150px', /*set width container*/
          imageUrl: "resources/icons/wired-gradient-94-lock-unlock.gif",
         imageWidth: 200,
         imageHeight: 200,
          showCloseButton: true,
          showCancelButton: false,
          //  confirmButtonColor: '#3085d6',
          confirmButtonColor: 'purple',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
          footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
      }).then(function (result) {
          if (result.isConfirmed) {
  
  
  
          }
      });
  
  
      Ext.Viewport.unmask();
  }
  

function swalFireGeneralMsg(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '',
        text: Msg,
        showConfirmButton: false,
        //imageUrl: "resources/icons/cloudrewardlogopurple.png",
        imageUrl: "resources/icons/AyoharewardlogoPurple.png",
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })
}


function swalFireFailCustome(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        showCloseButton: true,
        showConfirmButton: false,
        confirmButtonColor: 'red',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        //imageUrl: "resources/icons/cloudrewardlogopurple.png",
        imageUrl: "resources/icons/errorklipklip.gif",
        imageWidth: 400,
        imageHeight: 230,
        // imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })
}


function swalFireInformationMsg(Msg) {
  //  event.preventDefault();
    Swal.fire({
        // title: GetCurrAyohaVersion(),
        text: Msg,
        showConfirmButton: false,
        imageUrl: "resources/icons/informationPurple1.png",
        imageWidth: 200,
        imageHeight: 150,
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        //   imageAlt: 'Cloud-Reward Pro v 1.0',
        //  footer: '<a href>Ayoha Reward v 1.0</a>'
    })
}


function swalFireInfo(Msg) {
 //   event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Merchant v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/informationPurple1.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}


function swalFireSuccesSendEmail(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/successendemail.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}





function swalFireSuccesPostReview(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/postReviewSucces02.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}

function swalFireSuccesDeletePostReview(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/wired-gradient-185-trash-bin-hover-empty.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}




function swalFireInfoMerchantButtonLink(Msg, Module) {

    var icon;

    if (Module == "WhatsApp") {
        icon = "resources/icons/whatsappdisable.png";
    } if (Module == "FB") {
        icon = "resources/icons/facebookdisabled.png";
    } if (Module == "Location") {
        icon = "resources/icons/locationdisable.png";
    } if (Module == "Insta") {
        icon = "resources/icons/instagram01.png";
    }

   // event.preventDefault();

    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: icon,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        // footer: '<a href>Ayoha Reward v 1.0</a>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}











function swalFireHoorayMessage(Msg) {
    event.preventDefault();
    Swal.fire({
        // title: 'Are you sure want to delete?',
        text: Msg,

        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/redeemAnimatedOne.gif",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {

    });


}







function swalFireSuccessStampedCardMsg(Msg) {
    event.preventDefault();
    Swal.fire({
        // title: GetCurrAyohaVersion(),
        title: Msg,
        // text: Msg,
        // background: 'rgba(255, 255, 255, 0.0)',
        showConfirmButton: false,
        imageUrl: "resources/icons/redeemAnimatedOne.gif",
        width: '280px', /*set width container*/
        height: '80px', /*set width container*/
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    });
    // $(".swal2-modal").css('background-color', 'transparent');//Optional changes the color of the sweetalert 
    //$(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');//changes the color of the overlay
    $(".swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation").css('background-color', 'rgba(0, 0, 0, 0.0)');//changes the color of the overlay




}



//function swalFireSuccessStampedCardMsg(Msg) {
//    Swal.fire({
//        // title: GetCurrAyohaVersion(),
//        title:Msg,
//       // text: Msg,
//        // background: 'rgba(255, 255, 255, 0.0)',
//        showConfirmButton: false,
//        imageUrl: "resources/icons/redeemAnimatedOne.gif",
//        width: '280px', /*set width container*/
//        height: '80px', /*set width container*/
//        imageWidth: 300,
//        imageHeight: 200,
//        imageAlt: 'Ayoha-Reward Pro v 1.0',
//        footer: '<a href>Bawang Corner Restaurant</a>'
//    });
//   // $(".swal2-modal").css('background-color', 'transparent');//Optional changes the color of the sweetalert 
//    //$(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');//changes the color of the overlay
//    $(".swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation").css('background-color', 'rgba(0, 0, 0, 0.0)');//changes the color of the overlay


    

//}



function swalFireWarning(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}



function swalFireGeneralMessaging(Msg, IconPath) {
    // event.preventDefault();
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: IconPath,
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}
function swalFireLoginFailed(Msg, IconPath) {
    // event.preventDefault();
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: IconPath,
        imageWidth: 200,
        imageHeight: 180,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'red',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}
function GetCurrStampCardQrCode() {

    var _value = localStorage.getItem('CurrStampCardQrCode');
   // var _value = '0133376958-346273';
    return _value;
}


function GetEnterpriseHQAccNo() {
    var _value = localStorage.getItem('EnterpriseHQAccNo');
    return _value;
}
function GetEnterpriseAddress() {
    var _value = localStorage.getItem('EnterpriseAddress');
    return _value;
}
function GetEnterpriseAccNo() {
    var _value = localStorage.getItem('EnterpriseAccNo');
    return _value;
}





function GetAyohaUserPicProfile() {
    var _value = localStorage.getItem('AyohaUserPicProfile');
    return _value;
}
function GetAyohaUserAccountNames() {
    var _value = localStorage.getItem('AyohaUserAccountNames');
    return _value;
}
function GetAyohaUserMembershipNo() {
    var _value = localStorage.getItem('AyohaUserMembershipNo');
    return _value;
}

function GetAyohaUserPointCampaignCode() {
    var _value = localStorage.getItem('AyohaUserPointCampaignCode');
    return _value;
}







function getLoadingIcon() {
  //  var _value = "resources/icons/loadingBlade01.gif";
    var _value = "resources/icons/wired-gradient-472-hourglasslatest.gif";
    return _value;
}





function GetEnterpriseLogoPath() {
    var _value = localStorage.getItem('CurrEnterpriseLogoPath');
    return _value;
}

function GetEnterpriseName() {
    var _value = localStorage.getItem('CurrEnterpriseName');
    return _value;
}

function GetCurrEnterpriseTagLine() {
    var _value = localStorage.getItem('CurrEnterpriseTagLine');
    return _value;
}



function GetCurrEnterpriseAddress() {
    var _value = localStorage.getItem('CurrEnterpriseAddress');
    return _value;
}

function GetCurrEnterpriseSocialMediaLink() {
    var _value = localStorage.getItem('CurrEnterpriseSocialMediaLink');
    return _value;
}

function GetCurrAdvertisementCode() {
    var _value = localStorage.getItem('CurrAdvertisementCode');
    return _value;
}

function GetPointCampaignName() {
    var _value = localStorage.getItem('PointCampaignName');
    return _value;
}

function GetPointCampaignCode() {
    var _value = localStorage.getItem('PointCampaignCode');
    return _value;
}




function GetCurrStampCampaignCode() {

    var _value = localStorage.getItem('StampCampaignCode');
    return _value;
}

function GetCurrAyohaEnterpriseUserAccountNo() {

    var _value = localStorage.getItem('AyohaEnterpriseUserAccountNo');
  //  var _value = '0133376958-346273';
    return _value;
}


function GetCurrAyohaVersion() {

    var _value = localStorage.getItem('AyohaVersion');
    return _value;
}
function GetCurr_MembershipDetailPage_SubscriberAccNo() {

    var _value = globalFloatPanel_MembershipDetailsPage_SubscriberAccNo;
    return _value;
}
function GetCurrAyohaUserAccountNo() {

    var _value = localStorage.getItem('AyohaEnterpriseUserAccountNo');
    return _value;
}
function GetCurrAyohaUserID() {

    var _value = localStorage.getItem('AyohaUserID');
    return _value;
}

function GetCurrAyohaUserKatalaluan() {

    var _value = localStorage.getItem('AyohaUserKatalaluan');
    return _value;
}

function GetStartDateStampCardCampaign() {

    var _value = localStorage.getItem('StartDateStampCardCampaign');
    return _value;
}

function GetEndDateStampCardCampaign() {

    var _value = localStorage.getItem('EndDateStampCardCampaign');
    return _value;
}

function GetCurrStampCampaignCode() {

    var _value = localStorage.getItem('StampCampaignCode');
    return _value;
}

function GetOriginalAdevertisementStartDate() {

    var _value = localStorage.getItem('OriginalAdevertisementStartDate');
    return _value;
}

function GetOriginalAdevertisementEndDate() {

    var _value = localStorage.getItem('OriginalAdevertisementEndDate');
    return _value;
}

function GetOriginalAdvertisementPeriod() {

    var _value = localStorage.getItem('OriginalAdvertisementPeriod');
    return _value;
}
function GetCurrAdvertisementType() {

    var _value = localStorage.getItem('AdvertisementType');
    return _value;
}

function CreateAdvertisementCode() {

    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            var r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            var r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid  + '-' + GetEnterpriseAccNo();
  
}


function GenerateRandomNo()
{
    var _value;
    _value= Math.floor((Math.random() * 9999999) + 1);
    return _value;
}

function GetNotificationCode() {

    var _value = localStorage.getItem('NotificationCode');
    return _value;
}


function GetPushNotificationSource() {

    var _value = localStorage.getItem('PushNotificationSource');
    return _value;
}


function GetPushNotificationBalance() {

    var _value = localStorage.getItem('PushNotificationBalance');
    return _value;
}



function GetPushNotificationQuota() {

    var _value = localStorage.getItem('PushNotificationQuota');
    return _value;
}

function GetPushNotificationTotalUsed() {

    var _value = localStorage.getItem('PushNotificationTotalUsed');
    return _value;
}





function GetEnterpriseAccNo_Advertisement() {
   
    var _value = localStorage.getItem('EnterpriseAccNo_Advertisement');
    return _value;
}

function GetDateTimeToday() {
    var _value ;
    // Get the current date and time
const now = new Date();

// Extract the date components
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const day = now.getDate().toString().padStart(2, '0');

// Extract the time components
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

// Format the date and time as needed
const currentDate = `${day}-${month}-${year}`;
const currentTime = `${hours}:${minutes}`;
_value=currentDate+' '+currentTime;
// console.log(`Current Date: ${currentDate}`);
// console.log(`Current Time: ${currentTime}`);

    
    return _value;
}

function GetDateToday() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

   // var today = year + "-" + month + "-" + day;
    var today = day + "/" + month + "/" + year;
    return today;
}

function GetCurrentMonth() {

    var _value = currentTimeGlobal.getMonth() + 1;
    return _value;
}


function GetTodayDay() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var _value = weekday[d.getDay()];

    return _value;
}
function GetCurrentYear() {

    var _value = currentTimeGlobal.getFullYear();
    return _value;
}


function GetCurrentDay() {

    var _value = currentTimeGlobal.getDate();
    return _value;
}
function GetCurrentdevicemodel() {

    var _value = device_model;
    return _value;
}

function GetCurrentdeviceplatform() {

    var _value = device_platform;
    return _value;
}

function GetCurrentdeviceuuid() {

    var _value = device_uuid;
    return _value;
}

function GetCurrentdeviceversion() {

    var _value = device_version;
    return _value;
}
function GetCurrentdevicemanufacturer() {

    var _value = device_manufacturer;
    return _value;
}

function GetCurrentdeviceisVirtual() {

    var _value = device_isVirtual;
    return _value;
}



function GetCurrentdeviceserial() {
   // var _value = localStorage.getItem('device_serial');
    var _value = "K3V4C19312000961";
    return _value;
}


function GetCurrentIP() {

    var _value = currIP;
    return _value;
}

function GetCurrentConnectionState() {

    var _value = currConnectionState;
    return _value;
}
function GetCurrentFlatBillID_ID() {

    var _value = FlatBillID_ID;
    return _value;
}

function GetCurrentFlatBillID() {

    var _value = FlatBillID;   
    return _value;
}


function GetCurrentFlatBillStatus() {

    var _value = FlatBillStatus;
    return _value;
}


function GetFlatBillStatusUpdateDate() {

    var _value = FlatBillUpdateDate;
    return _value;
}


function GetDomainUrl() {

    // var _value = 'https://setkita.com:17655';
    // var _value = 'http://192.168.0.107:9018';
     //var _value = 'https://setkita.com/CRMOBILEAPI/';
     var _value = 'https://setkita.com/';
   //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
   //  var _value = 'http://cloudreceipts.sytes.net:9018/'
     return _value;
 }

function GetAPIurl() {

   // var _value = 'https://setkita.com:17655';
   // var _value = 'http://192.168.0.107:9018';
    //var _value = 'https://setkita.com/CRMOBILEAPI/';
   // var _value = 'https://setkita.com/AYOHA_M_API/';
    var _value = '/AYOHA_M_API/';
  //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
  //  var _value = 'http://cloudreceipts.sytes.net:9018/'
    return _value;
}

function GetAPIurl_Mobile() {

    // var _value = 'http://42.1.63.57:17655';
     // var _value = 'http://192.168.0.107:9018';
    // var _value = 'https://ianmizi.com/webapiresit/webapiresit/';
     //var _value = 'https://42.1.63.57/CRMOBILEAPI/';
     //var _value = 'https://setkita.com/CRMOBILEAPI/';
      var _value = '/CRMOBILEAPI/';
    // var _value = 'https://192.168.0.101/CRMOBILEAPI/';
   //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
   //  var _value = 'http://cloudreceipts.sytes.net:9018/'
     return _value;
 }
function GetCurrentOneSignalPlayerID() {

    var _value = OneSignalPlayerID;
    return _value;
}
function GetCurrentOneSimInfo() {

    var _value = SimInfo;
    return _value;
}

function GetCurrentAccountID() {

    var _value = localStorage.getItem('CurrAccountID');
    return _value;
}

function GetCurrentMyKadNo() {

    var _value = localStorage.getItem('CurrMykadNo');
    return _value;
}

function GetCurrentAccountNo() {

    var _value = localStorage.getItem('CurrAccountNo');
    return _value;
}


function GetCurrentUserAccountNo() {

    var _value = localStorage.getItem('CurrentUserAccountNo');
    return _value;
}


function GetCurrentAccountName() {

    var _value = localStorage.getItem('CurrAccountName');
    return _value;
}



function GetCurrentUserLogin() {

    var _value = localStorage.getItem('CurrentUserLogin');
    return _value;
}


function GetCurrentUserName() {

    var _value = localStorage.getItem('CurrUserName');
    return _value;
}
function GetCurrentPassword() {

    var _value = localStorage.getItem('CurrPassword');
    return _value;
}

function GetCurrentEmail() {

    var _value = localStorage.getItem('CurrEmail');
    return _value;
}
function GetCurrentPhoneNumber() {

    var _value = localStorage.getItem('CurrPhoneNumber');
    return _value;
}

function GetCurrentRegisterDate() {

    var _value = localStorage.getItem('CurrRegisterDate');
    return _value;
}
function GetCurrentAccountStatus() {

    var _value = localStorage.getItem('CurrAccountStatus');
    return _value;
}

function GetCurrentLastLoginDate() {

    var _value = localStorage.getItem('CurrLastLoginDate');
    return _value;
}

function GetCurrentLoginIP() {

    var _value = localStorage.getItem('CurrLoginIP');
    return _value;
}

function GetCurrentVersion() {

    var _value = localStorage.getItem('CurrVersion');
    return _value;
}

function GetCurrFlatBillStatusAndCategory() {
    var _value = localStorage.getItem('CurrFlatBillStatusAndCategory');
    return _value;
}


function GetCurrCloudReceiptAccount() {

    var _value = localStorage.getItem('CurrCloudReceiptAccount');
    return _value;
}

function GetCurrCountNotificationTypeR() {
    var _value = localStorage.getItem('CurrCountNotificationTypeR');
    return _value;
}

function GetCurrCountNotificationTypeNN() {
    var _value = localStorage.getItem('CurrCountNotificationTypeNN');
    return _value;
}

function GetCurrSumCountNotification() {
    var _value = localStorage.getItem('CurrSumCountNotification');
    return _value;
}


function GetCurrPictureProfile() {
    var _value = localStorage.getItem('CurrPictureProfile');
    return _value;
}

function GetCurrDayLeft() {
    var _value = localStorage.getItem('CurrDayLeft');
    return _value;
}

function GetCurrentToolbarStyle() {

    var _value = 'background: #f44336';
    if (GetCurrentVersion() == 'Standard 1.1') {
        _value = 'background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;';
    } 

   
    return _value;
   
}

function GetbackgroundColor() {

   var _value = 'background-color:#EBEDF0;';
    
  //var _value = 'background-color:white;';
   
    return _value;
   
}


function GetListFontColor() {

    //var _value = '#69707a';
    var _value = 'black';
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }
 function GetHeaderStyle() {

    //var _value = '#69707a';
   // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ccc;border-top:2px none #ECF0F1 ;background: white;',
    var _value = 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ccc;border-top:2px none #ECF0F1 ;background: white;';
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }
 function GetFooterStyle() {

    //var _value = '#69707a';
  //  var _value = 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ccc;background: white;box-shadow: 18px 0px 18px #888888;';
    var _value = 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ccc;background: white;';
    
     return _value;
    
 }
 function GetListFontStyle(){
  //  var _value="Metropolis, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
    var _value="Helvetica Neue, HelveticaNeue, Helvetica-Neue, Helvetica, BBAlpha Sans, sans-serif";
    
    return _value;
}
function GetInputLineColor() {

    var _value = '#CCCCCC';
     
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }

 function GetTableListHeader() {

    var _value = 'background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;';
     
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }
 function GetTableListTextHeader() {

    var _value = 'font-family: Arial;font-size:13px;color:#333';
     
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }
 
 function GetTableBorder() {

    var _value = 'border-right:2px solid #CCCCCC;border-left:2px solid #CCCCCC;border-bottom:2px solid #CCCCCC;border-top:2px solid #CCCCCC;';
     
   //  var _value = 'background-color:white;';
    
     return _value;
    
 }

 
 
function GetNotificationDate() {
    var _value = localStorage.getItem('NotificationDate');
    return _value;
}

function GetNotificationLogo64() {
    var _value = localStorage.getItem('NotificationLogo64');
    return _value;
   
}
function GetSentFrom() {
    var _value = localStorage.getItem('SentFrom');
    return _value;
}




function GetNotificationTitle() {
    var _value = localStorage.getItem('NotificationTitle');
    return _value;
}

function GetNotification() {
    var _value = localStorage.getItem('Notification');
    return _value;
}

function GetAdvertisementImage() {
    var _value = localStorage.getItem('AdvertisementImage');
    return _value;
}



function GetQRCodeImg() {

    var _value = localStorage.getItem('QRCodeImg');
    return _value;

}

function ConvertMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = 'January';
    }
    if (Month == '2') {
        Bulan = 'February';
    } if (Month == '3') {
        Bulan = 'March';
    } if (Month == '4') {
        Bulan = 'April';
    } if (Month == '5') {
        Bulan = 'May';
    } if (Month == '6') {
        Bulan = 'June';
    } if (Month == '7') {
        Bulan = 'July';
    } if (Month == '8') {
        Bulan = 'August';
    } if (Month == '9') {
        Bulan = 'September';
    } if (Month == '10') {
        Bulan = 'Oktober';
    } if (Month == '11') {
        Bulan = 'November';
    } if (Month == '12') {
        Bulan = 'December';
    }





    return Bulan
}

function ConvertShortMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = 'Jan';
    }
    if (Month == '2') {
        Bulan = 'Feb';
    } if (Month == '3') {
        Bulan = 'Mar';
    } if (Month == '4') {
        Bulan = 'Apr';
    } if (Month == '5') {
        Bulan = 'May';
    } if (Month == '6') {
        Bulan = 'Jun';
    } if (Month == '7') {
        Bulan = 'Jul';
    } if (Month == '8') {
        Bulan = 'Aug';
    } if (Month == '9') {
        Bulan = 'Sep';
    } if (Month == '10') {
        Bulan = 'Okt';
    } if (Month == '11') {
        Bulan = 'Nov';
    } if (Month == '12') {
        Bulan = 'Dec';
    }





    return Bulan
}


function ConvertShortStringMonth(Month) {
    var Bulan
    if (Month == 'Jan') {
        Bulan = '1';
    }
    if (Month == 'Feb') {
        Bulan = '2';
    } if (Month == 'Mar') {
        Bulan = '3';
    } if (Month == 'Apr') {
        Bulan = '4';
    } if (Month == 'May') {
        Bulan = '5';
    } if (Month == 'Jun') {
        Bulan = '6';
    } if (Month == 'Jul') {
        Bulan = '7';
    } if (Month == 'Aug') {
        Bulan = '8';
    } if (Month == 'Sep') {
        Bulan = '9';
    } if (Month == 'Okt') {
        Bulan = '10';
    } if (Month == 'Nov') {
        Bulan = '11';
    } if (Month == 'Dec') {
        Bulan = '12';
    }





    return Bulan
}

function ConvertinputTypeMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = '01';
    }
    if (Month == '2') {
        Bulan = '02';
    } if (Month == '3') {
        Bulan = '03';
    } if (Month == '4') {
        Bulan = '04';
    } if (Month == '5') {
        Bulan = '05';
    } if (Month == '6') {
        Bulan = '06';
    } if (Month == '7') {
        Bulan = '07';
    } if (Month == '8') {
        Bulan = '08';
    } if (Month == '9') {
        Bulan = '09';
    } if (Month == '10') {
        Bulan = '10';
    } if (Month == '11') {
        Bulan = '11';
    } if (Month == '12') {
        Bulan = '12';
    }





    return Bulan
}

function notificationdateonchange() {
    var MonthYearNoti = document.getElementById('NotificationmonthID').value;
   

    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }

    var input0 = MonthYearNoti;
    var partsOfStr = input0.split('-');
    loadNotificationTypeN_All_fromInputMonthYear(partsOfStr[0], partsOfStr[1])
    document.getElementById("input-SearchNotificationPanel_SearchTxt").addEventListener("keyup", inputSearchNotificationPanel_SearchTxtOnKeyUp);
    _DataStore_SearchNotificationPanelSearchTxt = Ext.getStore('NotificationTypeNAllStore');
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}




function Initialnotificationdateonchange(val) {
    var MonthYearNoti = val;
    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}
function setTheme() {
    if (GetCurrentVersion() == 'Standard 1.1') {
      ////  Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //// // Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //////  Ext.getCmp('LoyaltyCardStamptoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  //Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))');
      ////  //Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/BGsummary6.jpg"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

      ////  Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('Notificationmonth').setHidden(false);
      ////  Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
      ////  Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
      ////  Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
      ////  //////Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');
        
        
    } else {
        //Ext.getCmp('xtypeLogin').setStyle('background: #f44336');
        //Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
        //Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');



        Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //  Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
     
        Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
        Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
        Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
        Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

        Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
        Ext.getCmp('Notificationmonth').setHidden(false);
        Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
        Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
        Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
    }

}



function setThemeloginpage() {
  
    //if (GetCurrentVersion() == 'Standard 1.1') {
    //    Ext.getCmp('xtypeLogin').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');      
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');


    //} else {
    //    Ext.getCmp('xtypeLogin').setStyle('background: #f44336');     
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
      
    //}

}


function setThemeNotificationPanelIndividual() {
    if (GetCurrentVersion() == 'Standard 1.1') {
     
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');



    } else {
      
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      
    }
}


function summaryreceiptbottomtoolbarVstandard1point1(val) {
    console.log("summaryreceiptbottomtoolbarVstandard1point1");





    if (val == 'NewReceipt') {
        //ori
       
       // Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black"><u><b>New Receipt(s)</b></u></font>');
      //  Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="red"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')

    } if (val == 'Claimable') {
        

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="red"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')
    } if (val == 'Partially Paid') {

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="red"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Deposit') {
      

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="red"><b><u>Deposit</u></b></font>')

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Warranty') {
     

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="red"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'General') {
      

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="red"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'RecentlyConfirm') {
        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="red"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');
    } if (val == 'RecentlyVoid') {

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="red"><b><u>Recently Reject</u></b></font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        
    }
  
    receiptCategoryCount();

}





//var summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//function summaryreceiptlistbackgroundcolor() {
//    summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//    if (GetCurrentVersion() == 'Standard 1.1') {

//        summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//        console.log('if');
//    } else {
//        console.log('else')
//        summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
//    }
//}

//function getValuesummaryreceiptlistbackgroundcolor() {
//    window.summaryreceiptlistbackgroundcolorset; // yup, it's "test"
//}



var summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';

var objs = {
    fs: function () {
        
        summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistcolorset = 'backgroundlistdowngrades.jpg';
        }
      
    }
};
//objs.fs();












var summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';

var obj = {
    f: function () {
       
        summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
       
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistdowngrades.jpg');
        }
       
    }
};
//obj.f();









function CustomePanelSetHeight(containerOne, containerTwo) {

    var x = parseInt(screen.width);
    var y = parseInt(screen.height)-370;
    var y2 = parseInt(screen.height) - 374;
    console.log("y:" + y + "  y2:" + y2);


   



    Ext.getCmp(containerOne).setHeight(y);
    Ext.getCmp(containerTwo).setHeight(y2);







}



function GetEnterprisePhoneNo() {

    var _value = localStorage.getItem('EnterprisePhoneNo');
    return _value;
}
function GetEnterpriseEmail() {

    var _value = localStorage.getItem('EnterpriseEmail');
    return _value;
}

function GetEnterpriseWebsite() {

    var _value = localStorage.getItem('EnterpriseWebsite');
    return _value;
}

function GetEnterpriseFacebook() {

    var _value = localStorage.getItem('EnterpriseFacebook');
    return _value;
}
function GetEnterpriseTwiter() {

    var _value = localStorage.getItem('EnterpriseTwiter');
    return _value;
}

function GetEnterpriseInstagram() {

    var _value = localStorage.getItem('EnterpriseInstagram');
    return _value;
}
function GetEnterpriseCoordinate() {

    var _value = localStorage.getItem('EnterpriseCoordinate');
    return _value;
}

function GetPICContactNo() {

    var _value = localStorage.getItem('PICContactNo');
    return _value;
}

function GetPersonInCharge() {

    var _value = localStorage.getItem('PersonInCharge');
    return _value;
}


function swalFireDynamicIconWithMessage(Path, Msg, fontColor, ButtonColor) {
    event.preventDefault();
    Swal.fire({
        title: '<font color=' + fontColor + ' size=3>' + Msg + '</font>',
        text: '',
        imageUrl: Path,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        //confirmButtonColor: '#9932cc',
        confirmButtonColor: ButtonColor,
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}



function swalFireDynamicIconWithMessage_NoPreventDefault(Path, Msg, fontColor, ButtonColor) {

    Swal.fire({
        title: '<font color=' + fontColor + ' size=3>' + Msg + '</font>',
        text: '',
        imageUrl: Path,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        //confirmButtonColor: '#9932cc',
        confirmButtonColor: ButtonColor,
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}





function swalFireWarning_NoPreventDefault(Msg) {
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}





function MasterCountLatestNoByEnterpriseAccNo(EnterpriseAccNo,TableName) {
   // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNo,
            "TableName": TableName
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Master/MasterCountLatestNoByEnterpriseAccNo',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        globalFloatPanel_AyohaRewardEventSetting_LatestNo = data.results[0].LatestNo;
                       


                        }
                       
                    
                    if (data.total == 0) {

                        Ext.Viewport.unmask();
                        globalFloatPanel_AyohaRewardEventSetting_LatestNo=0;
                      
                    }





                }
                else {


                    Ext.Viewport.unmask();
                }
               // return globalFloatPanel_AyohaRewardEventSetting_LatestNo;

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });

       // return globalFloatPanel_AyohaRewardEventSetting_LatestNo;

    });

    //  Ext.Viewport.unmask();

    //   setMerchantReviewRate_BarChart(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);

    task.delay(500);


}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


function capitalizeAllLetter(val) {
    return val.toUpperCase();
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function changeColorDivList(color) {
    document.querySelector('.colorful-div').style.backgroundColor = color;
}






function AccessRule(Modul,Level){
    
    
    if(Modul=="DrawerMenu"){
        
    }
    if(Modul=="EnterpriseInfo"){

    }
    if(Modul=="EnterprisePage"){
        
    }
    if(Modul=="MembershipCardPage"){
        
    }
    if(Modul=="UserList"){
        
    }
    if(Modul=="MembershipSubscriberList"){
        
    }
    if(Modul=="MembershipApprovalList"){
        
    }
    if(Modul=="RewardRedemption"){
        
    }
    if(Modul=="MemberCampaignActivityLog"){
        
    }
    if(Modul=="MembershipCardSetting"){
        
    }
    if(Modul=="CreateNewMembershipCard"){
        
    }
    if(Modul=="StampLoyaltySetting"){
        
    }
    if(Modul=="PointLoyaltySetting"){
        
    }
    if(Modul=="MembershipCardDiscount"){
        
    }
    if(Modul=="ContestManagement"){
        
    }
    if(Modul=="VoucherSetting"){
        
    }
    if(Modul=="MembershipEventSetting"){
        
    }
    if(Modul=="MyAdvertisementList"){
        
    }
    if(Modul=="CreateNewAdvertisement"){
        
    }
    if(Modul=="PushNotification"){
        
    }
    if(Modul=="MessagingActivityLog"){
        
    }
    if(Modul=="MyAyohaStoreSetting"){
        
    }
    if(Modul=="DeliveryChargeSetting"){
        
    }
    if(Modul=="ClientShoppingCart"){
        
    }
    if(Modul=="NewOrder"){
        
    }
    if(Modul=="OrderHistory"){
        
    }
    if(Modul=="PaymentHistory"){
        
    }
    if(Modul=="AyohaStoreStatistic"){
        
    }
    if(Modul=="OthersOnlineStore"){
        
    }
}







function checkingDisplaySize(){

    var w=window.screen.width;
    var h=window.screen.height;

    // alert('width:'+w);
    // alert('height:'+h);

    // Get the width of the viewport
const viewportWidth = window.innerWidth;

// Get the height of the viewport
const viewportHeight = window.innerHeight;

 



    // alert('viewportWidth:'+viewportWidth);
    // alert('viewportHeight:'+viewportHeight);





// width:1536
// height:864
// viewportWidth:1536
// viewportHeight:730


return viewportHeight;










}








function swalFireOpenStepSuccess(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Merchant v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/wired-gradient-1350-loyalty-card.gif",
        imageWidth: 280,
        imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}

function swalFireOpenStepSuccess_OpenBusinessWallet(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Merchant v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/wired-gradient-421-wallet-purse.gif",
        imageWidth: 280,
        imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}

function swalFireOpenStepSuccessPrintAndDisplayQrCode() {
    event.preventDefault();
   
//     swal.fire({
//         buttons: false,
//        // footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
//         content: {
//           element: "div",
//           attributes: {
//             innerHTML: `
//               <div style="text-align: center;">
//                 <img src="resources/icons/wired-gradient-2462-fireworks.gif" alt="Icon" style="width: 280px; height: 200px;">
//                 <h2>Ayoha Merchant v 1.0</h2>
//                 <p>Congratulations! You now have access to our Ayoha Merchant Membership system!</p>
//                 <p>Alongside this, you can also take advantage of our Ayoha eWallet and Ayoha Online Store, which can be set up at your convenience.</p>
//                 <p>Enjoy the full suite of features designed to support and grow your business!</p>
//               </div>
//             `
//           }
//         }
//       });
      
   
   
//    return
   
   
   
   
   
   
   
    Swal.fire({
        title: '<font size=5>Ayoha Merchant v 1.0</font>',
        //text: Msg,
        html: '<div style="width:100%;height:280px;font-size:16px;text-align:left;font-weight:normal">Congratulations! You now have access to our Ayoha Merchant Membership system!.<br><br> Alongside this, you can also take advantage of our Ayoha eWallet and Ayoha Online Store, which can be set up at your convenience. <br><br>Enjoy the full suite of features designed to support and grow your business!<br><br><br><div style="width:100%;height:70px;font-size:16px;text-align:center;font-weight:normal"><img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/></div></div>',        
        imageUrl: "resources/icons/wired-gradient-2462-fireworks.gif",
        imageWidth: 280,
        imageHeight: 200,
        showCloseButton: true,
        // showCancelButton: false,
        buttons: false,
       // showConfirmButton:false,
        //  confirmButtonColor: '#3085d6',
        // confirmButtonColor: '#9932cc',
        // cancelButtonColor: '#d33',
        // confirmButtonText: 'OK',
      //  footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });

   // swal2-confirm swal2-styled
    document.querySelector('.swal2-confirm.swal2-styled').style.display = 'none';
}

function swalFireInformationMsgOpenAccount(User,Msg,Photo) {
    //  event.preventDefault();
   // alert(Photo)
      Swal.fire({
         // title:'Hello , '+User+'!',
         // html: Msg,  
          //imageUrl: "resources/icons/wired-gradient-749-interface-settings.gif",
          html: '<img src="'+Photo+'" style="width:150px;height:150px;border-radius:50%" alt="Company Name"/><font size=5px><br><b>Hello!,'+User+'</b></font><br><br>'+Msg,         
          imageWidth: 280,
          imageHeight: 200,
          //imageBorderRadius:'50%',
          showCloseButton: true,
          showCancelButton: false,
          //  confirmButtonColor: '#3085d6',
          confirmButtonColor: '#9932cc',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Welcome',
          footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
          allowOutsideClick: false
      }).then(function (result) {
          if (result.isConfirmed) {
  
  
  
          }
      });

      const style = document.createElement('style');
style.innerHTML = `
    .swal2-image.custom-image-class {
        border-radius: 50%;
    }
`;
document.head.appendChild(style);
  }

  function toTitleCase(str) {
    return str
        .toLowerCase()
        .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}



function SampleRefactoreLoadDataStore02(){
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');
    
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load({
        callback: function (records, operation, success) {
            if (success) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                // Loop through all records
                records.forEach(function (record) {
                    var planCode = record.get('PaymentPlanCode');
                    var fee = record.get('MembershipCardFee');
                    var cycle = record.get('MembershipCardFeePaymentCycle');
    
                    console.log('Plan Code:', planCode);
                    console.log('Fee:', fee);
                    console.log('Cycle:', cycle);
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = parseFloat(fee);
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_plan = cycle;
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode = cycle;
    
                    // You can also trigger UI actions here like:
                  // changeBackground(null, fee, cycle, 1);
                    //changeBackground
                    changeBackgroundfromdataload(document.querySelector('.membership-card-container'), fee, cycle, 1);
                    //changeBackground(event,{MembershipCardFee},`{MembershipCardFeePaymentCycle}`,`{1}`)
                });
    
                // Optionally continue your task after loading
                FloatPanel_MembershipCardList_NotYetSubscribed_loadEnterprise();
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data.');
                LoadingPanelHide();
            }
        }
    });
}


function SampleRefactoreLoadDataStore03(){
_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');

_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load({
callback: function (records, operation, success) {
    if (success && records.length > 0) {
        console.log('Store loaded successfully, total records: ' + records.length);

        var record = records[0]; // Access only the first record
        var planCode = record.get('PaymentPlanCode');
       
        LoadingPanelHide();
    } else {
        console.error('Failed to load store data or no record found.');
        LoadingPanelHide();
    }
}
});
}