Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_ViewMessage', {

});







var _FloatPanel_AyohaNotificationManagement_ViewMessage;

function FloatPanel_AyohaNotificationManagement_ViewMessage() {

    _FloatPanel_AyohaNotificationManagement_ViewMessage = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaNotificationManagement_ViewMessageID',
            // xtype: 'panel',
            zIndex: 600,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            //  hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },

            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: 'background-color:white;',
            //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                // name: 'clickableContainerFloatPanel_AyohaNotificationManagement_ViewMessage',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [



                    






                    {

                        xtype: 'container',
                        width: '100%',
docked:'top',
height:60,
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        // hidden: true,

                        id: 'containerFloatPanel_AyohaNotificationManagement_ViewMessageHeader',
                        //style: 'background-color:transparent;',
                        style:GetHeaderStyle(),
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
width:20
                                },
                                {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt',
                                    html: '<font size=4 color=black><b>Push Notification Message</b></font>'
                                },

                                             
                                               {
                                                   xtype: 'spacer',

                                               },
                                               

                                               {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaNotificationManagement_ViewMessageBack',
                                                zIndex: 100,

                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_AyohaNotificationManagement_ViewMessage.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    is_FloatPanel_AyohaNotificationManagement_ViewMessageOpen = 'N';
                                                }
                                            },
                                            {
                                                xtype: 'spacer',
            width:20
                                            },





                                                         {
                                                             xtype: 'button',
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 0',
                                                             hidden:true,
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_ViewMessageIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/Notification.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_ViewMessage.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 is_FloatPanel_AyohaNotificationManagement_ViewMessageOpen = 'N';

                                                             }
                                                         },








                               ]

                    },

                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        style: ' background-color:transparent;',
                        margin: '20 0 0 0',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            // pack: 'left'
                        }, scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false
                        },




                        items: [



                             //{
                             //    xtype: 'container',
                             //    //  hidden: true,
                             //    //  style: "background-color: #607d8b;border-style:solid;border-bottom-width:2px;border-color:#EAEDED",
                             //    //   style: "border-right:2px solid #EAEDED",
                             //    width: '100%',
                             //    height: 10,

                             //    margin: '0 0 0 0',
                             //    layout: {
                             //        type: 'hbox',
                             //        pack: 'center',
                             //        //align: 'center'

                             //    }, items: [

                             //    ]

                             //},


                            {
                                xtype: 'container',
                                width: '25%',
                                // height:'98%',
                                //height: 621,
                                flex: 1,

                                style: 'background-image: url("resources/icons/NotificationBg08.png"); background-size: 100% 98%;border-bottom:1px none;',
                                //  style: "border-right:3px solid #EAEDED",
                                layout: {
                                    type: 'vbox',
                                    //align: 'center',
                                    // pack: 'left'
                                },
                                items: [


                                    {
                                        xtype: 'container',
                                        margin: '100 0 0 0',
                                        //   flex: 1,
                                        //flex: 1,
                                        width: '100%',
                                        height: '80%',
                                        scrollable: {
                                            direction: 'vertical',
                                            directionLock: true
                                        },
                                        //  zIndex:-100,
                                        items: [
                                             {
                                                 id: 'FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti',
                                                 margin: '10 0 0 8',
                                                 //  height: '90%',
                                                 //  html: '<br><table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="resources/icons/klinikpergigiancyberLogo.png" width="200" height="150" alt="Company Name"><br>KLINIK PERGIGIAN CYBERJAYA</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">TITLE</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Your Contents(MAX 500)<br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 100%; height: 92px; margin-top: 0px;"/><br><img src="resources/icons/emailBottom.png" style="display: inline-block; width: 95%; height: 192px; margin-top: -5px;margin-left: 13px;"/></td></tr></table>',
                                                 html: '<table style="border-collapse:collapse;border-spacing:0;width:97%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="resources/icons/klinikpergigiancyberLogo.png" width="200" height="150" alt="Company Name"><br>KLINIK PERGIGIAN CYBERJAYA</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">TITLE</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Your Contents(MAX 500)<br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 100%; height: 192px; margin-top: 0px;"/></td></tr></table>',



                                             },

                                        ]
                                    },











                                ]






                            },

                        ]
                    },



                ]

            },






        });

    return _FloatPanel_AyohaNotificationManagement_ViewMessage;
}



function FloatPanel_AyohaNotificationManagement_ViewMessageShow(ID) {
    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_ViewMessage);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_ViewMessage());
    this.overlay.show();
    is_FloatPanel_AyohaNotificationManagement_ViewMessageHide = 'Y';
    FloatPanel_AyohaNotificationManagement_ViewMessage_setPreview(ID);
    


}





function FloatPanel_AyohaNotificationManagement_ViewMessage_Preview_Show() {
    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_ViewMessage);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_ViewMessage());
    this.overlay.show();
    is_FloatPanel_AyohaNotificationManagement_ViewMessageHide = 'Y';


    FloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight();
    //alert(globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType)
   
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {
        setPreview_Text();
    }
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image") {
        setPreview_Image();
    }


}











var is_FloatPanel_AyohaNotificationManagement_ViewMessageHide = 'N';

function FloatPanel_AyohaNotificationManagement_ViewMessageHide() {

    if (is_FloatPanel_AyohaNotificationManagement_ViewMessageHide == 'Y') {
        _FloatPanel_AyohaNotificationManagement_ViewMessage.hide();
        is_FloatPanel_AyohaNotificationManagement_ViewMessageHide = 'N';
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







function FloatPanel_AyohaNotificationManagement_ViewMessage_setPreview(ID) {





    var NotificationTitle = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var NotificationBody = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var NotificationFooterImage = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var CreatedDate = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var NotificationType = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var NotifcationImage = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);



    var NotificationTitles = NotificationTitle.get('NotificationTitle');
    var NotificationTypes = NotificationType.get('NotificationType');
    var NotificationBodys = NotificationBody.get('NotificationBody');
    var NotificationFooterImages = NotificationFooterImage.get('NotificationFooterImage');
    var NotificationImages = NotifcationImage.get('NotifcationImage');
    var CreatedDates = CreatedDate.get('CreatedDate');


    if (NotificationTypes == "Text") {
        var NotiContentID = NotificationBodys.replace(/\n/g, "<br>");
        var notiImg = NotificationFooterImages;
        if (notiImg) {
            Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Notification Date:' + CreatedDates + '</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotificationTitles + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 92%; height: 150px; margin:0px 0px 0px -10px; " /></td></tr></table>');

        } else {
            Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Notification Date:' + CreatedDates + '</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotificationTitles + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 10px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:left" colspan="2"></td></tr></table>');

        }
    }

    if (NotificationTypes == "Image") {
        var notiImg = NotificationImages;





        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt').setHtml('<font size=2 color=black><b>PREVIEW - Push Notification Message</b></font>')



        Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Notification Date:' + CreatedDates + '</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:15px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2">' + NotificationTitles + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 92%; height: ' + globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight + 'px; margin:0px 0px 0px -10px; " /></td></tr></table>');

    }

  
  




    



}






function setPreview_Text() {
   


    //var Noticontent;
    //   var Imgtemp =+ '<img src="' + localStorage.getItem('NotiContentImage') + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " />';
   var  NotiTitleID = document.getElementById('AyohaNotificationCreateMsgSUbject').value;

    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    NotiContentID = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    var notiImg = FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage;





    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt').setHtml('<font size=2 color=black><b>PREVIEW - Push Notification Message</b></font>')
    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    // var NotiContentID = NotificationBodys.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    // var notiImg = NotificationFooterImages;
    //  console.log(notiImg);
    //  console.log(NotiContentID);
    if (notiImg) {


        Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:2/5/2021 03:44:56PM</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotiTitleID + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 92%; height: 150px; margin:0px 0px 0px -10px; " /></td></tr></table>');


    } else {

        Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:2/5/2021 03:44:56PM</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotiTitleID + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 10px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:left" colspan="2"></td></tr></table>');


        // Ext.getCmp('PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="' + GetEnterpriseLogoPath() + '" width="150" height="100" alt="Company Name"><br><b>' + GetEnterpriseName() + '</b></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 15px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + NotiContentID + ' <br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 97%; height: 92px; margin-top: 0px;"/></td></tr></table>');
        //   Ext.getCmp('PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Published On:10-01-2018</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="resources/icons/klinikpergigiancyberLogo.png" width="200" height="150" alt="Company Name"><br>KLINIK PERGIGIAN CYBERJAYA</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + NotiContentID.replace(Advertise, imgAdvertisment1) + '</td></tr></table>');


    }
}




function setPreview_Image() {
    var NotiTitleID = document.getElementById('AyohaNotificationCreateMsgSUbject').value;

    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    NotiContentID = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    var notiImg = FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image;





    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt').setHtml('<font size=2 color=black><b>PREVIEW - Push Notification Message</b></font>')
   


    Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:2/5/2021 03:44:56PM</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:15px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 92%; height: ' + globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight + 'px; margin:0px 0px 0px -10px; " /></td></tr></table>');


   
}






var globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight;
function FloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 195;
    globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;



}