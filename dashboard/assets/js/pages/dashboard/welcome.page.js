
// import FreeTransform from 'vue-free-transform'


parasails.registerPage('welcome', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
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
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝

  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);

  },
  mounted: async function () {
    this.insertHTMLarray = [
      `<div class="tile is-parent">
      <article class="tile is-child box">
        <a class="delete" @click="deleteWidget(index)"></a>
        <div class="text-center">
          <h1> Youtube Widget</h1>
          <input type="text" v-model="video" placeholder="URL Youtube" name="youtube" id="youtubevideo">
          <input type="text" v-model="n" placeholder="Comments number" name="comment" id="commentYoutube">
          <button v-on:click="youtube()" class="btn btn-outline-info ml-4">Ok</button>
          <br>
          <h3>Title: {{characteristics.title}} </h3>
          <img v-bind:src="imageVideo" style="width: 100%;" class="img-fluid" alt="">
        </div>
        <br>
        <div class="containe-fluid">
          <div class="row d-flex justify-content-center">
            <div class="col">
              <h3>Statistics</h3>
              <div v-for="(value, name) in statistics">
                {{name}}: {{value}}
              </div>
            </div>
            <div class="col">
              <h3>Comments</h3>
              <div v-for="(comment, index) in comments">
                {{index}}. {{comment.snippet.topLevelComment.snippet.textDisplay}}
              </div>
            </div>
            <div class="col">
              <h3>Advanced Statistics</h3>
              <div v-for="(value, name) in advancedstatistics">
                {{name}}: {{value}}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>`,
      `<div class="container">
  <h2>Exchange</h2>
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
      `<h2>Méteo</h2>
<input type="text" v-model="idWeather" placeholder="City" name="weather" id="inputweather">
<button v-on:click="getWeather()" class="btn btn-outline-info ml-4">Ok</button>
<br>
<div id="openweathermap-widget-15"></div>
</div>`
    ]
    // let response = await fetch("https://free.currconv.com/api/v7/currencies?apiKey=0e4502b69e971fff3acf").then(response => response.json())
    //   .then(data => {
    //     this.currency = data.results;
    //     console.log(this.currency);
    //   }).catch(err => console.log(err));
    // var start = this.currencyStart;
    // var end = this.currencyEnd;

    // let url = 'https://free.currconv.com/api/v7/convert?q=' + start + '_' + end + ',' + end + '_' + start + '&compact=ultra&date=2019-01-06&endDate=2019-01-12&apiKey=0e4502b69e971fff3acf'
    // let urlcompact = 'https://free.currconv.com/api/v7/convert?apiKey=0e4502b69e971fff3acf&q=' + this.currencyStart + '_' + this.currencyEnd + '&compact=y'


    // await fetch(url).then(response => response.json())
    //   .then(data => {
    //     let array = [];
    //     array = Object.values(data[start + '_' + end]);

    //     var ctx = document.getElementById('myChart').getContext('2d');
    //     var chart = new Chart(ctx, {
    //       type: 'line',
    //       data: {
    //         labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    //         datasets: [{
    //           label: 'Exchange Currency ' + this.currencyStart + '-' + this.currencyEnd,
    //           backgroundColor: 'rgb(255, 99, 132)',
    //           borderColor: 'rgb(255, 99, 132)',
    //           data: array
    //         }]
    //       },
    //       // Configuration options go here
    //       options: {}
    //     });
    //   }).catch(err => console.log(err));
    // fetch(urlcompact).then(result => result.json()).then(data => {
    //   let array = Object.values(data);
    //   this.Equal = array[0].val;
    // });
    // await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&APPID=a0ca740beab72b520c6a204b338a938d").then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
    // window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 15, cityid: '2643743', appid: 'a0ca740beab72b520c6a204b338a938d', units: 'metric', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    onChange: function (event) {
      switch (event.target.value) {
        case 'weather':
          console.log(event.target.value)
          this.arraySelectedWidget = ['Full Widget - Weather', 'Display temperature for a city', 'Display humidity for a city', 'Display pressure for a city']
          break;
        case 'youtube':
          console.log(event.target.value)
          this.arraySelectedWidget = ['Full Widget - YouTube', 'Display comments on specific video', 'Display subscribers on specific video', 'Display views on specific video']
          break;
        case 'exchange':
          console.log(event.target.value)
          this.arraySelectedWidget = ['Full Widget - Exchange', 'Display exchange currency']
          break;
        default:
          break;
      }
    },
    appended: function () {
      console.log('appended!');
      // could use jQuery 😊
    },
    insertWidget: function () {
      // if (!this.selectedService || !this.selectedWidget || !this.refresh)
      //   return;
      this.appendHTMLarray.push(this.selectedWidget);
      this.clicked = true;
      console.log("gettin Here");
      
    },
    closeWeather: function () {
      this.weather = false;
    },
    deleteWidget: function (index) {
      console.log("Delete");
      this.$delete(this.appendHTMLarray, index);
  },

    openExchange: async function () {
      isOpen = true;
    },
    testFunction: function() {
      console.log('oui');
  },
    getWeather: async function () {
      await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.idWeather + "&APPID=a0ca740beab72b520c6a204b338a938d").then(response => response.json()).then(data => this.cityid = data.id).catch(error => console.error(error));

      window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 15, cityid: this.cityid.toString(), appid: 'a0ca740beab72b520c6a204b338a938d', units: 'metric', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
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

    openWeather: async function () {
      this.weather = true;
      if (this.city > 0)
        window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 15, cityid: this.cityid.toString(), appid: 'a0ca740beab72b520c6a204b338a938d', units: 'metric', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
    },

    closeExampleModal: async function () {
      this.goto('/welcome');
      // Or, without deep links, instead do:
      // ```
      // this.modal = '';
      // ```
    },
    youtube: async function () {
      var video = "https://www.youtube.com/watch?v=N8PBa0_xC3Q";
      var videoid = "https://www.googleapis.com/youtube/v3/search/?key=AIzaSyD0OKxZl5bE3d6daaJHfx9hwhqkyWQiAOg&part=snippet&q=" + video;

      await fetch(videoid).then(response => response.json())
        .then(data => {
          // console.log(data['items'][0]['id'].videoId);
          this.videoId = data['items'][0]['id'].videoId;
          this.channelId = data['items'][0]['snippet']['channelId'];
          this.characteristics = data['items'][0]['snippet'];
          this.imageVideo = data['items'][0]['snippet']['thumbnails'].high.url

        }).catch(err => console.log(err));
      var statisticsvideo = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + this.videoId + "&key=AIzaSyD0OKxZl5bE3d6daaJHfx9hwhqkyWQiAOg";
      await fetch(statisticsvideo).then(response => response.json())
        .then(data => {
          this.statistics = data['items'][0]['statistics'];
          console.log(this.statistics);
        }).catch(err => console.log(err));
      var commentsvideo = "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyD0OKxZl5bE3d6daaJHfx9hwhqkyWQiAOg&textFormat=plainText&part=snippet&videoId=" + this.videoId + "&maxResults=5";
      if (this.n)
        commentsvideo = commentsvideo.replace("&maxResults=5", "&maxResults=" + this.n);
      await fetch(commentsvideo).then(response => response.json())
        .then(data => {
          this.comments = data['items'];
          console.log(this.statistics);
        }).catch(err => console.log(err));

      var advancedstatisticsbis = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + this.channelId + "&key=AIzaSyD0OKxZl5bE3d6daaJHfx9hwhqkyWQiAOg";
      await fetch(advancedstatisticsbis).then(response => response.json())
        .then(data => {
          this.advancedstatistics = data['items'][0]['statistics'];
          console.log(this.statistics);
        }).catch(err => console.log(err));
    },
  }
});
