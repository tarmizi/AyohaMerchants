
Ext.define('ianMizi.view.AyohaContest.FloatPanel_AyohaContestSetting', {

});

var _FloatPanel_AyohaContestSetting;


var isFloatPanel_AyohaContestSettingOpen = 'N';






function FloatPanel_AyohaContestSetting() {

    _FloatPanel_AyohaContestSetting =
    Ext.create('Ext.Container', {
        zIndex: 60,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaContestSettingID',
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
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
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
        //                    _FloatPanel_AyohaContestSetting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaContestSetting.hide(Ext.fx.Animation({
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

                        id: 'containerFloatPanel_AyohaContestSettingHeader',
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
                                    id: 'htmlFloatPanel_AyohaContestSetting_TitleHeaderTxt',
                                    html: '<font size=4 color=black><b>Contest Setting</b></font>'
                                },
                                             
                                              {
                                                  xtype: 'spacer',

                                              },


                                            
                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaContestSettingBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                   // FloatPanel_AyohaContestSettingHide();
                                                    // FloatPanel_AyohaContestSetting_AddCardHide();
                                                    isFloatPanel_AyohaContestSettingOpen = 'N';
                                                    _FloatPanel_AyohaContestSetting.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                       // duration: 250

                                                    }));
                                                   // FloatPanel_AyohaContestSetting_AddCardHide();

                                                }
                                            },    
                                            {
                                                xtype: 'spacer',
                                               // height: 30,
                                                width: 20,
                                            },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaContestSetting_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        hidden:true,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           
                                                            isFloatPanel_AyohaContestSettingOpen = 'N';

                                                            _FloatPanel_AyohaContestSetting.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            //FloatPanel_AyohaContestSetting_AddCardHide();
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
                                        width: '5%',
                                        height: '100%',
                                    },
        {
            xtype: 'container',
                                        id: 'containerFloatPanel_AyohaContestSettingDetails',
                                       // margin: '-10 0 0 0',
                                        width: '30%',
                                        height: '100%',
                                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                        style: "background-color: transparent;",
                                        //style: "background-color: #F35B57;",
                                      //  title: 'FloatPanel_AyohaContestSettingCardLis',
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
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Amount(RM)</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaContestSetting_ContestSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                hidden:true,
                                                height: 20,
                                                html: '<input type="number" id="input-FloatPanel_AyohaContestSetting_ContestSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Campaign Name</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaContestSetting_ContestSetting_name',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="text" id="input-FloatPanel_AyohaContestSetting_ContestSetting_name"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
        
                                           
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Start Date</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaContestSetting_ContestStartDateSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="date" id="input-FloatPanel_AyohaContestSetting_ContestStartDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest End Date</u></div>',
                                            },
                                            {
                    
                                                id: 'FloatPanel_AyohaContestSetting_ContestEndDateSetting',
                                                margin: '5 0 0 0',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="date" id="input-FloatPanel_AyohaContestSetting_ContestEndDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                                   
                                   
                                            },
        
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
        
                                            {
                                                margin: '0 0 0 0', 
                                                width: '100%',                 
                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>is Require Receipt Proof?</u></div>',
                                            },
        
                                            {
                                                xtype: 'container',
                                                margin: '10 0 0 0',
                                                width: '100%',
                                                id: 'containertogglefieldFloatPanel_AyohaContestSettingYesNo',
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
                                                        id: 'togglefieldFloatPanel_AyohaContestSetting_RequireYesNo',
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
                  
                                                                    globalFloatPanel_AyohaContestSetting_isRequiredReceipt="Yes";
                                                                    Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
                                                                    // globalEditCard_RequireApprovalYesNo = "YES";
                                                                    // Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
                  
                                                                    
                  
                                                                }
                  
                  
                                                                    // if(newValue == false)
                                                                else { // else make it false
                  
                                                                    Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                                    globalFloatPanel_AyohaContestSetting_isRequiredReceipt="No";
                                                                    // globalEditCard_RequireApprovalYesNo = "NO";
                                                                }
                  
                  
                                                            },
                  
                  
                                                        }
                  
                  
                                                    },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlisFloatPanel_AyohaContestSetting_RequireYesNo',
                                                         html: '<font size=2 color=black>NO</font>',
                  
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
                                                               html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Question</u></div>',
                                                           },
               
               
                                                        ]
                                                    },
               
               
                                
               
               
               
               
               
               
                                           //    {
               
                                           //        margin: '-2 0 0 0',
                                           //        width: '105%',
                                           //        height: 20,
                                           //        html: '<input type="text" id="inputName-FloatPanel_AyohaContestSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                           //    },
                                              {

                                               id: 'FloatPanel_AyohaContestSetting_ContestSetting_ContestQuestion',
                                               margin: '-2 0 0 0',
                                                  width: '100%',
                                               height: 20,
                                               html: '<input type="text" id="input-FloatPanel_AyohaContestSetting_ContestSetting_ContestQuestion"  style="border-color:grey;color:black;width:100%;text-align: left;font-size:16px;">'
                                  
                                  
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
                                                id: 'ContainerFloatPanel_AyohaContestSetting_ContestType',                                               
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
                                                                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Answer Format</u></div>',
                                                                                },
                                    
                                    
                                                                             ]
                                                                         },
                                    
                                    
                                                     
                                    
                                    
                                    
                                    
                                    
                                    
                                                                //    {
                                    
                                                                //        margin: '-2 0 0 0',
                                                                //        width: '105%',
                                                                //        height: 20,
                                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaContestSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                                //    },
                                                                   {
                    
                                                                    id: 'FloatPanel_AyohaContestSetting_ContestSetting_ContestType',
                                                                    margin: '-2 0 0 0',
                                                                       width: '80%',
                                                                    height: 20,
                                                                    html: '<input type="text" id="input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType"  style="border-color:grey;color:black;width:100%;text-align: left;font-size:16px;">'
                                                       
                                                       
                                                                },
                                    
                                                                     ]
                                    
                                                                 },
                                    
                                    
                                                                  //{
                                                                  //    xtype:'container'
                                    
                                                                  //},
                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_AyohaContestSetting_ContestType',
                                                                       // name: 'clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage',
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






















        
                                            {
                                                xtype: 'container',
                                                width: '100%', 
                                                height:30,
                                            },
                                          
                                           
                                            {
                                                xtype: 'container',
                                                style: ' background-color:transparent',
                                                id: 'ContainerFloatPanel_AyohaContestSetting_ContestStatus',                                               
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
                                                                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Status</u></div>',
                                                                                },
                                    
                                    
                                                                             ]
                                                                         },
                                    
                                    
                                                     
                                    
                                    
                                    
                                    
                                    
                                    
                                                                //    {
                                    
                                                                //        margin: '-2 0 0 0',
                                                                //        width: '105%',
                                                                //        height: 20,
                                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaContestSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                                //    },
                                                                   {
                    
                                                                    id: 'FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus',
                                                                    margin: '-2 0 0 0',
                                                                       width: '80%',
                                                                    height: 20,
                                                                    html: '<input type="text" id="input-FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus" readOnly style="border-color:grey;color:black;width:100%;text-align: left;font-size:16px;">'
                                                       
                                                       
                                                                },
                                    
                                                                     ]
                                    
                                                                 },
                                    
                                    
                                                                  //{
                                                                  //    xtype:'container'
                                    
                                                                  //},
                                                                    {
                                                                        xtype: 'button',
                                                                        hidden:true,
                                                                        id: 'btnFloatPanel_AyohaContestSetting_ContestStatus',
                                                                       // name: 'clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage',
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
        
        // {
        //     xtype: 'container',
        //     width: 50,
        //     height: '100%',
        // },
        
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
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Contest Image Advertisement</u></div>',
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
                           
                            id: 'FloatPanel_AyohaContestSetting_BackgroundImgCard',
                            // iconCls: 'list',
                            html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:102%;height:480px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',
        
                        },
        
                    ]
        
                },
        
                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    id: 'ContainerFloatPanel_AyohaContestSetting_BackgroundImgUploadImage',
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
                              id: 'HtmlinputImgFloatPanel_AyohaContestSetting_UploadedImage',
                              hidden: true,
                              margin: '0 0 0 0',
                              width: '100%',
                              html: '<input type="file" id="inputImg-FloatPanel_AyohaContestSetting_UploadedImage" accept="image/*"  onchange="FloatPanel_AyohaContestSetting_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
        
                              //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
        
        
        
        
        
                          },
        
        
        
        
        
        
                                       {
        
                                           margin: '-2 0 0 0',
                                           width: '105%',
                                           height: 20,
                                           html: '<input type="text" id="inputName-FloatPanel_AyohaContestSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                       },
        
                                         ]
        
                                     },
        
        
                                      //{
                                      //    xtype:'container'
        
                                      //},
                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AyohaContestSetting_UploadBackgroundImage',
                                            name: 'clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage',
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
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Activated Contest Campaign?</u></div>',
                },
        
                {
                    xtype: 'container',
                    margin: '10 0 0 0',
                    width: '100%',
                    hidden:true,    
                    id: 'containertoggleFloatPanel_AyohaContestSetting_RowStatus',
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
                            id: 'togglefieldFloatPanel_AyohaContestSetting_RowStatus',
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
                                        Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RowStatus').setHtml('<font size=2 color=black>YES</font>');
                                        globalFloatPanel_AyohaContestSetting_RowStatus="Active";
        
        
        
                                    }
        
        
                                        // if(newValue == false)
                                    else { // else make it false
        
                                        Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RowStatus').setHtml('<font size=2 color=black>NO</font>');
                                      
                                        globalFloatPanel_AyohaContestSetting_RowStatus="InActive";
        
                                    }
        
        
                                },
        
        
                            }
        
        
                        },
                         {
                             margin: '0 0 0 0',
                             id: 'htmlisFloatPanel_AyohaContestSetting_RowStatus',
                             html: '<font size=2 color=black>NO</font>',
        
                         },
                    ]
        
                },
            ]
        },
        
        // {
        //     xtype: 'container',
        //     width: 50,
        //     height: '100%',
        // },
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
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Contest Term And Conditions(if Any)</u></div>',
                },
                {
                    margin: '5 0 0 0',
                    width: '90%', 
                    height: 450,
                    html:'<textarea id="input-FloatPanel_AyohaContestSetting_TermAndConditionTxt" style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:450px;" wrap="hard"></textarea>'
                },
                {
                    xtype: 'container',
                    width: '100%', 
                    height:30,
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
                        id: 'FloatPanel_AyohaContestSettingTitleOutter',
                        height:50,
                        width: '100%',
                        docked: 'bottom',
                        style:GetFooterStyle(),
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                 
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
 
                        },
                        items: [
 
 
                        {
                            xtype: 'button',
                           // id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PreviewCard',
                            id:'btnFloatPanel_AyohaContestSetting_Preview',
                            //  badgeText: '1',
                            hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/userlistPurple.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                var  ContestName=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value;
                                var ContestEndDate=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value;
                                                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value;
                                FloatPanel_AyohaRewardContest_ContestRecipentsShow(globalFloatPanel_AyohaContestSetting_ContestCode,CreatedDate,ContestEndDate,ContestName);
                            }
                        },
            {
                xtype: 'button',
                hidden:true,
               
                id:'txtFloatPanel_AyohaContestSetting_Preview',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Set Contest Receipients </font>',
                ui: 'plain',
                handler: function () {
                   var  ContestName=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value;
var ContestEndDate=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value;
                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value;
                    FloatPanel_AyohaRewardContest_ContestRecipentsShow(globalFloatPanel_AyohaContestSetting_ContestCode,CreatedDate,ContestEndDate,ContestName);
                }
            },
 
 
            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        
                        id:'btnFloatPanel_AyohaContestSetting_DeleteContestLoyalty',
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
                                    globalFloatPanel_AyohaContestSetting_RowStatus="InActive";
                                    FloatPanel_AyohaContestSetting_ContestCampaignInsertUpdate_Edit()
                                    // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                                }
                            });
 
 
 
 
                        }
                    },
            {
                xtype: 'button',
                id:'txtFloatPanel_AyohaContestSetting_DeleteContestLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>*Delete</font>',
                ui: 'plain',
                handler: function () {
 
 
 
 
 
 
 
 
 
 
 
                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete this Contest will effect your customer privileged. They no longer accessible to this Contest. Think Carefully before proccedd with delete!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            globalFloatPanel_AyohaContestSetting_RowStatus="InActive";
                            FloatPanel_AyohaContestList_AyohaRewardContestLoadByEnterpriseAccNoStore();
                        }
                    });
                }
            },
 
                 {
                     xtype: 'button',
                     id:'btnFloatPanel_AyohaContestSetting_SaveContestLoyalty',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                        FloatPanel_AyohaContestSetting_Add();
                     }
                 },
            {
                xtype: 'button',
                //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                id:'txtFloatPanel_AyohaContestSetting_SaveContestLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Save</font>',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaContestSetting_Add();
                }
            },














            {
                xtype: 'button',
                id:'btnFloatPanel_AyohaContestSetting_EditContestLoyalty',
                //  badgeText: '1',
                margin: '0 -18 -8 0',
                //height: 35,
                //width: 35,
                html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaContestSetting_Edit();
                }
            },
       {
           xtype: 'button',
           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
           id:'txtFloatPanel_AyohaContestSetting_EditContestLoyalty',
           //  badgeText: '1',
           margin: '7 0 0 7',
           //height: 40,
           //width: 130,
           html: '<font size=2 color=grey>Save</font>',
           ui: 'plain',
           handler: function () {
            FloatPanel_AyohaContestSetting_Edit();
           }
       },
                        ]
                    },

























                ]
            },












        ]





    });
    return _FloatPanel_AyohaContestSetting;



}







//var globalFloatPanel_AyohaContestSetting_MembershipCardCode;
var globalFloatPanel_AyohaContestSetting_ID;
var globalFloatPanel_AyohaContestSetting_ContestCode;
var globalFloatPanel_AyohaContestSetting_AdvertisementImgPath;
var globalFloatPanel_AyohaContestSetting_AdvertismentImgName;
var globalFloatPanel_AyohaContestSetting_WinnerAnnoucementStatus;
var globalFloatPanel_AyohaContestSetting_isRequiredReceipt="No";
var globalFloatPanel_AyohaContestSetting_RowStatus="Active";
var globalFloatPanel_AyohaContestSetting_ContestEndDate="1983-02-19";

function FloatPanel_AyohaContestSettingShow(ID,ContestCode,ContestName,AdvertisementImgPath,AdvertismentImgName,StartDate_DateOnly,EndDate_DateOnly,isRequiredReceipt,ContestStatus,ContestDescription,WinnerAnnoucementStatus,CreatedDate,CreatedBy,ContestType,ContestQuestion) {

    Ext.Viewport.remove(_FloatPanel_AyohaContestSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContestSetting());
    this.overlay.show();
    isFloatPanel_AyohaContestSettingOpen = 'Y';    
   // globalFloatPanel_AyohaContestSetting_MembershipCardCode=MembershipCardCode;
   globalFloatPanel_AyohaContestSetting_ID=ID;
   globalFloatPanel_AyohaContestSetting_isRequiredReceipt=isRequiredReceipt;
    globalFloatPanel_AyohaContestSetting_ContestCode=ContestCode;
    globalFloatPanel_AyohaContestSetting_UploadedImage="ExistingImage";
    globalFloatPanel_AyohaContestSetting_AdvertisementImgPath=AdvertisementImgPath;
globalFloatPanel_AyohaContestSetting_AdvertismentImgName=AdvertismentImgName;
globalFloatPanel_AyohaContestSetting_WinnerAnnoucementStatus=WinnerAnnoucementStatus;
   // FloatPanel_AyohaContestSetting_ContestCampaignLoadByEnterpriseAccNoMembershipCardCode(ContestCode);
    //FloatPanel_AyohaContestSetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(ContestCode);
    FloatPanel_DrawerMenu_MainHide();

   
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaContestSetting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_AyohaContestSetting_SaveContestLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaContestSetting_SaveContestLoyalty').setHidden(true);

  
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value=ContestName;
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value=StartDate_DateOnly;
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value=EndDate_DateOnly;
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus").value=ContestStatus;
    document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value=AdvertismentImgName;
    document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value=ContestDescription;
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType").value=ContestType;
    document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestQuestion").value=ContestQuestion;
    Ext.getCmp('FloatPanel_AyohaContestSetting_BackgroundImgCard').setHtml('<img src="'+ AdvertisementImgPath+'" style="width:102%;height:480px;border-radius:10px 10px 10px 10px;" alt="Company Name">');  


    if(globalFloatPanel_AyohaContestSetting_isRequiredReceipt=="Yes"){
        Ext.getCmp('togglefieldFloatPanel_AyohaContestSetting_RequireYesNo').setValue(true);
        Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
    }else{
        Ext.getCmp('togglefieldFloatPanel_AyohaContestSetting_RequireYesNo').setValue(false);
        Ext.getCmp('htmlisFloatPanel_AyohaContestSetting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
    }
    



}
function FloatPanel_AyohaContestSettingShow_AddNew() {

    Ext.Viewport.remove(_FloatPanel_AyohaContestSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContestSetting());
    this.overlay.show();
    isFloatPanel_AyohaContestSettingOpen = 'Y';
    globalFloatPanel_AyohaContestSetting_RowStatus="Active";
    globalFloatPanel_AyohaContestSetting_UploadedImage="";
    globalFloatPanel_AyohaContestSetting_ID=0;
    globalFloatPanel_AyohaContestSetting_isRequiredReceipt="No";
     globalFloatPanel_AyohaContestSetting_ContestCode="";
     globalFloatPanel_AyohaContestSetting_AdvertisementImgPath="";
 globalFloatPanel_AyohaContestSetting_AdvertismentImgName="";
 globalFloatPanel_AyohaContestSetting_WinnerAnnoucementStatus="";
   FloatPanel_DrawerMenu_MainHide();

   
   var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage]')[0];
   var containerViewEl = containerView.element;
   containerViewEl.on('singletap',
     function (event, node, options, eOpts) {

       FloatPanel_AyohaContestSetting_UploadImage();
     }
   );
   Ext.getCmp('btnFloatPanel_AyohaContestSetting_SaveContestLoyalty').setHidden(false);
   Ext.getCmp('txtFloatPanel_AyohaContestSetting_SaveContestLoyalty').setHidden(false);
   Ext.getCmp('btnFloatPanel_AyohaContestSetting_EditContestLoyalty').setHidden(true);
   Ext.getCmp('txtFloatPanel_AyohaContestSetting_EditContestLoyalty').setHidden(true);
   

  
   document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value="";
   document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value="";
   document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value="";
   document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus").value="";
   document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value="";
   document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value="";
  
   
    
 
   // FloatPanel_AyohaContestSetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore('00');
}

function FloatPanel_AyohaContestSetting_UploadImage() {
    
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaContestSetting_UploadedImage").click();
    });
}


function FloatPanel_AyohaContestSettingHide() {
   // FloatPanel_AyohaContestSetting_AddCardHide();
    _FloatPanel_AyohaContestSetting.hide(); isFloatPanel_AyohaContestSettingOpen = 'N';
}

function FloatPanel_AyohaContestSetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(MembershipCardCode) {


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

















var globalFloatPanel_AyohaContestSetting_UploadedImage="ExistingImage";
function FloatPanel_AyohaContestSetting_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaContestSetting_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaContestSetting_UploadedImage').files[0].name;

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
                    globalFloatPanel_AyohaContestSetting_AdvertisementImgPath = event.target.result;
                    document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value = fileName;


                    Ext.getCmp('FloatPanel_AyohaContestSetting_BackgroundImgCard').setHtml('<div ><img src="' + globalFloatPanel_AyohaContestSetting_AdvertisementImgPath + '"  style="width:102%;height:480px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');
                   

                };


            }
            else {
                globalFloatPanel_AyohaContestSetting_AdvertisementImgPath="ExistingImage";
            }
        }
    }
}








function FloatPanel_AyohaContestSetting_Edit(){



    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid contest name!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value)
    {

    }
    else{
        swalFireFail("Start date cannot empty !");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value)
    {

    }
    else{
        swalFireFail("End date cannot empty !");
        return;
    }
   
    if(document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Advertisement contest cannot empty !");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Advertisement Detail/Rule cannot empty !");
        return;
    }
    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType").value)
    {

    }
    else{
        swalFireFail("Not valid contest type!");
        return;
    }


  

    LoadingPanelShow(getLoadingIcon(), 'Save....');
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID":globalFloatPanel_AyohaContestSetting_ID,
            "ContestCode":globalFloatPanel_AyohaContestSetting_ContestCode,
            "AdvertisementImgPath":globalFloatPanel_AyohaContestSetting_AdvertisementImgPath,
            "AdvertismentImgName":document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value,
            "StartDate":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value,
            "EndDate":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value,
            "RowStatus":"Active",
            "CreatedBy":GetCurrentUserAccountNo(),
            "ContestStatus":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus").value,
            "SegmentContestCode":"NA",
            "ContestDescription":document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value,
            "ContestFees":"0.00",
           "FirstPrizeImgPath":"NA",
            "FirstPrizeImgName":"NA",
            "SecondPrizeImgPath":"NA",
            "SecondPrizeImgName":"NA",


            "ThirdPrizeImgPath":"NA",
            "ThirdPrizeImgName":"NA",
            "ConsolationPrizeImg":"NA",
            "ConsolationPrizeName":"NA",
            "ContestName":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value,
           "WinnerAnnoucementStatus":"NA",
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "isRequiredReceipt":globalFloatPanel_AyohaContestSetting_isRequiredReceipt,
            "ContestType":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType").value,
            "ContestQuestion":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestQuestion").value,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestInsertUpdateMerchant',

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
                    LoadingPanelHide();
                    FloatPanel_AyohaContestList_AyohaRewardContestLoadByEnterpriseAccNoStore();


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


function FloatPanel_AyohaContestSetting_Add(){



    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid contest name!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value)
    {

    }
    else{
        swalFireFail("Start date cannot empty !");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value)
    {

    }
    else{
        swalFireFail("End date cannot empty !");
        return;
    }
   
    if(document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Advertisement contest cannot empty !");
        return;
    }



    if(document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType").value)
    {

    }
    else{
        swalFireFail("Not valid contest type!");
        return;
    }





    if(document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Advertisement Detail/Rule cannot empty !");
        return;
    }
 


  

    LoadingPanelShow(getLoadingIcon(), 'Save....');
   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID":0,
            "ContestCode":"AC-"+GenerateRandomNo()+"-"+GetEnterpriseAccNo(),
            "AdvertisementImgPath":globalFloatPanel_AyohaContestSetting_AdvertisementImgPath,
            "AdvertismentImgName":document.getElementById("inputName-FloatPanel_AyohaContestSetting_UploadedImage").value,
            "StartDate":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestStartDateSetting").value,
            "EndDate":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestEndDateSetting").value,
            "RowStatus":"Active",
            "CreatedBy":GetCurrentUserAccountNo(),
            "ContestStatus":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestStatus").value,
            "SegmentContestCode":"NA",
            "ContestDescription":document.getElementById("input-FloatPanel_AyohaContestSetting_TermAndConditionTxt").value,
            "ContestFees":"0.00",
           "FirstPrizeImgPath":"NA",
            "FirstPrizeImgName":"NA",
            "SecondPrizeImgPath":"NA",
            "SecondPrizeImgName":"NA",


            "ThirdPrizeImgPath":"NA",
            "ThirdPrizeImgName":"NA",
            "ConsolationPrizeImg":"NA",
            "ConsolationPrizeName":"NA",
            "ContestName":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_name").value,
           "WinnerAnnoucementStatus":"NA",
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "isRequiredReceipt":globalFloatPanel_AyohaContestSetting_isRequiredReceipt,
            "ContestType":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestType").value,
            "ContestQuestion":document.getElementById("input-FloatPanel_AyohaContestSetting_ContestSetting_ContestQuestion").value,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestInsertUpdateMerchant',

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
                    LoadingPanelHide();
                    FloatPanel_AyohaContestList_AyohaRewardContestLoadByEnterpriseAccNoStore();


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