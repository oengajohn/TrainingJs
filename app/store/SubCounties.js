Ext.define('TrainingJs.store.SubCounties', {
    extend: 'Ext.data.Store',
    alias: 'store.subcounties',
    storeId: 'subcounties',
    model: 'TrainingJs.model.SubCounty',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/subcounties',
        reader: {
            type: 'json',
            rootProperty: 'subcounties',
        }
    }

});