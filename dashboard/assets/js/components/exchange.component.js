parasails.registerComponent('exchange-widget', {
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
    template: `<div class="col-md-6 exchange">
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
        <canvas id="myChart"></canvas>
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


        await fetch(url).then(response => response.json())
            .then(data => {
                let array = [];
                array = Object.values(data[start + '_' + end]);

                var ctx = document.getElementById('myChart').getContext('2d');
                var chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                        datasets: [{
                            label: 'Exchange Currency ' + this.currencyStart + '-' + this.currencyEnd,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: array
                        }]
                    },
                    // Configuration options go here
                    options: {}
                });
            }).catch(err => console.log(err));
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

            let response = await fetch(url).then(response => response.json())
                .then(data => {
                    let array = [];
                    array = Object.values(data[start + '_' + end]);

                    var ctx = document.getElementById('myChart').getContext('2d');
                    var chart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                            datasets: [{
                                label: 'Exchange Currency ' + this.currencyStart + '-' + this.currencyEnd,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: array
                            }]
                        },
                        // Configuration options go here
                        options: {}
                    });
                }).catch(err => console.log(err));
            fetch(urlcompact).then(result => result.json()).then(data => {
                let array = Object.values(data);
                console.log(array);
                this.Equal = array[0].val;
            });
        },
        deleteWidget: function (index) {
            $("div").remove(".exchange");
        },
    }

});