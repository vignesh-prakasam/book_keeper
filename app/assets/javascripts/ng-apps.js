var app = angular.module("book_keeper" , [])  ;

app.controller("InvoiceCtrl",function($scope){
// $scope.currencies =  {"AED":{"name":"United Arab Emirates Dirham","symbol":"\u062f.\u0625"},"AFN":{"name":"Afghanistan Afghani","symbol":"\u060b"},"ALL":{"name":"Albania Lek","symbol":"Lek"},"AMD":{"name":"Armenia Dram"},"ANG":{"name":"Netherlands Antilles Guilder","symbol":"\u0192"},"AOA":{"name":"Angola Kwanza"},"ARS":{"name":"Argentina Peso","symbol":"$"},"AUD":{"name":"Australia Dollar","symbol":"$"},"AWG":{"name":"Aruba Guilder","symbol":"\u0192"},"AZN":{"name":"Azerbaijan New Manat","symbol":"\u043c\u0430\u043d"},"BAM":{"name":"Bosnia and Herzegovina Convertible Marka","symbol":"KM"},"BBD":{"name":"Barbados Dollar","symbol":"$"},"BDT":{"name":"Bangladesh Taka"},"BGN":{"name":"Bulgaria Lev","symbol":"\u043b\u0432"},"BHD":{"name":"Bahrain Dinar"},"BIF":{"name":"Burundi Franc"},"BMD":{"name":"Bermuda Dollar","symbol":"$"},"BND":{"name":"Brunei Darussalam Dollar","symbol":"$"},"BOB":{"name":"Bolivia Boliviano","symbol":"$b"},"BRL":{"name":"Brazil Real","symbol":"R$"},"BSD":{"name":"Bahamas Dollar","symbol":"$"},"BTC":{"name":"Bitcoin","symbol":"BTC"},"BTN":{"name":"Bhutan Ngultrum"},"BWP":{"name":"Botswana Pula","symbol":"P"},"BYR":{"name":"Belarus Ruble","symbol":"p."},"BZD":{"name":"Belize Dollar","symbol":"BZ$"},"CAD":{"name":"Canada Dollar","symbol":"$"},"CDF":{"name":"Congo\/Kinshasa Franc"},"CHF":{"name":"Switzerland Franc","symbol":"CHF"},"CLP":{"name":"Chile Peso","symbol":"$"},"CNY":{"name":"China Yuan Renminbi","symbol":"\u00a5"},"COP":{"name":"Colombia Peso","symbol":"p."},"CRC":{"name":"Costa Rica Colon","symbol":"\u20a1"},"CUC":{"name":"Cuba Convertible Peso"},"CUP":{"name":"Cuba Peso","symbol":"\u20b1"},"CVE":{"name":"Cape Verde Escudo"},"CZK":{"name":"Czech ReKoruna","symbol":"K\u010d"},"DJF":{"name":"Djibouti Franc","symbol":"CHF"},"DKK":{"name":"Denmark Krone","symbol":"kr"},"DOP":{"name":"Dominican RePeso","symbol":"RD$"},"DZD":{"name":"Algeria Dinar"},"EGP":{"name":"Egypt Pound","symbol":"\u00a3"},"ERN":{"name":"Eritrea Nakfa"},"ETB":{"name":"Ethiopia Birr"},"EUR":{"name":"Euro Member Countries","symbol":"\u20ac"},"FJD":{"name":"Fiji Dollar","symbol":"$"},"FKP":{"name":"Falkland Islands (Malvinas) Pound","symbol":"\u00a3"},"GBP":{"name":"United Kingdom Pound","symbol":"\u00a3"},"GEL":{"name":"Georgia Lari"},"GGP":{"name":"Guernsey Pound","symbol":"\u00a3"},"GHS":{"name":"Ghana Cedi"},"GIP":{"name":"Gibraltar Pound","symbol":"\u00a3"},"GMD":{"name":"Gambia Dalasi"},"GNF":{"name":"Guinea Franc"},"GTQ":{"name":"Guatemala Quetzal","symbol":"Q"},"GYD":{"name":"Guyana Dollar","symbol":"$"},"HKD":{"name":"Hong Kong Dollar","symbol":"HK$"},"HNL":{"name":"Honduras Lempira","symbol":"L"},"HRK":{"name":"Croatia Kuna","symbol":"kn"},"HTG":{"name":"Haiti Gourde"},"HUF":{"name":"Hungary Forint","symbol":"Ft"},"IDR":{"name":"Indonesia Rupiah","symbol":"Rp"},"ILS":{"name":"Israel Shekel","symbol":"\u20aa"},"IMP":{"name":"Isle of Man Pound","symbol":"\u00a3"},"INR":{"name":"India Rupee","symbol":"\u20b9"},"IQD":{"name":"Iraq Dinar"},"IRR":{"name":"Iran Rial","symbol":"\ufdfc"},"ISK":{"name":"Iceland Krona","symbol":"kr"},"JEP":{"name":"Jersey Pound","symbol":"\u00a3"},"JMD":{"name":"Jamaica Dollar","symbol":"J$"},"JOD":{"name":"Jordan Dinar"},"JPY":{"name":"Japan Yen","symbol":"\u00a5"},"KES":{"name":"Kenya Shilling","symbol":"KSh"},"KGS":{"name":"Kyrgyzstan Som","symbol":"\u043b\u0432"},"KHR":{"name":"Cambodia Riel","symbol":"\u17db"},"KMF":{"name":"Comoros Franc"},"KPW":{"name":"Korea (North) Won","symbol":"\u20a9"},"KRW":{"name":"Korea (South) Won","symbol":"\u20a9"},"KWD":{"name":"Kuwait Dinar"},"KYD":{"name":"Cayman Islands Dollar","symbol":"$"},"KZT":{"name":"Kazakhstan Tenge","symbol":"\u043b\u0432"},"LAK":{"name":"Laos Kip","symbol":"\u20ad"},"LBP":{"name":"Lebanon Pound","symbol":"\u00a3"},"LKR":{"name":"Sri Lanka Rupee","symbol":"\u20a8"},"LRD":{"name":"Liberia Dollar","symbol":"$"},"LSL":{"name":"Lesotho Loti"},"LTL":{"name":"Lithuania Litas","symbol":"Lt"},"LVL":{"name":"Latvia Lat","symbol":"Ls"},"LYD":{"name":"Libya Dinar"},"MAD":{"name":"Morocco Dirham"},"MDL":{"name":"Moldova Leu"},"MGA":{"name":"Madagascar Ariary"},"MKD":{"name":"Macedonia Denar","symbol":"\u0434\u0435\u043d"},"MMK":{"name":"Myanmar (Burma) Kyat"},"MNT":{"name":"Mongolia Tughrik","symbol":"\u20ae"},"MOP":{"name":"Macau Pataca"},"MRO":{"name":"Mauritania Ouguiya"},"MUR":{"name":"Mauritius Rupee","symbol":"\u20a8"},"MVR":{"name":"Maldives (Maldive Islands) Rufiyaa"},"MWK":{"name":"Malawi Kwacha"},"MXN":{"name":"Mexico Peso","symbol":"$"},"MYR":{"name":"Malaysia Ringgit","symbol":"RM"},"MZN":{"name":"Mozambique Metical","symbol":"MT"},"NAD":{"name":"Namibia Dollar","symbol":"$"},"NGN":{"name":"Nigeria Naira","symbol":"\u20a6"},"NIO":{"name":"Nicaragua Cordoba","symbol":"C$"},"NOK":{"name":"Norway Krone","symbol":"kr"},"NPR":{"name":"Nepal Rupee","symbol":"\u20a8"},"NZD":{"name":"New Zealand Dollar","symbol":"$"},"OMR":{"name":"Oman Rial","symbol":"\ufdfc"},"PAB":{"name":"Panama Balboa","symbol":"B\/."},"PEN":{"name":"Peru Nuevo Sol","symbol":"S\/."},"PGK":{"name":"Papua New Guinea Kina"},"PHP":{"name":"Philippines Peso","symbol":"\u20b1"},"PKR":{"name":"Pakistan Rupee","symbol":"\u20a8"},"PLN":{"name":"Poland Zloty","symbol":"z\u0142"},"PYG":{"name":"Paraguay Guarani","symbol":"Gs"},"QAR":{"name":"Qatar Riyal","symbol":"\ufdfc"},"RON":{"name":"Romania New Leu","symbol":"lei"},"RSD":{"name":"Serbia Dinar","symbol":"\u0414\u0438\u043d."},"RUB":{"name":"Russia Ruble","symbol":"\u0440\u0443\u0431"},"RWF":{"name":"Rwanda Franc"},"SAR":{"name":"Saudi Arabia Riyal","symbol":"\ufdfc"},"SBD":{"name":"Solomon Islands Dollar","symbol":"$"},"SCR":{"name":"Seychelles Rupee","symbol":"\u20a8"},"SDG":{"name":"Sudan Pound"},"SEK":{"name":"Sweden Krona","symbol":"kr"},"SGD":{"name":"Singapore Dollar","symbol":"$"},"SHP":{"name":"Saint Helena Pound","symbol":"\u00a3"},"SLL":{"name":"Sierra Leone Leone"},"SOS":{"name":"Somalia Shilling","symbol":"S"},"SPL*":{"name":"Seborga Luigino"},"SRD":{"name":"Suriname Dollar","symbol":"$"},"STD":{"name":"\tS\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra"},"SVC":{"name":"El Salvador Colon","symbol":"$"},"SYP":{"name":"Syria Pound","symbol":"\u00a3"},"SZL":{"name":"Swaziland Lilangeni"},"THB":{"name":"Thailand Baht","symbol":"\u0e3f"},"TJS":{"name":"Tajikistan Somoni"},"TMT":{"name":"Turkmenistan Manat"},"TND":{"name":"Tunisia Dinar","symbol":"DT"},"TOP":{"name":"Tonga Paanga"},"TRY":{"name":"Turkey Lira","symbol":"TRY"},"TTD":{"name":"Trinidad and Tobago Dollar","symbol":"TT$"},"TVD":{"name":"Tuvalu Dollar","symbol":"$"},"TWD":{"name":"Taiwan New Dollar","symbol":"NT$"},"TZS":{"name":"Tanzania Shilling","symbol":"TSh"},"UAH":{"name":"Ukraine Hryvna","symbol":"\u20b4"},"UGX":{"name":"Uganda Shilling","symbol":"USh"},"USD":{"name":"United States Dollar","symbol":"$"},"UYU":{"name":"Uruguay Peso","symbol":"$U"},"UZS":{"name":"Uzbekistan Som","symbol":"\u043b\u0432"},"VEF":{"name":"Venezuela Bolivar","symbol":"Bs"},"VND":{"name":"Viet Nam Dong","symbol":"\u20ab"},"VUV":{"name":"Vanuatu Vatu"},"WST":{"name":"Samoa Tala"},"XCD":{"name":"East Caribbean Dollar","symbol":"$"},"XDR":{"name":"International Monetary Fund (IMF) Special Drawing Rights"},"XOF":{"name":"Communaut\u00e9 Financi\u00e8re Africaine (BCEAO) Franc"},"XPF":{"name":"Comptoirs Fran\u00e7ais du Pacifique (CFP) Franc"},"YER":{"name":"Yemen Rial","symbol":"\ufdfc"},"ZAR":{"name":"South Africa Rand","symbol":"R"},"ZWD":{"name":"Zimbabwe Dollar","symbol":"Z$"}};
    $scope.currencies = ["Rs" , "USD" , "EU"] ;
});