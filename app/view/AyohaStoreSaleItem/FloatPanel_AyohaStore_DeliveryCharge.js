Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryCharge', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_DeliveryCharge;


var isFloatPanel_AyohaStore_DeliveryChargeOpen = 'N';





function FloatPanel_AyohaStore_DeliveryCharge() {

    _FloatPanel_AyohaStore_DeliveryCharge =
     Ext.create('Ext.Container', {
         zIndex: 340,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_DeliveryChargeID',
         name: 'nameFloatPanel_AyohaStore_DeliveryChargeID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
         },

         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


  


         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_DeliveryCharge.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_DeliveryCharge.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaStore_DeliveryChargeOpen = 'N';
                         RemovePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");
                     },



                 }



                 );

             },



         },


         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [

                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'bottom',
                    
                     height: 50,
                     //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                     style:GetFooterStyle(),
                     id: 'containerFloatPanel_AyohaStore_DeliveryChargeFooter',
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
                                             xtype: 'panel',
                                             width: 3
                                         },

                                           {
                                               margin: '0 0 0 0',
                                               id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_CountLoveTxt',
                                               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:transparent;margin:4px 0px 0px 0px">0</div>',

                                               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                           },



                                            {
                                                xtype: 'spacer',


                                            },



                                            {
                                                xtype: 'button',
                                                id: 'btFloatPanel_AyohaStore_DeliveryCharge_Delete',                                               
                                                margin: '0 -18 -8 0',
                                                //height: 35,
                                                //width: 35,
                                                html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function (){
                                                    FloatPanel_DialogBoxShow(0,globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,GetCurrAyohaEnterpriseUserAccountNo(),GetEnterpriseAccNo(),DeliveryChargeSetting);
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_Delete',
                                              //  id:'txtFloatPanel_AyohaContestSetting_DeleteContestLoyaltyx',
                                                //  badgeText: '1',
                                                margin: '7 0 0 5',
                                                //height: 40,
                                                //width: 130,
                                                html: '<font size=2 color=grey>*Delete</font>',
                                                ui: 'plain',
                                                handler: function () {
                                                    //FloatPanel_AyohaStoreMerchant_AddEditItem_Delete();
                                                    FloatPanel_DialogBoxShow(0,globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,GetCurrAyohaEnterpriseUserAccountNo(),GetEnterpriseAccNo(),DeliveryChargeSetting);
                                                }
                                            },










                                //  {
                                     
                                //      //margin: '-27 0 0 0',
                                //      margin: '0 0 0 0',
                                //      //html: '<button OnClick="FloatPanel_DialogBoxShow("0",' + globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode + ',' + GetCurrAyohaEnterpriseUserAccountNo() + ', ' + GetEnterpriseAccNo() + ',"0")" class="buttonSaveDeleteProduct">Delete</button>'
                                //      html: '<button OnClick="FloatPanel_DialogBoxShow(0,' + "'" + globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode + "'" + ',' + "'" + GetCurrAyohaEnterpriseUserAccountNo() + "'" + ',' + "'" + GetEnterpriseAccNo() + "'" + ',' + "'DeliveryChargeSetting'" + ')" class="buttonSaveDeleteProduct">Delete</button>'


                                //  },
                                   {
                                       xtype: 'panel',
                                       width: 3
                                   },
                                //    {
                                //        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_Save',
                                //        //margin: '-27 0 0 0',
                                //        margin: '0 0 0 0',
                                //        html: '<button OnClick="FloatPanel_AyohaStore_DeliveryCharge_Save()" class="buttonSaveDeleteProduct">Save</button>'



                                //    },

                                   
 {
    xtype: 'button',
   // id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
    //  badgeText: '1',
    margin: '0 -18 -8 0',
    //height: 35,
    //width: 35,
    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaStore_DeliveryCharge_Save();    
    }
},

{
    xtype: 'button',
    //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
   // id:'txtbtn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
    //  badgeText: '1',
    margin: '7 0 0 7',
    //height: 40,
    //width: 130,
    html: '<font size=2 color=grey>Save</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaStore_DeliveryCharge_Save(); 
    }
},

                                   {
                                       xtype: 'panel',
                                       width: 3
                                   },








                            ]

                 },

                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: 60,
                     //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                     style:GetHeaderStyle(),
                     id: 'containerFloatPanel_AyohaStore_DeliveryChargeHeader',
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
                                    width:20
                                },

                                {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_TitleHeaderTxt',
                                    //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Delivery Charge Setting</div>',

                                    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                },
                                          

                                          {
                                              xtype: 'spacer'
                                          },

                                          {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AyohaStore_DeliveryChargeBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_AyohaStore_DeliveryCharge.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                   // direction: 'left',
                                                    //easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                isFloatPanel_AyohaStore_DeliveryChargeOpen = 'N';
                                                RemovePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");

                                            }
                                        },
                                          
                                           {
                                            xtype: 'spacer',
                                            width:20
                                        },
                                    //{
                                    //    xtype: 'button',

                                    //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                    //    height: 40,
                                    //    width: 40,
                                    //    // iconCls: 'list',
                                    //    id: 'btnFloatPanel_AyohaStore_DeliveryCharge_PicProfile',
                                    //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                    //    ui: 'plain',
                                    //    handler: function () {
                                    //        _FloatPanel_AyohaStore_DeliveryCharge.hide(Ext.fx.Animation({
                                    //            type: 'slideOut',
                                    //            direction: 'right',
                                    //            easing: 'cubic-bezier(.7,0,.7,1)',
                                    //            duration: 250

                                    //        }));

                                    //        isFloatPanel_AyohaStore_DeliveryChargeOpen = "N";
                                    //        RemovePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");
                                    //    }
                                    //},












                            ]

                 },





            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStore_DeliveryChargeBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },
                items: [

                         



                   {
                       xtype: 'container',
                       width: '95%',
                       height: 700,
                       style: ' background-color:transparent;',
                       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containerFloatPanel_AyohaStore_DeliveryCharges',

                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'left',
                       },
                       items: [


                            {
                                margin: '20 0 0 5',
                                html: '<font color="black" size="1"><b>Delivery Name(Eg. Pos Laju,Cod,J&T,etc)</b></font>',
                            },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_DeliveryName',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="text"  id="input-FloatPanel_AyohaStore_DeliveryCharge_DeliveryName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },
                               {
                                   margin: '5 0 0 5',
                                   html: '<font color="black" size="1"><b>Charge Type</b></font>',
                               },

                               {
                                   xtype: 'container',
                                   // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                   name: 'namecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType',
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   height: 10,
                                   styleHtmlContent: true,
                                   style: "background-color: transparent",
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [
                                        {
                                            id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ChargeType',
                                            margin: '-17 0 0 -13',
                                            width: '70%',
                                            html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryCharge_ChargeType" readOnly placeHolder="Please Select" style="border-color:black;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                        },


                         {
                             width: 20,
                             height: 20,
                             margin: '-15 0 0 0',
                             id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ChargeTypeIcon',
                             html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                         },
                                   ]
                               },





                               {
                                   margin: '15 0 0 5',
                                   html: '<font color="black" size="1"><b>Location (eg.Semenanjung,Sabah,Sarawak,Presint,District ,etc)</b></font>',
                               },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_Location',
                                        margin: '-5 0 0 5',

                                        // zIndex: -10,
                                        width: '99%',
                                        html: '<input type="text"  id="input-FloatPanel_AyohaStore_DeliveryCharge_Location"  placeHolder="Location" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                    },



                               {
                                   xtype: 'container',
                                   id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_Separator01',
                                   width: '90%',
                                   margin: '20 0 0 0',
                                   height:1,
                                   style: ' background-color:#d3d3d3;',
                               },


                                {
                                    margin: '20 0 0 5',
                                    id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FontS',
                                    html: '<font color="black" size="4"><b>Charge Type</b></font>',
                                },


                                {
                                    xtype: 'container',
                                    // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                    id: 'containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S',
                                    margin: '0 0 0 0',
                                    width: '100%',
                                    height: 50,
                                    hidden:true,
                                    styleHtmlContent: true,
                                    style: "background-color: transparent",
                                    layout: {
                                        type: 'vbox',
                                        pack: 'left',
                                        align: 'left'

                                    },
                                    items: [
                                             {
                                                 margin: '0 0 0 5',
                                                 html: '<font color="black" size="1"><b>Flate Rate(RM)</b></font>',
                                             },
                                {
                                    id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FlatRate_S',
                                    margin: '-5 0 0 5',

                                    zIndex: 100,
                                    width: '90%',
                                    html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;z-Index:100;">'
                                },
                                    ]

                                },



                                    {
                                        xtype: 'container',
                                        // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                        id: 'containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_S',
                                        margin: '-10 0 0 0',
                                        width: '100%',
                                        height: 130,
                                        hidden:true,
                                        styleHtmlContent: true,
                                        style: "background-color: transparent",
                                        layout: {
                                            type: 'vbox',
                                            pack: 'left',
                                            align: 'left'

                                        },
                                        items: [
                                                 {
                                                     margin: '0 0 0 5',
                                                     html: '<font color="black" size="1"><b>Base Rate(RM)</b></font>',
                                                 },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_BaseRate_S',
                                        margin: '-5 0 0 5',

                                        // zIndex: -10,
                                        width: '40%',
                                        html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                    },


                                                {
                                                    margin: '0 0 0 5',
                                                    html: '<font color="black" size="1"><b>Base Weigth(KG)</b></font>',
                                                },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_WeightRate_S',
                                        margin: '-5 0 0 5',

                                        // zIndex: -10,
                                        width: '40%',
                                        html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                    },


                                     {
                                         margin: '0 0 0 5',
                                         html: '<font color="black" size="1"><b>Extra Charge (RM)</b></font>',
                                     },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_S',
                                        margin: '-5 0 0 5',

                                        // zIndex: -10,
                                        width: '40%',
                                        html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                    },

                                    {
                                        margin: '0 0 0 5',
                                        html: '<font color="black" size="1"><b>For Every (KG)</b></font>',
                                    },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_S',
                                        margin: '-5 0 0 5',

                                        // zIndex: -10,
                                        width: '40%',
                                        html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                    },

                                        ]

                                    },
                                       {
                                           xtype: 'container',
                                           // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                           id: 'containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_S',
                                           margin: '0 0 0 0',
                                           width: '100%',
                                           height: 60,
                                           // hidden: true,
                                           styleHtmlContent: true,
                                           style: "background-color: transparent",
                                           layout: {
                                               type: 'vbox',
                                               pack: 'left',
                                               align: 'left'

                                           },
                                           items: [
                                                 {
                                                     margin: '-5 0 0 5',
                                                     html: '<font color="black" size="1"><b>Charge PerUnit(RM)</b></font>',
                                                 },
                                 {
                                     id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_S',
                                     margin: '-5 0 0 5',

                                     // zIndex: -10,
                                     width: '90%',
                                     html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_S"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                 },
                                           ]

                                       },
                           

                           {
                               xtype: 'container',
                               // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                               id: 'containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS_01',
                               hidden: true,
                               margin: '0 0 0 0',
                               width: '100%',
                               height: 20,
                           },
                              {
                                  margin: '20 0 0 5',
                                  id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FontSS',
                                  hidden: true,
                                  html: '<font color="black" size="4"><b>Sabah/Sarawak</b></font>',
                              },

                                   {
                                       xtype: 'container',
                                       // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                       id: 'containerFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS',
                                       margin: '0 0 0 0',
                                       width: '100%',
                                       height: 50,
                                       hidden:true,
                                       styleHtmlContent: true,
                                       style: "background-color: transparent",
                                       layout: {
                                           type: 'vbox',
                                           pack: 'left',
                                           align: 'left'

                                       },
                                       items: [
                                             {
                                                 margin: '-5 0 0 5',
                                                 html: '<font color="black" size="1"><b>Flate Rate(RM)</b></font>',
                                             },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS',
                                 margin: '-5 0 0 5',
                                 hidden: true,
                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },
                                       ]

                                   },





                                   {
                                       xtype: 'container',
                                       // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                       id: 'containerFloatPanel_AyohaStore_DeliveryCharge_WeigthRate_SS',
                                       margin: '-10 0 0 0',
                                       width: '100%',
                                       height: 130,
                                       hidden:true,
                                       styleHtmlContent: true,
                                       style: "background-color: transparent",
                                       layout: {
                                           type: 'vbox',
                                           pack: 'left',
                                           align: 'left'

                                       },
                                       items: [
                                                {
                                                    margin: '0 0 0 5',
                                                    html: '<font color="black" size="1"><b>Base Rate(RM)</b></font>',
                                                },
                                   {
                                       id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_BaseRate_SS',
                                       margin: '-5 0 0 5',

                                       // zIndex: -10,
                                       width: '40%',
                                       html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                   },


                                               {
                                                   margin: '0 0 0 5',
                                                   html: '<font color="black" size="1"><b>Base Weigth(KG)</b></font>',
                                               },
                                   {
                                       id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_WeightRate_SS',
                                       margin: '-5 0 0 5',

                                       // zIndex: -10,
                                       width: '40%',
                                       html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                   },


                                    {
                                        margin: '0 0 0 5',
                                        html: '<font color="black" size="1"><b>Extra Charge (RM)</b></font>',
                                    },
                                   {
                                       id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_SS',
                                       margin: '-5 0 0 5',

                                       // zIndex: -10,
                                       width: '40%',
                                       html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                   },

                                   {
                                       margin: '0 0 0 5',
                                       html: '<font color="black" size="1"><b>For Every (KG)</b></font>',
                                   },
                                   {
                                       id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_SS',
                                       margin: '-5 0 0 5',

                                       // zIndex: -10,
                                       width: '40%',
                                       html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                   },

                                       ]

                                   },



                                           {
                                               xtype: 'container',
                                               // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                               id: 'containerFloatPanel_AyohaStore_DeliveryCharge_PerUnit_SS',
                                               hidden: true,
                                               margin: '0 0 0 0',
                                               width: '100%',
                                               height: 40,
                                              // hidden: true,
                                               styleHtmlContent: true,
                                               style: "background-color: transparent",
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'left',
                                                   align: 'left'

                                               },
                                               items: [
                                                     {
                                                         margin: '-5 0 0 5',
                                                         html: '<font color="black" size="1"><b>Charge PerUnit(RM)</b></font>',
                                                     },
                                     {
                                         id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_SS',
                                         margin: '-5 0 0 5',

                                         // zIndex: -10,
                                         width: '90%',
                                         html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_SS"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                     },
                                               ]

                                           },




                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        margin: '0 0 0 0',
                                        id:'containerSeparator01',
                                        height: 30,
                                       // style: ' background-color:#d3d3d3;',
                                    },


                              
                              {
                                  xtype: 'container',
                                  width: '90%',
                                  margin: '35 0 0 0',
                                  height: 1,
                                  style: ' background-color:#d3d3d3;',
                              },

                              {
                                  margin: '10 0 0 5',
                                  html: '<font color="black" size="1"><b>Free Delivery If :</b></font>',
                              },

                               {
                                   xtype: 'container',
                                   // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                   name: 'namecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery',
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   height: 10,
                                   styleHtmlContent: true,
                                   style: "background-color: transparent",
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [
                                        {
                                            id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery',
                                            margin: '-17 0 0 -13',
                                            width: '70%',
                                            html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryCharge_FreeDelivery" readOnly placeHolder="" style="border-color:black;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                        },


                         {
                             width: 20,
                             height: 20,
                             margin: '-15 0 0 0',
                             id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_FreeDeliveryIcon',
                             html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                         },
                                   ]
                               },
                     



                      {
                          margin: '15 0 0 5',
                          html: '<font color="black" size="1"><b>Over or Equal to</b></font>',
                      },
                             {
                                 id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_OverEqual',
                                 margin: '-5 0 0 5',

                                 // zIndex: -10,
                                 width: '90%',
                                 html: '<input type="number"  id="input-FloatPanel_AyohaStore_DeliveryCharge_OverEqual"  placeHolder="0.00" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                             },







                              {
                                  xtype: 'container',
                                  width: '90%',
                                  margin: '35 0 0 0',
                                  height: 1,
                                  style: ' background-color:#d3d3d3;',
                              },




                                      {
                                          margin: '10 0 0 5',
                                          html: '<font color="black" size="1"><b>Enable Charge Setting?</b></font>',
                                      },
                   {
                       width: '100%',
                       margin: '0 0 0 5',
                       layout: {
                           type: 'hbox',
                           pack: 'left',
                           align: 'left'
                       },
                       items: [
                           {
                               id: 'htmlFloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting',
                               margin: '0 0 0 20',
                               width: '50%',
                               html: '<input type="checkbox" id="checkbox-FloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting" class="largerCheckbox" onclick="FloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting(this)" name="checkbox" />'
                           },



                       ]

                   },







                       ]
                   },


  


                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_DeliveryCharge;





}


var globalFloatPanel_AyohaStore_DeliveryCharge_ID;
var globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode;

function FloatPanel_AyohaStore_DeliveryChargeShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryCharge);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryCharge());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");
    isFloatPanel_AyohaStore_DeliveryChargeOpen = 'Y';
    globalFloatPanel_AyohaStore_DeliveryCharge_ID = 0;
    globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode = "New";
    

    Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryCharge_Delete').setHidden(true);
    Ext.getCmp('btFloatPanel_AyohaStore_DeliveryCharge_Delete').setHidden(true);
    
    var containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType = containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_ChargeTypeShow();
      }
    );





    var containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery = containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_FreeConditionDeliveryChargeShow();
      }
    );
}




function FloatPanel_AyohaStore_DeliveryChargeEditShow(ID, ChargeSettingCode, DeliveryName, ChargeTypeCode, FreeDeliveryConditionCode, Over_Or_Equal, IsEnableDeliveryChargeSetting, DeliveryRate_Charge, Locations, ChargeTypes, FreeDeliveryConditionCode, FreeCondition) {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryCharge);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryCharge());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");
    isFloatPanel_AyohaStore_DeliveryChargeOpen = 'Y';
    globalFloatPanel_AyohaStore_DeliveryCharge_ID = ID;
    globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode = ChargeSettingCode;
    globalFloatPanel_ChargeType_ChargeCode = ChargeTypeCode;
    globalFloatPanel_FreeConditionDeliveryCharge_FC_Code = FreeDeliveryConditionCode;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_DeliveryName').value = DeliveryName;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_OverEqual').value = Over_Or_Equal;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_Location').value = Locations;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargeType').value = ChargeTypes;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_FreeDelivery').value = FreeCondition;

    globalFloatPanel_DialogBox_Code = ChargeSettingCode;
    globalFloatPanel_DialogBox_EnterpriseAccNo = GetEnterpriseAccNo();

    if (IsEnableDeliveryChargeSetting == "Y") {
        document.getElementById("checkbox-FloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting").checked = true;
    } else {
        document.getElementById("checkbox-FloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting").checked = false;
    }

    FloatPanel_ChargeTypeSetChargeTypeLbl(ChargeTypes);
    FloatPanel_AyohaStore_DeliveryCharge_SetValue(ChargeTypeCode, DeliveryRate_Charge);

    var containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery = containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_FreeDelivery.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_FreeConditionDeliveryChargeShow();
      }
    );

    var containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType = containerViewnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_DeliveryCharge_ChargeType.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_ChargeTypeShow();
      }
    );

}

function FloatPanel_AyohaStore_DeliveryCharge_SetValue(ChargeTypeCode, Rate) {

   
  
    if (ChargeTypeCode == "1-FOC") {
        //swalFireSuccess("Save Successfully");
        //FloatPanel_AyohaStore_DeliveryChargeHide();
    }

    if (ChargeTypeCode == "2-FR") {
        var decimal = Rate.replace("<font size=3>", "");
        var decimalStart = decimal.slice(decimal.search(/(\d+)/));
        var decimalEnd = decimalStart.search(/[^.0-9]/);
        var ExtractedNumber = decimalStart.slice(0, decimalEnd);
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').value = ExtractedNumber;
    }
    if (ChargeTypeCode == "3-WR") {
        var decimals = Rate.replace("<font size=2.5>", "");        
        var ArrDecimal = decimals.split("|");


        var decimalStart0 = ArrDecimal[0].slice(ArrDecimal[0].search(/(\d+)/));
        var decimalEnd0 = decimalStart0.search(/[^.0-9]/);
        var ExtractedNumber0 = decimalStart0.slice(0, decimalEnd0);

        var decimalStart1 = ArrDecimal[1].slice(ArrDecimal[1].search(/(\d+)/));
        var decimalEnd1 = decimalStart1.search(/[^.0-9]/);
        var ExtractedNumber1 = decimalStart1.slice(0, decimalEnd1);


        var decimalStart2 = ArrDecimal[2].slice(ArrDecimal[2].search(/(\d+)/));
        var decimalEnd2 = decimalStart2.search(/[^.0-9]/);
        var ExtractedNumber2 = decimalStart2.slice(0, decimalEnd2);


        var decimalStart3 = ArrDecimal[3].slice(ArrDecimal[3].search(/(\d+)/));
        var decimalEnd3 = decimalStart3.search(/[^.0-9]/);
        var ExtractedNumber3 = decimalStart3.slice(0, decimalEnd3);

        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_S').value = ExtractedNumber0;
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_S').value = ExtractedNumber1;
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_S').value = ExtractedNumber2;
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_S').value = ExtractedNumber3;


       // FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_WeightRate_Save();
    }
    if (ChargeTypeCode == "4-QB") {
        var decimalss = Rate.replace("<font size=3>", "");
        var decimalStart11 = decimalss.slice(decimalss.search(/(\d+)/));
        var decimalEnd11 = decimalStart11.search(/[^.0-9]/);
        var ExtractedNumber11 = decimalStart11.slice(0, decimalEnd11);
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_S').value = ExtractedNumber11;
    }
}



function FloatPanel_AyohaStore_DeliveryChargeHide() {
    if (isFloatPanel_AyohaStore_DeliveryChargeOpen == 'Y') {
        _FloatPanel_AyohaStore_DeliveryCharge.hide(); isFloatPanel_AyohaStore_DeliveryChargeOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_DeliveryCharge, "isFloatPanel_AyohaStore_DeliveryChargeOpen");
    }
}





function FloatPanel_AyohaStore_DeliveryCharge_EnableChargeSetting(checkbox) {
    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);




        globalFloatPanel_AyohaStore_DeliveryCharge_IsEnableDeliveryChargeSetting = "Y";




    }
    else {

        globalFloatPanel_AyohaStore_DeliveryCharge_IsEnableDeliveryChargeSetting = "N";

    }
}




var globalFloatPanel_AyohaStore_DeliveryCharge_IsEnableDeliveryChargeSetting="N";

function FloatPanel_AyohaStore_DeliveryCharge_Save() {



    var random_integer = Math.random() * 1001 | 0;
    if (globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode == "New") {
        globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode = "DC-" + random_integer + "-" + GetEnterpriseAccNo();
    } else {
        globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode = globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode;
    }



    var DeliveryName = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_DeliveryName').value;

    if (DeliveryName) {

    } else {
        swalFireFail("Fail!,Delivery Name is Required!");
        return;
    }
    if (globalFloatPanel_ChargeType_ChargeCode) {

    } else
    {
        swalFireFail("Fail!,Charge Type is Required!");
    }

    var over_or_equal = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_OverEqual').value;

    if (over_or_equal)
    {
        over_or_equal = over_or_equal;
    } else {
        over_or_equal = "0";
    }

    var Location = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_Location').value;

    if (Location) {
    } else {
        swalFireFail("Fail!,Location Name is Required!");
        return;
    }

  
    var objn = {
        "ID": globalFloatPanel_AyohaStore_DeliveryCharge_ID,
        "ChargeSettingCode": globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "DeliveryName": document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_DeliveryName').value,
        "ChargeTypeCode": globalFloatPanel_ChargeType_ChargeCode,
        "FreeDeliveryConditionCode": globalFloatPanel_FreeConditionDeliveryCharge_FC_Code,
        "Over_Or_Equal": over_or_equal,
        "IsEnableDeliveryChargeSetting": globalFloatPanel_AyohaStore_DeliveryCharge_IsEnableDeliveryChargeSetting,
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "Locations": Location
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/ChargeDeliverySetting/ChargeDeliverySettingInsertUpdate',

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

                if (globalFloatPanel_ChargeType_ChargeCode == "1-FOC") {
                    swalFireSuccess("Save Successfully");
                    FloatPanel_AyohaStore_DeliveryChargeHide();
                }

                if (globalFloatPanel_ChargeType_ChargeCode == "2-FR") {
                    FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_FlatRate_Save();
                }
                if (globalFloatPanel_ChargeType_ChargeCode == "3-WR") {
                    FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_WeightRate_Save();
                }
                if (globalFloatPanel_ChargeType_ChargeCode == "4-QB") {
                    FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_QuantityBase_Save();
                }
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore();
                });
                task.delay(800);

            }
            else {

                swalFireFail("Fail->Delivery Setting!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Delivery Setting!!!!");
            Ext.Viewport.unmask();
        }

    });
}



function FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_FlatRate_Save() {

  

  
    var FlatRate_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').value;
    var FlatRate_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_SS').value;

    if (FlatRate_S) {
        FlatRate_S = FlatRate_S;
    } else {
        FlatRate_S = 0;
    }

    if (FlatRate_SS){
    FlatRate_SS = FlatRate_SS;
    } else {
        FlatRate_SS = 0;
    }

    var objn = {
        "ID": 0,
        "ChargeSettingCode": globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,
        "FlatRate_S": FlatRate_S,
        "FlatRate_SS": FlatRate_SS,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/ChargeDelivery_FlatRate/ChargeDeliveryFlatRateInsertUpdate',

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



                swalFireSuccess("Save Successfully");
                FloatPanel_AyohaStore_DeliveryChargeHide();

              


            }
            else {

                swalFireFail("Fail->Flat rate Setting!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Flat rate Setting!!!!");
            Ext.Viewport.unmask();
        }

    });
}





function FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_WeightRate_Save() {
    var BaseRate_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_S').value;
    var BaseWeight_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_S').value;
    var ExtraCharge_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_S').value;
    var ForEvery_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_S').value;


    var BaseRate_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_SS').value;
    var BaseWeight_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_SS').value;
    var ExtraCharge_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_SS').value;
    var ForEvery_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_SS').value;


    if (BaseRate_S) {
        BaseRate_S = BaseRate_S;
    } else {
        BaseRate_S = 0;
    }

    if (BaseWeight_S) {
        BaseWeight_S = BaseWeight_S;
    } else {
        BaseWeight_S = 0;
    }

    if (ExtraCharge_S) {
        ExtraCharge_S = ExtraCharge_S;
    } else {
        ExtraCharge_S = 0;
    }

    if (ForEvery_S) {
        ForEvery_S = ForEvery_S;
    } else {
        ForEvery_S = 0;
    }




    if (BaseRate_SS) {
        BaseRate_SS = BaseRate_SS;
    } else {
        BaseRate_SS = 0;
    }

    if (BaseWeight_SS) {
        BaseWeight_SS = BaseWeight_SS;
    } else {
        BaseWeight_SS = 0;
    }

    if (ExtraCharge_SS) {
        ExtraCharge_SS = ExtraCharge_SS;
    } else {
        ExtraCharge_SS = 0;
    }

    if (ForEvery_SS) {
        ForEvery_SS = ForEvery_SS;
    } else {
        ForEvery_SS = 0;
    }

    var objn = {
        "ID": 0,
        "ChargeSettingCode": globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "BaseRate_S": BaseRate_S,
        "BaseWeight_S": BaseWeight_S,
        "ExtraCharge_S": ExtraCharge_S,
        "ForEvery_S": ForEvery_S,
        "BaseRate_SS": BaseRate_SS,
        "BaseWeight_SS": BaseWeight_SS,
        "ExtraCharge_SS": ExtraCharge_SS,
        "ForEvery_SS": ForEvery_SS,
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/ChargeDelivery_WeightRate/ChargeDeliveryWeightRateInsertUpdate',

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



                swalFireSuccess("Save Successfully");
                FloatPanel_AyohaStore_DeliveryChargeHide();




            }
            else {

                swalFireFail("Fail->Weight Rate Setting!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Weight Rate Setting!!!!");
            Ext.Viewport.unmask();
        }

    });
}






function FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_QuantityBase_Save() {
    var ChargePerUnit_S = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_S').value;
    var ChargePerUnit_SS = document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_SS').value;
   
    if (ChargePerUnit_S) {
        ChargePerUnit_S = ChargePerUnit_S;
    } else {
        ChargePerUnit_S = 0;
    }

    if (ChargePerUnit_SS) {
        ChargePerUnit_SS = ChargePerUnit_SS;
    } else {
        ChargePerUnit_SS = 0;
    }

  
 
    var objn = {
        "ID": 0,
        "ChargeSettingCode": globalFloatPanel_AyohaStore_DeliveryCharge_ChargeSettingCode,
        "ChargePerUnit_S": ChargePerUnit_S,
        "ChargePerUnit_SS": ChargePerUnit_SS,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/ChargeDelivery_QuantityBase/ChargeDeliveryQuantityBaseInsertUpdate',

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



                swalFireSuccess("Save Successfully");
                FloatPanel_AyohaStore_DeliveryChargeHide();




            }
            else {

                swalFireFail("Fail->Quantity Base Setting!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail->Quantity Base Setting!!!!");
            Ext.Viewport.unmask();
        }

    });
}