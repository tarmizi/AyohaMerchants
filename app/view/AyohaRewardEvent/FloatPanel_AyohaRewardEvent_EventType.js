Ext.define('ianMizi.view.AyohaRewardEvent.FloatPanel_AyohaRewardEvent_EventType', {

});

var _FloatPanel_AyohaRewardEvent_EventType;


var isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'N';











function FloatPanel_AyohaRewardEvent_EventType() {

    _FloatPanel_AyohaRewardEvent_EventType =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: 450,
         id: 'LoadingFloatPanel_AyohaRewardEvent_EventTypeID',
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
             type: 'popOut',
            //  direction: 'up',
            //  easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
            style: 'background-color:transparent;',

             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                     id: 'containerFloatPanel_AyohaRewardEvent_EventTypeHeader',
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
                                    html: '<font size=3 color=black><b>Event Type</b></font>'
                                },
                                          
                                           {
                                               xtype: 'spacer',

                                           },


                                            




                                             {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaRewardEvent_EventTypeBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
  
                                                    _FloatPanel_AyohaRewardEvent_EventType.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250
  
                                                    }));
                                                    isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'N';
  
                                                }
                                            },
  







                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_AyohaRewardEvent_EventTypeBorderBg',
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
                        store: 'AyohaRewardEvent_EventTypeStore',
                        id: 'FloatPanel_AyohaRewardEvent_EventTypeLoadMasterListID',
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

                            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:77.5%;"><b>{EventType}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var EventType = record.get('EventType');
                                document.getElementById('input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType').value = EventType;
                               
                                if(EventType=="Physical") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(true);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(true);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(true);
                                
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);  
                                
                                   }
                                   if(EventType=="Online") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(true);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(true);
                                   }
                                   if(EventType=="Hybrid") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);
                                   }
                               
                               
                               
                               
                               
                               
                               
                                if (isFloatPanel_AyohaRewardEvent_EventTypeOpen == 'Y') {
                                    _FloatPanel_AyohaRewardEvent_EventType.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'N';
                               



                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var EventType = record.get('EventType');
                                document.getElementById('input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType').value = EventType;
                                
                                
                                if(EventType=="Physical") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(true);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(true);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(true);
                                
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);
                                    Ext.getCmp('ContainerFloatPanel_AyohaRewardEventSetting_EventLocationCoordinate').setHidden(false);  
                                
                                   }
                                   if(EventType=="Online") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(true);
                                    Ext.getCmp('ContainerFloatPanel_AyohaRewardEventSetting_EventLocationCoordinate').setHidden(true);
                                   }
                                   if(EventType=="Hybrid") {
                                    Ext.getCmp('htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText').setHidden(false);
                                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink').setHidden(false);
                                    Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation').setHidden(false);
                                    Ext.getCmp('ContainerFloatPanel_AyohaRewardEventSetting_EventLocationCoordinate').setHidden(false);
                                   }
                                
                                
                                
                                
                                if (isFloatPanel_AyohaRewardEvent_EventTypeOpen == 'Y') {
                                    _FloatPanel_AyohaRewardEvent_EventType.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'N';
                               


                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_AyohaRewardEvent_EventType;





}

function FloatPanel_AyohaRewardEvent_EventTypeShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardEvent_EventType);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardEvent_EventType());
    this.overlay.show();
    isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'Y';
}


function FloatPanel_AyohaRewardEvent_EventTypeHide() {
    _FloatPanel_AyohaRewardEvent_EventType.hide(); isFloatPanel_AyohaRewardEvent_EventTypeOpen = 'N';
}








