Ext.define('ianMizi.view.Dashboard.AyohaStoreDashboard', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStoreDashboard;


var isFloatPanel_AyohaStoreDashboardOpen = 'N';





function FloatPanel_AyohaStoreDashboard() {

    _FloatPanel_AyohaStoreDashboard =
     Ext.create('Ext.Container', {
         zIndex: 100,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         //height: 685,
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStoreDashboardID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         //hideOnMaskTap: true,
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
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
        
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'background-color:transparent;',

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
                   style:GetHeaderStyle(),
                  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ccc;border-top:2px none #ECF0F1 ;background: white;',
                    id: 'containerFloatPanel_AyohaStoreDashboardHeader',
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
                                   margin: '-6 0 0 0',
                                   id: 'htmlFloatPanel_AyohaStoreDashboard_TitleHeaderTxt',
                                   html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Visitor Analsys</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                   //html: '<font size=3 color=black><b>Add New User</b></font>'
                               },  

                                         {
                                             xtype: 'spacer'
                                         },


                                         


                                          {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaStoreDashboardBack',
                                           height: 30,
                                           width: 35,
                                           // iconCls: 'list',
                                           html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {

                                               _FloatPanel_AyohaStoreDashboard.hide(Ext.fx.Animation({
                                                   type: 'popOut',
                                                   //direction: 'left',
                                                   //easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               isFloatPanel_AyohaStoreDashboardOpen = 'N';
                                               //RemovePages(_FloatPanel_AyohaStoreDashboard, "isFloatPanel_AyohaStoreDashboardOpen");

                                           }
                                       },
                                       {
                                           xtype: 'spacer',
width:20
                                       },
                                 












                           ]

                },





            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStoreDashboardBorderBg',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                items: [

                       


                   


  



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStoreDashboard;





}


function FloatPanel_AyohaStoreDashboardShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStoreDashboard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreDashboard());
    this.overlay.show();
    isFloatPanel_AyohaStoreDashboardOpen = 'Y';
 
}