Ext.define('ianMizi.view.Master.FloatPanel_OpenAccountStep', {

});

var _FloatPanel_OpenAccountStep;


var isFloatPanel_OpenAccountStepOpen = 'N';











function FloatPanel_OpenAccountStep() {

    _FloatPanel_OpenAccountStep =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '100%',
         width:'100%',
         id: 'LoadingFloatPanel_OpenAccountStepID',
         draggable: false,



        // centered: true,
         //bottom: 64,
         zIndex: 45,

       right: -1,
              //top:32,
              modal: true,
              //hideOnMaskTap: true,
            //   layout: {
            //       type: 'fit'
            //   },
        //  modal: true,
        //  hideOnMaskTap: true,
         layout: {
                       type: 'vbox',
                 pack: 'start',
                 align: 'center'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
      // style: 'background-color:white;',
       style: 'background-image: url("resources/icons/stepTwoBg10.png"); background-size: 100% 100%;',
       //style: 'background-color:rgba(255,255,255, 0.92);',
       //  style: 'background-color:rgba(0,0,0, 0.8);',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       

         //  style: "background-color: #D25959;",
        //  items: {

        //      xtype: 'container',
        //      style: 'background-color:transparent;',
        //      layout: {
        //          type: 'vbox',
        //          pack: 'center',
        //          align: 'center'

        //      },

            




        //  },
        




         items: [

              



            {

                xtype: 'container',
                width: '100%',
                // docked: 'top',
                // width: 40,
                style: 'background-color:transparent;',
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_OpenAccountStepHeader',
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

                        // {
                        //     xtype: 'button',
                        //     height: 50,
                        //     width: 55,
                        //     margin:'5 0 0 0',
                        //     html: '<div ><img src="resources/icons/wired-gradient-40-cogs.gif" width="45" height="40" alt="Company Name"></div>',                          
                        //     ui: 'plain',
                        //     handler: function () {
                        //         _FloatPanel_OpenAccountStep.hide(Ext.fx.Animation({
                        //             type: 'slideOut',
                        //             direction: 'right',
                        //            // easing: 'cubic-bezier(.7,0,.7,1)',
                        //             duration: 250
                        //         }));
                        //         FloatPanel_DrawerMenu_Main_stepOneHide()
                        //         isFloatPanel_OpenAccountStepOpen = 'N';

                        //     }
                        // },

                        // {
                        //     xtype: 'spacer',
                        //     width:5
                        // },
                        // {
                        //     margin: '0 0 0 0',
                        //     html: '<font size=4 color=black><b>Account Setting</b></font>'
                        // },
                           // {
                           //     margin: '0 0 0 0',
                           //     html: '<font size=4 color=black><b>Approval Status</b></font>'
                           // },
                                      {
                                          xtype: 'spacer',

                                      },

                                      




                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_OpenAccountStepBack',
                                           height: 40,
                                           width: 45,
                                           margin:'5 0 0 0',
                                           // iconCls: 'list',
                                          // html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div ><img src="resources/icons/backPurpleori.png" width="35" height="30" alt="Company Name"></div>',
                                        //  html:'<lord-icon src="https://cdn.lordicon.com/lbjtvqiv.json" trigger="hover" style="width:250px;height:250px"> </lord-icon>',
                                           
                                           ui: 'plain',
                                           handler: function () {

                                               _FloatPanel_OpenAccountStep.hide(Ext.fx.Animation({
                                                   type: 'slideOut',
                                                   direction: 'right',
                                                  // easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               FloatPanel_DrawerMenu_Main_stepOneHide();
                                               FloatPanel_DrawerMenu_Main_StepTwoHide();
                                               FloatPanel_DrawerMenu_Main_StepThreeHide();                                           
                                               FloatPanel_DrawerMenu_Main_stepFiveHide();
                                               isFloatPanel_OpenAccountStepOpen = 'N';

                                           }
                                       },


                                       {
                                           xtype: 'spacer',
       width:10
                                       },






                       ]

            },


            {
                xtype: 'container',
                docked:'bottom',
                width: '100%',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:1px solid grey;background-color:white',
                height: 50,
                       layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'

             },items:[
                { 
                    margin: '0 0 0 0',    
                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Developed by versiLani Sdn Bhd-2025</div>' ,
                }, 

             ]
            },
       {


           // xtype: 'button',
           xtype: 'container',
           margin: '0 0 0 0',
           id: 'FloatPanel_OpenAccountStepBorderBg',
           //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
           style: ' background-color:transparent;',
           height: '100%',
           width: '90%',
           // style: 'border:2px solid #D25959;',
           layout: {
               type: 'vbox',
               pack: 'start',
               align: 'center'
           },
           items: [
             
             

{ margin: '-20 0 0 0',    
html: '<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 26px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Hello!,ZulTobek</div>' ,
},

{
xtype: 'container',
margin: '10 0 0 0',
style: 'background-color:transparent;',
height: 35,
width: '100%',
layout: {
   type: 'vbox',
   pack: 'center',
   align: 'center'
},
items:[
   {
    //style="width:100%;height:80;background-color: transparent;text-align:center;border: 1px none white;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px"
       
    // html: '<div class="typewriter" id="typewriter">There are few more simple step to complete your Ayoha Merchant Account!.'+
    // 'Please follow below step and you now are ready to go with our latest and advanced membership system.'+
    // '<br>Welcome to Ayoha Membership Management system!'+
    // '</div>' ,
    
    html: '<div class="typewriter" id="typewriter"></div>' ,
       height: 35,
width: '100%',
    },

]
},

{
xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:grey;',
height: 0.5,
width: '80%',
},

{
    xtype: 'container',
    margin: '0 0 0 0',
    id:'containerFloatPanel_OpenAccountStep',
    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
    style: 'background-color:transparent;',
   height: 70,
    //height: 250,
    width: '100%',
    },






    {
        xtype: 'container',
        margin: '0 0 0 0',
      
        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
        style: 'background-color:transparent;',
       
        width: '100%',
        layout: {

            type: 'vbox',
            align: 'left',
            pack: 'start'

        },
        items:[
            {
        
                html: '<div id="chart_FloatPanel_OpenAccountStep"></div>',
                //  margin: '-35 0 0 0',
            },
            {  
                margin: '-250 0 0 180',
                 id:'htmlFloatPanel_OpenAccountStep_persent',
                html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 0px;"><b>0%</b></div>',
            },
        
            // {
            //     xtype: 'container',
            //     width: '100%',
            //    // margin: '-230 0 0 90',
            //     margin: '0 0 0 0',
            //     style: "border:3px none #EAEDED",
            //     layout: {
        
            //         type: 'vbox',
            //         align: 'center',
            //         pack: 'start'
        
            //     },
            //     items: [
        
        
            //       {  
            //           margin: '-200 0 0 0',
            //            id:'htmlFloatPanel_OpenAccountStep_persent',
            //           html: '<div style="color:black;text-align: center;font-size:25px;width:100%;margin:0px 0px 0px 0px;"><b>0%</b></div>',
            //       },
                 
               
        
            //     ]
            // },
        ]
    },
   
{
    xtype: 'container',
    margin: '0 0 0 0',
    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
    style: 'background-color:transparent;',
    height: 160,
    width: '100%',
},

// {
         

// xtype:'image',
// margin: '20 0 0 0',
// hidden:true,
// //  margin: '-100 0 0 20',
// width: '100%',
// height: 210,
// src:"resources/icons/tempChart.png"
// // height: '100%',
// //  id: 'htmlFloatPanel_AyohaCardManagement_EditCard_StampCampaignQRCode_Standards',
// //  html: '<img src="resources/icons/qrcodeReceipt.png" style="width: 100%; height: 360px; border:1px solid white;" />',
// },



{
    xtype: 'container',
    width: '100%',
    style: 'background-color:transparent;',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'left'
     },
     items:[
        { 
            margin: '0 0 0 0',   
            id:'htmlFloatPanel_OpenAccountStep_StepAndBalance', 
        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Merchant Open Account Step</div>' ,
        }, 
     ]
   
    },
    


{
xtype: 'container',
width: '100%',
style: 'background-color:transparent;',
height: 20,
layout: {
    type: 'hbox',
    pack: 'start',
    align: 'left'
 },
 items:[

 ]
},



{
xtype: 'container',
margin: '0 0 0 -60',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',    
height: 120,
//height: '20%',
width: '90%',
layout: {
   type: 'hbox',
   pack: 'center',
   align: 'center'
},
items:[
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
{



xtype: 'container',
margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
//style: 'background-color:white;border-radius:50%;border:1px solid #fac',
style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;',
zIndex:5,
id:'containerFloatPanel_OpenAccountStep1',
name:'namecontainerFloatPanel_OpenAccountStep1',   
height: 80,
width: 80,
layout: {
   type: 'vbox',
   pack: 'center',
   align: 'center'
},
items:[
{
    id:'noFloatPanel_OpenAccountStep1',
html: '<div  style="width:100%;text-align:left;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px;background-color:transparent;">1</div>' ,
}
]
},
{
// margin: '5 0 0 -45',
id:'txtFloatPanel_OpenAccountStep1',
html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -25px;">Open Ayoha Merchant Account</div>' , 
}
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
      // style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
      style: 'background-color:white;border-radius:50%;border:1px solid black',
       id:'containerFloatPanel_OpenAccountStep2',
       name:'namecontainerFloatPanel_OpenAccountStep2',      
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep2',
    cls:'blink_me_sendNow',
       html: '<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">2</div>' ,
   }
       ]
   },
   {
      // margin: '5 0 0 -45',
      id:'txtFloatPanel_OpenAccountStep2',
      cls:'blink_me_sendNow',
       html: '<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:5px 0px 0px -23px;">Create New Membership Card</div>' , 
   },




   {
    xtype: 'button',
    hidden:true,
    id:'btnFloatPanel_OpenAccountStep2',                    
                      ui: 'plain',
                      text: '<div class="blink_me_sendNow"><button class="buttonClickHere">Click Here</button></div>',
                      handler: function () {
                        FloatPanel_MembershipCardManagement_NewCardAddShow();
                      }
   }
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
       style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
       id:'containerFloatPanel_OpenAccountStep3',
       name:'namecontainerFloatPanel_OpenAccountStep3',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep3',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:#cccccc;margin:0px 0px 0px 0px">3</div>' ,
   }
       ]
   },
   {
      // margin: '5 0 0 -45',
      id:'txtFloatPanel_OpenAccountStep3',
       html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:#cccccc;margin:5px 0px 0px -20px;">Create Membership Card Privilege </div>' , 
   },
   {
    xtype: 'button',
    id:'btnFloatPanel_OpenAccountStep3',
    hidden:true,                    
                      ui: 'plain',
                      text: '<div class="blink_me_sendNow"><button class="buttonClickHere">Click Here</button></div>',
                      handler: function () {
                        FloatPanel_MembershipCardManagement_NewCardAddShow();
                      }
   }
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
       style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
       id:'containerFloatPanel_OpenAccountStep4',
       name:'namecontainerFloatPanel_OpenAccountStep4',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep4',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:#cccccc;margin:0px 0px 0px 0px">4</div>' ,
   }
       ]
   },
   {
    id:'txtFloatPanel_OpenAccountStep4',
        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:#cccccc;margin:5px 0px 0px -34px;">Add Privilege into Membership Card</div>' , 
    },
    {
        xtype: 'button',
        id:'btnFloatPanel_OpenAccountStep4', 
        hidden:true,                        
                          ui: 'plain',
                          text: '<div class="blink_me_sendNow"><button class="buttonClickHere">Click Here</button></div>',
                          handler: function () {
                           // FloatPanel_MembershipCardManagement_NewCardAddShow();
                          }
       }
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
       style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
       id:'containerFloatPanel_OpenAccountStep5',
       name:'namecontainerFloatPanel_OpenAccountStep5',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep5',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:#cccccc;margin:0px 0px 0px 0px">5</div>' ,
   }
       ]
   },
   {
      // margin: '5 0 0 -45',
      id:'txtFloatPanel_OpenAccountStep5',
       html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:#cccccc;margin:5px 0px 0px -22px;">Print & Display Membership QR Code</div>' , 
   }
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
       style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
       id:'containerFloatPanel_OpenAccountStep6',
       name:'namecontainerFloatPanel_OpenAccountStep6',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep6',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:#cccccc;margin:0px 0px 0px 0px">*6</div>' ,
   }
       ]
   },
   {
      // margin: '5 0 0 -45',
      id:'txtFloatPanel_OpenAccountStep6',
       html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:#cccccc;margin:5px 0px 0px -21px;">Open Ayoha Business Wallet Account</div>' , 
   }
]
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
       style: 'background-color:white;border-radius:50%;border:1px solid #cccccc',
       id:'containerFloatPanel_OpenAccountStep7',
       name:'namecontainerFloatPanel_OpenAccountStep7',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
   {
    id:'noFloatPanel_OpenAccountStep7',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:#cccccc;margin:0px 0px 0px 0px">*7</div>' ,
   }
       ]
   },
   {
      // margin: '5 0 0 -45',
      id:'txtFloatPanel_OpenAccountStep7',
       html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:#cccccc;margin:5px 0px 0px -15px;">Setting Up Ayoha Online Store</div>' , 
   }
]
   },




   {
       xtype: 'container',
margin: '0 0 0 0',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:transparent;',
height: '100%',
//cls:'example-1',
width: '14.3%',
layout: {
   type: 'vbox',
   pack: 'start',
   align: 'left'
},
items:[
   {



       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 0',    
      // style: 'background-image: url("resources/icons/Logo/LogoOrangeSimplifed.png"); background-size: 100% 100%;background-repeat:no-repeat',
      style: 'background-color:white;',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
       items:[
            
   {
       xtype: 'container',
       zIndex:5,
       margin: '0 0 0 -30',    
      style: 'background-image: url("resources/icons/Logo/LogoOrangeSimplifed.png"); background-size: 100% 100%;background-repeat:no-repeat',
     // style: 'background-color:white;',
       height: 80,
       width: 80,
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'
       },
      // html: '<div style="width:100%;background-image: url("resources/icons/Logo/LogoOrangeSimplifed.png"); background-size: 100% 100%;background-repeat:no-repeat;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px"></div>' ,
   }
       ]
   },
   {
       // margin: '5 0 0 -45',
        html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:5px 0px 0px -29px;">Hooray!Succesfully Setup</div>' , 
    }
   // {
   //    // margin: '5 0 0 -45',
   //     html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-size: 14px;font-weight:bold;color:black;margin:5px 0px 0px -29px;">Setting Up Ayoha Online Store</div>' , 
   // }
]
   },
]
},


{
xtype: 'container',
margin: '-85 0 0 -60',
//zIndex:-10,
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:white;',
height: 10,
width: '90%',
layout: {
   type: 'hbox',
   pack: 'center',
   align: 'center'
},
items:
[
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep1',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep2',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep3',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep4',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep5',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep6',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   },
   {
       xtype: 'container',
margin: '0 0 0 0',
id:'rodFloatPanel_OpenAccountStep7',
//   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
style: 'background-color:#cccccc;',
height: 5,
width: '14.3%',
   }
]
},


{
         
hidden:true,
// xtype:'image',
margin: '10 0 0 0',
//  margin: '-100 0 0 20',
// width: '90%',
// height: 150,
// src:"resources/icons/openAccountImgStep.png"
// height: '100%',
//  id: 'htmlFloatPanel_AyohaCardManagement_EditCard_StampCampaignQRCode_Standards',
html: '<img src="resources/icons/openAccountImgStep.png" style="width: 100%; height: 150px; border:1px solid white;" />',
},

           ]


       },




      



        ]






     });
    return _FloatPanel_OpenAccountStep;





}
var globalFloatPanel_OpenAccountStep;




function FloatPanel_OpenAccountStep_CheckingStepActive(){
  //  globalCountMembershipCard+globalCountMembershipCardPrivilege+globalCountPrivilgeOnMembershipCard+globalCountQrCodeMembershipCampaign+globalCountAyohaSaleItem;
  
 

    if(globalCountMembershipCard>0){



       
        Ext.getCmp('containerFloatPanel_OpenAccountStep2').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;');
        Ext.getCmp('noFloatPanel_OpenAccountStep2').setCls('');
        Ext.getCmp('noFloatPanel_OpenAccountStep2').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px">2</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep2').setCls('');
        Ext.getCmp('btnFloatPanel_OpenAccountStep2').setHidden(true);        
        Ext.getCmp('txtFloatPanel_OpenAccountStep2').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -23px;">Create New Membership Card</div>');
        Ext.getCmp('rodFloatPanel_OpenAccountStep2').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');   
        
        //////////////////////////////////

        Ext.getCmp('containerFloatPanel_OpenAccountStep3').setStyle('background-color:white;border-radius:50%;border:1px solid black');
        Ext.getCmp('noFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');
        Ext.getCmp('noFloatPanel_OpenAccountStep3').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">3</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');
       
        


        
       
    }
    if(globalCountMembershipCardPrivilege>0){



       
        Ext.getCmp('containerFloatPanel_OpenAccountStep3').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;');
        Ext.getCmp('noFloatPanel_OpenAccountStep3').setCls('');
        Ext.getCmp('noFloatPanel_OpenAccountStep3').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px">3</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep3').setCls('');
        Ext.getCmp('btnFloatPanel_OpenAccountStep3').setHidden(true);        
        Ext.getCmp('txtFloatPanel_OpenAccountStep3').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -28px;">Create Membership Card Privillege</div>');
      //  Ext.getCmp('rodFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');  
        Ext.getCmp('rodFloatPanel_OpenAccountStep3').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');   
        
        //////////////////////////////////

         Ext.getCmp('containerFloatPanel_OpenAccountStep4').setStyle('background-color:white;border-radius:50%;border:1px solid black');
         Ext.getCmp('noFloatPanel_OpenAccountStep4').setCls('blink_me_sendNow');
       //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
       Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
       Ext.getCmp('txtFloatPanel_OpenAccountStep4').setCls('blink_me_sendNow');
      Ext.getCmp('txtFloatPanel_OpenAccountStep4').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -44px;">Add Privilege into Membership Card</div>');
       
    }

    if(globalCountPrivilgeOnMembershipCard>0){

       
        Ext.getCmp('containerFloatPanel_OpenAccountStep4').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;');
        Ext.getCmp('noFloatPanel_OpenAccountStep4').setCls('');
        Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px">4</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep4').setCls('');
       // Ext.getCmp('btnFloatPanel_OpenAccountStep4').setHidden(true);        
        Ext.getCmp('txtFloatPanel_OpenAccountStep4').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -28px;">Add Privilege into Membership Card</div>');
      //  Ext.getCmp('rodFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');  
        Ext.getCmp('rodFloatPanel_OpenAccountStep4').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');   
        
        //////////////////////////////////

         Ext.getCmp('containerFloatPanel_OpenAccountStep5').setStyle('background-color:white;border-radius:50%;border:1px solid black');
         Ext.getCmp('noFloatPanel_OpenAccountStep5').setCls('blink_me_sendNow');
       //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
       Ext.getCmp('noFloatPanel_OpenAccountStep5').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:black;margin:0px 0px 0px 0px">5</div>');
       Ext.getCmp('txtFloatPanel_OpenAccountStep5').setCls('blink_me_sendNow');
      Ext.getCmp('txtFloatPanel_OpenAccountStep5').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -44px;">Print & Display Membership Qr Code</div>');
        
     
    }

   


    if(globalCountPrintAndDisplayMembershipCard>0){


        Ext.getCmp('containerFloatPanel_OpenAccountStep5').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;');
        Ext.getCmp('noFloatPanel_OpenAccountStep5').setCls('');
        Ext.getCmp('noFloatPanel_OpenAccountStep5').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px">5</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep5').setCls('');
       // Ext.getCmp('btnFloatPanel_OpenAccountStep4').setHidden(true);        
        Ext.getCmp('txtFloatPanel_OpenAccountStep5').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -28px;">Print & Display Membership Qr Code</div>');
      //  Ext.getCmp('rodFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');  
        Ext.getCmp('rodFloatPanel_OpenAccountStep5').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');   
        
        //////////////////////////////////

         Ext.getCmp('containerFloatPanel_OpenAccountStep6').setStyle('background-color:white;border-radius:50%;border:1px solid black');
         Ext.getCmp('noFloatPanel_OpenAccountStep6').setCls('blink_me_sendNow');
       //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
       Ext.getCmp('noFloatPanel_OpenAccountStep6').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:black;margin:0px 0px 0px 0px">*6</div>');
       Ext.getCmp('txtFloatPanel_OpenAccountStep6').setCls('blink_me_sendNow');
      Ext.getCmp('txtFloatPanel_OpenAccountStep6').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -34px;">Open Ayoha Business Wallet Account</div>');
       
        
    }


    if(globalDashboardisUserHasEwalletAccount=="Y"){
        Ext.getCmp('containerFloatPanel_OpenAccountStep6').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:50%;border:1px solid #fac;');
        Ext.getCmp('noFloatPanel_OpenAccountStep6').setCls('');
        Ext.getCmp('noFloatPanel_OpenAccountStep6').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:white;margin:0px 0px 0px 0px">6</div>');
        Ext.getCmp('txtFloatPanel_OpenAccountStep6').setCls('');
       // Ext.getCmp('btnFloatPanel_OpenAccountStep4').setHidden(true);        
        Ext.getCmp('txtFloatPanel_OpenAccountStep6').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 10px;font-weight:bold;color:purple;margin:5px 0px 0px -34px;">Open Ayoha Business Wallet Account</div>');
      //  Ext.getCmp('rodFloatPanel_OpenAccountStep3').setCls('blink_me_sendNow');  
        Ext.getCmp('rodFloatPanel_OpenAccountStep6').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');   
        
        //////////////////////////////////

         Ext.getCmp('containerFloatPanel_OpenAccountStep7').setStyle('background-color:white;border-radius:50%;border:1px solid black');
         Ext.getCmp('noFloatPanel_OpenAccountStep7').setCls('blink_me_sendNow');
       //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
       Ext.getCmp('noFloatPanel_OpenAccountStep7').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:black;margin:0px 0px 0px 0px">*7</div>');
       Ext.getCmp('txtFloatPanel_OpenAccountStep7').setCls('blink_me_sendNow');
      Ext.getCmp('txtFloatPanel_OpenAccountStep7').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -34px;">Setting Up Ayoha Online Store</div>');
       
    }


//     alert("globalCountPrintAndDisplayMembershipCard:"+globalCountPrintAndDisplayMembershipCard)
//     if(globalCountPrintAndDisplayMembershipCard==0){
//         Ext.getCmp('containerFloatPanel_OpenAccountStep5').setStyle('background-color:white;border-radius:50%;border:1px solid black');
//         Ext.getCmp('noFloatPanel_OpenAccountStep5').setCls('blink_me_sendNow');
//       //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
//       Ext.getCmp('noFloatPanel_OpenAccountStep5').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:black;margin:0px 0px 0px 0px">5</div>');
//       Ext.getCmp('txtFloatPanel_OpenAccountStep5').setCls('blink_me_sendNow');
//      Ext.getCmp('txtFloatPanel_OpenAccountStep5').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -34px;">Print & Display Membership Qr Code</div>');
       
//      Ext.getCmp('containerFloatPanel_OpenAccountStep6').setStyle('background-color:white;border-radius:50%;border:1px solid black');
//      Ext.getCmp('noFloatPanel_OpenAccountStep6').setCls('');
//    //  Ext.getCmp('noFloatPanel_OpenAccountStep4').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 32px;font-weight:bold;color:black;margin:0px 0px 0px 0px">4</div>');
//    Ext.getCmp('noFloatPanel_OpenAccountStep6').setHtml('<div style="cursor:pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 34px;font-weight:bold;color:grey;margin:0px 0px 0px 0px">*6</div>');
//    Ext.getCmp('txtFloatPanel_OpenAccountStep6').setCls('');
//   Ext.getCmp('txtFloatPanel_OpenAccountStep6').setHtml('<div style="width:100%;background-color: transparent;cursor:pointer;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:5px 0px 0px -34px;">Open Ayoha eWallet Account</div>');
   

       
//       }


}


function FloatPanel_OpenAccountStep_CheckingPageStep()
{
    // alert(globalCountMembershipCard)
    // alert(globalCountMembershipCardPrivilege)
    // alert(globalCountPrintAndDisplayMembershipCard)
   // return
   // if(globalCountMembershipCardPrivilege>0){

    
    if(globalCountMembershipCard==0){
        FloatPanel_DrawerMenu_Main_stepOneShow();
        var task = Ext.create('Ext.util.DelayedTask', function () {
  
          var containerx = Ext.getCmp('FloatPanel_DrawerMenu_Main_stepOneID_inner');
                      var scroller = containerx.getScrollable().getScroller();
                      var animation = {
                          type: 'ease-out',  // This eases the animation out, making it slow down at the end
                          duration: 1000    // Duration of the animation in milliseconds (1 second)
                      };
                      scroller.scrollTo(0, scroller.getMaxPosition().y-490, animation);
      
                   });
                  FloatPanel_OpenAccountStep_Animate();
                  task.delay(800);
        return;
      }
      if(globalCountMembershipCardPrivilege==0){
         // FloatPanel_DrawerMenu_Main_stepTwoShow();
          FloatPanel_DrawerMenu_Main_StepTwoShow();
          var task = Ext.create('Ext.util.DelayedTask', function () {
  
              var containerx = Ext.getCmp('FloatPanel_DrawerMenu_Main_stepTwoID_inner');
                          var scroller = containerx.getScrollable().getScroller();
                          var animation = {
                              type: 'ease-out',  // This eases the animation out, making it slow down at the end
                              duration: 1000    // Duration of the animation in milliseconds (1 second)
                          };
                          scroller.scrollTo(0, scroller.getMaxPosition().y-390, animation);
          
                       });
                       FloatPanel_OpenAccountStep_Animate();
                      task.delay(800);
          return;
        }
      
   
        // if(globalCountPrintAndDisplayMembershipCard==0){
        //     // FloatPanel_DrawerMenu_Main_stepTwoShow();
          
        //    // FloatPanel_DrawerMenu_Main_stepFiveShow();
        //      var task = Ext.create('Ext.util.DelayedTask', function () {
     
        //          var containerx = Ext.getCmp('FloatPanel_DrawerMenu_Main_stepFiveID_inner');
        //                      var scroller = containerx.getScrollable().getScroller();
        //                      var animation = {
        //                          type: 'ease-out',  // This eases the animation out, making it slow down at the end
        //                          duration: 1500    // Duration of the animation in milliseconds (1 second)
        //                      };
        //                      scroller.scrollTo(0, scroller.getMaxPosition().y-750, animation);
             
        //                   });
        //                   FloatPanel_OpenAccountStep_Animate();
                       
        //                //   FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
        //                  task.delay(500);
        //      return;
        //    }
}

function FloatPanel_OpenAccountStepShow() {

    Ext.Viewport.remove(_FloatPanel_OpenAccountStep);
    this.overlay = Ext.Viewport.add(FloatPanel_OpenAccountStep());
    this.overlay.show();
    isFloatPanel_OpenAccountStepOpen = 'Y';
    FloatPanel_OpenAccountStep_CountBalance();
    const text = 'You are almost done, just need few step  to completed your Ayoha Merchant Account!';
    const speed = 50; // speed in milliseconds
    typeWriter(text, 'typewriter', speed);



   




   // FloatPanel_OpenAccountStep_CheckingStepActive();



    var containerViewnamecontainerFloatPanel_OpenAccountStep1 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep1]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep1 = containerViewnamecontainerFloatPanel_OpenAccountStep1.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep1.on('tap',
      function (event, node, options, eOpts) {
    
        globalFloatPanel_OpenAccountStep="1";
        FloatPanel_AyohaEnterpriseAccountShow();
         
          
          Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount').setHidden(false);
          Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise').setHidden(true);
          Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(1);
          Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore();


          Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt').setHtml("<font size=4 color=black><b>Enterprise Info</b></font>");
          Ext.getCmp('btnFloatPanel_AyohaEnterpriseAccount_AddNew').setHidden(false);
          Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_count').setHidden(false);
          Ext.getCmp('htmlFloatPanel_FloatPanel_AyohaEnterpriseAccount_ListTypeSearchTxt_EnterpriseName').setHidden(false);
          Ext.getCmp('htmlFloatPanel_FloatPanel_AyohaEnterpriseAccount_ListTypeSearchTxt_UserEnterprise').setHidden(true);
          Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_UserEnterprisecount').setHidden(true);
      
      }
    );




   
    




    var containerViewnamecontainerFloatPanel_OpenAccountStep2 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep2]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep2 = containerViewnamecontainerFloatPanel_OpenAccountStep2.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep2.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_OpenAccountStep="2";
      
        if(globalCountMembershipCard>0){
            swalFireOpenStepSuccess("Congratulations! You've successfully created your very own Membership Card 🌟!");
            FloatPanel_MembershipCardManagementShow();
            return;
        }else{
           
           // FloatPanel_DrawerMenu_Main_stepOneHide();
            FloatPanel_DrawerMenu_Main_stepOneHide()
            FloatPanel_OpenAccountStep_CheckingPageStep();
        }
      
       
      
      }
    );



    var containerViewnamecontainerFloatPanel_OpenAccountStep3 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep3]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep3 = containerViewnamecontainerFloatPanel_OpenAccountStep3.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep3.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_OpenAccountStep="3";
       
        if(globalCountMembershipCardPrivilege>0){
            FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
        }
        if(globalCountMembershipCardPrivilege==0){
            FloatPanel_DrawerMenu_Main_StepTwoHide();
            FloatPanel_OpenAccountStep_CheckingPageStep(); 
        }
        
       
       
       // FloatPanel_DrawerMenu_Main_StepTwoHide();
       // FloatPanel_OpenAccountStep_CheckingPageStep();

      }
    );



    var containerViewnamecontainerFloatPanel_OpenAccountStep4 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep4]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep4 = containerViewnamecontainerFloatPanel_OpenAccountStep4.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep4.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_OpenAccountStep="4";
       
//alert(globalCountPrivilgeOnMembershipCard)
        if(globalCountPrivilgeOnMembershipCard>0){
            FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
             
      return;
          }else{
           FloatPanel_AyohaCardManagementShow_FromOpenAccountStep();
           FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
         //  FloatPanel_OpenAccountStep_Step4();
          }
        




       


        

     //   FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();

      
      }
    );



    var containerViewnamecontainerFloatPanel_OpenAccountStep5 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep5]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep5 = containerViewnamecontainerFloatPanel_OpenAccountStep5.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep5.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_OpenAccountStep="5";
       
    //  alert(globalDashboard_QRDescCheckBox)
       

        if(globalDashboard_QRDescCheckBox=="notPrint"){
            LoadingPanelShow(getLoadingIcon(), 'Loading....');
            FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();   
           // FloatPanel_OpenAccountStep_CheckingPageStep(); 
          //  FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
            
        }
        if(globalDashboard_QRDescCheckBox=="alreadyPrint"){
            LoadingPanelShow(getLoadingIcon(), 'Loading....');
            FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
        }
       
        if(globalDashboard_QRDescCheckBox=="NA"){
            LoadingPanelShow(getLoadingIcon(), 'Loading....');
            FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();           
        }



        // if(globalCountQrCodeMembershipCampaign>0){
        //     FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
            
        // }
        // if(globalCountQrCodeMembershipCampaign==0){
        //     //FloatPanel_DrawerMenu_Main_StepFiveHide();
        //     FloatPanel_OpenAccountStep_CheckingPageStep(); 
        // }
       
      }
    );


    var containerViewnamecontainerFloatPanel_OpenAccountStep6 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep6]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep6 = containerViewnamecontainerFloatPanel_OpenAccountStep6.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep6.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_OpenAccountStep="6";
       // alert(globalDashboardisUserHasEwalletAccount)
        FloatPanel_AyohaeWalletShow();
      }
    );



    var containerViewnamecontainerFloatPanel_OpenAccountStep7 = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_OpenAccountStep7]')[0];
    var containerViewElnamecontainerFloatPanel_OpenAccountStep7 = containerViewnamecontainerFloatPanel_OpenAccountStep7.element;
    containerViewElnamecontainerFloatPanel_OpenAccountStep7.on('tap',
      function (event, node, options, eOpts) {
        globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Shrink";
          globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ColView";
          globalFloatPanel_AyohaStore_ModuleTagging = "BurgerMenu_MyAyohaStore";
          FloatPanel_AyohaStoreShow();
          FloatPanel_DrawerMenu_MainHide();
      }
    );
   
   
    var valHeight= checkingDisplaySize();

    if(valHeight>730){
    
        Ext.getCmp('containerFloatPanel_OpenAccountStep').setHeight(250) 
        //id="chart_FloatPanel_OpenAccountStep"   
    }






   


   
}


function FloatPanel_OpenAccountStepHide() {
    if(isFloatPanel_OpenAccountStepOpen == 'Y'){
        _FloatPanel_OpenAccountStep.hide(); isFloatPanel_OpenAccountStepOpen = 'N';
        FloatPanel_DrawerMenu_Main_stepOneHide();
                                               FloatPanel_DrawerMenu_Main_StepTwoHide();
                                               FloatPanel_DrawerMenu_Main_StepThreeHide();                                           
                                               FloatPanel_DrawerMenu_Main_stepFiveHide();
    }

}






function FloatPanel_OpenAccountStep_CountBalance() {

    var TotalStep = 7;
                    globalCountAyohaSaleItem=1;
                    var CurrentStep = 1+globalCountMembershipCard+globalCountMembershipCardPrivilege+globalCountPrivilgeOnMembershipCard+globalCountPrintAndDisplayMembershipCard+globalDashboardeWalletStep+globalCountAyohaSaleItem;
    var BalanceStep = 6;
   
  // Ensure the Google Visualization API is loaded before calling your function
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(FloatPanel_OpenAccountStep_initializeStepChart(TotalStep,CurrentStep,BalanceStep));

    // _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    // _DataStore_AyohaNotificationMasterPNDashboardStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterPNDashboard');
    // _DataStore_AyohaNotificationMasterPNDashboardStore.load();



    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaNotificationMasterPNDashboardStore.getCount();

        

    //     var modelRecord = _DataStore_AyohaNotificationMasterPNDashboardStore.getAt(0);
      
    //    // setDashBoardPushNotificationsQuota();


    // });
    // task.delay(500);


}

// function checkingDisplaySize(){

//     var w=window.screen.width;
//     var h=window.screen.height;

//     // alert('width:'+w);
//     // alert('height:'+h);

//     // Get the width of the viewport
// const viewportWidth = window.innerWidth;

// // Get the height of the viewport
// const viewportHeight = window.innerHeight;

 



//     // alert('viewportWidth:'+viewportWidth);
//     // alert('viewportHeight:'+viewportHeight);





// // width:1536
// // height:864
// // viewportWidth:1536
// // viewportHeight:730

// if(viewportHeight>730){
    
//     Ext.getCmp('containerFloatPanel_OpenAccountStep').setHeight(250) 
//     //id="chart_FloatPanel_OpenAccountStep"   
// }








// }

function FloatPanel_OpenAccountStep_initializeStepChart(TotalStep,CurrentStep,BalanceStep) {


    var quota = TotalStep;
    var totalUsed = CurrentStep;

    // Initialize the chart with initial data
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Content');
    data.addColumn('number', 'Size');
    data.addRow(['Step', 0]); // Initial 'Used' value
    data.addRow(['Remaining', quota]); // Initial 'Remaining' value

    var options = {
        title: '',
        pieHole: 0.7,
        pieSliceText: 'none',
        // slices: {
        //     0: {textStyle: {color: 'transparent'}},  // Make text color transparent or match background
        //     1: {textStyle: {color: 'transparent'}}
        // },
       // #BA55D3
        colors: ['#BA55D3', '#E8E8E8'],
       // pieSliceBorderColor: 'black',
        backgroundColor: 'transparent', pieStartAngle: 180,
        pieSliceBorderColor: "none",
        legend: { position: 'none' },
      //  chartArea: { width: '95%', height: '85%' },
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_FloatPanel_OpenAccountStep'));

    var increment = 0;
    var incrementStep = totalUsed / 100; // Determine the speed of the animation
    var handler = setInterval(function() {
        increment += incrementStep;
        if (increment > totalUsed) {
            increment = totalUsed; // Make sure increment does not exceed total used
            
        }
        Ext.getCmp('htmlFloatPanel_OpenAccountStep_persent').setHtml('<div style="text-align: center; font-size: 50px;"><b>' + Math.round((increment / TotalStep) * 100) + '%</b></div>');
        data.setValue(0, 1, Math.round(increment)); // Ensure the value is rounded to avoid fractional issues
        data.setValue(1, 1, Math.round(quota - increment)); // Round here as well
       
        // if (increment ==4) {
            
        // }

       
        // if (increment == 6) {
          
        // }




        chart.draw(data, options);
        Ext.getCmp('htmlFloatPanel_OpenAccountStep_StepAndBalance').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Merchant Open Account Step (' + totalUsed + '/' + TotalStep + ')</div>');
      //  Ext.getCmp('htmlFloatPanel_OpenAccountStep_StepAndBalance').setHtml('<div style="text-align: center; font-time: 14px; margin-top: -15px"><b>' + totalUsed + '/' + TotalStep + '</b></div>');




        if (increment >= totalUsed) {
           // FloatPanel_DrawerMenu_Main_stepOneHide();
          
            clearInterval(handler); // Stop the animation when the final value is reached
        }

       
      //  
    }, 5); // Adjust timing for smoother animation

   // FloatPanel_OpenAccountStep_initializeStepChart_reCreate();
   


       var task = Ext.create('Ext.util.DelayedTask', function () {

        FloatPanel_OpenAccountStep_CheckingPageStep();
        FloatPanel_OpenAccountStep_CheckingStepActive();


    });
    task.delay(800);
   
   return


    // Update the HTML elements with the current usage info (optional)
    Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification').setHtml('<div style="text-align: center; font-size: 10px;">Push Notifications</div><br><div style="text-align: center; font-time: 14px; margin-top: -25px"><b>' + TotalUsed + '/' + GetPushNotificationQuota() + '</b></div>');
    Ext.getCmp('htmlMyAccount_Dashboard_BlastingMessageQuota_PushNotification_persent').setHtml('<div style="text-align: center; font-size: 25px;"><b>' + Math.round((TotalUsed / GetPushNotificationQuota()) * 100) + '%</b></div>');
}




function typeWriter(text, elementId, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}




function FloatPanel_OpenAccountStep_Animate(){
   


var container = Ext.getCmp('LoadingFloatPanel_OpenAccountStepID');
var containerEl = container.getEl();

var screenWidth = window.screen.width - 280;
var targetWidth = screenWidth; // Example: 80% of screen width
var targetHeight = '100%'; // Fixed height example

// Apply CSS transition to the element
containerEl.setStyle({
transition: 'width 0.5s ease-out, height 0.5s ease-out'
});

// Set the target dimensions with a delay to trigger the transition
setTimeout(function() {
container.setSize(targetWidth, targetHeight);




 






}, 0);

// Optionally, handle the end of the transition
containerEl.on('transitionend', function(event) {
if (event.propertyName === 'width' || event.propertyName === 'height') {
  //  alert('Resize animation complete');
    

}
});
}

var arrMembershipsCreatedPrivilege=[];
var globalFloatPanel_OpenAccountStepcheckingCampaign;
var globalFloatPanel_OpenAccountStepMembershipRowID;
var globalFloatPanel_OpenAccountStepMembershipCardCode;
function FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo(){
    
   // alert("FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo:"+globalCountQrCodeMembershipCampaign)
    arrMembershipsCreatedPrivilege.length=0;
    var objn = {
        "enterpriseAccNo": GetEnterpriseAccNo(),
    };




    var task = Ext.create('Ext.util.DelayedTask', function () {



        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Memberships/MembershipsCreatedPrivilegeCountByEnterpriseAccNo',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {



                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    if (data.total > 0) {
//alert(globalFloatPanel_OpenAccountStep);


                        for (var i = 0; i < data.total; i++) {
                           

                           var LoyaltCampaignCount = parseInt(data.results[i].LoyaltCampaignCount);
                           if(LoyaltCampaignCount>0){
                            arrMembershipsCreatedPrivilege.push(data.results[i].CampaignName);
                            globalFloatPanel_OpenAccountStepMembershipRowID=data.results[i].ID;
                            globalFloatPanel_OpenAccountStepMembershipCardCode=data.results[i].MembershipCardCode;
                           }
                            //CampaignName =data.results[i].CampaignName;
                        }
//alert(arrMembershipsCreatedPrivilege[0]);
globalFloatPanel_OpenAccountStepcheckingCampaign=arrMembershipsCreatedPrivilege[0];
         
LoadingPanelHide();
//alert(globalFloatPanel_OpenAccountStep)
// if(globalFloatPanel_OpenAccountStep=="1" ){

//     if(globalCountMembershipCard>0){
//         swalFireOpenStepSuccess("Congratulation !, The Privilege Has Been Set into Membership card");
//         FloatPanel_MembershipDetailsShow_MyMembershipCard(GetEnterpriseAccNo(), GetEnterpriseAccNo(), globalFloatPanel_OpenAccountStepMembershipCardCode, '123', globalFloatPanel_OpenAccountStepMembershipRowID, 'DEMO');
//       //  FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
       
// return;
//     }
// }


//alert(globalFloatPanel_OpenAccountStepcheckingCampaign)

if(globalFloatPanel_OpenAccountStep=="2" ){

    if(globalCountMembershipCard>0){
        swalFireOpenStepSuccess("Congratulation !, The Privilege Has Been Set into Membership card");
        FloatPanel_MembershipDetailsShow_MyMembershipCard(GetEnterpriseAccNo(), GetEnterpriseAccNo(), globalFloatPanel_OpenAccountStepMembershipCardCode, '123', globalFloatPanel_OpenAccountStepMembershipRowID, 'DEMO');
      //  FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
       
return;
    }
//     FloatPanel_AyohaCardManagementShow_FromOpenAccountStep();
//    // FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();
//     FloatPanel_OpenAccountStep_Step4();
}

if(globalFloatPanel_OpenAccountStep=="3" ){

    if(globalCountMembershipCardPrivilege>0 ){
        swalFireOpenStepSuccess("Congratulation !, You have successfuly created 1 Membership Card Privilege/Campaign");
        var task = Ext.create('Ext.util.DelayedTask', function () {
  
            if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Stamp")){
               
                FloatPanel_AyohaCardManagementShow();
            }
            if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Point")){
                FloatPanel_AyohaCardManagementShow_Point();
            }
            if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Discount")){
                FloatPanel_MerchantDiscountLoyaltyShow();  
            }
            if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Contest")){
                FloatPanel_AyohaContestListShow();
            }
            if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Event")){
                FloatPanel_AyohaRewardEventListShow();
    
            }
          
                       });
                      
                      task.delay(100);
    }
    
}
if(globalFloatPanel_OpenAccountStep=="4" ){
//alert(globalCountPrivilgeOnMembershipCard)
    if(globalCountPrivilgeOnMembershipCard>0){
        swalFireOpenStepSuccess("Congratulation !, The Privilege Has Been Set into Membership card");
        FloatPanel_MembershipDetailsShow_MyMembershipCard(GetEnterpriseAccNo(), GetEnterpriseAccNo(), globalFloatPanel_OpenAccountStepMembershipCardCode, '123', globalFloatPanel_OpenAccountStepMembershipRowID, 'DEMO');
      //  FloatPanel_OpenAccountStep_MembershipsCreatedPrivilegeCountByEnterpriseAccNo();
       
return;
    }else{
      //  alert("else")
        FloatPanel_OpenAccountStep_Step4();
    }
   
   
    }
    if(globalFloatPanel_OpenAccountStep=="5" ){
       // alert(globalFloatPanel_OpenAccountStepMembershipCardCode)
     //  FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintShow()

     if(globalDashboard_QRDescCheckBox=="alreadyPrint"){
        //FloatPanel_DrawerMenu_Main_StepFiveHide();
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
       // FloatPanel_OpenAccountStep_CheckingPageStep(); 
    } if(globalDashboard_QRDescCheckBox=="notPrint"){
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
        //FloatPanel_DrawerMenu_Main_StepFiveHide();
       // FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
       // FloatPanel_OpenAccountStep_CheckingPageStep(); 
    }if(globalDashboard_QRDescCheckBox=="NA"){
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
        //FloatPanel_DrawerMenu_Main_StepFiveHide();
       // FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
       // FloatPanel_OpenAccountStep_CheckingPageStep(); 
    }
   
        //  if(globalCountQrCodeMembershipCampaign>0){
        //      FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
        //      return;
        //  }else{
 
        //  }
     
    

//     FloatPanel_AyohaCardManagementShow_FromOpenAccountStep();
//    // FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();
//     FloatPanel_OpenAccountStep_Step4();
}
        
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                       

                        LoadingPanelHide();
                        Ext.Viewport.unmask();

                    }





                }
                else {
                    LoadingPanelHide();
                    alert('error');
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                alert('failure');
                Ext.Viewport.unmask();
            }

        });


    });

    task.delay(500);
}




function FloatPanel_OpenAccountStep_Step4(){



   
    var task = Ext.create('Ext.util.DelayedTask', function () {

        if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Stamp")){
            FloatPanel_AyohaCardManagement_Type = 'Stamp';
            Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
           
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Stamp</b></font>');
                                             FloatPanel_AyohaCardManagement_Type = 'Stamp';
                                             Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                             Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=1 color=grey>Loyalty Point</font>');
                                             Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=1 color=purple><b><u>Loyalty Stamp</u></b></font>');
        }
        if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Point")){
            Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();
            FloatPanel_AyohaCardManagement_Type = 'Point';
            Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
            Ext.getCmp('htmFloatPanel_AyohaCardManagement_PointCardTxt').setHtml('<font size=1 color=purple><b><u>Loyalty Point</u></b></font>');
            Ext.getCmp('htmFloatPanel_AyohaCardManagement_StampCardTxt').setHtml('<font size=1 color=grey>Loyalty Stamp</font>');
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Loyalty Point</b></font>');
            if(isFloatPanel_OpenAccountStepOpen=='N'){
                input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value
                input_FloatPanel_MembershipCardManagement_EditCard_MembershipCardID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;
        
            }
          
        }
        if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Discount")){
    
    
            Load_FloatPanel_AyohaCardManagement_DiscountCampaignLoadByEnterpriseAccNoStore();
            FloatPanel_AyohaCardManagement_Type = 'Discount';
            Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(2);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Discount</b></font>');
           
        }
        if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Contest")){
             FloatPanel_AyohaCardManagement_AyohaRewardContestLoadByEnterpriseAccNoStore();
                                              FloatPanel_AyohaCardManagement_Type = 'Contest';
                                                 Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(3);
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Contest</b></font>');
                                               
        }
        if(globalFloatPanel_OpenAccountStepcheckingCampaign.includes("Event")){
            FloatPanel_AyohaCardManagement_AyohaRewardEventLoadByEnterpriseAccNoStore();
            FloatPanel_AyohaCardManagement_Type = 'Event';
               Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(4);
               Ext.getCmp('htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add Campaign - Membership Event</b></font>');
              
    
        }
FloatPanel_AyohaCardManagementHighlightPreviligeText();



    });
                  
    task.delay(500);

 
}