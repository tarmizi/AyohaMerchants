Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterprisePage', {

});
    
    
    
    var is_FloatPanel_MerchantDetailPageOpen = "N";
    
    
    var _FloatPanel_MerchantDetailPage;
    
    function FloatPanel_MerchantDetailPage() {
    
        _FloatPanel_MerchantDetailPage = Ext.create('Ext.Container',
    
    
            {
                id: 'FloatPanel_MerchantDetailPageID',
    //             requires: [
    // 'Ext.carousel.Carousel',
    // 'Ext.util.DelayedTask',
    // 'Ext.Video'
    //             ],
                // xtype: 'panel',
                zIndex: 80,
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
                style: ' background-color:white;',
                // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
              
                items: {
                    ////zIndex: 40,
                    xtype: 'container',
                    id: 'ContainerFloatPanel_MerchantDetailPage',
                    // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                    name: 'clickableContainerFloatPanel_MerchantDetailPage',
                    style: GetbackgroundColor(),
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
    
                           id: 'containeFloatPanel_MerchantDetailPageHeader',
                           style:GetHeaderStyle(),
                         //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
                   
                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                        id: 'htmlFloatPanel_MerchantDetailPage_TitleHeaderTxt',
                                        html: '<font size=4 color=black><b>Enterprise Page</b></font>'
                                    },
                                                
    
                                                 {
                                                     xtype: 'spacer',
    
                                                 },
    
    
                                                
                                                 {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_MerchantDetailPageBack',
                                                    height: 30,
                                                    width: 35,
                                                    margin: '5 0 0 10',
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        // FloatPanel_AyohaReward_TopTenRankingHide();
                                                        // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                        is_FloatPanel_MerchantDetailPageOpen = 'N';
                                                        _FloatPanel_MerchantDetailPage.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            //direction: 'left',
                                                            //easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250
    
                                                        }));
                                                      //  RemovePages("FloatPanel_MerchantDetailPageHide()");
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
    // {
    //     xtype: 'container',
    //     //margin: '10 0 0 0',
     
    //     height:50,
    //     width: '100%',
    //     docked: 'bottom',
    //    // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
    //    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
 
    //     layout: {
    //         type: 'hbox',
    //         pack: 'center',
    //         align: 'center'

    //     },
    // },
    
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
    width: '36%',
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

                    html: '<font size=3 color=black><b>Advertisement Media</b></font>',

                },
                {
                    xtype: 'spacer'
                },
        
{
    xtype: 'button',
    // hidden: true,
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
}, {
    xtype: 'button',
    //id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
    //  badgeText: '1',
    // hidden:true,
    margin: '0 -5 -12 0',
    height: 35,
    width: 35,
    html: '<img src="resources/icons/upload01.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Add();
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
            //flex:1,
            margin:'0 0 0 0',
            height: '98%',
            store: _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore,
            //id: 'FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImageList',
           // id: 'FloatPanel_AyohaStoreMerchant_AddEditItemBorderBg',
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
            itemTpl: '<div OnClick="FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Edit({ID},' + "'" + '{CoverMediaName}' + "'" + ',' + "'" + '{CoverMediaUrl}' + "'" + ',' + "'" + '{CoverMediaType}' + "'" + ',' + "'" + '{CoverMediaSequence}' + "'" + ')" style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Image Sequence No:<u><b>{CoverMediaSequence}</b></u></font></div>' +

                                    '<div OnClick="FloatPanel_AyohaEnterpriseAccount_AddEditMediaShow_Edit({ID},' + "'" + '{CoverMediaName}' + "'" + ',' + "'" + '{CoverMediaUrl}' + "'" + ',' + "'" + '{CoverMediaType}' + "'" + ',' + "'" + '{CoverMediaSequence}' + "'" + ')"  style="margin:-58px 0px 0px 0px;" ><img src="{CoverMediaUrl}" width="70" height="70" alt="Company Name"></div>' +

                                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                             '</div>',
            width: '98%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },
    ]
},

{
    xtype:'spacer',
    width:20
    },

    {
        xtype: 'container',
        // width: '100%',
        margin:'0 0 0 0',
         id: 'containerFloatPanel_MerchantDetailPage_Master',
         width: '30%',
         height: '97%',
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
                      
            
                        html: '<font size=3 color=black><b>Enterprise Page (Preview)</b></font>',
            
                    },
                ]
            },
            {
                xtype: 'container',
               // width: '100%',
               margin:'0 0 0 0',
                id: 'containerFloatPanel_MerchantDetailPage_MasterInner',
                width: '100%',
                height: '100%',
                //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
               // style: 'background-color:transparent',
               style: 'background-color:white;border-right:2px solid #CCCCCC;border-left:2px solid #CCCCCC;border-bottom:2px solid #CCCCCC;border-top:2px solid #CCCCCC;border-radius:10px 10px 10px 10px',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
            
                },
                scrollable: {
                   direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },
                items: [
                    // {
            
                    //     xtype: 'container',
                    //     width: '100%',
                    //     height: 40,
                    //     margin: '-5 0 0 0',
                    //     docked: 'top',
                    //     layout: {
                    //         type: 'vbox',
                    //         pack: 'center',
                    //         align: 'center'
                    
                    //     },
                    //     items:[
                    //         {
                              
                    
                    //             html: '<font size=3 color=black><b>Enterprise Page (Preview)</b></font>',
                    
                    //         },
                    //     ]
                    // },
                    
                
                            {
            
                                xtype: 'container',
                                width: '100%',
                                height: 40,
                                zIndex: 100,
                                style: ' background-color:transparent;',
                                id: 'containerFloatPanel_MerchantDetailPage_Header',                 
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left',
                                },
                                hidden:true,
                                items:
                                       [
            
            
            
            
                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                     {
                                                         xtype: 'container',
                                                         //width: '100%',
                                                         // height: 40,
                                                         hidden:true,
                                                         style: 'background-color: rgba(255, 255, 255, 0.5);',
                                                         id: 'containerFloatPanel_MerchantDetailPage_HeaderInner',
                                                        
                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                         // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                         layout: {
                                                             type: 'hbox',
                                                             pack: 'left',
                                                             align: 'left',
                                                         },
                                                         items: [
                                                             {
                                                                 xtype: 'spacer',
                                                                 height: 40,
                                                                 width: 5,
                                                             },
                                                                 {
                                                                     margin: '0 0 5 0',
                                                                     id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseName',
                                                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                                     // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',
            
                                                                     //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                                 },
            
                                               {
                                                   xtype: 'button',
                                                   margin: '6 0 0 0',
                                                   //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                   height: 40,
                                                   width: 40,
                                                   // iconCls: 'list',
                                                   id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLogo',
                                                   html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   handler: function () {
                                                       FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore();
            
                                                   }
                                               },
                                                         ]
                                                     },
                                              
            
                                               {
                                                   xtype: 'panel',
                                                   width: 10
                                               }
            
                                       ]
            
                            },
            
                           {
                               xtype: 'carousel',
                               //hidden:true,
                               id: 'CarouselFloatPanel_MerchantDetailPage',
                               name: 'nameCarouselFloatPanel_MerchantDetailPage',
                               //margin:'-40 0 0 0',
                               margin:'10 0 0 0',
                               width: '95%',
                               height: 330,
                               style: 'background-color:transparent',
                               //height: '100%',
                               indicator: true,
                               requires: [
            'Ext.carousel.Carousel',
            'Ext.util.DelayedTask',
            'Ext.Video'
                               ],
                               listeners: {
                                   activeitemchange: function (container, newCard, oldCard, index) {
            
            
                                   },
            
                               },
            
            
            
                              
                               // items: [
            
            
                               //  ]
                           },
            
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 50,
                               zIndex: 100,
                               margin:'-50 0 0 0',
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '60%',
                                       height: 50,
                                       //zIndex: 100,
                                       margin: '0 0 0 0',
                                       style: 'background-color: transparent;',
                                   },
                                   {
                                       xtype: 'container',
                                       width: '40%',
                                       height: 50,
                                       //zIndex: 100,
                                       margin: '0 0 0 0',
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias_Inner',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'start',
                                           align: 'right',
                                       },
                                       items: [
                                           {
                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:white;margin:-27px 0px 0px 0px;padding:0px 6px;">Visit Us On:</div>'
                                           },
                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height: 50,
                                               //zIndex: 100,
                                               margin: '-30 0 0 0',
                                               style: 'background-color: transparent;',
                                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias_InnerInner',
            
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'right',
                                                   align: 'right',
                                               },
            
            
                                               items: [
            
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_Website',
                                                        hidden:true,
                                                        height: 26,
                                                        margin: '0 0 0 0',
                                                        width: 26,
                                                        // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                        html: '<div onclick="FloatPanel_MerchantDetailPage_OpenWebsite();"><img src="resources/icons/websiteicon02.png" width="26" height="26" alt="Company Name"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 6,
            
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_Insta',
                                                        hidden:true,
                                                        height: 26,
                                                        margin: '0 0 0 0',
                                                        width: 26,
                                                        // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                        html: '<div onclick="FloatPanel_MerchantDetailPage_OpenInsta();" ><img src="resources/icons/instagramlogo.png" width="26" height="26" alt="Company Name"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 6,
            
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_TikTok',
                                                        hidden: true,
                                                        height: 26,
                                                        margin: '0 0 0 0',
                                                        width: 26,
                                                        // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                        html: '<div onclick="FloatPanel_MerchantDetailPage_OpenTikTok();" ><img src="resources/icons/TikToklogo.png" width="26" height="26" alt="Company Name"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 6,
            
                                                    },
            
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_FB',
                                                        hidden:true,
                                                        height: 26,
                                                        margin: '0 0 0 0',
                                                        width: 26,
                                                        // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                        html: '<div onclick="FloatPanel_MerchantDetailPage_OpenFB();" ><img src="resources/icons/facebook.png" width="26" height="26" alt="Company Name"></div>',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 6,
            
                                                     },
                                               ]
                                           }
                                       ]
                                   },
                                   {
                                       xtype: 'container',
                                       width: '10%',
                                       height: 50,
                                       //zIndex: 100,
                                       margin: '0 0 0 0',
                                       style: 'background-color: transparent;',
                                   },
                               ]
                           },
                           {
                               xtype: 'container',
                               width: '95%',
                                height: 90,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '23%',
                                       height: 90,
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               width: '100%',
                                               height: 90,
                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo',
                                               html: '<div ><img src="null" width="100%" height="90" alt="Company Name"></div>',
                                           }
                                       ]
                                   },
                                    {
                                        xtype: 'container',
                                        width: '65%',
                                        height: 90,
                                        style: 'background-color: transparent;',
                                        id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended',
            
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left',
                                        },
                                        items: [
                                            {
                                                margin: '-5 0 0 0',
                                                id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine',                                                              
                                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Monster Chicken</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>Ayam Cheesee Leleh</i></div>',
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                height: 35,
                                                docked:'bottom',
                                                style: 'background-color: transparent;',
                                                id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtendedBotom',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'left',
                                                },
                                                items: [
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseFullAddress',
                                                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 6px;">Lot 153,Aeon Nilai, Bandar Baru Nilai,71800 Nilai,Negeri Sembilan</div>'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
            
            
            
                                     {
                                         xtype: 'container',
                                         width: '12%',
                                         hidden:true,
                                         height: 90,
                                         style: 'background-color: transparent;',
                                         id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction',
            
                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                         // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [
                                             {
                                                 width: '90%',
                                                 height: 50,
                                                 html: '<div onclick="FloatPanelMerchantDetailPage_OpenDirection();"><img src="resources/icons/DirectionPurple.jpg" width="90%" height="50" alt="Company Name"></div>',
                                             },
                                              {
                                                  width: '100%',
                                                  height: 10,
                                                  html: '<div onclick="FloatPanelMerchantDetailPage_OpenDirection();" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;">7.2KM</div>'
                                              },
                                         ]
                                     },
                                      {
                                          xtype: 'container',
                                          width: '12%',
                                          height: 90,
                                          hidden:true,
                                          style: 'background-color: transparent;',
                                          id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore',
                                          name:'namecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore',
            
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  width: '90%',
                                                  height: 50,
                                                  //commented 7/4/2024
                                                 // html: '<div onclick="FloatPanelMerchantDetailPage_AyohaStore()"><img src="resources/icons/onlineStore.jpg" width="80%" height="40" alt="Company Name"></div>',
                                                  html: '<div><img src="resources/icons/onlineStore.jpg" width="80%" height="40" alt="Company Name"></div>',
                                                  margin:'15 0 0 0',
                                              },
                                               {
                                                   width: '100%',
                                                   height: 10,
                                                     //commented 7/4/2024
                                                  // html: '<div onclick="FloatPanelMerchantDetailPage_AyohaStore()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:bold;color:black;margin:-12px 0px 0px -5px;">Online</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:bold;color:black;margin:-26px 0px 0px -5px">Store</div>'
                                                   html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:bold;color:black;margin:-12px 0px 0px -5px;">Online</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:bold;color:black;margin:-26px 0px 0px -5px">Store</div>'
                                               },
                                          ]
                                      }
                               ]
            
                           },
                            {
                                xtype: 'container',
                                width: '95%',
                                margin:'10 0 0 0',
                                height: 1,
                                style: 'background-color: grey;',
                            },
            
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 5,
                               style: 'background-color: transparent;',
                           },
                          
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 70,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseDescription',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'vbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                               
                                   {
                                       width: '100%',
                                       height: 65,
                                       margin: '10 0 0 0',
                                       id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseDescription',
                                       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">Kami menjual ayam cheese yang padu dan maengancam nyawa dan liur anda,kipidap dont gi babp</div>'
                                   }
                               ]
            
                           },
            
                            {
                                xtype: 'container',
                                width: '95%',
                                height: 5,
                                style: 'background-color: transparent;',
                            },
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 35,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHour',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '7%',
                                       height: 26,
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHourIcon',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               width: '100%',
                                               height: 26,
                                               html: '<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" ><img src="resources/icons/History01.png" width="100%" height="26" alt="Company Name"></div>',
                                           }
                                       ]
                                   },
                                    {
                                        xtype: 'container',
                                        width: '92%',
                                        height: 35,
                                        style: 'background-color: transparent;',
                                        id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails',
            
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                            {
                                                width: '100%',
                                                height: 35,
                                                margin: '-3 0 0 0',
                                                id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails',                                                             
                                                html: '<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">10.00AM - 10.00PM (Closed Now)</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>',
                                            }
                                        ]
                                    }
                               ]
            
                           },
            
            
                             {
                                 xtype: 'container',
                                 width: '95%',
                                 height: 7,
                                 style: 'background-color: transparent;',
                             },
            
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 35,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseBusinessContactNo',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '7%',
                                       height: 26,
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseContactIcon',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               width: '100%',
                                               height: 26,
                                               html: '<div ><img src="resources/icons/BusinessContactIcon.png" width="100%" height="26" alt="Company Name"></div>',
                                           }
                                       ]
                                   },
                                    {
                                        xtype: 'container',
                                        width: '92%',
                                        height: 35,
                                        style: 'background-color: transparent;',
                                        id: 'containerFloatPanel_MerchantDetailPage_EnterpriseContactDetails',
            
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                            {
                                                width: '100%',
                                                height: 35,
                                                margin: '-3 0 0 0',
                                                id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseContactDetails',                                                              
                                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">03-663998765</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Contact No</div>',
                                            }
                                        ]
                                    }
                               ]
            
                           },
            
                             {
                                 xtype: 'container',
                                 width: '95%',
                                 height: 7,
                                 style: 'background-color: transparent;',
                             },
            
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 35,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppBusinessContactNo',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '7%',
                                       height: 26,
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppContactIcon',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               width: '100%',
                                               height: 26,
                                               html: '<div ><img src="resources/icons/WhatsApp01.png" width="100%" height="26" alt="Company Name"></div>',
                                           }
                                       ]
                                   },
                                    {
                                        xtype: 'container',
                                        width: '92%',
                                        height: 35,
                                        style: 'background-color: transparent;',
                                        id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails',
            
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                            {
                                                width: '100%',
                                                height: 35,
                                                margin: '-3 0 0 0',
                                                id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails',                                                              
                                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">013-3376958</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">WhatsApp Contact No</div>',
                                            }
                                        ]
                                    }
                               ]
            
                           },
            
            
            
            
            
            
                                   {
                                       xtype: 'container',
                                       width: '95%',
                                       height: 10,
                                       style: 'background-color: transparent;',
                                   },
            
                           {
                               xtype: 'container',
                               width: '95%',
                               height: 35,
                               style: 'background-color: transparent;',
                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUs',
            
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'left',
                                   align: 'left',
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       width: '7%',
                                       height: 26,
                                       style: 'background-color: transparent;',
                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon',
            
                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               width: '100%',
                                               height: 26,
                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon',
                                               html: '<div><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>',
                                           }
                                       ]
                                   },
                                    {
                                        xtype: 'container',
                                        width: '92%',
                                        height: 35,
                                        style: 'background-color: transparent;',
                                        id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails',
            
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                            {
                                                width: '33%',
                                                height: 35,
                                                margin: '-3 0 0 0',
                                                id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails',                                                              
                                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">2</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>',
                                            },
                                            {
            
                                                xtype: 'container',
                                                width: '30%',
                                                //margin:'0 0 0 0',
                                                height: 35,
                                                style: 'background-color: transparent;',
                                                id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',
            
                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'left',
                                                    align: 'left',
                                                },
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                       // flex: 1,
                                                        margin: '-19 0 0 0',
                                                        height: 50,
                                                        id: 'containerFloatPanel_MerchantDetailPage_ReviewAndRate',
                                                       // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
                                                        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                        style: "background-color: transparent;",
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'
            
                                                        },
                                                        items: [
                                                            {
                                                                margin: '0 0 0 0',
                                                                id: 'htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount',
                                                                html: '<div style="color:black;text-align: center;font-size:20px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
            
                                                            },
            
                                                            {
                                                                xtype: 'container',
                                                                width: '100%',
                                                                margin: '-12 0 0 0',
                                                                height: 9,
                                                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                style: "background-color: transparent;",
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center'
            
                                                                },
                                                                items: [
            
                                                                    {
                                                                        id: 'htmlFloatPanel_MerchantDetailPage_Star1',
                                                                        height: 9,
                                                                        width: 9,
                                                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                                                    },
            {
            id: 'htmlFloatPanel_MerchantDetailPage_Star2',
            height: 9,
            width: 9,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            },
            {
            id: 'htmlFloatPanel_MerchantDetailPage_Star3',
            height: 9,
            width: 9,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            },
            {
            id: 'htmlFloatPanel_MerchantDetailPage_Star4',
            height: 9,
            width: 9,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            },
            {
              id: 'htmlFloatPanel_MerchantDetailPage_Star5',
              height: 9,
              width: 9,
              html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            
            },
                                                                ]
                                                            },
            
                                                            {
                                                                xtype: 'container',
                                                                width: '100%',
                                                                margin: '8 0 0 0',
                                                                height: 9,
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center'
                                                                },
                                                                items: [
                                                                    {
                                                                        id: 'htmlFloatPanel_MerchantDetailPage_ReviewByCount',
                                                                        html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
                                                                    },
                                                                ]
                                                            },
                                                             //{
                                                             //    margin: '0 0 0 0',
                                                             //    height: 15,
                                                             //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
                                                             //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                             //}
                                                        ]
                                                    },
                                                ]
                                            },
            
            
            
            
                                            {
                                                xtype: 'container',
                                                width: '37%',
                                                hidden:true,
                                                height: 35,
                                                style: 'background-color: transparent;',
                                                id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedia',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'right',
                                                    align: 'right'
            
                                                },
                                                items: [
                                                   
                                                ]
                                            }
            
                                        ]
                                    },
                               ]
            
                           },
            
            
                             {
                                 xtype: 'container',
                                 width: '95%',
                                 height: 20,
                                 style: 'background-color: transparent;',
                             },
            
                             {
                                 xtype: 'container',
                                 width: '95%',
                                 height: 32,
                                 // width: 40,
            
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
            
                                 id: 'containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt',
                                 name: 'namecontainerFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt_X',
                                // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
                                 
                                style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                 //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center',
                                 },
                                 items: [
                                     {
                                         xtype: 'spacer',
                                         width:15
                                     },
                                     {
                                         id: 'htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt',
                                         html: '<font size=2 color=white><b>Online Store</b></font>',
                                         width:'82%'
                                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Online Store</div>',
                                     },
                                     {
                                         xtype:'spacer'
                                     },
                                      { xtype: 'button',
                                          id: 'btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',
                                          height: 30,
                                          width: 60,
                                          hidden:true,
                                        //  html: '<font size=2 color=white><b>Hide</b></font>',
                                          html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                          ui: 'plain',
                                          handler: function () {
                                              OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideDown';
                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(false);
                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(true);
                                              FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
                                             
                                          },
                                      },
                                       {
                                           xtype: 'button',
                                           id: 'btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown',
                                           margin: '0 0 0 0',
                                           height: 30,
                                           width: 60,
                                           html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                           ui: 'plain',
                                           handler: function () {
                                               OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(true);
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(false);
                                               FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                           },
                                       },
                                      {
                                          xtype: 'spacer',
                                          width: 15
                                      },
                                 ]
                             },
            
                                  {
                                      xtype: 'container',
                                      width: '95%',
                                      height: 0,
                                      // width: 40,
            
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,
                                    //  display: none,
                                      id: 'containeFloatPanel_MerchantDetailPage_OnlineStore_Inner',
            
                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                      style: 'background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                          {
                                              xtype: 'list',
                                              width: '100%',
                                              height: 0,
                                              // height: '98%',
                                              // flex: 1,
                                             store: _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore,
                                             // store:_DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore,
                                              id: 'FloatPanel_MerchantDetailPage_OnlineStoreList',
                                              mode: 'SINGLE',
                                              style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                              disableSelection: true,
                                              scrollable:false,
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
            
            //ori commented 7/4/2024 
                                            //   itemTpl: '<div onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" class="myContent" style="background-color:white;width:100%">' +
            
            
                                            //     '<table onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" src="{OnlineStoreIconPath}" style="border:1px solid black; width:55px;height:55px;border-radius:50%;" /></td><td onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{OnlineStoreName}</b><br>{OnlineStoreURL}</td></tr></table>' +
                                            //   '<br>' +
                                            //       '<div onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',
            
                                            
                                                  itemTpl: '<div  class="myContent" style="background-color:white;width:100%">' +
            
            
                                                  '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr ><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img  src="{OnlineStoreIconPath}" style="border:1px solid black; width:55px;height:55px;border-radius:50%;" /></td><td  style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{OnlineStoreName}</b><br>{OnlineStoreURL}</td></tr></table>' +
                                                '<br>' +
                                                    '<div  style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',
              
                                            
                                            
                                            
                                            
                                                  emptyText: '<div class="myContent">No Online Store!</div>',
                                            
            
                                          },
                                      ]
                                  },
            
            
            
            
            
            
            
                                       {
                                           xtype: 'container',
                                           width: '95%',
                                           height: 10,
                                           style: 'background-color: transparent;',
                                       },
            
                            {
                                xtype: 'container',
                                width: '95%',
                                height: 32,
                                // width: 40,
            
                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,
            
                                id: 'containeFloatPanel_MerchantDetailPage_MembershipCard_HeaderTxt',
                                name: 'namecontainerFloatPanel_MerchantDetailPage_MembershipCard_HeaderTxt_X',
                                // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
            
                                style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                items: [
                                    {
                                        xtype: 'spacer',
                                        width: 15
                                    },
                                    {
                                        id: 'htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt',
                                        width:'82%',
                                        html: '<font size=2 color=white><b>Membership Card</b></font>',
            
                                       // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Card</div>',
                                    },
                                    {
                                        xtype: 'spacer'
                                    },
                                     {
                                         xtype: 'button',
                                         id: 'btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp',
                                         //  badgeText: '1',
                                         margin: '0 0 0 0',
                                         height: 30,
                                         width: 60,
                                         hidden: true,
                                         //  html: '<font size=2 color=white><b>Hide</b></font>',
                                         html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                         ui: 'plain',
                                         handler: function () {
                                             OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideDown';
                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(false);
                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(true);
                                             FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            
                                         },
                                     },
                                       {
                                           xtype: 'button',
                                           id: 'btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown',
                                           margin: '0 0 0 0',
                                           height: 30,
                                           width: 60,
                                           html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                           ui: 'plain',
                                           handler: function () {
                                               OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(true);
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(false);                                                         
                                               FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                           },
                                       },
                                     {
                                         xtype: 'spacer',
                                         width: 15
                                     },
                                ]
                            },
            
                                  {
                                      xtype: 'container',
                                      width: '95%',
                                      height: 0,
                                      // width: 40,
            
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,
            
                                      id: 'containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                     // name: 'namecontaineFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                      style: 'background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             xtype: 'list',
                                             //xtype: 'dataview',
                                             height: 0,
                                             store: _DataStore_MembershipCardLoadByEnterpriseAccNoStore,
                                             id: 'ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID',
                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            
                                             mode: 'SINGLE',
                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                             scrollable:false,
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
                                             disableSelection: true,
                                            
                                             itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                           //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            
                                             '{ModifiedisMembershipCardSubscribed}' +
                                           '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                         '</div>' +
                                                                         // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                             '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fees(RM)</div></div>' +
                                             '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-27px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:28px;font-weight:bold;">{MembershipCardFee}</div></div>' +
                                            //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +
            
                                             '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div class="blink_me" style="width:100%;text-align:right;margin:0px 0px 0px -25px">*Tap to view Details</div></div>' +
                                           //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                             //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                               '<br><div style="margin:-38px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px -25px;color:transparent;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">x</div></div>',
            
                                             //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
            
            
                                             emptyText: '<div class="myContent">No Membership Card</div>',
            
            
            
            
                                             width: '100%',
                                          
            
                                         },
                                      ]
                                  },
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 10,
                                              style: 'background-color: transparent;',
                                          },
            
                            {
                                xtype: 'container',
                                width: '95%',
                                height: 32,
                                // width: 40,
            
                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,
            
                                id: 'containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_HeaderTxt',
                                name: 'namecontainerFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_HeaderTxt_X',
                                // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
            
                               style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                items: [
                                    {
                                        xtype: 'spacer',
                                        width: 15
                                    },
                                    {
                                        id: 'htmlFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt',
                                        width:'82%',
                                       // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Loyalty Program</div>',
                                      html: '<font size=2 color=white><b>Our Loyalty Program</b></font>'
                                    },
                                    {
                                        xtype: 'spacer'
                                    },
                                     {
                                         xtype: 'button',
                                         id: 'btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp',
                                         //  badgeText: '1',
                                         margin: '0 0 0 0',
                                         height: 30,
                                         width: 60,
                                         hidden: true,
                                         //  html: '<font size=2 color=white><b>Hide</b></font>',
                                         html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                         ui: 'plain',
                                         handler: function () {
                                             OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideDown';
                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(false);
                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(true);
                                             FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp();
                                            // FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            
                                         },
                                     },
                                       {
                                           xtype: 'button',
                                           id: 'btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown',
                                           margin: '0 0 0 0',
                                           height: 30,
                                           width: 60,
                                           html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                           ui: 'plain',
                                           handler: function () {
                                               // FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore();
                                               OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(true);
                                               Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(false);
                                            
                                               FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown();
                                             //  FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                           },
                                       },
                                     {
                                         xtype: 'spacer',
                                         width: 15
                                     },
                                ]
                            },
            
                                  {
                                      xtype: 'container',
                                      width: '95%',
                                      height: 0,
                                      // width: 40,
            
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      hidden: true,
            
                                      id: 'containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner',
                                      // name: 'namecontaineFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                      style: 'background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             xtype: 'list',
                                             //xtype: 'dataview',
                                             height: 0,
                                           store: _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore,
                                             id: 'ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID',
            
                                             mode: 'SINGLE',
                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                             scrollable:false,
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
                                             grouped:true,
            
                                             disableSelection: true,
                                             itemTpl: '<div  class="myContent" style="background-color:transparent;width:100%">' +
            
            
                                                                                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;height:40px;"><tr ><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:15%;vertical-align:center"><img  src="{AyohaLoyaltyProgramIcon}" style="border:1px none black; width:35px;height:35px;" /></td><td  style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AyohaLoyaltyProgram} - ({Bilangan})</b></td></tr></table>' ,
                                                                                                         //'<br>' +
                                                                                                         //    '<div  style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',
            
                                             //emptyText: '<div class="myContent">No Online Store!</div>',
                                             emptyText: 'Loading...',
                                             listeners: {
                                                 itemtap: function (list, idx, target, records, evt) {
                                              //Commented on 7/4/2024
                                                    //    LoadingPanelShow(getLoadingIcon(), 'Loading...');                                        
                                                //    FloatPanel_MerchantDetailPage_Staging_MembershipLoyaltyProgram(records.get('MembershipSegmentCode'), records.get('Bilangan'), records.get('AyohaLoyaltyProgram'), records.get('LoyaltyProgramCode'));
            
            
                                                 },
                                                 deselect: function (list, records) {
            
                                                 }
                                             },
            
            
                                             width: '100%',
            
            
                                         },
                                      ]
                                  },
            
            
            
            
            
            
                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 400,
                                              style: 'background-color: transparent;',
                                          },
            
            
            
            
                    //    ]
                    //},
            
                ]
            },
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
    xtype:'spacer',
    width:20
    },
{
    xtype: 'container',
    style: 'background-color: #CCCCCC;',
    width: 1,
    height: '99%',
    
   
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
},
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

                    html: '<font size=3 color=black><b>Enterprise page QrCode</b></font>',

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
        FloatPanel_AyohaEnterpriseAccount_Enterprisepage_PrintQrCode();
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
      //FloatPanel_AyohaEnterpriseAccount_Enterprisepage_PrintQrCode();
      //FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintShow();
     swalFireInfoMerchantButtonLink("Print this Qr Code and Placed it on  most easy place to see in your premise", "WhatsApp");
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

    //     html: '<font margin:0px 0px -10px 0px; size=3 color=black><b>Ayoha Merchant Page QR Code</b></font><button onclick="FloatPanel_AyohaEnterpriseAccount_Enterprisepage_PrintQrCode()" class="buttonsHtmlBgTransparent"><img src="resources/icons/printer.png" style="width: 25px; height: 25px; margin:0px 0px 0px 80px;" /></button>',

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
                    id:'htmlFloatPanel_AyohaEnterpriseAccount_EnterprisePage_Logo_CompanyName_Description',
                    html:'<table style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><img src="https://www.setkita.com/AyohaImgCard/Logo/90215-4902-5913-NoEnterprise/webevo.jpeg" alt="Image" width="85" height="76"></td><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=2.5px><b>Monster Chicken Sdn Bhd</b></font><br>Ayam Goreng Terpadu!</td></tr><tr></tr></thead></table>',
                },
                {

                    // hidden: true,
                     margin: '-25 40 0 0',
                     //  margin: '-100 0 0 20',
                     width: 150,
                     height: 150,
                     // height: '100%',
    
                     id: 'htmlFloatPanel_AyohaEnterpriseAccount_EnterprisePage_QrCode',
                     html: '<div id="EnterprisePage_QrCodeImg"  style="width: 100%; height: 100%; border:1px none white;" />',
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
    
        return _FloatPanel_MerchantDetailPage;
    }
    
    
    
    var FloatPanel_MerchantPageDetail;
    var globalFloatPanelMerchantDetailPage_ID;
    var globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
    var globalFloatPanel_MerchantDetailPage_EnterpriseFacebook;
    var globalFloatPanel_MerchantDetailPage_EnterpriseWebsite;
    var globalFloatPanel_MerchantDetailPage_EnterpriseInstagram;
    var globalFloatPanel_MerchantDetailPage_EnterpriseTikTok;
    var globalFloatPanelMerchantDetailPage_EnterpriseLogo;
    var globalFloatPanelMerchantDetailPage_EnterpriseName;
    var globalFloatPanelMerchantDetailPage_EnterpriseTagLine;
    var globalFloatPanelMerchantDetailPage_EnterpriseCoordinate;
    var globalFloatPanelMerchantDetailPage_BusinessMode;
    var globalFloatPanelMerchantDetailPage_WhatsAppNo;
    
    
    
    
    
    
    
    var OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging;
    var OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging;
    var OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging;
    
    function FloatPanel_MerchantDetailPageShow() {
        Ext.Viewport.remove(_FloatPanel_MerchantDetailPage);
        this.overlay = Ext.Viewport.add(FloatPanel_MerchantDetailPage());
        this.overlay.show();
        FloatPanel_MerchantPageDetail = Ext.getCmp('CarouselFloatPanel_MerchantDetailPage');
       
    
    
    
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
        FloatPanel_AyohaEnterpriseAccount_Enterprisepage_CreateQrCode();
        var task = Ext.create('Ext.util.DelayedTask', function () {
           
            var objn = {
                "EnterpriseAccNo": GetEnterpriseAccNo(),           
            };
            console.log(objn);
            var _value = Ext.Ajax.request({
    
                type: "POST",
    
                url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoEnterprisePageMerchant',
    
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
    
                success: function (result, request) {
    
                    //console.log(result.responseText);
    
    
                    data = Ext.decode(result.responseText.trim());
    
                    if (data.success == "true") {
                        globalLogin_EnterpriseEmail=data.results[0].ID;
    
                        globalFloatPanelMerchantDetailPage_ID = data.results[0].ID;
                        globalFloatPanelMerchantDetailPage_EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                        globalFloatPanelMerchantDetailPage_EnterpriseLogo = data.results[0].EnterpriseLogoPath;
                        globalFloatPanelMerchantDetailPage_EnterpriseName = data.results[0].EnterpriseName;
                        globalFloatPanelMerchantDetailPage_EnterpriseTagLine = data.results[0].EnterpriseTagLine;
                        globalFloatPanel_MerchantDetailPage_EnterpriseFacebook = data.results[0].EnterpriseFacebook;
                        globalFloatPanel_MerchantDetailPage_EnterpriseWebsite = data.results[0].EnterpriseWebsite;
                        globalFloatPanel_MerchantDetailPage_EnterpriseInstagram = data.results[0].EnterpriseInstagram;
                        globalFloatPanel_MerchantDetailPage_EnterpriseTikTok = data.results[0].EnterpriseTikTok;
                        globalFloatPanelMerchantDetailPage_EnterpriseCoordinate = data.results[0].EnterpriseCoordinate;
                        globalFloatPanelMerchantDetailPage_BusinessMode = data.results[0].BusinessMode;
                        globalFloatPanelMerchantDetailPage_WhatsAppNo = data.results[0].PICContactNo;
                        EnterpriseDescriptions = data.results[0].EnterpriseDescriptions;
                        EnterprisePhoneNo= data.results[0].EnterprisePhoneNo;
                      
        NamaJalan=data.results[0].NamaJalan;
        Postkod=data.results[0].Postkod;
        Bandar=data.results[0].Bandar;
        Negeri=data.results[0].Negeri;

       








        OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
        OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
        OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
        countLikeDislikeTap = 0;
        is_FloatPanel_MerchantDetailPageOpen = 'Y';
      
        //  globalDashboard_AyohaHotMerchant_EnterpriseAccNo = EnterpriseAccNo;
        localStorage.setItem("globalFloatPanelMerchantDetailPage_ID", globalFloatPanelMerchantDetailPage_ID);
    
        globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanelMerchantDetailPage";
        globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MerchantDetailPage"
        
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLogo').setHtml('<div ><img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" width="30" height="30" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo').setHtml('<div ><img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" width="100%" height="90" alt="Company Name"></div>');
       
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</i></div>');
        
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseDescription').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">' + EnterpriseDescriptions + '</div>');
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseContactDetails').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;"><a href="tel:' + EnterprisePhoneNo + '">' + EnterprisePhoneNo + '</a></div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Contact No</div>');
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_WhatsAppNo + '</div><br><div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">WhatsApp Contact No</div>');
    
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:5px 0px 0px 0px">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:-27px 0px 0px 0px">' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</div>');
    
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseFullAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10.5px;font-weight:normal;color:black;padding:0px 6px;">' + NamaJalan + ',' + Postkod + ' ' + Bandar + ', '+ Negeri +'.</div>');
    
      

     
        Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_EnterprisePage_Logo_CompanyName_Description').setHtml('<table style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><img src="'+globalFloatPanelMerchantDetailPage_EnterpriseLogo+'" alt="Image" width="85" height="76"></td><td style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=2.5px><b>'+globalFloatPanelMerchantDetailPage_EnterpriseName+'</b></font><br>'+globalFloatPanelMerchantDetailPage_EnterpriseTagLine+'</td></tr><tr></tr></thead></table>');
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var day = weekday[d.getDay()];

    
        if (globalFloatPanelMerchantDetailPage_BusinessMode != 'Online') {
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(true);
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
            FloatPanel_AyohaEnterpriseAccount_Enterprisepage_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore(day);
           // FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_EnterpriseAccNo, day);
        } else {
           // FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_EnterpriseAccNo, globalFloatPanelMerchantDetailPage_BusinessMode);
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(false);
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(true);
            FloatPanel_AyohaEnterpriseAccount_Enterprisepage_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_BusinessMode);
    
    
           
        }
    

       // FloatPanelMerchantDetailPage_CalculateRating(EnterpriseAccNo);
        FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore();
     //   FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore();
       
       
        if (globalFloatPanel_MerchantDetailPage_EnterpriseFacebook != 'NA') {
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_FB').setHidden(false);
    
        }
        if (globalFloatPanel_MerchantDetailPage_EnterpriseWebsite != 'NA') {
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Website').setHidden(false);
        }
        if (globalFloatPanel_MerchantDetailPage_EnterpriseInstagram != 'NA') {
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Insta').setHidden(false);
        }
        if (globalFloatPanel_MerchantDetailPage_EnterpriseTikTok != 'NA') {
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_TikTok').setHidden(false);
        }
    
       
    
        if (globalFloatPanelMerchantDetailPage_EnterpriseCoordinate != 'NA') {
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
    
        } else {
            Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(true);
    
        }
                    }
                    else {
    
                        swalFireFail("Fail!-->" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
    
                },
    
                failure: function (result, request) {
                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
    
            });
          
            Ext.Viewport.unmask();
        });
        task.delay(500);
        
    
    
    
    
    
    
    
    
    
    
    
        
    }
    

















    
    function FloatPanel_MerchantDetailPageHide() {
    
        if (is_FloatPanel_MerchantDetailPageOpen == 'Y') {
            _FloatPanel_MerchantDetailPage.hide();
            is_FloatPanel_MerchantDetailPageOpen = 'N';
          //  RemovePages("FloatPanel_MerchantDetailPageHide()");
           // FloatPanel_AyohaStore_LikeDislikeStore_Save();
            // swalFireSuccessStampedCardMsg("Stamped Success!!");
        }
    
    }
    
    
    
    
    
    function FloatPanelMerchantDetailPage_OpenDirection() {
    
    
    
        var Coordinate = globalFloatPanelMerchantDetailPage_EnterpriseCoordinate.split(",");
        PlaceMarkerlat = Coordinate[0];
        PlaceMarkerlng = Coordinate[1];
    
    
    
    
    
        if (PlaceMarkerlat) {
            if (PlaceMarkerlng) {
                window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
            } else {
    
                swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
            }
        } else {
            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
        }
    }
    
    function FloatPanelMerchantDetailPage_OpenWhatsApp() {
        
    
    
         if (globalFloatPanelMerchantDetailPage_WhatsAppNo) {
            // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
            //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
             window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanelMerchantDetailPage_WhatsAppNo + "&text=Hi " + globalFloatPanelMerchantDetailPage_EnterpriseName, '_system'); return false;
            // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);
        } else {
            swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
        }
    }
    
    
    
    
    // function AyohaMerchantReviewShow_FromDashboardXXNotUsed() {
    //     //var IDS = localStorage.getItem("globalFloatPanelMerchantDetailPage_ID");
    //     //AyohaMerchantReviewShow(IDS);
    //     AyohaMerchantReviewShow_FromFloatPanel_MerchantDetailPage();
    
        
    // }
    
    
    
    function FloatPanel_MerchantDetailPage_OpenFB() {
        setTimeout(function () { window.open("fb://page/" + globalFloatPanel_MerchantDetailPage_EnterpriseFacebook + "", '_system'); return false; }, 25);
    }
    function FloatPanel_MerchantDetailPage_OpenTikTok() {
        window.open(globalFloatPanel_MerchantDetailPage_EnterpriseTikTok, '_system'); return false;
    }
    function FloatPanel_MerchantDetailPage_OpenInsta() {
        setTimeout(function () { window.open("instagram://user?username=" + globalFloatPanel_MerchantDetailPage_EnterpriseInstagram + "", '_system'); return false; }, 25);
    }
    function FloatPanel_MerchantDetailPage_OpenWebsite() {
        window.open(globalFloatPanel_MerchantDetailPage_EnterpriseWebsite, '_system'); return false;
    }
    
    
    function FloatPanel_MerchantDetailPage_OpenStore(eStoreName, eStoreURL) {
    
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
    
   
    
    var globalFloatPanelMerchantDetailPage_CountMembershipCard;
    var globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height;
    function FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo,day) {
    
        var Stores;
        var counter = 1;
    
    



        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/AyohaMerchantPageMediaHeaderloadByEnterpriseAccNo');
        _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.load();
    
    
    
      
    

        globalFloatPanelMerchantDetailPage_EnterpriseAccNo = GetEnterpriseAccNo();
        globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = 0;
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var count = parseInt(_DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getCount());
           
    
            if (count > 0) {
               
                for (i = 0; i < count; i++) {
                    Stores = _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore.getAt(i);
                  
                    FloatPanel_MerchantPageDetail.add({ xtype: 'image', src: Stores.get('CoverMediaUrl'), height: '96%', width: '100%', mode: 'image' });
                    counter++;
                }
            }
    
    
   
    
    
        });
        task.delay(500);
    
    
        Ext.Viewport.setMasked(false);
    }
    
    
    
    
    function convertTimeFrom12To24(timeStr) {
        var colon = timeStr.indexOf(':');
        var hours = timeStr.substr(0, colon),
            minutes = timeStr.substr(colon + 1, 2),
            meridian = timeStr.substr(colon + 4, 2).toUpperCase();
    
    
        var hoursInt = parseInt(hours, 10),
            offset = meridian == 'PM' ? 12 : 0;
    
        if (hoursInt === 12) {
            hoursInt = offset;
        } else {
            hoursInt += offset;
        }
        return hoursInt + "." + minutes;
    }
    
    function FloatPanelMerchantDetailPage_CalculateRating() {
       
    
    
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var objn = {
                "EnterpriseAccNo": GetEnterpriseAccNo()
            };
            // console.log(objn);
            var _value = Ext.Ajax.request({
    
                type: "POST",
    
                url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',
    
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
    
                success: function (result, request) {
    
                    //console.log(result.responseText);
    
    
                    data = Ext.decode(result.responseText.trim());
    
                    if (data.success == "true") {
                        //var newData = JSON.parse(JSON.stringify(result.results.Email))
                        //console.log(result.results.Email);
                        //  //data.results[0];
                        // console.log(data.total);
                        if (data.total > 0) {
                            FiveStar = data.results[0].FiveStar;
                            FourStar = data.results[0].FourStar;
                            ThreeStar = data.results[0].ThreeStar;
                            TwoStar = data.results[0].TwoStar;
                            OneStar = data.results[0].OneStar;
                            TotalStar = data.results[0].TotalStar;
                            TotalVoter = data.results[0].TotalVoter;
                            VoteFiveStar = data.results[0].VoteFiveStar;
                            VoteFourStar = data.results[0].VoteFourStar;
                            VoteThreeStar = data.results[0].VoteThreeStar;
                            VoteTwoStar = data.results[0].VoteTwoStar;
                            VoteOneStar = data.results[0].VoteOneStar;
    
    
                            var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
    
                            if (TotalAvg) {
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();" style="color:black;text-align: center;font-size:20px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');
    
                            } else {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();" style="color:black;text-align: center;font-size:20px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                            }
    
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewByCount').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();" style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;' + TotalVoter + ' Reviews</div>');
    
                            //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');
    
                            var RateReviews = TotalAvg.toFixed(1);
    
    
    
                            if (RateReviews == 5) {
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
    
    
                            }
                            if ((RateReviews >= 4) && (RateReviews < 5)) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
                                if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
    
                                }
                                if (RateReviews == 4.5) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if (RateReviews == 4.9) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                }
    
    
    
                            }
                            if ((RateReviews >= 3) && (RateReviews < 4)) {
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
    
    
    
                                if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
                                }
                                if (RateReviews == 3.5) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
    
    
    
                                }
                                if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if (RateReviews == 3.9) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
    
    
    
                            }
                            if ((RateReviews >= 2) && (RateReviews < 3)) {
    
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
                                if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if (RateReviews == 2.5) {
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if (RateReviews == 2.9) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
                                }
    
    
    
    
    
                            }
                            if ((RateReviews >= 1) && (RateReviews < 2)) {
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
                                if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
    
    
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
                                }
                                if (RateReviews == 1.5) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
                                }
                                if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
                                if (RateReviews == 1.9) {
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                }
    
                            }
                            if ((RateReviews >= 0) && (RateReviews < 1)) {
    
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="AyohaMerchantReviewShow_FromDashboard();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
    
    
                            }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                           
                            Ext.Viewport.unmask();
                        }
                        if (data.total == 0) {
    
                            Ext.Viewport.unmask();
    
                        }
    
    
    
    
    
                    }
                    else {
    
    
                        Ext.Viewport.unmask();
                    }
    
    
                },
    
                failure: function (result, request) {
                    Ext.Viewport.unmask();
                }
    
            });
    
    
    
        });
    
        //  Ext.Viewport.unmask();
    
        //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
        task.delay(500);
    
    
    }
    
    
    
    
    var globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount;
    var globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi;
    
    var globalFloatPanelMerchantDetailPage_MembershipCardCount;
    var globalFloatPanelMerchantDetailPage_MembershipCard_tinggi;
    function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore() {
    
    
    
       
        _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
        _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl_Mobile() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreLoadByEnterpriseAccNo');
        _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.load();
    
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var count = parseInt(_DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getCount());
          //alert(count)
            //  globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount = count;
    
           globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = count * 80;
           Ext.getCmp('htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b> Online Store (' + count + ')</b> - View Only</font></div>');
           FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore();
          
           // htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt
    
          // globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = Store.get('CountOnlineStore') * 80;

    
    
    
        // FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
    
        });
        task.delay(500);
    
    
        Ext.Viewport.setMasked(false);
    }
    
    
    function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore() {
    
    
    var counting=parseInt(ArrFloatPanelMerchantDetailPage_MembershipCardCode.length);
    
    if(counting<=0){
        return;
    }
    
        var MCC;
        var i;
        for (i = 0; i < ArrFloatPanelMerchantDetailPage_MembershipCardCode.length; i++) {
            MCC +=ArrFloatPanelMerchantDetailPage_MembershipCardCode[i]+",";
        }
    
        var ModifiedMCC = MCC.replace("undefined", "");
        var strMCC = ModifiedMCC.slice(0, -1);
       
       
    
    
        _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getProxy().setExtraParam('MembershipCardCode', strMCC);
        _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getProxy().setUrl(GetAPIurl_Mobile() + '/AyohaMerchantInfo_MembershipLoyaltyProgram/AyohaMerchantInfoMembershipLoyaltyProgram');
        _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.load();
    
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var count = parseInt(_DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getCount());
            //  globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount = count;
            globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = parseInt(count) * 400;
            // globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = count * 80;
            var TotalLoyaltyProgram = 0;
            for (i = 0; i < count; i++) {
                var Store = _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getAt(i);
                TotalLoyaltyProgram +=parseInt (Store.get('Bilangan'))
    
            }
    
    
           
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt').setHtml('<div onclick="OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Loyalty Program (' + TotalLoyaltyProgram + ')</b> - View Only</font></div>');
    
           
            // FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
    
        });
        task.delay(500);
    
    
        Ext.Viewport.setMasked(false);
    }
    
    
    
    
    function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown() {
    
       
        
        $("#containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner").animate({
            height: '+=' + globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height + 'px',
            speed: "fast",
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHidden(false);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHeight(globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height);
            Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID').setHeight(globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height);
           
    
    
        });
    }
    
    
    function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp() {
    
      
    
        $("#containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner").animate({
            height: '-=' + globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height + 'px',
            speed: "fast",
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHidden(true);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHeight(0);
            Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID').setHeight(0);
    
    
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown() {
    
    
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
        //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
        //});
    //alert(globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi)
    
        $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
            height: '+=' + globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi + 'px',
            speed:"fast",
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(false);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi);
            Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi);
           
    
        });
    }
    
    
    
    
    
    
    function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp() {
    
    
    
        $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
            height: '-=' + globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi + 'px',
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(true);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(0);
            Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(0);
    
        });
    }
    
    
    
    
    
    var ArrFloatPanelMerchantDetailPage_MembershipCardCode=[];
    
    function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore() {
    
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseHQAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('AyohaUserAccountNo', 'Nik Muhammad Faizal-01139123294-4702741');
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl_Mobile() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo');
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.load();
        ArrFloatPanelMerchantDetailPage_MembershipCardCode.length=0;
    
        var task = Ext.create('Ext.util.DelayedTask', function () {
    
            var count = parseInt(_DataStore_MembershipCardLoadByEnterpriseAccNoStore.getCount());
            globalFloatPanelMerchantDetailPage_MembershipCard_tinggi=count * 300;
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Membership Card (' + count + ')</b> - View Only</font></div>');
           // htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt
            for (i = 0; i < count; i++) {
              var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(i);
                ArrFloatPanelMerchantDetailPage_MembershipCardCode.push(Store.get('MembershipCardCode'))
            }
    
            //  globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount = count;
    
            // globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = count * 80;
    
    
    
    
    
           FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore();
         
        });
        task.delay(500);
    
    
        Ext.Viewport.setMasked(false);
    }
    
    
    
    
    
    
    function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown() {
    
    
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    
        //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
        //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
        //});
    
        console.log(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);
        $("#containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner").animate({
            height: '+=' + globalFloatPanelMerchantDetailPage_MembershipCard_tinggi + 'px',
            speed: "slow",
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHidden(false);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHeight(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);
            Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID').setHeight(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);
    
    
        });
    }
    
    
    
    
    
    
    function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp() {
    
    
    
        $("#containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner").animate({
            height: '-=' + globalFloatPanelMerchantDetailPage_MembershipCard_tinggi + 'px',
            speed: "fast",
        }, 500, function () {
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHidden(true);
            Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHeight(0);
            Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID').setHeight(0);
    
        });
    }
    
    function FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails() {
        FloatPanel_AyohaMerchantInfo_BusinessHourShow();
    }
    
    function FloatPanel_MerchantDetailPage_Staging_MembershipLoyaltyProgram(MembershipSegmentCode, Bilangan, AyohaLoyaltyProgram, LoyaltyProgramCode) {
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
    
    
    
    function OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt() {
    
        if (OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging == 'slideUp') {
            OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging == 'slideDown') {
            OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown();
            return;
        }
    
    
    }
    
    function OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt() {
    
        if (OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging == 'slideUp') {
            OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging == 'slideDown') {
            OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
            return;
        }
    
    }
    
    function OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt() {
        if (OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging == 'slideUp') {
            OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideDown';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(false);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(true);
            FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
            return;
        }
    
    
    
        if (OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging == 'slideDown') {
            OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(true);
            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(false);
            FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
    
            return;
        }
    }
    
    
    
    
    function FloatPanel_MerchantDetailPage_LikeDislikeStore() {
       countLikeDislikeTap++;
       
        var likedislike = Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').getHtml();
     
    
       if (likedislike == '<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>') {
            countlikes = globalFloatPanel_AyohaStore_CountLike + 1;     
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');      
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>');
            likedStatus = "Y";
    
            globalFloatPanel_AyohaStore_CountLike = countlikes;
            return;
    
       } if (likedislike == '<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>') {
            countlikes = globalFloatPanel_AyohaStore_CountLike - 1;
            //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + countlikes + '</b></div>');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/unlovepurple.png" width="22" height="22" alt="Company Name"></div>');
    
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>');
    
            likedStatus = "N";
    
            globalFloatPanel_AyohaStore_CountLike = countlikes;
    
        }
    
    
    
    }





    function FloatPanel_AyohaEnterpriseAccount_Enterprisepage_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore(day){

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
                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('CountLike') + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
                // globalFloatPanel_AyohaStore_CountLike = parseInt(Store.get('CountLike'));
                // globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = parseInt(Store.get('CountMembershipCard')) * 400;
                // Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Membership Card (' + Store.get('CountMembershipCard') + ')</b></font></div>');
                // Ext.getCmp('htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Online Store (' + Store.get('CountOnlineStore') + ')</b></font></div>');
            
            }
        }
    

            if (globalFloatPanelMerchantDetailPage_BusinessMode == "Online") {
                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Open 24/7 (Open Now)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
    
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
    
    
    
                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('WorkingHourStart') + Store.get('WorkingHourStartAMPM') + ' - ' + Store.get('WorkingHourEnd') + Store.get('WorkingHourEndAMPM') + ' (' + TutupBuka + ')</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
    
                } else {
    
                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + day + ' (Off Day/Holiday)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
                }
    
               
            }
    


        });








       
        // Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</i></div>');
        
        // Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseDescription').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">' + EnterpriseDescriptions + '</div>');




        



       
        task.delay(500);
    
    }


var globalFloatPanel_AyohaEnterpriseAccount_Enterprisepage_ImgBase64;
    function FloatPanel_AyohaEnterpriseAccount_Enterprisepage_CreateQrCode() {
   

        var val = GetEnterpriseAccNo()+"-EP";
    
        var qrDiv = document.getElementById('EnterprisePage_QrCodeImg')
        var x = screen.width;
        var y = x - 20;
        qrcode = new QRCode(document.getElementById("EnterprisePage_QrCodeImg"), {
            width: 200,
            height: 200,
        });
    
        //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));
    
    
        qrcode.clear();
    
        qrcode.makeCode(val);
    
        // var ee= document.getElementById("EnterprisePage_QrCodeImg").value;
    //   console.log(qrcode)
      // alert(qrcode._oDrawing._elImage.currentSrc);
    
        //<img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392">
    
       //var base64 = document.getElementById("QrCodeImg1").src;
       // var dataURL = document.getElementById('EnterprisePage_QrCodeImg').toDataURL();
       // var src= document.querySelector('#qrcode img').getAttribute("src");
   // alert(base64)
        // var qr_code_img = document.querySelector(".qr-code img");
        // var qr_code_canvas = document.querySelector("canvas");
        // qr_code_img.getAttribute("src")

        

        globalFloatPanel_AyohaEnterpriseAccount_Enterprisepage_ImgBase64 = qrDiv.children[0].toDataURL("image/png");
        FloatPanelMerchantDetailPage_CalculateRating();
    }




    function FloatPanel_AyohaEnterpriseAccount_Enterprisepage_PrintQrCode() {

//var val =document.getElementById("EnterprisePage_QrCodeImg").value;


        var mywindow = window.open('', 'Print', 'height=400,width="100%",resizable=0');
        // background color  mywindow.document.write('<html><head><title>Cloud-Receipts.Com -' + FlatBillWorkshop + '</title><style type="text/css" media="print">@media print {  body {-webkit-print-color-adjust: exact;}}@page { margin-left: 0px; margin-right: 0px; margin-top: 0px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}</style> </head>');
        // ori  mywindow.document.write('<html><head><title>Cloud-Receipts.Com -' + FlatBillWorkshop + '</title><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}}</style></head>');
      //  mywindow.document.write('<html><head><title>Ayoha-Reward.Com</title><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}body {-webkit-print-color-adjust: exact;}@page { margin-left: -50px; margin-right: 0px; margin-top: -50px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}}</style></head>');

         mywindow.document.write('<html><head><title>VersiLani.com-Membership-</title></head>');





        mywindow.document.write('<body>');
        //   mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><div style="width: 100px; height: 100px; border: 1px none white;" id="qrcodeCanvas"></div><br />Scan QR Code to<br> verify genuine receipt</th></tr>' +
      //  mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; background-color:#37474f !important;color:white; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '<br/>Website:' + FlatBillPremiseWebsite + '<br/>Email:' + FlatBillPremiseEmail + '</th><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><img style="width: 105px; height: 105px; border:1px solid white;background-color:white;" src="' + GetQRCodeImg() + '" alt="" /><br><br>Scan QR Code to<br> verify genuine receipt</th></tr>' +
        mywindow.document.write('<table style="border-collapse:collapse;border-spacing:0;margin:0px 0px 0px 100px"><colgroup><col style="width: 82.2px"><col style="width: 382.2px"><col style="width: 57.2px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrCodeHeader.jpeg" alt="Image" width="500" height="153"></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="'+globalFloatPanelMerchantDetailPage_EnterpriseLogo+'" alt="Image" width="61" height="52"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"><font size=6px><b>'+globalFloatPanelMerchantDetailPage_EnterpriseName+'</b></font><br>'+globalFloatPanelMerchantDetailPage_EnterpriseTagLine+'</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">      <img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="16" height="16"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="9"><img id="EnterprisePage_QrCode"  src="'+globalFloatPanel_AyohaEnterpriseAccount_Enterprisepage_ImgBase64+'" style="width: 369px; height: 392px; border:1px none white;" /></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="23" height="23"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/start.png" alt="Image" width="32" height="32"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:18px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3">Scan To Get Double Reward</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageHowToScan.png" alt="Image" width="399" height="76"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:bottom;word-break:normal" colspan="3"><img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/QrcodePageBottomcolorbg.png" alt="Image" width="500" height="59"></td></tr></tbody></table>');
       
       



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
         //  FloatPanel_AyohaEnterpriseAccount_Enterprisepage_CreateQrCode_print();
           Ext.Viewport.unmask();


         

        });
        task.delay(500);
    }





var makeQrCode;
    function FloatPanel_AyohaEnterpriseAccount_Enterprisepage_CreateQrCode_print() {
   

        var val = GetEnterpriseAccNo();
    
    
        var x = screen.width;
        var y = x - 20;
        qrcode = new QRCode(document.getElementById("EnterprisePage_QrCode"), {
            width: 369,
            height: 392
        });
    
        //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));
    
    
        qrcode.clear();
    
        qrcode.makeCode(val);
    
    
        //<img src="https://www.setkita.com/AyohaImgCard/AyohaMerchantPageQrCodeImage/sampleQrcode.png" alt="Image" width="369" height="392">
    
    }