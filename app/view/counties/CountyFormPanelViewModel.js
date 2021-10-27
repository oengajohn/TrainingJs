Ext.define('TrainingJs.view.counties.CountyFormPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.countyformpanelviewmodel',
    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:
        users: {
            model: 'User',
            autoLoad: true
        }
        */
    },
    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
        record: Ext.create('TrainingJs.model.County', {
            id: 45,
            name: "My County",
            code: "009"
        })

    },
    formulas: {
        referenceKey: function(get) {
            let record = get('record');
            let code = record.get('code');
            let name = record.get('name');
            console.log(code);
            console.log(name);

            return code + '->' + name;
        }
    }
});