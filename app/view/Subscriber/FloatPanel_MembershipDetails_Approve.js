Ext.define('ianMizi.view.Subscriber.FloatPanel_MembershipDetails_Approve', {

});







var _FloatPanel_MembershipDetails_Approve;

function FloatPanel_MembershipDetails_Approve() {

    _FloatPanel_MembershipDetails_Approve = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MembershipDetails_ApproveID',
            // xtype: 'panel',
          //  zIndex: 300,
            zIndex: 100,
            xtype: 'container',
            //height: 550,
            height: '100%',
            width: '100%',
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
                duration: 250,
                easing: 'ease-out'
            },

            style: 'background-color:white;',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                width: '100%',
                height: '100%',
                // scrollable: {
                //     direction: 'vertical',
                //     directionLock: true,
                //     indicator:false,
                // },
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height:60,
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_MembershipDetails_ApproveHeader',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
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
                                    width: 20
                                }, {
                                    margin: '0 0 0 0',
                                    html: '<font size=4 color=black><b>Membership Approval</b></font>'
                                },

                                             
                                           
                                              {
                                                  xtype: 'spacer',

                                              },

                                               

                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MembershipDetails_ApproveCardBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_MembershipDetails_Approve.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    is_FloatPanel_MembershipDetails_ApproveHide = 'N';

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
                        width: '100%',
                        docked: 'bottom',
                        height: 50,

                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,
                        //margin: '10 0 0 0',
                        id: 'containerFloatPanel_MembershipDetails_ApprovedBottom',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                        layout: {
                            type: 'hbox',
                            pack: 'end',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [



                                {
                                    xtype: 'button',
                                    id:'btnFloatPanel_MembershipDetails_Approved_Save',
                                    //  badgeText: '1',
                                    margin: '0 -18 -8 0',
                                    //height: 35,
                                    //width: 35,
                                    html: '<div style="cursor: pointer;"><img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name"></div>',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus();
                                    }
                                },
                           {
                               xtype: 'button',
                               //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                               id:'txtbtnFloatPanel_MembershipDetails_Approved_Save',
                               //  badgeText: '1',
                               margin: '7 0 0 7',
                               //height: 40,
                               //width: 130,
                               html: '<div style="cursor: pointer;"><font size=2 color=grey>Save</font></div>',
                               ui: 'plain',
                               handler: function () {
                                FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus();
                               }
                           },

                    //                 {
                    //                     xtype: 'button',
                    //                     ////  align: 'stretch',

                    //                     ui: 'plain',
                    //                     width: 200,
                    //                     margin: '0 0 0 -7',
                    //                     height: 35,
                    //                     id: 'btnFloatPanel_MembershipDetails_Approved_RejectMembershipCard',
                    //                     //hidden: true,

                    //                     html: '<button class="buttonConfirmReject">Reject</button>',
                    //                     handler: function () {
                    //                         FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus("REJECTED");
                    //                     },


                    //                 },
                    //                 {
                    //                     xtype: 'panel',
                    //                     width:14
                    //                 },


                    // {
                    //     xtype: 'button',
                    //     //  align: 'stretch',

                    //     ui: 'plain',
                    //     width: 200,
                    //     height: 35,
                    //     margin: '0 0 0 0',
                    //     id: 'btnFloatPanel_MembershipDetails_Approved_ApprovedMembershipCard',
                    //     //hidden: true,
                    //     // width: '80%',
                    //     //style: {
                    //     //    background: '#FA8072',
                    //     //},
                    //     // padding: '10px',
                    //     //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                    //     //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
                    //     text: '<button class="buttonConfirmApproved">Approve</button>',
                    //     handler: function () {

                    //         FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus("APPROVED");


                    //     },


                    // },







                               ]

                    },
{
    xtype: 'container',
    style: ' background-color:transparent;',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    width: '98%',
    height: '100%',
    margin:'0 0 0 22',
    scrollable: {
        direction: 'vertical',
        directionLock: true,
        indicators:false,
    },
    items:[
        
      


        {
            xtype: 'container',
            style: ' background-color:transparent;',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'left'
            },
            width: '100%',
            height: 450,
            items:[
{
    xtype: 'container',
    style: ' background-color:transparent;',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    width: '23%',
    height: '100%',
    items:[
        {
            xtype: 'container',
            style: ' background-color:transparent',
            margin: '10 0 0 0',
            layout: {
                type: 'vbox',
                pack: 'left',
                align: 'left'
            },
            items: [

                {
                    html: '<font size=3 color=black><b><u>Member Info</u></b></font>'
                }
            ]
        },
        {
            xtype:'image',
            margin: '13 0 0 0',
            id:'FloatPanel_MembershipDetails_Approve_AyohaUserPhoto',
            width: 150,
            height: 150,
            //html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardName"  readOnly style="border-color:transparent;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
        },


         {
             margin: '3 0 0 0',

             html: '<font size=2px color=black>Name</font>',

         },


            {

                margin: '-1 0 0 0',
                width: '100%',
                height: 20,
               // html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberName" readOnly  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
                html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberName" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
            
                
               },

            {
                margin: '13 0 0 0',

                html: '<font size=2 color=black>Email</font>',

            },


            {

                margin: '-1 0 0 0',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberEmail" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
            },
            {
                margin: '13 0 0 0',

                html: '<font size=2 color=black>Phone No</font>',

            },


            {

                margin: '-1 0 0 0',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberPhoneNo" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
            },
             {
                 margin: '13 0 0 0',

                 html: '<font size=2 color=black>Registration Date</font>',

             },


            {

                margin: '-1 0 0 0',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberRegistrationDate" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
            },


             {
                 margin: '13 0 0 0',

                 html: '<font size=2 color=black>Registration Method</font>',

             },


            {

                margin: '-1 0 0 0',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberRegistrationMethod" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
            },
    ]
},


{
    xtype: 'container',
    style: ' background-color:transparent;',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'left'
    },
    width: '10%',
},

{
    xtype: 'container',
    style: ' background-color:transparent;',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'left'
    },
    width: '100%',
    height: '100%',
    items:[
        
        {
            xtype: 'container',
            style: ' background-color:transparent;',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            width: '22%',
            height: '100%',
            items:[
                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    margin: '18 0 0 0',
                    layout: {
                        type: 'vbox',
                        pack: 'left',
                        align: 'left'
                    },
                    items: [
                      
                        {
                            html: '<font size=3 color=black><b><u>Membership Card Info</u></b></font>'
                        }
                    ]
                },
         
             
                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    width: '100%',
                    margin: '0 0 0 0',
                    layout: {
                        type: 'vbox',
                        pack: 'left',
                        align: 'left'
                    },
                    items: [
                      {
                          margin: '3 0 0 0',
         
                          html: '<font size=2 color=black>Membership Card Name</font>',
         
                      },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardName"  readOnly style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
         
                        {
                            margin: '13 0 0 0',
         
                            html: '<font size=2 color=black>Membership Card Level</font>',
         
                        },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardLevel" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
         
         
                       {
                           margin: '13 0 0 0',
         
                           html: '<font size=2 color=black>Membership Card Fees(RM)</font>',
         
                       },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardFees" readOnly style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
         
         {
         margin: '13 0 0 0',
         
         html: '<font size=2 color=black>Membership Card Fees Payment Cycle</font>',
         
         },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardFeesPaymentCycle" readOnly style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
         
                       {
                           margin: '13 0 0 0',
         
                           html: '<font size=2 color=black>Membership Card Expiry(Month)</font>',
         
                       },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardExpiry"  readOnly style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
         
         
                       {
                           margin: '13 0 0 0',
         
                           html: '<font size=2 color=black>Membership Card required approval?</font>',
         
                       },
         
         
                      {
         
                          margin: '-1 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardisRequiredApproval"  readOnly style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                      },
                        
         
                      {
                        margin: '13 0 0 0',
                        html: '<font size=2px color=black>Membership Card Image:</font>',
            
                    },

                    {
                        xtype: 'container',
                        style: ' background-color:transparent;',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        width: '100%',
                        height:50,
items:[
    {
        width: '30%',
        height:50,
        id: 'FloatPanel_MembershipDetails_Approve_MembershipCardImageFront',
        html:'<div style="width:100%;height:100px"><img src="" style=""/><br><div style="width:100%height:20px;text-align:center;font-size:12px">Front View</div></div>',
                            
    },
    {
        width: '50%',
        height:50,
        id: 'FloatPanel_MembershipDetails_Approve_MembershipCardImageBack',
        html:'<div style="width:100%;height:100px"><img src="" style=""/><br><div style="width:100%height:20px;text-align:center;font-size:12px">Back View</div></div>',
                            
    },
]

                    },
            
                 
                  
                     
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
             ]
         },
            ]
        },



        
        {
            xtype: 'container',
            style: ' background-color:transparent;',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            width: '22%',
            height: '100%',
            items:[
        
        
        
        
        
        
        
        
        
        
                {
                    margin: '45 0 0 0',
                    html: '<font size=2px color=black>Created Date:</font>',
        
                },
        
        
                   {
        
                       margin: '-1 0 0 0',
                       width: '100%',
                       height: 20,
                      // html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberName" readOnly  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
                       html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_Membershipdate" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                   
                       
                      },
               
               
                      {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        margin: '36 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
            
                            {
                                html: '<font size=3 color=black><b><u>Status</u></b></font>'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        width: '100%',
                        //hidden: true,
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
                                                 margin: '5 0 0 0',
            
                                                 html: '<font size=2 color=black>*Membership Status</font>',
            
                                             },
            
            
            
                                             ]
                                         },
            
            
            
            
                   {
                       margin: '-2 0 0 0',
                       id: 'FloatPanel_MembershipDetails_Approve_MembershipStatusEdit',
                       width: '100%',
                       height: 20,
                       html: '<input type="text"  id="input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
            
                   },
            
            
                                     ]
            
                                 },
            
            
                                  //{
                                  //    xtype:'container'
            
                                  //},
                                    {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_MembershipDetails_Approve_MembershipStatusEdit',
                                        //  badgeText: '1',
                                        margin: '0 0 -10 0',
                                        height: 35,
                                        width: 35,
                                        html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                        ui: 'plain',
                                        handler: function () {
                                            FloatPanel_MembershipApprovalStatusShow();
                                        }
                                    },
            
                        ]
            
                    },
    
               
               
               
                      {
                    margin: '13 0 0 0',
        
                    html: '<font size=2px color=black>Modifed Status By:</font>',
        
                },
        
        
                   {
        
                       margin: '-1 0 0 0',
                       width: '100%',
                       height: 20,
                      // html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MemberName" readOnly  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
                       html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_ApprovedBy" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                   
                       
                      },
        
                   {
                       margin: '13 0 0 0',
        
                       html: '<font size=2 color=black>Modified Status Date:</font>',
        
                   },
        
        
                   {
        
                       margin: '-1 0 0 0',
                       width: '100%',
                       height: 20,
                       html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_ApprovedDate" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                   },
        
        
        
                 




              











        
                   {
                    margin: '13 0 0 0',
        hidden:true,
                    html: '<font size=2 color=black>Rejected Date:</font>',
        
                },
        
        
                {
        
                    margin: '-1 0 0 0',
                    hidden:true,
                    width: '100%',
                    height: 20,
                    html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_RejectedDate" readOnly  style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                },

                {
                    margin: '13 0 0 0',
                    id:'htmlMembershipStatusRemarks',
       // hidden:true,
                    html: '<font size=2 color=black>Remarks:</font>',
        
                },
        
        
                {
        
                    margin: '-1 0 0 0',
                   // hidden:true,
                    width: '100%',
                    height: 20,
                    id:'htmlTextAreaMembershipStatusRemarks',
                   // html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_MembershipCardRemark"   style="border-color:'+GetInputLineColor()+';color:black;width:90%;text-align: left;font-size:12px;">'
                    html: '<textarea  id="input-FloatPanel_MembershipDetails_Approve_MembershipCardRemark"  style="border-color:'+GetInputLineColor()+';color:black;width:100%;text-align: left;font-size:12px;font-weight:bold;height:80px;">',
                },
                {

                    xtype: 'container',
                    width: '100%',
                    docked: 'bottom',
                    height: 30,

                    // width: 40,

                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
                    //margin: '10 0 0 0',
                    id: 'containerFloatPanel_MembershipDetails_ApprovedBottom_SaveStatus',                   
                   // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                    style: 'background: transparent;',
            
                    layout: {
                        type: 'hbox',
                        pack: 'end',
                        align: 'center',
                    },
                    // hidden:true,
                    items:
                           [



                            {
                                xtype: 'button',
                                id:'btnFloatPanel_MembershipDetails_Approved_SaveStatus',
                                //  badgeText: '1',
                                margin: '35 -18 -8 0',
                                //height: 35,
                                //width: 35,
                                html: '<div style="cursor: pointer;"><img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                    FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus_MembershipCardStatus();
                                }
                            },
                       {
                           xtype: 'button',
                           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                           id:'txtbtnFloatPanel_MembershipDetails_Approved_SaveStatus',
                           //  badgeText: '1',
                           margin: '43 0 0 7',
                           //height: 40,
                           //width: 130,
                           html: '<div style="cursor: pointer;"><font size=2 color=grey>Save</font></div>',
                           ui: 'plain',
                           handler: function () {
                            FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus_MembershipCardStatus();
                           }
                       },

           






                           ]

                },
            ]
        },



{
    xtype: 'container',
    style: ' background-color:transparent;',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    width: '5%',
},
        {
            xtype: 'container',
            style: ' background-color:transparent;',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            width: '14%',
            height:'100%',
            items:[
                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    margin: '18 0 0 0',
                    layout: {
                        type: 'vbox',
                        pack: 'left',
                        align: 'left'
                    },
                    items: [
                      
                        {
                            html: '<font size=3 color=black><b><u>Membership Status</u></b></font>'
                        },
                        {
                            xtype: 'container',
                            margin:'10 0 0 0',
                            width:'100%',
                            height:50,
                            style: ' background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            items:[
                {
                    width:200,
                    height:45,
                    id: 'htmlFloatPanel_MembershipDetails_Approve_MembershipStatusMaster',
                    html: '<div style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 7%;border:2px solid #fac;height:45px;width:100%;justify-content: center;align-items: center;display: flex;font-size:16px;color:white;font-weight:bold;">APPROVED</div>'
                }
            ]
                        
                        }
                    ]
                },




                
            ]
        }
    ]
},


            ]
        },
        {
            xtype: 'container',
            style: ' background-color:transparent;',
            margin:'25 0 0 0',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'
            },
            width: '100%',
            height: 5,
            items:[
                {
                    xtype: 'container',
                    style: ' background-color:transparent;',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'right'
                    },
                    width: '33%',
                    height: 1,
                },
                {
                    xtype: 'container',
                    style: ' background-color:#CCCCCC;',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'right'
                    },
                    width: '67%',
                    height: 2,
                },
            ]
        },
       
        {
            xtype: 'container',
            style: ' background-color:transparent;',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'left'
            },
            width: '100%',
            height: 300,
            items:[
    {
        xtype: 'container',
        style: ' background-color:transparent;',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left'
        },
        width: '33%',
        height: '100%',
    },
    
    {
        xtype: 'container',
        style: ' background-color:transparent;',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left'
        },
        width: '67%',
        height: '100%',
        items:[
          
    
           {
               xtype: 'container',
               style: ' background-color:transparent',
               id: 'containerFloatPanel_MembershipDetails_Approve_MasterPaymentRecord',
               hidden:true,
               margin: '0 0 0 0',
               width: '100%',
    
               layout: {
                   type: 'vbox',
                   pack: 'left',
                   align: 'left'
               },
               items: [
    
            {
                xtype: 'container',
                style: ' background-color:transparent',
                margin: '35 0 0 0',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [
    
                    {
                        html: '<font size=3 color=black><b><u>Membership Card Payment Record</u></b></font>'
                    }
                ]
            },
            {
                xtype: 'container',
                width: '100%',
                //hidden: true,
                style: ' background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center'
    
                },
                items: [


                    {
                        xtype: 'container',
                        width: '50%',
                        //hidden: true,
                        style: ' background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center'
            
                        },items:[
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
                                            margin: '5 0 0 0',
       
                                            html: '<font size=2 color=black>Payment Method</font>',
       
                                        },
       
       
       
                                        ]
                                    },
       
       
       
       
              {
                  margin: '-2 0 0 0',
                  id: 'FloatPanel_MembershipDetails_Approve_PaymentMethod',
                  width: '80%',
                  height: 20,
                  html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_PaymentMethod"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
       
              },
       
       
                                ]
       
                            },    
       
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_MembershipDetails_Approve_PaymentMethod',
                                   hidden:true,
                                   //  badgeText: '1',
                                   margin: '0 0 -10 0',
                                   height: 35,
                                   width: 35,
                                   html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                   ui: 'plain',
                                   handler: function () {
                                       FloatPanel_PaymentMethodListShow();
                                   }
                               },


                        ]
                    },
{
    xtype: 'container',
    id: 'containerFloatPanel_MembershipDetails_Approve_PaymentMethod',
    width: '10%',
    //hidden: true,
    style: ' background-color:transparent',
},

                    {
                        xtype: 'container',
                        width: '40%',
                        //hidden: true,
                        style: ' background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center'
            
                        },items:[
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
                                            margin: '5 0 0 0',
       
                                            html: '<font size=2 color=black>Payment Date</font>',
       
                                        },
       
       
       
                                        ]
                                    },
       
       
       
       
              {
                  margin: '-2 0 0 0',
                  id: 'FloatPanel_MembershipDetails_Approve_PaymentDate',
                  width: '100%',
                  height: 20,
                  html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_PaymentDate"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
       
              },
       
       
                                ]
       
                            },  


                        ]
                    },
    
                      
    
                ]
    
            },
    
    
            {
                xtype: 'container',
                width: '100%',
                style: ' background-color:transparent',
                margin: '13 0 0 0',
                id: 'containerFloatPanel_MembershipDetails_Approve_PaymentReferenceDocument',
                hidden:true,
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center'
    
                },
                items: [


                    {
                        xtype: 'container',
                        id:'containerFloatPanel_MembershipDetails_Approve_PaymentChannel',
                        width: '40%',
                        //hidden: true,
                        style: ' background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center'
            
                        },items:[
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
                                            margin: '5 0 0 0',
       
                                            html: '<font size=2 color=black>Payment Channel</font>',
       
                                        },
       
       
       
                                        ]
                                    },
       
       
       
       
              {
                  margin: '-2 0 0 0',
                  id: 'FloatPanel_MembershipDetails_Approve_PaymentChannel',
                  width: '100%',
                  height: 20,
                  html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_PaymentChannel"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
       
              },
       
       
                                ]
       
                            },  

                            {
                                xtype: 'button',
                                id: 'btnFloatPanel_MembershipDetails_Approve_PaymentChannel',                               
                                //  badgeText: '1',
                                margin: '0 0 -10 0',
                                height: 35,
                                width: 35,
                                html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                ui: 'plain',
                                handler: function () {
                                    FloatPanel_PaymentMethodListShow();
                                }
                            },
                        ]
                    },


                    {
                        xtype: 'container',
                        id:'containerFloatPanel_MembershipDetails_Approve_PaymentChannel_spacer',
                        width: '20%',
                        //hidden: true,
                        style: ' background-color:transparent',
                    },

                    {
                        xtype: 'container',
                        width: '40%',
                        //hidden: true,
                        style: ' background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center'
            
                        },
                        items:[
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
                                                  margin: '5 0 0 -7',
                                                  xtype: 'button',
                                                  html: '<font size=2 color=black>Payment Reference Document(Receipts/Etc)</font>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                    //  alert('test')
                                                  }
                                              },
       
       
                                        ]
                                    },
       
       
                 {
                     id: 'HtmlinputImgFloatPanelAyohaCardManagementEditCardContentUploadedImage',
                     hidden: true,
                     margin: '0 0 0 0',
                     width: '100%',
                     html: '<input type="file" id="inputImg-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage" accept="image/*"  onchange="inputImgFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
       
                     //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
       
       
       
       
       
                 },
       
       
       
       
       
       
                              {
       
                                  margin: '-1 0 0 0',
                                  width: '105%',
                                  height: 20,
                                  html: '<input type="text" id="inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                              },
       
                                ]
       
                            },
       
       
                           
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage',
                                   name: 'clickablebtnFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage',
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
                    }
    
                        
    
                ]
    
            },
    
    
              {
                  margin: '13 0 0 0',
    
                  html: '<font size=2 color=black>Received Amount(RM)</font>',
    
              },
    
    
           {
    
               margin: '-1 0 0 0',
               width: '35%',
               height: 20,
               html: '<input type="number" id="input-FloatPanel_MembershipDetails_Approve_ReceiveAmount"   style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
           },
    
               
           {
            margin: '13 0 0 0',

            html: '<font size=2 color=black>Remarks/Note</font>',

        },


     {

         margin: '-1 0 0 0',
         width: '90%',
         height: 80,
         //html: '<input type="text" id="input-FloatPanel_MembershipDetails_Approve_Remarks"   style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
         html: '<textarea  id="FloatPanel_MembershipDetails_Approved_Remarks"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;font-weight:bold;height:80px;">',
     },   
               ]
           },
    
        ]
    },
            ]
           },
    


                          
{
    xtype: 'container',
height:100,
    width: '100%',
    style: {

        background: 'transparent',

    },
},



                          // {
                          //     margin: '3 0 0 0',

                          //     html: '<font size=2 color=black>Payment Method</font>',

                          // },


                          //{

                          //    margin: '-3 0 0 0',
                          //    width: '40%',
                          //    height: 20,
                          //    html: '<input type="number" id="input-FloatPanel_MembershipDetails_Approve_ReceiveAmount"   style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'
                          //},














        {
            xtype: 'container',
            margin: '13 0 0 0',
            width: '100%',
            hidden:true,
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
            xtype: 'button',
            //  align: 'stretch',

            ui: 'plain',
            width: '100%',
            height: 50,
            margin: '-5 0 0 0',
            // width: '80%',
            //style: {
            //    background: '#FA8072',
            //},
            // padding: '10px',
            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
            text: '<button class="buttonStampCampaignCreate">Confirm Approve</button>',

            handler: function () {
                var _StampCardCampaignName = document.getElementById('input-FloatPanel_MembershipDetails_Approve_StampCardCampaignName').value;
                //document.getElementById('CampaignStartDate').value = StampCampaignName;
                //document.getElementById('CampaignEndDate').value = StampCampaignName;



                var CampaignStartDate = new Date(document.getElementById('CampaignStartDate').value);
                var CampaignEndDate = new Date(document.getElementById('CampaignEndDate').value);
                if (CampaignStartDate == "Invalid Date") {
                    swalFireFail("Invalid Start Date!!");
                    return;
                }


                if (CampaignEndDate == "Invalid Date") {
                    swalFireFail("Invalid End Date!!");
                    return;
                }


                // Extract pieces of the date:
                // var month = CampaignStartDate.getMonth(); // months start counting from zero!



                // var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
                var dayCampaignStart = parseInt(CampaignStartDate.getDate() + CampaignStartDate.getMonth() + CampaignStartDate.getFullYear());
                var dayCampaignEnd = parseInt(CampaignEndDate.getDate() + CampaignEndDate.getMonth() + CampaignEndDate.getFullYear());




                if (dayCampaignStart > dayCampaignEnd) {
                    // alert("Fail-Campaing date Has passed");
                    swalFireFail("Fail-Campaign date Has passed!!");
                    return;

                }

                if (dayCampaignStart == dayCampaignEnd) {
                    swalFireFail("Fail-Campaign date start and date end is same!!");
                    return;

                }


                //  var year = CampaignStartDate.getFullYear();











                if (_StampCardCampaignName.length < 2) {
                    swalFireFail("Stamp Campaign Name Not Valid!!")
                    return
                }





                console.log(_StampCardCampaignName);

                console.log(_AddCardFormCardType);
                console.log(document.getElementById('CampaignStartDate').value);
                console.log(document.getElementById('CampaignEndDate').value);
                console.log(GetEnterpriseAccNo());
                console.log(GetCurrAyohaEnterpriseUserAccountNo());
                console.log(document.getElementById('UN').value);
                console.log('Auto-Default');
                if (dayCampaignStart < dayCampaignEnd) {
                    //Ext.Ajax.request({

                    //    url: GetAPIurl() + '/StampCampaign/StampCampaignInsert',

                    //    params: {
                    //        StampCampaignName: _StampCardCampaignName,
                    //        StampCardType: _AddCardFormCardType,
                    //        StartDate: document.getElementById('CampaignStartDate').value,
                    //        EndDate: document.getElementById('CampaignEndDate').value,
                    //        EnterpriseAccNo: GetEnterpriseAccNo(),
                    //        CreatedByAccNo: GetCurrAyohaEnterpriseUserAccountNo(),
                    //        CreatedBy: document.getElementById('UN').value,
                    //        StampCardBackground: 'Auto-Default'
                    //    },
                    //    success: function (result, request) {
                    //        swalFireSuccess("Card Created Successfully!");
                    //        //LoadingCustomMsgShow('Success!', '3');
                    //        FloatPanel_MembershipDetails_ApproveHide();
                    //        Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();

                    //    },
                    //    failure: function (result, request) {
                    //        swalFireFail("Card Created Error!")
                    //     //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

                    //    }
                    //});


                    var objn = {
                        "StampCampaignName": _StampCardCampaignName,
                        "StampCardType": _AddCardFormCardType,
                        "StartDate": document.getElementById('CampaignStartDate').value,
                        "EndDate": document.getElementById('CampaignEndDate').value,
                        "EnterpriseAccNo": GetEnterpriseAccNo(),
                        "CreatedByAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
                        "CreatedBy": document.getElementById('UN').value,
                        "StampCardBackground": 'Auto-Default'

                    };
                    console.log(objn);
                    var _value = Ext.Ajax.request({

                        type: "POST",

                        url: GetAPIurl() + '/StampCampaign/StampCampaignInsert',

                        dataType: "json",
                        data: JSON.stringify(objn),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },

                        success: function (result, request) {

                            //console.log(result.responseText);


                            data = Ext.decode(result.responseText.trim());

                            if (data.success == "true") {

                                swalFireSuccess("Card Created Successfully!");
                                //LoadingCustomMsgShow('Success!', '3');
                                FloatPanel_MembershipDetails_ApproveHide();
                                Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();

                            }
                            else {
                                swalFireFail("Card Created Error!")
                            }
                            Ext.Viewport.unmask();

                        },

                        failure: function (result, request) {
                            Ext.Viewport.unmask();
                            swalFireFail("Card Created Failed!")
                        }

                    });

                }



            },


        },

            ]
        },

         


          

        

























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_MembershipDetails_Approve;
}



function FloatPanel_MembershipDetails_ApproveShow() {
    Ext.Viewport.remove(_FloatPanel_MembershipDetails_Approve);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetails_Approve());
    this.overlay.show();
    is_FloatPanel_MembershipDetails_ApproveHide = 'Y';




    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardName").value = localStorage.getItem("MembershipCardName");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardLevel").value = localStorage.getItem("MembershipCardType");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFees").value = localStorage.getItem("MembershipCardFee");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFeesPaymentCycle").value = localStorage.getItem("MembershipCardFeePaymentCycle");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardExpiry").value = localStorage.getItem("StrExpiredDate");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardisRequiredApproval").value = localStorage.getItem("isRequiredApproval");

    Ext.getCmp('FloatPanel_MembershipDetails_Approve_AyohaUserPhoto').setSrc(localStorage.getItem("AyohaUserPhoto"));    
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberName").value = localStorage.getItem("AyohaUserAccountName");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberEmail").value = localStorage.getItem("Email");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberPhoneNo").value = localStorage.getItem("PhoneNo");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberRegistrationDate").value = localStorage.getItem("CreatedDate");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberRegistrationMethod").value = localStorage.getItem("MembershipByMethod");



    if (document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFees").value > 0.01) {
        Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_MasterPaymentRecord').setHidden(false);
        Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_PaymentReferenceDocument').setHidden(false);
        
    }
   

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MembershipDetails_Approve_UploadReferenceImage();
      }
    );
    
}



var globalFloatPanel_MembershipDetails_Approve_MembershipCardCode;
var globalFloatPanel_MembershipDetails_Approve_SubscriberAccNo;
var globalFloatPanel_MembershipDetails_Approve_ID;
var globalFloatPanel_MembershipDetails_Approve_PaymentCode;






var globalFloatPanel_MembershipDetails_Approve_MembershipApprovalStatus;
function FloatPanel_MembershipDetails_ApproveShow_FromSubscriberList(MembershipCardName,MembershipCardLevel,MembershipCardFees,MembershipCardFeesPaymentCycle
    ,MembershipCardExpiry,MembershipCardisRequiredApproval,AyohaUserPhoto,MemberName,MemberEmail,MemberPhoneNo,MemberRegistrationDate
    ,MemberRegistrationMethod,Membershipdate,ApprovedBy,ApprovedDate,RejectedDate,MembershipCardBackgroundImg_front,MembershipCardBackgroundImg_back,MembershipApprovalStatus
    ,PaymentMethod,ReceiveAmount,Remarks,PaymentDocumentUploadImage_ImageName,PaymentDocumentUploadImage,MembershipCardCode,SubscriberAccNo,ID,PaymentCode,ModifiedDate,ModifiedBy
    ,MembershipPaymentDate,CreatedDate,MembershipCardStatusRemarks,MembershipFeePaymentChannel) {
    Ext.Viewport.remove(_FloatPanel_MembershipDetails_Approve);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetails_Approve());
    this.overlay.show();
    is_FloatPanel_MembershipDetails_ApproveHide = 'Y';
    ImgMembershipDetails_Approve_PaymentDocumentUploadImage=PaymentDocumentUploadImage;
    globalFloatPanel_MembershipDetails_Approve_MembershipCardCode=MembershipCardCode;
    globalFloatPanel_MembershipDetails_Approve_SubscriberAccNo=SubscriberAccNo;
    globalFloatPanel_MembershipDetails_Approve_ID=ID;
    globalFloatPanel_MembershipDetails_Approve_PaymentCode=PaymentCode;
    globalFloatPanel_MembershipDetails_Approve_MembershipApprovalStatus=MembershipApprovalStatus;

   
if(MembershipFeePaymentChannel){
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentChannel").value = MembershipFeePaymentChannel;
}

if(MembershipCardStatusRemarks){
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardRemark").value = MembershipCardStatusRemarks;
}
  //  document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentDate").value = MembershipPaymentDate;
  

   document.getElementById("input-FloatPanel_MembershipDetails_Approve_Membershipdate").value = CreatedDate;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardName").value = MembershipCardName;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardLevel").value = MembershipCardLevel;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFees").value = MembershipCardFees;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFeesPaymentCycle").value =MembershipCardFeesPaymentCycle;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardExpiry").value = MembershipCardExpiry;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardisRequiredApproval").value = MembershipCardisRequiredApproval;

    Ext.getCmp('FloatPanel_MembershipDetails_Approve_AyohaUserPhoto').setSrc(AyohaUserPhoto);    
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberName").value = MemberName;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberEmail").value =MemberEmail;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberPhoneNo").value = MemberPhoneNo;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberRegistrationDate").value = MemberRegistrationDate;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MemberRegistrationMethod").value = MemberRegistrationMethod;

   // input-FloatPanel_MembershipDetails_Approve_ApprovedDate


    document.getElementById("input-FloatPanel_MembershipDetails_Approve_RejectedDate").value = RejectedDate;

  document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value=MembershipApprovalStatus;
  document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentMethod").value=PaymentMethod;
  document.getElementById("input-FloatPanel_MembershipDetails_Approve_ReceiveAmount").value=ReceiveAmount;
  document.getElementById("inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName").value=PaymentDocumentUploadImage_ImageName;
  document.getElementById("FloatPanel_MembershipDetails_Approved_Remarks").value=Remarks;
  
 
  if(MembershipApprovalStatus=="APPROVED"){
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_ApprovedBy").value = ApprovedBy;
    // document.getElementById("input-FloatPanel_MembershipDetails_Approve_ApprovedDate").value = ApprovedDate;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_ApprovedDate").value = ModifiedDate;
}else{
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_ApprovedBy").value = ModifiedBy;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_ApprovedDate").value = ModifiedDate;
}
  
document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentDate").value = MembershipPaymentDate;
    Ext.getCmp('FloatPanel_MembershipDetails_Approve_MembershipCardImageFront').setHtml('<div style="width:100%;height:100px"><img src="'+MembershipCardBackgroundImg_front+'" style="width:85px;height:50px"/><br><div style="width:100%height:20px;text-align:left;font-size:12px">Front View</div></div>');
    Ext.getCmp('FloatPanel_MembershipDetails_Approve_MembershipCardImageBack').setHtml('<div style="width:100%;height:100px"><img src="'+MembershipCardBackgroundImg_back+'" style="width:85px;height:50px"/><br><div style="width:100%height:20px;text-align:left;font-size:12px">Back View</div></div>');
    Ext.getCmp('htmlFloatPanel_MembershipDetails_Approve_MembershipStatusMaster').setHtml('<div  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 7%;border:2px solid #fac;height:45px;width:100%;justify-content: center;align-items: center;display: flex;font-size:16px;color:white;font-weight:bold;">'+MembershipApprovalStatus+'</div>');
   
    if(document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentChannel").value){
       
    }else{
        document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentDate").value = "Payment Date will be appeared upon payment received";
    }








    var color;

    var cls="";
  
    Ext.getCmp('containerFloatPanel_MembershipDetails_ApprovedBottom_SaveStatus').setHidden(false);
    Ext.getCmp('containerFloatPanel_MembershipDetails_ApprovedBottom').setHidden(true);
    if(MembershipApprovalStatus=="APPROVED"){
        color="green";
       // MembershipApprovalStatus="Approved";
    }
    
    if(MembershipApprovalStatus=="REQUEST"){
        color="blue";
        cls="class=blink_me_sendNow";
        MembershipApprovalStatus="REQUEST APPROVAL";
       // document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentDate").value = GetDateToday();
       // document.getElementById("inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName").value = "";
        Ext.getCmp('containerFloatPanel_MembershipDetails_ApprovedBottom_SaveStatus').setHidden(true);
        Ext.getCmp('containerFloatPanel_MembershipDetails_ApprovedBottom').setHidden(false);
        Ext.getCmp('htmlMembershipStatusRemarks').setHidden(true);
        Ext.getCmp('htmlTextAreaMembershipStatusRemarks').setHidden(true);
    }
    if(MembershipApprovalStatus=="REJECTED"){
        color="red";
        cls="class=blink_me_sendNow";
       // MembershipApprovalStatus="Rejected";
    }
    if(MembershipApprovalStatus=="EXPIRED"){
        color="grey";
        cls="class=blink_me_sendNow";
       // MembershipApprovalStatus="Expired";
    }
    if(MembershipApprovalStatus=="BANNED"){
        color="red";
       // MembershipApprovalStatus="Banned";
       
    }
    if(MembershipApprovalStatus=="CANCELLED"){
        color="red";
      //  MembershipApprovalStatus="Cancelled";
    }
    if(MembershipApprovalStatus=="UNSUBSCRIBE"){
        color="orange";
       // MembershipApprovalStatus="Cancelled";
    }
    Ext.getCmp('htmlFloatPanel_MembershipDetails_Approve_MembershipStatusMaster').setHtml('<div '+cls+' style="background-color:'+color+'; border-radius: 7%;border:2px solid #fac;height:45px;width:100%;justify-content: center;align-items: center;display: flex;font-size:16px;color:white;font-weight:bold;">'+MembershipApprovalStatus+'</div>');
   





    if (document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFees").value > 0.01) {
        Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_MasterPaymentRecord').setHidden(false);
        Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_PaymentReferenceDocument').setHidden(false);
    }
   

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MembershipDetails_Approve_UploadReferenceImage();
      }
    );
    //alert(MembershipPaymentDate)
   
    

if(PaymentMethod=="FPX B2C - Online Payment"){
    Ext.getCmp('btnFloatPanel_MembershipDetails_Approve_PaymentMethod').setHidden(true);
     Ext.getCmp('btnFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage').setHidden(true);
    Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_PaymentChannel').setHidden(true);
    Ext.getCmp('containerFloatPanel_MembershipDetails_Approve_PaymentChannel_spacer').setHidden(true);    
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_ReceiveAmount").readOnly = true;
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentChannel").value = "FPX B2C - Online Payment";
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentDate").value = MembershipPaymentDate;
  
    
    const input = document.getElementById("inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName");

// Set styles using JavaScript
input.style.color = "blue";
input.style.cursor = "pointer";
input.style.textDecoration = "underline";
input.style.borderColor="white";
// Set click event
input.addEventListener("click", function() {
    const url = this.value;
    if (url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank'); // Open in new tab
    } else {
        alert("Invalid URL");
    }
});
}



if(PaymentMethod=="Pay-At-Counter"){
   
  
   
}

}
var is_FloatPanel_MembershipDetails_ApproveHide = 'N';

function FloatPanel_MembershipDetails_ApproveHide() {
    if (is_FloatPanel_MembershipDetails_ApproveHide == 'Y') {
        _FloatPanel_MembershipDetails_Approve.hide();
        is_FloatPanel_MembershipDetails_ApproveHide = 'N';
    }

}

function FloatPanel_MembershipDetails_Approve_UploadReferenceImage() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage").click();
    });
}

function FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus() {
   
    var imgbase64;

    var fees = parseInt(document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFees").value);
    var rca =parseFloat (document.getElementById('input-FloatPanel_MembershipDetails_Approve_ReceiveAmount').value);
    var pm = document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentMethod").value;
    var rm = document.getElementById('FloatPanel_MembershipDetails_Approved_Remarks').value;
    var pfn="NA";
    var status=document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value;
    var pymtCode;
    var pymtChannel=document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentChannel").value;




   
  

    if(globalFloatPanel_SubscriberList_MembershipApprovalStatus=="New"&&status=="REQUEST"){
        swalFireFail("Membership Status Cannot be set as Request!");
        const input = document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit");

// Set styles using JavaScript
input.style.borderColor="red"
return;
    }
 

   // style="border-color:black;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;"
    var remarks;


    if(pm=="Pay-At-Counter"){
        if(pymtChannel){

        }else{
            swalFireFail("Payment Channel Not Valid!");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentChannel").style.borderColor="red";
    return; 
        }

    }


if(status){

}else{
    swalFireFail("Membership Status is Empty!");
    document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").style.borderColor="red";
    return;
}



    if (ImgMembershipDetails_Approve_PaymentDocumentUploadImage) {
        imgbase64 = ImgMembershipDetails_Approve_PaymentDocumentUploadImage;
    } else {
        imgbase64 = "ExistingImage";
    }
//     pfn = "NA";
//     remarks = 'NO Remarks';
// rca=0.00;


  //  if (Status == "APPROVED") {
       
       

        var FloatPanel_MembershipDetails_Approve_PaymentMethod;






        if (fees > 0) {
            if(rca){
if(rca<=0.00){
    swalFireFail("Received Amount Not valid!");
    return;
}if(rca !=fees){
    swalFireFail("Received Amount Not Same As Membership Card Fees!");
    return;
}
            }else{
                swalFireFail("Received Amount Empty!");
                return; 
            }
            // if (rca.length < 1) {
            //     swalFireFail("Received Amount Empty!");
            //     return;
            // }
            // if (rca < 1) {
            //     swalFireFail("Received Amount Not valid!");
            //     return;
            // }
            if (pm.length < 1) {
                swalFireFail("Payment Method Empty!");
                return;
            }
            if (pm=="NA") {
                swalFireFail("Payment Method Not valid!");
                return;
            }

            if (pm == "Cash") {
                FloatPanel_MembershipDetails_Approve_PaymentMethod =pm;
                pfn = "NA";
                imgbase64 = "ExistingImage";
            } else {
                FloatPanel_MembershipDetails_Approve_PaymentMethod = document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentMethod").value;
              
              
              
                pfn = document.getElementById('inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName').value;
                if(pfn){
    if(pfn=="N/A"){
        swalFireFail("Payment Reference Not Valid!");
        return;
    }
                }else{
                    swalFireFail("Payment Reference Empty!");
                    return;
                }
            }



        } else {

            rca = 0.00;
            FloatPanel_MembershipDetails_Approve_PaymentMethod="NA";
        }
       




        if (rm.length < 1) {
            remarks = 'NO Remarks';
        } else {
            remarks = rm;
        }



        if(globalFloatPanel_MembershipDetails_Approve_PaymentCode=="NA"){
            pymtCode="MPC-"+ GetEnterpriseAccNo()+"-"+GenerateRandomNo();
           
        }else{
            pymtCode=globalFloatPanel_MembershipDetails_Approve_PaymentCode;
        }
        // if (pm != "Cash") {
        //     pfn = document.getElementById('inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName').value;
        // }
        // console.log(pfn);

   // } 
    
    // else {
    //     if (rm.length < 1) {
    //         remarks = 'NO Remarks';
    //     } else {
    //         remarks = rm;
    //     }
    //     rca = 0.00;
    //     pfn = "NA";
    //     FloatPanel_MembershipDetails_Approve_PaymentMethod = "NA";
    // }
  


    // document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value=MembershipApprovalStatus;
    // document.getElementById("input-FloatPanel_MembershipDetails_Approve_PaymentMethod").value=PaymentMethod;
    // document.getElementById("input-FloatPanel_MembershipDetails_Approve_ReceiveAmount").value=ReceiveAmount;
    // document.getElementById("inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName").value=PaymentDocumentUploadImage_ImageName;
    // document.getElementById("FloatPanel_MembershipDetails_Approved_Remarks").value=Remarks;


   

    var obj = {
        "ID": globalFloatPanel_MembershipDetails_Approve_ID,
        "EnterpriseHQAccNo":  GetEnterpriseAccNo(),
        "SubscriberAccNo": globalFloatPanel_MembershipDetails_Approve_SubscriberAccNo,
        "MembershipCardCode": globalFloatPanel_MembershipDetails_Approve_MembershipCardCode,
        "ModifiedBy": GetCurrentUserAccountNo(),
        "MembershipApprovalStatus": document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value,
        "Remarks": remarks,
        "ReceivedAmount": rca,
        "MembershipPaymentPaidProof":imgbase64,
        "MembershipPaymentPaidProofName": pfn,   
        "MembershipPaymentMethod": FloatPanel_MembershipDetails_Approve_PaymentMethod,
        "MembershipPaymentCode":pymtCode,
        "PaymentChannel":pymtChannel,
        "MembershipCardFeePaymentCycle":document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardFeesPaymentCycle").value,
             
      
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsUpdateStatusMemberships',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Membership " + status + "!");
                FloatPanel_MembershipDetails_ApproveHide();
                MasterMembershipsLoadByEnterpriseAccNoStore();
               // MasterMembershipsLoadByEnterpriseAccNoStore();
              //  FloatPanel_MembershipDetailsHide();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });

}



function FloatPanel_MembershipDetails_Approve_UpdateApprovalStatus_MembershipCardStatus() {
   
   var rmk=document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipCardRemark").value;
   if(rmk){

   }else{
    rmk="NA";
   }
   

    var obj = {
        "ID": globalFloatPanel_MembershipDetails_Approve_ID,
        "EnterpriseHQAccNo":  GetEnterpriseAccNo(),
        "SubscriberAccNo": globalFloatPanel_MembershipDetails_Approve_SubscriberAccNo,
        "MembershipCardCode": globalFloatPanel_MembershipDetails_Approve_MembershipCardCode,
        "ModifiedBy": GetCurrentUserAccountNo(),
        "MembershipApprovalStatus": document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value,
        "MembershipCardStatusRemarks": rmk,     
             
      
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsUpdateStatusMembershipStatus',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Membership " + document.getElementById("input-FloatPanel_MembershipDetails_Approve_MembershipStatusEdit").value + "!");
                FloatPanel_MembershipDetails_ApproveHide();
                MasterMembershipsLoadByEnterpriseAccNoStore();
               // MasterMembershipsLoadByEnterpriseAccNoStore();
              //  FloatPanel_MembershipDetailsHide();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });

}








var ImgMembershipDetails_Approve_PaymentDocumentUploadImage;
function inputImgFloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage() {
    ImgMembershipDetails_Approve_PaymentDocumentUploadImage="";
    var file = document.getElementById('inputImg-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    //  if (FileSize > 2048) {
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
                    ImgMembershipDetails_Approve_PaymentDocumentUploadImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_MembershipDetails_Approve_PaymentDocumentUploadImage_ImageName').value = fileName;
                   
                
                  //  Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardBackgroundImgCard').setHtml('<div ><img src="' + globalEditBackgroundImg + '" width="300" height="550px" alt="Company Name"></div>');

                   
                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:black;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}


