Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print', {
});









var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print;

function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print() {
  




    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print = Ext.create('Ext.Container',


       {

           id: '_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintID',
           // xtype: 'panel',
           zIndex: 400,
           xtype: 'container',
           //height: 475,
           height: 700,
           //  height: '60%',
           width: 500,
           draggable: false,

           styleHtmlContent: true,

           centered: true,
           //bottom: 64,
           // zIndex: 100,
           modal: true,
           // hideOnMaskTap: true,
           //left: 10,
           //top:10,
           layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'
           },
           showAnimation: {
               type: 'popIn',
               duration: 150,
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

           //  style: ' background-color:transparent;',
          // style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
           style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',







           items: [
            {
    
                xtype: 'container',
                width: '100%',
                docked: 'top',
                height:30,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

             
               // style:GetHeaderStyle(),
                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                style: 'background-color:white',
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
                             margin: '15 15 0 0',
                             html: '<font size=3 color=black><b>Print & Display Membership Card QR Code</b></font>'
                         },
                                     

                                      {
                                          xtype: 'spacer',

                                      },


                                     
                                      {
                                         xtype: 'button',                                      
                                         height: 30,
                                         width: 35,
                                         margin: '20 0 0 10',
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             // FloatPanel_AyohaReward_TopTenRankingHide();
                                             // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                             isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen = 'N';
                                             _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print.hide(Ext.fx.Animation({
                                                 type: 'popOut',
                                                 //direction: 'left',
                                                 //easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                           //  RemovePages("FloatPanel_AyohaEnterpriseAccount_MembershipCardPageHide()");
                                            // FloatPanel_AyohaStore_LikeDislikeStore_Save();
                                             //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                         
                                            

                                          

                                             FloatPanel_AyohaEnterpriseAccount_Enterprise_MembershipCard_Page_PrintActivityLog_OnClose("MembershipCardPage","1",globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox);

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
    width: '95%',
    height:1,
    style: 'background-color:#d3d3d3',
},
{
    xtype: 'container',
    width: '100%',
    height:10,
    style: 'background-color:transparent',
},
            {

                xtype: 'container',
                style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                height: 350,
                width: 450,

                items: [
                    {
                        id: 'htmlIconPrint',
                        // height: 52,
                        // width: '100%',
                        // margin: '5 0 0 0',
                        html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icons/ayohaQrCodeOnTableFour.png" style="width: 450px;height:350px;"/></div>',
                    },
                

                ]

            },

            {

                xtype: 'container',
                style: 'background-color:white',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'

                },
                height: 142,
                width: 450,

                items: [
                    {
                      //  id: 'htmlIconPrint',
                        // height: 52,
                        // width: '100%',
                        // margin: '5 0 0 0',
                        html: '<div style="width:100%;height:52px;font-size:16px;text-align:left;font-weight:normal">Print and display this membership card QR code in a highly visible location, such as your cashier or restaurant table.This ensures your clients can easily access it.<br><br>Scanning the QR code unlocks exclusive rewards and benefits.Enhance your customer experience today!</div>'
                    },
                

                ]

            },


               /////////////////

             


 {
     xtype: 'container',
     //width: '100%',
     margin:'10 0 0 0',
     layout: {
         type: 'vbox',
         //pack: 'center',
         align: 'center'

     },
     items: [

         {

             xtype: 'button',
             ui: 'plain',
             width: 300,
             height:50,
             //  width: '80%',
             //padding: '10px',
             //style: {
             //    background: '#FA8072',
             //},
             //  text: '<font size=3px color=black><center><b>Log-In</b></center></font>',
             text: '<button class="button4">Print Now !</button>',
             handler: function () {

               
                FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintQrCode();
                FloatPanel_AyohaEnterpriseAccount_Enterprise_MembershipCard_Page_PrintActivityLog("MembershipCardPage","2","BtnPrintNow");

             }





         },

          

              
            

            

     ]

 },



               //////////////////


                     {

                         xtype: 'container',
                         width: '100%',                        
                         // width: 40,
                         docked: 'bottom',
                         height: 75,
                         // style: 'background-color:rgba(0, 0, 0, 0.1);border-radius: 0px 0px 0px 0px;',
                         //style: 'background-color:white;',
                         style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #CCCCCC;border-top:1px solid #ECF0F1 ;background: white;',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [

                              {
                                margin:'-50 0 0 0',
                                html: '<div style="width:100%;height:75px;text-align:center;"><img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/></div>',
                              },

                              {
                                xtype: 'container',
                                width:'100%',
                                layout: {
                                    type: 'hbox',
                                   pack: 'right',
                                    align: 'right'
                                },
                                
                            
                            
                                margin:'-72 0 0 0',
                                items: [
                            {
                            xtype:'spacer',
                            width:110
                            },
                                    {
                                      
                                    
                                        html: '<input type="checkbox" value="remember-me" id="alreadyPrint" style="height:16px;width:16px;">',
                                    },
                                    {
                                      margin: '-2 0 0 0',
                                        html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:black;" id="btnIalreadyPrint" ">I already print and display it</button>'
                                     //   html: '<font size="2px" color="black">Remember Me?</font>',
                                    }
                                ]
                              
                                //id: 'rememberMeCheckboxID',
                                //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',
                             
                            },

                         ]

                     },











           ],














       });
    return _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print;
}


var isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen = 'N';
function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintHide() {


    if (isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen == 'Y') {
        _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print.hide(); isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen = 'N';
        RemovePages(_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print, "isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen");
    }
}

var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox;
var globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescBtn;
function FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_PrintOpen = 'Y';
   
    //Ext.getCmp('htmlIconPrint').setHtml('<div style="width:100%;height:52px;text-align:center;"><img src="' + Icon + '" style="width:52px;height:52px;"/></div>');
    // Ext.getCmp('htmlTxtPrint').setHtml('<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;">' + Msg + '</div>');


    // alert("globalDashboard_QRDescCheckBox:"+globalDashboard_QRDescCheckBox)
    // alert("globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox:"+globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox)
    // alert("globalCountPrintAndDisplayMembershipCard:"+globalCountPrintAndDisplayMembershipCard)
    






if(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox=="alreadyPrint"){
    globalDashboard_QRDescCheckBox="alreadyPrint";
    document.getElementById("alreadyPrint").checked = true;
    
}
if(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox=="notPrint"){
    globalDashboard_QRDescCheckBox="notPrint";
    document.getElementById("alreadyPrint").checked = false;
    
}


    globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox=globalDashboard_QRDescCheckBox;

    var checkbox = document.querySelector("input[id=alreadyPrint]");


  

checkbox.addEventListener('change', function() {
  if (this.checked) {
    globalCountPrintAndDisplayMembershipCard=1; 
    globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox="alreadyPrint";
 // alert(globalCountPrintAndDisplayMembershipCard)
   
    
  } else {
    globalCountPrintAndDisplayMembershipCard=0;
   
    globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox="notPrint";
  // alert(globalCountPrintAndDisplayMembershipCard)
    //globalDashboard_QRDescCheckBox="notPrint";
    
   
  }
});
}


function FloatPanel_AyohaEnterpriseAccount_Enterprise_MembershipCard_Page_PrintActivityLog_OnClose(QrCodePageType,QrCodeStatus,QrCodeDesc){
//alert("globalDashboard_QRDescCheckBox:"+globalDashboard_QRDescCheckBox)
//alert("globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox:"+globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox)

 is_FloatPanel_AyohaEnterpriseAccount_MembershipCardPageOpen = 'N';
 _FloatPanel_AyohaEnterpriseAccount_MembershipCardPage.hide(Ext.fx.Animation({
     type: 'popOut',
     duration: 250

 }));
 FloatPanel_DrawerMenu_Main_stepFiveHide();
 FloatPanel_OpenAccountStepHide();
//  if(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox=="alreadyPrint"){
//     FloatPanel_OpenAccountStepHide();
// }

 if(globalDashboard_QRDescCheckBox ==globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox){
   
    return
  }
  
  
    var objn = {        
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "QrCodePageType": QrCodePageType,
        "QrCodeStatus": QrCodeStatus,       
        "QrCodeDesc": QrCodeDesc,
        "CreatedBy":GetCurrentUserAccountNo()
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaMerchantStepFivePrintLog/AyohaMerchantStepFivePrintLogInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
               
               // FloatPanel_OpenAccountStep_CountBalance();
               // FloatPanel_AyohaEnterpriseAccount_MembershipCardPageHide();
                
                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
               
if(globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print_QRDescCheckBox=="alreadyPrint"){
    swalFireOpenStepSuccessPrintAndDisplayQrCode();
}

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





function FloatPanel_AyohaEnterpriseAccount_Enterprise_MembershipCard_Page_PrintActivityLog(QrCodePageType,QrCodeStatus,QrCodeDesc){
    var objn = {        
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "QrCodePageType": QrCodePageType,
        "QrCodeStatus": QrCodeStatus,       
        "QrCodeDesc": QrCodeDesc,
        "CreatedBy":GetCurrentUserAccountNo()
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaMerchantStepFivePrintLog/AyohaMerchantStepFivePrintLogInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                
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