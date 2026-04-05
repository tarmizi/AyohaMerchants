////Ext.define('ianMizi.view.FloatPanel.ForgotPasswordPanel', {
////});









////var _ForgotPasswordPanel;

////function ForgotPasswordPanel() {
////    _ForgotPasswordPanel =
////      Ext.create('Ext.Panel', {

////          xtype: 'panel',
////          height: 250,
////          width: 200,
////          id: 'ForgotPasswordPanelID',
////          draggable: false,



////          centered: true,
////          //bottom: 64,
////          zIndex: 40,
////          modal: true,
////          hideOnMaskTap: true,
////          layout: {
////              type: 'fit'
////          },
////          showAnimation: {
////              type: 'popIn',
////              duration: 250,
////              easing: 'ease-out'
////          },
////          hideAnimation: {
////              type: 'popOut',
////              duration: 250,
////              easing: 'ease-out'
////          },
////          style: 'border-bottom:0px solid;background-color:white;',
////          items: {




////              //  margin:'-50 0 0 0',
////              //height: 150,
////              //width: 200,
////              xtype: 'container',
////           //   style: 'border-bottom:0px solid;background-color:#353839;',

////              layout: {
////                  type: 'vbox',
////                  pack: 'center',
////                  align:'center'

////              },

////              items: [
////                  {
////                      //   xtype: 'panel',
////                      //  bodyPadding: 10,
////                      //height: 180,
////                      //width: 350,

////                        margin: '-8 0 0 0',

////                      //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',

////                        html: '<a href="mailto:Support@Cloud-Receipts.com?subject=Forgot My Password&body=Hi,I would like to request new password.<br><br>Cloud-Receipts.com Reference ID:' + localStorage.getItem('device_serial') + 'TQ"><img src="resources/icons/crSupport.png" width="75" height="75"/></a>',
////                      //  html: '<img src="resources/icons/CloudReceipt.png" width="180" height="160"/>',



////                      //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


////                  },
////                  {
////                      xtype: 'panel',
////                      height: 10
////                  },
////                     {
////                         xtype: 'label',
////                         // align: 'stretch',
////                         //align: 'left',
////                         labelWrap: true,
////                         id: 'txtForgotPasswordPanel',
////                         // ui: 'plain',
////                         margin: '-5 0 0 0',
////                         //  padding: '5px',
////                         html: '<font size="2" color="black"><center><b>Forgot Password?<br></b></center></font>',


////                     },
////                     {
////                         xtype: 'label',
////                         // align: 'stretch',
////                         //align: 'left',
////                         labelWrap: true,
////                         id: 'txtForgotPasswordPanelsub',
////                         // ui: 'plain',
////                         margin: '0 0 0 0',
////                         //  padding: '5px',
////                         html: '<font size="1" color="black"><center>Upon email verified,a generated password will be send to your email</center></font>',


////                     },
////                  //{
////                  //    xtype: 'button',
////                  //    align: 'stretch',
////                  //    //align: 'left',

////                  //    id: 'txtreg',
////                  //    ui: 'plain',

////                  //    //  padding: '5px',
////                  //    text: '<font size=3px color=white><u><center><b>Verification Code</b></center></u></font>',
////                  //    handler: function () {


////                  //    },


////                  //},
////                  {
////                      xtype: 'panel',
////                      height:35
////                  },
////               {

////                   //xtype: 'textfield',
               
////                   //id: 'CR_EmailForgotPasswordPanel',
////                   //required: true,
////                   //labelWrap: true,
////                   //disabled: false,

////                   //   placeHolder: 'Enter Email'
////                   html: '<input type="text" id="input-ForgetPassword" placeholder="Enter email" style="border-color:red;color:black;width:170px;text-align: center">'

////               },


////                 {
////                     xtype: 'button',
////                     align: 'stretch',
////                     //align: 'left',

////                     id: 'btnForgotPasswordPanelSendEmail',
////                     ui: 'decline',
////                     margin: '5 0 0 0',
////                     padding: '7px',
////                     text: '<font size=3px color=white><center><b>Send Password</b></center></font>',
////                     handler: function () {

////                         checkEmailisExist();
////                     },


////                 },







////              ]




////          }







////      });
////    return _ForgotPasswordPanel;
////}



////function ForgotPasswordPanelHide() {
////    _ForgotPasswordPanel.hide();
////    routeForgotPasswordIsOpen = 'N';
////}



////function ForgotPasswordPanelShow() {
////    Ext.Viewport.remove(_ForgotPasswordPanel);
////    this.overlay = Ext.Viewport.add(ForgotPasswordPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
////    // }
////    this.overlay.show();
////    routeForgotPasswordIsOpen = 'Y';

////}





////function checkEmailisExist() {
////    Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
////        EmailID: document.getElementById('input-ForgetPassword').value,
////    });
////    Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
////    LoadingCustomMsgShow('Processing...', '4')
////    Ext.Viewport.mask({ xtype: 'loadmask', message: 'checkEmailID..' });
////    var task = Ext.create('Ext.util.DelayedTask', function () {
////        Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
////            EmailID: document.getElementById('input-ForgetPassword').value,
////        });
////        Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
////        var myStore = Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore');
////        var count = myStore.getCount();
     
////        if (count >= 1) {
////            getRegeneratedPwd();
////        } else {
////            LoadingCustomMsgShow('Email Not Registered!', '2')
////           // LoadingCustomMsgHide();
////        }
////        ForgotPasswordPanelHide();
////        Ext.Viewport.setMasked(false);
////    });
////    task.delay(2000);
////}




////function getRegeneratedPwd() {
////    var regenPWD = makeid();
////    Ext.getStore('CR_MobileUserGetRegeneratedPwd').getProxy().setExtraParams({
////        Email: document.getElementById('input-ForgetPassword').value,
////        GenID: regenPWD
////    });
////    Ext.StoreMgr.get('CR_MobileUserGetRegeneratedPwd').load();
   
////    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Retrieve..' });
////    var task = Ext.create('Ext.util.DelayedTask', function () {
////        Ext.getStore('CR_MobileUserGetRegeneratedPwd').getProxy().setExtraParams({
////            Email: document.getElementById('input-ForgetPassword').value,
////            GenID: regenPWD
////        });
////        Ext.StoreMgr.get('CR_MobileUserGetRegeneratedPwd').load();
////        var myStore = Ext.getStore('CR_MobileUserGetRegeneratedPwd');
////        var modelRecord = myStore.getAt(0);
////        var Email = document.getElementById('input-ForgetPassword').value;
////        var CR_Password = modelRecord.get('CR_Password');

////        console.log("CR_Password:" + CR_Password);
////       sendEmail(Email, CR_Password);
////        Ext.Viewport.setMasked(false);
////    });
////    task.delay(2000);
////}


////function sendEmail(Email, Pwd) {
////    console.log("sendEmail:" + Pwd);
////    Ext.Ajax.request({

////        url: GetAPIurl() + '/Email/SendEmailForgotPassword',

////        params: {
////            NewPWD:Pwd,
////            Email: Email,
            


////        },
////        success: function (result, request) {
////            LoadingCustomMsgShow('Email Sent!', '3');


////        },
////        failure: function (result, request) {
////            LoadingCustomMsgHide();
////            Ext.Msg.alert('Error', request);
////            //  CustomeMsgBoxShow("Error");

////        }
////    });
////}


////function makeid() {
////    var text = "";
////    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

////    for (var i = 0; i < 5; i++)
////        text += possible.charAt(Math.floor(Math.random() * possible.length));

////    return text;
////}






Ext.define('ianMizi.view.FloatPanel.ForgotPasswordPanel', {
    requires: [
        'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_ForgotPassword;


var _FloatPanel_ForgotPasswordisOpen = 'N';











function FloatPanel_ForgotPassword() {

    _FloatPanel_ForgotPassword =
        Ext.create('Ext.Container', {

            xtype: 'container',
            height: '100%',
            width: '100%',
            id: 'LoadingFloatPanel_ForgotPasswordID',
            draggable: false,
            requires: [
                'Ext.util.DelayedTask'
            ],


            centered: true,
            //bottom: 64,         
            modal: true,
            hideOnMaskTap: false,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'down',
                easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 250
            },
            //style: 'border-bottom:1px solid;background-color:#353839;',
            style: 'background-color:white;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {

                            if (e.direction == "left") {
                                _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                _FloatPanel_ForgotPasswordisOpen = 'N';
                                RemovePages("FloatPanel_ForgotPasswordHide()");
                            } if (e.direction == "right") {
                                _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                _FloatPanel_ForgotPasswordisOpen = 'N';
                                RemovePages("FloatPanel_ForgotPasswordHide()");
                            }

                        }
                    });
                }
            },

            //  style: "background-color: #D25959;",
            items: {




                //  margin:'-50 0 0 0',
                //height: 150,
                //width: 200,

                height: '100%',
                width: '100%',
                xtype: 'container',
                // style: 'border-bottom:0px solid;background-color:#353839;',
                style: 'border-bottom:0px solid;background-color:transparent;',

                // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },

                items: [








                    {


                        // xtype: 'button',
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_ForgotPasswordBorderBg',
                        docked: 'top',
                        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                        style: ' background-color:transparent;',
                        height: '70%',
                        width: '100%',
                        // style: 'border:2px solid #D25959;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                        },
                        items: [

                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                height: 60,
                                style:GetHeaderStyle(),
                                id: 'containerFloatPanel_ForgotPasswordHeader',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'transparent',
                                //    // border: '2px'
                                //},
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                // hidden:true,
                                items:
                                    [

                                        {
                                            xtype: 'spacer',
                                            width: 20

                                        },

                                        {
                                            margin: '0 0 0 0',
                                            //id: 'htmlFloatPanel_MerchantEnterpriseRegistration_TitleHeaderTxt',
                                            html: '<font size=4 color=black><b>Forgot Password</b></font>'
                                        },


                                        {
                                            xtype: 'spacer',

                                        },
                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_ForgotPasswordBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                    //direction: 'left',
                                                    //easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                _FloatPanel_ForgotPasswordisOpen = 'N';
                                                RemovePages("FloatPanel_ForgotPasswordHide()");

                                            }
                                        },



                                        {
                                            xtype: 'spacer',
                                            width: 20

                                        },













                                    ]

                            },


                            // {
                            //     //xtype: 'button',
                            //     //id: 'btnMyAccount_DashboardBack',
                            //     //height: 65,
                            //     //width: 65,
                            //     // iconCls: 'list',
                            //     margin: '20 0 0 0',
                            //     // hidden:true,
                            //     height: 100,
                            //     width: 100,
                            //     // html: '<div ><img src="resources/icons/ayohaReward01.gif" width="55" height="55" alt="Company Name"></div>',
                            //     html: '<div ><img src="resources/icons/Logo/LogoOrangeSimplifed.png" width="100" height="100" alt="Company Name"></div>',
                            //     //ui: 'plain',
                            //     //handler: function () {

                            //     //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                            //     //    //    type: 'slideOut',
                            //     //    //    direction: 'left',
                            //     //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                            //     //    //    duration: 250

                            //     //    //}));
                            //     //    //isLoyaltyCardRedeemListOpen = 'N';
                            //     //}
                            // },
                            // {
                            //     margin: '0 0 0 0',
                            //     id: 'htmlFloatPanel_ForgotPasswordTxt',
                            //     html: '<font size=3 color=black><b>Ayoha-Reward Merchant Suite</b></font>'
                            // },

                            // {
                            //     margin: '-10 0 0 0',
                            //     id: 'htmlFloatPanel_ForgotPassword_bottomTagLineTxt',
                            //     html: '<font size=2 color=black>Your All-in-One Solution for Membership and Campaign Success</font>'
                            // },


                            {
                                width: '100%',
                                margin: '20 0 0 0',
                                html: '<div style="color:white;text-align: center;font-size:50px;width:100%;height: 150px;font-weight:bold"><img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 150px; height: 150px;" ></div>'
                        
                            },
                            {
                                width: '100%',
                                html: '<div style="color:black;text-align: center;font-size:50px;width:100%;font-weight:bold">Ayoha Reward Merchant Portal</div>'
                        
                            },
                            {
                                width: '100%',
                                margin:'0 0 0 0',
                                html: '<div style="color:black;text-align: center;font-size:20px;width:100%;font-weight:normal">Your All-in-One Solution for Membership and Campaign Success</div>'
                        
                            },
                            {
                                xtype: 'panel',
                                height: 120
                            },
                            {
                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 24px;font-weight:bold;color:black;">Forgot Password</div>',
                            },

                            {
                                xtype: 'panel',
                                height: 30
                            },

                            {
                                margin: '0 0 0 65',
                                html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:grey;">Enter your email address below to retrive password</div>',
                            },
                            {
                                xtype: 'panel',
                                height: 40
                            },

                            {
                                //hidden: true,
                                id: 'htmlFloatPanel_ForgotPasswordEmail',
                                margin: '-2 0 0 0',
                                width: 280,
                                height: 20,
                                html: '<input type="text" id="input-FloatPanel_ForgotEmail" placeHolder="Enter your email"  style="border-color:black;color:black;width:100%;text-align: center;font-size:14px;font-weight:bold;">'


                            },
                            {
                                xtype: 'panel',
                                height: 20
                            },
                            {
                                xtype: 'button',
                                width: '90%',
                                // hidden: true,
                                //  align: 'stretch',

                                ui: 'plain',
                                //  width: '80%',
                                height: 60,
                                margin: '0 0 0 0',
                                id: 'btnFloatPanel_ForgotPassword_SendPassword',
                                // width: '80%',
                                //style: {
                                //    background: '#FA8072',
                                //},
                                // padding: '10px',
                                //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                                text: '<button class="buttonSendEmail">Send Password</button>',

                                handler: function () {
                                    //  FloatPanel_AyohaUserRegistration_Save();



                                    FloatPanel_ForgotPasswordSendEmail();









                                },


                            },



                        ]


                    },

                    {
                        xtype: 'container',
                        width: '100%',
                        height: '30%',
                        docked: 'bottom',
                         layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [

                            {
                                xtype: 'container',
                                width: '40%',
                                height: '100%',
                                //docked: 'bottom',
                                //docked: 'bottom',
                                // height:'70%',
                                // width: 40,
                                // style: ' background-color:red;',
                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,
                                style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                id: 'containerFloatPanel_ForgotPasswordbottom',
                                //layout: {
                                //    type: 'vbox',
                                //    pack: 'start',
                                //    align: 'center',
                                //},
                                //items: [

                                //    //{
                                //    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                                //    //}
                                //]
                            },

                            ]
                    },

                   


                    //{
                    //    //width: '100%',
                    //    //height: '50%',

                    //    xtype: 'container',
                    //    width: '100%',
                    //    docked: 'bottom',
                    //    height:'30%',
                    //    //  ui: 'confirm',
                    //    style: ' background-color:transparent;',
                    //     style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 360px;background-repeat: no-repeat;',
                    //    layout: {
                    //        type: 'vbox',
                    //        pack: 'end',
                    //        align: 'center',
                    //    },
                    //    items: [
                    //                    //{
                    //                    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                    //                    //}
                    //    ]
                    //    //style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    //    // html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                    //    //handler: function () {

                    //    //}
                    //},


                ]




            }







        });
    return _FloatPanel_ForgotPassword;





}

function FloatPanel_ForgotPasswordShow() {

    console.log(_FloatPanel_ForgotPasswordisOpen);
    Ext.Viewport.remove(_FloatPanel_ForgotPassword);
    this.overlay = Ext.Viewport.add(FloatPanel_ForgotPassword());
    this.overlay.show();
    _FloatPanel_ForgotPasswordisOpen = 'Y';

    AddRoutePages("FloatPanel_ForgotPasswordHide()");
}


function FloatPanel_ForgotPasswordHide() {
    _FloatPanel_ForgotPassword.hide(); _FloatPanel_ForgotPasswordisOpen = 'N';
    RemovePages("FloatPanel_ForgotPasswordHide()");

}


function FloatPanel_ForgotPassword_IsEmailExist() {
    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');


    if (TrimStrEmail) {
        // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Email....' });
        LoadingPanelShow(getLoadingIcon(), 'Checking Email..');





        var task = Ext.create('Ext.util.DelayedTask', function () {

            var objn = {
                "Email": TrimStrEmail
            };
            // console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileCheckIsEmailExist',

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
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Email Exist!..' });
                            var AllowToSendEmail = data.results[0].AllowToSendEmail;
                            if (AllowToSendEmail == "NotAllowed") {
                                swalFireFail("You have been exceeded maximum retrival password!");
                                Ext.Viewport.unmask();
                                return;

                            } if (AllowToSendEmail == "Allowed") {
                                Ext.Viewport.unmask();
                                FloatPanel_ForgotPasswordSendEmail_Sending();


                            }

                            LoadingPanelHide();

                            //  FloatPanel_ForgotPasswordSendEmail_Sending();


                        }
                        if (data.total == 0) {

                            swalFireFail("(" + TrimStrEmail + ") Not Exist!");
                            Ext.Viewport.unmask();
                            LoadingPanelHide();

                        }





                    }
                    else {

                        swalFireFail("Cheking Failed!!!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }


                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Cheking Failed!!!");
                    LoadingPanelHide();
                }

            });



        });
        //  Ext.Viewport.unmask();
        //LoadingPanelHide();
        task.delay(500);
    } else {
        swalFireFail("Oops! It looks like you forgot to enter your email. Please provide your email address");
        LoadingPanelHide();
    }








}



function FloatPanel_ForgotPasswordSendEmail() {
    FloatPanel_ForgotPassword_IsEmailExist();
}







function FloatPanel_ForgotPasswordSendEmail_Sending() {


    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Sending Email..' });


    // LoadingPanelShow(getLoadingIcon(), 'Sending Email..');


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.Ajax.request({
            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileForgotPassword',
            params: {

                "Email": TrimStrEmail,
                "LoginOS": localStorage.getItem('device_platform'),
                "LoginIP": localStorage.getItem('device_ip'),
                "PhoneModel": localStorage.getItem('device_model'),
                "PhoneImeiNo": localStorage.getItem('device_uuid'),
                "PhoneVersion": localStorage.getItem('device_version'),
                "PhonePlatform": localStorage.getItem('device_platform'),
                "PhonePlatformVersion": localStorage.getItem('device_version'),
                "PhoneManufacturer": localStorage.getItem('device_manufacturer'),
                "PhoneSerial": GetCurrentdeviceserial(),
                "RawPhoneInfo": localStorage.getItem('SimInfo'),
                "PlayerID": localStorage.getItem('player_id'),

            },
            success: function (result, request) {

                swalFireSuccesSendEmail('Temporary password has been sent to your email.!');
                Ext.Viewport.unmask();
                FloatPanel_ForgotPasswordHide();
                LoadingPanelHide();

            },
            failure: function (result, request) {
                swalFireFail("Send Email Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }
        });



    });
    task.delay(1000);

}