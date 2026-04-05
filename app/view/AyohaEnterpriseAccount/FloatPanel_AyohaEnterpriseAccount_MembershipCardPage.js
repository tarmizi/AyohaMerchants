Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPage', {

});
    
    
    
    var is_FloatPanel_AyohaEnterpriseAccount_MembershipCardPageOpen = "N";
    
    
    var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage;
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage() {
    
        _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage = Ext.create('Ext.Container',
    
    
            {
                id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPageID',  
                zIndex: 55,
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
                // modal: true,
                //   hideOnMaskTap: true,
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
                // scrollable: {
                //     direction: 'vertical',
                //     directionLock: true,
                //     indicators:false,
                // },
                //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                style:GetbackgroundColor(),
                // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
              
                items: {
                    ////zIndex: 40,
                    xtype: 'container',
                    id: 'ContainerFloatPanel_AyohaEnterpriseAccount_MembershipCardPage',
                    // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                    name: 'clickableContainerFloatPanel_AyohaEnterpriseAccount_MembershipCardPage',
                    style: ' background-color:transparent;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    width: '100%',
                    height: '100%',
                    
                    //  margin:'-10 0 0 -7',
                    items: [
    
    
                       {
    
                           xtype: 'container',
                           width: '100%',
                           docked: 'top',
                           height:60,
                           // width: 40,
    
                           //  title: '<font size="3" color="white">Live Tracking Map</font>',
                           //hidden: true,
    
                           id: 'containeFloatPanel_AyohaEnterpriseAccount_MembershipCardPageHeader',
                           style:GetHeaderStyle(),
                           //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                           xtype: 'panel',
                                           width: 20
                                       },
                                       {
                                        margin: '0 15 0 0',
                                        id: 'htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_TitleHeaderTxt',
                                        html: '<font size=4 color=black><b>Membership Card Page</b></font>'
                                    },
                                                
    
                                                 {
                                                     xtype: 'spacer',
    
                                                 },
    
    
                                                
                                                 {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPageBack',
                                                    height: 30,
                                                    width: 35,
                                                    margin: '5 0 0 10',
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        // FloatPanel_AyohaReward_TopTenRankingHide();
                                                        // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                        is_FloatPanel_AyohaEnterpriseAccount_MembershipCardPageOpen = 'N';
                                                        _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            //direction: 'left',
                                                            //easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250
    
                                                        }));
                                                      //  RemovePages("FloatPanel_AyohaEnterpriseAccount_MembershipCardPageHide()");
                                                       // FloatPanel_AyohaStore_LikeDislikeStore_Save();
                                                        //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
    
                                                    }
                                                },
                                                 {
                                                     xtype: 'panel',
                                                     width: 20
                                                 },
    
    
    
    
                                  ]
    
                       },
   
    
    {
        xtype: 'container',
        //layout: {
        //    type: 'fit',

        //},

        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'center'

        },
        style: 'background-color: transparent;',
        width: '100%',
        height: '100%',
       
        items: [



{
    xtype: 'container',
    style: 'background-color: transparent;',
    width: '37%',
    height: '100%',
    
   
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            margin: '10 0 0 0',
            width: '100%',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
                {
                    xtype: 'panel',
                    width:5
                },
                {
                    margin: '10 0 0 0',

                    html: '<font size=3 color=black><b>Membership Card Campaigns</b></font>',

                },
                {
                    xtype: 'spacer'
                },
        
{
    xtype: 'button',
    // hidden: true,
    //id: 'txtFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    margin: '0 -27 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Setting</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_MembershipCardManagementShow();

    }
}, {
    xtype: 'button',
    //id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    // hidden:true,
    margin: '0 -5 -12 0',
    height: 35,
    width: 35,
    html: '<img src="resources/icons/settingPurple.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        FloatPanel_MembershipCardManagementShow();
    }
},
{
    xtype: 'panel',
    width:10
}
            ]
        },


        {
            xtype: 'list',
           // hidden: true,
            //flex:1,
            height: 600,
            store: 'MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore',
            id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCampaingListID',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',




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
          //  itemTpl: '<div class="myContent" style="margin:15px 0px 0px -8px;width:105%;">' +
          ////  itemTpl: '<div class="myContent">' +
          //               '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"></div><br>Start Date:{CampaignStartDate}<br>End Date:{CampaignEndDate}</div></div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
          //                '</div>',


            itemTpl: '<div class="myContent">' +
        //  itemTpl: '<div class="myContent">' +
                     //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px">Start Date:{CampaignStartDate}</div><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"><br>End Date:{CampaignEndDate}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
                     '<div style="width:100%;text-align:right;margin:-5px 0px 0px 20px;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/transparentbox.png" style="width: 18px; height: 18px; margin:-3px 0px 0px 15px;" /></button></div><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;"><font size=3px><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-28px 0px 0px -2px;"><font size=2px><b>({CampaignType})</b></font></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;font-size:12px">Created Date:{CreatedDate}</div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;font-size:12px">Created By:{CreatedBy}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px 10px;"><button OnClick="FloatPanel_MembershipCardManagment_EditCard_FloatPanel_AyohaCardManagement_PreviewCardShow({ID})" class="button3viewloyaltycard">View</button></div>' +

                        '</div>',

            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },





        // {
        //     xtype: 'list',
        //     //flex:1,
        //     margin:'0 0 0 0',
        //     height: '98%',
        //     store: _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore,
        //     //id: 'FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImageList',
        //    // id: 'FloatPanel_AyohaStoreMerchant_AddEditItemBorderBg',
        //     mode: 'SINGLE',
        //     //  grouped: true,
        //     disableSelection: true,
        //     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
        //     scrollable: {
        //         direction: 'vertical',
        //         indicators: {
        //             y: {
        //                 autoHide: true
        //             },
        //             x: {
        //                 autoHide: true
        //             }
        //         }
        //     },
        //     itemTpl: '<div OnClick="FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Edit({ID},' + "'" + '{CoverMediaName}' + "'" + ',' + "'" + '{CoverMediaUrl}' + "'" + ',' + "'" + '{CoverMediaType}' + "'" + ',' + "'" + '{CoverMediaSequence}' + "'" + ')" style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Image Sequence No:<u><b>{CoverMediaSequence}</b></u></font></div>' +

        //                             '<div OnClick="FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Edit({ID},' + "'" + '{CoverMediaName}' + "'" + ',' + "'" + '{CoverMediaUrl}' + "'" + ',' + "'" + '{CoverMediaType}' + "'" + ',' + "'" + '{CoverMediaSequence}' + "'" + ')"  style="margin:-58px 0px 0px 0px;" ><img src="{CoverMediaUrl}" width="70" height="70" alt="Company Name"></div>' +

        //                             // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
        //                      '</div>',
        //     width: '98%',
        //     listeners: {
        //         itemsingletap: function (list, idx, target, records, evt) {





        //         },
        //         deselect: function (list, records) {

        //         }
        //     },

        // },
    ]
},
{
    xtype: 'container',
    style: 'background-color: grey;',
    width: 1,
    height: '90%',
    
   
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
},
{
    xtype:'spacer',
    width:20
    },

    {
        xtype: 'container',
        // width: '100%',
        margin:'30 0 0 0',
         id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Master',
         width: '30%',
         height: '100%',
         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
        style: 'background-color:transparent',
       // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;',
         layout: {
             type: 'vbox',
             pack: 'start',
             align: 'center'
     
         },
        //  scrollable: {
        //     // direction: 'vertical',
        //      directionLock: true,
        //      indicators: false
        //  },
         items:[
            {

                xtype: 'container',
                width: '100%',
                height: 40,
                margin: '-5 0 0 0',
                docked: 'top',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
            
                },
                items:[
                    {
                      
            
                        html: '<font size=3 color=black><b>Membership Card</b></font>',
            
                    },
                ]
            },
            {
                
                    xtype: 'list',
                    margin:'0 0 0 0',
                    //flex:1,
                    height: '96%',
                   // hidden:true,
                    store: 'MembershipCardLoadByEnterpriseAccNoMerchantVersionStore',
                    id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPageListID',
                    mode: 'SINGLE',
                    //grouped: true,
                    disableSelection: true,
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
                    //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                    //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                    //   '</div>' +
                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                    itemTpl: '<div class="dropdown" style="float:right;"><button class="dropbtn">...</button><div class="dropdown-content"> <div onClick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(' + "'" + '{MembershipCardCode}' + "'" + ')">View Campaing</div><div  OnClick="FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '123' + "'" + ', {ID},' + "'" + 'APPROVED' + "'" + ');">View Membership Card</div> </div></div><br><div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                  //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                    '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                '</div>' +
                                                // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                    '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                    '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">{MembersCount}</div></div>' +
                   //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                    '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                  //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                    //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                      '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',
                     //'<br><div style="margin:-124px 0px 0px 10px;width:100%;text-align:right;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px;color:blue"></div>',

                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',







                    width: '85%',
                    // listeners: {
                    //     itemsingletap: function (list, idx, target, records, evt) {

                    //         var ID = records.get('ID');

                    //         FloatPanel_MembershipCardManagement_EditCardShow_Edit(ID);

                    //     },
                    //     deselect: function (list, records) {

                    //     }
                    // },

                
            }
          
         ]
    },

// {
//     xtype:'spacer',
//     width:10
//     },
// {
//     xtype: 'container',
//     style: 'background-color: grey;',
//     width: 0.5,
//     height: '90%',
    
   
//     layout: {
//         type: 'vbox',
//         pack: 'start',
//         align: 'center'

//     },
// },

{
    xtype: 'container',
    style: 'background-color: transparent;',
  //  width: '38.5%',
    width: '31.5%',
    height: '100%',
    
   
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            margin: '10 0 0 0',
            width: '100%',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
                {
                    xtype: 'panel',
                    width:30
                },
                {
                    margin: '10 0 0 0',

                    html: '<font size=3 color=black><b>Membership Card QrCode</b></font>',

                },
                {
                    xtype: 'spacer'
                },
        
{
    xtype: 'button',
    hidden: true,
    //id: 'txtFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Upload Media</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Add();

    }
},
{
    xtype: 'button',
    //id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    // hidden:true,
    margin: '0 -5 -12 0',
    height: 35,
    width: 35,
    html: '<img src="resources/icons/printer.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintQrCode();
        FloatPanel_AyohaEnterpriseAccount_Enterprise_MembershipCard_Page_PrintActivityLog("MembershipCardPage","2","IconPrinter");
    }
},
{
    xtype: 'button',
    //id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    // hidden:true,
    margin: '0 -5 -12 0',
    height: 35,
    width: 35,
    html: '<img class="blink_me" src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
      //  FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintQrCode();
      FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintShow();
    //  swalFireInfoMerchantButtonLink("Print this Qr Code and Placed it on  most easy place to see in your premise", "WhatsApp");
    }
},

{
    xtype: 'panel',
    width:10
}
            ]
        },
    // {
    //     margin: '15 0 0 0',

    //     html: '<font margin:0px 0px -10px 0px; size=3 color=black><b>Ayoha Merchant Page QR Code</b></font><button onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintQrCode()" class="buttonsHtmlBgTransparent"><img src="resources/icons/printer.png" style="width: 25px; height: 25px; margin:0px 0px 0px 80px;" /></button>',

    // },

        {
            xtype: 'container',
            margin: '10 0 0 0',
            style: 'background-color: transparent;',
            width: '90%',
            height: '90%',
            style: 'background-image: url("resources/icons/ayohaQRcodebg.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    
           
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[

                {
                    margin: '110 0 0 0',
                    id:'htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Logo_CompanyName_Description',
                    html:'<table style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="85" height="76"></td><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=2.5px><b>Monster Chicken Sdn Bhd</b></font><br>Ayam Goreng Terpadu!</td></tr><tr></tr></thead></table>',
                
                },
                {

                    // hidden: true,
                     margin: '-25 40 0 0',
                     //  margin: '-100 0 0 20',
                     width: 150,
                     height: 150,
                     // height: '100%',
    
                     id: 'htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_QrCode',
                     html: '<div id="MembershipCardPage_QrCodeImg"  style="width: 100%; height: 100%; border:1px none white;" />',
                 },
                // {


                //     //htmlFloatPanel_AyohaCardManagement_StampQrCode
                // }
                // {

            
                //     xtype: 'container',
                //     width: '100%',
                //     height:'100%',
                //     style: 'background-image: url("resources/icons/ayohaQRcodebg.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    
                //         }
            ]
        },
      
    //     {
    //         width: '90%',
    //        // height: 400,
    //        // html:'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width:100%" class="tg"><colgroup><col style="width: 35.2px"><col style="width: 35.2px"><col style="width: 35.2px"><col style="width: 82.2px"><col style="width: 382.2px"><col style="width: 57.2px"><col style="width: 35.2px"><col style="width: 35.2px"><col style="width: 35.2px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="6"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="61" height="52"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">WEBEVO SOLUTION SDN<br>Penyedia web terpadu!!</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead><tbody><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr></tbody></table>'
    //     //html:'<table style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="61" height="52"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">WEBEVO SOLUTION SDN<br>Penyedia web terpadu!!</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td></tr></tbody></table>',
    //   // html:'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 522px;height:400px" class="tg"><colgroup><col style="width: 82.2px"><col style="width: 382.2px"><col style="width: 57.2px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="61" height="52"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">WEBEVO SOLUTION SDN<br>Penyedia web terpadu!!</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td></tr></tbody></table>',
    //  html:'<table style="border-collapse:collapse;border-spacing:0;"><colgroup><col style="width: 82.2px"><col style="width: 382.2px"><col style="width: 57.2px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="61" height="52"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">WEBEVO SOLUTION SDN<br>Penyedia web terpadu!!</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td></tr></tbody></table>',
    
    // }
    ]
},

// {
// xtype:'spacer',
// height:'100%',
// width:100
// },


        ]
    },
                    
                              
                          
    
    
    
    
                           
    
    
                           
    
    
    
                    ]
    
                },
    
    
    
    
    
    
            });
    
        return _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage;
    }
    
    
    
    var FloatPanel_MerchantPageDetail;
    var globalFloatPanelMerchantDetailPage_ID;
    var globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
    var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseFacebook;
    var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWebsite;
    var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseInstagram;
    var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseTikTok;
    var globalFloatPanelMerchantDetailPage_EnterpriseLogo;
    var globalFloatPanelMerchantDetailPage_EnterpriseName;
    var globalFloatPanelMerchantDetailPage_EnterpriseTagLine;
    var globalFloatPanelMerchantDetailPage_EnterpriseCoordinate;
    var globalFloatPanelMerchantDetailPage_BusinessMode;
    var globalFloatPanelMerchantDetailPage_WhatsAppNo;
    
    
    
    
    
    
    
    var OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt_tagging;
    var OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt_tagging;
    var OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt_tagging;
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow() {
        Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage);
        this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_MembershipCardPage());
        this.overlay.show();
        FloatPanel_MerchantPageDetail = Ext.getCmp('CarouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPage');
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_CreateQrCode();


        Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Logo_CompanyName_Description').setHtml('<table style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><img src="'+globalEnterpriseLogo+'" alt="Image" width="85" height="76"></td><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=2.5px><b>'+globalEnterpriseName+'</b></font><br>'+globalEnterpriseTagLine+'</td></tr><tr></tr></thead></table>');
        
     
        if(isFloatPanel_OpenAccountStepOpen == 'Y'){
            FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintShow();
            var task = Ext.create('Ext.util.DelayedTask', function () {
                //alert(globalDashboardMembershipCardCode)
//alert(globalFloatPanel_OpenAccountStepMembershipCardCode)

              FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(globalFloatPanel_OpenAccountStepMembershipCardCode);
        
            });
            task.delay(800);
           
        }else{
            FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(globalDashboardMembershipCardCode);
        
            
        } 
    }
    
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPageHide() {
    
        if (is_FloatPanel_AyohaEnterpriseAccount_MembershipCardPageOpen == 'Y') {
            _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage.hide();
            is_FloatPanel_AyohaEnterpriseAccount_MembershipCardPageOpen = 'N';
          //  RemovePages("FloatPanel_AyohaEnterpriseAccount_MembershipCardPageHide()");
           // FloatPanel_AyohaStore_LikeDislikeStore_Save();
            // swalFireSuccessStampedCardMsg("Stamped Success!!");
        }
    
    }
    
    
    
    

    
    
    
    
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OpenFB() {
        setTimeout(function () { window.open("fb://page/" + globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseFacebook + "", '_system'); return false; }, 25);
    }
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OpenTikTok() {
        window.open(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseTikTok, '_system'); return false;
    }
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OpenInsta() {
        setTimeout(function () { window.open("instagram://user?username=" + globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseInstagram + "", '_system'); return false; }, 25);
    }
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OpenWebsite() {
        window.open(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWebsite, '_system'); return false;
    }
    
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OpenStore(eStoreName, eStoreURL) {
    
       // alert(eStoreName);
        // globalDashboard_AyohaHotMerchant_EnterpriseAccNo
    
        if (eStoreURL != "AyohaStore") {
            window.open(eStoreURL, '_system'); return false;
            return
        } else {
            FloatPanelMerchantDetailPage_AyohaStore();
           // FloatPanel_AyohaHotMerchant_OnlineStoreListHide();
        }
    
    
    }
 
    
 
   












    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails() {
        FloatPanel_AyohaMerchantInfo_BusinessHourShow();
    }
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Staging_MembershipLoyaltyProgram(MembershipSegmentCode, Bilangan, AyohaLoyaltyProgram, LoyaltyProgramCode) {
        var bil = parseInt(Bilangan);
        if (AyohaLoyaltyProgram == "Point Loyalty Card") {
            if (bil == 1) {
                globalFloatPanel_AyohaStore_Cart_StampPointCampaignCode = LoyaltyProgramCode;
                Scan_QRCode_VerifyQRCode_PointCampaign(globalFloatPanel_AyohaStore_Cart_StampPointCampaignCode);
            }
            if (bil > 1) {
    
            }
        }
    
        if (AyohaLoyaltyProgram == "Loyalty Event") {
            if (bil == 1) {
                FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event1();
            }
            if (bil > 1) {
                FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event2();
            }
        }
    
    
    
        if (AyohaLoyaltyProgram == "Loyalty Contest") {
            if (bil == 1) {
                FloatPanel_AyohaStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore_XX();
            }
            if (bil > 1) {
                FloatPanel_AyohaStore_MembershipContestListShow();
            }
        }
    
       
        if (AyohaLoyaltyProgram == "Loyalty Voucher") {
            if (bil == 1) {
                FloatPanel_AyohaRewardVoucherList_AyohaStoreShow();
            }
            if (bil > 1) {
                FloatPanel_AyohaRewardVoucherList_AyohaStoreShow();
            }
        }
    
        if (AyohaLoyaltyProgram == "Stamp Loyalty Card") {
         
            var EnterpriseAccNo = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
           
            var SubscriberAccNo = GetCurrAyohaUserAccountNo();
            // FloatPanel_AyohaeWallet_IconShow();
           
            if (bil == 1) {
                FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(LoyaltyProgramCode, EnterpriseAccNo, SubscriberAccNo);
            }
            if (bil > 1) {
                FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(LoyaltyProgramCode, EnterpriseAccNo, SubscriberAccNo);
            }
            LoadingPanelHide();
        }
    
    }
    
    
    
    function OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt() {
    
        if (OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt_tagging == 'slideUp') {
            OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt_tagging == 'slideDown') {
            OnClickFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipLoyaltyProgram_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown();
            return;
        }
    
    
    }
    
    function OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt() {
    
        if (OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt_tagging == 'slideUp') {
            OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt_tagging == 'slideDown') {
            OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
            return;
        }
    
    }
    
    function OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt() {
        if (OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt_tagging == 'slideUp') {
            OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt_tagging == 'slideDown') {
            OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
    
            return;
        }
    }
    
    
    
    
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_LikeDislikeStore() {
       countLikeDislikeTap++;
       
        var likedislike = Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsIcon').getHtml();
     
    
       if (likedislike == '<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>') {
            countlikes = globalFloatPanel_AyohaStore_CountLike + 1;     
            Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');      
            Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>');
            likedStatus = "Y";
    
            globalFloatPanel_AyohaStore_CountLike = countlikes;
            return;
    
       } if (likedislike == '<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>') {
            countlikes = globalFloatPanel_AyohaStore_CountLike - 1;
            //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + countlikes + '</b></div>');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/unlovepurple.png" width="22" height="22" alt="Company Name"></div>');
    
            Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
            Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>');
    
            likedStatus = "N";
    
            globalFloatPanel_AyohaStore_CountLike = countlikes;
    
        }
    
    
    
    }





    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore(day){

        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getProxy().setExtraParam('WorkingDay', day);
        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/AyohaMerchantPageMediaHeaderloadByEnterpriseAccNo');
        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.load();
        FloatPanel_MerchantPageDetail.removeAll();
    
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var count = parseInt(_DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getCount());

          //  var count = parseInt(_DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getCount());
          // alert(count)
    
            if (count > 0) {
               
                for (i = 0; i < count; i++) {
                  var Stores = _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getAt(i);
                  
                    FloatPanel_MerchantPageDetail.add({ xtype: 'image', src: Stores.get('CoverMediaUrl'), height: '96%', width: '100%', mode: 'image' });
                    //counter++;
                }
            }

















            var Store = _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getAt(0);
            if (count > 0) {
            if(Store.get('CountLike')){
                Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('CountLike') + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
                // globalFloatPanel_AyohaStore_CountLike = parseInt(Store.get('CountLike'));
                // globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = parseInt(Store.get('CountMembershipCard')) * 400;
                // Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCard_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Membership Card (' + Store.get('CountMembershipCard') + ')</b></font></div>');
                // Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_OnlineStore_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Online Store (' + Store.get('CountOnlineStore') + ')</b></font></div>');
            
            }
        }
    

            if (globalFloatPanelMerchantDetailPage_BusinessMode == "Online") {
                Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Open 24/7 (Open Now)</div><br><div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
    
            } else {
    
                var today = new Date();
                var time = today.getHours() + "." + today.getMinutes();
                var TutupBuka;
                var isWorkingDay = Store.get('isWorkingDay');
                var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var d = new Date();
                var day = weekday[d.getDay()];
    
                if (isWorkingDay == "Y") {
                    var PremiseOpenTime = Store.get('WorkingHourStart').replace(".", ":") + " " + Store.get('WorkingHourStartAMPM');
                    var PremiseCloseTime = Store.get('WorkingHourEnd').replace(".", ":") + " " + Store.get('WorkingHourEndAMPM');
    
    
                    var OpenModified12Hour = parseFloat(convertTimeFrom12To24(PremiseOpenTime));
                    var ClosedModified12Hour = parseFloat(convertTimeFrom12To24(PremiseCloseTime));
                    var MasaSekarang = parseFloat(time);
    
                    if ((MasaSekarang > OpenModified12Hour) && (MasaSekarang < ClosedModified12Hour)) {
    
                        TutupBuka = "Open Now";
                    } else {
                        TutupBuka = "Closed Now";
                    }
    
    
    
                    Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('WorkingHourStart') + Store.get('WorkingHourStartAMPM') + ' - ' + Store.get('WorkingHourEnd') + Store.get('WorkingHourEndAMPM') + ' (' + TutupBuka + ')</div><br><div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
    
                } else {
    
                    Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + day + ' (Off Day/Holiday)</div><br><div onclick="FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
                }
    
               
            }
    


        });








       
        // Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</i></div>');
        
        // Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_EnterpriseDescription').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">' + EnterpriseDescriptions + '</div>');




        



       
        task.delay(500);
    
    }


var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_ImgBase64;
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_CreateQrCode() {
   

        var val = GetEnterpriseAccNo()+"-MC";
    
        var qrDiv = document.getElementById('MembershipCardPage_QrCodeImg')
        var x = screen.width;
        var y = x - 20;
        qrcode = new QRCode(document.getElementById("MembershipCardPage_QrCodeImg"), {
            width: 200,
            height: 200,
        });
    
        //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));
    
    
        qrcode.clear();
    
        qrcode.makeCode(val);
    
        // var ee= document.getElementById("MembershipCardPage_QrCodeImg").value;
    //   console.log(qrcode)
      // alert(qrcode._oDrawing._elImage.currentSrc);
    
        //<img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392">
    
       //var base64 = document.getElementById("QrCodeImg1").src;
       // var dataURL = document.getElementById('MembershipCardPage_QrCodeImg').toDataURL();
       // var src= document.querySelector('#qrcode img').getAttribute("src");
   // alert(base64)
        // var qr_code_img = document.querySelector(".qr-code img");
        // var qr_code_canvas = document.querySelector("canvas");
        // qr_code_img.getAttribute("src")

        

        globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_ImgBase64 = qrDiv.children[0].toDataURL("image/png");
      //  LoadingPanelHide();
    }




    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintQrCode() {

//var val =document.getElementById("MembershipCardPage_QrCodeImg").value;


        var mywindow = window.open('', 'Print', 'height=400,width="100%",resizable=0');
        // background color  mywindow.document.write('<html><head><title>Cloud-Receipts.Com -' + FlatBillWorkshop + '</title><style type="text/css" media="print">@media print {  body {-webkit-print-color-adjust: exact;}}@page { margin-left: 0px; margin-right: 0px; margin-top: 0px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}</style> </head>');
        // ori  mywindow.document.write('<html><head><title>Cloud-Receipts.Com -' + FlatBillWorkshop + '</title><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}}</style></head>');
      //  mywindow.document.write('<html><head><title>Ayoha-Reward.Com</title><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}body {-webkit-print-color-adjust: exact;}@page { margin-left: -50px; margin-right: 0px; margin-top: -50px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}}</style></head>');

         mywindow.document.write('<html><head><title>Ayoha Reward Membership-</title></head>');





        mywindow.document.write('<body>');
        //   mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><div style="width: 100px; height: 100px; border: 1px none white;" id="qrcodeCanvas"></div><br />Scan QR Code to<br> verify genuine receipt</th></tr>' +
      //  mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; background-color:#37474f !important;color:white; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '<br/>Website:' + FlatBillPremiseWebsite + '<br/>Email:' + FlatBillPremiseEmail + '</th><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><img style="width: 105px; height: 105px; border:1px solid white;background-color:white;" src="' + GetQRCodeImg() + '" alt="" /><br><br>Scan QR Code to<br> verify genuine receipt</th></tr>' +
        mywindow.document.write('<table style="border-collapse:collapse;border-spacing:0;margin:0px 0px 0px 100px"><colgroup><col style="width: 82.2px"><col style="width: 382.2px"><col style="width: 57.2px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="'+globalEnterpriseLogo+'" alt="Image" width="61" height="52"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=6px><b>'+globalEnterpriseName+'</b></font><br>'+globalEnterpriseTagLine+'</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img id="MembershipCardPage_QrCode"  src="'+globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_ImgBase64+'" style="width: 369px; height: 392px; border:1px none white;" /></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td></tr></tbody></table>');
       
       



        mywindow.document.write('</body></html>');
        //mywindow.print();
       // mywindow.close();
       
       mywindow.addEventListener('afterprint', function() {
       
        // Additional actions can be added here
    });

        var task = Ext.create('Ext.util.DelayedTask', function () {
            
            mywindow.print();
           mywindow.close();
           //alert('f')
         //  FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_CreateQrCode_print();
           Ext.Viewport.unmask();


         

        });
        task.delay(500);
    }





var makeQrCode;
    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_CreateQrCode_print() {
   

        var val = GetEnterpriseAccNo();
    
    
        var x = screen.width;
        var y = x - 20;
        qrcode = new QRCode(document.getElementById("MembershipCardPage_QrCode"), {
            width: 369,
            height: 392
        });
    
        //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));
    
    
        qrcode.clear();
    
        qrcode.makeCode(val);
    
    
        //<img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392">
    
    }





    function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore(MembershipCardCode) {

        //  Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        //      MembershipCardCode: MembershipCardCode,
        //      EnterpriseAccNo:  GetEnterpriseAccNo(),
        //  });
        //  Ext.StoreMgr.get('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').load();
         var task = Ext.create('Ext.util.DelayedTask', function () {
             Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').getProxy().setExtraParams({
                 MembershipCardCode: MembershipCardCode,
                 EnterpriseAccNo: GetEnterpriseAccNo(),
             });
             Ext.StoreMgr.get('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').load();
             var myStore = Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore');
             var Count = myStore.getCount();
            
             _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore');
             LoadingPanelHide();
             Ext.Viewport.setMasked(false);
     
         });
         task.delay(800);
     }