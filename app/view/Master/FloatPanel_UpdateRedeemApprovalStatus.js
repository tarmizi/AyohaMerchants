Ext.define('ianMizi.view.Master.FloatPanel_UpdateRedeemApprovalStatus', {

});

var _FloatPanel_UpdateRedeemApprovalStatus;


var isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';











function FloatPanel_UpdateRedeemApprovalStatus() {

    _FloatPanel_UpdateRedeemApprovalStatus =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: 450,
         id: 'LoadingFloatPanel_UpdateRedeemApprovalStatusID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 550,
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
                             _FloatPanel_UpdateRedeemApprovalStatus.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_UpdateRedeemApprovalStatus.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';
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
             style: 'background-color:transparent;',
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
                     style: 'background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_UpdateRedeemApprovalStatusHeader',
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
width:10
                                },
                                {
                                    margin: '0 0 0 0',
                                    html: '<font size=4 color=black><b>Approval Status</b></font>'
                                },
                                           {
                                               xtype: 'spacer',

                                           },

                                           




                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_UpdateRedeemApprovalStatusBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
  
                                                    _FloatPanel_UpdateRedeemApprovalStatus.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250
  
                                                    }));
                                                    isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';
  
                                                }
                                            },


                                            {
                                                xtype: 'spacer',
            width:10
                                            },






                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_UpdateRedeemApprovalStatusBorderBg',
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
                        store: 'RedemptionApprovalStatusStore',
                        id: 'FloatPanel_UpdateRedeemApprovalStatusStoreID',
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

                           // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;text-align:center;width:77.5%;"><b>{RedeemStatus}</b></div>' +
                            '<div style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:center;width:100%;text-align:center"><b>{ApprovalStatus}</b></div>' +


                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var RedeemStatus = record.get('ApprovalStatus');
                                document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value = RedeemStatus;

                              
                                if (isFloatPanel_UpdateRedeemApprovalStatusOpen == 'Y') {
                                    _FloatPanel_UpdateRedeemApprovalStatus.hide(Ext.fx.Animation({
                                        type: 'popOut',
                                        easing: 'easeInOut',
                                        duration: 150,

                                    }));

                                }
                                isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';

                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var RedeemStatus = record.get('ApprovalStatus');
                                document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value = RedeemStatus;

                                if (isFloatPanel_UpdateRedeemApprovalStatusOpen == 'Y') {
                                    _FloatPanel_UpdateRedeemApprovalStatus.hide(Ext.fx.Animation({
                                        type: 'popOut',
                                        easing: 'easeInOut',
                                        duration: 50,

                                    }));

                                }
                                isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';
                                //var ReceiptImg = (record.get('ID'));
                                //MovementClaimReceiptImageShow(ReceiptImg);
                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_UpdateRedeemApprovalStatus;





}

function FloatPanel_UpdateRedeemApprovalStatusShow() {

    Ext.Viewport.remove(_FloatPanel_UpdateRedeemApprovalStatus);
    this.overlay = Ext.Viewport.add(FloatPanel_UpdateRedeemApprovalStatus());
    this.overlay.show();
    isFloatPanel_UpdateRedeemApprovalStatusOpen = 'Y';
}


function FloatPanel_UpdateRedeemApprovalStatusHide() {
    _FloatPanel_UpdateRedeemApprovalStatus.hide(); isFloatPanel_UpdateRedeemApprovalStatusOpen = 'N';
}








