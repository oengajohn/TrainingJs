Ext.define('TrainingJs.store.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',
    storeId: 'students',

    model: 'TrainingJs.model.Student',

    proxy: {
        type: 'rest', //rest,json POST,DELETE,UPDATE
        url: 'http://localhost:3000/students',
        reader: {
            type: 'json',
            rootProperty: 'students',
            totalProperty: 'totalCount'
        }
    },
    // pageSize: 5,
    autoLoad: true,
});