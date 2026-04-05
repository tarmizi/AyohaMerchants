Ext.define('ianMizi.model.Master.PaymentMethodModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'PaymentMethod',
                  'PaymentMethodCode',
                  'RowStatus'
        ]
    }
});