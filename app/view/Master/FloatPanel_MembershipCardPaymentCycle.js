Ext.define('ianMizi.view.Master.FloatPanel_MembershipCardPaymentCycle', {

});

var _FloatPanel_MembershipCardPaymentCycle;


var isFloatPanel_MembershipCardPaymentCycleOpen = 'N';











function FloatPanel_MembershipCardPaymentCycle() {

    _FloatPanel_MembershipCardPaymentCycle =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: 450,
         id: 'LoadingFloatPanel_MembershipCardPaymentCycleID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: true,
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
         style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_MembershipCardPaymentCycle.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_MembershipCardPaymentCycle.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_MembershipCardPaymentCycleOpen = 'N';
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
             style: 'background-color:transparent;',

            // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                     id: 'containerFloatPanel_MembershipCardPaymentCycleHeader',
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
                                              html: '<font size=4 color=black><b>Membership Card Payment Cycle</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },




                                           {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_MembershipCardPaymentCycleBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_MembershipCardPaymentCycle.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                   // direction: 'left',
                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                isFloatPanel_MembershipCardPaymentCycleOpen = 'N';

                                            }
                                        },










                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_MembershipCardPaymentCycleBorderBg',
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
                        store: 'MembershipCardPaymentCycleLoadStore',
                        id: 'FloatPanel_MembershipCardPaymentCycleLoadMasterListID',
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

                            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:77.5%;"><b>{PaymentCycle}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var PaymentCycle = record.get('PaymentCycle');

                                if (is_FloatPanel_MembershipCardManagement_NewCardAddOpen == "Y") {
                                    document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value = PaymentCycle;
                                    if (PaymentCycle != "FOC") {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFee_txtfield').setHidden(false);
                                      //  Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(580);
                                      //  document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNoTxt').setHidden(true);                                        
                                        globalNewCardAdd_RequireApprovalYesNo = "YES";
                                      
                                        
                                    } else {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFee_txtfield').setHidden(true);
                                       // Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(600);
                                      //  document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNoTxt').setHidden(false);
                                        globalNewCardAdd_RequireApprovalYesNo = "NO";
                                    }

                                   
                                    Ext.getCmp('lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeePaymentCycle').setHtml('<font size=2 color=black>*Membership Card Fee Payment Cycle</font>');

                                    // if (document.getElementById('FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox').checked == true) {
                                    //     if (PaymentCycle != "FOC") {
                                    //         if (PaymentCycle != "OneTime Fee") {
                                    //             swalFireFail("Valid LifeTime Only Applicable for FOC and One Time Fee!");
                                    //             Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd__MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">');
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value = 12;
                                    //             globalisValidLifeTime = "NO";
                                    //             document.getElementById('FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox').checked = false;
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value = "";
                                    //         }

                                    //     }

                                    // }
                                }

                                if (isFloatPanel_MembershipCardManagement_EditCardOpen == "Y") {
                                    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value = PaymentCycle;
                                    Ext.getCmp('lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardFeePaymentCycle').setHtml('<font size=2 color=black>*Membership Card Fee Payment Cycle</font>');

                                }

                               
                                if (isFloatPanel_MembershipCardPaymentCycleOpen == 'Y') {
                                    _FloatPanel_MembershipCardPaymentCycle.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_MembershipCardPaymentCycleOpen = 'N';



                              //  MembershipFeePaymentCycleSettingControlComponet();


                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var PaymentCycle = record.get('PaymentCycle');
                                if (is_FloatPanel_MembershipCardManagement_NewCardAddOpen == "Y") {
                                    document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value = PaymentCycle;
                                    if (PaymentCycle != "FOC") {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFee_txtfield').setHidden(false);
                                       // Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(580);
                                      //  document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNoTxt').setHidden(true);
                                        globalNewCardAdd_RequireApprovalYesNo = "YES";

                                        

                                    } else {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFee_txtfield').setHidden(true);
                                       // Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(600);
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNoTxt').setHidden(false);
                                      //  document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
                                        globalNewCardAdd_RequireApprovalYesNo = "NO";
                                    }

                                    Ext.getCmp('lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeePaymentCycle').setHtml('<font size=2 color=black>*Membership Card Fee Payment Cycle</font>');

                                    // if (document.getElementById('FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox').checked == true) {
                                    //     if (PaymentCycle != "FOC") {
                                    //         if (PaymentCycle != "OneTime Fee") {
                                    //             swalFireFail("Valid LifeTime Only Applicable for FOC and One Time Fee!");
                                    //             Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd__MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">');
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value = 12;
                                    //             globalisValidLifeTime = "NO";
                                    //             document.getElementById('FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox').checked = false;
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value = "";
                                    //         }
                                           
                                    //     }
                                       
                                    // }
                                }






                                if (isFloatPanel_MembershipCardManagement_EditCardOpen == "Y") {
                                    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value = PaymentCycle;
                                    Ext.getCmp('lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardFeePaymentCycle').setHtml('<font size=2 color=black>*Membership Card Fee Payment Cycle</font>');

                                    if (PaymentCycle != "FOC") {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(false);
                                       // Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(580);
                                        document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value = 0.00;
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt').setHidden(true);
                                        globalEditCard_RequireApprovalYesNo = "YES";



                                    } else {
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(true);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(true);
                                       // Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAddID').setHeight(600);
                                        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHidden(false);
                                        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt').setHidden(false);
                                        document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value = 0.00;
                                        globalEditCard_RequireApprovalYesNo = "NO";
                                    }


                                    // if (document.getElementById('FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox').checked == true) {
                                    //     if (PaymentCycle != "FOC") {
                                    //         if (PaymentCycle != "OneTime Fee") {
                                    //             swalFireFail("Valid LifeTime Only Applicable for FOC and One Time Fee!");
                                    //             Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">');
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = 12;
                                    //             globalisValidLifeTime = "NO";
                                    //             document.getElementById('FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox').checked = false;
                                    //             document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value = "";
                                    //         }

                                    //     }

                                    // }
                                }

                                if (isFloatPanel_MembershipCardPaymentCycleOpen == 'Y') {
                                    _FloatPanel_MembershipCardPaymentCycle.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_MembershipCardPaymentCycleOpen = 'N';

                              //  MembershipFeePaymentCycleSettingControlComponet();
                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_MembershipCardPaymentCycle;





}

function FloatPanel_MembershipCardPaymentCycleShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipCardPaymentCycle);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardPaymentCycle());
    this.overlay.show();
    isFloatPanel_MembershipCardPaymentCycleOpen = 'Y';
}


function FloatPanel_MembershipCardPaymentCycleHide() {
    _FloatPanel_MembershipCardPaymentCycle.hide(); isFloatPanel_MembershipCardPaymentCycleOpen = 'N';
}








