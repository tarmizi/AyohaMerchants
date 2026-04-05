Ext.define('ianMizi.view.Master.FloatPanel_ChargeType', {

});

var _FloatPanel_ChargeType;


var isFloatPanel_ChargeTypeOpen = 'N';
var globalFloatPanel_ChargeType_ChargeTypes;
var globalFloatPanel_ChargeType_ChargeCode;











function FloatPanel_ChargeType() {

    _FloatPanel_ChargeType =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: 450,
         id: 'LoadingFloatPanel_ChargeTypeID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: false,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_ChargeType.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_ChargeType.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_ChargeTypeOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:white;',

           //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_ChargeTypeHeader',
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
                                    html: '<font size=3 color=black><b>Charge Type</b></font>'
                                },

                                           {
                                               xtype: 'spacer',

                                           },


                                            




                                             {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_ChargeTypeBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
  
                                                    _FloatPanel_ChargeType.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250
  
                                                    }));
                                                    isFloatPanel_ChargeTypeOpen = 'N';
  
                                                }
                                            },







                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_ChargeTypeBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 290,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [







                    {
                        xtype: 'list',
                        //  flex: 1,
                        store: 'ChargeTypeStore',
                        id: 'FloatPanel_ChargeTypeLoadMasterListID',
                        mode: 'SINGLE',
                        disableSelection: false,

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

                            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:77.5%;"><b>{ChargeTypes}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var ChargeTypes = record.get('ChargeTypes');
                                document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargeType').value = ChargeTypes;
                                if (isFloatPanel_ChargeTypeOpen == 'Y') {
                                    _FloatPanel_ChargeType.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_ChargeTypeOpen = 'N';
                                globalFloatPanel_ChargeType_ChargeTypes = ChargeTypes;
                                var ChargeTypeCode = record.get('ChargeTypeCode');
                                globalFloatPanel_ChargeType_ChargeCode = ChargeTypeCode;
                                FloatPanel_ChargeTypeSetChargeTypeLbl(ChargeTypes);
                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var ChargeTypes = record.get('ChargeTypes');
                               
                                document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargeType').value = ChargeTypes;
                                if (isFloatPanel_ChargeTypeOpen == 'Y') {
                                    _FloatPanel_ChargeType.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_ChargeTypeOpen = 'N';
                                globalFloatPanel_ChargeType_ChargeTypes = ChargeTypes;
                                var ChargeTypeCode = record.get('ChargeTypeCode');
                                globalFloatPanel_ChargeType_ChargeCode = ChargeTypeCode;
                                FloatPanel_ChargeTypeSetChargeTypeLbl(ChargeTypes);
                                

                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_ChargeType;





}

function FloatPanel_ChargeTypeShow() {

    Ext.Viewport.remove(_FloatPanel_ChargeType);
    this.overlay = Ext.Viewport.add(FloatPanel_ChargeType());
    this.overlay.show();
    isFloatPanel_ChargeTypeOpen = 'Y';
    AddRoutePages(_FloatPanel_ChargeType, "isFloatPanel_ChargeTypeOpen");
}


function FloatPanel_ChargeTypeHide() {
    _FloatPanel_ChargeType.hide(); isFloatPanel_ChargeTypeOpen = 'N';
}








function FloatPanel_ChargeTypeSetChargeTypeLbl(ChargeTypes) {
    if (ChargeTypes == "FOC") {

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_Separator01').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS_01').setHidden(true);
        Ext.getCmp('containerSeparator01').setMargin('-45 0 0 0');

        //   Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_S').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontSS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_SS').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHtml('<font color="black" size="4"><b>FREE OF CHARGE</b></font>');
    }



    if (ChargeTypes == "FLAT RATE") {

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_Separator01').setHidden(false);
        Ext.getCmp('containerSeparator01').setMargin('-35 0 0 0');
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS_01').setHidden(true);


        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_S').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontSS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_SS').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHtml('<font color="black" size="4"><b>FLAT RATE CHARGE</b></font>');
    }
    if (ChargeTypes == "WEIGHT RATE") {

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_Separator01').setHidden(false);
        Ext.getCmp('containerSeparator01').setMargin('0 0 0 0');
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS_01').setHidden(true);


        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_S').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_S').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontSS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_SS').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHtml('<font color="black" size="4"><b>WEIGHT RATE CHARGE</b></font>');

    }

    if (ChargeTypes == "QUANTITY BASE") {

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_Separator01').setHidden(false);
        Ext.getCmp('containerSeparator01').setMargin('-75 0 0 0');
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS_01').setHidden(false);


        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_S').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_S').setHidden(false);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontSS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_SS').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_SS').setHidden(true);

        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_FontS').setHtml('<font color="black" size="4"><b>QUANTITY BASE CHARGE</b></font>');




    }
}