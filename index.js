var _CountryData = require('countrydata.json')

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
                    return _.clone(countries);
                }
            }
        })
}
_.extend(CountryHelper.prototype,
    {
        states: function(countryCode)
        {
            return _CountryData[countryCode.toUpperCase()] && _CountryData[countryCode.toUpperCase()].states;
        }
    });

var CountryHelperInstance = new CountryHelper();
exports = CountryHelperInstance;

