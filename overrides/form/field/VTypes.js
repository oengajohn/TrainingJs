Ext.define('TrainingJs.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    // password: function(value) {
    //     return this.passwordRe.test(value);
    // },
    // passwordRe: /^[A-Za-z]\w{7,14}$/i,
    // passwordText: 'Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter].',

    daterange: function(val, field) {
        var date = field.parseDate(val),
            start, end;

        if (!date) {
            return false;
        }

        if (field.startDateField && (!this.dateRangeMax || (date.getTime() !== this.dateRangeMax.getTime()))) {
            start = field.up('form').down('#' + field.startDateField);

            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        } else if (field.endDateField && (!this.dateRangeMin || (date.getTime() !== this.dateRangeMin.getTime()))) {
            end = field.up('form').down('#' + field.endDateField);

            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }

        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },

    daterangeText: 'Start date must be less than end date',

    password: function(val, field) {
        var pwd;

        if (field.initialPassField) {
            pwd = field.up('form').down('#' + field.initialPassField);

            return (val === pwd.getValue());
        }

        return true;
    },

    passwordText: 'Passwords do not match',

    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: `Not a valid password. Length must be at
    least 6 characters and maximum of 20. Password must contain one
    digit, one letter lowercase, one letter uppercase, one special
    symbol @# $ % and between 6 and 20 characters.`




});