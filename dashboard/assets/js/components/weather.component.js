parasails.registerComponent('weather-widget', {
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
    template: `<div class="col weather">
        <article>
        <a class="delete" @click="deleteWidget(index)"></a>
      <div class="text-center">
    <div><h2>Weather - Full Widget</h2>
    <input type="text" v-model="idWeather" placeholder="City" name="weather" id="inputweather">
    <button v-on:click="getWeather()" class="btn btn-outline-info ml-4">Ok</button>
    <br>
    <div style="text-align: -webkit-center;" id="openweathermap-widget-15"></div>
    </div>
    </article>
  </div>`,


    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {

    },

    mounted: async function () {
        await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&APPID=a0ca740beab72b520c6a204b338a938d").then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
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
            await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.idWeather + "&APPID=a0ca740beab72b520c6a204b338a938d").then(response => response.json()).then(data => this.cityid = data.id).catch(error => console.error(error));
            window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 15, cityid: this.cityid.toString(), appid: 'a0ca740beab72b520c6a204b338a938d', units: 'metric', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
        },
        deleteWidget: function (index) {
            $("div").remove(".weather");
        },
    }

});