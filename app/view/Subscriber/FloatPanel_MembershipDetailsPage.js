Ext.define('ianMizi.view.Subscriber.FloatPanel_MembershipDetailsPage', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_MembershipDetailsPage;


var isFloatPanel_MembershipDetailsPageOpen = 'N';





function FloatPanel_MembershipDetailsPage() {

    _FloatPanel_MembershipDetailsPage =
     Ext.create('Ext.Container', {
         zIndex: 50,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_MembershipDetailsPageID',
         name: 'nameFloatPanel_MembershipDetailsPageID',
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
         styleHtmlContent: true,
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: GetbackgroundColor(),
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',





         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_MembershipDetailsPage.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_MembershipDetailsPage.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_MembershipDetailsPageOpen = 'N';
                         RemovePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");
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
                     docked: 'top',
                     height: 60,
                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                  // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
                  style:GetHeaderStyle(),
                     id: 'containerFloatPanel_MembershipDetailsPageHeader',
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
                                    width: 20
                                },

                                {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_MembershipDetailsPage_TitleHeaderTxt',
                                    //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                   // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Member Details</div>',

                                     html: '<font size=4 color=black><b>Member Details</b></font>'
                                },


                                          {
                                              xtype: 'spacer'
                                          },

                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipDetailsPageBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_MembershipDetailsPage.hide(Ext.fx.Animation({
                                                      type: 'popOut',
                                                      // direction: 'left',
                                                      //easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_MembershipDetailsPageOpen = 'N';
                                                  RemovePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',
                                               width: 20
                                           },
                                    //{
                                    //    xtype: 'button',

                                    //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                    //    height: 40,
                                    //    width: 40,
                                    //    // iconCls: 'list',
                                    //    id: 'btnFloatPanel_MembershipDetailsPage_PicProfile',
                                    //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                    //    ui: 'plain',
                                    //    handler: function () {
                                    //        _FloatPanel_MembershipDetailsPage.hide(Ext.fx.Animation({
                                    //            type: 'slideOut',
                                    //            direction: 'right',
                                    //            easing: 'cubic-bezier(.7,0,.7,1)',
                                    //            duration: 250

                                    //        }));

                                    //        isFloatPanel_MembershipDetailsPageOpen = "N";
                                    //        RemovePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");
                                    //    }
                                    //},












                            ]

                 },





            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_MembershipDetailsPageBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: 'background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    //indicators: tru
                },
                items: [

                  

{
    xtype: 'container',
    margin: '20 0 0 0',
    id: 'FloatPanel_MembershipDetailsPageBorderBgInner',
    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
    style: 'background-color:transparent;',
    height: 700,
    width: '100%',
    // style: 'border:2px solid #D25959;',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center'
    },
    // scrollable: {
    //     direction: 'vertical',
    //     directionLock: true,
    //     indicators: false
    // },
    items:[
        {
    
            xtype: 'container',
           width: '1.5%',
           //flex:1,
            height: 700,
            style: 'background-color:transparent;',
        },


       {
           xtype: 'container',
          width: '28%',
          //flex:2,
           height: 700,
          // style: 'background-color:transparent;',
          // style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:5%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
           style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",

           id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile',

           layout: {
               type: 'vbox',
               pack: 'start',
               align: 'center',
           },
           items: [

{
xtype: 'container',
width: '100%',
//flex:2,
height: 130,
style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:10px 10px 0px 0px',
//style: 'background-color:black;',

id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_top',

layout: {
type: 'vbox',
pack: 'start',
align: 'left',
},
items:[
    {
       // margin:'-5 0 0 10',
       margin:'7 0 0 10',
        height:50,
        html: '<font size=3 color=white><b><u>Member Profile</u></b></font>'
        // html: '<div style="width:100%;height:50;text-align:left;vertical-align:middle;color:white;font-family: Arial; font-size:12px;font-weight:bold"><div style="margin:15px 0px 0px 0px">MEMBER PROFILE</div></div>'
    }
]

},


{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: #ededed;',
    //style: 'background-color:black;',
    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_viewprofile_message',
    
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },

    items:[
        {
            xtype:'spacer',
            width:15
            },
        {

           html:'<div class="dropdown" style="float:right;margin:0px 0px 0px 0px;cursor:pointer"><button class="dropbtnTools">+Tools</button><div class="dropdown-contentTools"><div onClick="FloatPanel_MembershipDetailsPage_Tools_StampedCard()" title="Scan QR Code from client app to stamped digital loyalty card">Stamped Card</div> <div onClick="FloatPanel_MembershipDetailsPage_Tools_CreatePoint()"  title="Create/send point to cilent digital loyalty card">Create Loyalty Point</div><div  OnClick="FloatPanel_AyohaContest_ManageParticipantListShow_FromMembershipDetailPage();" title="Manage contest submitted">Contest Submission</div> <div  OnClick="FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow_FromMemberDetailsPage()" title="Track Voucher Usage">Voucher Used</div><div  OnClick="FloatPanel_AyohaRewardEvent_RespondListShow_FromMemberDetailsPage()"   title="View Respond from membership event invitation">Event Respond</div><div  OnClick="FloatPanel_MembershipDetailsPage_LoadLastLogin();"  title="Show last login date from this member">View Last Login On</div><div  OnClick="FloatPanel_MembershipDetailsPage_MasterMembershipDelete();"  title="Delete this member">Delete This Account/Membership</div></div>',
           // html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">Tools</div>'
        },
{
xtype:'spacer',
},
        {

           // html:'<div class="dropdown" style="float:right;margin:0px 0px 0px 0px;cursor:pointer"><button class="dropbtnTools">+Message</button><div class="dropdown-contentTools"><div onClick="FloatPanel_MembershipDetailsPage_Tools_StampedCard()" title="Scan QR Code from client app to stamped digital loyalty card">Stamped Card</div> <div onClick="FloatPanel_MembershipDetailsPage_Tools_CreatePoint()"  title="Create/send point to cilent digital loyalty card">Create Loyalty Point</div><div  OnClick="FloatPanel_AyohaContest_ManageParticipantListShow_FromMembershipDetailPage();" title="Manage contest submitted">Contest Submission</div> <div  OnClick="FloatPanel_AyohaRewardVoucher_VoucherRecipentsShow_FromMemberDetailsPage()" title="Track Voucher Usage">Voucher Used</div><div  OnClick="FloatPanel_AyohaRewardEvent_RespondListShow_FromMemberDetailsPage()"   title="View Respond from membership event invitation">Event Respond</div><div  OnClick="FloatPanel_MembershipDetailsPage_LoadLastLogin();"  title="Show last login date from this member">View Last Login On</div></div>',
           html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold;cursor: pointer;" onclick="FloatPanel_MembershipDetailsPage_MessageShowStg()">+ Message</div>'
        },
        {
            xtype:'spacer',
            width:15
            },

    ]
    
    },


           {
            xtype: 'container',
    width: '100%',
    //flex:2,
    height: 100,
    //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: grey;',
    //style: 'background-color:white;',
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_profileImg',
    
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },

    items:[
{
    xtype: 'container',
    width: '53.8%',
    margin:'-170 0 0 0',
    //flex:2,
    height: 240,
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius:50%',
    //style: 'background-color:black;',
    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_profileImg_inner',
    
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },
    items:[
        {
            xtype: 'button',
           // id: 'btnMyAccount_DashboardPicProfileIconxx',
            width: 248,
            height: 238,
           margin: '0 0 0 -20',
            // iconCls: 'list',
            //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
          
            id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_MemberPic',
            html: '<div ><img src="resources/icons/founder.jpg" style ="width:238px;height:238px;border-radius:50%;border:2px none white;" alt="Company Name"></div>',
            ui: 'plain',
            handler: function () {


            }
        },
    ]

}




    ]
           },
           {
            xtype: 'container',
            width: '100%',
            //flex:2,
            height: 60,
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            //style: 'background-color:white;',
            
            id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Name',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center',
            },
            items:[
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_MemberName',
                    html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:18px;font-weight:bold">Tarmizi Bin Rahim</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_LastAccess',
                    html: '<div style="width:100%;text-align:center;color:#959595;font-family: Arial; font-size:12px;font-weight:bold"><i>Last Access:21-05-2023 04:26:41PM</i></div>'
                },
            ]
           },

           {
            xtype: 'container',
            width: '100%',
            //flex:2,
            height: 330,
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: white;border-radius:0px 0px 30px 30px',
            //style: 'background-color:white;',
            
            id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    //flex:2,
                    height: 10,
                },
{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:white;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_1',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">Mobile Phone No</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_MobilePhone',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">0133376958</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:normal">Email</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Email',
                    html: '<div style="width:100%;text-align:right;color:blue;font-family: Arial; font-size:12px;font-weight:bold">tarmizi.rahim@ianmizi.com</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
    ]
},
////////////////////////////////////////





{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:white;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_2',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">D.O.B</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_DOB',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">19/2/1983</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:normal">Gender</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Gender',
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:bold">Male</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
    ]
},






{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:white;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_3',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">Postage Address</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Address',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:normal">Country</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Country',
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
    ]
},
         





{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:white;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_4',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">State</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_State',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA.</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:normal">Postcode</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Postcode',
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:bold">71800</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
    ]
},






{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:white;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_5',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">profession</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Profession',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:normal">Hobby/Interested</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_Interested',
                    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
    ]
},
   


{
    xtype: 'container',
    width: '100%',
    //flex:2,
    height: 50,
  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
    style: 'background-color:transparent;',    
    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details_6',
    
    layout: {
    type: 'hbox',
    pack: 'start',
    align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '4%',
            //flex:2,
            height: 40,
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left',
            },
            items:[
                {

            
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:normal">Access Platform</div>'
                },
                {

                    id:'htmlFloatPanel_MembershipDetailsPages_MemberProfile_AccessPlatform',
                    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;font-weight:bold">NA</div>'
                },
               
            ]
        },
        {
            xtype: 'container',
            width: '46%',
            //flex:2,
            height: 40,
           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
            style: 'background-color:white;',
            
            //id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Details',
            
            layout: {
            type: 'vbox',
            pack: 'start',
            align: 'right',
            },
            items:[
            // {

            
                  //  html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:14px;font-weight:bold">Programming</div>'
               // },
               {
                xtype: 'container',
                style: 'background-color: transparent;',
               // margin: '-12 0 0 -7',
               width: '100%',
               //flex:2,
              // height: 40,
                layout: {

                    type: 'hbox',
                    pack: 'end',
                    align: 'right'
                },
                items: [
                     
                           {
                               xtype: 'button',
                               height: 28,
                               width: 28,
                             //  hidden: true,
                               margin: '0 0 0 0',
                               id: 'btnFloatPanel_MembershipDetailPage_FB',
                               //badgeText: "2",
                               html: '<div ><img src="resources/icons/Facebooklogo.png" width="18" height="18" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                                   // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                   var task = Ext.create('Ext.util.DelayedTask', function () {
                                       FloatPanel_PreviewAdvertisement_OpenFB();
                                   });
                                   task.delay(150);



                               }
                           },
                            {
                                xtype: 'button',
                                height: 28,
                                width: 28,
                                margin: '0 0 0 0',
                               // hidden: true,
                                id: 'btnFloatPanel_MembershipDetailPage_Insta',
                                //badgeText: "2",
                                html: '<div ><img src="resources/icons/instagram.png" width="18" height="18" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                    // alert(GetEnterpriseInstagram());




                                    // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                       // FloatPanel_PreviewAdvertisement_OpenInsta();
                                    });
                                    task.delay(150);




                                }
                            },
                           {
                               xtype: 'button',
                               height: 28,
                               width: 28,
                               // hidden: true,
                               margin: '0 0 0 0',
                               id: 'btnFloatPanel_MembershipDetailPage_Tiktok',
                               //badgeText: "2",
                               html: '<div ><img src="resources/icons/TikToklogo.jpg" width="18" height="18" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                                   //  globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                   var task = Ext.create('Ext.util.DelayedTask', function () {
                                      // FloatPanel_PreviewAdvertisement_OpenLocation();
                                   });
                                   task.delay(150);





                               }
                           },
                           
                             {
                                 xtype: 'button',
                                 height: 28,
                                 width: 28,
                                 margin: '0 0 0 0',
                                // hidden: true,
                                 id: 'btnFloatPanel_MembershipDetailPage_Wassap',
                                 //badgeText: "2",
                                 html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                 ui: 'plain',
                                 handler: function () {



                                     // window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                     //  window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);




                                     // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                     var task = Ext.create('Ext.util.DelayedTask', function () {
                                         //FloatPanel_PreviewAdvertisement_OpenWhatsApp();
                                     });
                                     task.delay(150);




                                 }
                             },
                ]
            },
                // {

            
                //     html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:10px;font-weight:normal">Social Media</div>'
                // },
            ]
        },
        {
            xtype: 'container',
            style: 'background-color:white;',
            width: '4%',
            //flex:2,
            height: 50,
        },
    ]
},
            ]
           },
    




           ]
       },
{

xtype: 'container',
width: '1%',
//flex:1,
height: 700,
style: 'background-color:transparent;',
},



{
    xtype: 'container',
    width: '68%',
    height: 700,    
    id: 'containerFloatPanel_MembershipDetailsPages_MembershipCardMasterInfo',
   // style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',   
    style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    layout: {
    type: 'vbox',
    pack: 'start',
    align: 'left',
    },
    items:[
{
    xtype: 'container',
    margin: '0 0 0 0',
    id: 'containerFloatPanel_MembershipDetailsPages_MembershipCardMasterInfoInner',
   // style: 'background-image: url("resources/icons/sampleMembershipDetailInfo.png"); background-size: 100% 100%;background-repeat:no-repeat',
   style: 'background-color:transparent;',
   height:'100%',
    width: '100%',
    items:[
        {
            xtype: 'list',
            width: '100%',                                        
            //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore,
            store: _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore,
            id: 'FloatPanel_MembershipDetailsPages_MembershipCardMasterInfoInnerListID',
            mode: 'SINGLE',
            height: 700,
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
            style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
            itemTpl: '<div class="myContent">' +



'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;height:400px" class="tg">' +
'<colgroup>' +
'<col style="width: 211.2px">' +
'<col style="width: 25.2px">' +
'<col style="width: 228.2px">' +
'<col style="width: 25.2px">' +
'<col style="width: 25.2px">' +
'<col style="width: 260.2px">' +
'<col style="width: 25.2px">' +
 '<col style="width: 25.2px">' +
'<col style="width: 200.2px">' +
'</colgroup>' +
'<thead>' +
'<tr>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">' +
'<span style="font-weight:bold;font-size:16px">Membership Card</span>' +
'</th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Membership Card Info</th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Status</th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
'<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">Membership Date</th>' +
'</tr>' +
'</thead>' +
'<tbody>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="4"><img src="{MembershipCardBackgroundImg}" alt="Image"  style="width:190px;height:100px;border-radius:10%"><br>'+
'<div class="vertical-menu">' +
'<a style="text-decoration:none;border-bottom:1px solid #ccc;" href="javascript:FloatPanel_MembershipDetailsShow_MyMembershipCard(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{SubscriberAccNo}' + "'" + ', {ID},' + "'" + '{MembershipApprovalStatus}' + "'" + ');">View Membership Card</a>' +
'<a style="text-decoration:none;border-bottom:1px solid #ccc" href="javascript:FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(' + "'" + '{SubscriberAccNo}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ');">Membership Card Approval</a>' +
//'<a style="text-decoration:none;border-bottom:1px solid #ccc" href="#">Membership Card Setting</a>' +
'</div>'+
'</td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="8">' +
'Membership Card Name<br><b>{MembershipCardName}</b><br><br>' +
'Membership Card Level<br><b>{MembershipLevel}</b><br><br>' +
'Membership Card Fee<br><b>{MembershipFee}</b><br><br>' +
'Fee Payment Cycle<br><b>{MembershipCardFeePaymentCycle}</b><br><br>' +
'Membership Card Expired Date<br><b>{ValidUntilDate}</b><br><br>' +
'is Membership Card Required Approval?<br><b>{IsRequiredMembershipFee}</b><br><br>' +
'Membership Card Code<br><b>{MembershipCardCode}</b><br><br>' +
'Membership Referral By:<br><b>{ReferalSubscriberAccNo}</b>' +
'</td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="8">' +
'Membership Status<br><b>{ModifiedMembershipApprovalStatus}</b><br>' +
'Membership Status Created By<br><b>{ModifiedBy}</b><br><br>' +
'Membership Status Created Date<br><b>{ModifiedDate}</b><br><br>' +
'<div style="width:100%;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;margin:7px 0px 0px 0px;">Membership Card Payment Info<br><br></div>'+
//'<div style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;width:10px:height:20px;>Membership Card Payment Info</div><br><br>' +
'Payment Method<br><b>{MembershipFeePaymentMethod}</b><br><br>' +
'Payment Document/Link<br><a href="{MembershipPaymentLink}" target="_blank">{MembershipPaymentLink}</a><br><br>' +
'Received Amount<br><b>{ReceivedAmount}</b><br><br>' +
'Remarks<br><b>{Remarks}</b>' +
'</td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"><b>{MembershipDate}</b></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">Payment Date<br><b>{MembershipPaymentDate}</b></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:white;border-color:#ffffff;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal;font-weight:bold">{MembershipApprovalStatus}</td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
'</tr>' +
'<tr>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
'<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
'</tr>' +
'</tbody>' +
'</table>'+










                // '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:470px" class="tg">' +
                // '<thead>' +
                // '<tr>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"><span style="font-weight:bold">Subscribed Membership Card</span></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Membership Card Info</th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Status</th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></th>' +
                // '<th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">Membership Date</th>' +
                // '</tr></thead>' +
                // '<tbody>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="4"><img src="https://setkita.com/AyohaImgCard/BackgroundImgCard/13694-0123456789-NoEnterprise/bg01.jpg" alt="Image" width="200" height="159"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Name<br>{MembershipCardName}</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Status</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">17/5/2025</td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Level</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Status Created By</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">Membership Status</td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Fees(RM)</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Status Created Date</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal">APPROVED</td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Fee Payment Cycle</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Payment Record</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Membership Card Expiry Date</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Payment Method</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>'+
                // '<tr>'+
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Membership Card Required Approval</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal">Payment Document Reference</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>'+
                // '<tr>'+
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Membership Card Code</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Received Amount</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>'+
                // '<tr>'+
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Membership Referal By:</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Remarks</td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>' +
                // '<tr>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal"></td>' +
                // '<td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal"></td>' +
                // '</tr>' +
                // '</tbody>' +
                // '</table>'+
       
                   '</div>',
      
            emptyText: 'No Redemption',
          
            listeners: {
                itemswipe: function (list, idx, target, record, evt) {
            


                } // itemswipe
            }

        },
    ]
}

    ]
},




{

xtype: 'container',
width: '1%',
//flex:1,
height: 700,
style: 'background-color:transparent;',
},


    ]
},
{
    xtype: 'container',
    style: 'background-color:transparent;',
    height: 40,
    width: '100%',
},
{
    xtype: 'container',
    style: 'background-color:transparent;',
    height: 600,
    width: '100%',
    // style: 'border:2px solid #D25959;',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center'
    },
    items:[
        {
            
            xtype: 'container',
            width: '1.5%',
            //flex:1,
            height: 600,
            style: 'background-color:transparent;',
            },
        {
            xtype: 'container',
            style: 'background-color:transparent;',
            height: 600,
            width: '66%',
            // style: 'border:2px solid #D25959;',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                   // hidden:true,
                    //flex:2,
                    height: 340,
                    //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:5%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                    //style: 'border-right:3px none #ECF0F1;border-left:3px none #ECF0F1;border-bottom:3px none #ECF0F1;border-top:3px none #ECF0F1 ;background: white;',
                    id: 'containerFloatPanel_MembershipDetailsPages_MembershipActivity',
                    style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
                    //style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',
                    //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:3%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                    layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left',
                    },
                    items: [
                    
                        {
                            xtype: 'container',
                            width: '100%',
                            //flex:2,
                            height: 40,
                            //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:22px 22px 0px 0px;',
                            height: 40,
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                            
                            id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_MembershipActivity_Header',
                            
                            layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                            },
                        
                            items:[
                                {
                                    xtype:'spacer',
                                    width:10
                                },
                                {
                        
                                   margin:'7 0 0 10',
                                   html: '<font size=3 color=black><b><u>Latest Membership Activity</u></b></font>'
                                  //  html: '<div style="width:100%;text-align:left;color:white;font-family: Arial; font-size:12px;font-weight:bold">MEMBERSHIP INFO</div>'
                                },
                       
                                {
                                    xtype:'spacer'
                                },
                                {
                                    xtype: 'button',
                                    height: 28,
                                    width: 100,
                                    // hidden: true,
                                    margin: '10 0 0 0',
                                   // id: 'btnFloatPanel_MembershipDetailPage_Review_n_Rate_All',
                                    //badgeText: "2",
                                    html: '<div style="width:100%;height:28;text-align:center;vertical-align:middle;color:blue;font-family: Arial; font-size:12px;font-weight:bold" ><u>View All</u></div>',
                                    ui: 'plain',
                                    handler: function () {
                
                                        FloatPanel_MembershipActivityShow();
                
                
                
                
                                    }
                                },
                        
                            ]
                            
                            },


                            {
                                xtype: 'panel',
                                width: '100%',
                             //   hidden: true,
                               // id:'panelHeaderSubscriberListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:38.5%;padding:0px 0px"><b>Campaign Name</b></div ><div style="float:left;width:29%;"><b>Activity</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'
                                      //  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                    
                       
                            {
                                xtype: 'list',
                                //  flex: 1,
                                width: '100%',
                                store: _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore,
                                //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                               // id: 'FloatPanel_SubscriberList_SubscriberListID',                                         
                                // grouped: true,
                                mode: 'SINGLE',
                              
                               
                               // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                disableSelection: true,
                              

                                    itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                  
                                     
                                                            
                                   
                                  // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                   '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img  src="resources/icons/transparentbox.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+



                                        '</div>',
                                        emptyText: '<div class="myContent">No Activity</div>',
                               height: 230,
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
                        xtype: 'container',
                        width: '100%',
                        height:20,
                    },

                    {
                        xtype: 'container',
                        width: '100%',
                       // hidden:true,
                        //flex:2,
                        height: 340,
                        //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:5%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                        //style: 'border-right:3px none #ECF0F1;border-left:3px none #ECF0F1;border-bottom:3px none #ECF0F1;border-top:3px none #ECF0F1 ;background: white;',
                        id: 'containerFloatPanel_MembershipDetailsPages_NotificationActivity',
                        style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
                       // style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',
                        //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:3%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                        layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left',
                        },
                        items: [
                        
                            {
                                xtype: 'container',
                                width: '100%',
                                //flex:2,
                                height: 40,
                                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:22px 22px 0px 0px;',
                                height: 40,
                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                
                                id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_MembershipNotification_Header',
                                
                                layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                                },
                            
                                items:[
                                   
                                    {
                                        xtype:'spacer',
                                        width:10
                                    },
                                    {
                            
                                       margin:'7 0 0 10',
                                       html: '<font size=3 color=black><b><u>Latest Notification</u></b></font>'
                                      //  html: '<div style="width:100%;text-align:left;color:white;font-family: Arial; font-size:12px;font-weight:bold">MEMBERSHIP INFO</div>'
                                    },
                           
                                    {
                                        xtype:'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        height: 28,
                                        width: 100,
                                        // hidden: true,
                                        margin: '10 0 0 0',
                                       // id: 'btnFloatPanel_MembershipDetailPage_Review_n_Rate_All',
                                        //badgeText: "2",
                                        html: '<div style="width:100%;height:28;text-align:center;vertical-align:middle;color:blue;font-family: Arial; font-size:12px;font-weight:bold" ><u>View All</u></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            FloatPanel_NotificationActivityShow();
                                          //  FloatPanel_MembershipActivityShow();
                    
                    
                    
                    
                                        }
                                    },
                            
                           
                            
                                ]
                                
                                },
                        
                           
                        

                                {
                                    xtype: 'panel',
                                    width: '100%',
                                 //   hidden: true,
                                   // id:'panelHeaderSubscriberListListID',
                                   // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                    //height: 50,
                                    items: [
                                        {
                                          //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                           // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                           // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                            html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:16.5%;padding:0px 0px"><b>Messaging Tool</b></div ><div style="float:left;width:57.5%;"><b>Message</b></div><div style="float:left;width:7.5%;"><b>IsRead</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'

                                            
                                        }
                                    ]
                                },
                        
                           
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    width: '100%',
                                    store: _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore,
                                    //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                   // id: 'FloatPanel_SubscriberList_SubscriberListID',                                         
                                    // grouped: true,
                                    mode: 'SINGLE',
                                  
                                   
                                   // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                    style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                    disableSelection: true,
                                  
    
                                        itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                      
                                         
                                                                
                                       
                                      // '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:8%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:39.2%;color:black;font-size:12px;">{ModifiedCampaignName}</div><div style="float:left;width:30%;color:black;font-size:12px;">{TblActivity} - {LoyaltyActivity}</div><div style="float:left;width:20%;color:black;font-size:12px;">{UpdatedDate}</div><div style="float:left;width:2.5%;color:black;font-size:12px;"><img onclick="FloatPanel_MembershipDetailsPage_Activitype(`{TblActivity}`,`{CampaignCode}`)"  src="resources/icons/viewCardPurpleExt.png"  style="width:27px;height:27px;margin:-3px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div></div></div></div>'+
                                       '<div  style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;"><div style="float:left;width:5%;color:black;font-size:12px;">{RowNumber}).</div ><div style="float:left;width:17%;color:black;font-size:12px;">{NotificationMedium}</div><div style="float:left;width:56%;color:black;font-size:12px;word-wrap: break-word">Title:<b><u>{NotificationTitle}</u></b><br>{NotificationBody}<br><br>Sent Date:{SentDate}</div><div style="float:left;width:10%;color:black;font-size:12px;text-align:center">{IsRead}</div><div style="float:left;width:12%;color:black;font-size:12px;padding:0px 0px">{ReadDate}</div></div></div></div>'+
    
    
    
                                            '</div>',
                                            emptyText: '<div class="myContent">No Notification History</div>',
                                   height: 250,
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






            {
            
            xtype: 'container',
            width: '1%',
            //flex:1,
            height: 600,
            style: 'background-color:transparent;',
            },
            
            {
                xtype: 'container',
                width: '30%',
                //flex:2,
                height: 600,
                style: 'background: transparent;',
             //   hidden:true,    
                id: 'containerFloatPanel_MembershipDetailsPages_Panel3_Outter',
                
                layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left',
                },
                items:[
            
            
            
            
            
            
                        {
                            xtype: 'container',
                            width: '100%',
                            //flex:2,
                            height: 340,
                        
                          // style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',

                          // style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',
                           style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
                            id: 'containerFloatPanel_MembershipDetailsPages_UnclaimRedemption',
                            
                            layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left',
                            },
                            items: [
                            
                                {
                                    xtype: 'container',
                                    width: '100%',
            
                                    //flex:2,
                                    height: 40,
                                   // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:22px 22px 0px 0px;',
                                   // style: 'background-color:white;',
                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                         
                                    id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_UnclaimRedemption_Header',
                                    
                                    layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left',
                                    },
                                
                                    items:[
                                       
                                        {
                                
                                           margin:'7 0 0 10',
                                           height:40,
                                           html: '<font size=3 color=black><b><u>UnClaim Redemption</u></b></font>'
                                          //  html: '<div style="width:100%;height:50;text-align:left;vertical-align:middle;color:white;font-family: Arial; font-size:12px;font-weight:bold"><div style="margin:15px 0px 0px 0px">UNCLAIM REDEMPTION!</div></div>'
                                        },
                                        {
                                            xtype: 'list',
                                            width: '100%',                                        
                                            store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore,
                                            //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore,
                                            id: 'FloatPanel_VIEWRedemptionListList_MembershipDetailsPageID',
                                            mode: 'SINGLE',
                                            height: 240,
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
                                            style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                            itemTpl: '<div class="myContent">' +
                        
                                        //  '<div style="overflow:auto;width:100%;height:100%;"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:left;width:35.5%">{RedeemHistoryStatusDate}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:left;width:33%">{ModifiedRedeemInfo}</div><div style="float:left;width:33%">{ModifiedRedeemPrizeImage}<br><div style="margin:-11px 0px 0px 0px"><b>{RedeemPrizeName}</b></div></div></div>' +
                        
                        
                                        //      '</div>',
                        
                                            // '<div style="overflow:auto;width:100%;height:100%;"><table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 185.2px"><col style="width: 240.2px"></colgroup><thead><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">{RedeemHistoryStatusDate}</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="8">{ModifiedRedeemPrizeImage}<br><div style="margin:-11px 0px 0px 0px"><b>{RedeemPrizeName}</b></div></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Date</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">.</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">{ModifiedRedeemInfo_memberdetail}</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Info</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">.</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">NEW</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Status</td></tr></thead></table></div>' +
                        
                                                   '<div style="overflow:auto;width:100%;height:100%;" onclick="FloatPanel_VIEWRedemptionListShow_SubscriberAccNo(' + "'" + '{RedeemHistoryStatusBy}' + "'" + ')"><table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 240.2px"><col style="width: 185.2px"></colgroup><thead><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">{RedeemHistoryStatusDate}</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="8"><img src="{ModifiedRedeemPrizeImage_memberDetails}" alt="Image" width="100" height="100"><br>{RedeemPrizeName}<br><br></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Date</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">.</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">{ModifiedRedeemInfo_memberdetail}</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Info</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">.</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:bottom;word-break:normal">NEW</td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Redeem Status</td></tr></thead></table></div>'+
                                             
                                                   '</div>',
                                      
                                            emptyText: 'No Redemption',
                                          
                                            listeners: {
                                                itemswipe: function (list, idx, target, record, evt) {
                                            
                        
                        
                                                } // itemswipe
                                            }
                        
                                        },
                                
                                    ]
                                    
                                    },
                            
                            
                            
                            
                            
                            ]
                            },
                        
            ////////////////////////////////
            
                    {
                        xtype: 'container',
                        width: '100%',
                        height:20,
                    },
            
            //////////////////////////////////
            
            
            
            {
                xtype: 'container',
                width: '100%',
                //flex:2,
                height: 340,
              // style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:10%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                //style: 'background-color:white;',
                //style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',
                style: GetTableBorder()+"background: white;border-radius:2%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
                // style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:5%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                id: 'containerFloatPanel_MembershipDetailsPages_Review_n_Rate',
                
                layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left',
                },
                items: [
                
                    {
                        xtype: 'container',
                        width: '100%',
                        //flex:2,
                       // height: 45,
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:22px 22px 0px 0px;',
                       // style: 'background-color:white;',
                       height: 40,
                       style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                        id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_Review_n_Rate_Header',
                        
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },
                    
                        items:[
                           
                            {
                    
                               margin:'7 0 0 10',
                               height:40,
                               html: '<font size=3 color=black><b><u>Review And Rate</u></b></font>'
                               // html: '<div style="width:100%;height:50;text-align:left;vertical-align:middle;color:white;font-family: Arial; font-size:12px;font-weight:bold"><div style="margin:15px 0px 0px 0px">REVIEW AND RATE</div></div>'
                            },
                            {
            xtype:'spacer'
                            },
                            {
                                xtype: 'button',
                                height: 28,
                                width: 100,
                                // hidden: true,
                                margin: '0 0 0 0',
                                id: 'btnFloatPanel_MembershipDetailPage_Review_n_Rate_All',
                                //badgeText: "2",
                                html: '<div style="width:100%;height:28;text-align:center;vertical-align:middle;color:blue;font-family: Arial; font-size:12px;font-weight:bold" ><u>View All</u></div>',
                                ui: 'plain',
                                handler: function () {
            
                                    AyohaMerchantReviewShow_FromDashboard();
            
            
            
            
            
                                }
                            },
                           
                    
                        ]
                        
                        },
                
                
                        {
                            xtype: 'list',
                            width: '100%',
                            height: 240,
                            // flex: 1,
                          //  store: 'Dashboard_AyohaMerchantReviewLoadByEnterpriseAccNoStore',
                           // store: 'AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore',
                            store:_DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore,
                            id: 'FloatPanel_MembershipDetailsPages_MemberProfile_inner_Review_n_Rate_ListID',
                            mode: 'SINGLE',
                            scrollable:true,
                            // width: '100%',
                            disableSelection: true,
                            style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                            itemTpl: '<div class="myContent" style="background-color:white;width:104%;">' +
            
             '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:{ReviewTxtHeightList};"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;width:4%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 10px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:95%;vertical-align:top;"><div style="width:100%;background-color: transparent;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color:white;"><div style="width:90%;float: left;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-10px 0px 0px 0px;height:45px;">{ModifiedReviewTxt}</div><div style="background-color: white;margin-left: 90%;height:45px;"><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:blue;font-weight:bold;margin:-15px 0px 0px 0px;width:50px;height:25px;z-index:9;position: relative" onclick="AyohaMerchantReview_ReplyShow_Add(' + "'" + '{ReviewCode}' + "'" + ',' + "'" + '{ItemCodeReview}' + "'" + ');"><u>Reply</u></div><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-27px 0px 0px 0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="AyohaMerchantReview_Delete(' + "'" + '{ReviewCode}' + "'" + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px;" /></button></div></div></div></td></tr></table>' +
                          
                                                                                  '</div>' ,
            
                            //    '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:110px;"><tr onclick="openDashboard_AyohaMerchantReviewPanel({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;width:4%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 10px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:95%;vertical-align:top;"><div style="width:100%;background-color: transparent;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedReviewTxt}<br><br><br></div></td></tr></table>' +
            
                            //       '</div>' +
                            //  '<br>' +
                            //  '{ModifiedBottomButton}',
                            //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:white;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipiednt__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/like02.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>',
            
            
            
            
                            //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="Dashboard_AyohaMerchantReviewLike({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 30px;" /></button></div>',
                            //height: '100%',
            
                            emptyText: 'No Review Yet',
            
            
                        },
                
                
                ]
                },
            
            
            
            
            {
                xtype: 'container',
                width: '100%',
                height:20,
            },
            
            
            
            
            //////////////////////////////////////////
            
            {
                xtype: 'container',
                width: '100%',
                hidden:true,
                //flex:2,

                height: 180,
               //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:10%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
              // style: 'background-color:white;',  
              style: 'border-right:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-top:1px solid #CCCCCC;background: white;border-radius:2%;',
            //style: 'border-right:3px solid #ECF0F1;border-left:3px solid #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:3px solid #ECF0F1 ;background: white;border-radius:5%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                id: 'containerFloatPanel_MembershipDetailsPages_AyohaStore',
                
                layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left',
                },
                items: [
                
                 
                    {
                        xtype: 'container',
                        width: '100%',
                        //flex:2,
                        height: 40,
             style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:3px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                        
                        id: 'containerFloatPanel_MembershipDetailsPages_MemberProfile_inner_AyohaStore_Header',
                        
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },
                    
                        items:[
                           
                            {
            
                                margin:'7 0 0 10',
                                height:40,
                                html: '<font size=3 color=black><b><u>Ayoha Store-New Order!</u></b></font>'
                                 //html: '<div style="width:100%;height:50;text-align:left;vertical-align:middle;color:white;font-family: Arial; font-size:12px;font-weight:bold"><div style="margin:15px 0px 0px 0px">AYOHA STORE-NEW ORDER!</div></div>'
                             },
                            {
            xtype:'spacer'
                            },
                            {
                                xtype: 'button',
                                height: 28,
                                width: 130,
                                // hidden: true,
                                margin: '0 0 0 0',
                                id: 'btnFloatPanel_MembershipDetailPage_AyohaStore_viewOrderHistory',
                                //badgeText: "2",
                                html: '<div style="width:100%;height:28;text-align:center;vertical-align:middle;color:white;font-family: Arial; font-size:12px;font-weight:bold" ><u>View Order History</u></div>',
                                ui: 'plain',
                                handler: function () {
            var member=globalFloatPanel_MembershipDetailsPage_SubscriberAccNo.replace(globalFloatPanel_MembershipDetailsPage_AccountName,"");
            var membershipFull=globalFloatPanel_MembershipDetailsPage_AccountName+'-'+member;
                                    FloatPanel_AyohaStore_OrderHistoryShow_MemberDetailPage(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,membershipFull);
            
            
            
            
            
                                }
                            },
                            {
                                xtype:'spacer',
                                width:10
                                                },
                    
                        ]
                        
                        },
                   
            
            
                        {
                            xtype: 'list',
                            //  flex: 1,
                            store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore,
                            // id: 'FloatPanel_AyohaStore_OrderHistory_OrderSentListID',
                            mode: 'SINGLE',
                            disableSelection: false,
                           // grouped: true,
                            style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                           
            
                           
            
            
                            itemTpl: '<div class="myContent">' +
                               '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;">{Row_num}).{ClientName}</span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatusOrderPaidOnly}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2">Total Order Item:{TotalQuantity}<br>Grand Total(RM):{GrandTotal}</div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                              '</table><br>' +
                               '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                     '</div>',
                            emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"/><br>No Order',
            
                            width: '100%',
                            height: 110,
                            disableSelection: true,
            
            
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
    //flex:1,
    height: 300,
    style: 'background-color:transparent;',
    },


                ]


            },



             ]




         }







     });
    return _FloatPanel_MembershipDetailsPage;





}


var globalFloatPanel_MembershipDetailsPage_ID;
var globalFloatPanel_MembershipDetailsPage_ChargeSettingCode;
var globalFloatPanel_MembershipDetailsPage_SubscriberAccNo;
var globalFloatPanel_MembershipDetailsPage_AccountName;
var globalFloatPanel_MembershipDetailsPage_PhoneNos;
var globalFloatPanel_MembershipDetailsPage_Email;


function FloatPanel_MembershipDetailsPageShow(SubscriberAccNo,Photos,ModifiedAccountNames,PhoneNos
    ,Emails,DOBs,Genders,CardCounts,MembershipApprovalStatuss,MembershipByMethods,MembershipDate
    ,Latest_ActivityDates,LastloginDates,StreetAddresss,Towns,PostCodes,Countrys,Professions,Hobbys,Statess) {

    Ext.Viewport.remove(_FloatPanel_MembershipDetailsPage);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetailsPage());
    this.overlay.show();
   
    //AddRoutePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");
   // alert(DOBs)
    isFloatPanel_MembershipDetailsPageOpen = 'Y';
    globalFloatPanel_MembershipDetailsPage_SubscriberAccNo=SubscriberAccNo;
    globalDashboard_LatestPointCampaignCode_SubscriberAccNo=SubscriberAccNo;
    globalFloatPanel_MembershipDetailsPage_AccountName=ModifiedAccountNames;
    globalFloatPanel_MembershipDetailsPage_PhoneNos=PhoneNos;
    globalFloatPanel_MembershipDetailsPage_Email=Emails;
   // globalAyohaOtherOnlineStoreDetail_ID = 0;
    //globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo = GetEnterpriseAccNo();
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_MemberPic').setHtml('<div ><img src="'+Photos+'" style ="width:238px;height:238px;border-radius:50%;border:2px none white;" alt="Company Name"></div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_MemberName').setHtml('<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:18px;font-weight:bold">'+ModifiedAccountNames+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_LastAccess').setHtml('<div style="width:100%;text-align:center;color:#959595;font-family: Arial; font-size:12px;font-weight:bold"><i>Last Access On:'+LastloginDates+'</i></div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_MobilePhone').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+PhoneNos+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Email').setHtml('<div style="width:100%;text-align:right;color:blue;font-family: Arial; font-size:14px;font-weight:bold">'+Emails+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_DOB').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+DOBs+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Gender').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Genders+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Address').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+StreetAddresss+','+Towns+'.</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Country').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Countrys+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_State').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Statess+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Postcode').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+PostCodes+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Profession').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Professions+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_Interested').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Hobbys+'</div>');
   Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_AccessPlatform').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">NA</div>');
   
   
//    Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_SubscriberAccNo').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+SubscriberAccNo+'</div>');
//    Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_MembershipDate').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+MembershipDate +'</div>');
//    Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_SubscribedMembershipCard').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+CardCounts +'</div>');
//    Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_LatestActivity').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+Latest_ActivityDates +'</div>');
//    Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_MembershipStatus').setHtml('<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:14px;font-weight:bold">'+MembershipApprovalStatuss +'</div>');


    FloatPanel_MembershipDetailsPage_MembershipsLoadBySubscriberAccNoStore(SubscriberAccNo);
   
   





    // var containerViewnamecontainerFloatPanel_MembershipDetailsPage_StoreCode = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipDetailsPage_StoreCode]')[0];
    // var containerViewElnamecontainerFloatPanel_MembershipDetailsPage_StoreCode = containerViewnamecontainerFloatPanel_MembershipDetailsPage_StoreCode.element;
    // containerViewElnamecontainerFloatPanel_MembershipDetailsPage_StoreCode.on('tap',
    //   function (event, node, options, eOpts) {

    //       FloatPanel_OnlineStoreListShow();
    //   }
    // );
}



var globalAyohaOtherOnlineStoreDetail_ID;
var globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreCode;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreURL;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreName;
var globalAyohaOtherOnlineStoreDetail_OnlineStoreIconPath;
function FloatPanel_MembershipDetailsPageEditShow(ID, EnterpriseAccNo, OnlineStoreCode, OnlineStoreURL, OnlineStoreName, OnlineStoreIconPath) {

    Ext.Viewport.remove(_FloatPanel_MembershipDetailsPage);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetailsPage());
    this.overlay.show();
 //   AddRoutePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");
    isFloatPanel_MembershipDetailsPageOpen = 'Y';
    //globalFloatPanel_MembershipDetailsPage_ID = ID;
    //globalFloatPanel_MembershipDetailsPage_ChargeSettingCode = ChargeSettingCode;
    //globalFloatPanel_StoreCode_ChargeCode = StoreCodeCode;
    //globalFloatPanel_FreeConditionDeliveryCharge_FC_Code = FreeDeliveryConditionCode;
    globalAyohaOtherOnlineStoreDetail_ID=ID;
    globalAyohaOtherOnlineStoreDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreCode = OnlineStoreCode;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreURL = OnlineStoreURL;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreName = OnlineStoreName;
    globalAyohaOtherOnlineStoreDetail_OnlineStoreIconPath = OnlineStoreIconPath;
    
    document.getElementById('input-FloatPanel_MembershipDetailsPage_StoreCode').value = OnlineStoreCode;
    document.getElementById('input-FloatPanel_MembershipDetailsPage_OnlineStoreName').value = OnlineStoreName;
    document.getElementById('input-FloatPanel_MembershipDetailsPage_OnlineStoreURL').value = OnlineStoreURL;
    //document.getElementById('input-FloatPanel_MembershipDetailsPage_StoreCode').value = StoreCodes;
    //document.getElementById('input-FloatPanel_MembershipDetailsPage_FreeDelivery').value = FreeCondition;

    //globalFloatPanel_DialogBox_Code = ChargeSettingCode;
    //globalFloatPanel_DialogBox_EnterpriseAccNo = GetEnterpriseAccNo();

    //if (IsEnableDeliveryChargeSetting == "Y") {
    //    document.getElementById("checkbox-FloatPanel_MembershipDetailsPage_EnableChargeSetting").checked = true;
    //} else {
    //    document.getElementById("checkbox-FloatPanel_MembershipDetailsPage_EnableChargeSetting").checked = false;
    //}

    //FloatPanel_StoreCodeSetStoreCodeLbl(StoreCodes);
    //FloatPanel_MembershipDetailsPage_SetValue(StoreCodeCode, DeliveryRate_Charge);

    //var containerViewnamecontainerFloatPanel_MembershipDetailsPage_FreeDelivery = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipDetailsPage_FreeDelivery]')[0];
    //var containerViewElnamecontainerFloatPanel_MembershipDetailsPage_FreeDelivery = containerViewnamecontainerFloatPanel_MembershipDetailsPage_FreeDelivery.element;
    //containerViewElnamecontainerFloatPanel_MembershipDetailsPage_FreeDelivery.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_FreeConditionDeliveryChargeShow();
    //  }
    //);

    var containerViewnamecontainerFloatPanel_MembershipDetailsPage_StoreCode = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipDetailsPage_StoreCode]')[0];
    var containerViewElnamecontainerFloatPanel_MembershipDetailsPage_StoreCode = containerViewnamecontainerFloatPanel_MembershipDetailsPage_StoreCode.element;
    containerViewElnamecontainerFloatPanel_MembershipDetailsPage_StoreCode.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_OnlineStoreListShow();
      }
    );


    FloatPanel_MembershipDetailsPage_MembershipsLoadBySubscriberAccNoStore();
}




function FloatPanel_MembershipDetailsPageHide() {
    if (isFloatPanel_MembershipDetailsPageOpen == 'Y') {
        _FloatPanel_MembershipDetailsPage.hide(); isFloatPanel_MembershipDetailsPageOpen = 'N';
       // RemovePages(_FloatPanel_MembershipDetailsPage, "isFloatPanel_MembershipDetailsPageOpen");
    }
}




function FloatPanel_MembershipDetailsPage_MembershipsLoadBySubscriberAccNoStore(SubscriberAccNo) {


   

    _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPage');
    _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        var count = parseInt(_DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getCount());

    

        countMembershipsLoadBySubscriberAccNoStoreFirst = _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getCount();
        FloatPanel_MembershipDetailsPage_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore('Submitted',GetCurrentYear(),SubscriberAccNo)
 
       
      
        Ext.Viewport.setMasked(false);










    });
    task.delay(200);




}



function FloatPanel_MembershipDetailsPage_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore(RedeemHistoryStatus,Year,SubscriberAccNo) {


   


    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('RedeemHistoryStatus', RedeemHistoryStatus);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('Year', Year);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEW_RedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNo');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
        //_DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

        var count = parseInt(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getCount());
        FloatPanel_MembershipDetailsPage_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore('OrderPaid','blue',Year,SubscriberAccNo);
     

       // countMembershipsLoadBySubscriberAccNoStoreFirst = _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore.getCount();
        //Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
        
       
        
        Ext.Viewport.setMasked(false);










    });
    task.delay(200);




}



function FloatPanel_MembershipDetailsPage_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore(OrderStatus,color,Year,SubscriberAccNo) {
   
    FloatPanel_MembershipDetailsPage_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore('AyohaStoreReview',SubscriberAccNo,Year);
       
   
   
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.clearFilter();
    // globalFloatPanel_AyohaStore_OrderHistory_OrderStatus = OrderStatus;
    // globalFloatPanel_AyohaStore_OrderHistory_Color = color;
    // globalFloatPanel_AyohaStore_OrderHistory_Year=Year;
  

    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getProxy().setExtraParam('OrderStatus', OrderStatus);
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getProxy().setExtraParam('Year', globalFloatPanel_AyohaStore_OrderHistory_Year);
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchant');
    // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.load();



    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore.getCount();
        
       

       

    // });
    // task.delay(200);


    // Ext.Viewport.setMasked(false);
}


function FloatPanel_MembershipDetailsPage_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore(ItemCodeReview,SubscriberAccNo,Year) {
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.clearFilter();
   

   
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getProxy().setExtraParam('ItemCodeReview', ItemCodeReview);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getProxy().setExtraParam('Year', Year);   
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccAndSubscriberAccNoNoStore.getCount();
    
        FloatPanel_MembershipDetailsPage_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNo("Limit");
        //if (OrderStatus == "All Orders") {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

        //} else {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

        //}

       

    });
    task.delay(200);


    Ext.Viewport.setMasked(false);
}


var globalMembershipActivityCount;
//var _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore;
function FloatPanel_MembershipDetailsPage_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNo(Limit) {

    globalMembershipActivityCount=0;

    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.clearFilter();
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getProxy().setExtraParam('Limit', Limit);
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNo');
    _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore.getCount();
        globalMembershipActivityCount=count;
        if(isFloatPanel_MembershipActivityOpen=="Y"){
            document.getElementById("input-MembershipActivity").value='';
            Ext.getCmp('htmlFloatPanel_MembershipActivity_Count').setHtml('<font size="2" color="black"><b>(' + globalMembershipActivityCount + ')</b></font>');
        }
      // alert(count);
      FloatPanel_MembershipDetailsPage_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore('Limit');
      // LoadingPanelHide();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(100);











}

function FloatPanel_MembershipDetailsPage_Activitype(ActivityTbl,CampaignCode){

    // alert(ActivityTbl)
    // alert(CampaignCode)
   if(ActivityTbl=="Contest Status"){
    FloatPanel_AyohaContest_ManageParticipantListShow(CampaignCode);
   }

   if(ActivityTbl=="Event Respond"){
    FloatPanel_AyohaRewardEvent_RespondListShow(CampaignCode,'','')
   }
   if(ActivityTbl=="Memberships Status"){
  
    FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,CampaignCode);
   }
   

   
   if(ActivityTbl=="Ayoha Store"){
  
    FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,CampaignCode);
   }

 
   if(ActivityTbl=="Stamp Collected"){
  
    FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,CampaignCode);
   }

   if(ActivityTbl=="Point Collected"){
  
    FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,CampaignCode);
   }
   
  
}
    





//_DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore

var globalNotificationActivityCount;
//var _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore;
function FloatPanel_MembershipDetailsPage_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore(Limit) {

    globalNotificationActivityCount=0;

   
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setExtraParam('Limit', Limit);
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNo');
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.getCount();
        globalNotificationActivityCount=count;
        if(isFloatPanel_NotificationActivityOpen=="Y"){
            document.getElementById("input-NotificationActivity").value='';
            Ext.getCmp('htmlFloatPanel_NotificationActivity_Count').setHtml('<font size="2" color="black"><b>(' + globalNotificationActivityCount + ')</b></font>');
        }
      // alert(count);
       LoadingPanelHide();
       
    _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore.clearFilter();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(100);











}



function FloatPanel_MembershipDetailsPage_Tools_StampedCard(){
    Ext.getCmp('mainView').setHidden(true);
    FloatPanel_MembershipDetailsPageHide();
    FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow();
}



function FloatPanel_MembershipDetailsPage_Tools_CreatePoint(){
    FloatPanel_PointManagement_CreatePointShow_FromMembershipDetailPage(globalDashboard_LatestPointCampaignCode)
}


function FloatPanel_MembershipDetailsPage_LoadLastLogin(){
    var objn = {
        "AccountNo":globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,
    };
    // console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfileLoginLog/AyohaUserProfileLoginLog_LoadLoginDate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
            //  alert (data.results[0].LoginDate)
              Ext.getCmp('htmlFloatPanel_MembershipDetailsPages_MemberProfile_LastAccess').setHtml('<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:12px;font-weight:bold"><i>Last Access On:'+data.results[0].LoginDate+'</i></div>');
             
              //  var dc="DC-"+globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode+"-"+GetEnterpriseAccNo();
              //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card Discount",0,globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode);



            }
            else {

                LoadingPanelHide();
                Ext.Viewport.unmask();
            }


        },

        failure: function (result, request) {
            LoadingPanelHide();
            Ext.Viewport.unmask();
        }

    });
}




function FloatPanel_MembershipDetailsPage_MessageShowStg(){
    FloatPanel_MessagingOptionShow(globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,globalFloatPanel_MembershipDetailsPage_PhoneNos,globalFloatPanel_MembershipDetailsPage_Email,globalFloatPanel_MembershipDetailsPage_AccountName);
}

function FloatPanel_MembershipDetailsPage_openWhatsapp(){

    
       
    
        if(isFloatPanel_MembershipDetailsPageOpen=="Y"){
         //   window.open("https://api.whatsapp.com/send?phone=+6"+globalFloatPanel_MembershipDetailsPage_PhoneNos+" &text=Hi", '_system'); return false;


         var txt = "Hi " + globalFloatPanel_MembershipDetailsPage_AccountName + 
         ",Greeting !,\n\n How are you.\n\nWe truly appreciate your membership with us, and we look forward to connected to you .......\nBest Wishes.\n" + 
         GetEnterpriseName();

// Use encodeURIComponent to encode the text properly
var encodedTxt = encodeURIComponent(txt);

// Open WhatsApp with properly encoded message
window.open("https://api.whatsapp.com/send?phone=+6" + globalFloatPanel_MembershipDetailsPage_PhoneNos + "&text=" + encodedTxt, '_system'); 
return false;






        }else{
            // var txt="Hi "+globalFloatPanel_MembershipDetailsPage_AccountName+", On behalf of our entire team,\n\n I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.\n\nWe truly appreciate your membership with us, and we look forward to celebrating many more milestones with you\nBest Wishes.\n"+GetEnterpriseName()+"";
            // window.open("https://api.whatsapp.com/send?phone=+6"+globalFloatPanel_MembershipDetailsPage_PhoneNos+" &text="+txt, '_system'); return false;


            var txt = "Hi " + globalFloatPanel_MembershipDetailsPage_AccountName + 
            ", On behalf of our entire team,\n\n I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.\n\nWe truly appreciate your membership with us, and we look forward to celebrating many more milestones with you.\nBest Wishes.\n" + 
            GetEnterpriseName();
  
  // Use encodeURIComponent to encode the text properly
  var encodedTxt = encodeURIComponent(txt);
  
  // Open WhatsApp with properly encoded message
  window.open("https://api.whatsapp.com/send?phone=+6" + globalFloatPanel_MembershipDetailsPage_PhoneNos + "&text=" + encodedTxt, '_system'); 
  return false;






//             var txt = "Hi " + globalFloatPanel_MembershipDetailsPage_AccountName + 
//             ", On behalf of our entire team,%0A%0A I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.%0A%0AWe truly appreciate your membership with us, and we look forward to celebrating many more milestones with you.%0ABest Wishes.%0A" + 
//             GetEnterpriseName();
            
//   // URL encode the text to ensure it formats correctly in WhatsApp
//   var encodedTxt = encodeURIComponent(txt);
  
//   // Open WhatsApp web with the properly encoded message
//   window.open("https://api.whatsapp.com/send?phone=+6" + globalFloatPanel_MembershipDetailsPage_PhoneNos + "&text=" + encodedTxt, '_system'); 
//   return false;


           }
   
}



function FloatPanel_MembershipDetailsPage_openEmail(){
   // window.open("mailto:"+globalFloatPanel_MembershipDetailsPage_Email+"?subject=Happy BirthDay !!&body=Hi, On behalf of our entire team, I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.\n\n\n We truly appreciate your membership with us, and we look forward to celebrating many more milestones with you.\n\nBest Wishes.\n\n TQ");
   if(isFloatPanel_MembershipDetailsPageOpen=="Y"){
    window.open("mailto:" + globalFloatPanel_MembershipDetailsPage_Email + 
    "?subject=Greeting from "+GetEnterpriseName()+"!!&body=Hi "+globalFloatPanel_MembershipDetailsPage_AccountName+", How are you ....continued.%0A%0ABest Regards.%0A"+GetEnterpriseName()+"");
   
}else{
    window.open("mailto:" + globalFloatPanel_MembershipDetailsPage_Email + 
    "?subject=Happy BirthDay from "+GetEnterpriseName()+"!!&body=Hi "+globalFloatPanel_MembershipDetailsPage_AccountName+", On behalf of our entire team, I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.%0A%0AWe truly appreciate your membership with us, and we look forward to celebrating many more milestones with you.%0A%0ABest Wishes.%0A"+GetEnterpriseName()+"");
   }
   
  
}



function FloatPanel_MembershipDetailsPage_MasterMembershipDelete(){
    Swal.fire({
        title: 'Confirm Deletion ?',
        text: "Are you sure you want to proceed with deleting this membership account? Deleting this account will permanently remove it from the list, and the member will lose access to all associated membership privileges. Please carefully review your decision before proceeding with this irreversible action.",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: true,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
            
                "SubscriberAccNo": globalFloatPanel_MembershipDetailsPage_SubscriberAccNo,
                "EnterpriseHQAccNo": GetEnterpriseAccNo(),                
                "ModifiedBy": GetCurrentUserAccountNo(),
                "Remarks": "Delete Membership",
            };
            var _value = Ext.Ajax.request({
        
                type: "POST",
        
                url: GetAPIurl() + '/MasterMemberships/MasterMembershipsDelete',
        
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
        
                success: function (result, request) {
        
                    //console.log(result.responseText);
        
        
                    data = Ext.decode(result.responseText.trim());
        
                    if (data.success == "true") {
        
                        FloatPanel_MembershipDetailsPageHide();
                        swalFireSuccesDeletePostReview("Deleted Successfully!");
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            if(globalFloatPanel_SubscriberListShowSources=="FloatPanel_SubscriberListShow"){
                                MasterMembershipsLoadByEnterpriseAccNoStore();
                            }
                            if(globalFloatPanel_SubscriberListShowSources=="FloatPanel_SubscriberListShow_FromMembershipsStatus"){
                                MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore(globalFloatPanel_SubscriberList_MembershipApprovalStatus);
                            }
                           
                        });
                        Ext.Viewport.unmask();
                        task.delay(500);
        
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
    });
}

//html: '<a href="mailto:Admin@IanMizi.com?subject=Regarding Ayoha Merchant Suite &body=Hi,I would like to know more about this system.TQ" title="Click to send an email about Ayoha Merchant Suite"><img src="resources/icons/wired-gradient-177-envelope-send.gif" width="40" height="40" alt="Company Name"></a>',
                                     