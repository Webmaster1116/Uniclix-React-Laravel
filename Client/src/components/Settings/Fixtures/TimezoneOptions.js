const TimezoneSelectOptions = [
    {value: "Etc/GMT+12", name: "(GMT-12:00) International Date Line West"},
    {value: "Pacific/Midway", name: "(GMT-11:00) Midway Island, Samoa"},
    {value: "Pacific/Honolulu", name: "(GMT-10:00) Hawaii"},
    {value: "US/Alaska", name: "(GMT-09:00) Alaska"},
    {value: "America/Los_Angeles", name: "(GMT-08:00) Pacific Time (US & Canada)"},
    {value: "America/Tijuana", name: "(GMT-08:00) Tijuana, Baja California"},
    {value: "US/Arizona", name: "(GMT-07:00) Arizona"},
    {value: "America/Chihuahua", name: "(GMT-07:00) Chihuahua, La Paz, Mazatlan"},
    {value: "US/Mountain", name: "(GMT-07:00) Mountain Time (US & Canada)"},
    {value: "America/Managua", name: "(GMT-06:00) Central America"},
    {value: "US/Central", name: "(GMT-06:00) Central Time (US & Canada)"},
    {value: "America/Mexico_City", name: "(GMT-06:00) Guadalajara, Mexico City, Monterrey"},
    {value: "Canada/Saskatchewan", name: "(GMT-06:00) Saskatchewan"},
    {value: "America/Bogota", name: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco"},
    {value: "US/Eastern", name: "(GMT-05:00) Eastern Time (US & Canada)"},
    {value: "US/East-Indiana", name: "(GMT-05:00) Indiana (East)"},
    {value: "Canada/Atlantic", name: "(GMT-04:00) Atlantic Time (Canada)"},
    {value: "America/Caracas", name: "(GMT-04:00) Caracas, La Paz"},
    {value: "America/Manaus", name: "(GMT-04:00) Manaus"},
    {value: "America/Santiago", name: "(GMT-04:00) Santiago"},
    {value: "Canada/Newfoundland", name: "(GMT-03:30) Newfoundland"},
    {value: "America/Sao_Paulo", name: "(GMT-03:00) Brasilia"},
    {value: "America/Argentina/Buenos_Aires", name: "(GMT-03:00) Buenos Aires, Georgetown"},
    {value: "America/Godthab", name: "(GMT-03:00) Greenland"},
    {value: "America/Montevideo", name: "(GMT-03:00) Montevideo"},
    {value: "America/Noronha", name: "(GMT-02:00) Mid-Atlantic"},
    {value: "Atlantic/Cape_Verde", name: "(GMT-01:00) Cape Verde Is."},
    {value: "Atlantic/Azores", name: "(GMT-01:00) Azores"},
    {value: "Africa/Casablanca", name: "(GMT+00:00) Casablanca, Monrovia, Reykjavik"},
    {value: "Etc/Greenwich", name: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},
    {value: "Europe/Amsterdam", name: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},
    {value: "Europe/Belgrade", name: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},
    {value: "Europe/Brussels", name: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"},
    {value: "Europe/Sarajevo", name: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},
    {value: "Europe/Warsaw", name: "(GMT+01:00) Warsaw, Zagreb"},
    {value: "Africa/Lagos", name: "(GMT+01:00) West Central Africa"},
    {value: "Asia/Amman", name: "(GMT+02:00) Amman"},
    {value: "Europe/Athens", name: "(GMT+02:00) Athens, Bucharest, Istanbul"},
    {value: "Asia/Beirut", name: "(GMT+02:00) Beirut"},
    {value: "Africa/Cairo", name: "(GMT+02:00) Cairo"},
    {value: "Africa/Harare", name: "(GMT+02:00) Harare, Pretoria"},
    {value: "Europe/Helsinki", name: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},
    {value: "Asia/Jerusalem", name: "(GMT+02:00) Jerusalem"},
    {value: "Europe/Minsk", name: "(GMT+02:00) Minsk"},
    {value: "Africa/Windhoek", name: "(GMT+02:00) Windhoek"},
    {value: "Asia/Kuwait", name: "(GMT+03:00) Kuwait, Riyadh, Baghdad"},
    {value: "Europe/Moscow", name: "(GMT+03:00) Moscow, St. Petersburg, Volgograd"},
    {value: "Africa/Nairobi", name: "(GMT+03:00) Nairobi"},
    {value: "Asia/Tbilisi", name: "(GMT+03:00) Tbilisi"},
    {value: "Asia/Tehran", name: "(GMT+03:30) Tehran"},
    {value: "Asia/Muscat", name: "(GMT+04:00) Abu Dhabi, Muscat"},
    {value: "Asia/Baku", name: "(GMT+04:00) Baku"},
    {value: "Asia/Yerevan", name: "(GMT+04:00) Yerevan"},
    {value: "Asia/Kabul", name: "(GMT+04:30) Kabul"},
    {value: "Asia/Yekaterinburg", name: "(GMT+05:00) Yekaterinburg"},
    {value: "Asia/Karachi", name: "(GMT+05:00) Islamabad, Karachi, Tashkent"},
    {value: "Asia/Calcutta", name: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"},
    {value: "Asia/Calcutta", name: "(GMT+05:30) Sri Jayawardenapura"},
    {value: "Asia/Katmandu", name: "(GMT+05:45) Kathmandu"},
    {value: "Asia/Almaty", name: "(GMT+06:00) Almaty, Novosibirsk"},
    {value: "Asia/Dhaka", name: "(GMT+06:00) Astana, Dhaka"},
    {value: "Asia/Rangoon", name: "(GMT+06:30) Yangon (Rangoon)"},
    {value: "Asia/Bangkok", name: "(GMT+07:00) Bangkok, Hanoi, Jakarta"},
    {value: "Asia/Krasnoyarsk", name: "(GMT+07:00) Krasnoyarsk"},
    {value: "Asia/Hong_Kong", name: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"},
    {value: "Asia/Kuala_Lumpur", name: "(GMT+08:00) Kuala Lumpur, Singapore"},
    {value: "Asia/Irkutsk", name: "(GMT+08:00) Irkutsk, Ulaan Bataar"},
    {value: "Australia/Perth", name: "(GMT+08:00) Perth"},
    {value: "Asia/Taipei", name: "(GMT+08:00) Taipei"},
    {value: "Asia/Tokyo", name: "(GMT+09:00) Osaka, Sapporo, Tokyo"},
    {value: "Asia/Seoul", name: "(GMT+09:00) Seoul"},
    {value: "Asia/Yakutsk", name: "(GMT+09:00) Yakutsk"},
    {value: "Australia/Adelaide", name: "(GMT+09:30) Adelaide"},
    {value: "Australia/Darwin", name: "(GMT+09:30) Darwin"},
    {value: "Australia/Brisbane", name: "(GMT+10:00) Brisbane"},
    {value: "Australia/Canberra", name: "(GMT+10:00) Canberra, Melbourne, Sydney"},
    {value: "Australia/Hobart", name: "(GMT+10:00) Hobart"},
    {value: "Pacific/Guam", name: "(GMT+10:00) Guam, Port Moresby"},
    {value: "Asia/Vladivostok", name: "(GMT+10:00) Vladivostok"},
    {value: "Asia/Magadan", name: "(GMT+11:00) Magadan, Solomon Is., New Caledonia"},
    {value: "Pacific/Auckland", name: "(GMT+12:00) Auckland, Wellington"},
    {value: "Pacific/Fiji", name: "(GMT+12:00) Fiji, Kamchatka, Marshall Is."},
    {value: "Pacific/Tongatapu", name: "(GMT+13:00) Nuku'alofa"}
];

export default TimezoneSelectOptions;