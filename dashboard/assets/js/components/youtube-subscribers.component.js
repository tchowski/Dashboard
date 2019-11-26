parasails.registerComponent('youtube-subscribers', {
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
    template: `<div class="col-md-6 youtube-subscribers">
    <a class="delete" @click="deleteWidget(index)"></a>
    <div class="text-center">
      <h1> Youtube Widget - Subscibers</h1>
      <input type="text" v-model="video" placeholder="URL Youtube" name="youtube" id="youtubevideo">
      <input type="text" v-model="n" placeholder="Comments number" name="comment" id="commentYoutube">
      <button v-on:click="youtube()" class="btn btn-outline-info ml-4">Ok</button>
      <br>
      <h3>Title: {{characteristics.title}} </h3>
      <img v-bind:src="imageVideo" style="width: 100%;" class="img-fluid" alt="">
    </div>
    <br>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col">
          <h3>Advanced Statistics</h3>
          <div v-for="(value, name) in advancedstatistics">
            {{name}}: {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>`,


    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {
        console.log("GETTIN SUB");
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
        youtube: async function () {
           var videoid = "https://www.googleapis.com/youtube/v3/search/?key=AIzaSyD0OKxZl5bE3d6daaJHfx9hwhqkyWQiAOg&part=snippet&q=" + this.video;

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
        deleteWidget: function (index) {
            $("div").remove(".youtube-subscribers");
        },
    }

});