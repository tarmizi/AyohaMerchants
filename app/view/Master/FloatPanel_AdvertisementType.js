Ext.define('ianMizi.view.Master.FloatPanel_AdvertisementType', {

});

var _FloatPanel_AdvertisementType;


var isFloatPanel_AdvertisementTypeOpen = 'N';











function FloatPanel_AdvertisementType() {

    _FloatPanel_AdvertisementType =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: '70%',
         width: 450,
         id: 'LoadingFloatPanel_AdvertisementTypeID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         style: 'background-color:white;',
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AdvertisementType.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AdvertisementType.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AdvertisementTypeOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'background-color:transparent;',

           //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AdvertisementTypeHeader',
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
                                    margin: '0 0 0 0',
                                    html: '<font size=4 color=black><b>Advertisement Type</b></font>'
                                },
                                          
                                           {
                                               xtype: 'spacer',

                                           },

                                          



                                           {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AdvertisementTypeBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_AdvertisementType.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                   // direction: 'left',
                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                isFloatPanel_AdvertisementTypeOpen = 'N';

                                            }
                                        },









                            ]

                 },
                 {
                     xtype: 'list',
                     height: '100%',
                     width: '100%',
                     store: 'AdvertisementTypeLoadAllStore',
                     id: 'FloatPanel_AdvertisementTypeList',
                     mode: 'SINGLE',
                     disableSelection: false,
                     scrollable: {
                         direction: 'vertical',
                         indicators: {
                             y: {
                                 autoHide: true
                             },
                             x: {
                                 autoHide: true
                             }
                         }
                     },
                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                     //itemTpl: '<div class="myContent">' +
                     //   '<div><b>{ID}</b></div>' +
                     //   '<div>{ReceiptName}</div>' +
                     //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                     //   '<div><b>{Amount}</b></div>' +
                     //    '<div style="display: none;">{ID}</div>' +
                     //   '</div>',

                     itemTpl: '<div class="myContent">' +


                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                           //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                         '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:99.5%;"><b>{AdvertisementType}</b><br><font size=1>{Descriptions}</font></div>' +

                          //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                  // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                '</div>',

                     //width: '100%',
                     //height: '100%',
                     disableSelection: true,

                     listeners: {


                         //itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                         //    FloatPanel_AdvertisementTypeHide();
                         //    var AdvertisementType = record.get('AdvertisementType');
                         //    document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value = AdvertisementType;
                         //    localStorage.setItem('AdvertisementType', AdvertisementType);


                         //    if (AdvertisementType == "VIP") {

                         //    }
                         //    if (AdvertisementType == "Hot Seat") {

                         //    }
                         //    if (AdvertisementType == "Hot Merchant Slide 1") {

                         //    }


                         //    if (AdvertisementType == "Floating") {

                         //    }
                         //    if (AdvertisementType == "Tap And Win") {

                         //    }
                         //    if (AdvertisementType == "Hot Merchant Slide 2") {

                         //    }




                         //    if (AdvertisementType == "Hot Merchant Slide 3rd") {

                         //    }
                         //    if (AdvertisementType == "Hot Merchant Slide 4ft") {

                         //    }

                         //},

                         itemsingletap: function (dataview, index, target, record, e, eOpts) {
                             FloatPanel_AdvertisementTypeHide();
                             var AdvertisementType = record.get('AdvertisementType');
                             globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AdvertismentTypeCode = record.get('AdvertismentTypeCode');
                             document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value = AdvertisementType;
                             localStorage.setItem('AdvertisementType', AdvertisementType);



                             if (AdvertisementType == "VIP") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(false);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(true);

                                

                             }
                             if (AdvertisementType == "Hot Seat") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(false);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(true);
                             }
                             if (AdvertisementType == "Hot Merchant Slide 1") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(true);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(false);
                             }


                             if (AdvertisementType == "Floating") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(false);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(false);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(true);
                             }
                             if (AdvertisementType == "Tap And Win") {

                             }
                             if (AdvertisementType == "Hot Merchant Slide 2") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(true);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(false);
                             }




                             if (AdvertisementType == "Hot Merchant Slide 3rd") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(true);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(false);
                             }
                             if (AdvertisementType == "Hot Merchant Slide 4ft") {
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(true);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(true);
                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
                                 Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);

                                 Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(false);
                                 Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(false);
                             }
                            
                         }
                     }





                 },


            //{


            //    // xtype: 'button',
            //    xtype: 'container',
            //    //margin: '10 0 0 0',
            //    id: 'FloatPanel_AdvertisementTypeBorderBg',
            //    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
            //    style: ' background-color:transparent;',
            //    height: '100%',
            //    width: '100%',
            //    // style: 'border:2px solid #D25959;',
            //    layout: {
            //        type: 'vbox',
            //        pack: 'left',
            //        align: 'left'
            //    },
            //    items: [







                    


            //    ]


            //},









             ]




         }







     });
    return _FloatPanel_AdvertisementType;





}

function FloatPanel_AdvertisementTypeShow() {

    Ext.Viewport.remove(_FloatPanel_AdvertisementType);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementType());
    this.overlay.show();
    isFloatPanel_AdvertisementTypeOpen = 'Y';
}


function FloatPanel_AdvertisementTypeHide() {
    _FloatPanel_AdvertisementType.hide(); isFloatPanel_AdvertisementTypeOpen = 'N';
}








