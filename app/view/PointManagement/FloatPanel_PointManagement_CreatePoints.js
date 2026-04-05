Ext.define('ianMizi.view.PointManagement.FloatPanel_PointManagement_CreatePoints', {

});


var _FloatPanel_PointManagement_CreatePoints;


var isFloatPanel_PointManagement_CreatePointsOpen = 'N';



var _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "N";







function FloatPanel_PointManagement_CreatePoints() {

    _FloatPanel_PointManagement_CreatePoints =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_PointManagement_CreatePointsID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 300,

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
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: transparent;",
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'fit',

                 },
                 items: [
                       {
                           xtype: 'container',
                           width: '100%',

                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'

                           },
                           items: [

                               /////

                               {

                                   xtype: 'container',
                                   width: '100%',
                                   height: 60,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_PointManagement_CreatePointsHeader',
                                   style:GetHeaderStyle(),
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
                                                id: 'htmlFloatPanel_PointManagement_CreatePointsTitleTxt',
                                                html: '<font size=4 color=black><b>Create Point</b></font>'
                                            },
                                            {
                                                xtype: 'spacer',
                                                width:20
                                            },
                                            {
                                                xtype: 'container',
                                                width: 1,
                                                height: '60%',
                                                style: ' background-color: #ccc;',
                                            },
                                            {
                                                xtype: 'spacer',
                                                width:10
                                            },
                                            
                                          {
                                            xtype: 'button',
                                            margin: '1 0 0 0',
                                            height: 40,
                                            width: 40,
                                            html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {
                                            }
                                        },
                                            {
                                              
                    html:'<div class="search-container">'+
                        '<input type="text" id="input-FloatPanel_PointManagement_CreatePointsSearchText"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
                    '</div>'
                                            },     

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                         {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_PointManagement_CreatePointsBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_PointManagement_CreatePoints.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                    //direction: 'left',
                                                                    //easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
                                                                isFloatPanel_PointManagement_CreatePointsOpen = 'N';
                                                                _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "N";
                                                                document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value="";
                                                                //  FloatPanel_FloatPanel_PointManagement_CreatePoints_AddHide();
                                                            }
                                                        },

                                                          {
                                                            xtype: 'spacer',
                                                            width: 20,
                                                        },
                       
                                                         {
                                                             xtype: 'button',
                                                             height: 30,
                                                             width: 35,
                                                             hidden:true,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_PointManagement_CreatePoints_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/SendPointIconWhite01.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_PointManagement_CreatePoints.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_PointManagement_CreatePointsOpen = 'N';
                                                                 _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "N";
                                                                 //  FloatPanel_FloatPanel_PointManagement_CreatePoints_AddHide();

                                                             }
                                                         },



                                                          //{
                                                          //    margin: '2 0 0 0',
                                                          //    id: 'htmlFloatPanel_PointManagement_CreatePointsPointTitle',
                                                          //    html: '<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: white;text-align:center;border: 1px solid grey;font-size: 11px;font-weight:bold;color:black;height:20px">???</div>',
                                                          //    //hidden: true,
                                                          //},



                                                          //    {
                                                          //        xtype: 'container',
                                                          //        margin: '1 0 0 -5',
                                                          //        //hidden: true,
                                                          //        //style: 'background-color: white;',
                                                          //        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                                          //        height: 35,
                                                          //        width: 35,
                                                          //        // margin: '70 0 0 0',
                                                          //        id: 'containerFloatPanel_PointManagement_CreatePointsPicture',
                                                          //        layout: {

                                                          //            type: 'hbox',
                                                          //            pack: 'right',
                                                          //            align: 'right'
                                                          //        },
                                                          //        items: [
                                                          //            {
                                                          //                xtype: 'button',
                                                          //                height: 40,
                                                          //                width: 40,
                                                          //                margin: '0 0 0 3',
                                                          //                id: 'btnFloatPanel_PointManagement_CreatePoints_PointIcon',
                                                          //                //badgeText: "2",
                                                          //                html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 0%;  margin:-1px 0px 0px 2px"></div>',
                                                          //                ui: 'plain',
                                                          //                handler: function () {



                                                          //                    _FloatPanel_PointManagement_CreatePoints.hide(Ext.fx.Animation({
                                                          //                        type: 'slideOut',
                                                          //                        direction: 'right',
                                                          //                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                          //                        duration: 250

                                                          //                    }));
                                                          //                    isFloatPanel_PointManagement_CreatePointsOpen = 'N';
                                                          //                    _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "N";

                                                          //                }
                                                          //            },



                                                          //        ]
                                                          //    },










                                          ]

                               },



                               ///////////

                               {
                                   xtype: 'container',
                                   hidden: true,
                                   style: "background-color: transparent",
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [
           {
               xtype: 'container',

               width: '100%',
               layout: {
                   type: 'vbox',
                   pack: 'start',
                   align: 'left'

               },
               items: [




                    {
                        xtype: 'panel',
                        height: 10
                    },

               ]
           },




                                   ]

                               },



                               ////////////////////////////////////////////

                               {
                                   xtype: 'container',
                                   id: 'containerFloatPanel_PointManagement_CreatePointsMasterHeader',
                                   hidden: true,
                                   width: '100%',
                                   height: 25,

                                   // style: "background-color: white",
                                   // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                   // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [

                                       {
                                           width: 20,
                                           height: 20,
                                           margin: '0 0 0 0',
                                           id: 'htmlFloatPanel_PointManagement_CreatePointsMasterHeaderIcon',
                                           html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                                       },
                                       {
                                           //  width: 150,
                                           margin: '0 0 0 5',
                                           html: '<font size=2 color=black>Create Point Historys</font>'
                                       },


                                   ]

                               },


                               /////////////////////////////

                                {
                                    xtype: 'container',
                                    // docked: 'top',
                                    // hidden:true,
                                    //  margin: '0 0 0 0',
                                    //  docked: 'bottom',
                                    style: 'background-color: transparent;',
                                    id: 'containerFloatPanel_PointManagement_CreatePointsMasterMaster',
                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                    zIndex: 90,
                                    //height:200,
                                    // autoHeight:true,
                                    // height: '100%',
                                    // flex:1,
                                    //  maxHeight:'100%',
                                    //height:'63%',
                                    width: '100%',
                                    // margin: '70 0 0 0',

                                    layout: {

                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center'
                                    },
                               
                                    items: [
                                        
                                                                // {
                                                                //     xtype: 'container',
                                                                //     width: '100%',
                                                                //     hidden:true,
                                                                //     id: 'containerFloatPanel_PointManagement_CreatePointsSubcribers',
                                                                //     // style: 'background-color:black;color:white',
                                                                //     style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                                //     layout: {
                                                                //         type: 'hbox',
                                                                //         pack: 'left',
                                                                //         align: 'left'

                                                                //     },
                                                                //     height: 35,
                                                                //     // margin:'10 0 0 0',
                                                                //     items: [

                                                                //         {
                                                                //             xtype: 'panel',
                                                                //             width: 15,
                                                                //         },
                                                                //         {
                                                                //             width: 20,
                                                                //             height: 20,
                                                                //             margin: '5 0 0 0',
                                                                //             id: 'htmlFloatPanel_PointManagement_CreatePointsSubscriberIcon',
                                                                //             html: '<img src="resources/icons/userlistPurple.png" width="20" height="20" alt="Company Name">',
                                                                //         },
                                                                //                {

                                                                //                    //width: '26%',
                                                                //                    id: 'htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt',
                                                                //                    margin: '5 0 0 5',
                                                                //                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found</div>',
                                                                //                },

                                                                //     ]
                                                                // },
                                                                //    {
                                                                //        xtype: 'container',
                                                                //        width: '100%',
                                                                //        hidden: true,
                                                                //        id: 'containerFloatPanel_PointManagement_CreatePointsSendPointHistory',
                                                                //        // style: 'background-color:black;color:white',
                                                                //        style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                                //        layout: {
                                                                //            type: 'hbox',
                                                                //            pack: 'center',
                                                                //            align: 'center'

                                                                //        },
                                                                //        height: 35,
                                                                //        // margin:'10 0 0 0',
                                                                //        items: [

                                                                //                //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                                //                //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                                //                //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                                //                //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                                //                //    '</div></div></div>'

                                                                //                {

                                                                //                    width: '60%',
                                                                //                    id: 'htmlFloatPanel_PointManagement_CreatePointsSendPointTxt',
                                                                //                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(0)</div>',
                                                                //                },
                                                                //                {
                                                                //                    xtype: 'spacer',
                                                                //                    width: '2%',
                                                                //                },
                                                                //                {
                                                                //                    width: '28%',
                                                                //                    html: ' <input type="text" placeHolder="Year Only"  id="FloatPanel_PointManagement_CreatePointsMonthYear" style="border-color:purple;color:black;width:100px;text-align: center;font-size:14px;font-weight:bold;">',
                                                                //                },
                                                                //        {
                                                                //            xtype: 'button',
                                                                //            height: 30,
                                                                //            width:27,
                                                                //            html: '<img src="resources/icons/calendar01.png"  style="width:17px;height:20px;margin:0px 0px 0px -10px;" alt="Company Name">',
                                                                //            ui: 'plain',
                                                                //            handler: function () {
                                                                //                FloatPanel_YearOnlyShow();
                                                                //            }
                                                                //        }
                                                                //                //{

                                                                //                //    width: '50%',
                                                                //                //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                                //                //},
                                                                //                //     //{
                                                                //                     //    margin: '-8 0 0 0',

                                                                //                     //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                //                     //},
                                                                //                     // {
                                                                //                     //     margin: '-7 0 0 0',

                                                                //                     //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                //                     // },


                                                                //        ]
                                                                //    },

                                        {
                                            xtype: 'tabpanel',
                                            // hidden: true,
                                            //  hidden:true,
                                            id: 'tabpanelFloatPanel_PointManagement_CreatePointsMaster',
                                            // style: 'border-top:2px solid #ECF0F1;background: white;',
                                            // style: 'background-color: black;',
                                            // margin: '-20 0 0 -26',
                                            // margin: '25 0 0 0',

                                            //width: 200,
                                            width: '100%',
                                            height: '100%',
                                            //height: 120,
                                            //height: 50,
                                            //  zIndex: 200,
                                            //  docked: 'bottom',
                                            tabBarPosition: 'top',
                                            ui: 'plain',
                                            // docked: 'bottom',

                                            initialize: function (c) {
                                                //this.getTabBar().hide();
                                              

                                            },



                                            items: [



                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_PointManagement_CreatePointsMaster_Subscriber',
                                                     width: '100%',
                                                     height: '100%',
                                                     //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                                     style: "background-color: transparent;",
                                                     //style: "background-color: #F35B57;",
                                                     title: 'Subscriber',
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
                                                     //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
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
                                                           style: "background-color: transparent;",
                                                           layout: {
                                                               type: 'vbox',
                                                               pack: 'start',
                                                               align: 'left'

                                                           },
                                                           items: [

                                                     
                                                            {
                                                                xtype: 'list',
                                                                store: 'MembershipsLoadByCampaignCodeStore',
                                                                id: 'FloatPanel_PointManagement_CreatePoints_List',
                                                                height:'100%',
                                                                mode: 'SINGLE',
                                                                //grouped: true,
                                                                disableSelection: true,
                                                                itemTpl: '<div class="myContent">' +

                                                                          '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                          + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                                          + '<br>'
                                                                          + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo} - {Email}</div> '
                                                                           + '<br>'
                                                                          + '<div style="width:100%;float:left;text-align:left;margin:-10px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:purple;"><div style="width:58%;float: left;">Bill Amount(RM)</dv> <div style="width:40%;float: right;">Points</div></div>'
                                                                           + '<br>'
                                                                          + '<div style="width:100%;float:left;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;"><div style="width:35%;float: left;"><input type="number"    id="input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_{ID}" placeHolder="RM 00.00"   oninput="PointManagement_OnInputAMount({ID})" style="border-color:purple;color:purple;width:30%;text-align: center;font-size:16px;font-weight:bold;"></div><div style="width:40%;float: left;"><input type="text"    id="input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_{ID}" placeHolder="0"  readOnly  style="border-color:black;color:purple;width:30%;text-align: left;font-size:16px;font-weight:bold;"></div></div>'
                                                                           + '<br>'
                                                                          + '<div style="width:100%;text-align:right;margin:-60px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="PointManagement_OnChangeCheckbox (this,{ID})" name="checkbox" /></div>'

                                                                          + '</div>' +

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
                                                                //     store: 'MembershipsLoadByCampaignCodeStore',
                                                                //     id: 'FloatPanel_PointManagement_CreatePoints_List',
                                                                //     height:'100%',
                                                                //     mode: 'SINGLE',
                                                                //     //grouped: true,
                                                                //     disableSelection: true,
                                                                //     itemTpl: '<div class="myContent">' +

                                                                //               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                //               + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                                //               + '<br>'
                                                                //               + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo} - {Email}</div> '
                                                                //                + '<br>'
                                                                //               + '<div style="width:100%;text-align:left;margin:-10px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:purple;">Bill Amount(RM) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Points</div>'
                                                                //                + '<br>'
                                                                //               + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;"><input type="number"    id="input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_{ID}" placeHolder="RM 00.00"   oninput="PointManagement_OnInputAMount({ID})" style="border-color:purple;color:purple;width:30%;text-align: center;font-size:16px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"    id="input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_{ID}" placeHolder="0"    style="border-color:transparent;color:purple;width:30%;text-align: center;font-size:16px;font-weight:bold;"></div>'
                                                                //                + '<br>'
                                                                //               + '<div style="width:100%;text-align:right;margin:-50px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="PointManagement_OnChangeCheckbox (this,{ID})" name="checkbox" /></div>'

                                                                //               + '</div>' +

                                                                //       '</div>',
                                                                //     width: '100%',
                                                                //     listeners: {
                                                                //         itemsingletap: function (list, idx, target, records, evt) {

                                                                //         },
                                                                //         deselect: function (list, records) {

                                                                //         }
                                                                //     },

                                                                // },

                                                           ]
                                                       },


                                                     ]

                                                 },




                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_PointManagement_CreatePointsMaster_SendPointHistory',
                                                     width: '100%',
                                                     height: '100%',
                                                     //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                                     style: "background-color: transparent;",
                                                     //style: "background-color: #F35B57;",
                                                     title: 'SendPointHistory',
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
                                                     //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
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
                                                           style: "background-color: transparent;",
                                                           layout: {
                                                               type: 'vbox',
                                                               pack: 'start',
                                                               align: 'left'

                                                           },
                                                           items: [

                                                          
                                                                   

                                                                {
                                                                    xtype: 'list',
                                                                    store: 'LoyaltyPointLoadByEnterpriseAccNoStore',
                                                                    id: 'FloatPanel_PointManagement_CreatePoints_SendPointHistory',
                                                                    height: '100%',
                                                                    mode: 'SINGLE',
                                                                    grouped: true,
                                                                    disableSelection: true,
                                                                    itemTpl: '<div class="myContent">' +

                                                                       // '<div style="width:100%;text-align:center;margin:-5px 0px 0px 0px"><img src="resources/icons/cancelremovebg.png" style="width: 100%; height: 130px;" /></div>' +
                                                                       '{ModifiedPointType}'+
                                         '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-120px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;"><u>{CustomerAccountName}</u></div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:70%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-5px 0px 0px 0px;">{CustomerPhoneNo} - {CustomerEmail}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly} -By:{PointedBy}</div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;width:100%;"><b>Bill Amount:{Amount}   |   {ModifiedTypeCRDB}{CountsPoint} Point(s)   |PID:{ID}</b><br></div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-26px 0px 0px 0px;width:100%;"><b>Bill ID:{ReceiptBillID}</b><br></div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-22px 0px 0px 0px;width:100%;"><b>Method:{PointQrCode}</b><br></div>{CancelStatus}</td></tr></table>' +

                 '</div>'
                                                                    + '<br>'
                                                                             + '<div style="width:100%;text-align:right;margin:-140px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="PointManagement_CreatePointHistory_OnChangeCheckbox (this,{ID})" name="checkbox" /></div><br><br><br><br>',

                                                                    emptyText: '<div class="myContent">No Transactions</div>',
                                                                    width: '100%',
                                                                    listeners: {
                                                                        itemsingletap: function (list, idx, target, records, evt) {

                                                                        },
                                                                        deselect: function (list, records) {

                                                                        }
                                                                    },

                                                                },

                                                           ]
                                                       },


                                                     ]

                                                 },

































                                            ]

                                            //}
                                        },


                                    ]

                                },






                               ////////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                   zIndex: 200,
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom',
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                  style:GetFooterStyle(),

                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'container',
                                                  width: '78%',
                                                  style: "background-color: transparent",
                                                  height: 55,
                                                  layout: {
                                                      type: 'hbox',
                                                     // pack: 'center',
                                                      align: 'left',
                                                  },
                                                //   scrollable: {
                                                //       direction: 'horizontal',
                                                //       directionLock: true
                                                //   },
                                                  items: [
                                                  

                                                      {
                                                          xtype: 'container',
                                                          width: 400,
                                                          style: "background-color: transparent",
                                                          height: 55,
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [

                                                            {
                                                                xtype: 'container',
                                                                width: '100%',
                                                               // hidden:true,
                                                                id: 'containerFloatPanel_PointManagement_CreatePointsSubcribers',
                                                                style: 'background-color:white',
                                                               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'left',
                                                                    align: 'left'

                                                                },
                                                                height: 35,
                                                                // margin:'10 0 0 0',
                                                                items: [

                                                                    {
                                                                        xtype: 'panel',
                                                                        width: 15,
                                                                    },
                                                                    {
                                                                        width: 20,
                                                                        height: 20,
                                                                        hidden:true,
                                                                        margin: '5 0 0 0',
                                                                        id: 'htmlFloatPanel_PointManagement_CreatePointsSubscriberIcon',
                                                                        html: '<img src="resources/icons/userlistPurple.png" width="20" height="20" alt="Company Name">',
                                                                    },
                                                                           {

                                                                               //width: '26%',
                                                                               id: 'htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt',
                                                                               margin: '5 0 0 5',
                                                                               html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found</div>',
                                                                           },

                                                                ]
                                                            },
                                                               {
                                                                   xtype: 'container',
                                                                   width: '100%',
                                                                   hidden: true,
                                                                   id: 'containerFloatPanel_PointManagement_CreatePointsSendPointHistory',
                                                                   style: 'background-color:white;color:white',
                                                                   //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                                   layout: {
                                                                       type: 'hbox',
                                                                       pack: 'center',
                                                                       align: 'center'

                                                                   },
                                                                   height: 35,
                                                                   // margin:'10 0 0 0',
                                                                   items: [

                                                                           //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                                           //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                                           //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                                           //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                                           //    '</div></div></div>'

                                                                           {

                                                                               width: '60%',
                                                                               id: 'htmlFloatPanel_PointManagement_CreatePointsSendPointTxt',
                                                                               html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(0)</div>',
                                                                           },
                                                                           {
                                                                               xtype: 'spacer',
                                                                               width: '2%',
                                                                           },
                                                                           {
                                                                               width: '28%',
                                                                               html: ' <input type="text" placeHolder="Year Only"  id="FloatPanel_PointManagement_CreatePointsMonthYear" style="border-color:purple;color:black;width:100px;text-align: center;font-size:14px;font-weight:bold;">',
                                                                           },
                                                                   {
                                                                       xtype: 'button',
                                                                       height: 30,
                                                                       width:27,
                                                                       html: '<img src="resources/icons/calendar01.png"  style="width:17px;height:20px;margin:0px 0px 0px -10px;" alt="Company Name">',
                                                                       ui: 'plain',
                                                                       handler: function () {
                                                                           FloatPanel_YearOnlyShow();
                                                                       }
                                                                   }
                                                                           //{

                                                                           //    width: '50%',
                                                                           //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                                           //},
                                                                           //     //{
                                                                                //    margin: '-8 0 0 0',

                                                                                //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                                //},
                                                                                // {
                                                                                //     margin: '-7 0 0 0',

                                                                                //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                                // },


                                                                   ]
                                                               },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom',
                                                                  name: 'containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name',
                                                                  //flex: 1,
                                                                  width:100,
                                                                  //height: 30,
                                                                  margin: '0 0 0 0',
                                                                  // flex: 1,
                                                                  style: "background-color: white",
                                                                  //style: "background-color: #F35B57;",

                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [

                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/userlistPurple.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               //  FloatPanel_AyohaUserRegistrationAddNewShow();
                                                                               //Ext.getCmp('mainView').setActiveItem(0);
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerFloatPanel_PointManagement_CreatePointsSubscriberTxt',
                                                                           style: "background-color: white",
                                                                           width: '100%',
                                                                           layout: {
                                                                               type: 'vbox',
                                                                               pack: 'start',
                                                                               align: 'center'

                                                                           },
                                                                           items: [
                                                                               {
                                                                                   margin: '-14 0 0 0',
                                                                                   id: 'htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt01',
                                                                                   html: '<font size=1 color=purple><b><u>Loyalty Point</u></b></font>',
                                                                               },
                                                                               {
                                                                                   margin: '-10 0 0 0',
                                                                                   id: 'htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt02',
                                                                                   html: '<font size=1 color=purple><b><u>Subscribers</u></b></font>',
                                                                               },
                                                                           ]

                                                                       },


                                                                  ]
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerFloatPanel_PointManagement_CreatePointsHistory_MenuBottom',
                                                                  name: 'containerFloatPanel_PointManagement_CreatePointsHistory_MenuBottom_Name',
                                                                  //zIndex:100,
                                                                  //width: '33.3%',
                                                                  //height: 55,
                                                                 // flex: 1,
                                                                 width:100,
                                                                  margin: '0 0 0 0',
                                                                  
                                                                  style: "background-color: transparent",
                                                                  //style: "background-color: #F35B57;",

                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [

                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_PointManagement_CreatePointsHistory_MenuBottom',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/MessageHistory02.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               // FloatPanel_AyohaEnterpriseAccountShow();
                                                                             //  FloatPanel_PointManagement_CreatePoints_SendPointHistory();
                                                                             
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt',
                                                                           width: '100%',
                                                                           layout: {
                                                                               type: 'vbox',
                                                                               pack: 'start',
                                                                               align: 'center'

                                                                           },
                                                                           items: [
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   id: 'htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt01',
                                                                                   html: '<font size=1 color=grey>Create Point</font>'
                                                                               },
                                                                               {
                                                                                   margin: '-10 0 0 0',
                                                                                   id: 'htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt02',
                                                                                   html: '<font size=1 color=grey>History</font>'
                                                                               },
                                                                           ]

                                                                       },


                                                                  ]
                                                              },

                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerFloatPanel_PointManagement_CreatePointsSearch_MenuBottom',
                                                                  hidden:true,
                                                                  //width: '33%',
                                                                  //height: 30,
                                                                  margin: '0 0 0 0',
                                                                  width:100,
                                                                  style: "background-color: transparent",
                                                                  //style: "background-color: #F35B57;",

                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [

                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_PointManagement_CreatePointsSearch_MenuBottom',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/searchPurpleTwo.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               //FloatPanel_MembershipCardManagementShow();

                                                                               if (globalSendPointHistoryTab == "Subscriber") {
                                                                                   FloatPanel_PointManagement_SearchSubscriberShow();
                                                                               }
                                                                               if (globalSendPointHistoryTab == "SendPointHistory") {
                                                                                   FloatPanel_PointManagement_SearchPointHistoryShow();
                                                                               }
                                                                              
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerFloatPanel_PointManagement_CreatePointsSearchTxt',
                                                                           width: '100%',
                                                                           layout: {
                                                                               type: 'vbox',
                                                                               pack: 'start',
                                                                               align: 'center'

                                                                           },
                                                                           items: [
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   // id: 'htmlStampHistoryTxt',
                                                                                   html: '<font size=1 color=grey>Search</font>'
                                                                               },
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   // id: 'htmlStampHistoryTxt',
                                                                                   html: '<font size=1 color=grey>.</font>'
                                                                               },
                                                                           ]

                                                                       },


                                                                  ]
                                                              },































                                                          ]

                                                      },
















                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                         //},
                                                    
                                                         {
                                                             xtype: 'container',
                                                             margin: '5 0 0 0',
                                                            zIndex: 200,
                                                             // hidden: true,
                                                             style: 'background-color: transparent;',
                                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                             height: 80,
                                                             width: '20%',
                                                             // margin: '70 0 0 0',
                                                             id: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconID',
                                                             name: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconName',
                                                             layout: {

                                                                 type: 'vbox',
                                                                 pack: 'start',
                                                                 align: 'center'
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'container',
                                                                     margin: '-55 0 0 -25',
                                                                     // hidden: true,
                                                                     // style: 'background-color: transparent;',
                                                                     style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                                     height: 100,
                                                                     width: 100,
                                                                     // margin: '70 0 0 0',
                                                                     id: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_Icon',
                                                                     layout: {

                                                                         type: 'vbox',
                                                                         pack: 'center',
                                                                         align: 'center'
                                                                     },
                                                                     items: [
                                                                         {
                                                                             xtype: 'button',
                                                                             height: 80,
                                                                             width: 80,
                                                                             margin: '-9 0 0 5',
                                                                             id: 'btnFloatPanel_PointManagement_CreatePoints_MenuBottom_Icon',
                                                                             html: '<img src="resources/icons/SendPointIconWhite03.png" width="70" height="50" alt="Company Name">',
                                                                             //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {
                                                                                
                                                                             }
                                                                         },
                                                                         {
                                                                             margin: '-20 0 0 0',
                                                                             html: '<div style="width:100%;text-align:left;color:white;font-family: Arial; font-size:11px;font-weight:bold">Create Point</div>',
                                                                         }


                                                                     ]
                                                                 },
                                                             ]
                                                         },


                                                         {
                                                             xtype: 'container',
                                                             margin: '5 0 0 0',
                                                             zIndex: 200,
                                                             hidden: true,
                                                             style: 'background-color: transparent;',
                                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                             height: 80,
                                                             width: '20%',
                                                             // margin: '70 0 0 0',
                                                             id: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelID',
                                                             name: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName',
                                                             layout: {

                                                                 type: 'vbox',
                                                                 pack: 'start',
                                                                 align: 'center'
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'container',
                                                                     margin: '-55 0 0 -25',
                                                                     // hidden: true,
                                                                     // style: 'background-color: transparent;',
                                                                     style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                                     height: 100,
                                                                     width: 100,
                                                                     // margin: '70 0 0 0',
                                                                     id: 'containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconDelete',
                                                                     layout: {

                                                                         type: 'vbox',
                                                                         pack: 'center',
                                                                         align: 'center'
                                                                     },
                                                                     items: [
                                                                         {
                                                                             xtype: 'button',
                                                                             height: 80,
                                                                             width: 80,
                                                                             margin: '-9 0 0 0',
                                                                             id: 'btnFloatPanel_PointManagement_CreatePoints_MenuBottom_IconDelete',
                                                                             html: '<img src="resources/icons/cancelWhite01.png" width="50" height="50" alt="Company Name">',
                                                                             //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {

                                                                             }
                                                                         },
                                                                         {
                                                                             margin: '-17 0 0 0',
                                                                             html: '<div style="width:100%;text-align:left;color:white;font-family: Arial; font-size:11px;font-weight:bold">Cancel Point</div>',
                                                                         }


                                                                     ]
                                                                 },
                                                             ]
                                                         },






                                          ]

                               },

                     





                           ]

                       },








                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatPanel_PointManagement_CreatePoints;



}



function FloatPanel_PointManagement_CreatePointShow(val) {

    Ext.Viewport.remove(_FloatPanel_PointManagement_CreatePoints);
    this.overlay = Ext.Viewport.add(FloatPanel_PointManagement_CreatePoints());
    this.overlay.show();
    Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePointsMaster').getTabBar().hide();
    isFloatPanel_PointManagement_CreatePointsOpen = 'Y';
    _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "Y";
    FloatPanel_PointManagement_CreatePointsAdjustHeight();
    FloatPanel_PointManagement_CreatePointsMonthYear_Month = "NA";
    FloatPanel_PointManagement_CreatePointsMonthYear_Year = "NA"
    globalYearSourceModule = "FloatPanel_PointManagement_CreatePoint";



    var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PC = PointCampaignCode.get('PointCampaignCode');



    localStorage.setItem('PointCampaignCode', PC);
    document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').value = GetCurrentYear();
    document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp);
   
    // document.getElementById("input-FloatPanel_PointManagement_CreatePoints_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_ListTypeSearchTxtOnKeyUp);

    //   AyohaNotificationMasterLoadByEnterpriseAccNoStore(FloatPanel_PointManagement_CreatePointsMonthYear_Year, FloatPanel_PointManagement_CreatePointsMonthYear_Month, "Current");  
    //document.getElementById("FloatPanel_PointManagement_CreatePointsMonthYear").addEventListener("change", FloatPanel_FloatPanel_PointManagement_CreatePoints_FloatPanel_PointManagement_CreatePointsMonthYear);
    //document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').valueAsDate = new Date();

    FloatPanel_PointManagement_MembershipsLoadByCampaignCodeStore();
    FloatPanel_PointManagement_CreatePoint_SubscriberAccNo = "";
    globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo = "";
    globalFloatPanel_PointManagement_CreatePoint_AmountValue = "";
    globalFloatPanel_PointManagement_CreatePoint_PointValue = "";




    arrFloatPanel_PointManagement_CreatePoint_AmountValue.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_PointValue.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_PlayerID.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_CheckingVal.length = 0;
    arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID.length = 0;
    arrFloatPanel_PointManagement_CreatePointHistory_PID.length = 0;

    var containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconName]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint = containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint.on('tap',
      function (event, node, options, eOpts) {
         
         FloatPanel_PointManagement_CreatePoints_select();
      }
    );



    var containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name = containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name.on('tap',
      function (event, node, options, eOpts) {
        document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp);
        document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value ="";
          _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
          FloatPanel_PointManagement_MembershipsLoadByCampaignCodeStore();
          Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePointsMaster').setActiveItem(0);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSubcribers').setHidden(false);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSendPointHistory').setHidden(true);

          Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconID').setHidden(false);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelID').setHidden(true);

          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt01').setHtml('<font size=1 color=grey>Create Point</font>');
          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');

          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt01').setHtml('<font size=1 color=purple><b><u>Loyalty Point</u></b></font>');
          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt02').setHtml('<font size=1 color=purple><b><u>Subscriber</u></b></font>');
         
      }
    );


    var containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePointsHistory_MenuBottom_Name]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory = containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory.on('tap',
      function (event, node, options, eOpts) {

        document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_ListTypeSearchPointHistoryTxtOnKeyUp);
        
          FloatPanel_PointManagement_CreatePoints_SendPointHistory();
      }
    );

   
    var containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName = containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_PointManagement_CreatePointHistory_Cancel();
      }
    );

   
}




function FloatPanel_PointManagement_CreatePointShow_FromMembershipDetailPage(val) {

    Ext.Viewport.remove(_FloatPanel_PointManagement_CreatePoints);
    this.overlay = Ext.Viewport.add(FloatPanel_PointManagement_CreatePoints());
    this.overlay.show();
    Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePointsMaster').getTabBar().hide();
    isFloatPanel_PointManagement_CreatePointsOpen = 'Y';
    _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "Y";
    FloatPanel_PointManagement_CreatePointsAdjustHeight();
    FloatPanel_PointManagement_CreatePointsMonthYear_Month = "NA";
    FloatPanel_PointManagement_CreatePointsMonthYear_Year = "NA"
    globalYearSourceModule = "FloatPanel_PointManagement_CreatePoint";

    document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").value=globalFloatPanel_MembershipDetailsPage_AccountName;

   // var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PC = val;

//alert(globalFloatPanel_MembershipDetailsPage_AccountName);

    localStorage.setItem('PointCampaignCode', PC);
    document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').value = GetCurrentYear();
    document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp);
   // document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("focus", FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp);
    
   // document.getElementById("input-FloatPanel_PointManagement_CreatePoints_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_ListTypeSearchTxtOnKeyUp);

    //   AyohaNotificationMasterLoadByEnterpriseAccNoStore(FloatPanel_PointManagement_CreatePointsMonthYear_Year, FloatPanel_PointManagement_CreatePointsMonthYear_Month, "Current");  
    //document.getElementById("FloatPanel_PointManagement_CreatePointsMonthYear").addEventListener("change", FloatPanel_FloatPanel_PointManagement_CreatePoints_FloatPanel_PointManagement_CreatePointsMonthYear);
    //document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').valueAsDate = new Date();
   
    FloatPanel_PointManagement_MembershipsLoadByCampaignCodeStore();
    FloatPanel_PointManagement_CreatePoint_SubscriberAccNo = "";
    globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo = "";
    globalFloatPanel_PointManagement_CreatePoint_AmountValue = "";
    globalFloatPanel_PointManagement_CreatePoint_PointValue = "";




    arrFloatPanel_PointManagement_CreatePoint_AmountValue.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_PointValue.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_PlayerID.length = 0;
    arrFloatPanel_PointManagement_CreatePoint_CheckingVal.length = 0;
    arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID.length = 0;
    arrFloatPanel_PointManagement_CreatePointHistory_PID.length = 0;

    var containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconName]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint = containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint.on('tap',
      function (event, node, options, eOpts) {
         
         FloatPanel_PointManagement_CreatePoints_select();
      }
    );



    var containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name = containerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePointsSubscriber_MenuBottom_Name.on('tap',
      function (event, node, options, eOpts) {
        document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp);
        document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value ="";        
        // _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
       //   FloatPanel_PointManagement_MembershipsLoadByCampaignCodeStore();
          Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePointsMaster').setActiveItem(0);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSubcribers').setHidden(false);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSendPointHistory').setHidden(true);

          Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconID').setHidden(false);
          Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelID').setHidden(true);

          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt01').setHtml('<font size=1 color=grey>Create Point</font>');
          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');

          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt01').setHtml('<font size=1 color=purple><b><u>Loyalty Point</u></b></font>');
          Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt02').setHtml('<font size=1 color=purple><b><u>Subscriber</u></b></font>');
         
      }
    );


    var containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePointsHistory_MenuBottom_Name]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory = containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory.on('tap',
      function (event, node, options, eOpts) {
        document.getElementById("input-FloatPanel_PointManagement_CreatePointsSearchText").addEventListener("keyup", FloatPanel_PointManagement_CreatePoints_ListTypeSearchPointHistoryTxtOnKeyUp);
        document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value ="";        
       _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
          FloatPanel_PointManagement_CreatePoints_SendPointHistory();
      }
    );

   
    var containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName = Ext.ComponentQuery.query('container[name=containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName]')[0];
    var containerViewElcontainerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName = containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName.element;
    containerViewElcontainerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelName.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_PointManagement_CreatePointHistory_Cancel();
      }
    );
   
    

   
}






function FloatPanel_PointManagement_CreatePoints_SearchTxtOnKeyUp() {


    var countLoyaltyPointSubscriber = 0;


    _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_MembershipsLoadByCampaignCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

               
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

    }


    else {
        console.log('tiada2');
        _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + globalcountLoyaltyPointSubscriber + ')</div>');

     //   Ext.getCmp('htmlFloatPanel_PointManagement_CreatePoint_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}


function FloatPanel_PointManagement_CreatePoints_SearchTxtOnLoaf_From_FloatPanel_MembershipDetailPage() {


    var countLoyaltyPointSubscriber = 0;


    _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_MembershipsLoadByCampaignCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

               
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

    }


    else {
        console.log('tiada2');
        _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + globalcountLoyaltyPointSubscriber + ')</div>');

     //   Ext.getCmp('htmlFloatPanel_PointManagement_CreatePoint_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}



var globalcountLoyaltyPointSubscriber;
function FloatPanel_PointManagement_CreatePoints_ListTypeSearchTxtOnKeyUp() {


    var countLoyaltyPointSubscriber = 0;


    _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_PointManagement_CreatePoints_SearchSubscriberTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_MembershipsLoadByCampaignCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

               
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countLoyaltyPointSubscriber = _Data_Store_MembershipsLoadByCampaignCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

    }


    else {
        console.log('tiada2');
        _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + globalcountLoyaltyPointSubscriber + ')</div>');

     //   Ext.getCmp('htmlFloatPanel_PointManagement_CreatePoint_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}


var globalcountLoyaltySendPointHistory;


function FloatPanel_PointManagement_CreatePoints_ListTypeSearchPointHistoryTxtOnKeyUp() {


    var countLoyaltySendPointHistory = 0;


    _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.clearFilter();

   // var queryString = document.getElementById('input-FloatPanel_PointManagement_SearchPointHistoryTxt').value;
    var queryString = document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value;
    //globalSearchSendPointVal = document.getElementById('input-FloatPanel_PointManagement_SearchPointHistoryTxt').value;


    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('CustomerAccountName'))) {
                console.log('ada0');

                countLoyaltySendPointHistory = _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.getCount();
              // Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');
                Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSendPointTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(' + countLoyaltySendPointHistory + ')</div>');

               
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countLoyaltySendPointHistory = _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSendPointTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(' + countLoyaltySendPointHistory + ')</div>');
      //  Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + countLoyaltyPointSubscriber + ')</div>');

    }


    else {
        console.log('tiada2');
        _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSendPointTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(' + globalcountLoyaltySendPointHistory + ')</div>');
        return false;
    }

}









var arrFloatPanel_PointManagement_CreatePoint = [];
var arrFloatPanel_PointManagement_CreatePoint_AmountValue = [];
var arrFloatPanel_PointManagement_CreatePoint_PointValue = [];
var arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo = [];
var arrFloatPanel_PointManagement_CreatePoint_PlayerID = [];
var arrFloatPanel_PointManagement_CreatePoint_CheckingVal = [];
var arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID = [];
var arrFloatPanel_PointManagement_CreatePointHistory_PID = [];


function PointManagement_OnInputAMount(ID) {
    var Amount = document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).value;
    //console.log(x);
    //console.log(ID);



    //  var Amount = document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value;
    var EarnPoint = parseFloat(Amount) * parseFloat(globalPointAmountEquation);
    globalEarnPoint = EarnPoint.toFixed(0);

    document.getElementById("input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_" + ID).value = globalEarnPoint;
    //   Ext.getCmp('HtmlFloatLoyaltyCardPoint_GeneratePoint_Points').setHtml('<div style="background: transparent;color:white; text-align:center;font-size:66px;font-weight:bold;width:100%;">' + EarnPoint.toFixed(2) + '</div>');


}


function PointManagement_CreatePointHistory_OnChangeCheckbox(checkbox, ID) {
  //  var AccountNo = _Data_Store_MembershipsLoadByCampaignCodeStore.findRecord('ID', ID, 0, false, false, true);


    var n = arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID.includes(ID);
    if (checkbox.checked) {

        if (n) {

        } else {
            arrFloatPanel_PointManagement_CreatePointHistory_PID.push(ID);
        }
        
    } else {
      
        var indexs = arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID.indexOf(ID);
        if (indexs > -1) {
            arrFloatPanel_PointManagement_CreatePointHistory_CheckingVal_ID.splice(indexs, 1);
        }
        var indexss = arrFloatPanel_PointManagement_CreatePointHistory_PID.indexOf(ID);
        if (indexss > -1) {
            arrFloatPanel_PointManagement_CreatePointHistory_PID.splice(indexss, 1);
        }
     

    }

    console.log(arrFloatPanel_PointManagement_CreatePointHistory_PID);

}



function PointManagement_OnChangeCheckbox(checkbox, ID) {







    var AccountNo = _Data_Store_MembershipsLoadByCampaignCodeStore.findRecord('ID', ID, 0, false, false, true);
    var PlayerID = _Data_Store_MembershipsLoadByCampaignCodeStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('SubscriberAccNo');
    var PlayerIDs = PlayerID.get('PlayerID');
    var n = arrFloatPanel_PointManagement_CreatePoint_CheckingVal.includes(PAccountNos);

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        if (n) {

        } else {

            var xx = document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).value;
            if (xx) {
                var x = document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).value;
                console.log(x);
                console.log(PAccountNos);
                console.log(PlayerIDs);

                //  document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).disabled = false;
                arrFloatPanel_PointManagement_CreatePoint_AmountValue.push("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID);
                arrFloatPanel_PointManagement_CreatePoint_PointValue.push("input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_" + ID);
                arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.push(PAccountNos);
                arrFloatPanel_PointManagement_CreatePoint_PlayerID.push(PlayerIDs);
                arrFloatPanel_PointManagement_CreatePoint_CheckingVal.push(PAccountNos);
            }
            else {
                swalFireWarning("Amount is Compulsory!");
                checkbox.checked = false;
            }



        }








    }
    else {
        //  alert("The check box is not checked.");
        // document.getElementById("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID).disabled = true;
        //var index = arrFloatPanel_PointManagement_CreatePoint.indexOf(PAccountNos);
        //if (index > -1) {
        //    arrFloatPanel_PointManagement_CreatePoint.splice(index, 1);
        //}
        var indexs = arrFloatPanel_PointManagement_CreatePoint_CheckingVal.indexOf(PAccountNos);
        if (indexs > -1) {
            arrFloatPanel_PointManagement_CreatePoint_CheckingVal.splice(indexs, 1);
        }

        var indexss = arrFloatPanel_PointManagement_CreatePoint_AmountValue.indexOf("input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_" + ID);
        if (indexss > -1) {
            arrFloatPanel_PointManagement_CreatePoint_AmountValue.splice(indexss, 1);
        }


        var indexsss = arrFloatPanel_PointManagement_CreatePoint_PointValue.indexOf("input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_" + ID);
        if (indexsss > -1) {
            arrFloatPanel_PointManagement_CreatePoint_PointValue.splice(indexsss, 1);
        }

        var indexssss = arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.indexOf(PAccountNos);
        if (indexssss > -1) {
            arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.splice(indexssss, 1);
        }

        var indexsssss = arrFloatPanel_PointManagement_CreatePoint_PlayerID.indexOf(PlayerIDs);
        if (indexsssss > -1) {
            arrFloatPanel_PointManagement_CreatePoint_PlayerID.splice(indexsssss, 1);
        }

    }


    //console.log(arrFloatPanel_PointManagement_CreatePoint);
}





var FloatPanel_PointManagement_CreatePoint_SubscriberAccNo;
var globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo;
var globalFloatPanel_PointManagement_CreatePoint_AmountValue;
var globalFloatPanel_PointManagement_CreatePoint_PointValue;
var globalFloatPanel_PointManagement_CreatePoint_PlayerID;


var globalFloatPanel_PointManagement_CreatePointHistory_ID;


function FloatPanel_PointManagement_CreatePointHistory_Cancel() {

    globalFloatPanel_PointManagement_CreatePointHistory_ID = "";
    for (i = 0; i < arrFloatPanel_PointManagement_CreatePointHistory_PID.length; i++) {
        // FloatPanel_PointManagement_CreatePoint_SubscriberAccNo += arrFloatPanel_PointManagement_CreatePoint_AmountValue[i];

        globalFloatPanel_PointManagement_CreatePointHistory_ID += arrFloatPanel_PointManagement_CreatePointHistory_PID[i]+ ",";
       

    }


    if (arrFloatPanel_PointManagement_CreatePointHistory_PID.length < 1) {
        swalFireFail('No Data Selected!');
        return;
    }



    Swal.fire({
        title: 'Are you sure To Cancel Point?',
        text: "Cancel  point will effected your customer point!.The Process cannot be undo,Recommended to send Notification to your customer about this cancellation",
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
          

            var objn = {
                "IDS": globalFloatPanel_PointManagement_CreatePointHistory_ID.slice(0, -1),
                "ModifiedBy": GetCurrentAccountName(),
            };

            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/LoyaltyPoint/LoyaltyPointCreatePointCancelLooping',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        swalFireSuccess("Cancel Point Successfully!");
                        // FloatLoyaltyCardPoint_GeneratePointHide();


                    }
                    else {
                        // swalFireFail("Share Point  Error!")
                        swalFireFail("Cancel Point  Error!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Cancel Point Failed!")
                }

            });
        }
    });



 
}




function FloatPanel_PointManagement_CreatePoints_select() {


    globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo = "";
    globalFloatPanel_PointManagement_CreatePoint_AmountValue = "";
    globalFloatPanel_PointManagement_CreatePoint_PointValue = "";
    globalFloatPanel_PointManagement_CreatePoint_PlayerID = "";



    if (arrFloatPanel_PointManagement_CreatePoint_AmountValue.length > 1) {


        for (i = 0; i < arrFloatPanel_PointManagement_CreatePoint_AmountValue.length; i++) {
            // FloatPanel_PointManagement_CreatePoint_SubscriberAccNo += arrFloatPanel_PointManagement_CreatePoint_AmountValue[i];

            globalFloatPanel_PointManagement_CreatePoint_AmountValue += document.getElementById(arrFloatPanel_PointManagement_CreatePoint_AmountValue[i]).value + ",";
            globalFloatPanel_PointManagement_CreatePoint_PointValue += document.getElementById(arrFloatPanel_PointManagement_CreatePoint_PointValue[i]).value + ",";
            globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo += arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo[i] + ",";
            globalFloatPanel_PointManagement_CreatePoint_PlayerID += arrFloatPanel_PointManagement_CreatePoint_PlayerID[i] + ",";

        }
    }






    if (arrFloatPanel_PointManagement_CreatePoint_AmountValue.length == 1) {


        globalFloatPanel_PointManagement_CreatePoint_AmountValue = document.getElementById(arrFloatPanel_PointManagement_CreatePoint_AmountValue[0]).value + ",";
        globalFloatPanel_PointManagement_CreatePoint_PointValue = document.getElementById(arrFloatPanel_PointManagement_CreatePoint_PointValue[0]).value + ",";
        globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo = arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo[0] + ",";
        globalFloatPanel_PointManagement_CreatePoint_PlayerID = arrFloatPanel_PointManagement_CreatePoint_PlayerID[0] + ",";

        if (globalFloatPanel_PointManagement_CreatePoint_PlayerID == ",") {
            globalFloatPanel_PointManagement_CreatePoint_PlayerID = "NA,";
          //  alert(globalFloatPanel_PointManagement_CreatePoint_PlayerID);
        }

 
    }
  

   

    if (arrFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.length < 1) {
        swalFireFail('No Member(s) Selected!');
        return;
    }



    var objn = {
        "SubscriberAccNo": globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.slice(0, -1),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "PointCode": GetPointCampaignCode(),
        "PointQrCode": "BulkMethod",
        "PointedBy": GetCurrentAccountName(),
        "PointedByPhoneModel": "NA",
        "PointedByUserAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
        "PointedByPhoneSerialNo": "NA",
        "PointedByPhoneManufacturer": "NA",
        "PointedByPhonePlatform": "NA",
        "PointedByOneSignalID": globalFloatPanel_PointManagement_CreatePoint_PlayerID.slice(0, -1),
        "PointedByPhoneRawInfo": "NA",
        "CountsPoint": globalFloatPanel_PointManagement_CreatePoint_PointValue.slice(0, -1),
        "PointCampaignCode": GetPointCampaignCode(),
        //"Batch":1,
        "Amount": globalFloatPanel_PointManagement_CreatePoint_AmountValue.slice(0, -1),
        "ReceiptBillID": "NotRequired",
        "PointEquation": globalPointAmountEquation,
        "TypeCRDB": "Credit",
        "PointType": "Earn",
        "EnterpriseName": localStorage.getItem('CurrEnterpriseName'),
        "PlayerID":globalFloatPanel_PointManagement_CreatePoint_PlayerID.slice(0, -1),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/LoyaltyPoint/LoyaltyPointInsertLooping',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Point Generated and Sent Successfully!");
                ReloadDashboard_LoadMembershipsLatestActivity();
                // FloatLoyaltyCardPoint_GeneratePointHide();


            }
            else {
                // swalFireFail("Share Point  Error!")
                swalFireFail("Point  Error!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            Ext.Viewport.unmask();
            swalFireFail("Point Failed!")
        }

    });
}







function FloatPanel_PointManagement_CreatePoints_SendPointHistory() {
    Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePointsMaster').setActiveItem(1);
    Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSubcribers').setHidden(true);
    Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsSendPointHistory').setHidden(false);
    Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconID').setHidden(true);
    Ext.getCmp('containerFloatPanel_PointManagement_CreatePoints_MenuBottom_IconCancelID').setHidden(false);


    Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Create Point</u></b></font>');
    Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsCreatePointsHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');

    Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt01').setHtml('<font size=1 color=grey>Loyalty Point</font>');
    Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscriberTxt02').setHtml('<font size=1 color=grey>Subscriber</font>');
    
    FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore(GetCurrentMonth(), GetCurrentYear());
}




//var FloatPanel_PointManagement_CreatePointsMonthYear_Month;
//var FloatPanel_PointManagement_CreatePointsMonthYear_Year;
//function FloatPanel_FloatPanel_PointManagement_CreatePoints_FloatPanel_PointManagement_CreatePointsMonthYear() {

//    var input0 = document.getElementById("FloatPanel_PointManagement_CreatePointsMonthYear").value;
//    var FloatPanel_PointManagement_CreatePointsMonthYear_partsOfStr = input0.split('-');
//    FloatPanel_PointManagement_CreatePointsMonthYear_Year = FloatPanel_PointManagement_CreatePointsMonthYear_partsOfStr[0];
//    FloatPanel_PointManagement_CreatePointsMonthYear_Month = FloatPanel_PointManagement_CreatePointsMonthYear_partsOfStr[1].replace("0", "");
//    FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore(FloatPanel_PointManagement_CreatePointsMonthYear_Month, FloatPanel_PointManagement_CreatePointsMonthYear_Year);

// //   FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore(FloatPanel_PointManagement_CreatePointsMonthYear_Year, FloatPanel_PointManagement_CreatePointsMonthYear_Month, "Selection");
//    //console.log(FloatPanel_PointManagement_CreatePointsMonthYear_partsOfStr[0]);
//    //console.log(FloatPanel_PointManagement_CreatePointsMonthYear_partsOfStr[1]);

//}


function FloatPanel_PointManagement_CreatePointsHide() {
    _FloatPanel_PointManagement_CreatePoints.hide();
    _Data_Store_MembershipsLoadByCampaignCodeStore.clearFilter();
    document.getElementById('input-FloatPanel_PointManagement_CreatePointsSearchText').value="";
    isFloatPanel_PointManagement_CreatePointsOpen = 'N';
    _FloatPanel_PointManagement_CreatePoints_isFirstLoad = "N";
    FloatPanel_FloatPanel_PointManagement_CreatePoints_AddHide();
}




function FloatPanel_PointManagement_CreatePointsAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = x - 90;
    var newHeights = x;

    //  var newHeight = adjustedHeight - 80;

    //alert(newHeight)

    // Ext.getCmp('tabpanelFloatPanel_PointManagement_CreatePoints').setHeight(newHeight);
    Ext.getCmp('FloatPanel_PointManagement_CreatePoints_List').setHeight(newHeight-40);
    Ext.getCmp('containerFloatPanel_PointManagement_CreatePointsMasterMaster').setHeight(newHeight);
    Ext.getCmp('FloatPanel_PointManagement_CreatePoints_SendPointHistory').setHeight(newHeight - 40);
    





}



var _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore;
var globalSendPointHistoryTab;
function FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore(LoyaltyPointMonth, LoyaltyPointYear) {

    if (globalSearchSendPointVal) {
        _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.clearFilter();
    }
    
    globalSendPointHistoryTab = "SendPointHistory";
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'ReLoading....' });
    Ext.getStore('LoyaltyPointLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo(),
        Month: LoyaltyPointMonth,
        Year: LoyaltyPointYear,
    });
    Ext.StoreMgr.get('LoyaltyPointLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyPointLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo(),
            Month: LoyaltyPointMonth,
            Year: LoyaltyPointYear,
        });
       // _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore.clearFilter();
        _DataStore_LoyaltyPointLoadByEnterpriseAccNoStore = Ext.StoreMgr.get('LoyaltyPointLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyPointLoadByEnterpriseAccNoStore');
        globalcountLoyaltySendPointHistory = myStore.getCount();
        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSendPointTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Create Point History(' + globalcountLoyaltySendPointHistory + ')</div>');
        Ext.Viewport.setMasked(false);
      


    });
    task.delay(500);
}





var _Data_Store_MembershipsLoadByCampaignCodeStore;
function FloatPanel_PointManagement_MembershipsLoadByCampaignCodeStore() {

    globalPushNotificationID = "";
    PushNotificationID = "";
    globalSendPointHistoryTab = "Subscriber";
    Ext.getStore('MembershipsLoadByCampaignCodeStore').getProxy().setExtraParams({
        CampaignCode: GetPointCampaignCode()
    });
    Ext.StoreMgr.get('MembershipsLoadByCampaignCodeStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipsLoadByCampaignCodeStore').getProxy().setExtraParams({
            CampaignCode: GetPointCampaignCode()
        });

        _Data_Store_MembershipsLoadByCampaignCodeStore = Ext.StoreMgr.get('MembershipsLoadByCampaignCodeStore').load();
        var myStore = Ext.getStore('MembershipsLoadByCampaignCodeStore');
        var count = myStore.getCount();
        globalcountLoyaltyPointSubscriber = count;

        Ext.getCmp('htmlFloatPanel_PointManagement_CreatePointsSubscribersTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;">Records Found (' + globalcountLoyaltyPointSubscriber + ')</div>');



        for (i = 0; i < count; i++) {
            var modelRecorded = myStore.getAt(i);
            //var AccountNo = modelRecorded.get('AccountNo');
            //var AccountName = modelRecorded.get('AccountName');
            //var PhoneNo = modelRecorded.get('PhoneNo');
            //var Email = modelRecorded.get('Email');
            //var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
            PushNotificationID += modelRecorded.get('PlayerID') + ",";


        }


        var text = PushNotificationID.replace("undefined", "");
        globalPushNotificationID = text.slice(0, -1) //'abcde'



        console.log(globalPushNotificationID);
        FloatPanel_PointManagement_CreatePoints_SearchTxtOnLoaf_From_FloatPanel_MembershipDetailPage();
        FloatPanel_PointManagement_PointCampaignLoadByPointCampaignCodeStore();
        Ext.Viewport.setMasked(false);




    });
    task.delay(800);

}





function FloatPanel_PointManagement_PointCampaignLoadByPointCampaignCodeStore() {




    Ext.getStore('PointCampaignLoadByPointCampaignCodeStore').getProxy().setExtraParams({
        PointCampaignCode: GetPointCampaignCode()
    });
    Ext.StoreMgr.get('PointCampaignLoadByPointCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('PointCampaignLoadByPointCampaignCodeStore').getProxy().setExtraParams({
            PointCampaignCode: GetPointCampaignCode()
        });
        Ext.StoreMgr.get('PointCampaignLoadByPointCampaignCodeStore').load();
        var myStore = Ext.getStore('PointCampaignLoadByPointCampaignCodeStore');
        // count = myStore.getCount();
        var modelRecorded = myStore.getAt(0);
        var Remarks = modelRecorded.get('Remarks');
        var isPointRulePopUp = modelRecorded.get('isPointRulePopUp');
        var PointOption = modelRecorded.get('PointOption');
        globalPointAmountEquation = modelRecorded.get('PointAmountEquation');
        var RequiredReceiptBillNo = modelRecorded.get('RequiredReceiptBillNo');





        globalRequiredReceiptBillNo = RequiredReceiptBillNo;
        // adjustHeight();
        Ext.Viewport.setMasked(false);



    });
    task.delay(500);


}