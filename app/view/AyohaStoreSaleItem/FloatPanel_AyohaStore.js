Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore', {

});

var _FloatPanel_AyohaStore;


var isFloatPanel_AyohaStoreOpen = 'N';

var _FloatPanel_AyohaStore_isFirstLoad = "N";









function FloatPanel_AyohaStore() {

    _FloatPanel_AyohaStore =
     Ext.create('Ext.Container', {
         requires: [
       'Ext.util.DelayedTask',
         ],
         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStoreID',
         draggable: false,
         zIndex: 70,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
         // hideOnMaskTap: true,
         layout: {
            type: 'fit'
            // type: 'vbox',
            // pack: 'start',
            // align: 'center'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         //style: 'border-bottom:1px solid;background-color:black;',
         style: 'border-bottom:1px none;background-color:white;',
      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                //if (e.direction == "up") {
         //                //    FloatPanel_AyohaStoreHide();
         //                //}
         //                if (e.direction == "left") {
         //                    FloatPanel_AyohaStore_CartShow();

         //                } 
         //            }
         //        });
         //    }
         //},


         items: [

            {

                xtype: 'container',
                width: '100%',
                height: 60,
                //zIndex:-10,
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                docked: 'top',
                id: 'containerFloatPanel_AyohaStoreHeader1',
                style:GetHeaderStyle(),
                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                               width: 20,
                           },
                           {
                               margin: '0 0 0 0',
                               id: 'htmlFloatPanel_AyohaStore_TitleHeaderTxt',
                               html: '<font size=4 color=black><b>Ayoha Store Setting</b></font>'
                           },




                         

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaStoreBack',
                                       height: 30,
                                       width: 35,
                                       margin: '0 0 0 0',
                                       // iconCls: 'list',
                                       html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                       ui: 'plain',
                                       handler: function () {
                                           _FloatPanel_AyohaStore.hide(Ext.fx.Animation({
                                               type: 'popOut',
                                               //direction: 'left',
                                               //easing: 'cubic-bezier(.7,0,.7,1)',
                                               duration: 250

                                           }));
                                           isFloatPanel_AyohaStoreOpen = 'N';
                                           _FloatPanel_AyohaStore_isFirstLoad = "N";
                                           RemovePages(_FloatPanel_AyohaStore, "isFloatPanel_AyohaStoreOpen");
                                           FloatPanel_AyohaStore_LikeDislikeStore_Save();
                                       }
                                   },

                                   {
                                       xtype: 'spacer',
                                       width: 20,
                                   },
                                      {
                                          xtype: 'button',
                                          margin: '-8 -8 0 0',
                                          hidden: true,
                                          zIndex: 100,
                                          html: '<font size=2 color=white><b>Ayoha Store</b></font>',
                                          ui: 'plain',
                                          handler: function () {

                                          }
                                      },



                               {
                                   xtype: 'button',
                                   id: 'btnbtnFloatPanel_AyohaStoreFakeButton',
                                   height: 35,
                                   hidden: true,
                                   width: 140,
                                   zIndex: 100,
                                   // badgeText:'0',
                                   // iconCls: 'list',
                                   margin: '0 -135 0 0',
                                   //  html: '<div><img src="resources/icons/AyohaStoreWhite.png" width="25" height="25" alt="Company Name"></div>',
                                   ui: 'plain',
                                   handler: function () {
                                       FloatPanel_AyohaStore_CartShow();
                                   }
                               },



                                    {
                                        xtype: 'container',
                                        id: 'containerFloatPanel_AyohaStoreMyCart',
                                        name: 'namecontainerFloatPanel_AyohaStoreMyCart',
                                        hidden: true,
                                        width: 110,
                                        height: 30,
                                        margin: '0 0 0 0',
                                        // hidden: true,
                                        // style: "background-color: transparent",
                                        //style: "background-color: #F35B57;",
                                        style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background: white;border-radius: 10px 10px 10px 10px;',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left'

                                        },
                                        items: [

                                            {
                                                xtype: 'panel',
                                                width: 5
                                            },


                                            {
                                                margin: '8 0 0 0',
                                                id: 'htmlFloatPanel_AyohaStore_CartAmount',
                                                html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>'
                                            },
                                              {
                                                  margin: '2 0 0 2',

                                                  width: 24,
                                                  height: 24,
                                                  html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                                                  // ui:'plain'
                                              },

                                              {
                                                  xtype: 'container',
                                                  height: 35,
                                                  width: 35,
                                                  margin: '-3 0 0 5',
                                                  id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                                                  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [

                                            {
                                                margin: '-2 0 0 0',
                                                id: 'htmlFloatPanel_AyohaStore_MyCartCountbadgeText',
                                                html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                                            },
                                            {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaStore_MyCartCountbadgeTextItem',
                                                html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
                                            },

                                                  ]
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

                xtype: 'container',
                id: 'containerFloatPanel_AyohaStore_SearchProduct',
                docked: 'bottom',
              //  hidden:true,
                // margin: '-10 0 0 0',
                width: '100%',
                //height: 50,
                height: 50,
                style:GetFooterStyle(),
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px none grey;',
                //style: "background-color: #F35B57;",
                title: 'FloatPanel_AyohaStore_SearchProductCardLis',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
            
                },
            
            
                items: [
                    {
                        xtype:'spacer',
                        width:20
                              },
                    
                    {
                        xtype:'spacer',
                       
                              },
                              {
                                xtype: 'button',
                                id: 'htmlFloatPanel_AyohaStore_SettingNewItem_labeleditInfo',
                                //  badgeText: '1',
                                margin: '0 0 0 0',
                                //height: 40,
                                //width: 130,
                                html: '<div class="blink_me"><font size=2 color=red>*Click on image to update sale item</font></div>',
                                ui: 'plain',
                                handler: function () {
                                    
                                }
                            },
                  {
                      id: 'htmlFloatPanel_AyohaStore_SettingNewItem',
                      //margin: '-27 0 0 0',
                     // margin: '0 0 -4 0',
                    // cls:'blink_me_SendNow',
                      html: '<button OnClick="FloatPanel_AyohaStore_DotMenuItemShow();" class="buttonAddNewDeliveryCharge">Settings New Item</button>'
            
            
            
                  }, 
                  {
            xtype:'spacer',
            width:20
                  },
            
                        {
               xtype: 'container',
               id: 'containerFloatPanel_AyohaStore_ProductCategory',
               name: 'namecontainerFloatPanel_AyohaStore_ProductCategory',
               hidden:true,
               width: 158,
               height: 41,
               margin: '-3 0 0 -8',
               styleHtmlContent: true,
               style: "background-color: transparent",
               layout: {
                   type: 'hbox',
                   pack: 'center',
                   align: 'right'
            
               },
               items: [
                   {
                       width: 20,
                       height: 20,
                       margin: '-2 0 0 -4',
                       id: 'htmlFloatPanel_AyohaStoreMasterHeaderIcon',
                       html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                   },
                   {
                       //  width: 150,
                       margin: '-2 0 0 -20',
                       id: 'htmlFloatPanel_AyohaStor_ProductCategoryTxt',
                       html: '<input type="text" id="input-htmlFloatPanel_AyohaStor_ProductCategoryTxt"  placeHolder="Product Category" readOnly  style="border-radius: 0px;border-bottom: 1px solid purple;padding: 2px; width: 130px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/>'
                   },
             //{
             //    width: 20,
             //    height: 20,
             //    margin: '-2 0 0 -20',
             //    id: 'htmlFloatPanel_AyohaStoreMasterHeaderIcon',
             //    html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
             //},
               ]
            },
                      
                           {
                               xtype: 'button',
                               id: 'btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed',
                               //  badgeText: '1',
                               margin: '-17 0 0 0',
                               hidden: true,
                               height: 50,
                               width: 70,
                               html: '<img  src="resources/icons/membershipPurpleThree.png" style="width:20px;height:20px;margin:0px 0px 0px -2px;" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
            
            
                                   if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                       FloatPanel_AyohaStore_MembershipCardUsedShow();
                                   }
                                   if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                       FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                   }
                                   if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                       FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                   }
                                   if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                       swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                   }
                               }
                           },
                             {
                                 xtype: 'button',
                                 id: 'btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt',
                                 //  badgeText: '1',
                                 hidden: true,
                                 margin: '1 0 0 -4',
                                 height: 30,
                                 width: 180,
                                 html: '<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">Atul Follower</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>',
                                 ui: 'plain',
                                 handler: function () {
            
                                     if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                         FloatPanel_AyohaStore_MembershipCardUsedShow();
                                     }
                                     if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                         FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                     }
                                     if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                         FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                     }
                                     if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                         swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                     }
                                 }
                             },
            
                               {
                                   xtype: 'button',
                                   id: 'btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsedPointRate_Txt',
                                   //  badgeText: '1',
                                   hidden:true,
                                   margin: '-5 0 0 -4',
                                   height: 30,
                                   width: 130,
                                   html: '<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">RM0.02 = 1Point</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Card Point Rate </div>',
                                   ui: 'plain',
                                   handler: function () {
            
                                       if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                           FloatPanel_AyohaStore_MembershipCardUsedShow();
                                       }
                                       if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                           FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                       }
                                       if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                           FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                       }
                                       if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                           swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                       }
                                   }
                               },
                         
            
                           {
                               xtype: 'button',
                               id: 'btn_FloatPanel_AyohaStoreMasterHeader_BoxMenu',
                               hidden:true,
                               //  badgeText: '1',
                               margin: '-2 0 0 0',
                               //  hidden: true,
                               height: 26,
                               width: 26,
                               html: '<img src="resources/icons/BoxMenu.png" style="width:16px;height:16px;margin:0px 0px 0px -2px;" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
            
                                   Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                   Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                  // FloatPanel_AyohaStore_setSaleListItemColStyle();
                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btn_FloatPanel_AyohaStoreMasterHeader_ListMenu',
                               //  badgeText: '1',
                               hidden: true,
                               margin: '-2 0 0 0',
                               //  hidden: true,
                               height: 26,
                               width: 26,
                               html: '<img src="resources/icons/ListMenu.png" style="width:16px;height:16px;margin:0px 0px 0px -5px;" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
            
                                   Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(true);
                                   Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(false);
                               }
                           },
            
                            {
                                xtype: 'button',
                                id: 'btn_FloatPanel_AyohaStoreMasterHeader_SettingText',
                                //  badgeText: '1',
                             hidden: true,
                                margin: '-2 0 0 0',
                                //  hidden: true,
                                height: 26,
                                width: 100,
                                // text: 'Setting',
                                html: '<div class="blink_me"><font size=3px color=purple>Setting Items</font></div>',
                                ui: 'plain',
                                handler: function () {
            
                                    FloatPanel_AyohaStore_DotMenuItemShow();
                                }
                            },
                            {
                                xtype: 'button',
                                id: 'btn_FloatPanel_AyohaStoreMasterHeader_DotMenuX',
                                //  badgeText: '1',
                                margin: '4 0 0 3',
                               hidden: true,
                                height: 26,
                                width: 20,
                                html: '<img src="resources/icons/MenuDotPurple01.png" style="width:5px;height:16px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                ui: 'plain',
                                handler: function () {
                                    //globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Shrink";
                                    FloatPanel_AyohaStore_DotMenuItemShow();
                                }
                            },
                            // {
                            //     xtype: 'panel',
                            //     width: 5
                            // },
            
                ]
            
            
            },

            {
                xtype: 'container',
                width: '100%',
                height: '100%',               
                style: "background-color: transparent;",             
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center'
                },
                items:[
                    {
                        xtype: 'container',
                        width: '36%',
                        height: '100%',               
                        style: "background-color: transparent;",             
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                        },
                        items:[
                            { margin: '25 0 0 0',
                            id: 'FloatPanel_AyohaStore_Txt',
                            html: '<div style="width:100%;font-size:14px;color:black;text-align:center;font-weight:bold;">Ayoha Store Visitor - '+GetCurrentYear()+'</div>'
                        },
                        //{
                        //    xtype: 'spacer',
                        //    width:5
                        //},
                        {
                            xtype: 'container',
                            id: 'container_FloatPanel_AyohaStore_ID',
                            width: 30,
                            //height:270,
                            style: 'background-color:brown',
                            height: 4,
                        },
                        //  {
                        //      margin: '-60 0 0 0',
                        //      html: '<div class="col-md-6"><div id="chart_VisitorAnalsys_Advertisement" style="width: 100%; height: 550px"></div></div>'
                        //  },
                         {
                            margin: '-60 0 0 0',
                            html: '<div class="col-md-6"><div id="chart_VisitorAnalsys_AyohaStore" style="width: 100%; height: 650px"></div></div>'
                        },
                         { 
                            margin: '-60 0 0 0',
                            html: '<div class="blink_me" style="width:100%;font-size:10px;color:black;text-align:center;font-weight:normal">*Tap Number of visit to view details</div>'
                        }
                        ]
                    },

                    {
                        xtype: 'container',
                        //id: 'containerFloatPanel_MembershipCardManagement_border',
                        width: 1,
                        height: '90%',
                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                        style: "background-color: grey;",
                    },
                    
                    {
                        xtype: 'container',
                       // id: 'containerFloatPanel_MembershipCardManagement_border1',
                        width: 20,
                        height: '90%',
                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                        style: "background-color: transparent;",
                    },
                    {
                        xtype: 'container',
                        width: '65%',
                        height: '100%',               
                        style: "background-color: transparent;",             
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'left'
                        },
                        items: [
                      
       
                            {
                                xtype: 'container',
                                height: 100,
                                // hidden:true,
                                //flex: 1,
                                // height:'35%',
                                //height: 198,
       
                                //  height: 173,
                                width: '100%',
                                id: 'containerFloatPanel_AyohaStoreCompanyLogoHeaderMaster',
                                docked: 'top',
                                style: "background-color: transparent;",
                                //   style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',
                                //style: {
       
                                //    background: 'transparent',
       
                                //},
       
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'left'
       
                                },
                                items: [
       
       
       
                                    {
       
                                        xtype: 'container',
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        // zIndex: 190,
                                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                        //hidden: true,
                                        docked: 'top',
                                        id: 'containerFloatPanel_AyohaStoreCompanyLogoHeader',
                                        style: "background-color: transparent;",
                                        //style: {
                                        //    // background: '#D25959',
                                        //    background: 'transparent',
                                        //    // border: '2px'
                                        //},
       
                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'left',
                                        },
                                        // hidden:true,
                                        items:
                                               [
       
       
       
       
       
       
                                                   {
                                                       xtype: 'container',
                                                       styleHtmlContent: true,
                                                       margin: '-10 0 0 0',
                                                       width: '100%',
                                                     
                                                       //zIndex: 90,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_AyohaStoreCompanyLogo',
                                                       layout: {
       
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'left'
                                                       },
                                                       items: [
       
       
                                                           {
       
                                                               xtype: 'container',
                                                               width: '100%',
                                                               margin: '0 0 0 0',
                                                               height: 80,
                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                               style: "background-color: transparent;",
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'
       
                                                               },
                                                               items: [
                                                                   //{
                                                                   //    xtype: 'panel',
                                                                   //    id: 'panelFloatPanel_AyohaStore_Status7',
                                                                   //    width: 7
                                                                   //},
       
       
       
                                                                   {
                                                                       xtype: 'container',
                                                                       width: '10%',
                                                                       id: 'containerFloatPanel_AyohaStore_Logo',
       
                                                                       margin: '0 0 0 0',
                                                                       //style: {
                                                                       //    // background: '#D25959',
                                                                       //    background: 'rgba(76, 175, 80, 0.3);',
                                                                       //    // border: '2px'
                                                                       //},
                                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                       style: 'background-color:transparent',
                                                                       layout: {
                                                                           type: 'vbox',
                                                                           pack: 'center',
                                                                           align: 'right',
                                                                       },
                                                                       items: [
                                                                             {
                                                                                 //xtype: 'button',
                                                                                 //height: 75,
                                                                                 //width: 75,
       
                                                                                 margin: '40 0 0 0',
                                                                                 id: 'htmlFloatPanel_AyohaStore_CompanyLogo',
                                                                                 //badgeText: "2",
                                                                                 //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                                                                 html: '<div ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="80" height="65" alt="Company Name"></div>',
       
                                                                             },
       
                                                                       ]
                                                                   },
                                                                   {
                                                                       xtype: 'panel',
                                                                       width: 10
                                                                   },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '99%',
                                                                          id: 'containerFloatPanel_AyohaStore_CompanyInfo',
       
       
                                                                          margin: '0 0 0 0',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                          style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              pack: 'center',
                                                                              align: 'left',
                                                                          },
                                                                          items: [
                                                                                 {
       
                                                                                     id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Name',
                                                                                     width: '100%',
                                                                                     html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">IanMizi Technology Sdn Bhd</div>',
       
       
                                                                                 },
                                                                                  {
       
                                                                                      id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Line',
                                                                                      width: '100%',
                                                                                      margin: '0 0 0 0',
                                                                                      html: '<div style="background-color:black;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',
       
       
                                                                                  },
                                                                                  {
       
                                                                                      id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Tagline',
       
                                                                                      width: '100%',
                                                                                      // iconCls: 'list',
                                                                                      //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                                                      html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
       
       
                                                                                  },
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      id: 'containerPreviewAdvertisementButton_bottomx',
                                                                                      hidden: true,
                                                                                      width: '100%',
                                                                                      style: "background-color: transparent",
                                                                                      //style: "background-color: #F35B57;",
                                                                                      margin: '0 0 0 0',
                                                                                      layout: {
                                                                                          type: 'hbox',
                                                                                          pack: 'left',
                                                                                          align: 'left'
       
                                                                                      },
       
       
                                                                                      items: [
       
                                                                                           {
                                                                                               xtype: 'button',
                                                                                               height: 23,
                                                                                               width: 23,
                                                                                               // hidden: true,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_Location',
                                                                                               //badgeText: "2",
                                                                                               html: '<div ><img src="resources/icons/locationWhite02.png" width="13" height="13" alt="Company Name"></div>',
                                                                                               ui: 'plain',
                                                                                               handler: function () {
       
                                                                                                   var Coordinate = globalFloatPanel_PreviewAdvertisement_CoordinateLink.split(",");
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
                                                                                           },
                                                                                                {
                                                                                                    xtype: 'button',
                                                                                                    height: 23,
                                                                                                    width: 23,
                                                                                                    //hidden: true,
                                                                                                    margin: '0 0 0 0',
                                                                                                    id: 'btnFloatPanel_PreviewAdvertisementbottom_FBx',
                                                                                                    //badgeText: "2",
                                                                                                    html: '<div ><img src="resources/icons/facebookWhiteIcon.png" width="13" height="13" alt="Company Name"></div>',
                                                                                                    ui: 'plain',
                                                                                                    handler: function () {
       
       
       
       
                                                                                                        if (globalFloatPanel_PreviewAdvertisement_FBLink) {
       
                                                                                                            //  setTimeout(function () { window.open("fb://page/" + globalFloatPanel_PreviewAdvertisement_FBLink + ""); }, 25);
                                                                                                            setTimeout(function () { window.open("fb://page/" + globalFloatPanel_PreviewAdvertisement_FBLink + "", '_system'); return false; }, 25);
                                                                                                        } else {
       
                                                                                                            swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
                                                                                                        }
       
                                                                                                    }
                                                                                                },
                                                                                                 {
                                                                                                     xtype: 'button',
                                                                                                     height: 23,
                                                                                                     width: 23,
                                                                                                     margin: '0 0 0 0',
                                                                                                     // hidden: true,
                                                                                                     id: 'btnFloatPanel_PreviewAdvertisementbottom_Instax',
                                                                                                     //badgeText: "2",
                                                                                                     html: '<div ><img src="resources/icons/instagramWhiteIcon.png" width="13" height="13" alt="Company Name"></div>',
                                                                                                     ui: 'plain',
                                                                                                     handler: function () {
                                                                                                         // alert(GetEnterpriseInstagram());
       
       
       
       
       
       
       
                                                                                                         if (globalFloatPanel_PreviewAdvertisement_InstaLink) {
                                                                                                             setTimeout(function () { window.open("instagram://user?username=" + globalFloatPanel_PreviewAdvertisement_InstaLink + "", '_system'); return false; }, 25);
                                                                                                         } else {
       
                                                                                                             swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
                                                                                                         }
       
       
       
                                                                                                     }
                                                                                                 },
       
       
       
                                                                                                  //{
                                                                                                  //    //xtype: 'button',
                                                                                                  //    //align: 'stretch',
                                                                                                  //    //height: 32,
                                                                                                  //    //width: 92,
                                                                                                  //    id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                                                                  //    // ui: 'plain',
                                                                                                  //    //  window.open("http://" + url, "_blank");
                                                                                                  //    //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'
       
       
                                                                                                  //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 22px; height: 22px;" /></a>'
                                                                                                  //}
                                                                                                  {
                                                                                                      xtype: 'button',
                                                                                                      height: 23,
                                                                                                      width: 23,
                                                                                                      margin: '0 0 0 0',
                                                                                                      //  hidden: true,
                                                                                                      id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassapx',
                                                                                                      //badgeText: "2",
                                                                                                      html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatsappWhite.png" width="13" height="13" alt="Company Name"/></a>',
                                                                                                      ui: 'plain',
                                                                                                      handler: function () {
       
       
       
                                                                                                          // window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);
       
                                                                                                          //  window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);
       
       
       
       
       
                                                                                                          if (globalFloatPanel_PreviewAdvertisement_WhatsAppLink) {
                                                                                                              // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                                                                              //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                                                                              window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi", '_system'); return false;
                                                                                                              // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);
                                                                                                          } else {
                                                                                                              swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                                                                          }
       
       
       
                                                                                                      }
                                                                                                  },
                                                                                      ]
       
                                                                                  },
       
                                                                          ]
                                                                      },
       
                                                                      {
                                                                          xtype: 'button',
                                                                          id: 'btnFloatPanel_AyohaStore_SaleAnimated',
                                                                          //  badgeText: '1',
                                                                       hidden: true,
                                                                          margin: '-5 0 0 -80',
                                                                          height: 80,
                                                                          width: 80,
                                                                          html: '<img src="resources/icons/SaleThree.gif" width="70" height="70" alt="Company Name">',
                                                                          ui: 'plain',
                                                                          handler: function () {
                                                                              // NoAdvertisementCreated
                                                                              // FloatPanel_PreviewAdvertisementShow_StampCard("FloatPanel_AyohaCardManagement_AdvertisementButton");
       
                                                                              if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
                                                                                  //if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated")
                                                                                  //{
                                                                                  //    swalFireWarning("No Advertisement Created!");
                                                                                  //    return;
                                                                                  //}
                                                                                  FloatPanel_PreviewAdvertisementShow_RewardStore("FloatPanel_AyohaStore");
                                                                                  return;
                                                                              }
                                                                             
                                                                              if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
                                                                                  //if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated")
                                                                                  //{
                                                                                  //    swalFireWarning("No Advertisement Created!");
                                                                                  //    return;
                                                                                  //}
                                                                                  FloatPanel_PreviewAdvertisementShow_BurgerMenu_MyAyohaStore("BurgerMenu_MyAyohaStore")
                                                                                 
                                                                                  return;
                                                                              }
                                                                              if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
                                                                                  //if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated")
                                                                                  //{
                                                                                  //    swalFireWarning("No Advertisement Created!");
                                                                                  //    return;
                                                                                  //}
                                                                                  FloatPanel_PreviewAdvertisementShow_PushNotification("PushNotification");
                                                                                  return;
                                                                              }
       
                                                                              if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
                                                                                  //if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated")
                                                                                  //{
                                                                                  //    swalFireWarning("No Advertisement Created!");
                                                                                  //    return;
                                                                                  //}
       
                                                                                  localStorage.setItem("Floating_AdvertismentCode", globalFloatPanel_FloatingAdvertisement_AdvertismentCode);
                                                                                  FloatPanel_PreviewAdvertisementShow_FloatingAdvertisement("Floating_Advertisement");
       
                                                                                  // FloatPanel_PreviewAdvertisementShow_RewardStore("FloatPanel_AyohaStore");
                                                                                  return;
                                                                              }
                                                                              if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
       
                                                                                  FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
       
                                                                                  // FloatPanel_PreviewAdvertisementShow_RewardStore("FloatPanel_AyohaStore");
                                                                                  return;
                                                                              }
                                                                              else {
                                                                                  var index = globalDashboard_OpenAdvertisementNo;
                                                                                  openAdvertisement_fromOtherPage(index);
                                                                              }
       
       
       
                                                                          }
                                                                      }
                                                               ]
       
       
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               width: '100%',
                                                               hidden:true,
                                                               margin: '-7 0 0 0',
                                                               height: 50,
                                                               style: "background-color: transparent;",
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'start',
                                                                   align: 'center',
                                                               },
                                                               items: [
                                                                   {
                                                                       xtype: 'container',
                                                                       width: '100%',
                                                                       margin: '0 0 0 0',
                                                                       height: 50,
                                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                       style: "background-color: transparent;",
                                                                       layout: {
                                                                           type: 'hbox',
                                                                           pack: 'center',
                                                                           align: 'center'
       
                                                                       },
                                                                       scrollable: {
                                                                           direction: 'horizontal',
                                                                           directionLock: true,
                                                                           indicators: false
                                                                       },
                                                                       items: [
       
                                                                             {
                                                                                 xtype: 'container',
                                                                                 //width: 600,
                                                                                 width: 550,
                                                                                 // width: 650,
                                                                                 style: "background-color: transparent",
                                                                                 height: 50,
                                                                                 layout: {
                                                                                     type: 'hbox',
                                                                                     pack: 'center',
                                                                                     align: 'center',
                                                                                 },
                                                                                 items: [
       
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         // width: '20%',
                                                                                         flex: 1,
                                                                                         margin: '0 0 0 0',
                                                                                         height: 50,
                                                                                         id: 'containerFloatPanel_AyohaStore_TotalProduct',
                                                                                         name: 'namecontainerFloatPanel_AyohaStore_TotalProduct',
                                                                                         // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                         style: "background-color: transparent;",
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'center',
                                                                                             align: 'center'
       
                                                                                         },
                                                                                         items: [
                                                                                             {
                                                                                                 id: 'htmlFloatPanel_AyohaStore_TotalProductCount',
                                                                                                 height: 22,
                                                                                                 margin: '9 0 0 0',
                                                                                                 width: 22,
                                                                                                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                                                                                 // html: '<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>',
                                                                                             },
                                                                                             {
                                                                                                 margin: '0 0 0 0',
                                                                                                 html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Total</div>',
       
                                                                                             },
                                                                                              {
                                                                                                  margin: '-4 0 0 0',
                                                                                                  html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Product</div>',
       
                                                                                              }
                                                                                         ]
                                                                                     },
                                                                             {
                                                                                 xtype: 'container',
                                                                                 // width: '20%',
                                                                                 flex: 1,
                                                                                 margin: '0 0 0 0',
                                                                                 height: 50,
                                                                                 id: 'containerFloatPanel_AyohaStore_TotalProductCategaory',
                                                                                 name: 'namecontainerFloatPanel_AyohaStore_TotalProductCategaory',
                                                                                 // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                 style: "background-color: transparent;",
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     pack: 'center',
                                                                                     align: 'center'
       
                                                                                 },
                                                                                 items: [
                                                                                     {
                                                                                         id: 'htmlFloatPanel_AyohaStore_TotalProductCategaoryCount',
                                                                                         height: 22,
                                                                                         margin: '9 0 0 0',
                                                                                         width: 22,
                                                                                         html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                                                                         // html: '<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>',
                                                                                     },
                                                                                     {
                                                                                         margin: '0 0 0 0',
                                                                                         html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Product</div>',
       
                                                                                     },
                                                                                      {
                                                                                          margin: '-4 0 0 0',
                                                                                          html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Category</div>',
       
                                                                                      }
                                                                                 ]
                                                                             },
       
       
       
                                                                           {
                                                                               xtype: 'container',
                                                                               // width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_MembershipCard',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_MembershipCard',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_AyohaStore_MembershipCardIcon',
                                                                                       height: 22,
                                                                                       margin: '9 0 0 0',
                                                                                       width: 22,
                                                                                       html: '<div ><img src="resources/icons/membershipPurpleThree.png" width="22" height="22" alt="Company Name"></div>',
                                                                                   },
                                                                                   {
                                                                                       margin: '0 0 0 0',
                                                                                       html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Membership</div>',
       
                                                                                   },
                                                                                    {
                                                                                        margin: '-4 0 0 0',
                                                                                        id: 'htmlFloatPanel_AyohaStore_MembershipCardCount',
                                                                                        html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Card <b>(0)</b></div>',
       
                                                                                    }
                                                                               ]
                                                                           },
                                                                           {
                                                                               xtype: 'container',
                                                                               // width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_LikeStatus',
                                                                               // name: 'namecontainerFloatPanel_AyohaStore_Like',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       xtype: 'container',
                                                                                       id: 'containerFloatPanel_AyohaStore_LikeIcon',
                                                                                       name: 'namecontainerFloatPanel_AyohaStore_LikeIcon',
                                                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                       style: "background-color: transparent;",
                                                                                       height: 22,
                                                                                       width: 22,
                                                                                       layout: {
                                                                                           type: 'vbox',
                                                                                           pack: 'center',
                                                                                           align: 'center'
       
                                                                                       },
                                                                                       items: [
                                                                                           {
                                                                                               id: 'htmlFloatPanel_AyohaStore_LikeIcon',
                                                                                               height: 22,
                                                                                               margin: '9 0 0 0',
                                                                                               width: 22,
                                                                                               html: '<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>',
                                                                                           },
                                                                                       ]
                                                                                   },
       
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         id: 'containerFloatPanel_AyohaStore_LikeCount',
                                                                                         name: 'namecontainerFloatPanel_AyohaStore_LikeCount',
                                                                                         // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                         style: "background-color: transparent;",
                                                                                         margin: '8 0 0 0',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'center',
                                                                                             align: 'center'
       
                                                                                         },
                                                                                         items: [
                                                                                              {
                                                                                                  margin: '0 0 0 0',
                                                                                                  id: 'htmlFloatPanel_AyohaStore_LikeCount',
                                                                                                  html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>0</b></div>',
       
                                                                                              },
                                                                                    {
                                                                                        margin: '-4 0 0 0',
                                                                                        id: 'htmlFloatPanel_AyohaStore_LikeCountLikes',
                                                                                        html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Loves</div>',
       
                                                                                    },
                                                                                         ]
                                                                                     },
       
       
                                                                               ]
                                                                           },
       
                                                                           {
                                                                               xtype: 'container',
                                                                               //width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_ReviewAndRate',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
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
                                                                                       id: 'htmlFloatPanel_AyohaStore_ReviewAndRateCount',
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
                                                                                               id: 'htmlFloatPanel_AyohaStore_Star1',
                                                                                               height: 9,
                                                                                               width: 9,
                                                                                               html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                                                                           },
                           {
                               id: 'htmlFloatPanel_AyohaStore_Star2',
                               height: 9,
                               width: 9,
                               html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                           },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_Star3',
                                 height: 9,
                                 width: 9,
                                 html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                             },
                               {
                                   id: 'htmlFloatPanel_AyohaStore_Star4',
                                   height: 9,
                                   width: 9,
                                   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                               },
                                 {
                                     id: 'htmlFloatPanel_AyohaStore_Star5',
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
                                                                                               id: 'htmlFloatPanel_AyohaStore_ReviewByCount',
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
                                                                           {
                                                                               xtype: 'container',
                                                                               //width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_FB',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_FB',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_AyohaStore_FB',
                                                                                       height: 22,
                                                                                       margin: '9 0 0 0',
                                                                                       width: 22,
                                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                                       html: '<div ><img src="resources/icons/facebook.png" width="22" height="22" alt="Company Name"></div>',
                                                                                   },
                                                                                   {
                                                                                       margin: '1 0 0 0',
                                                                                       html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Facebook</div>',
       
                                                                                   },
       
                                                                               ]
                                                                           },
                                                                           {
                                                                               xtype: 'container',
                                                                               //width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_Insta',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_Insta',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_AyohaStore_Insta',
                                                                                       height: 22,
                                                                                       margin: '9 0 0 0',
                                                                                       width: 22,
                                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                                       html: '<div ><img src="resources/icons/instagramlogo.png" width="22" height="22" alt="Company Name"></div>',
                                                                                   },
                                                                                   {
                                                                                       margin: '1 0 0 0',
                                                                                       html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Instagram</div>',
       
                                                                                   },
       
                                                                               ]
                                                                           },
       
       
                                                                           {
                                                                               xtype: 'container',
                                                                               //width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_WhatsApp',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_AyohaStore_WhatsApp',
                                                                                       height: 22,
                                                                                       margin: '9 0 0 0',
                                                                                       width: 22,
                                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                                       html: '<div ><img src="resources/icons/whatsapp01.png" width="22" height="22" alt="Company Name"></div>',
                                                                                   },
                                                                                   {
                                                                                       margin: '1 0 0 0',
                                                                                       html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">WhatsApp</div>',
       
                                                                                   },
       
                                                                               ]
                                                                           },
       
                                                                           {
                                                                               xtype: 'container',
                                                                               //width: '20%',
                                                                               flex: 1,
                                                                               margin: '0 0 0 0',
                                                                               height: 50,
                                                                               id: 'containerFloatPanel_AyohaStore_Location',
                                                                               name: 'namecontainerFloatPanel_AyohaStore_Location',
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
       
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_AyohaStore_WhatsApp',
                                                                                       height: 22,
                                                                                       margin: '9 0 0 0',
                                                                                       width: 22,
                                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                                       html: '<div ><img src="resources/icons/locationTwo.png" width="22" height="22" alt="Company Name"></div>',
                                                                                   },
                                                                                   {
                                                                                       margin: '1 0 0 0',
                                                                                       html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Location</div>',
       
                                                                                   },
       
                                                                               ]
                                                                           },
       
       
                                                                                 ]
                                                                             },
       
       
       
       
                                                                       ]
                                                                   }
       
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
           id: 'containerFloatPanel_AyohaStoreMasterHeaderTop',
           // hidden:true,
           width: '100%',
           height: 30,
           docked: 'top',
           //  zIndex: 90,
       
           // style: "background-color: transparent;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;",
           // style: 'border-bottom:1px solid #D25959;background-color:transparent',
           //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
           // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
           style: {
               // background: '#D25959',
               background: 'transparent',
               // border: '2px'
           },
           layout: {
               type: 'hbox',
               pack: 'center',
               align: 'left'
       
           },
           items: [
               {
                   xtype: 'container',
                   margin: '-17 0 0 0',
                   id: 'containerFloatPanel_AyohaStoreMasterHeader',
                   width: '100%',
                   height: 30,
                   // style: "background-color: white",
                   style: 'border-bottom:1px none #D25959;background-color:transparent',
                 //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                   // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                   //style: "background-color: #F35B57;",
       
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'left'
       
                   },
                   items: [
       
       
       
                           //    {
                           //             xtype: 'panel',
                           //             width: 11
                           //         },
                                {
                                    id: 'htmlFloatPanel_AyohaStore_SearchProduct',
                                    margin: '0 0 0 0',
                                    height: 30,
                                    // zIndex: -10,
                                    width: '78%',
                                    // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                    // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                    html: '<input type="text" id="input-FloatPanel_AyohaStore_SearchProduct" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="Search Product">',
                                },
       
                                 {
                                     xtype: 'button',
                                     id: 'btn_FloatPanel_AyohaStoreMasterHeader_DotMenu',
                                     //  badgeText: '1',
                                     margin: '2 0 0 5',
                                     hidden: true,
                                     height: 26,
                                     width: 40,
                                     html: '<img src="resources/icons/MenuDotPurple01.png" style="width:5px;height:16px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {
                                         globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Shrink";
                                         FloatPanel_AyohaStore_DotMenuItemShow();
                                     }
                                 },
                               //    {
                               //        xtype: 'panel',
                               //        width: 11
                               //    },
       
       
       
                     
       
                   ]
       
               },
           ]
       },
       
       
       //ayoha store
       {
           xtype: 'container',
           id: 'containerFloatPanel_AyohaStore_SaleItemMaster',
           style: ' background-color: white',
           // margin: '-11 0 0 0',
           height: '100%',
           width: '100%',
           layout: {
               type: 'vbox',
               pack: 'start',
               align: 'center'
       
           },
        
           items: [
               {
                   xtype: 'container',
                   id: 'containerFloatPanel_AyohaStore_SaleItem',
                   style: ' background-color: transparent',
                   // margin: '-11 0 0 0',
                   height: '100%',
                   width: '100%',
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
              
       
                   
       
                       {
       
       
                           xtype: 'list',
                           hidden:true,
                           width: '50%',
                           // height: '64%',
                           // height: '100%',
                           // height: 200,
                           //   flex: 2,
                           store: _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore,
                           id: 'FloatPanel_AyohaStore_SaleItemList',
                           mode: 'SINGLE',
                           disableSelection: true,
                           grouped: true,
                           plugins: [
                   {
                       xclass: 'Ext.plugin.PullRefresh',
                       pullText: 'Pull down untill..',
       
                   }
                           ],               
       
              //             itemTpl: '<div class="myContent" style="background-color:black;width:108%;height:148px;">' +
       
              //                                                                                                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:black;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')"  src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{row_num}).{ItemName}</div><br><div  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">{ModifiedPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
       
              //+ '</div>'
              //             // + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStoreMerchant_ItemDelete({ID})" class="buttonsHtmlBgTransparent" style="margin:0px -35px 0px 0px;height:32px;width:32px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px -70px;"></button><button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ')"  class="buttonsHtmlBgTransparent" style="margin:0px -15px 0px 0px;height:32px;width:32px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button></div>',
              //             + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;height:22px;">{ModifiedShowStock}<button OnClick="FloatPanel_AyohaStoreMerchant_ItemDelete({ID})" class="buttonsHtmlBgTransparent" style="margin:0px -35px 0px 0px;height:32px;width:32px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px -70px;"></button><button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')"  class="buttonsHtmlBgTransparent" style="margin:0px -15px 0px 0px;height:32px;width:32px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button></div>',
       
       
       
                           itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                             
                               
       
       
                                                                                                             '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')"  src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{row_num}).{ItemName}</div><br><div  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">{ModifiedPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
       
             + '</div>'
                          // + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStoreMerchant_ItemDelete({ID})" class="buttonsHtmlBgTransparent" style="margin:0px -35px 0px 0px;height:32px;width:32px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px -70px;"></button><button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ')"  class="buttonsHtmlBgTransparent" style="margin:0px -15px 0px 0px;height:32px;width:32px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button></div>',
                          + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;height:22px;">{ModifiedShowStock}<button OnClick="FloatPanel_AyohaStoreMerchant_ItemDelete({ID})" class="buttonsHtmlBgTransparent" style="margin:0px -35px 0px 0px;height:32px;width:32px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px -70px;"></button><button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')"  class="buttonsHtmlBgTransparent" style="margin:0px -15px 0px 0px;height:32px;width:32px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button></div>'+
                          
                          '{ModifiedDiscount}',
       
                           emptyText: '<div class="myContent">No Sale Item</div>',
                           width: '100%',                   
                           listeners: {
       
       
                               itemdoubletap: function (dataview, index, target, record, e, eOpts) {
       
       
                               },
       
                               itemsingletap: function (dataview, index, target, record, e, eOpts) {
       
                               }
                           }
       
       
                       },
       
                       {
                           xtype: 'container',
                           id: 'containerFloatPanel_AyohaStore_SaleItemListColThreeScroll',
                           style: 'background-color: white',
                           // hidden: true,
                           margin: '0 0 0 130',
                           height: '100%',
                           width: '100%',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
       
                           },
                           //scrollable: {
                           //    direction: 'vertical',
                           //    directionLock: true,
                           //    indicators: false
                           //},
                           items: [
                                
       
                                     {
                                         
                                             id: 'tableFloatPanel_AyohaStore_SaleItemListColThree',
                                         store: _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore,
                                        // grouped: true,
                                         xtype: 'dataview',
                                         // xtype: 'list',
                                         //height: 815,
                                         scrollable: true,
                                         indicators: false,
                                         inline:true,
                                         width: '100%',
                                         plugins: [
                          {
                              xclass: 'Ext.plugin.PullRefresh',
                              pullText: 'Pull down untill..',
       
                          }
                                         ],
                                         //cls: 'dataview-inline',
                                         cls: 'dataview-item',
                                        
                                       
                                        // itemTpl: '<div  OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{ModifiedDiscountCol}</div>{ModifiedItemCoverImg}</div>',
                                         itemTpl: '<div  OnClick="FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ')">{ModifiedDiscountCol}</div>{ModifiedItemCoverImg}</div>',
       
       
                                     },
       
       
       
                           ]
                       },
       
       
                   ]
       
               },
           ]
       
       },
       
       
       
                        ]
       
                    },
                ]
            },
             




         ]















     });
    return _FloatPanel_AyohaStore;



}



function FloatPanel_AyohaStoreShow() {
  
    Ext.Viewport.remove(_FloatPanel_AyohaStore);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore, "isFloatPanel_AyohaStoreOpen");
    isFloatPanel_AyohaStoreOpen = 'Y';
    //FloatPanel_AyohaStoreAdjustHeight();
    //globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    //Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyLogo').setHtml('<div ><img src="' + globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath + '" style="width:78px;height:78px;border-radius:50%;background-color:black;border:2px solid white" alt="Company Name"></div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyInfo_Name').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + globalFloatPanel_PreviewAdvertisement_EnterpriseName + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_PreviewAdvertisement_AdvertisementTitle + '</div>');
    //FloatPanel_AyohaStore_initTapListner_SocialMedia();
    //FloatPanel_AyohaStore_initTapListner_RateReview();
    //FloatPanel_AyohaStore_initTapListner_MembershipCard();
    //FloatPanel_AyohaStore_CalculateRating();





    Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyLogo').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:78px;height:78px;border-radius:50%;background-color:black;border:2px solid white" alt="Company Name"></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyInfo_Name').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CompanyInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + FloatPanel_AyohaStore_getEnterpriseTagLine() + '</div>');
    // FloatPanel_AyohaStore_initTapListner_SocialMedia();
    // FloatPanel_AyohaStore_initTapListner_RateReview();
    // FloatPanel_AyohaStore_initTapListner_MembershipCard();
    // FloatPanel_AyohaStore_initTapListner_LoveStatus();
    // FloatPanel_AyohaStore_initTapListner_ProductCategory();
    // FloatPanel_AyohaStore_CalculateRating();
    //// FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");







    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.clearFilter();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _DataStore_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    _DataStore_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsed');
    _DataStore_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {


        FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");

        Ext.Viewport.setMasked(false);










    });
    task.delay(500);
   
    FloatPanel_PreviewAdvertisementHide();
  
    //FloatPanel_AyohaStore_FloatCartShow();
    // FloatPanel_AyohaStore_AyohaStoreAnalsysInsertUpdate();

    //var EntAccNo = FloatPanel_AyohaStore_getEnterpriseAccNo();

    //Dashboard_VisitorAnalsysInsertUpdate("AyohaStore", "NA", EntAccNo);
    Gnerate_VisitorAnalsysChart();

    if(isFloatPanel_OpenAccountStepOpen=='Y'){
        Ext.getCmp('htmlFloatPanel_AyohaStore_SettingNewItem').setHtml('<div class="blink_me"><button OnClick="FloatPanel_AyohaStore_DotMenuItemShow();" class="buttonAddNewDeliveryCharge">Settings New Item</button></div>');
    }

}


function FloatPanel_AyohaStore_initTapListner_SocialMedia() {


    // globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";



    var WhatsAppLink = FloatPanel_AyohaStore_getWhatsAppLink();
    var FBLink = FloatPanel_AyohaStore_getFBLink();
    var InstaLink = FloatPanel_AyohaStore_getInstaLink();
    var CoordinateLink = FloatPanel_AyohaStore_getCoordinateLink();







    if (WhatsAppLink) {
        Ext.getCmp('containerFloatPanel_AyohaStore_WhatsApp').setHidden(false);
        var containerViewnamecontainerFloatPanel_AyohaStore_WhatsApp = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_WhatsApp]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_WhatsApp = containerViewnamecontainerFloatPanel_AyohaStore_WhatsApp.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_WhatsApp.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_PreviewAdvertisement_OpenWhatsApp();
          }
        );

    } else {
        Ext.getCmp('containerFloatPanel_AyohaStore_WhatsApp').setHidden(true);
    }

    if (FBLink) {
        Ext.getCmp('containerFloatPanel_AyohaStore_FB').setHidden(false);
        var containerViewnamecontainerFloatPanel_AyohaStore_FB = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_FB]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_FB = containerViewnamecontainerFloatPanel_AyohaStore_FB.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_FB.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_PreviewAdvertisement_OpenFB();
          }
        );
    } else {
        Ext.getCmp('containerFloatPanel_AyohaStore_FB').setHidden(true);
    }

    if (InstaLink) {
        Ext.getCmp('containerFloatPanel_AyohaStore_Insta').setHidden(false);
        var containerViewnamecontainerFloatPanel_AyohaStore_Insta = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_Insta]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_Insta = containerViewnamecontainerFloatPanel_AyohaStore_Insta.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_Insta.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_PreviewAdvertisement_OpenInsta();
          }
        );
    } else {
        Ext.getCmp('containerFloatPanel_AyohaStore_Insta').setHidden(true);
    }
    if (CoordinateLink) {
        Ext.getCmp('containerFloatPanel_AyohaStore_Location').setHidden(false);
        var containerViewnamecontainerFloatPanel_AyohaStore_Location = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_Location]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_Location = containerViewnamecontainerFloatPanel_AyohaStore_Location.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_Location.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_PreviewAdvertisement_OpenLocation();
          }
        );
    } else {
        Ext.getCmp('containerFloatPanel_AyohaStore_Location').setHidden(true);
    }











}



function FloatPanel_AyohaStore_initTapListner_RateReview() {
    var containerViewnamecontainerFloatPanel_AyohaStore_ReviewAndRate = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_ReviewAndRate]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_ReviewAndRate = containerViewnamecontainerFloatPanel_AyohaStore_ReviewAndRate.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_ReviewAndRate.on('tap',
      function (event, node, options, eOpts) {

          AyohaMerchantReviewShow_FromAyohaStore();
      }
    );
}


function FloatPanel_AyohaStore_initTapListner_MembershipCard() {
    var containerViewnamecontainerFloatPanel_AyohaStore_MembershipCard = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_MembershipCard]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_MembershipCard = containerViewnamecontainerFloatPanel_AyohaStore_MembershipCard.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_MembershipCard.on('tap',
      function (event, node, options, eOpts) {

          //FloatPanel_OpenMembershipCard();
          FloatPanel_MembershipCardManagementShow();
      }
    );
}

function FloatPanel_AyohaStore_initTapListner_LoveStatus() {
    var containerViewnamecontainerFloatPanel_AyohaStore_LikeIcon = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_LikeIcon]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_LikeIcon = containerViewnamecontainerFloatPanel_AyohaStore_LikeIcon.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_LikeIcon.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_LikeStatusListShow();
          //FloatPanel_AyohaStore_LikeDislikeStore();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaStore_LikeCount = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_LikeCount]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_LikeCount = containerViewnamecontainerFloatPanel_AyohaStore_LikeCount.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_LikeCount.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_LikeList();
      }
    );
}

function FloatPanel_AyohaStore_initTapListner_ProductCategory() {
    var containerViewnamecontainerFloatPanel_AyohaStore_TotalProductCategaory = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_TotalProductCategaory]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_TotalProductCategaory = containerViewnamecontainerFloatPanel_AyohaStore_TotalProductCategaory.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_TotalProductCategaory.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_ItemCategoryShow();
      }
    );

    var containerViewnamecontainerFloatPanel_AyohaStore_ProductCategory = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_ProductCategory]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_ProductCategory = containerViewnamecontainerFloatPanel_AyohaStore_ProductCategory.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_ProductCategory.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_ItemCategoryShow();
      }
    );



    var containerViewnamecontainerFloatPanel_AyohaStoreMyCart = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStoreMyCart]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStoreMyCart = containerViewnamecontainerFloatPanel_AyohaStoreMyCart.element;
    containerViewElnamecontainerFloatPanel_AyohaStoreMyCart.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_CartShow();
      }
    );




    var containerViewnamecontainerFloatPanel_AyohaStore_TotalProduct = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_TotalProduct]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_TotalProduct = containerViewnamecontainerFloatPanel_AyohaStore_TotalProduct.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_TotalProduct.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore('firstload');
          
      }
    );

}



function FloatPanel_AyohaStore_CalculateRating() {
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });
    var EnterpriseAccNumber = FloatPanel_AyohaStore_getEnterpriseAccNo();
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement")
    //{
    //    EnterpriseAccNumber = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
    //    EnterpriseAccNumber = globalDashboardVIAAdvertisement_EnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
    //    EnterpriseAccNumber = globalStampCampaignEnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
    //    EnterpriseAccNumber = globalFloatPanel_RewardStore_EnterpriseAccNo;
    //}



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNumber
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

                            Ext.getCmp('htmlFloatPanel_AyohaStore_ReviewAndRateCount').setHtml('<div style="color:black;text-align: center;font-size:20px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_ReviewAndRateCount').setHtml('<div style="color:black;text-align: center;font-size:20px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                        Ext.getCmp('htmlFloatPanel_AyohaStore_ReviewByCount').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;' + TotalVoter + ' Reviews</div>');

                        //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);



                        if (RateReviews == 5) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                        }


























                        //var task = Ext.create('Ext.util.DelayedTask', function () {

                        //    setDashBoardMerchantReviewRate();
                        //});

                        //task.delay(500);





                        // globalAyohaMerchantReviewRating = Math.round(TotalAvg);
                        // globalAyohaMerchantReviewRating = TotalAvg.toFixed(1);



                        // console.log(globalAyohaMerchantReviewRating);
                        // --20 + 8 + 9 + 2 + 1 / 11
                        FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(EnterpriseAccNumber);
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








function FloatPanel_AyohaStoreShow_VIA() {
    globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
    FloatPanel_AyohaStoreShow();
}


function FloatPanel_AyohaStoreShow_AyohaMerchant() {
    globalFloatPanel_AyohaStore_ModuleTagging = "AyohaMerchant";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}


function FloatPanel_AyohaStoreShow_FromStampCard() {
    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
    FloatPanel_AyohaStoreShow();
}

function FloatPanel_AyohaStoreShow_FromPushNotification() {
    globalFloatPanel_AyohaStore_ModuleTagging = "PushNotification";
    FloatPanel_AyohaStoreShow();
}
function FloatPanel_AyohaStoreShow_FloatingAdvertisement() {
    globalFloatPanel_AyohaStore_ModuleTagging = "Floating_Advertisement";
    FloatPanel_AyohaStoreShow();
}



function FloatPanel_OpenMembershipCard() {

    var a = parseInt(globalFloatPanel_AyohaStore_CountMembershipCard);
    console.log(globalFloatPanel_AyohaStore_MembershipApprovalStatus);
    if (a <= 0) {

        swalFireHoorayMessage("Sorry!,This merchant not create membership card");
        return
    } if (a == 1) {

        if (globalFloatPanel_AyohaStore_MembershipApprovalStatus == "APPROVED") {
            globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
            var Entbb = FloatPanel_AyohaStore_getEnterpriseAccNo();
            var mcc = globalFloatPanel_AyohaStore_MembershipCardCode;
            FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(Entbb, Entbb, mcc, 0);
            setTimeout(function () {
                Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
            }, 1000);
        }

        if (globalFloatPanel_AyohaStore_MembershipApprovalStatus == "NotSubscribed") {
            // globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
            var Entb = FloatPanel_AyohaStore_getEnterpriseAccNo();
            FloatPanel_RewardStoreMembershipCardShow_FromAyohaStore(Entb, Entb);
        }

        if (globalFloatPanel_AyohaStore_MembershipApprovalStatus == "REQUEST") {
            // globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
            FloatPanel_MembershipCardList_MyMembershipCardShow();
            swalFireHoorayMessage("Hello!,this Membership card still not approved.do contact merchant for enquiry.")
        }

        return
    } if (a > 1) {
        var Entb = FloatPanel_AyohaStore_getEnterpriseAccNo();
        FloatPanel_RewardStoreMembershipCardShow_FromAyohaStore(Entb, Entb);
        return
    }

}





function FloatPanel_AyohaStore_getWhatsAppLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAPICContactNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        result = globalFloatPanel_RewardStore_PICContactNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_WhatsApp;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        //100000820630805 | fareha_cheras | NA | +60124355773
        var SocialMedia = GetCurrEnterpriseSocialMediaLink().split("|");
        var SM = SocialMedia[3];
        if (SM != 'NA') {
            result = SM;
        } else {
            result = '';
        }

    }

   
    return result;

}




function FloatPanel_AyohaStore_getFBLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAEnterpriseFacebookUrl;

    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        result = globalFloatPanel_RewardStore_EnterpriseFacebook;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_FB;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        //100000820630805 | fareha_cheras | NA | +60124355773
        var SocialMedia = GetCurrEnterpriseSocialMediaLink().split("|");
        var SM = SocialMedia[0];
        if (SM != 'NA') {
            result = SM;
        } else {
            result = '';
        }

    }
    return result;

}



function FloatPanel_AyohaStore_getInstaLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAEnterpriseInstagramUrl;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        result = globalFloatPanel_RewardStore_EnterpriseInstagram;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_Insta;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        //100000820630805 | fareha_cheras | NA | +60124355773
        var SocialMedia = GetCurrEnterpriseSocialMediaLink().split("|");
        var SM = SocialMedia[1];
        if (SM != 'NA') {
            result = SM;
        } else {
            result = '';
        }

    }
    return result;

}




function FloatPanel_AyohaStore_getCoordinateLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalEnterpriseCoordinate;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_Location;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        //100000820630805 | fareha_cheras | NA | +60124355773
        var SocialMedia = GetCurrEnterpriseSocialMediaLink().split("|");
        var SM = SocialMedia[2];
        if (SM != 'NA') {
            result = SM;
        } else {
            result = '';
        }

    }
    return result;

}


var countLikeDislikeTap = 0;
var ttlcountlike;
var countlikes;
var likedStatus;
function FloatPanel_AyohaStore_LikeDislikeStore() {
    countLikeDislikeTap++;


    var likedislike = Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').getHtml('<div ><img src="resources/icons/likeOff.png" width="22" height="22" alt="Company Name"></div>');
    if (likedislike == '<div ><img src="resources/icons/likeOff.png" width="22" height="22" alt="Company Name"></div>') {
        countlikes = globalFloatPanel_AyohaStore_CountLike + 1;
        Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + countlikes + '</b></div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>');
        likedStatus = "Y";


    } if (likedislike == '<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>') {
        countlikes = globalFloatPanel_AyohaStore_CountLike - 1;
        Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + countlikes + '</b></div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/likeOff.png" width="22" height="22" alt="Company Name"></div>');
        likedStatus = "N";

    }

    globalFloatPanel_AyohaStore_CountLike = countlikes;


}


function FloatPanel_AyohaStore_LikeDislikeStore_Save() {
    if (countLikeDislikeTap == 0) {
        return
    }

    var objn = {
        "SubscriberAccNo": GetCurrentUserAccountNo(),
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "isLike": likedStatus
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLikeStatusInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();



                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
                //var task = Ext.create('Ext.util.DelayedTask', function () {


                //    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
                //    Ext.Viewport.unmask();
                //});
                //Ext.Viewport.unmask();
                //task.delay(500);

            }
            else {

                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!");
            Ext.Viewport.unmask();
        }

    });
}

function FloatPanel_AyohaStore_LikeList() {
    FloatPanel_AyohaStore_LikeStatusListShow();
}


var globalFloatPanel_AyohaStore_ModuleTagging;









var globalFloatPanelAyohaStore_MembershipCardCount;
var globalFloatPanelAyohaStore_SaleItemCode;

var globalFloatPanelAyohaStore_MembershipCardImage;
var globalFloatPanelAyohaStore_MembershipCardName;
var globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount;
var globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;
function FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(EntAccNo) {
    var tempSumPrice;
    _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrentUserAccountNo());
    _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.getProxy().setExtraParam('EnterpriseAccNo', EntAccNo);
    _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemAyohaStoreFrontPage');
    _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.load();
  

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var CountProduct = _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.getCount();
       

        if (CountProduct > 0) {

            var Store = _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore.getAt(0);

            globalFloatPanel_AyohaStore_CountItemCategory = Store.get('CountItemCategory');
            globalFloatPanel_AyohaStore_CountItem = Store.get('CountItem');
            globalFloatPanel_AyohaStore_CountLike = Store.get('CountLike');
            globalFloatPanel_AyohaStore_CountMembershipCard = Store.get('CountMembershipCard');
            globalFloatPanel_AyohaStore_MembershipCardCode = Store.get('MembershipCardCode');
            globalFloatPanel_AyohaStore_MembershipApprovalStatus = Store.get('MembershipApprovalStatus');
            globalFloatPanel_AyohaStore_isLikeStatus = Store.get('isLikeStatus');
            globalFloatPanel_AyohaStore_CartTotalItemQuantity = Store.get('CartTotalItemQuantity');
            // globalFloatPanel_AyohaStore_CartSumItemSumPrice = Store.get('CartSumItemSumPrice');
            tempSumPrice = Store.get('CartSumItemSumPrice');
            countlikes = globalFloatPanel_AyohaStore_CountLike;

            if (tempSumPrice == "0.00") {
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = "00.00";
            } else {
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = tempSumPrice;
            }

            // alert(globalFloatPanel_AyohaStore_CartSumItemSumPrice);
            if (globalFloatPanel_AyohaStore_CartSumItemSumPrice.length >= 6) {
                Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
            }
            if (globalFloatPanel_AyohaStore_CartSumItemSumPrice.length < 6) {
                Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
            }



           
            //  Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + CountProduct + '</div>');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_CountItem + '</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCategaoryCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_CountItemCategory + '</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_MembershipCardCount').setHtml('<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Card (<b>' + globalFloatPanel_AyohaStore_CountMembershipCard + '</b>)</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + globalFloatPanel_AyohaStore_CountLike + '</b></div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM' + globalFloatPanel_AyohaStore_CartSumItemSumPrice + '</div>');
            // Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');

            if (globalFloatPanel_AyohaStore_CartTotalItemQuantity == 1) {
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeTextItem').setHtml('<div class="blink_me" style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>');
            }

            if (globalFloatPanel_AyohaStore_CartTotalItemQuantity >= 1) {
                Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div class="blink_me" style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:purple;text-align:center;" >RM' + globalFloatPanel_AyohaStore_CartSumItemSumPrice + '</div>');
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div class="blink_me" style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');
                Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setStyle('border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color:purple;border-radius: 50%;')
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeTextItem').setHtml('<div class="blink_me" style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Items</div>');
                Ext.getCmp('containerFloatPanel_AyohaStoreMyCart').setStyle('border-right:1px solid purple;border-left:1px solid purple;border-bottom:1px solid purple;border-top:1px solid purple ;background: white;border-radius: 10px 10px 10px 10px;');
            }

        //    Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>');





            if (countlikes<0) {
                Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/likeOff.png" width="22" height="22" alt="Company Name"></div>');
            } else {
                Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/likeOn.png" width="22" height="22" alt="Company Name"></div>');
            }

        }


    

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}

var globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus;

function FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(ItemCategoryCode) {
    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getProxy().setExtraParam('ItemCategoryCode', ItemCategoryCode);
  //  _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrentUserAccountNo());
    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsed');
    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.load();


    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count =parseInt(_DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getCount());
        var Store = _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getAt(0);

        if (Count > 0) {
            globalFloatPanelAyohaStore_MembershipCardCount = parseInt(Store.get('AyohaUser_MembershipCardCount'));
            globalFloatPanelAyohaStore_SaleItemCode = Store.get('SaleItemCode');
            globalFloatPanelAyohaStore_MembershipCardImage = Store.get('MembershipCardImage');
            globalFloatPanelAyohaStore_MembershipCardName = Store.get('MembershipCardName');
            globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount = parseInt(Store.get('AyohaUser_MembershipCardUsedCount'));
            globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = Store.get('MembershipCardCode');
            //alert(globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
            //console.log(globalFloatPanelAyohaStore_MembershipCardCount);//2
            //console.log(globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount);//1
            Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + Count + '</div>');
            if (globalFloatPanelAyohaStore_MembershipCardCount >= 2 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Not Select Any Card";
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me_sendNow" src="resources/icons/MembershipCardDetail.png" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div class="blink_me_sendNow" style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Member Card!</div><br><div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>');

            }
            if (globalFloatPanelAyohaStore_MembershipCardCount >= 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 1) {
                globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Has Select One Card";
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<div class="blink_me_sendNow"><img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name"></div>');
                //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div class="blink_me_sendNow" style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>');


            }
            if (globalFloatPanelAyohaStore_MembershipCardCount == 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "DefaultCard";
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me_sendNow" src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div class="blink_me_sendNow" style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>');

            }
            if (globalFloatPanelAyohaStore_MembershipCardCount == 0 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "NotMember_NoMembershipCard";
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me_sendNow" src="resources/icons/CancelMembershipCard.png" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div class="blink_me_sendNow" style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Card!</div><br><div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>');


            }


            console.log("globalFloatPanelAyohaStore_MembershipCardCount:" + globalFloatPanelAyohaStore_MembershipCardCount)
            console.log("globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount:" + globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount)
        }
       

       
        FloatPanel_AyohaStoreAdjustHeight();
        //console.log(globalFloatPanelAyohaStore_MembershipCardCount);
        //console.log(globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount);

        //alert(globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode)
        document.getElementById("input-FloatPanel_AyohaStore_SearchProduct").addEventListener("keyup", OnKeyUpFloatPanel_AyohaStore_SearchProduct);
       // _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.clearFilter();
        
        LoadingPanelHide();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStoreHide() {

    if (isFloatPanel_AyohaStoreOpen == 'Y') {
        _FloatPanel_AyohaStore.hide(); isFloatPanel_AyohaStoreOpen = 'N';
        _FloatPanel_AyohaStore_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaStoreHide()");
        FloatPanel_AyohaStore_LikeDislikeStore_Save();
    }
   
}




var globalFloatPanel_AyohaStoreAdjustHeight_containerFloatPanel_AyohaStore_SaleItemListThreeColInside;
var globalFloatPanel_AyohaStoreAdjustHeight;
function FloatPanel_AyohaStoreAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

   var newHeights = x - 196;
   // var newHeights = y - 266;

    //Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(x + 20);
   Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(newHeights - 4);

  
   Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(x + 6);
   globalFloatPanel_AyohaStoreAdjustHeight = newHeights - 4;
   var FloatPanel_AyohaStore_SaleItemListColThreeHeight = newHeights + 54;
   Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHeight(FloatPanel_AyohaStore_SaleItemListColThreeHeight);
   Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemListColThreeScroll').setHeight(FloatPanel_AyohaStore_SaleItemListColThreeHeight);
   

   // Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(y - 64);
    //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(newHeights);
    //514alert(newHeights)
    //780alert(y)
    //716
    globalFloatPanel_AyohaStoreAdjustHeight_containerFloatPanel_AyohaStore_SaleItemListThreeColInside = newHeights - 4;
    
   // alert(FloatPanel_AyohaStore_SaleItemListColThreeHeight)
  
}

//function FloatPanel_AyohaStoreAdjustHeight_Extended() {
//    var y = parseInt(screen.height);
//    var x = parseInt(window.innerHeight);
//    originalX = parseInt(window.innerHeight);

//    // var newHeights = x - 196;
//    var newHeights = y - 266;

//    //Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(x + 20);
//    //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(newHeights - 4);
//    //Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(x + 6);

//    Ext.getCmp('FloatPanel_AyohaStoreID').setHeight(y - 64);
//    Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(newHeights);
//    Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHeight(newHeights);
//    alert(newHeights)
    
//   // Ext.getCmp('DashboardID').setHeight(newHeights);
    
//    //514alert(newHeights)
//    //780alert(y)
//    //716
//    globalFloatPanel_AyohaStoreAdjustHeight_containerFloatPanel_AyohaStore_SaleItemListThreeColInside = newHeights - 4;
//    //alert(newHeights)
//    //alert(y - 60)
//}


function FloatPanel_AyohaStore_getEnterpriseAccNo() {

    var EntAccNo;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        EntAccNo = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        EntAccNo = globalDashboardVIAAdvertisement_EnterpriseAccNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        EntAccNo = globalStampCampaignEnterpriseAccNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        EntAccNo = globalFloatPanel_RewardStore_EnterpriseAccNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        EntAccNo = globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        EntAccNo = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
    }

    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        EntAccNo = GetEnterpriseAccNo();
    }
    return EntAccNo;
}

function FloatPanel_AyohaStore_getEnterpriseLogo() {

    var EntLogo;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        EntLogo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        EntLogo = globalDashboardVIAAdvertisement_EnterpriseLogoPath;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        EntLogo = globalStampCampaignEnterpriseLogo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        EntLogo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
        
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        EntLogo = globalFloatPanel_FloatingAdvertisement_CompanyLogo;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        EntLogo = globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
    }

    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        EntLogo = GetEnterpriseLogoPath();
    }
    return EntLogo;
}


function FloatPanel_AyohaStore_getEnterpriseName() {

    var EntName;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        EntName = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        EntName = globalDashboardVIAAdvertisement_EnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        EntName = globalStampCampaignEnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        EntName = globalFloatPanel_RewardStore_EnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        EntName = globalFloatPanel_FloatingAdvertisement_CompanyName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        EntName = globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        EntName = GetEnterpriseName();
    }
    return EntName;
}

function FloatPanel_AyohaStore_getEnterpriseTagLine() {

    var EntTagLine;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        EntTagLine = globalFloatPanel_PreviewAdvertisement_AdvertisementTitle;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        EntTagLine = globalDashboardVIAAdvertisement_AdvertisementTitle;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        EntTagLine = globalStampCampaignAdvertisementTitle;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        EntTagLine = globalFloatPanel_FloatingAdvertisement_AdvertismentTitle;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        EntTagLine = globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "BurgerMenu_MyAyohaStore") {
        EntTagLine = GetCurrEnterpriseTagLine();
    }

    return EntTagLine;
}


function FloatPanel_AyohaStore_AddToCart(ID, ItemCode, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode) {
    var val = document.getElementById("input-FloatPanel_AyohaStore_Qty" + ID).value;

    if (MembershipCardCode == "NotMember") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>We require every user to be a member of each of our online stores, so that we can double the rewards for you.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()

                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (MembershipCardCode == "NoMembershipCard") {
        swalFireWarning("This Merchant not create membership card!,Cannot procced.");
        return;
    }

    if (val) {


        var Qty = parseInt(val);

        if (Qty <= 0) {
            return;
        }
        var MerchantPoints = parseFloat(MerchantPoint);
        var MerchantSumStamp;
        var AyohaPoints = parseFloat(AyohaPoint);
        var ItemPrices = parseFloat(ItemPrice);
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        if (CampaignType == "Stamp Reward Loyalty Card") {
            TTlMerchantPoint = 0.00;
            TTlAyohaPoint = Qty * AyohaPoint;
            MerchantSumStamp = 1;
        }
        if (CampaignType == "Point Reward Loyalty Card") {
            TTlMerchantPoint = (ItemPrice * Qty) * MerchantPoint;
            TTlAyohaPoint = (ItemPrice * Qty) * AyohaPoint;
            MerchantSumStamp = 0;
        }
        SumPrice = ItemPrice * Qty;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint);

    } else {

    }


    // AC.LoyaltyRewardType, AC.MerchantSumPoint, AC.AyohaSumPoint, AC.MerchantSumStamp
}

var arrFloatPanel_AyohaStore_ItemCoverImg = [];
var arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck = [];
var arrFloatPanel_AyohaStore_ItemCode = [];
var arrFloatPanel_AyohaStore_ItemName = [];
var arrFloatPanel_AyohaStore_ItemPrice = [];
var arrFloatPanel_AyohaStore_MerchantPoint = [];
var arrFloatPanel_AyohaStore_AyohaPoint = [];
var arrFloatPanel_AyohaStore_CampaignType = [];
var arrFloatPanel_AyohaStore_MembershipCardCode = [];
var arrFloatPanel_AyohaStore_ID = [];
function FloatPanel_AyohaStore_setSaleListItemColStyle() {

    var Store;
    var count = _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getCount();
    var td;
    var tr;
    var tdcount = 0;
    var Imgs1;
    var Imgs2;
    var Imgs3;

   
    if (count <= 0) {
        return;
    }


    arrFloatPanel_AyohaStore_ItemCoverImg.length = 0;
    arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.length = 0;
    arrFloatPanel_AyohaStore_ItemCode.length = 0;


    arrFloatPanel_AyohaStore_ItemName.length = 0;
    arrFloatPanel_AyohaStore_ItemPrice.length = 0;
    arrFloatPanel_AyohaStore_MerchantPoint.length = 0;


    arrFloatPanel_AyohaStore_AyohaPoint.length = 0;
    arrFloatPanel_AyohaStore_CampaignType.length = 0;
    arrFloatPanel_AyohaStore_MembershipCardCode.length = 0;
    arrFloatPanel_AyohaStore_ID.length = 0;
    for (i = 0; i < count; i++) {
        Store = _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.getAt(i);
        arrFloatPanel_AyohaStore_ItemCoverImg.push(Store.get('ItemCoverImg'));
        //arrFloatPanel_AyohaStore_ItemCode.push(Store.get('ItemCode'));
        //arrFloatPanel_AyohaStore_ItemName.push(Store.get('ItemName'));
        arrFloatPanel_AyohaStore_ItemPrice.push(Store.get('ItemPrice'));
        //arrFloatPanel_AyohaStore_MerchantPoint.push(Store.get('MerchantPoint'));
        //arrFloatPanel_AyohaStore_AyohaPoint.push(Store.get('AyohaPoint'));
        //arrFloatPanel_AyohaStore_CampaignType.push(Store.get('CampaignType'));
        //arrFloatPanel_AyohaStore_MembershipCardCode.push(Store.get('MembershipCardCode'));
        arrFloatPanel_AyohaStore_ID.push(Store.get('ID'));

      

    }

    //        Ext.getCmp('FloatPanel_AyohaStore_SaleItemListColThree').setItemTpl('<div class="myContent" style="background-color:black;width:108%;height:148px;">' +
    //'<table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 0] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 1] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 2] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td></tr></thead></table>'

    //     + '</div>');
    var rows = arrFloatPanel_AyohaStore_ItemCoverImg.length / 3;
    var resultRow = Math.ceil(rows);


    var loopingcol = arrFloatPanel_AyohaStore_ItemCoverImg.length - 1;
    var tds;
    var tdss;
    var tr;
    var trss;
    var col1 = 0;
    var col2 = 1;
    var col3 = 2;
    var colmgmt = 0;
    var tdA, tdB, tdC;
    var ItemImages;

    for (ii = 0; ii < resultRow; ii++) {


        if (!arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.includes(col1)) {
            // alert("Yes, the value not exists!:" + col1);
            ItemImages = arrFloatPanel_AyohaStore_ItemCoverImg[col1];
            if (ItemImages) {
                // tdA = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShow("' + arrFloatPanel_AyohaStore_ItemCode[col1] + '","' + arrFloatPanel_AyohaStore_ItemCoverImg[col1] + '","' + arrFloatPanel_AyohaStore_ItemName[col1] + '","' + arrFloatPanel_AyohaStore_ItemPrice[col1] + '","' + arrFloatPanel_AyohaStore_MerchantPoint[col1] + '","' + arrFloatPanel_AyohaStore_AyohaPoint[col1] + '","' + arrFloatPanel_AyohaStore_CampaignType[col1] + '","' + arrFloatPanel_AyohaStore_MembershipCardCode[col1] + '");" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col1] + '"    alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';
                tdA = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExt(' + arrFloatPanel_AyohaStore_ID[col1] + ')" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col1] + '"    alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /><br><div style="width: 90%; height: 35px; border:1px solid #fac;border-radius:0px 0px 0px 0px;background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);margin:-15px 0px 0px 6px;text-align:center;vertical-align: middle;color:black;font-size;11px;"><div style="margin:14px 0px 0px 0px;">RM' + arrFloatPanel_AyohaStore_ItemPrice[col1] + '</div></div></td>';


                //FloatPanel_AyohaStore_SaleItemDetailShow(5-93842-0124355773-NoEnterprise,https://setkita.com/AyohaImgCard/AyohaStoreSaleItem/93842-0124355773-NoEnterprise/barbegal.png,https://setkita.com/AyohaImgCard/AyohaStoreSaleItem/93842-0124355773-NoEnterprise/barbegal.png,BARBEGAL,28.35,0.05,0.05,Point Reward Loyalty Card,MCC-17-369430);
                //"FloatPanel_AyohaStore_SaleItemDetailShow("5-93842-0124355773-NoEnterprise","https://setkita.com/AyohaImgCard/AyohaStoreSaleItem/93842-0124355773-NoEnterprise/barbegal.png","BARBEGAL","28.35","0.05","0.05","Point Reward Loyalty Card","MCC-17-369430");"
                // console.log(tdA)
            } else {
                tdA = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExtNoImage()" src="https://setkita.com/AyohaImgCard/NoImageProduct/no-image-available.jpg"   alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';
            }

        }
        if (!arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.includes(col2)) {
            //  alert("Yes, the value not exists!:" + col2);
            ItemImages = arrFloatPanel_AyohaStore_ItemCoverImg[col2];
            if (ItemImages) {
                tdB = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExt(' + arrFloatPanel_AyohaStore_ID[col2] + ')" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col2] + '"    alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /><br><div style="width: 90%; height: 35px; border:1px solid #fac;border-radius:0px 0px 0px 0px;background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);margin:-15px 0px 0px 6px;text-align:center;vertical-align: middle;color:black;font-size;11px;"><div style="margin:14px 0px 0px 0px;">RM' + arrFloatPanel_AyohaStore_ItemPrice[col2] + '</div></div></td>';
            } else {
                tdB = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExtNoImage();" src="https://setkita.com/AyohaImgCard/NoImageProduct/no-image-available.jpg"   alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';
            }
            //tdB = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col2] + '"   onerror="this.src="https://setkita.com/AyohaImgCard/NoImageProduct/no-image-available.jpg""  alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';

        }
        if (!arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.includes(col3)) {
            //  alert("Yes, the value not exists!:" + col3);
            // tdC = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col3] + '"  onerror="this.src="https://setkita.com/AyohaImgCard/NoImageProduct/no-image-available.jpg""  alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';
            ItemImages = arrFloatPanel_AyohaStore_ItemCoverImg[col2];
            if (ItemImages) {
                tdC = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExt(' + arrFloatPanel_AyohaStore_ID[col3] + ')" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col3] + '"    alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /><br><div style="width: 90%; height: 35px; border:1px solid #fac;border-radius:0px 0px 0px 0px;background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);margin:-15px 0px 0px 6px;text-align:center;vertical-align: middle;color:black;font-size;11px;"><div style="margin:14px 0px 0px 0px;">RM' + arrFloatPanel_AyohaStore_ItemPrice[col3] + '</div></div></td>';
            } else {
                tdC = '<td style="border-color:grey;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShowExtNoImage();" src="https://setkita.com/AyohaImgCard/NoImageProduct/no-image-available.jpg"   alt="No Image" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td>';
            }
        }
        // console.log('<tr>' + tdA + tdB + tdC + '</tr>');
        td += '<tr>' + tdA + tdB + tdC + '</tr>';
        tdA = "";
        tdB = "";
        tdC = "";
        // td += '<tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col1] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col2] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col3] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td></tr>'

        arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.push(col1);
        arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.push(col2);
        arrFloatPanel_AyohaStore_ItemCoverImg_imgCheck.push(col3);

        col1 = 3 + ii;//0=0+0;1=0+1;2=0+2;
        col2 = 4 + ii;//0=0+0;1=0+1;2=0+2;
        col3 = 5 + ii;//0=0+0;1=0+1;2=0+2;



    }

    ////if(ii==1)
    ////    col2 = col2 + ii;
    ////    col3 = col3 + ii;
    //    console.log(col1 +" --- "+ii);
    //    console.log(col2 + " --- " + ii);
    //    console.log(col3 + " --- " + ii);


    //if (col1 < loopingcol) {
    //    col1 = col1 + ii;
    //    col2 = col2 + ii;
    //    col3 = col3 + ii;
    //    td += '<tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col1] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col2] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:33.33%;height:156px;"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[col3] + '" style="width: 100%; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td></tr>'

    //    console.log(col1);
    //    console.log(col2);
    //    console.log(col3);
    //}


    //        Ext.getCmp('FloatPanel_AyohaStore_SaleItemListColThree').setItemTpl('<div class="myContent" style="background-color:black;width:108%;height:148px;">' +
    //'<table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 0] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 1] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td><td style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="' + arrFloatPanel_AyohaStore_ItemCoverImg[ii + 2] + '" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></td></tr></thead></table>'

    //     + '</div>');


    //  }

    var Mtd = td.replace("undefined", "");
    Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:black;" class="tg"><thead>' + Mtd + '</thead></table>');
    //    trss = tr.replace("undefined", "");

    //    Ext.getCmp('FloatPanel_AyohaStore_SaleItemListColThree').setHtml('<div class="myContent" style="background-color:black;width:108%;height:148px;">' +
    //'<table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead>' + Mtd + '</thead></table>'

    //        + '</div>');

    //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:black;" class="tg"><thead>' + trss + '</thead></table>');

    Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHeight(globalFloatPanel_AyohaStoreAdjustHeight_containerFloatPanel_AyohaStore_SaleItemListThreeColInside);
}



function FloatPanel_AyohaStoreMerchant_ItemDelete(ID) {
    
    Swal.fire({
        title: 'Are you sure To delete?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {

            var objn = {
                "ID": ID,
                "SubscriberAccNo": GetCurrentUserAccountNo(),
            };
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemDeleteItemMerchant',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                        //AyohaMerchantReview_AddEditHide();


                        swalFireSuccess("Delete Product Successfull!");


                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore('firstload');
                            //FloatPanel_AyohaStoreMerchant_ProductList_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore();
                            Ext.Viewport.unmask();
                        });
                        Ext.Viewport.unmask();
                        task.delay(700);

                        //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });


                    }
                    else {

                        swalFireFail("Fail!-->" + result.responseText.trim());
                        Ext.Viewport.unmask();
                    }
                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    swalFireFail("Fail!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                }

            });
        }
    });
}

function OnKeyUpFloatPanel_AyohaStore_SearchProduct() {

    _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaStore_SearchProduct').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('ItemName'))) {
                console.log('ada0');

                // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
                //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore.clearFilter();
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}