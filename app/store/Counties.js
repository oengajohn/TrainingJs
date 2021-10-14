Ext.define('TrainingJs.store.Counties', {
    extend: 'Ext.data.Store',
    alias: 'store.counties',
    storeId: 'counties',
    model: 'TrainingJs.model.County',
    // data: {
    //     rows: [
    //         [1, "simply dummy text of the printing and typesetting", "Mombasa"],
    //         [2, "Kwale", "Kwale"],
    //         [3, "Kilifi", "Kilifi"]
    //     ]
    // },
    proxy: {
        type: 'memory',
        url: '/user',
        reader: {
            type: 'json',
            rootProperty: 'rows',
        }
    }

});