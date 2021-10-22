Ext.define('TrainingJs.store.Counties', {
    extend: 'Ext.data.Store',
    alias: 'store.counties',
    storeId: 'counties',
    model: 'TrainingJs.model.County',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/counties',
        reader: {
            type: 'json',
            rootProperty: 'counties',
        }
    }

});