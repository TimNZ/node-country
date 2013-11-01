var _CountryData = require('./countrydata.json')
    _ = require('lodash')

function CountryHelper()
{
    var countries = _.map(_CountryData, function(country)
    {
        return _.pick(country, 'code','name');
    })
    Object.defineProperties(this,
        {
            'countries': {
                'get': function()
                {
                    return countries;
                }
            }
        })
}
_.extend(CountryHelper.prototype,
    {
        states: function(countryCode)
        {
            return _CountryData[countryCode.toUpperCase()] && _CountryData[countryCode.toUpperCase()].states;
        },
        countryName: function(countryCode)
        {
            return _CountryData[countryCode.toUpperCase()] && _CountryData[countryCode.toUpperCase()].name;
        },
        stateName: function(countryCode,stateCode)
        {
            return _CountryData[countryCode.toUpperCase()] && _CountryData[countryCode.toUpperCase()].states[stateCode] && _CountryData[countryCode.toUpperCase()].states[stateCode];
        }

    });

var CountryHelperInstance = new CountryHelper();
module.exports = CountryHelperInstance;

