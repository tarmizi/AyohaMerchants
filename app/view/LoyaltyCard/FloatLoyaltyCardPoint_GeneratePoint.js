
Ext.define('ianMizi.view.LoyaltyCard.FloatLoyaltyCardPoint_GeneratePoint', {

});


var _FloatLoyaltyCardPoint_GeneratePoint;


var isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';



var _FloatPanel_GeneratePoint_isFirstLoad = "N";







//function FloatLoyaltyCardPoint_GeneratePoint() {

//    _FloatLoyaltyCardPoint_GeneratePoint =
//     Ext.create('Ext.Panel', {

//         xtype: 'container',
//         //height: 465,
//         height: '100%',
//         width: '100%',
//         id: 'LoadingFloatLoyaltyCardPoint_GeneratePointID',
//         draggable: false,
//         styleHtmlContent: true,
//         zIndex: 450,

//         centered: true,
//         //bottom: 64,
//         // zIndex: 100,
//         modal: true,
//         // hideOnMaskTap: true,
//         layout: {
//             type: 'fit'
//         },
//         showAnimation: {
//             type: 'popIn',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         hideAnimation: {
//             type: 'popOut',
//             //direction: 'up',
//             //easing: 'cubic-bezier(.7,0,.7,1)',
//             duration: 250
//         },
//         // style: 'border-bottom:1px solid;background-color:#353839;',
//         // style: 'border-bottom:1px solid;background-color:white;',
//         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



//         items: [




//             {
//                 xtype: 'container',
//                 width: '100%',
//                 height: '100%',
//                 //  style: "background-color: transparent;",
//                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
//                 layout: {
//                     type: 'fit',

//                 },
//                 items: [
//                       {
//                           xtype: 'container',
//                           width: '100%',

//                           layout: {
//                               type: 'vbox',
//                               pack: 'start',
//                               align: 'center'

//                           },
//                           items: [

//                               /////

//                               {

//                                   xtype: 'container',
//                                   width: '100%',
//                                   // width: 40,

//                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                                   //hidden: true,

//                                   id: 'containerFloatLoyaltyCardPoint_GeneratePointHeader',
//                                   style: {
//                                       // background: '#D25959',
//                                       background: 'transparent',
//                                       // border: '2px'
//                                   },
//                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                   // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                   layout: {
//                                       type: 'hbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   // hidden:true,
//                                   items:
//                                          [


//                                                        {
//                                                            xtype: 'button',
//                                                            id: 'btnFloatLoyaltyCardPoint_GeneratePointBack',
//                                                            height: 30,
//                                                            width: 35,
//                                                            // iconCls: 'list',
//                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                            ui: 'plain',
//                                                            handler: function () {

//                                                                _FloatLoyaltyCardPoint_GeneratePoint.hide(Ext.fx.Animation({
//                                                                    type: 'slideOut',
//                                                                    direction: 'left',
//                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
//                                                                    duration: 250

//                                                                }));
//                                                                isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';
//                                                                _FloatPanel_GeneratePoint_isFirstLoad = "N";
//                                                            }
//                                                        },

//                                                         {
//                                                             xtype: 'spacer',

//                                                         },

//                                                          {
//                                                              margin: '0 0 0 0',
//                                                              html: '<font size=2 color=white><b>Send Earn Point</b></font>'
//                                                          },













//                                          ]

//                               },



//                               ///////////

//                               {
//                                   xtype: 'container',
//                                   style: "background-color: transparent",
//                                   margin: '-25 0 0 0',
//                                   width: '100%',
//                                   layout: {
//                                       type: 'vbox',
//                                       pack: 'center',
//                                       align: 'center'

//                                   },
//                                   items: [
//           {
//               xtype: 'container',

//               width: '100%',
//               layout: {
//                   type: 'vbox',
//                   pack: 'center',
//                   align: 'center'

//               },
//               items: [

//                   {
//                       margin: '2 0 0 0',
//                       height: 130,
//                       width: 130,
//                       id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_Logo',
//                       html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
//                   },
//                   {
//                       xtype: 'container',

//                       width: '100%',
//                       layout: {
//                           type: 'vbox',
//                           pack: 'center',
//                           align: 'center'

//                       },
//                       items: [

//                            {
//                                margin: '-3 0 0 0',
//                                id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_EnterpriseName',
//                                html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >Community Coffee Roastes Sdn Bhd</div>',
//                            },
//                              {
//                                  margin: '-5 0 0 0',

//                                  id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_CampaignName',

//                                  html: '<font size=2 color=white><b>Ramadhan 2021!</b></font>',
//                              },
                     
//                       ]

//                   }

//               ]
//           },


//                                 {
//                                     xtype: 'container',
//                                    // hidden:true,
//                                     height: 70,
//                                     width: '100%',
//                                     margin: '5 0 0 0',
//                                     //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
//                                     //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
//                                     //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
//                                     style: 'background-color:transparent;',
//                                     // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                     //style: {

//                                     //    background: 'transparent',

//                                     //},
//                                     layout: {
//                                         type: 'vbox',
//                                         pack: 'center',
//                                         align: 'center'

//                                     },
//                                     items: [


//                                         {
//                                             margin: '-22 0 0 0',
                                           
//                                             //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
//                                             // html: '<font size="30px" color="white"><b>0</b></font>'
//                                             html: '<div style="background: transparent;color:white; text-align:center;font-size:66px;font-weight:bold;width:100%;">0</div>',
                                            
//                                         },
//                                            {
//                                                xtype: 'panel',
//                                                width: '100%',
//                                                height:2
                                               
//                                            },
//                                          {
//                                              margin: '-25 0 0 0',
//                                            //  html: '<font size=2 color=white><b>Points</b></font>'
//                                              html: '<div style="background: transparent;color:white; text-align:center;font-size:12px;font-weight:normal;width:100%;">Point Earn</div>',
//                                          },


                                     

//                                     ]
//                                 },
//                                  {
//                                      xtype: 'container',
//                                      width: '100%',
//                                      height: 10,
//                                  },


//                                   ]

//                               },




//                               {
//                                   xtype: 'container',
//                                   // docked: 'top',
//                                   // hidden:true,
//                                   //  margin: '0 0 0 0',
//                                   //  docked: 'bottom',
//                            style: 'background-color: transparent;',
//                                //   style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//                                   //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75);',
//                                   id: 'tabpanelFloatLoyaltyCardPoint_GeneratePoint',
//                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                   zIndex: 90,
//                                   //height:200,
//                                   // autoHeight:true,
//                                   // height: '100%',
//                                   // flex:1,
//                                   //  maxHeight:'100%',
//                                   //height:'63%',
//                                   width: '100%',
//                                   // margin: '70 0 0 0',

//                                   layout: {

//                                       type: 'vbox',
//                                       pack: 'center',
//                                       align: 'center'
//                                   },
//                                   items: [

//                                       ///////////////////////////////////////////////
//                                       {
//                                          // xtype: 'carousel',
//                                         xtype: 'container',
//                                           style: 'background-color: transparent;',
//                                           //hidden: true,
//                                           id: 'carouselFloatLoyaltyCardPoint_GeneratePoint',
//                                           //style: 'background-color:#f7f7f7',
//                                        //   style: ' background-color: red',
//                                        //   style: 'background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75);',
//                                           width: '100%',
//                                           height: '100%',
//                                           indicator: false,
//                                           listeners: {

//                                               activeitemchange: function (container, newCard, oldCard, index) {
//                                                   // console.log('Current index:' + container.getActiveIndex());
//                                                   console.log("1:" + _FloatPanel_GeneratePoint_isFirstLoad);
//                                                   if (_FloatPanel_GeneratePoint_isFirstLoad == "Y") {
//                                                       FloatPanel_MoveCarousel(container.getActiveIndex());
//                                                   }

//                                                   //console.log("1:" + _FloatPanel_MembershipCardList_Upgrade_isFirstLoad);
//                                                   //if (_FloatPanel_MembershipCardList_Upgrade_isFirstLoad == "Y") {
//                                                   //    MoveMembeshipCarousel(CarouselIndex);
//                                                   //}




//                                               },

//                                           },


//                                           margin: '0 0 0 0',
//                                           items: [

//                                                   //{
//                                                   //    style: ' background-color: transparent',
//                                                   //    margin:'0 0 0 0',
//                                                   //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
//                                                   //},
//                                                   {
//                                                       xtype: 'container',
//                                                     //  id: 'containerlFloatLoyaltyCardPoint_GeneratePoint_MasterNumber',
//                                                       id: 'containerFloatLoyaltyCardPoint_GeneratePointMaster',
//                                                       style: ' background-color: transparent',
//                                                      // style: 'background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75);',
//                                                       height: 360,
//                                                       width: '100%',
//                                                       layout: {
//                                                           type: 'vbox',
//                                                           pack: 'start',
//                                                           align: 'center'

//                                                       },
//                                                       items: [
                                                           

//                                                           {
//                                                               margin: '10 0 0 0',
//                                                               html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 16px;font-weight:normal;width:100%;" >AMOUNT</div>',
//                                                           },
//                                                           {
//                                                               margin: '-15 0 0 0',
//                                                               //  html: '<input type="number" div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 46px;font-weight:normal;width:100%;" >RM 0.00</div>',
//                                                               html: '<input type="text" id="input-FloatLoyaltyCardPoint_GeneratePoint_Amount" inputmode="none"  value="0.00"    style="pointer-events:none;border: 1px none white;color:white;text-align: center;font-size:46px;background-color: transparent;width:100%;height:70px;">'
//                                                           },
//                                                           {
//                                                               xtype: 'container',
//                                                               id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow01',
//                                                               style: ' background-color: transparent',
//                                                               //height: '30%',
//                                                               width: '100%',
//                                                               flex: 1,
//                                                               layout: {
//                                                                   type: 'hbox',
//                                                                   pack: 'center',
//                                                                   align: 'center'

//                                                               },
//                                                               items: [
//                                                                     {
//                                                                         xtype: 'button',
//                                                                         id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number1',
//                                                                        flex:1,
//                                                                         // iconCls: 'list',
//                                                                         //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                         html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >1</div>',
//                                                                         ui: 'plain',
//                                                                         handler: function () {
//                                                                             sendNum(1);
//                                                                         }
//                                                                     },

//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number2',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >2</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(2);
//                                                                           }
//                                                                       },
//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number3',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >3</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(3);
//                                                                           }
//                                                                       },

//                                                               ]

//                                                           },


//                                                           //////////////////////////
//                                                           {
//                                                               xtype: 'container',
//                                                               id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow02',
//                                                               style: ' background-color: transparent',
//                                                               width: '100%',
//                                                               flex: 1,
//                                                               layout: {
//                                                                   type: 'hbox',
//                                                                   pack: 'center',
//                                                                   align: 'center'

//                                                               },
//                                                               items: [
//                                                                     {
//                                                                         xtype: 'button',
//                                                                         id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number4',
//                                                                         flex: 1,
//                                                                         // iconCls: 'list',
//                                                                         //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                         html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >4</div>',
//                                                                         ui: 'plain',
//                                                                         handler: function () {
//                                                                             sendNum(4);
//                                                                         }
//                                                                     },

//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number5',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >5</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(5);
//                                                                           }
//                                                                       },
//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number6',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >6</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(6);
//                                                                           }
//                                                                       },

//                                                               ]

//                                                           },
//                                                           /////////////

//                                                           {
//                                                               xtype: 'container',
//                                                               id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow03',
//                                                               style: ' background-color: transparent',
//                                                               width: '100%',
//                                                               flex: 1,
//                                                               layout: {
//                                                                   type: 'hbox',
//                                                                   pack: 'center',
//                                                                   align: 'center'

//                                                               },
//                                                               items: [
//                                                                     {
//                                                                         xtype: 'button',
//                                                                         id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number7',
//                                                                         flex: 1,
//                                                                         // iconCls: 'list',
//                                                                         //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                         html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >7</div>',
//                                                                         ui: 'plain',
//                                                                         handler: function () {
//                                                                             sendNum(7);
//                                                                         }
//                                                                     },

//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number8',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >8</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(8);
//                                                                           }
//                                                                       },
//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number9',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >9</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(9);
//                                                                           }
//                                                                       },

//                                                               ]

//                                                           },



//                                                           //////////////////////

//                                                           {
//                                                               xtype: 'container',
//                                                               id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow04',
//                                                               style: ' background-color: transparent',
//                                                               width: '100%',
//                                                               flex: 1,
//                                                               layout: {
//                                                                   type: 'hbox',
//                                                                   pack: 'center',
//                                                                   align: 'center'

//                                                               },
//                                                               items: [
//                                                                     {
//                                                                         xtype: 'button',
//                                                                         id: 'btnFloatLoyaltyCardPoint_GeneratePoint_NumberBack',
//                                                                         flex: 1,
//                                                                         // iconCls: 'list',
//                                                                         //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                         html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" ><</div>',
//                                                                         ui: 'plain',
//                                                                         handler: function () {
//                                                                             Backspace();
//                                                                             //document.getElementById('vakje').value;
//                                                                             //document.getElementById('vakje').value = rekensom.substring(0, rekensom.length - 1);
//                                                                         }
//                                                                     },

//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number0',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >0</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum(0);
//                                                                           }
//                                                                       },
//                                                                       {
//                                                                           xtype: 'button',
//                                                                           id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Numberfront',
//                                                                           //height: 30,
//                                                                           //width: 35,
//                                                                           flex: 1,
//                                                                           // iconCls:
//                                                                           // iconCls: 'list',
//                                                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >.</div>',
//                                                                           ui: 'plain',
//                                                                           handler: function () {
//                                                                               sendNum('.');
//                                                                           }
//                                                                       },

//                                                               ]

//                                                           },


//                                                           {
//                                                               xtype: 'container',
//                                                               id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow05',
//                                                               style: ' background-color: transparent',
//                                                               width: '100%',
//                                                               flex: 1,
//                                                               layout: {
//                                                                   type: 'vbox',
//                                                                   pack: 'center',
//                                                                   align: 'center'

//                                                               },
//                                                               items: [

//                                                   {
//                                                       margin: '0 0 0 0',
//                                                       // id: 'htmlAnimatedIntervalText',
//                                                       html: '<font size=2 color=white>*Reference ID/Receipt ID/Bill No</font>',

//                                                   },
//{

//    margin: '-2 0 0 0',
//    width: '80%',
//    height: 20,
//    // id: 'htmlAnimatedIntervalValue',
//    html: '<input type="text" id="input-FloatLoyaltyCardPoint_GeneratePoint_ReceiptID"  style="border-color:white;color:white;width:100%;text-align: center;font-size:20px;">'
//},

//                                                               ]

//                                                           }


//                                                       ]

//                                                   },













//                                           ]
//                                       },










//                                   ]
//                               },



                       
                               

//                               ////////////////////////////////////////////
//                               {

//                                   xtype: 'container',
//                                   width: '80%',
//                                   // width: 40,
//                                   // docked: 'bottom',
//                                   height: 55,
//                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                                   //hidden: true,

//                                   id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom',
//                                   style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-radius:20px 20px 0px 0px;',
//                                   //style: {
//                                   //    // background: '#D25959',
//                                   //    background: 'transparent',
//                                   //    // border: '2px'
//                                   //},
//                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                   // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                   layout: {
//                                       type: 'hbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },




//                                   // hidden:true,
//                                   items:
//                                          [
//                                              {
//                                                  xtype: 'container',
//                                                  width: '100%',
//                                                  style: "background-color: transparent",
//                                                  height: 55,
//                                                  layout: {
//                                                      type: 'hbox',
//                                                      pack: 'center',
//                                                      align: 'center',
//                                                  },
//                                                  //scrollable: {
//                                                  //    direction: 'horizontal',
//                                                  //    directionLock: false
//                                                  //},
//                                                  items: [


//                                                      {
//                                                          xtype: 'container',
//                                                          //width: 600,
//                                                          //  width: 400,
//                                                          width: '100%',
//                                                          style: "background-color: transparent",
//                                                          height: 55,
//                                                          layout: {
//                                                              type: 'hbox',
//                                                              pack: 'center',
//                                                              align: 'center',
//                                                          },
//                                                          items: [










                                                        

                                                        


                                                            






                                                            



//                                                            {
//                                                                xtype: 'container',
//                                                                id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_CashBack',
//                                                                //width: '33%',
//                                                                //height: 30,
//                                                                margin: '0 0 0 0',
//                                                                flex: 1,
//                                                                style: "background-color: transparent",
//                                                                //style: "background-color: #F35B57;",

//                                                                layout: {
//                                                                    type: 'vbox',
//                                                                    pack: 'start',
//                                                                    align: 'center'

//                                                                },
//                                                                items: [

//                                                                     {
//                                                                        // xtype: 'button',
//                                                                         id: 'HtmlFloatLoyaltyCardPoint_MenuBottom_generatePoint',
//                                                                         //  badgeText: '1',
//                                                                         margin: '2 0 0 0',

//                                                                         height: 30,
//                                                                         width: 50,
//                                                                         html: '<img src="resources/icons/generatePoint03.png" width="50" height="30" alt="Company Name">',
                                                                       
//                                                                     },
//                                                                                {
//                                                                                 margin: '-5 0 0 0',
//                                                                                 id: 'HtmlFloatLoyaltyCardPoint_MenuBottom_generatePointTxt',
//                                                                                 html: '<font size=1 color=purple><b>Send Earn Point</b></font>'
//                                                                             },
//                                                                     //{
//                                                                     //    xtype: 'container',
//                                                                     //    id: 'containerFloatPanel_AyohaReward_MenuBottom_CashBackTxt',
//                                                                     //    width: '100%',
//                                                                     //    layout: {
//                                                                     //        type: 'vbox',
//                                                                     //        pack: 'start',
//                                                                     //        align: 'center'

//                                                                     //    },
//                                                                     //    items: [
//                                                                     //        {
//                                                                     //            margin: '-12 0 0 0',
//                                                                     //            id: 'htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01',
//                                                                     //            html: '<font size=1 color=grey>Ayoha Point</font>'
//                                                                     //        },
//                                                                     //        {
//                                                                     //            margin: '-12 0 0 0',
//                                                                     //            id: 'htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02',
//                                                                     //            html: '<font size=1 color=grey>Cash Back</font>'
//                                                                     //        },
//                                                                     //    ]

//                                                                     //},


//                                                                ]
//                                                            },







//                                                          ]

//                                                      },
















//                                                  ]
//                                              },





//                                                         //{
//                                                         //    margin: '0 0 0 0',
//                                                         //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
//                                                         //},










//                                          ]

//                               },










//                           ]

//                       },








//                              /////





//                              //////



//                              ////////////////////////









//                 ]

//             },




//         ]















//     });
//    return _FloatLoyaltyCardPoint_GeneratePoint;



//}







function FloatLoyaltyCardPoint_GeneratePoint() {

    _FloatLoyaltyCardPoint_GeneratePoint =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatLoyaltyCardPoint_GeneratePointID',
         draggable: false,
       //  styleHtmlContent: true,
         zIndex: 450,

         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
         // hideOnMaskTap: true,
         layout: {
             //type: 'fit'
             type: 'vbox',
             pack: 'start',
             align: 'center',
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
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [
             //{
             //    xtype: 'button',
             //    id: 'btnFloatLoyaltyCardPoint_GeneratePointBack',
             //    height: 30,
             //    width: 35,
             //    // iconCls: 'list',
             //    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
             //    ui: 'plain',
             //    handler: function () {

             //        _FloatLoyaltyCardPoint_GeneratePoint.hide(Ext.fx.Animation({
             //            type: 'slideOut',
             //            direction: 'left',
             //            easing: 'cubic-bezier(.7,0,.7,1)',
             //            duration: 250

             //        }));
             //        isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';
             //        _FloatPanel_GeneratePoint_isFirstLoad = "N";
             //    }
             //},
             //{

             //    xtype: 'panel',
             //    width: '100%',
             //    styleHtmlContent: true,
             //    hidden:true,
             //   // docked: 'top',
             //    height: 30,
             //    // width: 40,

             //    //  title: '<font size="3" color="white">Live Tracking Map</font>',
             //    //hidden: true,
             //   // style: ' background-color:transparent;',

             //    id: 'containerFloatLoyaltyCardPoint_GeneratePointHeader',
             //    style: {
             //        // background: '#D25959',
             //        background: 'transparent',
             //        // border: '2px'
             //    },
             //    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
             //    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
             //    layout: {
             //        type: 'hbox',
             //        pack: 'center',
             //        align: 'center',
             //    },
             //    // hidden:true,
             //    items:
             //           [


             //                         {
             //                             xtype: 'button',
             //                             id: 'btnFloatLoyaltyCardPoint_GeneratePointBack',
             //                             height: 30,
             //                             width: 35,
             //                             // iconCls: 'list',
             //                             html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
             //                             ui: 'plain',
             //                             handler: function () {

             //                                 _FloatLoyaltyCardPoint_GeneratePoint.hide(Ext.fx.Animation({
             //                                     type: 'slideOut',
             //                                     direction: 'left',
             //                                     easing: 'cubic-bezier(.7,0,.7,1)',
             //                                     duration: 250

             //                                 }));
             //                                 isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';
             //                                 _FloatPanel_GeneratePoint_isFirstLoad = "N";
             //                             }
             //                         },

             //                          {
             //                              xtype: 'spacer',

             //                          },

             //                           {
             //                               margin: '0 0 0 0',
             //                               html: '<font size=2 color=white><b>Send Earn Point</b></font>'
             //                           },













             //           ]

             //},


             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 //  style: "background-color: transparent;",
                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center'

                 },
                 items: [

                     {
                         xtype: 'container',
                         width: '100%',
                         height: '85%',
                         id: 'containerFloatLoyaltyCardPoint_GeneratePointMasterMaster',
                         style: "background-color: transparent;",
                        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                        styleHtmlContent: true,
                                       // margin: '-25 0 0 0',
                                        // hidden:true,
                                        // docked: 'top',
                                        height: 50,
                                        // width: 40,

                                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                        //hidden: true,
                                        // style: ' background-color:transparent;',

                                        id: 'containerFloatLoyaltyCardPoint_GeneratePointHeader',
                                        // style: {
                                        //     // background: '#D25959',
                                        //     background: 'white',
                                        //     // border: '2px'
                                        // },
                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                                   // margin: '10 -17 0 0',
                                                    html: '<font size=4 color=black><b>Generate and Send Point</b></font>'
                                                },


                                                              {
                                                                  xtype: 'spacer',

                                                              },

                                                              



                                                               {
                                                                xtype: 'button',
                                                                id: 'btnFloatLoyaltyCardPoint_GeneratePointBack',
                                                                height: 30,
                                                                width: 35,
                                                                margin: '10 0 0 -10',
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    _FloatLoyaltyCardPoint_GeneratePoint.hide(Ext.fx.Animation({
                                                                        type: 'popOut',
                                                                       // direction: 'left',
                                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';
                                                                    _FloatPanel_GeneratePoint_isFirstLoad = "N";
                                                                    a = "";
                                                                    document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = "";
                                                                }
                                                            },



                                                            {
                                                                xtype: 'spacer',
width:20
                                                            },




                                               ]

                                    },


                             ///////////


         {
             xtype: 'container',
             height: 130,
             margin: '20 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [

                 {
                     margin: '2 0 0 0',
                     height: 130,
                     width: 130,
                     id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_Logo',
                     html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                 },
                 {
                     xtype: 'container',

                     width: '100%',
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         align: 'center'

                     },
                     items: [

                          {
                              margin: '-3 0 0 0',
                              id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_EnterpriseName',
                              html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >Community Coffee Roastes Sdn Bhd</div>',
                          },
                            {
                                margin: '-5 0 0 0',

                                id: 'htmlFloatLoyaltyCardPoint_GeneratePoint_CampaignName',

                                html: '<font size=2 color=white><b>Ramadhan 2021!</b></font>',
                            },



                     ]

                 }

             ]
         },


                               {
                                   xtype: 'container',
                                   //hidden:true,
                                   height: 120,
                                   width: '100%',
                                   margin: '5 0 0 0',
                                   //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
                                   //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                   //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                   style: 'background-color:transparent;',
                                   // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                   //style: {

                                   //    background: 'transparent',

                                   //},
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [


                                         {
                                             margin: '10 0 0 0',

                                             //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
                                             // html: '<font size="30px" color="white"><b>0</b></font>'
                                             id: 'HtmlFloatLoyaltyCardPoint_GeneratePoint_Points',
                                             html: '<div style="background: transparent;color:white; text-align:center;font-size:66px;font-weight:bold;width:100%;">0</div>',

                                         },
                                          //{
                                          //    xtype: 'panel',
                                          //    width: '100%',
                                          //    height: 2

                                          //},
                                        {
                                            margin: '-5 0 0 0',
                                            //  html: '<font size=2 color=white><b>Points</b></font>'
                                            html: '<div style="background: transparent;color:white; text-align:center;font-size:12px;font-weight:normal;width:100%;">Point Earn</div>',
                                        },




                                   ]
                               },
                                {
                                    xtype: 'container',
                                    width: '80%',
                                    margin: '-7 0 0 0',
                                    style: ' background-color: white',
                                    height: 2,
                                },


                                {
                                    xtype: 'container',
                                    //  id: 'containerlFloatLoyaltyCardPoint_GeneratePoint_MasterNumber',
                                    id: 'containerFloatLoyaltyCardPoint_GeneratePointMaster',
                                    style: ' background-color: transparent',
                                    flex: 1,
                                    // style: 'background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75);',
                                    //    height: '100%',
                                    width: '100%',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center'

                                    },
                                    items: [


                                        {
                                            margin: '10 0 0 0',
                                            html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:normal;width:100%;" >AMOUNT (RM)</div>',
                                        },
                                        {
                                            margin: '-15 0 0 0',
                                            //  html: '<input type="number" div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 46px;font-weight:normal;width:100%;" >RM 0.00</div>',
                                            html: '<input type="text" id="input-FloatLoyaltyCardPoint_GeneratePoint_Amount" inputmode="none"   value="0.00"    style="pointer-events:none;border: 1px none white;color:white;text-align: center;font-size:46px;background-color: transparent;width:100%;height:70px;">'
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow01',
                                            style: ' background-color: transparent',
                                            flex: 1,
                                            width: '100%',
                                            // flex: 1,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            items: [
                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number1',
                                                      flex: 1,
                                                      // iconCls: 'list',
                                                      //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                      html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >1</div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                         
                                                          sendNums(1);
                                                      }
                                                  },

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number2',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >2</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(2);
                                                        }
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number3',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >3</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(3);
                                                        }
                                                    },

                                            ]

                                        },


                                        //////////////////////////
                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow02',
                                            style: ' background-color: transparent',
                                            flex: 1,
                                            width: '100%',
                                            // flex: 1,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            items: [
                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number4',
                                                      flex: 1,
                                                      // iconCls: 'list',
                                                      //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                      html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >4</div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          sendNums(4);
                                                      }
                                                  },

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number5',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >5</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(5);
                                                        }
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number6',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >6</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(6);
                                                        }
                                                    },

                                            ]

                                        },
                                        /////////////

                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow03',
                                            style: ' background-color: transparent',
                                            flex: 1,
                                            width: '100%',
                                            // flex: 1,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            items: [
                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number7',
                                                      flex: 1,
                                                      // iconCls: 'list',
                                                      //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                      html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >7</div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          sendNums(7);
                                                      }
                                                  },

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number8',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >8</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(8);
                                                        }
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number9',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >9</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(9);
                                                        }
                                                    },

                                            ]

                                        },



                                        //////////////////////

                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow04',
                                            style: ' background-color: transparent',
                                            flex: 1,
                                            width: '100%',
                                            // flex: 1,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            items: [
                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatLoyaltyCardPoint_GeneratePoint_NumberBack',
                                                      flex: 1,
                                                      // iconCls: 'list',
                                                      //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                      html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" ><</div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          Backspaces();
                                                          //document.getElementById('vakje').value;
                                                          //document.getElementById('vakje').value = rekensom.substring(0, rekensom.length - 1);
                                                      }
                                                  },

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Number0',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >0</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums(0);
                                                        }
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatLoyaltyCardPoint_GeneratePoint_Numberfront',
                                                        //height: 30,
                                                        //width: 35,
                                                        flex: 1,
                                                        // iconCls:
                                                        // iconCls: 'list',
                                                        //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >.</div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            sendNums('.');
                                                        }
                                                    },

                                            ]

                                        },




                                    ]

                                },










                             ////////////////////////////////////////////











                         ]

                     },

                     {
                         xtype: 'container',
                         id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow05',
                         hidden:true,

                         //  margin: '-50 0 0 0',
                         style: ' background-color: transparent',
                         flex: 1,
                         width: '100%',
                         // flex: 1,
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [

             {
                 margin: '-35 0 0 0',

                 //   width: '100%',
                 // id: 'htmlAnimatedIntervalText',
                 html: '<font size=2 color=white>*Receipt/Bill No</font>',

             },
{

    margin: '-2 0 0 0',
    width: '80%',
    // height: 20,
    // id: 'htmlAnimatedIntervalValue',
    html: '<input type="text" id="input-FloatLoyaltyCardPoint_GeneratePoint_ReceiptID"  style="border-color:white;color:white;width:100%;text-align: center;font-size:20px;">'
},

                         ]

                     },


                 ]

             },

                      



                       
                                          
                       

                       {

                           xtype: 'container',
                           width: '100%',
                           margin: '-50 0 0 0',

                           // width: 40,
                           //docked: 'bottom',
                           height: 55,
                           //  title: '<font size="3" color="white">Live Tracking Map</font>',
                           //hidden: true,

                           id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom',
                           name:'containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_Name',
                           style: "background-color: transparent",
                           //style: {
                           //    // background: '#D25959',
                           //    background: 'transparent',
                           //    // border: '2px'
                           //},
                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                           layout: {
                               type: 'vbox',
                               pack: 'center',
                               align: 'center',
                           },

               


                           // hidden:true,
                           items:
                                  [
                                    

                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_CashBack',
                                                                 // width: '80%',
                                                                  width: 250,
                                                                  margin: '0 0 0 0',
                                                                  flex: 1,
                                                                  // style: "background-color: transparent",
                                                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-radius:20px 20px 0px 0px;',
                                                                  //style: "background-color: #F35B57;",

                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [

                                                                       {
                                                                           // xtype: 'button',
                                                                           id: 'HtmlFloatLoyaltyCardPoint_MenuBottom_generatePoint',
                                                                           //  badgeText: '1',
                                                                           margin: '2 0 0 0',

                                                                           height: 30,
                                                                           width: 50,
                                                                           html: '<img  src="resources/icons/generatePoint03.png" width="50" height="30" alt="Company Name">',

                                                                       },
                                                                                  {
                                                                                      margin: '-5 0 0 0',
                                                                                      id: 'HtmlFloatLoyaltyCardPoint_MenuBottom_generatePointTxt',
                                                                                      html: '<font size=1 color=purple><b>Send Loyalty Point</b></font>'
                                                                                  },
                                                                  


                                                                  ]
                                                              },








                                  ]

                       },













         ]















     });
    return _FloatLoyaltyCardPoint_GeneratePoint;



}





function FloatLoyaltyCardPoint_GeneratePointShow() {

    Ext.Viewport.remove(_FloatLoyaltyCardPoint_GeneratePoint);
    this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint_GeneratePoint());
    this.overlay.show();
    isFloatLoyaltyCardPoint_GeneratePointOpen = 'Y';
    _FloatPanel_GeneratePoint_isFirstLoad = "Y";
    //FloatLoyaltyCardPoint_GeneratePointAdjustHeight();

    //Ext.getCmp('htmlFloatLoyaltyCardPoint_GeneratePoint_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" width="130" height="130"/>');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_GeneratePoint_Logo').setHtml('<img src="' + GetAyohaUserPicProfile() + '" style = "width: 120px; height: 120px; border:2px solid grey; border-radius: 50%; max-width:250px;" />');


    Ext.getCmp('htmlFloatLoyaltyCardPoint_GeneratePoint_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + GetAyohaUserAccountNames() + '</div>');

    Ext.getCmp('HtmlFloatLoyaltyCardPoint_MenuBottom_generatePointTxt').setHtml('<font class="blink_me" size=1 color=purple><b>Send Loyalty Point to <u>'+GetAyohaUserAccountNames()+'</u></b></font>');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_GeneratePoint_CampaignName').setHtml('<font size=2 color=white><b>' + GetAyohaUserMembershipNo() + '</b></font>');
   // document.getElementById("input-FloatLoyaltyCardPoint_GeneratePoint_Amount").addEventListener("input", inputFloatLoyaltyCardPoint_GeneratePoint_Amount);

   

    //Load_FloatLoyaltyCardPoint_GeneratePoint_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode);

    //  Ext.getCmp('htmlFloatLoyaltyCardPoint_GeneratePointPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();


    var containerView5 = Ext.ComponentQuery.query('container[name=containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_Name]')[0];
    var containerViewEl5 = containerView5.element;
    containerViewEl5.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_Name();
      }
    );


    PointCampaignLoadByPointCampaignCodeStore();

}

function SingleTap_containerFloatLoyaltyCardPoint_GeneratePoint_MenuBottom_Name() {

    var GeneratePoint_Amount = document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value;
    var receiptbillID = document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_ReceiptID').value;

    if (GeneratePoint_Amount.length < 0) {
        swalFireFail("Amount Not Valid !!");
        return;
    }

    if (GeneratePoint_Amount=="0.00") {
        swalFireFail("Amount Not Valid !!");
        return;
    }
    
    if (globalRequiredReceiptBillNo == "YES") {

        if (receiptbillID.length < 0) {
            swalFireFail("Receipt\Bill ID is Required !!!");
            return;
        }
    }
    if (globalRequiredReceiptBillNo == "NO") {

        receiptbillID = "Not Required";
    }
    var b = parseFloat(document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value);
    var c = parseInt(globalEarnPoint);
   
    var objn = {
        "SubscriberAccNo":globalScan_QRCode_VerifyQRCode_PointCampaign_SubscriberAccNo,
        "EnterpriseAccNo":GetEnterpriseAccNo(),
        "PointCode":globalScan_QRCode_VerifyQRCode_PointCampaign_PointCampaignCode,
        "PointQrCode":"ManualMethod",
        "PointedBy":GetCurrentAccountName(),
        "PointedByPhoneModel":"NA",
        "PointedByUserAccNo":GetCurrAyohaEnterpriseUserAccountNo(),
        "PointedByPhoneSerialNo":"NA",
        "PointedByPhoneManufacturer":"NA",
        "PointedByPhonePlatform":"NA",
        "PointedByOneSignalID":"NA",
        "PointedByPhoneRawInfo":"NA",
        "CountsPoint": c,
        "PointCampaignCode":globalScan_QRCode_VerifyQRCode_PointCampaign_PointCampaignCode,
        //"Batch":1,
        "Amount":b.toFixed(2),
        "ReceiptBillID":receiptbillID,
        "PointEquation": globalPointAmountEquation,
        "TypeCRDB": "Credit",
        "PointType": "Earn",
        "EnterpriseName": localStorage.getItem('CurrEnterpriseName'),
        "PlayerID": localStorage.getItem('AyohaUserPlayerID'),




        // "SubscriberAccNo": globalFloatPanel_PointManagement_CreatePoint_SubscriberAccNo.slice(0, -1),
        // "EnterpriseAccNo": GetEnterpriseAccNo(),
        // "PointCode": GetPointCampaignCode(),
        // "PointQrCode": "BulkMethod",
        // "PointedBy": GetCurrentAccountName(),
        // "PointedByPhoneModel": "NA",
        // "PointedByUserAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
        // "PointedByPhoneSerialNo": "NA",
        // "PointedByPhoneManufacturer": "NA",
        // "PointedByPhonePlatform": "NA",
        // "PointedByOneSignalID": globalFloatPanel_PointManagement_CreatePoint_PlayerID.slice(0, -1),
        // "PointedByPhoneRawInfo": "NA",
        // "CountsPoint": globalFloatPanel_PointManagement_CreatePoint_PointValue.slice(0, -1),
        // "PointCampaignCode": GetPointCampaignCode(),
        // //"Batch":1,
        // "Amount": globalFloatPanel_PointManagement_CreatePoint_AmountValue.slice(0, -1),
        // "ReceiptBillID": "NotRequired",
        // "PointEquation": globalPointAmountEquation,
        // "TypeCRDB": "Credit",
        // "PointType": "Earn",
        // "EnterpriseName": localStorage.getItem('CurrEnterpriseName'),
        // "PlayerID":globalFloatPanel_PointManagement_CreatePoint_PlayerID.slice(0, -1),


    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/LoyaltyPoint/LoyaltyPointInsert',

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
                FloatLoyaltyCardPoint_GeneratePointHide();
               // var PointCampaignCode = GetPointCampaignCode();
               // Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeStore(PointCampaignCode);
              // DashboardMerchantMainStore();
              ReloadDashboard_LoadMembershipsLatestActivity();
            }
            else {
               // swalFireFail("Share Point  Error!")
                swalFireFail("Send Point  Error!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
           
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
          
            Ext.Viewport.unmask();
            swalFireFail("Card Point Failed!")
        }

    });
}



function FloatLoyaltyCardPoint_GeneratePointHide() {
    _FloatLoyaltyCardPoint_GeneratePoint.hide();

    isFloatLoyaltyCardPoint_GeneratePointOpen = 'N';
    _FloatPanel_GeneratePoint_isFirstLoad = "N";

    a="";

    document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = "";
}




function FloatLoyaltyCardPoint_GeneratePointAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    //var newHeight = adjustedHeight - 99;
    var newHeight = adjustedHeight - 65;

    //alert(newHeight)

    Ext.getCmp('tabpanelFloatLoyaltyCardPoint_GeneratePoint').setHeight(newHeight);
    Ext.getCmp('containerFloatLoyaltyCardPoint_GeneratePointMaster').setHeight(newHeight);






}












var a = '';
var b = '';
var num = [];
var ans;
var idx = 0;
var c = "";
function sendNums(digit) {
 
   

    a += digit;

   document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = a;





  
        //num.push(digit);


        //a = '';
        //document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = a;		// clearing the screen.


        //for (i = 0; i < num.length ; i++) {

        //    a = a + num[i];

        //    // concatenate the elements of the array "num" into a single string, which will be displayed on the screen


        //    //1
        //    //0.01
        //    //0.12
        //    //1.23
        //    //12.34

        //}


        //document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = a;
        document.getElementById("input-FloatLoyaltyCardPoint_GeneratePoint_Amount").focus();
        //document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').readOnly = true;
        //document.getElementById("input-FloatLoyaltyCardPoint_GeneratePoint_Amount").focus();
    //document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').readOnly = false;


       

        var Amount = document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value;
        var EarnPoint = parseFloat(Amount) * parseFloat(globalPointAmountEquation);
        globalEarnPoint = EarnPoint.toFixed(2);
        Ext.getCmp('HtmlFloatLoyaltyCardPoint_GeneratePoint_Points').setHtml('<div style="background: transparent;color:white; text-align:center;font-size:66px;font-weight:bold;width:100%;">'+EarnPoint.toFixed(2)+'</div>');
   

        
    
}


var globalEarnPoint;

function Backspaces() {

    // screenView.value = screenView.value.slice(0, -1);

    a = document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value;
    a = a.substring(0, a.length - 1);
    document.getElementById('input-FloatLoyaltyCardPoint_GeneratePoint_Amount').value = a;
    document.getElementById("input-FloatLoyaltyCardPoint_GeneratePoint_Amount").focus();
}
var globalPointAmountEquation;
var globalRequiredReceiptBillNo;
function PointCampaignLoadByPointCampaignCodeStore() {


 
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



        if (RequiredReceiptBillNo == "NO") {
            Ext.getCmp('containerFloatLoyaltyCardPoint_GeneratePointMasterMaster').setHeight('92%');
            Ext.getCmp('containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow05').setHidden(true);
            
            
        }
        if (RequiredReceiptBillNo == "YES") {
            Ext.getCmp('containerFloatLoyaltyCardPoint_GeneratePointMasterMaster').setHeight('85%');
            Ext.getCmp('containerFloatLoyaltyCardPoint_GeneratePoint_MasterNumberRow05').setHidden(false);

        }

        globalRequiredReceiptBillNo = RequiredReceiptBillNo;
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}