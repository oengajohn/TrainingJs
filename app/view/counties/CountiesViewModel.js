Ext.define('TrainingJs.view.counties.CountiesViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.countiesviewmodel',
    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:
        users: {
            model: 'User',
            autoLoad: true
        }
        */
        // counties: {
        //     type: 'counties',
        // }
    },
    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
        myTitle: 'Counties View'
    }
});