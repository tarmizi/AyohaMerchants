
Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardEntitled', {

});

var _FloatPanel_AyohaStore_MembershipCardEntitled;


var isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';






function FloatPanel_AyohaStore_MembershipCardEntitled() {

    _FloatPanel_AyohaStore_MembershipCardEntitled =
    Ext.create('Ext.Panel', {
        zIndex: 320,
        xtype: 'container',
        //height: 465,
        height: 400,
        width: 400,
        id: 'FloatPanel_AyohaStore_MembershipCardEntitledID',
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
           // direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'border-bottom:1px solid;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaStore_MembershipCardEntitled.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_MembershipCardEntitled.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';
                        }
                        RemovePages(_FloatPanel_AyohaStore_MembershipCardEntitled, "isFloatPanel_AyohaStore_MembershipCardEntitledOpen");
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: transparent;',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


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

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaStore_MembershipCardEntitledHeader',
                                style:GetHeaderStyle(),
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
                                            id: 'htmlFloatPanel_AyohaStore_MembershipCardEntitled_TitleHeaderTxt',
                                            html: '<font size=3 color=black><b>Select Entitled Membership Card</b></font>'
                                        },

                                                     

                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                      {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaStore_MembershipCardEntitledBack',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            // FloatPanel_AyohaStore_MembershipCardEntitledHide();
                                                            // FloatPanel_AyohaStore_MembershipCardEntitled_AddCardHide();
                                                            isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';
                                                            _FloatPanel_AyohaStore_MembershipCardEntitled.hide(Ext.fx.Animation({
                                                                type: 'popOut',
                                                               // direction: 'left',
                                                              //  easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            RemovePages(_FloatPanel_AyohaStore_MembershipCardEntitled, "isFloatPanel_AyohaStore_MembershipCardEntitledOpen");
                                                            //  FloatPanel_AyohaStore_MembershipCardEntitled_AddCardHide();

                                                        }
                                                    },


                                                            // {
                                                            //     xtype: 'button',
                                                            //     id: 'btnFloatPanel_AyohaStore_MembershipCardEntitled_CardIcon',
                                                            //     height: 30,
                                                            //     width: 35,
                                                            //     // iconCls: 'list',
                                                            //     html: '<div ><img src="resources/icons/MembershipCardDetail.png" width="25" height="20" alt="Company Name"></div>',
                                                            //     ui: 'plain',
                                                            //     handler: function () {

                                                            //         isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';

                                                            //         _FloatPanel_AyohaStore_MembershipCardEntitled.hide(Ext.fx.Animation({
                                                            //             type: 'slideOut',
                                                            //             direction: 'right',
                                                            //             easing: 'cubic-bezier(.7,0,.7,1)',
                                                            //             duration: 250

                                                            //         }));
                                                            //         RemovePages(_FloatPanel_AyohaStore_MembershipCardEntitled, "isFloatPanel_AyohaStore_MembershipCardEntitledOpen");
                                                            //         //FloatPanel_AyohaStore_MembershipCardEntitled_AddCardHide();
                                                            //     }
                                                            // },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipCardEntitledStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaStore_MembershipCardEntitledCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaStore_MembershipCardEntitled').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [




                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: '99%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  style: 'background-color:#f7f7f7',

                                                  items: [

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          //  height: '100%',
                                                          //  store: 'MembershipsLoadBySubscriberAccNoStore',
                                                          store: _DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore,
                                                          id: 'FloatPanel_AyohaStore_MembershipCardEntitledListID',
                                                          mode: 'SINGLE',
                                                          //grouped: true,
                                                          disableSelection: true,

                                                          //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                          //'{ModifiedMembershipApprovalStatus}' +
                                                          //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;"><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3" OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})"  style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td OnClick="FloatPanel_AyohaStore_MembershipCardEntitledOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                          //                             '</div>' +
                                                          // '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div class="blink_me" style="width:100%;text-align:right;margin:-15px 0px 0px -30px">Merchant Point(MP)</div></div>' +
                                                          // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div class="blink_me" style="width:100%;text-align:right;margin:-26px 0px 0px -32px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{MerchantPoint}</div></div>' +
                                                          // '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Points Rate</div>' +
                                                          // '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><button OnClick="FloatPanel_AyohaStore_MembershipCardEntitled_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Use this Card</button></div></div>',

                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                    //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                                      '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" OnClick="FloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ')"><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                  '</div>' ,
                                                                                  // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                     /// '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                                                      //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">{MembersCount}</div></div>' +
                                                     //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                                                     /// '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Point Rate</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                                                    //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                                      //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                                        /////'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">RM{MembershipCardFee}</div></div>',
                                                          // '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><button OnClick="FloatPanel_AyohaStore_MembershipCardEntitled_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Use this Card</button></div></div>',

                                                          height: '100%',
                                                          width: '100%',
                                                      },
                                                  ]
                                              },
                                              //{
                                              //    xtype: 'container',
                                              //    width: '100%',
                                              //    height: '17%',
                                              //    //hidden: true,
                                              //    style: 'background-color:white',
                                              //    // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                              //    layout: {
                                              //        type: 'vbox',
                                              //        pack: 'center',
                                              //        align: 'center'

                                              //    },
                                              //    //height: 50,
                                              //    // margin:'10 0 0 0',
                                              //    items: [

                                              //            //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                              //            //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                              //            //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                              //            //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                              //            //    '</div></div></div>'
                                              //            //{
                                              //            //    html: '<img src="resources/icons/MembershipCardDetail.png" width="55" height="55" alt="Company Name">',
                                              //            //    width: 55,
                                              //            //    height: 55
                                              //            //},

                                              //            {

                                              //                width: '100%',
                                              //                //  xtype: 'label',
                                              //                // html: 'We detect your have two membership card, please select the preference membershipcard to used in this merchant store.'
                                              //                html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;">Select card to view their point privillage rate.<br><br><b>This is the view on your membeship card subscriber,your member need to choose which card to be used when buy thing in your Ayoha Store.</b></div>'
                                              //            },

                                              //            //{

                                              //            //    width: '50%',
                                              //            //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                              //            //},
                                              //            //     //{
                                              //                 //    margin: '-8 0 0 0',

                                              //                 //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                              //                 //},
                                              //                 // {
                                              //                 //     margin: '-7 0 0 0',

                                              //                 //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                              //                 // },


                                              //    ]
                                              //},



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipCardEntitledTitleOutter',
                                width: '100%',
                                docked: 'bottom',
                                hidden: true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                                // style: "background-color: #EAEEF3;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaStore_MembershipCardEntitledListSearch',
                                          // hidden: true,
                                          //  badgeText: '1',
                                          margin: '2 0 0 -5',
                                          height: 40,
                                          width: 40,
                                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              // LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },



                                     {
                                         id: 'FloatPanel_AyohaStore_MembershipCardEntitled_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_AyohaStore_MembershipCardEntitled_SearchTxt" placeHolder="Search Card" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_AyohaStore_MembershipCardEntitled_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaStore_MembershipCardEntitledFilter',
                                         hidden: true,
                                         //  badgeText: '1',
                                         margin: '2 0 0 15',
                                         height: 25,
                                         width: 35,
                                         html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             // NotificationsPanelShow();

                                             // LoyaltyCardRedeemListShow();


                                             //  LoyaltyCardRedeemListShow();
                                         }
                                     },





                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaStore_MembershipCardEntitled',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_AyohaStore_MembershipCardEntitled;



}








function FloatPanel_AyohaStore_MembershipCardEntitledShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_MembershipCardEntitled);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_MembershipCardEntitled());
    this.overlay.show();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages(_FloatPanel_AyohaStore_MembershipCardEntitled, "isFloatPanel_AyohaStore_MembershipCardEntitledOpen");
    isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'Y';
    FloatPanel_AyohaStore_MembershipCardEntitled_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore();
    // FloatPanel_AyohaStore_MembershipCardEntitledAdjustHeight();
}





function FloatPanel_AyohaStore_MembershipCardEntitledHide() {
    // FloatPanel_AyohaStore_MembershipCardEntitled_AddCardHide();
    _FloatPanel_AyohaStore_MembershipCardEntitled.hide(); isFloatPanel_AyohaStore_MembershipCardEntitledOpen = 'N';
    RemovePages(_FloatPanel_AyohaStore_MembershipCardEntitled, "isFloatPanel_AyohaStore_MembershipCardEntitledOpen");
}







function FloatPanel_AyohaStore_MembershipCardEntitledAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardEntitledID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaStore_MembershipCardEntitledID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardEntitledListID').setHeight(newHeights);


}


function FloatPanel_AyohaStore_MembershipCardEntitled_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore() {


    //console.log(GetCurrAyohaUserAccountNo());

    //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
    //});
    //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();



    _DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoAMerchantUsed');
    _DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
        //_DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

        //alert(_DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore.getCount());

        LoadingPanelHide();
        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}









var globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode;
function FloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled(MembershipCardCode,MembershipCardName) {

    var val = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard').value;
  
    if (val) {
       
        document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard').value += "," + MembershipCardName;
        globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode += "," + MembershipCardCode;
    } else {
        document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard').value = MembershipCardName;
        globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode =MembershipCardCode;
    }

  
    FloatPanel_AyohaStore_MembershipCardEntitledHide();
    
}
