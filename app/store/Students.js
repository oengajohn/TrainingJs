Ext.define('TrainingJs.store.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',

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
    // pageSize: 2,
    autoLoad: true,
});