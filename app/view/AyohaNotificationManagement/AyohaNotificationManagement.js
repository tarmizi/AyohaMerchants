Ext.define('ianMizi.view.AyohaNotificationManagement.AyohaNotificationManagement', {

});


var _AyohaNotificationManagement;


var isAyohaNotificationManagementOpen = 'N';



var _AyohaNotificationManagement_isFirstLoad = "N";







function AyohaNotificationManagement() {

    _AyohaNotificationManagement =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingAyohaNotificationManagementID',
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

                                   id: 'containerAyohaNotificationManagementHeader',
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
                                                width:20

                                            },

                                            {
                                                margin: '0 0 0 0',
                                                id: 'htmlAyohaNotificationManagementTitleTxt',
                                                html: '<font size=4 color=black><b>Push Notifications</b></font>'
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
'<input type="text" id="input-AyohaNotificationManagementSearchTxt"  placeHolder="Search (Notification Title)" class="search-input" >'+
'</div>'
},


{
    xtype: 'spacer',
width:10
},
{
    xtype: 'container',
    hidden:true,
    width: 1,
    height: '60%',
    style: ' background-color: #ccc;',
},{
    xtype: 'spacer',
    hidden:true,
width:10
},
{
  width: '40%',
  hidden:true,
  html:' <input type="month" id="AyohaNotificationManagementMonthYear" style="border-color:purple;color:black;width:120px;text-align: left">',
},
// {
//     xtype: 'spacer',
//     width:20
// },

// {
// //id:'htmlFloatPanel_MembershipActivity_Selection',
//         html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px"  id="AyohaNotificationManagement_Selection"><option value="NA"> - Filter - </option><option value="Today">Today</option><option value="ThisWeek">This Week</option><option value="Month">This Month</option><option value="Year">This Year</option><option value="Custome">Custome Date</option></select></div>'  
     
// },
              {
                  xtype: 'spacer',

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
                                                            id: 'btnAyohaNotificationManagementBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _AyohaNotificationManagement.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isAyohaNotificationManagementOpen = 'N';
                                                                _AyohaNotificationManagement_isFirstLoad = "N";
                                                              //  FloatPanel_AyohaNotificationManagement_AddHide();
                                                            }
                                                        },

                                                        {
                                                            xtype: 'spacer',
                                                            width:20
            
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnAyohaNotificationManagement_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/BlastingMsgWhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _AyohaNotificationManagement.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isAyohaNotificationManagementOpen = 'N';
                                                                 _AyohaNotificationManagement_isFirstLoad = "N";
                                                               //  FloatPanel_AyohaNotificationManagement_AddHide();

                                                             }
                                                         },



                                                          //{
                                                          //    margin: '2 0 0 0',
                                                          //    id: 'htmlAyohaNotificationManagementPointTitle',
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
                                                          //        id: 'containerAyohaNotificationManagementPicture',
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
                                                          //                id: 'btnAyohaNotificationManagement_PointIcon',
                                                          //                //badgeText: "2",
                                                          //                html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 0%;  margin:-1px 0px 0px 2px"></div>',
                                                          //                ui: 'plain',
                                                          //                handler: function () {



                                                          //                    _AyohaNotificationManagement.hide(Ext.fx.Animation({
                                                          //                        type: 'slideOut',
                                                          //                        direction: 'right',
                                                          //                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                          //                        duration: 250

                                                          //                    }));
                                                          //                    isAyohaNotificationManagementOpen = 'N';
                                                          //                    _AyohaNotificationManagement_isFirstLoad = "N";

                                                          //                }
                                                          //            },



                                                          //        ]
                                                          //    },










                                          ]

                               },



                               ///////////

                               {
                                   xtype: 'container',
                                   hidden:true,
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
                                   id: 'containerAyohaNotificationManagementMasterHeader',
                                   hidden:true,
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
                                           id: 'htmlAyohaNotificationManagementMasterHeaderIcon',
                                           html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                                       },
                                       {
                                           //  width: 150,
                                           margin: '0 0 0 5',                                          
                                           html: '<font size=2 color=black>Sent Historys</font>'
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
                                    id: 'containerAyohaNotificationManagementMasterMaster',
                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                    zIndex: 90,
                                    //height:200,
                                    // autoHeight:true,
                                    height: '92%',
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


                                        {
                                            xtype: 'tabpanel',
                                            // hidden: true,
                                            //  hidden:true,
                                            id: 'tabpanelAyohaNotificationManagementMaster',
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
                                                     id: 'containerAyohaNotificationManagementMaster_PushNotification',
                                                     width: '100%',
                                                     height: '100%',
                                                     //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                                     style: "background-color: transparent;",
                                                     //style: "background-color: #F35B57;",
                                                     title: 'PushNotification',
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
        type: 'hbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',           
            id:'AyohaNotification_WebContainer',
            width: '65%',
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
                    height: 40,
                   // margin: '-10 0 0 0',                           
                    style: "background-color: transparent;border-bottom:1px solid #ECF0F1",
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                          {
                              xtype: 'container',
                              width: '33%',
                              margin: '0 0 0 0',                    
                              style: 'background-color:transparent',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'left',
                              },
                              items: [
                                
                 {
                    margin: '0 0 0 5',
                  
                    html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Sent History</div>',
                },
                              ]
                          },
                             {
                                 xtype: 'container',
                                 width: '33%',

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
                                     align: 'center',
                                 },
                                 items: [
                                  
                                 ]
                             },
                               {
                                   xtype: 'container',
                                   width: '33%',

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
                                        //id:'htmlFloatPanel_MembershipActivity_Selection',
                                                html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px"  id="AyohaNotificationManagement_Selection"><option value="NA"> - Filter - </option><option value="Today">Today</option><option value="ThisWeek">This Week</option><option value="Month">This Month</option><option value="Year">This Year</option><option value="Custome">Custome Date</option></select></div>'  
                                             
                                        },
                                   ]
                               },

                          
                    ]
                },

                


                {
                    xtype: 'panel',
                    width: '100%',                  
                    items: [
                        {
                          //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                           // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                           // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                            html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:4%;"><span style="font-family: Arial;padding:0px 10px"><b>No</b></span></div ><div style="float:left;width:31%;font-family: Arial;padding:0px 0px"><b>Title</b></div ><div style="float:left;width:9%;font-family: Arial;padding:0px 0px"><b>Type</b></div ><div style="float:left;width:16.5%;"><b>Audience</b></div><div style="float:left;width:20%;"><b>Sent Date/By</b></div><div style="float:left;width:12%;"><b>Receipients</b></div><div style="float:left;width:5.3%;"><b></b></div></div></div></div>'
                           // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'

                            
                        }
                    ]
                },
                 
                
                    

                 {
                     xtype: 'list',
                     zIndex:100,
                     flex:1,
                     //height: '100%',
                     //store: 'AyohaNotificationMasterLoadByEnterpriseAccNoStore',
                     store:_DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore,
                    // id: 'AyohaNotificationManagement_PushNotificationList',
                     mode: 'SINGLE',
                     //hidden:true,
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

                     itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                          
                                             
                                                                    
                                           
                     // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                      '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:3%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:32%;color:black;font-size:12px;">{NotificationTitle}</div><div style="float:left;width:9%;color:black;font-size:12px;">{NotificationType}</div><div style="float:left;width:17%;color:black;font-size:12px;">{AudienceType}</div><div style="float:left;width:18%;color:black;font-size:12px;text-align:left;">{CreatedDate}<br>({AccountName})</div><div style="float:left;width:11%;color:black;font-size:12px;text-align:center;padding:0px 0px;cursor:pointer" OnClick="FloatPanel_AyohaNotificationManagement_RecipientListShow({ID})"><button  OnClick="FloatPanel_AyohaNotificationManagement_RecipientListShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-10px 0px 0px 0px;cursor:pointer"><img src="resources/icons/userlistPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:center;margin:-16px 0px 0px 12px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"><b>{SendToAudiencesCount}</b></div></div><div style="float:left;width:10%;color:black;font-size:12px;text-align:center;padding:0px 0px;cursor:pointer;margin:-10px 0px 0px 0px;" OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:0px 0px 0px 0px;cursor:pointer"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:center;margin:-16px 0px 0px 12px;display:block;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;color:black;">View Message</div></div></div></div></div>'+



                           '</div>',

                    //  itemTpl: '<div class="myContent">' +
                        
                    //            '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                    //            + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Title</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationTitle}</div>'
                    //            + '<br>'
                    //            + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationType}</div>'
                    //             + '<br>'
                    //            + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Audience Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AudienceType}</div>'
                    //             + '<br>'
                    //            + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Recipients</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{SendToAudiencesCount}</div>'
                    //            + '<br>'
                    //            + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                    //             + '<br>'
                    //            + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'

                    //             + '<br>'
                    //            + '<div style="width:100%;text-align:right;margin:-105px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_RecipientListShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/userlistPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Recipient List</div></div>'
                    //            + '<br>'
                    //            + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">View Message</div></div>'


                    //            + '</div>' +
                     
                              
                    //    '</div>',
                     width: '100%',
                     emptyText: '<div class="myContent">No Push Notification Has Been Sent</div>',
                    

                 },

            ]
        },
        ///////////////////////tangni
        {
            xtype: 'container',
            hidden:true,
            id:'AyohaNotification_MobileContainer',
            width: '60%',
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
                    height: 80,
                   // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                   style: "background-color: transparent;border-bottom:1px solid #ECF0F1",
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'

                    }, items: [

                         {
                             margin: '5 0 0 15',
                           
                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><u>PUSH NOTIFICATION</u></div>',
                         },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 80,
                            margin: '-10 0 0 0',                           
                            style: "background-color: transparent;border-bottom:1px solid #ECF0F1",
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      xtype: 'container',
                                      width: '33%',
                                      margin: '0 0 0 0',                    
                                      style: 'background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                                        //    {
                                        //        margin: '5 0 0 0',
                                        //        html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Quota</div>',
                                        //    },
                                        //     {
                                        //         margin: '-5 0 0 0',
                                        //         id: 'htmlAyohaNotificationManagementQuota',
                                        //         html: '<div style="color:black;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                        //     },
                                      ]
                                  },
                                     {
                                         xtype: 'container',
                                         width: '33%',

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
                                             align: 'center',
                                         },
                                         items: [
                                            //   {
                                            //       margin: '5 0 0 0',
                                            //       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Used</div>',
                                            //   },
                                            //    {
                                            //        margin: '-5 0 0 0',
                                            //        id: 'htmlAyohaNotificationManagementUsed',
                                            //        html: '<div style="color:black;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                            //    },
                                         ]
                                     },
                                       {
                                           xtype: 'container',
                                           width: '33%',

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
                                               align: 'center',
                                           },
                                           items: [
                                                // {
                                                //     margin: '5 0 0 0',
                                                //     html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Balance</div>',
                                                // },
                                                //  {
                                                //      margin: '-5 0 0 0',
                                                //      id: 'htmlAyohaNotificationManagementBalance',
                                                //      html: '<div style="color:black;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                //  },
                                           ]
                                       },

                                  {
                                      xtype: 'container',
                                      width: '20%',
                                      hidden: true,
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
                                          align: 'center',
                                      },
                                      items: [
                                            {
                                                xtype: 'button',
                                                height: 60,
                                                width: 60,

                                                margin: '2 0 0 0',
                                                id: 'btnAyohaNotificationManagementCardImage',
                                                //badgeText: "2",
                                                html: '<img src="resources/icons/StampCardChopPurplenew.png" width="50" height="50" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {

                                                    //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                    //  setupMovementMap(2);





                                                    //Ext.getCmp('mainView').setActiveItem(16);
                                                    //loadNotificationSummary();
                                                }
                                            },

                                      ]
                                  },
                            ]
                        },


                    ]

                },



                 
                 {
                     xtype: 'panel',
                     height: 5
                 },

                    {
                        xtype: 'container',
                        width: '100%',
                        hidden:true,
                        // style: 'background-color:black;color:black',
                        style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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
                                  
                                },
                                {
                                    xtype: 'spacer',
                                    width:'2%',
                                },
                                
                   
                                //{

                                //    width: '50%',
                                //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                //},
                                //     //{
                                     //    margin: '-8 0 0 0',

                                     //    html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                     //},
                                     // {
                                     //     margin: '-7 0 0 0',

                                     //     html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                     // },


                        ]
                    },

                 {
                     xtype: 'list',
                     flex:1,
                     //height: '100%',
                     //store: 'AyohaNotificationMasterLoadByEnterpriseAccNoStore',
                     store:_DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore,
                    // id: 'AyohaNotificationManagement_PushNotificationList',
                     mode: 'SINGLE',
                     //hidden:true,
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
                     itemTpl: '<div class="myContent">' +
                        
                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                               + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Title</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationTitle}</div>'
                               + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationType}</div>'
                                + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Audience Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AudienceType}</div>'
                                + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Recipients</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{SendToAudiencesCount}</div>'
                               + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                + '<br>'
                               + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'

                                + '<br>'
                               + '<div style="width:100%;text-align:right;margin:-105px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_RecipientListShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/userlistPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Recipient List</div></div>'
                               + '<br>'
                               + '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">View Message</div></div>'


                               + '</div>' +
                     
                              
                       '</div>',
                     width: '100%',
                     emptyText: '<div class="myContent">No Push Notification Sent</div>',
                     listeners: {
                         itemsingletap: function (list, idx, target, records, evt) {

                      



                             //FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                             //    , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                             //Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                             //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                         },
                         deselect: function (list, records) {

                         }
                     },

                 },

            ]
        },
        {
xtype:'spacer',
width: 10,
height: '100%',

        },
{
    xtype: 'container',
    width: 1,
    height: '90%',
    style: "background-color: grey;",
},
        {
            xtype: 'container',
            width: '35%',
            height: '100%',
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[

                {
                    xtype: 'container',
                   // width: '33.33%',
                   height:265,
                   width: '100%',
                    style: "border:3px none #EAEDED",
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'center'
                
                    },
                    items:[
                        {
                            xtype: 'container',
                            name:'Name_containerchartPushNotificationsDashboard',
                           // width: '33.33%',
                           height:'100%',
                    width: '65%',
                            style: "border:3px none #EAEDED",
                            layout: {
        
                                type: 'vbox',
                                align: 'center',
                                pack: 'right'
        
                            },
                            items: [
                                {
                                    margin: '5 0 0 0',
                                  
                                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><u>PUSH NOTIFICATION DASHBOARD</u></div>',
                                },
       
        
                                  {
        
                                      html: '<div id="chartPushNotificationsDashboard"></div>',
                                      //  margin: '-35 0 0 0',
                                  },
        
        
                                  {
                                      xtype: 'container',
                                      width: '100%',
                                     // margin: '-230 0 0 90',
                                      margin: '0 0 0 90',
                                      style: "border:3px none #EAEDED",
                                      layout: {
        
                                          type: 'vbox',
                                          align: 'center',
                                          pack: 'start'
        
                                      },
                                      items: [
        
        
                                        {  
                                            margin: '-212 0 0 0',
                                             id:'htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent',
                                            html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 5px;"><b>0%</b></div>',
                                        },
                                       
                                        //    {
                                        //        xtype: 'button',
                                        //        height: 27,
                                        //        width: 30,
                                        //        //  margin: '-33 0 0 0',
                                        //       // id: 'btnMyAccount_Dashboard_BlastingMessageQuota_PushNotification',
                                        //        //badgeText: "2",
                                        //        html: '<img src="resources/icons/Notification1.png" width="20" height="20" alt="Company Name">',
                                        //        ui: 'plain',
                                        //        handler: function () {
        
                                        //            //AyohaNotificationManagementShow();
                                        //        }
                                        //    },
                                    {
                                        margin: '13 0 0 0',
                                        width: '100%',
                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        id:'htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification',
                                        html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Push Notifications</div><br><div style="color:black;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>30/1000</b></div>',
                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                    },
        
                                      ]
                                  },
        
        
                            ]
        
                        },
                        {
                            xtype: 'container',
                            name:'Name_containerchartPushNotificationsDashboard',
                           // width: '33.33%',
                           margin:'0 0 0 0',
                            width: '35%',
                          // height:180,
                          height:'100%',
                            style: "background-color:transparent;",
                           // style: "border:3px none #EAEDED",
                            layout: {
        
                                type: 'vbox',
                                align: 'start',
                                pack: 'left'
        
                            },
                            items:[
                              
       
       
       
        {
                                                      margin: '50 0 0 0',
                                                      html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Quota</u></div>',
                                                  },
                                                   {
                                                       margin: '-5 0 0 0',
                                                       id: 'htmlAyohaNotificationManagementQuota',
                                                       html: '<div style="color:black;text-align: left;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                   },
       
       
       
        {
                                                         margin: '5 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold"><u>Used</u></div>',
                                                     },
                                                      {
                                                          margin: '-5 0 0 0',
                                                          id: 'htmlAyohaNotificationManagementUsed',
                                                          html: '<div style="color:black;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                      },
       
        {
                                                           margin: '5 0 0 0',
                                                           html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold"><u>Balance</u></div>',
                                                       },
                                                        {
                                                            margin: '-5 0 0 0',
                                                            id: 'htmlAyohaNotificationManagementBalance',
                                                            html: '<div style="color:black;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                        },
                            ]
                        },
                    ]
                },
                // {
                //     xtype: 'container',
                //     width: '100%',
                //     height:60
                // },
                {
                    xtype: 'container',
                    width: '85%',
                    height:1,
                    style: "background-color: grey;",  
                },
                {
                    xtype: 'container',
                   // width: '33.33%',
            width: '100%',
                    style: "border:3px none #EAEDED",
                    layout: {

                        type: 'vbox',
                        align: 'start',
                        pack: 'left',
                        

                    },items:[

                        {
                           // margin:'margin:-35px -50px 0px 0px;',
                           zIndex:'-10',
                            html:'<div id="chart_AyohaNotificationSendInfo" style="width: 750px;height: 450px;background-color: transparent;font-family: Arial;margin:-35px 0px 0px -135px;zIndex:-20px"></div>'
                        }
                    ]
                }
               
            ]
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
   
                               

///
{
    xtype: 'container',

    id: 'containerAyohaNotificationManagementTitleInner',
    width: '100%',
    //hidden:true,
    docked: 'bottom',
   // margin: '0 0 -5 0',
    height: 50,
    style:GetFooterStyle(),
    // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items: [
      
      
        //   {
        //       xtype: 'button',
        //       id: 'btnFloatPanel_AyohaNotificationManagementSearch',
        //       // hidden: true,
        //       //  badgeText: '1',
        //       margin: '5 0 0 -5',
        //       height: 40,
        //       width: 40,
        //       html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
        //       ui: 'plain',
        //       handler: function () {
        //           // NotificationsPanelShow();

        //           // LoyaltyCardRedeemListShow();


        //           //  LoyaltyCardRedeemListShow();
        //       }
        //   },
        //   {
        //       id: 'FloatPanel_AyohaNotificationManagementSearchTxt',
        //       margin: '0 0 0 0',
        //       width: '70%',
        //       height: 20,
        //       html: '<input type="text" id="input-AyohaNotificationManagementSearchTxt" placeHolder="Search Notification" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
        //   },
{
    id: 'htmlAyohaNotificationManagementMasterHeaderTxt',
    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Record Found:(0)</div>',
},

          {
              xtype: 'spacer'
          },

          {
              xtype: 'button',
              hidden: true,
              id: 'btnFloatPanel_AyohaNotificationManagement_Filter',
              // hidden: true,
              //  badgeText: '1',
              margin: '5 0 0 -5',
              height: 40,
              width: 40,
              html: '<img src="resources/icons/filterPurpleThree.png" width="30" height="30" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  // NotificationsPanelShow();

                  // LoyaltyCardRedeemListShow();


                  //  LoyaltyCardRedeemListShow();
              }
          },



          {


              // xtype: 'button',
              //  hidden: true,
              id: 'btnFloatPanel_AyohaNotificationManagement_AddNew',
              //  badgeText: '1',
              margin: '0 0 0 0',
              //height: 40,
              //width: 135,
              //text: '<button class="buttonsetReceipient">Set Receipients</button>',
              html: '<button OnClick="FloatPanel_AyohaNotificationManagement_AddNewNotification()" class="buttonsetNewMembershipEvent" style="margin:0px 0px 0px 0px;"> <font size=3px color=white>+ </font>Create New Notification</button>',
              //ui: 'confirm',
              //handler: function () {

              //}

          },







             

             


{
xtype:'spacer',
width:20
}



    ]

},

                               
                               ////////////////////////////////////////////
                               {
hidden:true,
                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,
                                 docked: 'bottom',
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerAyohaNotificationManagement_MenuBottom',
                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                
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
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  scrollable: {
                                                      direction: 'horizontal',
                                                      directionLock: true
                                                  },
                                                  items: [


                                                      {
                                                          xtype: 'container',
                                                          width: 270,
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
                                                                  id: 'containerAyohaNotificationManagement_MenuBottom_PushNotification',
                                                                  flex: 1,
                                                                  //height: 30,
                                                                  margin: '0 0 0 0',
                                                                 // flex: 1,
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
                                                                           id: 'btnAyohaNotificationManagement_MenuBottom_PushNotification',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/NotificationPurple.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               //  FloatPanel_AyohaUserRegistrationAddNewShow();
                                                                               //Ext.getCmp('mainView').setActiveItem(0);
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerAyohaNotificationManagement_MenuBottom_PushNotificationTxt',
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
                                                                                   html: '<font size=1 color=purple><b><u>Push</u></b></font>',
                                                                               },
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   // id: 'htmlStampHistoryTxt',
                                                                                   html: '<font size=1 color=purple><b><u>Notification</u></b></font>',
                                                                               },
                                                                           ]

                                                                       },


                                                                  ]
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerAyohaNotificationManagement_MenuBottom_SMS',
                                                                  //width: '20%',
                                                                  //height: 30,
                                                                  margin: '0 0 0 0',
                                                                  flex: 1,
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
                                                                           id: 'btnAyohaNotificationManagement_MenuBottom_SMS',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/smsgrey01.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                              // FloatPanel_AyohaEnterpriseAccountShow();
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerAyohaNotificationManagement_MenuBottom_SMSTxt',
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
                                                                                   html: '<font size=1 color=grey>SMS</font>'
                                                                               },
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   // id: 'htmlStampHistoryTxt',
                                                                                   html: '<font size=1 color=grey>(Coming Soon)</font>'
                                                                               },
                                                                           ]

                                                                       },


                                                                  ]
                                                              },

                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerAyohaNotificationManagement_MenuBottom_WhatsApp',
                                                                  //width: '33%',
                                                                  //height: 30,
                                                                  margin: '0 0 0 0',
                                                                  flex: 1,
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
                                                                           id: 'btnAyohaNotificationManagement_MenuBottom_WhatsApp',
                                                                           //  badgeText: '1',
                                                                           margin: '0 0 0 0',

                                                                           height: 36,
                                                                           width: 36,
                                                                           html: '<img src="resources/icons/whatsappgrey01.png" width="26" height="26" alt="Company Name">',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               //FloatPanel_MembershipCardManagementShow();
                                                                           }
                                                                       },
                                                                       {
                                                                           xtype: 'container',
                                                                           id: 'containerAyohaNotificationManagement_MenuBottom_WhatsAppTxt',
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
                                                                                   html: '<font size=1 color=grey>WhatsApp</font>'
                                                                               },
                                                                               {
                                                                                   margin: '-12 0 0 0',
                                                                                   // id: 'htmlStampHistoryTxt',
                                                                                   html: '<font size=1 color=grey>(Coming Soon)</font>'
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
                                                         //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                                         //},

                                                         {
                                                             xtype: 'container',
                                                             margin: '5 0 0 0',
                                                             //zIndex:500,
                                                             // hidden: true,
                                                             style: 'background-color: transparent;',
                                                            //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                             height: 80,
                                                             width: '20%',
                                                             // margin: '70 0 0 0',
                                                             id: 'containerAyohaNotificationManagement_MenuBottom_AddNewNotification',
                                                             layout: {

                                                                 type: 'vbox',
                                                                 pack: 'start',
                                                                 align: 'center'
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'container',
                                                                     margin: '-40 0 0 -3',
                                                                     // hidden: true,
                                                                    // style: 'background-color: transparent;',
                                                                     style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                                     height: 82,
                                                                     width: 82,
                                                                     // margin: '70 0 0 0',
                                                                    // id: 'containerAyohaNotificationManagement_MenuBottom_AddNewNotification',
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
                                                                             margin: '3 0 0 -3',
                                                                             id: 'btnAyohaNotificationManagement_AddNewNotification_MenuBottom',
                                                                             html: '<img src="resources/icons/AddNotification.png" width="70" height="70" alt="Company Name">',
                                                                             //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                             ui: 'plain',
                                                                             handler: function () {
                                                                                 localStorage.setItem('PushNotificationSource', 'New');
                                                                                 FloatPanel_AyohaNotificationManagement_CreateMessageShow();
                                                                             }
                                                                         },



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
    return _AyohaNotificationManagement;



}



function AyohaNotificationManagementShow() {

    Ext.Viewport.remove(_AyohaNotificationManagement);
    this.overlay = Ext.Viewport.add(AyohaNotificationManagement());
    this.overlay.show();
    Ext.getCmp('tabpanelAyohaNotificationManagementMaster').getTabBar().hide();
    isAyohaNotificationManagementOpen = 'Y';
    _AyohaNotificationManagement_isFirstLoad = "Y";
  // AyohaNotificationManagementAdjustHeight();
    //FloatPanel_AyohaNotificationManagement_AddShow();
    AyohaNotificationManagementMonthYear_Month = "NA";
    AyohaNotificationManagementMonthYear_Year = "NA"

   // AyohaNotificationMasterLoadByEnterpriseAccNoStore(AyohaNotificationManagementMonthYear_Year, AyohaNotificationManagementMonthYear_Month, "Current");
    AyohaNotificationMasterLoadByEnterpriseAccNoStore('Year', '00', '00');
  
  
   
    document.getElementById("AyohaNotificationManagementMonthYear").addEventListener("change", FloatPanel_AyohaNotificationManagement_AyohaNotificationManagementMonthYear);
    document.getElementById('AyohaNotificationManagementMonthYear').valueAsDate = new Date();

    




    FloatPanel_DrawerMenu_MainHide();

       
 var selectElement = document.getElementById('AyohaNotificationManagement_Selection');

 // Add an event listener for the 'change' event
 selectElement.addEventListener('change', function() {
     // Get the value of the selected option
     var selectedValue = selectElement.value;
     
     // Do something with the selected value
     console.log("Selected filter: " + selectedValue);
     // For example, you can call a function to handle different filters
     handleFilterChange_AyohaNotificationManagement_Selection(selectedValue);
 });

    
}
function handleFilterChange_AyohaNotificationManagement_Selection(filter) {
    switch (filter) {
        case 'Today':
            AyohaNotificationMasterLoadByEnterpriseAccNoStore(filter, '00', '00');
            break;
        case 'ThisWeek':
            AyohaNotificationMasterLoadByEnterpriseAccNoStore(filter, '00', '00');
            break;
        case 'Month':
            AyohaNotificationMasterLoadByEnterpriseAccNoStore(filter, '00', '00');
            break;
        case 'Year':
            AyohaNotificationMasterLoadByEnterpriseAccNoStore(filter, '00', '00');
            break;
        case 'Custome':
            AyohaNotificationMasterLoadByEnterpriseAccNoStore(filter, '00', '00');
            break;
        default:
            console.log("No filter selected or action defined.");
    }
}


function FloatPanel_AyohaNotificationManagement_AddNewNotification(){
    localStorage.setItem('PushNotificationSource', 'New');
    FloatPanel_AyohaNotificationManagement_CreateMessageShow();
}
var AyohaNotificationManagementMonthYear_Month;
var AyohaNotificationManagementMonthYear_Year;
function FloatPanel_AyohaNotificationManagement_AyohaNotificationManagementMonthYear() {

    var input0 = document.getElementById("AyohaNotificationManagementMonthYear").value;
    var AyohaNotificationManagementMonthYear_partsOfStr = input0.split('-');
    AyohaNotificationManagementMonthYear_Year = AyohaNotificationManagementMonthYear_partsOfStr[0];
    AyohaNotificationManagementMonthYear_Month = AyohaNotificationManagementMonthYear_partsOfStr[1].replace("0", "");
    AyohaNotificationMasterLoadByEnterpriseAccNoStore(AyohaNotificationManagementMonthYear_Year, AyohaNotificationManagementMonthYear_Month, "Selection");
    //console.log(AyohaNotificationManagementMonthYear_partsOfStr[0]);
    //console.log(AyohaNotificationManagementMonthYear_partsOfStr[1]);
    
}


function AyohaNotificationManagementHide() {
    _AyohaNotificationManagement.hide();

    isAyohaNotificationManagementOpen = 'N';
    _AyohaNotificationManagement_isFirstLoad = "N";
    FloatPanel_AyohaNotificationManagement_AddHide();
}




function AyohaNotificationManagementAdjustHeight() {
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

    // Ext.getCmp('tabpanelAyohaNotificationManagement').setHeight(newHeight);
  //  Ext.getCmp('containerAyohaNotificationManagementMaster_PushNotification').setHeight(newHeights);
    Ext.getCmp('containerAyohaNotificationManagementMasterMaster').setHeight(newHeight);





}




function AyohaNotificationMasterLoadByEnterpriseAccNoStore(DashboardFilter, StartDate, EndDate) {

   if(isAyohaNotificationManagementOpen=='N'){
return;
   }

    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setExtraParam('DashboardFilter', DashboardFilter);
    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setExtraParam('StartDate', StartDate);
    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EndDate', EndDate);
    // _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setExtraParam('LoadNotificationType', LoadNotificationType);
    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterLoadByEnterpriseAccNo');
    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlAyohaNotificationManagementMasterHeaderTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;Record Found:<font size=3 color=black>&nbsp;<b>(' + count + ')</b></font></div>');
        AyohaNotificationMasterPNDashboardStore();
        Ext.Viewport.setMasked(false);

        

    });
    task.delay(500);





    //Ext.Viewport.mask({ xtype: 'loadmask', message: 'ReLoading....' });
    //Ext.getStore('AyohaNotificationMasterLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: GetEnterpriseAccNo(),
    //    NotificationMedium: "PN",
    //    NotificationYear: NotificationYear,
    //    NotificationMonth: NotificationMonth,
    //    LoadNotificationType: LoadNotificationType
    //});
    //Ext.StoreMgr.get('AyohaNotificationMasterLoadByEnterpriseAccNoStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('AyohaNotificationMasterLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
    //        EnterpriseAccNo: GetEnterpriseAccNo(),
    //        NotificationMedium:"PN",
    //        NotificationYear: NotificationYear,
    //        NotificationMonth: NotificationMonth,
    //        LoadNotificationType: LoadNotificationType
    //    });
    //    _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore=Ext.StoreMgr.get('AyohaNotificationMasterLoadByEnterpriseAccNoStore').load();
    //    var myStore = Ext.getStore('AyohaNotificationMasterLoadByEnterpriseAccNoStore');
    //    var Count = myStore.getCount();      
    //    Ext.getCmp('htmlAyohaNotificationManagementMasterHeaderTxt').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;Push Notification History<font size=3 color=black>&nbsp;<b>(' + Count + ')</b></font></div>');
      
    //    AyohaNotificationMasterPNDashboardStore();
    //    Ext.Viewport.setMasked(false);
       


    //});
    //task.delay(700);
}






function AyohaNotificationMasterPNDashboardStore() {

    _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterPNDashboard');
    _DataStore_AyohaNotificationMasterPNDashboardStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaNotificationMasterPNDashboardStore.getCount();

        

        var modelRecord = _DataStore_AyohaNotificationMasterPNDashboardStore.getAt(0);
        TotalUsed = modelRecord.get('TotalUsed');
        var Quota = modelRecord.get('Quota');
        var Balance = modelRecord.get('Balance');
        localStorage.setItem('PushNotificationBalance', Balance);
        localStorage.setItem('PushNotificationQuota', Quota);
        localStorage.setItem('PushNotificationTotalUsed', TotalUsed);
        Ext.getCmp('htmlAyohaNotificationManagementQuota').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + Quota + '</div>');
        Ext.getCmp('htmlAyohaNotificationManagementUsed').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + TotalUsed + '</div>');
        Ext.getCmp('htmlAyohaNotificationManagementBalance').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + Balance + '</div>');
      // Ensure the Google Visualization API is loaded before calling your function
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initializePushNotificationsChart);

       // setDashBoardPushNotificationsQuota();


    });
    task.delay(500);


  
    //Ext.getStore('AyohaNotificationMasterPNDashboardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: GetEnterpriseAccNo(),
      
    //});
    //Ext.StoreMgr.get('AyohaNotificationMasterPNDashboardStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('AyohaNotificationMasterPNDashboardStore').getProxy().setExtraParams({
    //        EnterpriseAccNo: GetEnterpriseAccNo(),          
    //    });
    //    Ext.StoreMgr.get('AyohaNotificationMasterPNDashboardStore').load();
    //    var myStore = Ext.getStore('AyohaNotificationMasterPNDashboardStore');
    //    var modelRecord = myStore.getAt(0);
    //    TotalUsed= modelRecord.get('TotalUsed');
    //    var Quota = modelRecord.get('Quota');
    //    var Balance = modelRecord.get('Balance');
    //    localStorage.setItem('PushNotificationBalance', Balance);
    //    localStorage.setItem('PushNotificationQuota', Quota);
    //    localStorage.setItem('PushNotificationTotalUsed', TotalUsed);
        
        
    //        Ext.getCmp('htmlAyohaNotificationManagementQuota').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + Quota + '</div>');
    //        Ext.getCmp('htmlAyohaNotificationManagementUsed').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + TotalUsed + '</div>');
    //        Ext.getCmp('htmlAyohaNotificationManagementBalance').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + Balance + '</div>');

      
        
     
       
    //    setDashBoardPushNotificationsQuota();
    //    Ext.Viewport.setMasked(false);



    //});
    //task.delay(500);
}



function initializePushNotificationsChart() {


    var quota = Number(GetPushNotificationQuota());
    var totalUsed = Number(GetPushNotificationTotalUsed());

    // Initialize the chart with initial data
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Content');
    data.addColumn('number', 'Size');
    data.addRow(['Used', 0]); // Initial 'Used' value
    data.addRow(['Remaining', quota]); // Initial 'Remaining' value

    var options = {
        title: '',
        pieHole: 0.7,
        pieSliceText: 'none',
        // slices: {
        //     0: {textStyle: {color: 'transparent'}},  // Make text color transparent or match background
        //     1: {textStyle: {color: 'transparent'}}
        // },
        colors: ['#1E90FF', '#E8E8E8'],
       // pieSliceBorderColor: 'black',
        backgroundColor: 'transparent', pieStartAngle: 180,
        pieSliceBorderColor: "none",
        legend: { position: 'none' },
      //  chartArea: { width: '95%', height: '85%' },
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartPushNotificationsDashboard'));

    var increment = 0;
    var incrementStep = totalUsed / 100; // Determine the speed of the animation
    var handler = setInterval(function() {
        increment += incrementStep;
        if (increment > totalUsed) {
            increment = totalUsed; // Make sure increment does not exceed total used
           
        }
        Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent').setHtml('<div style="text-align: center; font-size: 40px;"><b>' + Math.round((increment / GetPushNotificationQuota()) * 100) + '%</b></div>');
        data.setValue(0, 1, Math.round(increment)); // Ensure the value is rounded to avoid fractional issues
        data.setValue(1, 1, Math.round(quota - increment)); // Round here as well
       
        chart.draw(data, options);
        Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="text-align: center; font-time: 14px; margin-top: -25px"><b>' + totalUsed + '/' + GetPushNotificationQuota() + '</b></div>');

        if (increment >= totalUsed) {
            clearInterval(handler); // Stop the animation when the final value is reached
        }
      //  
    }, 5); // Adjust timing for smoother animation

    capAyam();
   
  
   return


    // Update the HTML elements with the current usage info (optional)
    Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="text-align: center; font-size: 12px;">Push Notifications</div><br><div style="text-align: center; font-time: 14px; margin-top: -25px"><b>' + TotalUsed + '/' + GetPushNotificationQuota() + '</b></div>');
    Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent').setHtml('<div style="text-align: center; font-size: 25px;"><b>' + Math.round((TotalUsed / GetPushNotificationQuota()) * 100) + '%</b></div>');
}



function capAyam(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart_AyohaNotification);
    let chart;
let data;
let options;
let apiData;
let animationSteps = 30;
let currentStep = 0;
  
    async function drawChart_AyohaNotification() {
        data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Sent');
        data.addColumn('number', 'Read');
        data.addColumn('number', 'Deleted');
    
        apiData = await fetchData(); // Fetch the API data
        initializeData(); // Initialize data with zeros
    
        options = {
            title: 'Sent Notification  Year '+GetCurrentYear(),
            chartArea: {width: '50%'},
            hAxis: {
                title: '',
                minValue: 0
            },

            // vAxis: {
            //     title: 'Number of Notifications',
            //     titleTextStyle: {
            //         italic: false,
            //         bold: true,
            //         fontSize: 16, // Adjust font size as needed
            //         color: '#1a237e' // Adjust text color as needed
            //     },
            //     textPosition: 'out' // Ensures the axis text is outside the chart area
            // },
            backgroundColor: 'transparent',
            colors: ['#3366cc', '#1b9e77', '#d95f02'],
            bars: 'vertical',
            bar: {groupWidth: "65%"}
        };
    
        chart = new google.visualization.ColumnChart(document.getElementById('chart_AyohaNotificationSendInfo'));
        chart.draw(data, options);
        animateChart();
    }
    
    function initializeData() {
        for (let i = 0; i < apiData.length; i++) {
            data.addRow([apiData[i].Sent_month, 0, 0, 0]);
        }
    }
    
    function animateChart() {
        let interval = setInterval(function () {
            if (currentStep >= animationSteps) {
                clearInterval(interval);
            } else {
                for (let i = 0; i < data.getNumberOfRows(); i++) {
                    data.setValue(i, 1, apiData[i].TotalSentNotifications * currentStep / animationSteps);
                    data.setValue(i, 2, apiData[i].ReadNotifications * currentStep / animationSteps);
                    data.setValue(i, 3, apiData[i].DeletedNotifications * currentStep / animationSteps);
                }
                chart.draw(data, options);
                currentStep++;
            }
        }, 100); // Redraw every 100ms
    }
    
    async function fetchData() {
        const response = await fetch(GetAPIurl()+'AyohaNotification/AyohaNotificationGraphChartMerchant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "Year": GetCurrentYear()
            })
        });
        const jsonData = await response.json();
        return jsonData.results; // Assuming 'results' is the correct data array

    }
}

