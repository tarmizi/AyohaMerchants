
Ext.define('ianMizi.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_Setting', {

});

var _FloatPanel_AyohaRewardVoucherList_Setting;


var isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'N';






function FloatPanel_AyohaRewardVoucherList_Setting() {

    _FloatPanel_AyohaRewardVoucherList_Setting =
    Ext.create('Ext.Container', {
        zIndex: 90,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaRewardVoucherList_SettingID',
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
        //                    _FloatPanel_AyohaRewardVoucherList_Setting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaRewardVoucherList_Setting.hide(Ext.fx.Animation({
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
                    type: 'fit',

                },
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked:'top',
                        height: 60,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaRewardVoucherList_SettingHeader',
                        style:GetHeaderStyle(),
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
                                    id: 'htmlFloatPanel_AyohaRewardVoucherList_Setting_TitleHeaderTxt',
                                    html: '<font size=4 color=black><b>Voucher Setting</b></font>'
                                },
                                             
                                              {
                                                  xtype: 'spacer',

                                              },


                                            
                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaRewardVoucherList_SettingBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                   // FloatPanel_AyohaRewardVoucherList_SettingHide();
                                                    // FloatPanel_AyohaRewardVoucherList_Setting_AddCardHide();
                                                    isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'N';
                                                    _FloatPanel_AyohaRewardVoucherList_Setting.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                       // duration: 250

                                                    }));
                                                   // FloatPanel_AyohaRewardVoucherList_Setting_AddCardHide();

                                                }
                                            },    
                                            {
                                                xtype: 'spacer',
                                               // height: 30,
                                                width: 20,
                                            },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaRewardVoucherList_Setting_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        hidden:true,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           
                                                            isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'N';

                                                            _FloatPanel_AyohaRewardVoucherList_Setting.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            //FloatPanel_AyohaRewardVoucherList_Setting_AddCardHide();
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


                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'left'

                        },
                        items: [
                          



//                             {
//                                 xtype: 'container',
//                                 id: 'containerFloatPanel_AyohaRewardVoucherList_SettingStampCardList',
//                                 hidden:true,
//                                // margin: '-10 0 0 0',
//                                 width: '25%',
//                                 height: '100%',
//                                 //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
//                                 style: "background-color: transparent;",
//                                 //style: "background-color: #F35B57;",
//                                 title: 'FloatPanel_AyohaRewardVoucherList_SettingCardLis',
//                                 layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'left'

//                                 },
                              

//                                 items: [
//                                     {
//                                         xtype: 'panel',
//                                         height:5
//                                     },

//                                   {
//                                       xtype: 'container',
//                                       width: '100%',
//                                       height: '100%',
//                                       style: "background-color: transparent;",
//                                       layout: {
//                                           type: 'vbox',
//                                           pack: 'start',
//                                           align: 'left'

//                                       },
//                                       items: [

                                          
//                                            {
//                                                xtype: 'panel',
//                                                height: 5
//                                            },

                                              
// {
//     xtype: 'container',
//     width: '100%',
//     height:'100%',
//     layout: {
//         type: 'vbox',
//         pack: 'start',
//         align: 'center'

//     },
//     style: 'background-color:transparent',
//     items:[

     
//         {
//             xtype: 'container',
//             width: 420,
//             margin:'18 0 0 0',
//             height:'100%',

//             layout: {
//                 type: 'vbox',
//                 pack: 'start',
//                 align: 'center'

//             },
//             style: 'background-color:transparent',
            
//             items: [
//                 {
//                     margin: '0 0 0 20', 
//                     width: '100%',                 
//                     html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membership Card Selected</u></div>',
//                 },
//                 {
//                     xtype: 'list',
//                     margin: '7 0 0 0', 
//                     //flex:1,
//                     height: '96%',
//                     store: _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore,
//                     id: 'FloatPanel_AyohaRewardVoucherList_SettingLoyaltyCardID',
//                     mode: 'SINGLE',
//                     //grouped: true,
//                     disableSelection: true,
//                     scrollable: {
//                         direction: 'vertical',
//                         indicators: {
//                             y: {
//                                 autoHide: true
//                             },
//                             x: {
//                                 autoHide: true
//                             }
//                         }
//                     },
//                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
//                     //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
//                     //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//                     //   '</div>' +
//                     //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

//                     itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
//                   //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
//                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
//                                                 '</div>' +
//                                                 // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
//                     '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
//                     '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">{MembersCount}</div></div>' +
//                    //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

//                     '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
//                   //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
//                     //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
//                       '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',

//                     //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',







//                     width: '100%',
//                     listeners: {
//                         itemsingletap: function (list, idx, target, records, evt) {

//                           //  var ID = records.get('ID');

//                            // FloatPanel_AyohaRewardVoucherList_Setting_EditCardShow_Edit(ID);

//                         },
//                         deselect: function (list, records) {

//                         }
//                     },

//                 },
//             ]
//         },
//     ]
// },
                                           
                                          
        
//                                       ]
//                                   },
                                  
//                                 ]

//                             },

                            {
                                xtype: 'container',
                                width: 110,
                                height: '100%',
                            },
{
    xtype: 'container',
                                id: 'containerFloatPanel_AyohaRewardVoucherList_SettingDetails',
                               // margin: '-10 0 0 0',
                                width: '30%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                              //  title: 'FloatPanel_AyohaRewardVoucherList_SettingCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                                items:[
                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:35,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Voucher Amount(RM)</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="number" id="input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },
                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Voucher Campaign Name</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },

                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },

                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>is Voucher Have End Date?</u></div>',
                                    },

                                    {
                                        xtype: 'container',
                                        margin: '10 0 0 0',
                                        width: '100%',
                                        id: 'containertogglefieldFloatPanel_AyohaRewardVoucherList_SettingYesNo',
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
                                                id: 'togglefieldFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo',
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
          
                                                            globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate="Yes";
                                                            Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
                                                            // globalEditCard_RequireApprovalYesNo = "YES";
                                                            // Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
          
                                                            
          
                                                        }
          
          
                                                            // if(newValue == false)
                                                        else { // else make it false
          
                                                            Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                            globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate="No";
                                                            // globalEditCard_RequireApprovalYesNo = "NO";
                                                        }
          
          
                                                    },
          
          
                                                }
          
          
                                            },
                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlisFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo',
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
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Voucher End Date</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="date" id="input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },



                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Set Voucher Image</u></div>',
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
                           
                                                id: 'FloatPanel_AyohaRewardVoucherList_Setting_BackgroundImgCard',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:110%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',
                           
                                            },
                           
                                        ]
                           
                                    },
                           
                                    {
                                        xtype: 'container',
                                        style: ' background-color:transparent',
                                        id: 'ContainerFloatPanel_AyohaRewardVoucherList_Setting_BackgroundImgUploadImage',
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
                                                  id: 'HtmlinputImgFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage',
                                                  hidden: true,
                                                  margin: '0 0 0 0',
                                                  width: '100%',
                                                  html: '<input type="file" id="inputImg-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage" accept="image/*"  onchange="FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
                           
                                                  //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
                           
                           
                           
                           
                           
                                              },
                           
                           
                           
                           
                           
                           
                                                           {
                           
                                                               margin: '-2 0 0 0',
                                                               width: '105%',
                                                               height: 20,
                                                               html: '<input type="text" id="inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                           },
                           
                                                             ]
                           
                                                         },
                           
                           
                                                          //{
                                                          //    xtype:'container'
                           
                                                          //},
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaRewardVoucherList_Setting_UploadBackgroundImage',
                                                                name: 'clickablebtnFloatPanel_AyohaRewardVoucherList_Setting_UploadBackgroundImage',
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
                           
                                ]
   
},

{
    xtype: 'container',
    width: 50,
    height: '100%',
},

{
    xtype: 'container',
    width: '45%',
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
            html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card voucher Term And Conditions(if Any)</u></div>',
        },
        {
            margin: '5 0 0 0',
            width: '70%', 
            height: 450,
            html:'<textarea id="input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt" style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:450px;" wrap="hard"></textarea>'
        },
        {
            xtype: 'container',
            width: '100%', 
            height:30,
        },

        {
            margin: '0 0 0 0', 
            width: '100%',   
            hidden:true,              
            html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Activated voucher Campaign?</u></div>',
        },

        {
            xtype: 'container',
            margin: '10 0 0 0',
            width: '100%',
            hidden:true,    
            id: 'containertoggleFloatPanel_AyohaRewardVoucherList_Setting_RowStatus',
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
                    id: 'togglefieldFloatPanel_AyohaRewardVoucherList_Setting_RowStatus',
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
                                Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RowStatus').setHtml('<font size=2 color=black>YES</font>');
                                globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="Active";



                            }


                                // if(newValue == false)
                            else { // else make it false

                                Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RowStatus').setHtml('<font size=2 color=black>NO</font>');
                              
                                globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="InActive";

                            }


                        },


                    }


                },
                 {
                     margin: '0 0 0 0',
                     id: 'htmlisFloatPanel_AyohaRewardVoucherList_Setting_RowStatus',
                     html: '<font size=2 color=black>NO</font>',

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
                        id: 'FloatPanel_AyohaRewardVoucherList_SettingTitleOutter',
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
                            id:'btnFloatPanel_AyohaRewardVoucherList_Setting_Preview',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/userlistPurple.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                var  VoucherName=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value;
                                var VoucherEndDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
                                                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
                                FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow(globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode,CreatedDate,VoucherEndDate,VoucherName);
                            }
                        },
            {
                xtype: 'button',
                //hidden:true,
               
                id:'txtFloatPanel_AyohaRewardVoucherList_Setting_Preview',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Set Voucher Receipients </font>',
                ui: 'plain',
                handler: function () {
                   var  VoucherName=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value;
var VoucherEndDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
                    var CreatedDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
                    FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow(globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode,CreatedDate,VoucherEndDate,VoucherName);
                }
            },
 
 
            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        
                        id:'btnFloatPanel_AyohaRewardVoucherList_Setting_DeletevoucherLoyalty',
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
                                    globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="InActive";
                                    FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit()
                                    // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                                }
                            });
 
 
 
 
                        }
                    },
            {
                xtype: 'button',
                id:'txtFloatPanel_AyohaRewardVoucherList_Setting_DeletevoucherLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>*Delete</font>',
                ui: 'plain',
                handler: function () {
 
 
 
 
 
 
 
 
 
 
 
                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete this voucher will effect your customer privileged. They no longer accessible to this voucher. Think Carefully before proccedd with delete!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="InActive";
                            FloatPanel_AyohaRewardVoucherList_Setting_DeleteVoucher();
                       // FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit()
                        // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                        }
                    });
                }
            },
 
                 {
                     xtype: 'button',
                     id:'btnFloatPanel_AyohaRewardVoucherList_Setting_SavevoucherLoyalty',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                        FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate();
                     }
                 },
            {
                xtype: 'button',
                //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                id:'txtFloatPanel_AyohaRewardVoucherList_Setting_SavevoucherLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Save</font>',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate();
                }
            },














            {
                xtype: 'button',
                id:'btnFloatPanel_AyohaRewardVoucherList_Setting_EditvoucherLoyalty',
                //  badgeText: '1',
                margin: '0 -18 -8 0',
                //height: 35,
                //width: 35,
                html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit();
                }
            },
       {
           xtype: 'button',
           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
           id:'txtFloatPanel_AyohaRewardVoucherList_Setting_EditvoucherLoyalty',
           //  badgeText: '1',
           margin: '7 0 0 7',
           //height: 40,
           //width: 130,
           html: '<font size=2 color=grey>Save</font>',
           ui: 'plain',
           handler: function () {
            FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit();
           }
       },
                        ]
                    },

























                ]
            },












        ]





    });
    return _FloatPanel_AyohaRewardVoucherList_Setting;



}







var globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode;
var globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode;
var globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate="No";
var globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="Active";
var globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate="1983-02-19";
function FloatPanel_AyohaRewardVoucherList_ListVoucherSettingShow(ID,VoucherCode,VoucherName,VoucherImgPath,VoucherImgName,VoucherAmount,VoucherTermAndCondition,EnterpriseAccNo,VoucherType,MembershipCardCode,VoucherEndDate,VoucherNote,isRequireVoucherEndDate) {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherList_Setting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherList_Setting());
    this.overlay.show();
    isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'Y';    
    globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode=MembershipCardCode;
    globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode=VoucherCode;
    globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage="ExistingImage";
   // FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignLoadByEnterpriseAccNoMembershipCardCode(voucherCode);
    //FloatPanel_AyohaRewardVoucherList_Setting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(voucherCode);
    FloatPanel_DrawerMenu_MainHide();
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaRewardVoucherList_Setting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaRewardVoucherList_Setting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucherList_Setting_SavevoucherLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaRewardVoucherList_Setting_SavevoucherLoyalty').setHidden(true);

    var mydate=VoucherEndDate;
                        
    var mydate2=mydate.replace("12:00:00 AM","");

    globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=isRequireVoucherEndDate;

    globalFloatPanel_AyohaRewardVoucherList_Setting_ID=ID;
    document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value=VoucherAmount;
                    document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value=VoucherName;
                    document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value=mydate2;
                    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_Setting_BackgroundImgCard').setHtml('<img src="'+ VoucherImgPath+'" style="width:110%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name">');  
                    document.getElementById("inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage").value=VoucherImgName;
                    document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value=VoucherTermAndCondition;
                   // document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value=data.results[0].voucherEndDate;
                    globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=isRequireVoucherEndDate;
                    //globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus=data.results[0].RowStatus;
                 


if(globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=="Yes"){
    Ext.getCmp('togglefieldFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setValue(true);
    Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
}else{
    Ext.getCmp('togglefieldFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setValue(false);
    Ext.getCmp('htmlisFloatPanel_AyohaRewardVoucherList_Setting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
}




}
function FloatPanel_AyohaRewardVoucherList_SettingShow_AddNew() {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherList_Setting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherList_Setting());
    this.overlay.show();
    isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'Y';
    globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus="Active";
    globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage="NA";
    globalFloatPanel_AyohaRewardVoucherList_Setting_ID=0;
   // FloatPanel_AyohaCardManagement_AddCardHide();
    FloatPanel_DrawerMenu_MainHide();
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaRewardVoucherList_Setting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaRewardVoucherList_Setting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucherList_Setting_EditvoucherLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaRewardVoucherList_Setting_EditvoucherLoyalty').setHidden(true);
    Ext.getCmp('btnFloatPanel_AyohaRewardVoucherList_Setting_Preview').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaRewardVoucherList_Setting_Preview').setHidden(true);
    
 
   // FloatPanel_AyohaRewardVoucherList_Setting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore('00');
}

function FloatPanel_AyohaRewardVoucherList_Setting_UploadImage() {
    
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage").click();
    });
}


function FloatPanel_AyohaRewardVoucherList_SettingHide() {
   // FloatPanel_AyohaRewardVoucherList_Setting_AddCardHide();
    _FloatPanel_AyohaRewardVoucherList_Setting.hide(); isFloatPanel_AyohaRewardVoucherList_SettingOpen = 'N';
}

function FloatPanel_AyohaRewardVoucherList_Setting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(MembershipCardCode) {


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







function FloatPanel_AyohaRewardVoucherList_Setting_DeleteVoucher(){
    LoadingPanelShow(getLoadingIcon(), 'Delete....');


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID:":globalFloatPanel_AyohaRewardVoucherList_Setting_ID,
            "voucherCode":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode,
            "voucherName":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value,
            "voucherImgPath":globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage,
            "voucherImgName":document.getElementById('inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').value,
            "voucherAmount":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value,
            "voucherTermAndCondition":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "voucherType":"AyohaMerchantVoucher",
          //  "MembershipCardCode":globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode,
           "MembershipCardCode":"USU",
            "voucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate,
            "voucherNote":"NA",
            "isRequirevoucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher/AyohaRewardVoucherInsertUpdate',

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
                    LoadingPanelHide();
                    FloatPanel_AyohaRewardVoucherList_SettingHide();
                    //FloatPanel_MerchantvoucherLoyaltyHide();
                    FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                   // FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore()
                  //  var dc="DC-"+globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card voucher",0,globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode);



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

function FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit(){


    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value)
    {

    }
    else{
        swalFireFail("Not valid voucher value percent!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid voucher campaign name !");
        return;
    }
   

    if(globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=="Yes"){
        if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value){
            globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
        }else{
            swalFireFail("End Date voucher campaign is requred !");
            return;
        }

    }else{
        
        globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate="1983-02-19";
    }

    if(document.getElementById("inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("voucher campaign image is required!");
        return;
    }


    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Not Valid term and condition !");
        return; 
    }
   

   
    //document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value=data.results[0].voucherTermAndCondition;
   // document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value=data.results[0].voucherEndDate;
    //globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=data.results[0].isRequirevoucherEndDate;
    //globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus=data.results[0].RowStatus;
 







    LoadingPanelShow(getLoadingIcon(), 'Save....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID:":globalFloatPanel_AyohaRewardVoucherList_Setting_ID,
            "voucherCode":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode,
            "voucherName":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value,
            "voucherImgPath":globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage,
            "voucherImgName":document.getElementById('inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').value,
            "voucherAmount":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value,
            "voucherTermAndCondition":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "voucherType":"AyohaMerchantVoucher",
          //  "MembershipCardCode":globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode,
           "MembershipCardCode":"USU",
            "voucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate,
            "voucherNote":"NA",
            "isRequirevoucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher/AyohaRewardVoucherInsertUpdate',

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
                    FloatPanel_AyohaRewardVoucherList_SettingHide();
                   // FloatPanel_MerchantvoucherLoyaltyHide();
                    FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                    //FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                  //  var dc="DC-"+globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card voucher",0,globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode);



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







function FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate(){

    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value)
    {

    }
    else{
        swalFireFail("Not valid voucher value percent!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid voucher campaign name !");
        return;
    }
   

    if(globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=="Yes"){
        if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value){
            globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
        }else{
            swalFireFail("End Date voucher campaign is requred !");
            return;
        }

    }else{
        
        globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate="1983-02-19";
    }

    if(document.getElementById("inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("voucher campaign image is required!");
        return;
    }


    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Not Valid term and condition !");
        return; 
    }
   

   





    LoadingPanelShow(getLoadingIcon(), 'Saving....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID":globalFloatPanel_AyohaRewardVoucherList_Setting_ID,
            "voucherCode":"VCM-"+GenerateRandomNo()+"-"+GetEnterpriseAccNo(),          
            "voucherName":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value,
            "voucherImgPath":globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage,
            "voucherImgName":document.getElementById('inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').value,
            "voucherAmount":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value,
            "voucherTermAndCondition":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "voucherType":"AyohaMerchantVoucher",
            //"MembershipCardCode":globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode,
            "MembershipCardCode":"USU",
           // "voucherEndDate":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value,
           "voucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate,
           "voucherNote":"NA",
            "isRequirevoucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher/AyohaRewardVoucherInsertUpdate',

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
                    FloatPanel_AyohaRewardVoucherList_SettingHide();
                    //FloatPanel_MerchantvoucherLoyaltyHide();
                    FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                  //  var dc="DC-"+globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card voucher",0,globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode);



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

function FloatPanel_AyohaRewardVoucherList_Setting_voucherCampaignInsertUpdate_Edit(){


    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value)
    {

    }
    else{
        swalFireFail("Not valid voucher value percent!");
        return;
    }

    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid voucher campaign name !");
        return;
    }
   

    if(globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=="Yes"){
        if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value){
            globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate=document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value;
        }else{
            swalFireFail("End Date voucher campaign is requred !");
            return;
        }

    }else{
        
        globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate="1983-02-19";
    }

    if(document.getElementById("inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("voucher campaign image is required!");
        return;
    }


    if(document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Not Valid term and condition !");
        return; 
    }
   

   
    //document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value=data.results[0].voucherTermAndCondition;
   // document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherEndDateSetting").value=data.results[0].voucherEndDate;
    //globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate=data.results[0].isRequirevoucherEndDate;
    //globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus=data.results[0].RowStatus;
 







    LoadingPanelShow(getLoadingIcon(), 'Saving....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID:":globalFloatPanel_AyohaRewardVoucherList_Setting_ID,
            "voucherCode":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherCode,
            "voucherName":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting_name").value,
            "voucherImgPath":globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage,
            "voucherImgName":document.getElementById('inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').value,
            "voucherAmount":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_voucherSetting").value,
            "voucherTermAndCondition":document.getElementById("input-FloatPanel_AyohaRewardVoucherList_Setting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_AyohaRewardVoucherList_Setting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "voucherType":"AyohaMerchantVoucher",
          //  "MembershipCardCode":globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode,
           "MembershipCardCode":"USU",
            "voucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_voucherEndDate,
            "voucherNote":"NA",
            "isRequirevoucherEndDate":globalFloatPanel_AyohaRewardVoucherList_Setting_isRequirevoucherEndDate
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher/AyohaRewardVoucherInsertUpdate',

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
                    FloatPanel_AyohaRewardVoucherList_SettingHide();
                   // FloatPanel_MerchantvoucherLoyaltyHide();
                    FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();
                  //  var dc="DC-"+globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card voucher",0,globalFloatPanel_AyohaRewardVoucherList_Setting_MembershipCardCode);



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
var globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage="ExistingImage";
function FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').files[0].name;

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
                    globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_AyohaRewardVoucherList_Setting_UploadedImage').value = fileName;


                    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_Setting_BackgroundImgCard').setHtml('<div ><img src="' + globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage + '"  style="width:110%;height:150px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                globalFloatPanel_AyohaRewardVoucherList_Setting_UploadedImage="ExistingImage";
            }
        }
    }
}