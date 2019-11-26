parasails.registerComponent('weather-pressure', {
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
            humidity:'',
            pressure:''
        }
    },

    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `<div class="col-md-6 weather-pressure">
        <a class="delete" @click="deleteWidget(index)"></a>
      <div class="text-center">
    <div><h2>Weather - Full Widget</h2>
    <input type="text" v-model="idWeather" placeholder="City" name="weather" id="inputweather">
    <button v-on:click="getWeather()" class="btn btn-outline-info ml-4">Ok</button>
    <br>
    {{idWeather}} {{pressure}} Pascal
    </div>
  </div>`,


    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {

    },

    mounted: async function () {
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
        getWeather: async function () {
            await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.idWeather + "&APPID=a0ca740beab72b520c6a204b338a938d&units=metric").then(response => response.json()).then(data => this.pressure = data.main.pressure).catch(error => console.error(error));
        },
        deleteWidget: function (index) {
            $("div").remove(".weather-pressure");
        },
    }

});