parasails.registerComponent('exchange-currency', {
    //  ╔═╗╦═╗╔═╗╔═╗╔═╗
    //  ╠═╝╠╦╝║ ║╠═╝╚═╗
    //  ╩  ╩╚═╚═╝╩  ╚═╝
    props: [
        'index'
    ],

    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: function () {
        return {
            selectedService: '',
            selectedWidget: '',
            arraySelectedWidget: [],
            weather: true,
            isOpen: true,
            refresh: '',
            youtubeOpen: true,
            pageLoadedAt: Date.now(),
            inputWeather: '',
            cityid: '',
            currency: [],
            currencyStart: 'USD',
            currencyEnd: 'EUR',
            Equal: '',
            idWeather: '',
            video: '',
            videoId: '',
            statistics: {},
            comments: [],
            channelId: '',
            characteristics: {},
            imageVideo: '',
            advancedstatistics: {},
            n: '',
            isActive: true,
            insertHTMLarray: [],
            appendHTMLarray: [],
            product: `<input value=BITE >`,
            count: 0,
            clicked: false,
        }
    },

    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `<div class="col-md-6 exchange-currency">
      <a class="delete" @click="deleteWidget(index)"></a>
      <div class="container text-center">
        <h1>Exchange</h1>
        <span>1</span>
        <select v-model="currencyStart">
          <option v-for="item in currency">{{item.id}}</option>
        </select>
        <span>to</span>
        <select v-model="currencyEnd">
          <option v-for="item in currency">{{item.id}}</option>
        </select>
        <span>Equal: {{Equal}} </span>
        <button v-on:click="update()" class="btn btn-outline-info ml-4">Ok</button>
      </div>
  </div>`,


    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {

    },

    mounted: async function () {

        let response = await fetch("https://free.currconv.com/api/v7/currencies?apiKey=0e4502b69e971fff3acf").then(response => response.json())
            .then(data => {
                this.currency = data.results;
                console.log(this.currency);
            }).catch(err => console.log(err));
        var start = this.currencyStart;
        var end = this.currencyEnd;

        let url = 'https://free.currconv.com/api/v7/convert?q=' + start + '_' + end + ',' + end + '_' + start + '&compact=ultra&date=2019-01-06&endDate=2019-01-12&apiKey=0e4502b69e971fff3acf'
        let urlcompact = 'https://free.currconv.com/api/v7/convert?apiKey=0e4502b69e971fff3acf&q=' + this.currencyStart + '_' + this.currencyEnd + '&compact=y'

        fetch(urlcompact).then(result => result.json()).then(data => {
            let array = Object.values(data);
            this.Equal = array[0].val;
        });
    },
    // ^Note that there is no `beforeDestroy()` lifecycle callback in this
    // component. This is on purpose, since the timing vs. `leave()` gets tricky.

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

        testFunction: function () {
            console.log('oui');
        },
        update: async function () {
            var start = this.currencyStart;
            var end = this.currencyEnd;

            let url = 'https://free.currconv.com/api/v7/convert?q=' + start + '_' + end + ',' + end + '_' + start + '&compact=ultra&date=2019-01-06&endDate=2019-01-12&apiKey=0e4502b69e971fff3acf'
            let urlcompact = 'https://free.currconv.com/api/v7/convert?apiKey=0e4502b69e971fff3acf&q=' + this.currencyStart + '_' + this.currencyEnd + '&compact=y'

            
            fetch(urlcompact).then(result => result.json()).then(data => {
                let array = Object.values(data);
                console.log(array);
                this.Equal = array[0].val;
            });
        },
        deleteWidget: function (index) {
            $("div").remove(".exchange-currency");
        },
    }

});