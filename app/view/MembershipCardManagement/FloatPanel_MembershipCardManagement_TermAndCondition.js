Ext.define('ianMizi.view.MembershipCardManagement.FloatPanel_MembershipCardManagement_TermAndCondition', {

});




var _FloatPanel_MembershipCardManagement_TermAndCondition;

function FloatPanel_MembershipCardManagement_TermAndCondition() {

    _FloatPanel_MembershipCardManagement_TermAndCondition = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MembershipCardManagement_TermAndConditionID',
            // xtype: 'panel',
           // xtype: 'panel',
            zIndex: 300,
            xtype: 'container',
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
            layout: {
                 type: 'fit'               
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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
                style: 'background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
              
              
               
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: 50,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_MembershipCardManagement_TermAndConditionHeader',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                    html: '<font size=4 color=black><b>Membership Card Terms And Condition</b></font>'
                                },
                                         

                                              {
                                                  xtype: 'spacer',

                                              },

                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MembershipCardManagement_TermAndConditionCardBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                       // direction: 'left',
                                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';

                                                }
                                            },

                                                
                                            {
                                                xtype: 'spacer',
            width:20
                                            },


                                                 //{
                                                 //    xtype: 'button',
                                                 //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                 //    height: 30,
                                                 //    width: 35,
                                                 //    // iconCls: 'list',
                                                 //    html: '<div ><img src="resources/icons/AddNewMembershipCardWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 //    ui: 'plain',
                                                 //    handler: function () {
                                                 //        _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                                 //            type: 'slideOut',
                                                 //            direction: 'right',
                                                 //            easing: 'cubic-bezier(.7,0,.7,1)',
                                                 //            duration: 250

                                                 //        }));
                                                 //        is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
                                                 //    }
                                                 //},







                               ]

                    },

                  
                  {
                      xtype: 'container',
                      width: '100%',
                      height: 912,
                      // width: 40,

                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                      //hidden: true,

                      id: 'containerFloatPanel_MembershipCardManagement_TermAndConditionBody',
                      style: {
                          // background: '#D25959',
                          background: 'transparent',
                          // border: '2px'
                      },
                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'center',
                      },
                   
                      items: [
                               {
                                   xtype: 'container',
                                   style: ' background-color:transparent',
                                   width: '100%',
                                   height: 612,
                                   margin: '13 0 0 0',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },
                                  
                                   items: [


                                         //{
                                         //    margin: '3 0 0 0',

                                         //    html: '<font size=2 color=white>Membership Card  Terms And Conditions</font>',

                                         //},

           {

               margin: '-2 0 0 0',
               width: '98%',
               height: 612,
               //id: 'htmlAnimatedIntervalValue',
               html: '<textarea id="input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt"  style="border: 1px dotted black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },

           
          

                                   ]
                               },


                      ]

                  },

               



               {
                   xtype: 'container',
                   margin: '0 0 0 0',
                   docked: 'bottom',
                   hidden:true,
                   id: 'containerTermStatusDraf',
                   width: '100%',
                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                   height:50,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [


{
    xtype: 'container',
  
    style: ' background-color:transparent',
    width: '50%',

    margin: '0 0 0 0',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
         {
             xtype: 'togglefield',
             // text:'NO/YES',
             //    name: 'toggleName',
             margin: '-12 0 0 -10',
             height: 5,
             // width:20,
             id: 'togglefieldFloatPanel_MembershipCardManagement_TermAndCondition_TermsStatus',
             //label: 'Manual',
             disabled: false,
             value: false,
             style: {

                 // background: '#f44336',
                 background: 'transparent',

             },
             listeners: {
                 change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                     //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                     if (newValue == true) { // if toggle is true then enable the slider

                        
                         globalTermAndConditionStatus = "CONFIRMED";
                         Ext.getCmp('htmlFloatPanel_MembershipCardManagement_TermAndCondition_DrafFinalise').setHtml('<font size=2 color=black>CONFIRMED</font>');


                         Swal.fire(
'Membership Card Status(CONFIRM)',
'Status CONFIRMED will disable edit function. you no longer able to edit this Term and Condition.',
'warning'
)

                     }


                         // if(newValue == false)
                     else { // else make it false

                         Ext.getCmp('htmlFloatPanel_MembershipCardManagement_TermAndCondition_DrafFinalise').setHtml('<font size=2 color=black>DRAF</font>');
                         //  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=white>.</font>');
                         //   Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                         globalTermAndConditionStatus = "DRAF";
                     }


                 },


             }


         },
                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_MembershipCardManagement_TermAndCondition_DrafFinalise',
                            html: '<font size=2 color=black>DRAF</font>',

                        },

    ]
},
                        
             {
xtype:'spacer'
             },                 
               {
                   xtype: 'button',
                   //  align: 'stretch',

                   ui: 'plain',
                   width: 100,
                   height: 50,
                   margin: '0 0 0 0', 
                   // width: '80%',
                   //style: {
                   //    background: '#FA8072',
                   //},
                   // padding: '10px',
                   //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                   text: '<button class="button3viewloyaltycard">Save</button>',

                   handler: function () {

                       FloatPanel_MembershipCardManagement_TermAndCondition_Save();
                   },


               },
               {
                xtype:'spacer',
                width:20
                             }, 
                   ]
               },




        {
            xtype: 'container',
            margin: '0 0 0 0',
            docked: 'bottom',
            id: 'containerTermStatusConfirm',
            width: '100%',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'

            },
            items: [


{
    xtype: 'container',

    style: ' background-color:transparent',
    width: '100%',

    margin: '0 0 0 0',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'left'
    },
    items: [
         
                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_MembershipCardManagement_TermAndCondition_FullStatus',
                            html: '<div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:black;"><b>Created By:Dr Izzati Bt Abdul Rahman</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white"><b>Status:CONFIRMED</b></div>',

                        },

    ]
},


      

            ]
        },

                ]

            },






        });

    return _FloatPanel_MembershipCardManagement_TermAndCondition;
}


var globalTermAndConditionStatus;
function FloatPanel_MembershipCardManagement_TermAndConditionShow() {
    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_TermAndCondition);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_TermAndCondition());
    this.overlay.show();
    is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'Y';
    var messagetoSend = globalMembershipCardTermsAndCondition.replace(/\n/g, "\n")
    document.getElementById('input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt').value = messagetoSend;


    Ext.getCmp('htmlFloatPanel_MembershipCardManagement_TermAndCondition_FullStatus').setHtml('<div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white;"><b>Created By:' + globalMembershipCardTermsAndConditionCreatedBy + '</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white"><b>Status:' + globalTermAndConditionStatus + ' - ' + globalMembershipCardTermsAndConditionCreatedDate + '</b></div>');


    if (globalTermAndConditionStatus == "Draf") {
        Ext.getCmp('togglefieldFloatPanel_MembershipCardManagement_TermAndCondition_TermsStatus').setValue(false);
        Ext.getCmp('containerTermStatusConfirm').setHidden(true);
        Ext.getCmp('containerTermStatusDraf').setHidden(false);
        
    }
   
    if (globalTermAndConditionStatus == "CONFIRMED") {
        Ext.getCmp('togglefieldFloatPanel_MembershipCardManagement_TermAndCondition_TermsStatus').setValue(true);
        Ext.getCmp('containerTermStatusConfirm').setHidden(false);
        Ext.getCmp('containerTermStatusDraf').setHidden(true);
    }

}


var is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';

function FloatPanel_MembershipCardManagement_TermAndConditionHide() {
    if (is_FloatPanel_MembershipCardManagement_TermAndConditionOpen == 'Y') {
        _FloatPanel_MembershipCardManagement_TermAndCondition.hide();
        is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
    }

}




function FloatPanel_MembershipCardManagement_TermAndCondition_Save() {

    var TermAndCondition = document.getElementById('input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt').value;


    if (TermAndCondition.length < 20) {
        swalFireFail("Term And Condition Not Valid!!")
        return
    }



    var obj = {
        "MembershipCardCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "TermsStatus": globalTermAndConditionStatus,
        "CreatedBy": GetCurrentAccountName(),
        "TermAndConditions": TermAndCondition,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCardTerms/MembershipCardTermsUpdateTermsStatus',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
                FloatPanel_MembershipCardManagement_EditCard_MembershipCardTermsLoadByMembershipCardCodeStore();
            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
            FloatPanel_MembershipCardManagement_TermAndConditionHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });




}
