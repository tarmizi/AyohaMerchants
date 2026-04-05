
Ext.define('ianMizi.view.AyohaRewardEvent.FloatPanel_AyohaRewardEventSetting', {

});

var _FloatPanel_AyohaRewardEventSetting;


var isFloatPanel_AyohaRewardEventSettingOpen = 'N';






function FloatPanel_AyohaRewardEventSetting() {

    _FloatPanel_AyohaRewardEventSetting =
    Ext.create('Ext.Container', {
        zIndex: 60,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaRewardEventSettingID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
                                                        //direction: 'left',
             easing: 'cubic-bezier(.7,0,.7,1)',
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       
       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaRewardEventSetting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaRewardEventSetting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color:white',
                layout: {
                    type: 'vbox',

                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators:false,
                },
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked:'top',
                        height: 60,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaRewardEventSettingHeader',
                        style:GetHeaderStyle(),
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                      // height: 30,
                                       width: 20,
                                   },

                                   {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaRewardEventSetting_TitleHeaderTxt',
                                    html: '<font size=4 color=black><b>Event Setting</b></font>'
                                },
                                             
                                              {
                                                  xtype: 'spacer',

                                              },


                                            
                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaRewardEventSettingBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                   // FloatPanel_AyohaRewardEventSettingHide();
                                                    // FloatPanel_AyohaRewardEventSetting_AddCardHide();
                                                    isFloatPanel_AyohaRewardEventSettingOpen = 'N';
                                                    _FloatPanel_AyohaRewardEventSetting.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                       // duration: 250

                                                    }));
                                                   // FloatPanel_AyohaRewardEventSetting_AddCardHide();

                                                }
                                            },    
                                            {
                                                xtype: 'spacer',
                                               // height: 30,
                                                width: 20,
                                            },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaRewardEventSetting_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        hidden:true,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           
                                                            isFloatPanel_AyohaRewardEventSettingOpen = 'N';

                                                            _FloatPanel_AyohaRewardEventSetting.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            //FloatPanel_AyohaRewardEventSetting_AddCardHide();
                                                        }
                                                    },



{
xtype: 'spacer',
height: 30,
width: 8,
},





                               ]

                    },

                    {
                        xtype: 'container',
                        width: '100%',
                        margin:'20 0 0 0',
                        height: 800,
                        style: ' background-color:white',
                        layout: {
                            type: 'fit',
                           
                        },
                       
                        items:[
                            {
                                xtype: 'container',
        
        
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center',
                                    width: '100%',
                                    height: '100%',
                                },
                               
                                items: [
                                  
        
        
        
        
        
                                    {
                                        xtype: 'container',
                                        width: '2%',
                                        height: '100%',
                                    },
        {
            xtype: 'container',
                                        id: 'containerFloatPanel_AyohaRewardEventSettingDetails',
                                       // margin: '-10 0 0 0',
                                        width: '30%',
                                        height: '100%',
                                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                        style: "background-color: transparent;",
                                        //style: "background-color: #F35B57;",
                                      //  title: 'FloatPanel_AyohaRewardEventSettingCardLis',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'
        
                                        },
                                        items:[
                                        
                                            {
                                                hidden:true,
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Amount(RM)</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                hidden:true,
                                                height: 20,
                                                html: '<input type="number" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Campaign Name</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_name',
                                                margin: '5 0 0 0',
                                                width: '100%',
                                                height: 20,
                                                html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_name"  style="border-color:grey;color:black;width:380px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
        
                                           
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Start Date</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventStartDateSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="date" id="input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },


                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Start Time</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="time" id="input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },




                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event End Date</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventEndDateSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="date" id="input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event End Time</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaRewardEventSetting_EventendDateSetting_Time',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="time" id="input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
                                            // {
                                            //     xtype: 'container',
                                            //     width: '100%', 
                                            //     height:30,
                                            // },
        
                                            // {
                                            //     margin: '0 0 0 0', 
                                            //     width: '100%',    
                                            //     hidden:true,             
                                            //     html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>is Require Receipt Proof?</u></div>',
                                            // },
        
                                            // {
                                            //     xtype: 'container',
                                            //     margin: '10 0 0 0',
                                            //     hidden:true,   
                                            //     width: '100%',
                                            //     id: 'containertogglefieldFloatPanel_AyohaRewardEventSettingYesNo',
                                            //     style: {
                  
                                            //         background: 'transparent',
                  
                                            //     },
                                            //     layout: {
                                            //         type: 'hbox',
                                            //         pack: 'left',
                                            //         align: 'left'
                  
                                            //     },
                                            //     items: [
                                                   
                                            //         {
                                            //             xtype: 'togglefield',
                                            //             // text:'NO/YES',
                                            //             //    name: 'toggleName',
                                            //             margin: '-12 0 0 -10',
                                            //             height: 5,
                                            //             // width:20,
                                            //             id: 'togglefieldFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo',
                                            //             //label: 'Manual',
                                            //             disabled: false,
                                            //             value: false,
                                            //             style: {
                  
                                            //                 // background: '#f44336',
                                            //                 background: 'transparent',
                  
                                            //             },
                                            //             listeners: {
                                            //                 change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                            //                     //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                            //                     if (newValue == true) { // if toggle is true then enable the slider
                  
                                            //                         globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="Yes";
                                            //                         Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>YES</font>');
                                            //                         // globalEditCard_RequireApprovalYesNo = "YES";
                                            //                         // Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
                  
                                                                    
                  
                                            //                     }
                  
                  
                                            //                         // if(newValue == false)
                                            //                     else { // else make it false
                  
                                            //                         Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>NO</font>');
                                            //                         globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="No";
                                            //                         // globalEditCard_RequireApprovalYesNo = "NO";
                                            //                     }
                  
                  
                                            //                 },
                  
                  
                                            //             }
                  
                  
                                            //         },
                                            //          {
                                            //              margin: '0 0 0 0',
                                            //              id: 'htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo',
                                            //              html: '<font size=2 color=black>NO</font>',
                  
                                            //          },
                                            //     ]
                  
                                            // },






                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                          
                                           
                                            {
                                                xtype: 'container',
                                                style: ' background-color:transparent',
                                                id: 'ContainerFloatPanel_AyohaRewardEventSetting_EventStatus',                                               
                                                margin: '0 0 0 0',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        style: ' background-color:transparent',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'start',
                                                            align: 'center'
                                    
                                                        },
                                                        items: [
                                    
                                                                 {
                                                                     xtype: 'container',
                                    
                                                                     width: '90%',
                                                                     style: {
                                    
                                                                         background: 'transparent',
                                    
                                                                     },
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'left',
                                                                         align: 'left'
                                    
                                                                     },
                                                                     items: [
                                    
                                    
                                                                         {
                                                                             xtype: 'container',
                                    
                                                                             width: '100%',
                                                                             style: {
                                    
                                                                                 background: 'transparent',
                                    
                                                                             },
                                                                             layout: {
                                                                                 type: 'hbox',
                                                                                 pack: 'start',
                                                                                 align: 'center'
                                    
                                                                             },
                                                                             items: [
                                                                                {
                                                                                    margin: '0 0 0 0', 
                                                                                    width: '100%',                 
                                                                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Type</u></div>',
                                                                                },
                                    
                                    
                                                                             ]
                                                                         },
                                    
                                    
                                                     
                                    
                                    
                                    
                                    
                                    
                                    
                                                                //    {
                                    
                                                                //        margin: '-2 0 0 0',
                                                                //        width: '105%',
                                                                //        height: 20,
                                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                                //    },
                                                                   {
                    
                                                                    id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_EventType',
                                                                    margin: '-2 0 0 0',
                                                                       width: '80%',
                                                                    height: 20,
                                                                    html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType" readOnly style="border-color:grey;color:black;width:100%;text-align: left;font-size:16px;">'
                                                       
                                                       
                                                                },
                                    
                                                                     ]
                                    
                                                                 },
                                    
                                    
                                                                  //{
                                                                  //    xtype:'container'
                                    
                                                                  //},
                                                                    {
                                                                        xtype: 'button',
                                                                       // hidden:true,
                                                                        id: 'btnFloatPanel_AyohaRewardEventSetting_EventType',
                                                                       // name: 'clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 -10 -100',
                                                                        height: 35,
                                                                        width: 35,
                                                                        html: '<img src="resources/icons/ListMenu.png" width="25" height="25" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                            FloatPanel_AyohaRewardEvent_EventTypeShow();
                                                                        }
                                                                    },
                                    
                                                        ]
                                    
                                                    },
                                    
                                                ]
                                            },
        
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },


///////////////////////////////////////////////////////////////////////////////////////////////////

{
    margin: '0 0 0 0', 
    width: '100%',
    id:'htmlFloatPanel_AyohaRewardEventSetting_OnlineEventLinkText',                 
    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Online Event Link</u></div>',
},
{

    id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink',
    margin: '2 0 0 0',
    width: '100%',
    height: 20,    
    html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink"  style="border-color:grey;color:black;width:395px;text-align: left;font-size:16px;">'


},











//////////////////////////////////////////////////////////////////////////////////////////////////////


{ 
    id: 'containerFloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink',
    xtype: 'container',
    width: '100%', 
    height:30,
},









                                            
                                            {
                                                xtype: 'container',
                                                id: 'containerFloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation',
                                                width: '90%',
                                                style: {
               
                                                    background: 'transparent',
               
                                                },
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'left',
                                                    align: 'left'
               
                                                },
                                                items: [
               
               
                                                    {
                                                        xtype: 'container',
               
                                                        width: '100%',
                                                        style: {
               
                                                            background: 'transparent',
               
                                                        },
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'start',
                                                            align: 'center'
               
                                                        },
                                                        items: [
                                                           {
                                                               margin: '0 0 0 0', 
                                                               width: '100%',                 
                                                               html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Location/Address</u></div>',
                                                           },
               
               
                                                        ]
                                                    },
               
               
                                
               
               
               
               
               
               
                                           //    {
               
                                           //        margin: '-2 0 0 0',
                                           //        width: '105%',
                                           //        height: 20,
                                           //        html: '<input type="text" id="inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                           //    },
                                              {

                                               id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation',
                                               margin: '5 0 0 0',
                                                  width: '100%',
                                               height: 50,
                                               html: '<textarea id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation" placeHolder="Can be Exact Address or Online,if Online event put the online link such zoom,gmeet or others "  style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:50px;" wrap="hard"></textarea>'
                                  
                                  
                                           },
               
                                                ]
               
                                            },
                                            // {
                                            //     xtype: 'container',
                                            //     width: '100%', 
                                            //     height:15,
                                            // },
        
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',    
                                               hidden:true,             
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>is Require Coordinate Location?</u></div>',
                                            },
        
                                            {
                                                xtype: 'container',
                                                margin: '10 0 0 0',
                                                hidden:true,   
                                                width: '100%',
                                                id: 'containertogglefieldFloatPanel_AyohaRewardEventSettingYesNo',
                                                style: {
                  
                                                    background: 'transparent',
                  
                                                },
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'left',
                                                    align: 'left'
                  
                                                },
                                                items: [
                                                   
                                                    {
                                                        xtype: 'togglefield',
                                                        // text:'NO/YES',
                                                        //    name: 'toggleName',
                                                        margin: '-12 0 0 -10',
                                                        height: 5,
                                                        // width:20,
                                                        id: 'togglefieldFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo',
                                                        //label: 'Manual',
                                                        disabled: false,
                                                        value: false,
                                                        style: {
                  
                                                            // background: '#f44336',
                                                            background: 'transparent',
                  
                                                        },
                                                        listeners: {
                                                            change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                                                //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                                                if (newValue == true) { // if toggle is true then enable the slider
                  
                                                                    globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="Yes";
                                                                    Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>YES</font>');
                                                                    // globalEditCard_RequireApprovalYesNo = "YES";
                                                                    // Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
                  
                                                                    
                  
                                                                }
                  
                  
                                                                    // if(newValue == false)
                                                                else { // else make it false
                  
                                                                    Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                                    globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="No";
                                                                    // globalEditCard_RequireApprovalYesNo = "NO";
                                                                }
                  
                  
                                                            },
                  
                  
                                                        }
                  
                  
                                                    },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo',
                                                         html: '<font size=2 color=black>NO</font>',
                  
                                                     },
                                                ]
                  
                                            },

                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:15,
                                            },
                                          
                                           
                                            {
                                                xtype: 'container',
                                                style: ' background-color:transparent',
                                                id: 'ContainerFloatPanel_AyohaRewardEventSetting_EventLocationCoordinate',                                               
                                                margin: '0 0 0 0',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        style: ' background-color:transparent',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'start',
                                                            align: 'center'
                                    
                                                        },
                                                        items: [
                                    
                                                                 {
                                                                     xtype: 'container',
                                    
                                                                     width: '90%',
                                                                     style: {
                                    
                                                                         background: 'transparent',
                                    
                                                                     },
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'left',
                                                                         align: 'left'
                                    
                                                                     },
                                                                     items: [
                                    
                                    
                                                                         {
                                                                             xtype: 'container',
                                    
                                                                             width: '100%',
                                                                             style: {
                                    
                                                                                 background: 'transparent',
                                    
                                                                             },
                                                                             layout: {
                                                                                 type: 'hbox',
                                                                                 pack: 'start',
                                                                                 align: 'center'
                                    
                                                                             },
                                                                             items: [
                                                                                {
                                                                                    margin: '0 0 0 0', 
                                                                                    width: '100%',                 
                                                                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Coordinate Location</u>(click  map button to access google map)</div>',
                                                                                },
                                    
                                    
                                                                             ]
                                                                         },
                                    
                                    
                                                     
                                    
                                    
                                    
                                    
                                    
                                    
                                                                //    {
                                    
                                                                //        margin: '-2 0 0 0',
                                                                //        width: '105%',
                                                                //        height: 20,
                                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                                //    },
                                                                   {
                    
                                                                    id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_EventType',
                                                                    margin: '-2 0 0 0',
                                                                       width: '100%',
                                                                    height: 20,
                                                                    html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventCoordinateLocation" placeHolder="Example:2.8072340076440665, 101.80330950871621 " style="border-color:grey;color:black;width:100%;text-align: left;font-size:12px;">'
                                                       
                                                       
                                                                },
                                    
                                                                     ]
                                    
                                                                 },
                                    
                                    
                                                                  //{
                                                                  //    xtype:'container'
                                    
                                                                  //},
                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_AyohaRewardEventSetting_EventType',
                                                                       // name: 'clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 -10 -20',
                                                                        height: 35,
                                                                        width: 35,
                                                                        html: '<img src="resources/icons/locationThree.png" width="25" height="25" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                          
                                                                        }
                                                                    },
                                    
                                                        ]
                                    
                                                    },
                                    
                                                ]
                                            },






















        
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                          
                                           
                                            {
                                                xtype: 'container',
                                                style: ' background-color:transparent',
                                                id: 'ContainerFloatPanel_AyohaRewardEventSetting_EventStatus',                                               
                                                margin: '0 0 0 0',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        style: ' background-color:transparent',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'start',
                                                            align: 'center'
                                    
                                                        },
                                                        items: [
                                    
                                                                 {
                                                                     xtype: 'container',
                                    
                                                                     width: '90%',
                                                                     style: {
                                    
                                                                         background: 'transparent',
                                    
                                                                     },
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'left',
                                                                         align: 'left'
                                    
                                                                     },
                                                                     items: [
                                    
                                    
                                                                         {
                                                                             xtype: 'container',
                                    
                                                                             width: '100%',
                                                                             style: {
                                    
                                                                                 background: 'transparent',
                                    
                                                                             },
                                                                             layout: {
                                                                                 type: 'hbox',
                                                                                 pack: 'start',
                                                                                 align: 'center'
                                    
                                                                             },
                                                                             items: [
                                                                                {
                                                                                    margin: '0 0 0 0', 
                                                                                    width: '100%',                 
                                                                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Status</u></div>',
                                                                                },
                                    
                                    
                                                                             ]
                                                                         },
                                    
                                    
                                                     
                                    
                                    
                                    
                                    
                                    
                                    
                                                                //    {
                                    
                                                                //        margin: '-2 0 0 0',
                                                                //        width: '105%',
                                                                //        height: 20,
                                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                                //    },
                                                                   {
                    
                                                                    id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_EventStatus',
                                                                    margin: '-2 0 0 0',
                                                                       width: '80%',
                                                                    height: 20,
                                                                    html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventStatus" readOnly style="border-color:grey;color:black;width:100%;text-align: left;font-size:16px;">'
                                                       
                                                       
                                                                },
                                    
                                                                     ]
                                    
                                                                 },
                                    
                                    
                                                                  //{
                                                                  //    xtype:'container'
                                    
                                                                  //},
                                                                    {
                                                                        xtype: 'button',
                                                                        hidden:true,
                                                                        id: 'btnFloatPanel_AyohaRewardEventSetting_EventStatus',
                                                                       // name: 'clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 -10 -100',
                                                                        height: 35,
                                                                        width: 35,
                                                                        html: '<img src="resources/icons/ListMenu.png" width="25" height="25" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                          
                                                                        }
                                                                    },
                                    
                                                        ]
                                    
                                                    },
                                    
                                                ]
                                            },
                                        ]
           
        },
        
       
        {
            xtype: 'container',
            width: '30%',
            height: '100%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%', 
                    height:30,
                },
                {
                    margin: '0 0 0 0', 
                    width: '100%',                 
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Status</u></div>',
                },
                {

                    id: 'FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus',
                    margin: '5 0 0 0',
                    width: '90%',
                    height: 20,
                    html: '<input type="text" id="input-FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus" readOnly style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
       
       
                },
               
                {
                    xtype: 'container',
                    width: '100%', 
                    height:30,
                },
                {
                    margin: '0 0 0 0', 
                    width: '100%',                 
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Details</u></div>',
                },
                {
                    margin: '5 0 0 0',
                    width: '100%', 
                    height: 300,
                    html:'<textarea id="input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt" style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:300px;" wrap="hard"></textarea>'
                },
                {
                    xtype: 'container',
                    width: '100%', 
                    height:10,
                },
        


                {
                    margin: '0 0 0 0', 
                    width: '100%',                 
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>QR Code Attendies</u></div>',
                },
              {
                xtype: 'container',
                width: '100%',
                id: 'containerFloatPanel_AyohaRewardEventSetting_QrCode',
                hidden:false, 
                height:150,
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'left'
                },
                items:[
                    {
                         // hidden: true,
                 margin: '0 0 0 0',
                 //  margin: '-100 0 0 20',
                 width: '40%',
                 height: 150,
                 // height: '100%',

                 id: 'htmlFloatPanel_AyohaRewardEventSetting_QrCode',
                 html: '<div id="myQRCodeImg_eventSetting"  style="width: 100%; height: 100%; border:1px none white;" />',
                    },
                    { width: '60%',
                    height: 150,
                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">Print or share this Qr Code as attendies record captured</div>',  
                    }
                ]
              }
        
                
            ]
        },
       
        
       
        {
            xtype: 'container',
            width: '5%',
            height: '100%',
        },
        
       
        
        
        
        {
            xtype: 'container',
            width: '30%',
            height: '100%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            items:[
               
                {
                    xtype: 'container',
                    width: '100%', 
                    height:30,
                },
                
                {
                    margin: '0 0 0 0', 
                    width: '100%',                 
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Event Image Advertisement</u></div>',
                },
        
                {
        
                    xtype: 'container',
                    style: ' background-color:transparent',
                    margin: '5 0 0 0',
                    width: '100%',
                  
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'
                    },
                    items: [
                        {
                           
                            id: 'FloatPanel_AyohaRewardEventSetting_BackgroundImgCard',
                            // iconCls: 'list',
                            html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:102%;height:480px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',
        
                        },
        
                    ]
        
                },
        
                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    id: 'ContainerFloatPanel_AyohaRewardEventSetting_BackgroundImgUploadImage',
                    //hidden: true,
                    margin: '0 0 0 0',
                    width: '100%',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            style: ' background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center'
        
                            },
                            items: [
        
                                     {
                                         xtype: 'container',
        
                                         width: '90%',
                                         style: {
        
                                             background: 'transparent',
        
                                         },
                                         layout: {
                                             type: 'vbox',
                                             pack: 'left',
                                             align: 'left'
        
                                         },
                                         items: [
        
        
                                             {
                                                 xtype: 'container',
        
                                                 width: '100%',
                                                 style: {
        
                                                     background: 'transparent',
        
                                                 },
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'start',
                                                     align: 'center'
        
                                                 },
                                                 items: [
                                                       {
                                                           margin: '3 0 0 0',
        
                                                           html: '<font size=1 color=black>*Uploaded Image limit to < 2MB</font>',
        
                                                       },
        
        
                                                 ]
                                             },
        
        
                          {
                              id: 'HtmlinputImgFloatPanel_AyohaRewardEventSetting_UploadedImage',
                              hidden: true,
                              margin: '0 0 0 0',
                              width: '100%',
                              html: '<input type="file" id="inputImg-FloatPanel_AyohaRewardEventSetting_UploadedImage" accept="image/*"  onchange="FloatPanel_AyohaRewardEventSetting_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
        
                              //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
        
        
        
        
        
                          },
        
        
        
        
        
        
                                       {
        
                                           margin: '-2 0 0 0',
                                           width: '105%',
                                           height: 20,
                                           html: '<input type="text" id="inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                       },
        
                                         ]
        
                                     },
        
        
                                      //{
                                      //    xtype:'container'
        
                                      //},
                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage',
                                            name: 'clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage',
                                            //  badgeText: '1',
                                            margin: '0 0 -10 0',
                                            height: 35,
                                            width: 35,
                                            html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {
                                              
                                            }
                                        },
        
                            ]
        
                        },
        
                    ]
                },
                {
                    margin: '0 0 0 0', 
                    width: '100%',   
                    hidden:true,              
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Activated Event Campaign?</u></div>',
                },
        
                {
                    xtype: 'container',
                    margin: '10 0 0 0',
                    width: '100%',
                    hidden:true,    
                    id: 'containertoggleFloatPanel_AyohaRewardEventSetting_RowStatus',
                    style: {
        
                        background: 'transparent',
        
                    },
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left'
        
                    },
                    items: [
        
                        {
                            xtype: 'togglefield',
                            // text:'NO/YES',
                            //    name: 'toggleName',
                            margin: '-12 0 0 -10',
                            height: 5,
                            // width:20,
                            id: 'togglefieldFloatPanel_AyohaRewardEventSetting_RowStatus',
                            //label: 'Manual',
                            disabled: false,
                            value: false,
                            style: {
        
                                // background: '#f44336',
                                background: 'transparent',
        
                            },
                            listeners: {
                                change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                    //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                    if (newValue == true) { // if toggle is true then enable the slider
        
        
                                        // globalEditCard_RequireApprovalYesNo = "YES";
                                        Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RowStatus').setHtml('<font size=2 color=black>YES</font>');
                                        globalFloatPanel_AyohaRewardEventSetting_RowStatus="Active";
        
        
        
                                    }
        
        
                                        // if(newValue == false)
                                    else { // else make it false
        
                                        Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RowStatus').setHtml('<font size=2 color=black>NO</font>');
                                      
                                        globalFloatPanel_AyohaRewardEventSetting_RowStatus="InActive";
        
                                    }
        
        
                                },
        
        
                            }
        
        
                        },
                         {
                             margin: '0 0 0 0',
                             id: 'htmlisFloatPanel_AyohaRewardEventSetting_RowStatus',
                             html: '<font size=2 color=black>NO</font>',
        
                         },
                    ]
        
                },
            ]
        },
        
        
        
        
        
        
                                ]
                            },
                        ]
                    },
                   

                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_AyohaRewardEventSettingTitleOutter',
                        height:50,
                        width: '100%',
                        docked: 'bottom',
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                        style:GetFooterStyle(),
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
 
                        },
                        items: [
 
 
                        {
                            xtype: 'button',
                           // id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PreviewCard',
                            id:'btnFloatPanel_AyohaRewardEventSetting_Preview',
                            //  badgeText: '1',
                            hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/userlistPurple.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                var  EventName=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value;
                                var EventEndDate=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value;
                                                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value;
                                FloatPanel_AyohaRewardEvent_EventRecipentsShow(globalFloatPanel_AyohaRewardEventSetting_EventCode,CreatedDate,EventEndDate,EventName);
                            }
                        },
            {
                xtype: 'button',
                hidden:true,
               
                id:'txtFloatPanel_AyohaRewardEventSetting_Preview',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Set Event Receipients </font>',
                ui: 'plain',
                handler: function () {
                   var  EventName=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value;
var EventEndDate=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value;
                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value;
                    FloatPanel_AyohaRewardEvent_EventRecipentsShow(globalFloatPanel_AyohaRewardEventSetting_EventCode,CreatedDate,EventEndDate,EventName);
                }
            },
 
 
            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        
                        id:'btnFloatPanel_AyohaRewardEventSetting_DeleteEventLoyalty',
                        //  badgeText: '1',
                        margin: '0 -18 -8 0',
                        //height: 35,
                        //width: 35,
                        html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            // var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value;
                            // if (CardType == "Auto-Default") {
                            //     Swal.fire({
                            //         icon: 'error',
                            //         title: 'Defautl Card',
                            //         text: 'Default Card cannot be deleted!',
                            //     })
                            //     return
                            // }
 
 
                            Swal.fire({
                                title: 'Are you sure To delete?',
                                text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    globalFloatPanel_AyohaRewardEventSetting_RowStatus="InActive";
                                    FloatPanel_AyohaRewardEventSetting_EventDelete()
                                    // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                                }
                            });
 
 
 
 
                        }
                    },
            {
                xtype: 'button',
                id:'txtFloatPanel_AyohaRewardEventSetting_DeleteEventLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>*Delete</font>',
                ui: 'plain',
                handler: function () {
 
 
 
 
 
 
 
 
 
 
 
                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete this Event will effect your customer privileged. They no longer accessible to this Event. Think Carefully before proccedd with delete!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            globalFloatPanel_AyohaRewardEventSetting_RowStatus="InActive";
                            FloatPanel_AyohaRewardEventSetting_EventDelete();
                        }
                    });
                }
            },
 
                 {
                     xtype: 'button',
                     id:'btnFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                        FloatPanel_AyohaRewardEventSetting_Add();
                     }
                 },
            {
                xtype: 'button',
                //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                id:'txtFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Save</font>',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaRewardEventSetting_Add();
                }
            },














            {
                xtype: 'button',
                id:'btnFloatPanel_AyohaRewardEventSetting_EditEventLoyalty',
                //  badgeText: '1',
                margin: '0 -18 -8 0',
                //height: 35,
                //width: 35,
                html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaRewardEventSetting_Edit();
                }
            },
       {
           xtype: 'button',
           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
           id:'txtFloatPanel_AyohaRewardEventSetting_EditEventLoyalty',
           //  badgeText: '1',
           margin: '7 0 0 7',
           //height: 40,
           //width: 130,
           html: '<font size=2 color=grey>Save</font>',
           ui: 'plain',
           handler: function () {

            // var test=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value;
            // alert(test)
            FloatPanel_AyohaRewardEventSetting_Edit();
           // FloatPanel_AyohaRewardEventSetting_Edit();
           }
       },
                        ]
                    },

























                ]
            },












        ]





    });
    return _FloatPanel_AyohaRewardEventSetting;



}







//var globalFloatPanel_AyohaRewardEventSetting_MembershipCardCode;
var globalFloatPanel_AyohaRewardEventSetting_ID;
var globalFloatPanel_AyohaRewardEventSetting_EventCode;
var globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath;
var globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoName;
var globalFloatPanel_AyohaRewardEventSetting_EventName;
var globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="No";
var globalFloatPanel_AyohaRewardEventSetting_RowStatus="Active";
var globalFloatPanel_AyohaRewardEventSetting_EventEndDate="1983-02-19";

function FloatPanel_AyohaRewardEventSettingShow(ID,EventCode,EventType,EventName,EventStartDate_DateOnly,EventStartTime,EventEndDate,EventEndTime,EventDescription,EventCategoryCode,EventLocationCoordinate,EventLocationName,EventCoverPhoto,EventUrlTicket,EventStatus,CreatedDate,CreatedBy,ModifiedBy,ModifiedDate,EventStatus_Merchant,EventCoverPhotoName) {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardEventSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardEventSetting());
    this.overlay.show();
    isFloatPanel_AyohaRewardEventSettingOpen = 'Y';    
   // globalFloatPanel_AyohaRewardEventSetting_MembershipCardCode=MembershipCardCode;
   globalFloatPanel_AyohaRewardEventSetting_ID=ID;
   globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo=EventType;
    globalFloatPanel_AyohaRewardEventSetting_EventCode=EventCode;
    globalFloatPanel_AyohaRewardEventSetting_EventName=EventName;
   // globalFloatPanel_AyohaRewardEventSetting_EventCoverPhoto="ExistingImage";
    globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath="ExistingImage";
globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoName=EventCoverPhotoName;

   // FloatPanel_AyohaRewardEventSetting_EventCampaignLoadByEnterpriseAccNoMembershipCardCode(EventCode);
    //FloatPanel_AyohaRewardEventSetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(EventCode);
    FloatPanel_DrawerMenu_MainHide();

   
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaRewardEventSetting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty').setHidden(true);

  



    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value=EventName;
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value=EventStartDate_DateOnly;
    //document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value=
    
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value=EventEndDate;
   // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value=
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value=EventType;
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value=EventUrlTicket;
    
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value=EventLocationName;
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventCoordinateLocation").value=EventLocationCoordinate;
    
if(EventStatus_Merchant=="NotExpired"){
    EventStatus_Merchant="Running";
}




    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus").value=EventStatus_Merchant;
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value=EventDescription;
    
    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_BackgroundImgCard').setHtml('<img src="'+ EventCoverPhoto +'" style="width:100%;height:480px;border-radius:10px 10px 10px 10px;" alt="Company Name">');
    document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value=EventCoverPhotoName;
    
    
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
    
//alert(modifiedTime)


var modifiedTime_end=convertTo24HourFormat(EventEndTime);
 
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value = modifiedTime_end;


   var task = Ext.create('Ext.util.DelayedTask', function () {
        
   

    var modifiedTime_start=convertTo24HourFormat(EventStartTime);

   
    document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value = modifiedTime_start;

    Ext.Viewport.setMasked(false);
    //  VIAAdvertismentAutoSlide();

});
task.delay(500);
 
 
   //document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value = "22:53:05";


    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value=EventName;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value=StartDate_DateOnly;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value=EndDate_DateOnly;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventStatus").value=EventStatus;
    // document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value=AdvertismentImgName;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value=EventDescription;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value=EventType;
    // document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventQuestion").value=EventQuestion;
    // Ext.getCmp('FloatPanel_AyohaRewardEventSetting_BackgroundImgCard').setHtml('<img src="'+ AdvertisementImgPath+'" style="width:102%;height:480px;border-radius:10px 10px 10px 10px;" alt="Company Name">');  


    // if(globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo=="Yes"){
    //     Ext.getCmp('togglefieldFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setValue(true);
    //     Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>YES</font>');
    // }else{
    //     Ext.getCmp('togglefieldFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setValue(false);
    //     Ext.getCmp('htmlisFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo').setHtml('<font size=2 color=black>NO</font>');
    // }
    
    FloatPanel_AyohaRewardEventSetting_CreateQrCode();


}




function convertTo24HourFormat(timeString) { 
    var [time, period] = timeString.split(' '); 
    var [hour, minute] = time.split(':'); 
    var formattedHour = parseInt(hour); 
  
    if (period === 'PM') { 
        formattedHour += 12; 
    } 
    if (period === 'AM') { 
        formattedHour = hour; 
    } 
    return `${formattedHour}:${minute}`; 
} 


var globalFloatPanel_AyohaRewardEventSetting_LatestNo;
function FloatPanel_AyohaRewardEventSettingShow_AddNew() {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardEventSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardEventSetting());
    this.overlay.show();
    isFloatPanel_AyohaRewardEventSettingOpen = 'Y';
    globalFloatPanel_AyohaRewardEventSetting_RowStatus="Active";
   // globalFloatPanel_AyohaRewardEventSetting_EventCoverPhoto="";
    globalFloatPanel_AyohaRewardEventSetting_ID=0;
    globalFloatPanel_AyohaRewardEventSetting_RequireGoogleMapLocationYesNo="No";
     globalFloatPanel_AyohaRewardEventSetting_EventCode="";
     globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath="";
 globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoName="";
 globalFloatPanel_AyohaRewardEventSetting_EventName="";
   FloatPanel_DrawerMenu_MainHide();

   
   var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaRewardEventSetting_UploadBackgroundImage]')[0];
   var containerViewEl = containerView.element;
   containerViewEl.on('singletap',
     function (event, node, options, eOpts) {

       FloatPanel_AyohaRewardEventSetting_UploadImage();
     }
   );
   Ext.getCmp('btnFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty').setHidden(false);
   Ext.getCmp('txtFloatPanel_AyohaRewardEventSetting_SaveEventLoyalty').setHidden(false);
   Ext.getCmp('btnFloatPanel_AyohaRewardEventSetting_EditEventLoyalty').setHidden(true);
   Ext.getCmp('txtFloatPanel_AyohaRewardEventSetting_EditEventLoyalty').setHidden(true);
   Ext.getCmp('containerFloatPanel_AyohaRewardEventSetting_QrCode').setHidden(true);

   Ext.getCmp('btnFloatPanel_AyohaRewardEventSetting_DeleteEventLoyalty').setHidden(true);
   Ext.getCmp('txtFloatPanel_AyohaRewardEventSetting_DeleteEventLoyalty').setHidden(true);

   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value="";   
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value="";   
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventCoordinateLocation").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus").value="NEW";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value=""; 
   document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value="";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value = "";
   document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value = "";
  
  MasterCountLatestNoByEnterpriseAccNo(GetEnterpriseAccNo(),'AyohaRewardEvent');


}

function FloatPanel_AyohaRewardEventSetting_UploadImage() {
    
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaRewardEventSetting_UploadedImage").click();
    });
}


function FloatPanel_AyohaRewardEventSettingHide() {
   // FloatPanel_AyohaRewardEventSetting_AddCardHide();
    _FloatPanel_AyohaRewardEventSetting.hide(); isFloatPanel_AyohaRewardEventSettingOpen = 'N';
}

function FloatPanel_AyohaRewardEventSetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(MembershipCardCode) {


    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    
  
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersion');
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        
        var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getCount();

    
        if (count > 0) {
            var Store = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getAt(0);
            
        }

       

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}

















var globalFloatPanel_AyohaRewardEventSetting_EventCoverPhoto="ExistingImage";
function FloatPanel_AyohaRewardEventSetting_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaRewardEventSetting_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaRewardEventSetting_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {


        swalFireFail("Image size cannot exceeds 4 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath = event.target.result;
                    document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value = fileName;


                    Ext.getCmp('FloatPanel_AyohaRewardEventSetting_BackgroundImgCard').setHtml('<div ><img src="' + globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath + '"  style="width:102%;height:480px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');
                   

                };


            }
            else {
                globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath="ExistingImage";
            }
        }
    }
}








function FloatPanel_AyohaRewardEventSetting_Edit(){


    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid Event name!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value)
    {

    }
    else{
        swalFireFail("Start date cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value)
    {

    }
    else{
        swalFireFail("Start Time cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value)
    {

    }
    else{
        swalFireFail("End date cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value)
    {

    }
    else{
        swalFireFail("End Time cannot empty !");
        return;
    }
    if(document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Advertisement Event cannot empty !");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Event detail cannot empty !");
        return;
    }
    
    
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value)
    {

    }
    else{
        swalFireFail("Not valid Event type!");
        return;
    }

  var eType=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value;
  if(eType=="Hybrid"){

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value){

    }else{
        swalFireFail("Event Location cannot empty !!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value){

    }else{
        swalFireFail(" Online Video Calls, Meetings and Conferencing link cannot empty !!");
        return;
    }

  }
  if(eType=="Physical"){

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value){

    }else{
        swalFireFail("Event Location cannot empty !!");
        return;
    }
 
  }



  if(eType=="Online"){

   

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value){

    }else{
        swalFireFail(" Online Video Calls, Meetings and Conferencing link cannot empty !!");
        return;
    }
 
  }
    LoadingPanelShow(getLoadingIcon(), 'Save....');
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID":globalFloatPanel_AyohaRewardEventSetting_ID,
            "EventCode":globalFloatPanel_AyohaRewardEventSetting_EventCode,
            "EventType":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value,
            "EventName":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value,
            "EventStartDate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value,
            "EventStartTime":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value,
            "EventEndDate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value,
            "EventEndTime":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value,
            "EventDescription":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value,
            "EventCategoryCode":"NA",
            "EventLocationCoordinate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventCoordinateLocation").value,
            "EventLocationName":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value,
           "EventCoverPhoto":globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath,
            "EventUrlTicket":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value,
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "EventStatus":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus").value,
            "ModifiedBy":GetCurrentUserAccountNo(),
            "EventCoverPhotoName":document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventInsertUpdateMerchant',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    swalFireSuccess("Save" + " Succesfully!");
                  //  LoadingPanelHide();
                    FloatPanel_AyohaRewardEventSettingHide();
                  //  FloatPanel_AyohaEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                  FloatPanel_AyohaRewardEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}



function FloatPanel_AyohaRewardEventSetting_Add(){

var countLatestNo=parseInt(globalFloatPanel_AyohaRewardEventSetting_LatestNo) + 1;

   // alert(countLatestNo);

   // return;

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid Event name!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value)
    {

    }
    else{
        swalFireFail("Start date cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value)
    {

    }
    else{
        swalFireFail("Start Time cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value)
    {

    }
    else{
        swalFireFail("End date cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value)
    {

    }
    else{
        swalFireFail("End Time cannot empty !");
        return;
    }
    if(document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Advertisement Event cannot empty !");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Event detail cannot empty !");
        return;
    }
    
    
    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value)
    {

    }
    else{
        swalFireFail("Not valid Event type!");
        return;
    }

  var eType=document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value;
  if(eType=="Hybrid"){

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value){

    }else{
        swalFireFail("Event Location cannot empty !!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value){

    }else{
        swalFireFail(" Online Video Calls, Meetings and Conferencing link cannot empty !!");
        return;
    }

  }
  if(eType=="Physical"){

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value){

    }else{
        swalFireFail("Event Location cannot empty !!");
        return;
    }
 
  }



  if(eType=="Online"){

   

    if(document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value){

    }else{
        swalFireFail(" Online Video Calls, Meetings and Conferencing link cannot empty !!");
        return;
    }
 
  }
    LoadingPanelShow(getLoadingIcon(), 'Save....');
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID":0,
            "EventCode":"EVM-"+countLatestNo +"-"+ GenerateRandomNo()+"-"+globalFloatPanel_AyohaRewardEventSetting_EventCode,
            "EventType":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventType").value,
            "EventName":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_name").value,
            "EventStartDate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting").value,
            "EventStartTime":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventStartDateSetting_Time").value,
            "EventEndDate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting").value,
            "EventEndTime":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventEndDateSetting_Time").value,
            "EventDescription":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_TermAndConditionTxt").value,
            "EventCategoryCode":"NA",
            "EventLocationCoordinate":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventCoordinateLocation").value,
            "EventLocationName":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_EventLocation").value,
           "EventCoverPhoto":globalFloatPanel_AyohaRewardEventSetting_EventCoverPhotoPath,
            "EventUrlTicket":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_onlinelink").value,
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "EventStatus":document.getElementById("input-FloatPanel_AyohaRewardEventSetting_EventSetting_eventStatus").value,
            "ModifiedBy":GetCurrentUserAccountNo(),
            "EventCoverPhotoName":document.getElementById("inputName-FloatPanel_AyohaRewardEventSetting_UploadedImage").value,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventInsertUpdateMerchant',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    swalFireSuccess("Save" + " Succesfully!");
                  //  LoadingPanelHide();
                    FloatPanel_AyohaRewardEventSettingHide();
                  //  FloatPanel_AyohaEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                  FloatPanel_AyohaRewardEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}




var qrcode_eventSetting;
function FloatPanel_AyohaRewardEventSetting_CreateQrCode() {


    var val = globalFloatPanel_AyohaRewardEventSetting_EventCode;




    var x = screen.width;
    var y = x - 12;
    qrcode_eventSetting = new QRCode(document.getElementById("myQRCodeImg_eventSetting"), {
        width: 170,
        height: 150
    });

    //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));


    qrcode_eventSetting.clear();

    qrcode_eventSetting.makeCode(val);




    //// FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode();

}



function FloatPanel_AyohaRewardEventSetting_EventDelete(){
    LoadingPanelShow(getLoadingIcon(), 'Deleting....');
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            
            "EventCode":globalFloatPanel_AyohaRewardEventSetting_EventCode,            
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "ModifiedBy":GetCurrentUserAccountNo(),
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventDelete',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    swalFireSuccess("Delete" + " Succesfully!");
                  //  LoadingPanelHide();
                    FloatPanel_AyohaRewardEventSettingHide();
                  //  FloatPanel_AyohaEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                  FloatPanel_AyohaRewardEventList_AyohaRewardEventLoadByEnterpriseAccNoStore();

                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}