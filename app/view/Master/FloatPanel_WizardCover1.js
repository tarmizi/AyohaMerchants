Ext.define('ianMizi.view.Master.FloatPanel_WizardCover1', {

});

var _FloatPanel_WizardCover1;


var isFloatPanel_WizardCover1Open = 'N';











function FloatPanel_WizardCover1() {

    _FloatPanel_WizardCover1 =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '40%',
         // height: 615,
         width: 280,
         id: 'LoadingFloatPanel_WizardCover1ID',
         bottom: -1,
         //top:32,
        // modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         
         zIndex: 60,
       
        
         showAnimation: {
            type: 'slideIn',
            direction: 'up',
            duration: 350,
            easing: 'ease-in'
        },
        hideAnimation: {
            //type: 'reveal',
            //duration: 250,
            type: 'slideOut',

            direction: 'down',
            duration: 150
        },
         //style: 'border-bottom:1px solid;background-color:#353839;',
       //style: 'background-color:white;',
       style: 'background-color:rgba(0,0,0, 0.8);',
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

              
// {
//              xtype: 'container',
//              style: 'background-color:transparent;',
//            //  docked: 'right',
//              height: '100%',
//              width:'90%',
//              zIndex:100,
//              layout: {
//                  type: 'vbox',
//                  pack: 'center',
//                  align: 'center',
//              }
// }




      



        ]






     });
    return _FloatPanel_WizardCover1;





}

function FloatPanel_WizardCover1Show() {

    Ext.Viewport.remove(_FloatPanel_WizardCover1);
    this.overlay = Ext.Viewport.add(FloatPanel_WizardCover1());
    this.overlay.show();
    isFloatPanel_WizardCover1Open = 'Y';
    if(globalFloatPanel_OpenAccountStep=="2"){
        Ext.getCmp('LoadingFloatPanel_WizardCover1ID').setHeight('70%');
    }
    if(globalFloatPanel_OpenAccountStep=="3"){
        Ext.getCmp('LoadingFloatPanel_WizardCover1ID').setHeight('40%');
    }
    FloatPanel_WizardCover2Show();
   
}


function FloatPanel_WizardCover1Hide() {
    _FloatPanel_WizardCover1.hide(); isFloatPanel_WizardCover1Open = 'N';
}






















