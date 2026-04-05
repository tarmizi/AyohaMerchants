Ext.define('ianMizi.view.AyohaFloatPanel.FloatPanel_DrawerMenu_Main_StepThree', {

});


var _FloatPanel_DrawerMenu_Main_StepThree;
var isFloatPanel_DrawerMenu_Main_StepThreeOpen = 'N';

function FloatPanel_DrawerMenu_Main_StepThreePanel() {

    _FloatPanel_DrawerMenu_Main_StepThree =
          Ext.create('Ext.Container', {

              xtype: 'container',
              height: '100%',
              // height: 615,
              width: 280,
              id: 'FloatPanel_DrawerMenu_Main_StepThreeID',
              zIndex: 47,
              // centered: true,
              left: -1,
              //top:32,
            //   modal: true,
            //   hideOnMaskTap: true,
              layout: {
                  type: 'fit'
              },
              showAnimation: {
                  type: 'slideIn',
                  direction: 'right',
                  duration: 250,
                  //easing: 'ease-in'
              },
              hideAnimation: {
                  //type: 'reveal',
                  //duration: 250,
                  type: 'slideOut',

                  direction: 'left',
                  duration: 150
              },

              listeners: {
                  initialize: function (c) {
                      this.element.on({
                          swipe: function (e, node, options) {
                              if (e.direction == "left") {
                                  FloatPanel_DrawerMenu_Main_StepThreeHide();
                                  //  alert("Hey! I swipe left");
                                  //Ext.getCmp('tabpanelTrackingOverViewMapPointInfoTblManualTrack').setActiveItem(2);
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderMovement').setHtml("<font size=2>Tracking</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderClaim').setHtml("<font size=2>Claim</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderPurpose').setHtml("<font size=3><u><b>Purpose</b></u></font>");

                              } else {
                                  // alert("Hey! I swipe right");

                                  //Ext.getCmp('tabpanelTrackingOverViewMapPointInfoTblManualTrack').setActiveItem(0);
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderMovement').setHtml("<font size=3><u><b>Tracking</b></u></font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderClaim').setHtml("<font size=2>Claim</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderPurpose').setHtml("<font size=2>Purpose</font>");





                              }
                          }
                      });
                  }
              },
             
             // style: 'background-color:white;',  
              //   style: "background-color: #157fcc; color:white; border:2px solid white",
              items: [


                    {

                        xtype: 'container',
                       
                        style: 'border-right:1px solid;background-color:white;',
                   
                    
                    
                     // style: 'border-bottom:1px solid;background-color:rgba(0,0,0, 0.5);',
                     //   style: 'border-bottom:0px solid;background-color:rgba(0,0,0,0.9);',
                        // style: 'background-image: url("resources/icons/slideNavi1.PNG"); background-size: 100% 100%;',
                        height: '100%',
                        // height: 615,
                        width: 280,
                        // top:5,
                        layout: {
                            type: 'vbox',
                            //pack: 'left',
                            //align: 'end'
                        },


                        items: [










                            {
                                xtype: 'container',
                                style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);', 
                             //style: 'background-color:white;',
                          //   style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                              // style: 'border-bottom:0px solid;background-color:rgba(0,0,0, 0.5);',
                            id:'FloatPanel_DrawerMenu_Main_StepThreeID_inner',
                                //height: 250,
                                height: '100%',
                                width: 280,
                                layout: {
                                    type: 'vbox',
                                    //pack: 'center',
                                    align: 'center',

                                }, scrollable: {
                                    direction: 'vertical',
                                    directionLock: true,
                                    indicators: false
                                },

                                items: [

                                    {
                                        xtype: 'container',
                                      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',                                        
                                       style: 'background-color:transparent;',
                                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    
                                        // style: 'background-image: url("resources/icons/headerFloatPanel_DrawerMenu_Main_StepThree.jpg"); background-size: 100% 100%;border-bottom 0px none;',
                                        width: 280,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',

                                        },
                                        items: [
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_DrawerMenu_Main_StepThreeLogo',
                                                 height: 35,
                                                 width: 35,
                                                 html: '<div ><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                    FloatPanel_MembershipDetailsPageShow();
                                                 }
                                             },
                                            {
                                                //xtype: 'button',
                                                //id: 'btnFloatPanel_DrawerMenu_Main_StepThreeLogoTxt',
                                                //margin: '1 0 0 -15',
                                                //html: '<font size=2px color=white><b>Ayoha Reward</b></font><br><div style="margin:-10px 0px 0px -1px"><font size=1 color=white><i>Bussiness v 1.0</i></font></div>',
                                                //ui: 'plain',
                                                //handler: function () {
                                                   
                                                //}
                                                id: 'htmlMyAccount_Dashboard_TitleHeaderTxt_Main',
                                                html: '<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">Business V 1.0</div>'
                                                // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                            },


                            //{
                            //     xtype: 'spacer'
                            // },

                            //            {
                            //                xtype: 'button',
                            //                id: 'btnFloatPanel_DrawerMenu_Main_StepThreeCRImageSignature',
                            //                // badgeText: '1',

                            //                html: '<div ><img src="resources/icons/smclogo2.png" width="182" height="102" alt="Company Name"></div>',
                            //                ui: 'plain',
                            //                handler: function () {
                            //                    AboutPanelShow();



                            //                }
                            //            },

                                        ]
                                    },

                                      {
                                          xtype: 'container',
                                          //  style: 'border-bottom:1px solid;background-color:#D25959;',
                                          //  style: 'border-bottom:1px solid;background-color:#f44336;',
                                          // style: 'border-bottom:1px solid;background-color:#F7FDFA;',
                                          //   style: 'background-image: url("resources/icons/BGsummaryReceipt4.jpg"); background-size: 100% 100%;border-bottom:1px solid;',
                                        style: 'background-color:transparent;',
                                        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                
                                        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    
                                          //height: 250,
                                        //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',                                        
                                          width: 280,
                                          layout: {
                                              type: 'vbox',
                                              //pack: 'center',
                                              align: 'center',

                                          },
                                          items: [

                                                {
                                                    xtype: 'button',
                                                    height: 178,
                                                    width: 178,
                                                    id: 'btnFloatPanel_DrawerMenu_Main_StepThree_EnterpriseLogo',
                                                    ui: 'plain',
                                                    margin: '3 0 0 0',
                                                    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                                    html: '<img src="resources/icons/templogo.png" style="width: 168px; height: 168px; border:1px solid white; border-radius: 50%; max-width:200px;background-color:white;" />',
                                                    handler: function () {

                                                    }
                                                },
                                               
                                                {
                                                    xtype: 'container',
                                                    width: 280,
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'center',
                                                        // align: 'center',

                                                    },
                                                    items: [
                                                         {

                                                             id: 'loginInfoPanelCompanyName',
                                                             html: '<font size=2px color=white><b>IANMIZI TECHONOLGY SDN BHD</b></font>',
                                                         },

                                                    ]

                                                },

                                                 //{

                                                 //    id: 'loginInfoPanelCompanyName',
                                                 //    html: '<font size=2px color=white><b>GEOINFO SERVICES SDN BHD</b></font>',
                                                 //},
                                                 {
                                                     margin: '-5 0 0 0',
                                                     id: 'loginInfoPanelUserName',
                                                     html: '<font size=2px color=white><b>Tarmizi Bin Rahim</b></font>',
                                                 },

                             
                                          ]
                                      },







                              {
                                  xtype: 'container',
                                 // style: 'border-bottom:1px white solid;background-color:white;',
                              //   style: 'background-color:white;',
                                 style: 'border-bottom:1px white solid;background-color:white;',
                                  width: 280,
                                  height: 40,
                                  layout: {
                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left',
                                  },
                                  items: [
                                        
            
                              

                                 {
                                    
                                   
                                     width: 200,
                                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAccountTxt',
                                     html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">My Account</div>',
                                     // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                    margin: '15 0 0 35',
                                    

                                 },


                                  ]
                              },
                              ////

                               {
                                   xtype: 'container',
                                   style: 'border-bottom:0px solid;background-color:white;',
                                   name: 'nameFloatPanel_DrawerMenu_Main_StepThree_UseInfo',
                                   hidden:true,
                                   width: 280,
                                   height: 40,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left',
                                   },
                                   items: [
                                {
                                   
                                    id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_UseInfoIcon',
                                    html: '<img src="resources/iconsgrey/userInfoPurple.png" style="width: 26px; height: 26px;" />',
                                    margin: '5 0 0 60',
                                },
                                {
                                    xtype: 'panel',
                                    width:10

                                },
                                  {
                                      id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_UseInfoTxt',
                                      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">User Info</div>',
                                      margin: '12 0 0 0',

                                  },


                                   ]
                               },
                                 {
                                     xtype: 'container',
                                    // style: 'border-bottom:0px solid;background-color:white;',
                                     style: 'background-color:white;',
                                     id:'containerFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo',
                                     name: 'nameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo',
                                     width: 280,
                                     height: 40,
                                     layout: {
                                         type: 'hbox',
                                         pack: 'left',
                                         align: 'left',
                                     },
                                     items: [
                                  {

                                      id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_EnterpriseIcon',
                                      html: '<img src="resources/iconsgrey/enterprisePurple.png"  id="imgEnterpriseIcon"         style="width: 26px; height: 26px;" />',
                                      margin: '5 0 0 60',
                                  },
                                  {
                                      xtype: 'panel',
                                      width: 10

                                  },
                                    {
                                        id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyEnterpriseTxt',
                                        html: '<div   id="txtEnterpriseIcon"      style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Enterprise Info</div>',
                                        margin: '12 0 0 0',

                                    },


                                     ]
                                 },
                                 {
                                    xtype: 'container',
                                  //  style: 'border-bottom:0px solid;background-color:white;',
                                    style: 'background-color:white;',
                                    id:'containerFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage',
                                    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage',
                                    width: 280,
                                    height: 40,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                 {

                                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_EnterprisePageIcon',
                                    // html: '<img src="resources/iconsgrey/Enterprisepage.png"  id="imgEnterprisePage" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage`,`txtEnterprisePage`,`Enterprise Page`,`imgEnterprisePage`,`enterprisepage`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage`,`txtEnterprisePage`,`Enterprise Page`,`imgEnterprisePage`,`enterprisepage`)"        style="width: 26px; height: 26px;" />',
                                     html: '<img src="resources/iconsgrey/Enterprisepage.png"  id="imgEnterprisePage" style="width: 26px; height: 26px;" />',
                                    
                                    
                                    
                                     margin: '5 0 0 60',
                                 },
                                 {
                                     xtype: 'panel',
                                     width: 10

                                 },
                                   {
                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyEnterprisePageTxt',
                                       html: '<div   id="txtEnterprisePage" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Enterprise Page</div>',
                                       margin: '12 0 0 0',

                                   },


                                    ]
                                },



                                {
                                    xtype: 'container',
                                   // style: 'border-bottom:0px solid;background-color:white;',
                                    style: 'border-bottom:0px solid;background-color:white;',
                                    id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembershipPage',
                                    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage',
                                    width: 280,
                                    height: 40,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                 {

                                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipPageIcon',
                                     html: '<img src="resources/iconsgrey/MembershipPageIcon.png"  id="imgMembershipPage" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipPage`,`txtMembershipPage`,`Membership Card Page`,`imgMembershipPage`,`MembershipPageIcon`)"      onmouseout_NotUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipPage`,`txtMembershipPage`,`Membership Card Page`,`imgMembershipPage`,`MembershipPageIcon`)"        style="width: 26px; height: 26px;" />',
                                     margin: '5 0 0 60',
                                 },
                                 {
                                     xtype: 'panel',
                                     width: 10

                                 },
                                   {
                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipTxt',
                                       html: '<div   id="txtMembershipPage" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipPage`,`txtMembershipPage`,`Membership Card Page`,`imgMembershipPage`,`MembershipPageIcon`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipPage`,`txtMembershipPage`,`Membership Card Page`,`imgMembershipPage`,`MembershipPageIcon`)"     style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Card Page</div>',
                                       margin: '12 0 0 0',

                                   },


                                    ]
                                },







                                   {
                                       xtype: 'container',
                                      // style: 'border-bottom:0px solid;background-color:white;',
                                       style: 'border-bottom:0px solid;background-color:white;',
                                       id:'containerFloatPanel_DrawerMenu_Main_StepThree_loginList',
                                       name: 'nameFloatPanel_DrawerMenu_Main_StepThree_LoginList',
                                       width: 280,
                                       height: 40,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                    {

                                        id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_loginListIcon',
                                        html: '<img src="resources/iconsgrey/loginlistPurple.png"    id="imgloginListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_loginList`,`txtloginListIcon`,`User List`,`imgloginListIcon`,`loginlistPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_loginList`,`txtloginListIcon`,`User List`,`imgloginListIcon`,`loginlistPurple`)"        style="width: 26px; height: 26px;" />',
                                        margin: '5 0 0 60',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: 10

                                    },
                                      {
                                          id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_userlist',
                                          html: '<div    id="txtloginListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_loginList`,`txtloginListIcon`,`User List`,`imgloginListIcon`,`loginlistPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_loginList`,`txtloginListIcon`,`User List`,`imgloginListIcon`,`loginlistPurple`)"         style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">User List</div>',
                                          margin: '12 0 0 0',

                                      },


                                       ]
                                   },
                                   {
                                       xtype: 'container',
                                     //  style: 'border-bottom:1px white solid;background-color:white;',
                                       style: 'border-bottom:0px solid;background-color:white;',
                                       width: 280,
                                       height: 40,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [


                                      {

                                         
                                          width: 200,
                                          id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyCustomerTxt',
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">Membership</div>',
                                          // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                          margin: '15 0 0 35',


                                      },


                                       ]
                                   },
                                       {
                                           xtype: 'container',
                                           style: 'border-bottom:0px solid;background-color:white;',
                                           id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembershipList',
                                           name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembershipList',
                                           width: 280,
                                           height: 40,
                                           layout: {
                                               type: 'hbox',
                                               pack: 'left',
                                               align: 'left',
                                           },
                                           items: [
                                        {

                                            id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembersListIcon',
                                            html: '<img    id="imgMembersListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipList`,`txtMembersListIcon`,`Membership Subscriber List`,`imgMembersListIcon`,`userlistPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipList`,`txtMembersListIcon`,`Membership Subscriber List`,`imgMembersListIcon`,`userlistPurple`)"          src="resources/iconsgrey/userlistPurple.png" style="width: 26px; height: 26px;" />',
                                            margin: '5 0 0 60',
                                        },
                                        {
                                            xtype: 'panel',
                                            width: 10

                                        },
                                          {
                                              id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipListTxt',
                                              html: '<div  id="txtMembersListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipList`,`txtMembersListIcon`,`Membership Subscriber List`,`imgMembersListIcon`,`userlistPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipList`,`txtMembersListIcon`,`Membership Subscriber List`,`imgMembersListIcon`,`userlistPurple`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Subscriber List</div>',
                                              margin: '12 0 0 0',

                                          },


                                           ]
                                       },


                                       {
                                        xtype: 'container',
                                        style: 'border-bottom:0px solid;background-color:white;',
                                        id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList',
                                        name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList',
                                        width: 280,
                                        height: 40,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                     {

                                         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembersApprovalListIcon',
                                         html: '<img    id="imgMembersApprovalListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"          src="resources/iconsgrey/identify.png" style="width: 26px; height: 26px;" />',
                                         margin: '5 0 0 60',
                                     },
                                     {
                                         xtype: 'panel',
                                         width: 10

                                     },
                                       {
                                           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalListTxt',
                                           html: '<div  id="txtMembersApprovalListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Approval List</div>',
                                           margin: '12 0 0 0',

                                       },


                                        ]
                                    },






                                       {
                                        xtype: 'container',
                                        style: 'border-bottom:0px solid;background-color:white;',
                                        id:'containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList',
                                        name: 'nameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList',
                                        width: 280,
                                        height: 40,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                     {

                                         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementListIcon',
                                         html: '<img    id="imgRedeemManagementListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"       src="resources/iconsgrey/membership01.png" style="width: 26px; height: 26px;" />',
                                         margin: '5 0 0 60',
                                     },
                                     {
                                         xtype: 'panel',
                                         width: 10

                                     },
                                       {
                                           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementListTxt',
                                           html: '<div   id="txtRedeemManagementListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Reward Redemption </div>',
                                           margin: '12 0 0 0',

                                       },


                                        ]
                                    },

                              ///////
                              {
                                xtype: 'container',
                                style: 'border-bottom:0px solid;background-color:white;',
                                id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList',
                                name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList',
                                width: 280,
                                height: 40,
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left',
                                },
                                items: [
                             {

                                 id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembersActivityIcon',
                                 html: '<img    id="imgMembersActivityListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList`,`txtMembersActivityListIcon`,`Members Campaing Actitivy Log`,`imgMembersActivityListIcon`,`History01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembersActivityListt`,`txtMembersActivityListIcon`,`Members Campaign Activity Log`,`imgMembersActivityListIcon`,`History01`)"       src="resources/iconsgrey/History01.png" style="width: 26px; height: 26px;" />',
                                 margin: '5 0 0 60',
                             },
                             {
                                 xtype: 'panel',
                                 width: 10

                             },
                               {
                                   id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembersActivityTxt',
                                   html: '<div   id="txtMembersActivityListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList`,`txtMembersActivityListIcon`,`Members Campaign Activity Log`,`imgMembersActivityListIcon`,`History01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList`,`txtMembersActivityListIcon`,`Members Campaign Activity Log`,`imgMembersActivityListIcon`,`History01`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Members Campaign Activity Log </div>',
                                   margin: '12 0 0 0',

                               },


                                ]
                            },
                              ///////


                                {
                                    xtype: 'container',
                                    style: 'border-bottom:1px white solid;background-color:white;',
                                    width: 280,
                                    height: 40,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [


                                   {

                                     //  id: 'btnMyAccountlbl',
                                       width: 200,
                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipCardManagementTxt',
                                       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Card Management</div>',
                                       // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                       margin: '15 0 0 35',


                                   },


                                    ]
                                },



                              

                                  {
                                      xtype: 'container',
                                      style: 'border-bottom:0px solid;background-color:white;',
                                      id:'containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard',
                                      name: 'nameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard',
                                   //   cls:'example-2',
                                      width: 280,
                                      height: 40,
                                      layout: {
                                          type: 'hbox',
                                          pack: 'left',
                                          align: 'left',
                                      },
                                      items: [
                                   {

                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCardIcon',
                                       html: '<img  src="resources/iconsgrey/CreateNewMembershipCard.png" id="imgCreateNewMembershipCardIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard`,`txtCreateNewMembershipCard`,`Create New Membership Card`,`imgCreateNewMembershipCardIcon`,`CreateNewMembershipCard`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard`,`txtCreateNewMembershipCard`,`Create New Membership Card`,`imgCreateNewMembershipCardIcon`,`CreateNewMembershipCard`)"  style="width: 26px; height: 26px;" />',
                                       margin: '5 0 0 60',
                                   },
                                   {
                                       xtype: 'panel',
                                       width: 10

                                   },
                                     {
                                         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_createnewmembershipcard',
                                         html: '<div   id="txtCreateNewMembershipCard"   onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard`,`txtCreateNewMembershipCard`,`Create New Membership Card`,`imgCreateNewMembershipCardIcon`,`CreateNewMembershipCard`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard`,`txtCreateNewMembershipCard`,`Create New Membership Card`,`imgCreateNewMembershipCardIcon`,`CreateNewMembershipCard`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Create New Membership Card</div>',
                                         margin: '12 0 0 0',

                                     },


                                      ]
                                  },
                                   
                                  {
                                    xtype: 'container',
                                    id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList',
                                    style: 'border-bottom:0px solid;background-color:white;',
                                    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList',
                                    width: 280,
                                    height: 40,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'left',
                                        align: 'left',
                                    },
                                    items: [
                                 {

                                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_CreateddMembershipCardIcon',
                                     html: '<img src="resources/iconsgrey/membershipPurpleThree.png" id="imgMembershipCard" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,`txtMembershipcard`,`Membership Card Setting`,`imgMembershipCard`,`membershipPurpleThree`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,`txtMembershipcard`,`Membership Card Setting`,`imgMembershipCard`,`membershipPurpleThree`)" style="width: 26px; height: 26px;" />',
                                     margin: '5 0 0 60',
                                 },
                                 {
                                     xtype: 'panel',
                                     width: 10

                                 },
                                   {
                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_membershipcardsetting',
                                       html: '<div onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,`txtMembershipcard`,`Membership Card Setting`,`imgMembershipCard`,`membershipPurpleThree`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,`txtMembershipcard`,`Membership Card Setting`,`imgMembershipCard`,`membershipPurpleThree`)"  id="txtMembershipcard" style="width:280px;height:40px;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Card Setting</div>',
                                       margin: '12 0 0 0',

                                   },


                                    ]
                                },

                                   //////////////




                                   {
                                       xtype: 'container',
                                       style: 'border-bottom:1px white solid;background-color:white;',
                                       width: 280,
                                       height: 40,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [


                                      {

                                        //  id: 'btnMyAccountlbl',
                                          width: 200,
                                          id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_CampaignManagementTxt',
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Membership Campaign Setting</div>',
                                          // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                          margin: '15 0 0 35',


                                      },


                                       ]
                                   },
                                   {
                                       xtype: 'container',
                                       style: 'background-color:white;',
                                       id:'containerFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing',
                                       name: 'nameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing',
                                     //  cls:'blink_me_sendNow',
                                      // class="blink_me_sendNow"
                                       width: 280,
                                       height: 40,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                    {

                                        id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_StampLoyatyCampaignIcon',
                                        html: '<img src="resources/icons/stampchoppurple01.png"  id="imgStampLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing`,`txtStampLoyatyCampaignIcon`,`Stamp Loyalty Setting`,`imgStampLoyatyCampaignIcon`,`stampchoppurple01`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing`,`txtStampLoyatyCampaignIcon`,`Stamp Loyalty Setting`,`imgStampLoyatyCampaignIcon`,`stampchoppurple01`)"   style="width: 26px; height: 26px;" />',
                                        margin: '5 0 0 60',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: 10

                                    },
                                      {
                                          id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_stamployaltysetting',
                                          html: '<div  id="txtStampLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing`,`txtStampLoyatyCampaignIcon`,`Stamp Loyalty Setting`,`imgStampLoyatyCampaignIcon`,`stampchoppurple01`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing`,`txtStampLoyatyCampaignIcon`,`Stamp Loyalty Setting`,`imgStampLoyatyCampaignIcon`,`stampchoppurple01`)"     style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Stamp Loyalty Setting</div>',
                                          margin: '12 0 0 0',

                                      },


                                       ]
                                   },


                                     {
                                         xtype: 'container',
                                         style: 'border-bottom:1px white solid;background-color:white;',
                                         id:'containerFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing',
                                         name: 'nameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing',
                                         width: 280,
                                         height: 40,                                        
                                         layout: {
                                             type: 'hbox',
                                             pack: 'left',
                                             align: 'left',
                                         },
                                         items: [
                                      {

                                          id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_PointLoyatyCampaignIcon',
                                          html: '<img  src="resources/icons/thisweekpointredemption01.png"   id="imgPointLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing`,`txtPointLoyatyCampaignIcon`,`Point Loyalty Setting`,`imgPointLoyatyCampaignIcon`,`thisweekpointredemption01`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing`,`txtPointLoyatyCampaignIcon`,`Point Loyalty Setting`,`imgPointLoyatyCampaignIcon`,`thisweekpointredemption01`)"     style="width: 26px; height: 26px;" />',
                                          margin: '5 0 0 60',
                                      },
                                      {
                                          xtype: 'panel',
                                          width: 10

                                      },
                                        {
                                            id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyTxt',
                                            html: '<div   id="txtPointLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing`,`txtPointLoyatyCampaignIcon`,`Point Loyalty Setting`,`imgPointLoyatyCampaignIcon`,`thisweekpointredemption01`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing`,`txtPointLoyatyCampaignIcon`,`Point Loyalty Setting`,`imgPointLoyatyCampaignIcon`,`thisweekpointredemption01`)"      style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Point Loyalty Setting</div>',
                                            margin: '12 0 0 0',

                                        },


                                         ]
                                     },
                                     {
                                        xtype: 'container',
                                        style: 'border-bottom:0px solid;background-color:white;',
                                        id:'containerFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign',
                                        name: 'nameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign',
                                      //  cls:'blink_me_sendNow',
                                        width: 280,
                                        height: 40,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left',
                                        },
                                        items: [
                                     {

                                         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyatyCampaignIcon',
                                         html: '<img src="resources/icons/mypromotionThree.png"   id="imgDiscountLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign`,`txtDiscountLoyatyCampaignIcon`,`Membership Card Discount`,`imgDiscountLoyatyCampaignIcon`,`mypromotionThree`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign`,`txtDiscountLoyatyCampaignIcon`,`Membership Card Discount`,`imgDiscountLoyatyCampaignIcon`,`mypromotionThree`)"   style="width: 26px; height: 26px;" />',
                                         margin: '5 0 0 60',
                                     },
                                     {
                                         xtype: 'panel',
                                         width: 10

                                     },
                                       {
                                           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyTxt',
                                           html: '<div id="txtDiscountLoyatyCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign`,`txtDiscountLoyatyCampaignIcon`,`Membership Card Discount`,`imgDiscountLoyatyCampaignIcon`,`mypromotionThree`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign`,`txtDiscountLoyatyCampaignIcon`,`Membership Card Discount`,`imgDiscountLoyatyCampaignIcon`,`mypromotionThree`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Memberships Card Discount</div>',
                                           margin: '12 0 0 0',

                                       },


                                        ]
                                    },
                                       {
                                           xtype: 'container',
                                           style: 'border-bottom:0px solid;background-color:white;',
                                           id:'containerFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing',
                                           name: 'nameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing',
                                         //  cls:'blink_me_sendNow',
                                           width: 280,
                                           height: 40,
                                           layout: {
                                               type: 'hbox',
                                               pack: 'left',
                                               align: 'left',
                                           },
                                           items: [
                                        {

                                            id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_ContestCampaignIcon',
                                            html: '<img   id="imgContestCampaignIcon"    src="resources/icons/contest01-removebg-preview.png"    onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing`,`txtContestCampaignIcon`,`Contest Management`,`imgContestCampaignIcon`,`contest01-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing`,`txtContestCampaignIcon`,`Contest Management`,`imgContestCampaignIcon`,`contest01-removebg-preview`)"     style="width: 26px; height: 26px;" />',
                                            margin: '5 0 0 60',
                                        },
                                        {
                                            xtype: 'panel',
                                            width: 10

                                        },
                                          {
                                              id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_ContestListTxt',
                                              html: '<div  id="txtContestCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing`,`txtContestCampaignIcon`,`Contest Management`,`imgContestCampaignIcon`,`contest01-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing`,`txtContestCampaignIcon`,`Contest Management`,`imgContestCampaignIcon`,`contest01-removebg-preview`)" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Contest Management</div>',
                                              margin: '12 0 0 0',

                                          },


                                           ]
                                       },
                                         {
                                             xtype: 'container',
                                             style: 'border-bottom:0px solid;background-color:white;',
                                             id:'containerFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing',
                                             name: 'nameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing',
                                             hidden:true,
                                             width: 280,
                                             height: 40,
                                             cls:'blink_me_sendNow',
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'left',
                                                 align: 'left',
                                             },
                                             items: [
                                          {

                                              id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_VoucherCampaignIcon',
                                              html: '<img src="resources/icons/voucer-removebg-preview.png"  id="imgVoucherCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing`,`txtVoucherCampaignIcon`,`Voucher Setting`,`imgVoucherCampaignIcon`,`voucer-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing`,`txtVoucherCampaignIcon`,`Voucher Setting`,`imgVoucherCampaignIcon`,`voucer-removebg-preview`)"    style="width: 26px; height: 26px;" />',
                                              margin: '5 0 0 60',
                                          },
                                          {
                                              xtype: 'panel',
                                              width: 10

                                          },
                                            {
                                                id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_VoucherCampaignTxt',
                                                html: '<div  id="txtVoucherCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing`,`txtVoucherCampaignIcon`,`Voucher Setting`,`imgVoucherCampaignIcon`,`voucer-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing`,`txtVoucherCampaignIcon`,`Voucher Setting`,`imgVoucherCampaignIcon`,`voucer-removebg-preview`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Voucher Setting</div>',
                                                margin: '12 0 0 0',

                                            },


                                             ]
                                         },
                                         {
                                             xtype: 'container',
                                             style: 'border-bottom:0px solid;background-color:white;',
                                             id:'containerFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent',
                                             name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent',
                                             width: 280,
                                             height: 40,
                                            // cls:'blink_me_sendNow',
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'left',
                                                 align: 'left',
                                             },
                                             items: [
                                          {

                                              id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipEventCampaignIcon',
                                              html: '<img  src="resources/icons/membershipevent-removebg-preview.png"  id="imgMembershipEventCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent`,`txtMembershipEventCampaignIcon`,`Membership Event Setting`,`imgMembershipEventCampaignIcon`,`membershipevent-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent`,`txtMembershipEventCampaignIcon`,`Membership Event Setting`,`imgMembershipEventCampaignIcon`,`membershipevent-removebg-preview`)"    style="width: 26px; height: 26px;" />',
                                              margin: '5 0 0 60',
                                          },
                                          {
                                              xtype: 'panel',
                                              width: 10

                                          },
                                            {
                                                id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipEventTxt',
                                                html: '<div   id="txtMembershipEventCampaignIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent`,`txtMembershipEventCampaignIcon`,`Membership Event Setting`,`imgMembershipEventCampaignIcon`,`membershipevent-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent`,`txtMembershipEventCampaignIcon`,`Membership Event Setting`,`imgMembershipEventCampaignIcon`,`membershipevent-removebg-preview`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Membership Event Setting</div>',
                                                margin: '12 0 0 0',

                                            },


                                             ]
                                         },

                              //////

                                   

                                  {
                                      xtype: 'container',
                                      style: 'border-bottom:1px white solid;background-color:white;',
                                      width: 280,
                                      height: 40,
                                      layout: {
                                          type: 'hbox',
                                          pack: 'left',
                                          align: 'left',
                                      },
                                      items: [


                                     {

                                       //  id: 'btnMyAccountlbl',
                                         width: 200,
                                         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_AdvertisementManagementTxt',
                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">Advertisement Management</div>',
                                         // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

                                         margin: '15 0 0 35',


                                     },


                                      ]
                                  },

                                  {
                                      xtype: 'container',
                                      style: 'border-bottom:0px solid;background-color:white;',
                                      id:'containerFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList',
                                      name: 'nameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList',
                                      width: 280,
                                      height: 40,
                                      layout: {
                                          type: 'hbox',
                                          pack: 'left',
                                          align: 'left',
                                      },
                                      items: [
                                   {

                                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAdvertisementIcon',
                                       html: '<img src="resources/iconsgrey/addnewadvertisement-removebg-preview.png" id="imgMyAdvertisementIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList`,`txtMyAdvertisementIcon`,`My Advertisement List`,`imgMyAdvertisementIcon`,`addnewadvertisement-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList`,`txtMyAdvertisementIcon`,`My Advertisement List`,`imgMyAdvertisementIcon`,`addnewadvertisement-removebg-preview`)"    style="width: 26px; height: 26px;" />',
                                       margin: '5 0 0 60',
                                   },
                                   {
                                       xtype: 'panel',
                                       width: 10

                                   },
                                     {
                                         id: 'htmlFloatPanel_DrawerMenuMain_LoginListTxt_myadvertisementlist',
                                         html: '<div  id="txtMyAdvertisementIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList`,`txtMyAdvertisementIcon`,`My Advertisement List`,`imgMyAdvertisementIcon`,`addnewadvertisement-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList`,`txtMyAdvertisementIcon`,`My Advertisement List`,`imgMyAdvertisementIcon`,`addnewadvertisement-removebg-preview`)"      style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">My Advertisement List</div>',
                                         margin: '12 0 0 0',

                                     },


                                      ]
                                  },

                            {
                                xtype: 'container',
                                style: 'border-bottom:0px solid;background-color:white;',
                                id:'containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement',
                                name: 'nameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement',
                                width: 280,
                                height: 40,
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left',
                                },
                                items: [
                             {

                                 id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisementIcon',
                                 html: '<img src="resources/iconsgrey/addnewadvertisement03.png"  id="imgCreateNewAdvertisementIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement`,`txtCreateNewAdvertisementIcon`,`Create New Advertisement`,`imgCreateNewAdvertisementIcon`,`addnewadvertisement03`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement`,`txtCreateNewAdvertisementIcon`,`Create New Advertisement`,`imgCreateNewAdvertisementIcon`,`addnewadvertisement03`)"  style="width: 26px; height: 26px;" />',
                                 margin: '5 0 0 60',
                             },
                             {
                                 xtype: 'panel',
                                 width: 10

                             },
                               {
                                   id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_createnewadvertisment',
                                   html: '<div  id="txtCreateNewAdvertisementIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement`,`txtCreateNewAdvertisementIcon`,`Create New Advertisement`,`imgCreateNewAdvertisementIcon`,`addnewadvertisement03`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement`,`txtCreateNewAdvertisementIcon`,`Create New Advertisement`,`imgCreateNewAdvertisementIcon`,`addnewadvertisement03`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Create New Advertisement</div>',
                                   margin: '12 0 0 0',

                               },


                                ]
                            },

                            
                              


////////

 {
     xtype: 'container',
     style: 'border-bottom:1px white solid;background-color:white;',
     width: 280,
     height: 40,
     layout: {
         type: 'hbox',
         pack: 'left',
         align: 'left',
     },
     items: [


    {

        id: 'btnMyAccountlbl',
        width: 200,
        id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingToolTxt',
        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">Messaging Tools</div>',
        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

        margin: '15 0 0 35',


    },


     ]
 },
    {
        xtype: 'container',
        style: 'border-bottom:0px solid;background-color:white;',
        id:'containerFloatPanel_DrawerMenu_Main_StepThree_PushNotification',
        name: 'nameFloatPanel_DrawerMenu_Main_StepThree_PushNotification',
        width: 280,
        height: 40,
        layout: {
            type: 'hbox',
            pack: 'left',
            align: 'left',
        },
        items: [
     {

         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingTool_PNIcon',
         html: '<img src="resources/iconsgrey/PushNotification01-removebg-preview.png" id="imgMessagingTool_PNIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PushNotification`,`txtMessagingTool_PNIcon`,`Push Notification`,`imgMessagingTool_PNIcon`,`PushNotification01-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PushNotification`,`txtMessagingTool_PNIcon`,`Push Notification`,`imgMessagingTool_PNIcon`,`PushNotification01-removebg-preview`)"     style="width: 26px; height: 26px;" />',
         margin: '5 0 0 60',
     },
     {
         xtype: 'panel',
         width: 10

     },
       {
           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_pushnotification',
           html: '<div id="txtMessagingTool_PNIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PushNotification`,`txtMessagingTool_PNIcon`,`Push Notification`,`imgMessagingTool_PNIcon`,`PushNotification01-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PushNotification`,`txtMessagingTool_PNIcon`,`Push Notification`,`imgMessagingTool_PNIcon`,`PushNotification01-removebg-preview`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Push Notification</div>',
           margin: '12 0 0 0',

       },


        ]
    },

       {
           xtype: 'container',
           style: 'border-bottom:0px solid;background-color:white;',
           name: 'nameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting',
           width: 280,
           height: 40,
           layout: {
               type: 'hbox',
               pack: 'left',
               align: 'left',
           },
           items: [
        {

            id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingTool_SMSIcon',
            html: '<img src="resources/iconsgrey/disable_sms.png" style="width: 26px; height: 26px;" />',
            margin: '5 0 0 60',
        },
        {
            xtype: 'panel',
            width: 10

        },
          {
              id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_smsblasting',
              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">SMS Blasting</div>',
              margin: '12 0 0 0',

          },


           ]
       },

                              

{
    xtype: 'container',
    style: 'border-bottom:0px solid;background-color:white;',
    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_WhatsApp',
    width: 280,
    height: 40,
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'left',
    },
    items: [
 {

     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingTool_WAIcon',
     html: '<img src="resources/iconsgrey/disable_whatsapp.png" style="width: 26px; height: 26px;" />',
     margin: '5 0 0 60',
 },
 {
     xtype: 'panel',
     width: 10

 },
   {
       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_whatsappblasting',
       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Whats App Blasting</div>',
       margin: '12 0 0 0',

   },


    ]
},
                              

//////
{
    xtype: 'container',
    style: 'border-bottom:0px solid;background-color:white;',
    id:'containerFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList',
    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList',
    width: 280,
    height: 40,
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'left',
    },
    items: [
 {

     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityIcon',
     html: '<img  id="imgMessagingActivityListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList`,`txtMessagingActivityListIcon`,`Messaging Actitivy Log`,`imgMessagingsActivityListIcon`,`History01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityListt`,`txtMessagingActivityListIcon`,`Messaging Activity Log`,`imgMessagingActivityListIcon`,`History01`)"       src="resources/iconsgrey/History01.png" style="width: 26px; height: 26px;" />',
     margin: '5 0 0 60',
 },
 {
     xtype: 'panel',
     width: 10

 },
   {
       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityTxt',
       html: '<div   id="txtMessagingActivityListIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList`,`txtMessagingActivityListIcon`,`Messaging Activity Log`,`imgMessagingActivityListIcon`,`History01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList`,`txtMessagingActivityListIcon`,`Messaging Activity Log`,`imgMessagingActivityListIcon`,`History01`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Messaging Activity Log </div>',
       margin: '12 0 0 0',

   },


    ]
},


//////

      {
          xtype: 'container',
          style: 'border-bottom:1px white solid;background-color:white;',
          width: 280,
          height: 40,
          layout: {
              type: 'hbox',
              pack: 'left',
              align: 'left',
          },
          items: [


         {

             id: 'btnMyAccountlbl',
             width: 200,
             id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStoreTxt',
             html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 13px;font-weight:bold;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Store</div>',
             // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:#d3d3d3;margin:-6px 0px 0px 0px">Client V 1.0</div>'

             margin: '15 0 0 35',


         },


          ]
      },
      {
          xtype: 'container',
          style: 'border-bottom:0px solid;background-color:white;',
          name: 'nameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting',
          hidden:true,
          width: 280,
          height: 40,
          layout: {
              type: 'hbox',
              pack: 'left',
              align: 'left',
          },
          items: [
       {

           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_MembershipCampaignSettingIcon',
           html: '<img src="resources/iconsgrey/membership01.png" style="width: 26px; height: 26px;" />',
           margin: '5 0 0 60',
       },
       {
           xtype: 'panel',
           width: 10

       },
         {
             id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_MembershipCampaignSettingTxt',
             html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Card Setting</div>',
             margin: '12 0 0 0',

         },


          ]
      },

      {
          xtype: 'container',
          style: 'border-bottom:0px solid;background-color:white;',
          id:'containerFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting',
          name: 'nameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting',
          width: 280,
          height: 40,
          layout: {
              type: 'hbox',
              pack: 'left',
              align: 'left',
          },
          items: [
       {

           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_SaleItemIcon',
           html: '<img src="resources/iconsgrey/AyohaStore.png"  id="imgSaleItemIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting`,`txtSaleItemIcon`,`My Ayoha Store Setting`,`imgSaleItemIcon`,`AyohaStore`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting`,`txtSaleItemIcon`,`My Ayoha Store Setting`,`imgSaleItemIcon`,`AyohaStore`)" style="width: 26px; height: 26px;" />',
           margin: '5 0 0 60',
       },
       {
           xtype: 'panel',
           width: 10

       },
         {
             id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_SaleItemTxt',
             html: '<div  id="txtSaleItemIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting`,`txtSaleItemIcon`,`My Ayoha Store Setting`,`imgSaleItemIcon`,`AyohaStore`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting`,`txtSaleItemIcon`,`My Ayoha Store Setting`,`imgSaleItemIcon`,`AyohaStore`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">My Ayoha Store Setting</div>',
             margin: '12 0 0 0',

         },


          ]
      },


      {
          xtype: 'container',
          style: 'border-bottom:0px solid;background-color:white;',
          id:'containerFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge',
          name: 'nameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge',
          width: 280,
          height: 40,
          layout: {
              type: 'hbox',
              pack: 'left',
              align: 'left',
          },
          items: [
       {

           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_DeliveryChargeIcon',
           html: '<img src="resources/iconsgrey/deliverypurple01.png"   id="imgDeliveryChargeIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge`,`txtDeliveryChargeIcon`,`Delivery Charge Setting`,`imgDeliveryChargeIcon`,`deliverypurple01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge`,`txtDeliveryChargeIcon`,`Delivery Charge Setting`,`imgDeliveryChargeIcon`,`deliverypurple01`)"   style="width: 26px; height: 26px;" />',
           margin: '5 0 0 60',
       },
       {
           xtype: 'panel',
           width: 10

       },
         {
             id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_DeliveryChargeTxt',
             html: '<div   id="txtDeliveryChargeIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge`,`txtDeliveryChargeIcon`,`Delivery Charge Setting`,`imgDeliveryChargeIcon`,`deliverypurple01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge`,`txtDeliveryChargeIcon`,`Delivery Charge Setting`,`imgDeliveryChargeIcon`,`deliverypurple01`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Delivery Charge Setting</div>',
             margin: '12 0 0 0',

         },


          ]
      },
               


      {
        xtype: 'container',
        style: 'border-bottom:0px solid;background-color:white;',
        id:'containerFloatPanel_DrawerMenu_Main_StepThree_NewCart',
        name: 'nameFloatPanel_DrawerMenu_Main_StepThree_NewCart',
        width: 280,
        height: 40,
        layout: {
            type: 'hbox',
            pack: 'left',
            align: 'left',
        },
        items: [
     {

         id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_NewCartIcon',
         html: '<img src="resources/iconsgrey/groceryPurple.png"   id="imgNewCartIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_NewCart`,`txtNewCartIcon`,`Client Shoping Cart`,`imgNewCartIcon`,`groceryPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_NewCart`,`txtNewCartIcon`,`Client Shoping Cart`,`imgNewCartIcon`,`groceryPurple`)"   style="width: 26px; height: 26px;" />',
         margin: '5 0 0 60',
     },
     {
         xtype: 'panel',
         width: 10

     },
       {
           id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_NewCartTxt',
           html: '<div   id="txtNewCartIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_NewCart`,`txtNewCartIcon`,`Client Shoping Cart`,`imgNewCartIcon`,`groceryPurple`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_NewCart`,`txtNewCartIcon`,`Client Shoping Cart`,`imgNewCartIcon`,`groceryPurple`)"  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Client Shoping Cart</div>',
           margin: '12 0 0 0',

       },


        ]
    },






                

               {
                   xtype: 'container',
                   style: 'border-bottom:0px solid;background-color:white;',
                   id:'containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions',
                   name: 'nameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions',
                   width: 280,
                   height: 40,
                   layout: {
                       type: 'hbox',
                       pack: 'left',
                       align: 'left',
                   },
                   items: [
                {

                    id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderTransactionIcon',
                    html: '<img src="resources/iconsgrey/order-removebg-preview.png"     id="imgOrderTransactionIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"    style="width: 26px; height: 26px;" />',
                    margin: '5 0 0 60',
                },
                {
                    xtype: 'panel',
                    width: 10

                },
                  {
                      id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderTransactionTxt_receiveorderlist',
                      html: '<div id="txtOrderTransactionIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">New Order</div>',
                      margin: '12 0 0 0',

                  },


                   ]
               },
               {
                xtype: 'container',
                style: 'border-bottom:0px solid;background-color:white;',
                id:'containerFloatPanel_DrawerMenu_Main_StepThree_OrderHistory',
                name: 'nameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory',
                width: 280,
                height: 40,
                layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'left',
                },
                items: [

                  

             {

                 id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderHistoryIcon',
                 html: '<img id="imgOrderHistoryIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderHistory`,`txtOrderHistoryIcon`,`Order History`,`imgOrderHistoryIcon`,`OrderHistoryLatest04`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderHistory`,`txtOrderHistoryIcon`,`Order History`,`imgOrderHistoryIcon`,`OrderHistoryLatest04`)"       src="resources/iconsgrey/OrderHistoryLatest04.png" style="width: 26px; height: 26px;" />',
                      
                // html: '<img src="resources/icons/History01.png" style="width: 26px; height: 26px;" />',
                 margin: '5 0 0 60',
             },
             {
                 xtype: 'panel',
                 width: 10

             },
               {
                   id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderHistoryTxt',
                   html: '<div  id="txtOrderHistoryIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderHistory`,`txtOrderHistoryIcon`,`Order History`,`imgOrderHistoryIcon`,`OrderHistoryLatest04`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderHistory`,`txtOrderHistoryIcon`,`Order History`,`imgOrderHistoryIcon`,`OrderHistoryLatest04`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Order History </div>',
                          
                  // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Order History</div>',
                   margin: '12 0 0 0',

               },


                ]
            },


            {
                xtype: 'container',
                style: 'border-bottom:0px solid;background-color:white;',
                id:'containerFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory',
                name: 'nameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory',
                width: 280,
                height: 40,
                layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'left',
                },
                items: [

                  

             {

                 id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_PaymentHistoryIcon',
                 html: '<img id="imgPaymentHistoryIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory`,`txtPaymentHistoryIcon`,`Payment History`,`imgPaymentHistoryIcon`,`PaymentHistory01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory`,`txtPaymentHistoryIcon`,`Payment History`,`imgPaymentHistoryIcon`,`PaymentHistory01`)"       src="resources/iconsgrey/PaymentHistory01.png" style="width: 26px; height: 26px;" />',
                      
                // html: '<img src="resources/icons/History01.png" style="width: 26px; height: 26px;" />',
                 margin: '5 0 0 60',
             },
             {
                 xtype: 'panel',
                 width: 10

             },
               {
                   id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_PaymentHistoryTxt',
                   html: '<div  id="txtPaymentHistoryIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory`,`txtPaymentHistoryIcon`,`Payment History`,`imgPaymentHistoryIcon`,`PaymentHistory01`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory`,`txtPaymentHistoryIcon`,`Payment History`,`imgPaymentHistoryIcon`,`PaymentHistory01`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Payment History </div>',
                          
                  // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Order History</div>',
                   margin: '12 0 0 0',

               },


                ]
            },




                {
                    xtype: 'container',
                    style: 'border-bottom:0px solid;background-color:white;',
                    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_Analisis',
                    id:'containerFloatPanel_DrawerMenu_Main_StepThree_AyohaStoreAnalysis',
                    width: 280,
                    height: 40,
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                 {

                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_AnalysysIcon',
                     html: '<img id="imgAyohaStoreAnalysisIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AyohaStoreAnalysis`,`txtAyohaStoreAnalysisIcon`,`Ayoha Store Statistic`,`imgAyohaStoreAnalysisIcon`,`AyohaStoreAnalysis`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AyohaStoreAnalysis`,`txtAyohaStoreAnalysisIcon`,`Ayoha Store Statistic`,`imgAyohaStoreAnalysisIcon`,`AyohaStoreAnalysis`)"       src="resources/iconsgrey/AyohaStoreAnalysis.png" style="width: 26px; height: 26px;" />',
                  
                    // html: '<img src="resources/icons/disable_analisis.png" style="width: 26px; height: 26px;" />',
                     margin: '5 0 0 60',
                 },
                 {
                     xtype: 'panel',
                     width: 10

                 },
                   {
                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderTransactionTxt_analisis',
                       html: '<div  id="txtAyohaStoreAnalysisIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AyohaStoreAnalysis`,`txtAyohaStoreAnalysisIcon`,`Ayoha Store Statistic`,`imgAyohaStoreAnalysisIcon`,`AyohaStoreAnalysis`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_AyohaStoreAnalysis`,`txtAyohaStoreAnalysisIcon`,`Ayoha Store Statistic`,`imgAyohaStoreAnalysisIcon`,`AyohaStoreAnalysis`)"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Ayoha Store Statistic </div>',
                   
                     //  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Statistic Dashboard</div>',
                       margin: '12 0 0 0',

                   },


                    ]
                },
                {
                    xtype: 'container',
                    style: 'border-bottom:0px solid;background-color:white;',
                    id:'containerFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore',
                    name: 'nameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore',
                    width: 280,
                    height: 40,
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                 {

                     id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OtherIcon',
                     html: '<img id="imgMyAyohaStore_OtherIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore`,`txtMyAyohaStore_OtherIcon`,`Others Online Store`,`imgMyAyohaStore_OtherIcon`,`onlineStore-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore`,`txtMyAyohaStore_OtherIcon`,`Others Online Store`,`imgMyAyohaStore_OtherIcon`,`onlineStore-removebg-preview`)"       src="resources/iconsgrey/onlineStore-removebg-preview.png" style="width: 26px; height: 26px;" />',
                     margin: '5 0 0 60',
                 },
                 {
                     xtype: 'panel',
                     width: 10

                 },
                   {
                       id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderTransactionTxt_otheronlinestore',
                       html: '<div   id="txtMyAyohaStore_OtherIcon" onmouseover_notUsed="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore`,`txtMyAyohaStore_OtherIcon`,`Others Online Store`,`imgMyAyohaStore_OtherIcon`,`onlineStore-removebg-preview`)"      onmouseout_notUsed="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore`,`txtMyAyohaStore_OtherIcon`,`Others Online Store`,`imgMyAyohaStore_OtherIcon`,`onlineStore-removebg-preview`)"     style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Others Online Store</div>',
                       margin: '12 0 0 0',

                   },


                    ]
                },



                                ]
                            },





                            //{
                            //    margin: '-50 0 0 5',
                            //    html: '<font size=2px color=black><u><b>ATTract-Angkasa Trigger Tracking <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and Trace&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u><br>This application is initiated by The<br> National Space Agency(ANGKASA)<br>under The Ministry of Science,<br>Technology and Innovation(MOSTI) <br> funded by MOSTI Social Innovation<br> (MSI)Grant.</font>',
                            //},




                        ]

                    },




              ],



          });

    return _FloatPanel_DrawerMenu_Main_StepThree





}


function FloatPanel_DrawerMenu_Main_StepThreeShow() {
    isFloatPanel_DrawerMenu_Main_StepThreeOpen = 'Y';
    Ext.Viewport.remove(_FloatPanel_DrawerMenu_Main_StepThree);
    this.overlay = Ext.Viewport.add(FloatPanel_DrawerMenu_Main_StepThreePanel());
    this.overlay.show();
    FloatPanel_DrawerMenu_Main_StepThree_InitEvent();

    Ext.getCmp('loginInfoPanelCompanyName').setHtml('<font size=2px color=white><b>' + GetEnterpriseName() + '</b></font>');
    Ext.getCmp('btnFloatPanel_DrawerMenu_Main_StepThree_EnterpriseLogo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" style="width: 168px; height: 168px; border:1px solid white; border-radius: 50%; max-width:200px;background-color:white;" />');
    Ext.getCmp('loginInfoPanelUserName').setHtml('<font size=2px color=white><b>' + GetAyohaUserAccountNames() + '</b></font>');
    
    if (globalNewRedemption != "0") {
     
       
       // Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementListTxt').setMargin('-6px 0px 0px 0px');
          Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementListTxt').setHtml('<div  id="txtRedeemManagementListIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList`,`txtRedeemManagementListIcon`,`Reward Redemptions`,`imgRedeemManagementListIcon`,`membership01`)"     style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Reward Redemption </div><div style="margin:-20px 0px 0px 110px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;position: relative;" class="blink_me"><div style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">' + globalNewRedemption + '</div></div>');
        // id: 'htmlFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementListTxt',
        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Reward Redemption </div>',
      
      }
      if(globalNewRequestForApproval>0){

        Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalListTxt').setHtml('<div  id="txtMembersApprovalListIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList`,`txtMembersApprovalListIcon`,`Membership Approval List`,`imgMembersApprovalListIcon`,`identify`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Approval List</div><div style="margin:-20px 0px 0px 137px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;position: relative;" class="blink_me"><div style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">' + globalNewRequestForApproval + '</div></div>');
       
      }
     
      if(parseInt(sessionStorage.getItem("globalNewOrderPaid"))>0)
      {
        Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_MyAyohaStore_OrderTransactionTxt_receiveorderlist').setHtml('<div    id="txtOrderTransactionIcon" onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"      onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions`,`txtOrderTransactionIcon`,`New Order`,`imgOrderTransactionIcon`,`order-removebg-preview`)"    style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">New Order </div><div style="margin:-20px 0px 0px 110px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;position: relative;" class="blink_me"><div style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">' + sessionStorage.getItem("globalNewOrderPaid") + '</div></div>');
        
    }
}


function FloatPanel_DrawerMenu_Main_StepThreeHide() {
    if (isFloatPanel_DrawerMenu_Main_StepThreeOpen == 'Y') {
        _FloatPanel_DrawerMenu_Main_StepThree.hide();
        isFloatPanel_DrawerMenu_Main_StepThreeOpen = 'N';
    }
  
   
}




function FloatPanel_DrawerMenu_Main_StepThree_InitEvent() {


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SMSBlasting.on('tap',
      function (event, node, options, eOpts) {
    //     FloatPanel_DrawerMenu_Main_StepThreeHide();
    //     var task = Ext.create('Ext.util.DelayedTask', function () {
    //         FloatPanel_DrawerMenu_Main_StepThreeShow();
    //         var task = Ext.create('Ext.util.DelayedTask', function () {
    //             var container = Ext.getCmp('FloatPanel_DrawerMenu_Main_StepThreeID_inner');
    //             var scroller = container.getScrollable().getScroller();
    //             var animation = {
    //                 type: 'ease-out',  // This eases the animation out, making it slow down at the end
    //                 duration: 2000    // Duration of the animation in milliseconds (1 second)
    //             };
    //             scroller.scrollTo(0, scroller.getMaxPosition().y-380, animation);
    //             FloatPanel_WizardCover0Show();
    //             FloatPanel_WizardCover1Show();
              
    //         });
    //         task.delay(800);
           
    // });
    // task.delay(500);



       
       
        FloatPanel_OpenAccountStepShow();
       FloatPanel_DrawerMenu_Main_StepThreeHide();
      }
    );







    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_UseInfo = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_UseInfo]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_UseInfo = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_UseInfo.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_UseInfo.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccountShow();
      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_EnterpriseInfo.on('tap',
      function (event, node, options, eOpts) {
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




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_LoginList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_LoginList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_LoginList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_LoginList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_LoginList.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaEnterpriseAccountShow();
          Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount').setHidden(true);
          Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise').setHidden(true);
          Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
          Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
         
          
      }
    );


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_EnterprisePage.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_MerchantDetailPageShow();
      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipPage.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPageShow();
      }
    );


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembershipList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipList.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_SubscriberListShow();
      }
    );

    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_RedeemManagementList.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_VIEWRedemptionListShow();
      }
    );

    

    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipApprovalList.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_MembershipApprovalListMemberShow();
      }
    );






    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewMembershipCard.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_NewCardAddShow();
         // FloatPanel_AyohaEnterpriseAccountShow();
      }
    );






    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagementShow();
      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembersActivityList.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_MembershipActivityShow_FromDrawerMenu();
      }
    );
    


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MessagingActivityList.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_NotificationActivityShow_FromDrawerMenu();
      }
    );

    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_StampLoyaltyCampaing.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaCardManagementShow();
      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PointLoyaltyCampaing.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaCardManagementShow_Point();
         
      }
    );

    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_DiscountLoyaltyCampaign.on('tap',
      function (event, node, options, eOpts) {
         // FloatPanel_AyohaCardManagementShow_Point();
         //FloatPanel_MerchantDiscountLoyaltyShow();
         FloatPanel_MerchantDiscountLoyaltyShow();
        
      }
    );

    
    

    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_VoucheCampaing.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaRewardVoucherList_ListVoucherShow();
      }
    );


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_ContestCampaing.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaContestListShow();
      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_MembershipEvent.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaRewardEventListShow();
      }
    );





    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_CreateNewAdvertisement.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AdvertisementSettingAddNewShow();
          globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code = "AHM-" + GenerateRandomNo() + "-" + GetEnterpriseAccNo();
      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_AdvertisementList.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AdvertisementShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();
      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PushNotification = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_PushNotification]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PushNotification = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PushNotification.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PushNotification.on('tap',
      function (event, node, options, eOpts) {
          AyohaNotificationManagementShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();
      }
    );




    



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SaleItem_MembershipCardSetting.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_MembershipCardEntitledShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();
          //FloatPanel_AyohaStoreShow_AyohaMerchant();

      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_SaleItemSetting.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_AyohaStoreMerchant_ProductListShow();
          //FloatPanel_AyohaStoreMerchant_AddEditItemShow();
          globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Shrink";
          globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ColView";
          globalFloatPanel_AyohaStore_ModuleTagging = "BurgerMenu_MyAyohaStore";
          FloatPanel_AyohaStoreShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();
          //FloatPanel_AyohaStoreShow_AyohaMerchant();

      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_DeliveryCharge.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_AyohaStore_StockListShow();
          FloatPanel_AyohaStore_DeliveryChargeListShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();

      }
    );




    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_NewCart = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_NewCart]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_NewCart = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_NewCart.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_NewCart.on('tap',
      function (event, node, options, eOpts) {
        //  globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
        FloatPanel_AyohaStore_CartNewListShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();

      }
    );







    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OrderTransactions.on('tap',
      function (event, node, options, eOpts) {
          globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
          FloatPanel_AyohaStore_NewOrderListMemberShow();
        //  FloatPanel_AyohaStore_OrderHistoryShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();

      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OrderHistory.on('tap',
      function (event, node, options, eOpts) {
       //   globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
        //  FloatPanel_AyohaStore_OrderHistoryShow();
        FloatPanel_AyohaStore_OrderHistoryListAllMemberShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();

      }
    );


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_PaymentHistory.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaStore_PaymentHistoryMemberShow();
          FloatPanel_DrawerMenu_Main_StepThreeHide();

      }
    );

    


    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_OthersOnlineStore.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaOtherOnlineStoreShow();

      }
    );



    var containerViewnameFloatPanel_DrawerMenu_Main_StepThree_Analisis = Ext.ComponentQuery.query('container[name=nameFloatPanel_DrawerMenu_Main_StepThree_Analisis]')[0];
    var containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_Analisis = containerViewnameFloatPanel_DrawerMenu_Main_StepThree_Analisis.element;
    containerViewElnameFloatPanel_DrawerMenu_Main_StepThree_Analisis.on('tap',
      function (event, node, options, eOpts) {
        // alert('jem')
        // var panel = Ext.getCmp('containerMyAccount_DashboardMaster');
        //                          panel.getScrollable().getScroller().scrollTo(0, 600, true);
                                 FloatPanel_DrawerMenu_Main_StepThreeHide();

                                 var container = Ext.getCmp('containerMyAccount_DashboardMaster');
    var scroller = container.getScrollable().getScroller();
    var animation = {
        type: 'ease-out',  // This eases the animation out, making it slow down at the end
        duration: 2000    // Duration of the animation in milliseconds (1 second)
    };
    // Retrieve the maximum scroll range and scroll to the bottom
    scroller.scrollTo(0, scroller.getMaxPosition().y-380, animation);
  //  Dashboardload_OrderAndPaymentChart('Today');
    AyohaStoreDashboardSaleInfoMainMerchant('Today')
       // FloatPanel_AyohaStoreDashboardShow();
    //    var container = Ext.getCmp('containerMyAccount_DashboardMaster');
    //    var scroller = container.getScrollable().getScroller();
       
    //    // Scrolls to 600 pixels down, where the second panel begins
    //    scroller.scrollTo(0, 600, true);  // 'true' to animate the scrolling
      }
    );


    
}



function setHighligtedColor(val,txtID,txt,imgID,imgPath){
    document.getElementById(txtID).style.color = "White";
    document.getElementById(txtID).innerHTML = txt;
    document.getElementById(txtID).style.fontSize="12px";
    document.getElementById(imgID).src = "resources/icons/"+imgPath+"white.png";  
   // alert(val);   
    Ext.getCmp(val).setStyle('border-bottom:0px solid;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)');
  //  Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_membershipcardsetting').setHtml('<div onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,'+txt+')" onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,'+txt+')" style="width:280px;height:60px;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Membership Card Setting</div>');
}

function releaseHighligtedColor(val,txtID,txt,imgID,imgPath){  
    document.getElementById(txtID).style.color = "black";
    document.getElementById(txtID).innerHTML = txt;
    document.getElementById(txtID).style.fontSize="12px";
    document.getElementById(imgID).src = "resources/icons/"+imgPath+".png";  
    Ext.getCmp(val).setStyle('border-bottom:0px solid;background-color:white;background-image:none');

   // Ext.getCmp('htmlFloatPanel_DrawerMenu_Main_StepThree_LoginListTxt_membershipcardsetting').setHtml('<div onmouseover="setHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,'+txt+')" onmouseout="releaseHighligtedColor(`containerFloatPanel_DrawerMenu_Main_StepThree_MembershipCardList`,'+txt+')" style="width:280px;height:60px;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:#d3d3d3;margin:0px 0px 0px 0px">Membership Card Setting</div>');
}