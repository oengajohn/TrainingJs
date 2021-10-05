Ext.define('TrainingJs.overrides.data.reader.Reader', {
    override: 'Ext.data.reader.Reader',
    getResponseData: function(response) {
        var data, error;

        try {
            data = Ext.decode(response.responseText);
            console.log(data);
            return this.readRecords(data)
        } catch (ex) {
            error = new Ext.data.ResultSet({
                total: 0,
                count: 0,
                records: [],
                success: false,
                message: ex.message
            });

            this.fireEvent('exception', this, response, error);
            Ext.log('Unable to parse the JSON returned by the server');
            return error;
        }
    }
})