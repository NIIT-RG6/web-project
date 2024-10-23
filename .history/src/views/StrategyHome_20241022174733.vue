<template>
  <div>
    <div class="search-box">
      <h1 class="title">Hello,Haikou!</h1>
      <div class="search-content">
        <input type="text" placeholder="Search for countries, cities, destinations" />
        <a href="javascript:void(0)">Search</a>
      </div>
    </div>
    <div class="top-box">
      <h1 class="title">Real-time Top 3</h1>
      <div class="top-content">
        <div class="item">
          <img src="@/assets/images/top1.jpg">
          <div class="pop">
            <p class="pop-title">Cloud Cave</p>
            <p>
              It's a stunning view from every angle, especially at sunset, making it a great place to take photos.
              Yundong Library is not only a place to check in for literature and art, but also a quiet corner where the
              soul can dwell.
            </p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/images/top2.jpg">
          <div class="pop">
            <p class="pop-title">Qilou Old Street</p>
            <p>
              Not only is there a lot of history, but also the prosperity of modern commerce, with a variety of snack
              bars, handicraft shops and specialty cafes dotted throughout, which is an excellent place to experience
              the authentic life of Haikou.
            </p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/images/top3.jpg">
          <div class="pop">
            <p class="pop-title">Haikou holiday beach</p>
            <p>
              Holiday Beach is one of Haikou's beautiful coastlines, with fine sand and clear blue waters, it is the
              perfect place to relax and unwind. You can enjoy the sun, sand and sea breeze here, and feel the grandeur
              and gentleness of the sea.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="select-box">
      <div class="select-item">
        <label>Month:</label>
        <span v-for="item in monthData" :key="item" :class="{ active: monthIndex === item }"
          @click="monthIndex = item">{{
            item }}</span>
      </div>
      <div class="select-item">
        <label>Days:</label>
        <span v-for="item in dayData" :key="item" :class="{ active: dayIndex === item }" @click="dayIndex = item">{{
          item
        }}</span>
      </div>
      <div class="select-item">
        <label>Number:</label>
        <span v-for="item in personData" :key="item" :class="{ active: personIndex === item }"
          @click="personIndex = item">{{ item }}</span>
      </div>
    </div>
    <div class="essay-box">
      <div class="essay-item" v-for="(item, index) in essayShowData" :key="index">
        <h3 class="title" @click="changeHomeShow(item)">{{ item.title }}</h3>
        <p class="content">route: {{ item.content }}</p>
        <div class="button-content">
          <p>Author: {{ item.author }}</p>
          <p>Browse: {{ item.view }}</p>
        </div>
        <div class="top-btn" @click="item.topBtn = !item.topBtn">
          <img :src="item.topBtn ? require('@/assets/images/good-check.png') : require('@/assets/images/good.png')"
            style="width: 20px;height: 20px">
        </div>
      </div>
      <div class="essay-none" v-if="essayShowData.length === 0">
        <img src="@/assets/images/face.png">
        <p>Sorry, we didn't find any eligible strategies</p>
      </div>
    </div>
    <!-- <div class="footer-box">
      <a href="#">About us</a>
      <span>|</span>
      <a href="#">Join us</a>
      <span>|</span>
      <a href="#">Report Center</a>
      <span>|</span>
      <a href="#">Help</a>
      <span>|</span>
      <a href="#">Copyright Notice</a>
      <span>|</span>
      <a href="#">Disclaimer</a>
      <span>|</span>
      <a href="#">Contact us</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      monthIndex: 'All',
      monthData: ['All', 'January-March', 'April-June', 'July-September', 'October-December'],
      dayIndex: 'All',
      dayData: ['All', '1-3 days', '4-7 days', '8-10 days', 'More than 10 days'],
      /*      priceIndex: 'All',
            priceData: ['All', '1-999', '1000-2999', '3000-4999', '5000-9999', '>10000'],*/
      personIndex: 'All',
      personData: ['All', 'Travel alone', 'Travel with 3-5 friends', 'Family-friendly tour', 'Sweet walk for couples'],
      essayData: [
        {
          title: 'Watch Sails, Gaze at the Sea, Admire the Greens, Bathe in the Sunset',
          content: 'Haikou -> Wanlv Park',
          author: 'Water-Skiing Youth',
          view: 632,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel alone'
        },
        {
          title: 'Hainan East Coast - Wenchang & Haikou',
          content: 'Wenlan Old Street > Wenchang Aerospace Science Popularization Museum > Qinglan Bridge > Huanqiu Dock > Qinglan Port > Wanlv Park > Baishamen Park > Cloud Cave Library',
          author: 'catDoraemon',
          view: 1919,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7771013'
        },
        {
          title: 'Im Waiting for You in Sanya',
          content: 'Haikou East Railway Station > Sanya Yiyuan Xuanyu Hotel > Sanya Songcheng Tourist Area > Tianya Haijiao > Meilan International Airport > Haikou Haidao Forest...',
          author: 'duck_ye',
          view: 2782,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6715052'
        },
        {
          title: 'Meet the Beautifully Painted Fairy Tale Kingdom at Changying Universal 100 Fantasy Park',
          content: 'Qilou Old Street > Hainan University > Dongmen Market',
          author: 'Moer_Maomao',
          view: 8659,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7642162'
        },
        {
          title: 'Rentai Ancient Village in Haikou: Red Memories Bring Tears to Townsfolk, Beautiful Village Listens to Embarrassing Stories of the "Commons"',
          content: 'Haikou',
          author: 'Walking_Youtiao',
          view: 3894,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7643777'
        },
        {
          title: 'Enjoy Spring Flowers, Ride Summer Waves, Meet Beautiful Haikou',
          content: 'Holiday Beach > Wugong Temple > Hairui Tomb > Leiqiong Haikou Volcanic Group World Geopark > Mission Hills Huayi Feng Xiaogang Movie Commune...',
          author: 'Zhang Fugui_Er',
          view: 3058,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7457639'
        },
        {
          title: '1-Day Tour of Haikou',
          content: 'Swan Lake Animal Base > Swan Lake Animal Park',
          author: 'Roaming',
          view: 3903,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7834127'
        },
        {
          title: 'My Parents Free and Easy Trip to Haikou',
          content: 'Haikou Museum > Xitian Temple > Holiday Beach > Guilinyang Seashore Tourist Area > Haikou Peoples Park > Wanlv Park > Jinniuling Park...',
          author: 'Qunar User',
          view: 9035,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/5225250'
        },
        {
          title: 'N Reasons to Stay at the Westin Haikou',
          content: 'Cloud Cave Library > Qilou Old Street > Wanlv Park',
          author: 'crq68nlb',
          view: 2847,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7771499'
        },
        {
          title: 'Must-Visit Attractions in Haikou',
          content: 'Haikou',
          author: 'No_Footstep_is_Too_Far',
          view: 5885,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7732491'
        },
        {
          title: 'The Oldest Urban Memory of Haikou - Qilou Old Street',
          content: 'Hairui Former Residence > Wugong Temple',
          author: 'No_Footstep_is_Too_Far',
          view: 2058,
          topBtn: false,
          month: 'January-March',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7729888'
        },
        {
          title: 'A Three-Day Tour of Whisky Bars in Haikou That I Want to Keep Secret',
          content: 'Mingxing Cinema',
          author: 'Zoe_Zou_Jingrou',
          view: 3867,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7735435'
        },
        {
          title: 'Not Lonely as a Single Traveler (Haikou - Zhongyuan - Boao)',
          content: 'Tanmen Fishermans Seafood',
          author: 'Yulinzi',
          view: 4859,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5646633'
        },
        {
          title: 'Found Another Hotel, Highly Recommended~',
          content: 'Kailaiya S Hotel Haikou (Hainan Nongken Middle School Haiken Garden Night Market Branch)',
          author: 'xhxhxh19891107',
          view: 5968,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7601743'
        },
        //
        {
          title: '在海口免税城「奢美之境」坐上逆龄时光机',
          content: '海口',
          author: '琳时出发',
          view: 2745,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7782692'
        },
        {
          title: 'Sing My "Boundless Sky and Sea"',
          content: 'Hainan International Convention and Exhibition Center > Qizi Bay > Dongpo Academy',
          author: 'Qunar User',
          view: 5947,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/5432572'
        },
        {
          title: '【Recommendations for Hainan Travel】Eight Self-driving Routes for Dragon Boat Festival in Haikou',
          content: 'Haikou',
          author: 'Slow Traveler Wu Hui',
          view: 5867,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7636955'
        },
        //  
        {
          title: 'Hainan Section: Haikou for Two to Three Days',
          content: 'Hainan University > Holiday Beach > Xixiu Beach > Qilou Old Street > Wanlv Park > Baishamen Park > Haikou Century Bridge',
          author: 'Snowman Who Loves Eating Rabbit Head',
          view: 3847,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7742586'
        },
        {
          title: 'Mountains Always Stand, Seas Always Sing',
          content: 'Haikou Qilou Snack Street > Qilou Old Street > Sanya Railway Station > Sanya Haiyun Resort Hotel > Jiefang Road Pedestrian Street > Sanya Yalong Bay Stone Stream Villa...',
          author: 'Xiaobing Agan',
          view: 4739,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6389089'
        },
        {
          title: 'A Leisurely Holiday, An Unusual Hainan Self-driving Tour',
          content: 'Lingshui > Haikou > Baoting',
          author: 'Excellent Person You',
          view: 5958,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6632471'
        },
        //  
        {
          title: 'Love in Haikou, Holding Hands, Quietly Nostalgic, Slowly Aging Together —— Haikou Feng Xiaogang Movie Commune',
          content: 'Mission Hills Huayi Feng Xiaogang Movie Commune',
          author: 'Xuanmiao is a Corn',
          view: 6673,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6903854'
        },
        {
          title: 'Minor Attractions in Hainan, Here is Where There is No Crowd',
          content: 'Haikou Railway Station > Meilan Station > Haikou East Railway Station > Haikou Qilou Snack Street > South-North Fruit Wholesale Market...',
          author: 'YC Gentleman',
          view: 9483,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7063140'
        },
        {
          title: 'My Travel Guide',
          content: 'Zhongshan Road, Longhua District > Haikou Clock Tower > Holiday Beach',
          author: 'Qunar User',
          view: 2738,
          topBtn: false,
          month: 'April-June',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5264019'
        },
        //  
        //July-September, 1-3 days  
        {
          title: '1-Day Tour',
          content: 'Mission Hills Huayi Feng Xiaogang Movie Commune (Century Memory Commune)',
          author: 'Wu Ying 58',
          view: 4839,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7086731'
        },
        {
          title: 'When "Talim" Comes, This Airport Made My Day of Play Not Boring',
          content: 'Haikou, Hainan',
          author: 'Qunar User',
          view: 15000,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7394147'
        },
        {
          title: '10-Day Free and Easy Travel in Hainan - Sanya, Lingshui, Haikou',
          content: 'Wuzhizhou Island > Lingshui Railway Station > Monkey Island Park > Sanya Qiangu Qing Show > Meilan Station > Haikou Meiyan Hotel Meilan Airport Branch...',
          author: 'Xinyisuo',
          view: 5894,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6577478'
        },
        //  
        {
          title: 'Where to Go During the National Day Holiday? Avoid Crowds and Visit Haikou',
          content: 'Holiday Beach > Wanlv Park > Haikou Century Bridge > Qilou Old Street > Haikou Nanyang Qilou Old Street Culture Exhibition Hall',
          author: 'Haikou Hotspot',
          view: 3484,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7391311'
        },
        {
          title: 'Which Haikou Qingbuliang is the Best? 2015 Latest Version Guide!',
          content: 'Mingzhu Plaza > Xinhua South Road',
          author: 'Qunar User',
          view: 5940,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/5689738'
        },
        {
          title: 'Qilou Old Street, Haikou Volcanic Group, Travel with Bare Feet and a Car',
          content: 'Qilou Old Street > Leiqiong Haikou Volcanic Group World Geological Park',
          author: 'Trend-following Traveler',
          view: 8493,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6897380'
        },
        //  
        {
          title: 'Hainan Travel is the Most Cost-effective, Even My Mom Said It was Good',
          content: 'Holiday Beach > Meilan Station',
          author: 'iyrc9594',
          view: 7383,
          topBtn: false,
          month: 'July-September',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7395510'
        },
        //
        //October-December 1-3 days
        {
          title: 'Haikou Mission Hills Resort Leisure 3-Day Tour',
          content: 'Meilan International Airport > Haikou Mission Hills Resort Hotel > Mission Hills Spa > Mission Hills冯小刚Film Studio',
          author: 'Qunar User',
          view: 263,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5511286'
        },
        {
          title: 'Haikou 2-Day Tour',
          content: 'Haikou Bell Tower > Qilou Old Street > Hai Ruis Former Residence > Heping Barbecue Leisure Square',
          author: 'White Moonlight',
          view: 489,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7553269'
        },
        {
          title: 'Wuzhishan, 2016, Im on the Road',
          content: 'Haikou South Bus Station > Wuzhishan Yatai Rainforest Hotel > Shuiman Township',
          author: 'dtmo1022',
          view: 839,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6165967'
        },
        //  
        {
          title: 'Autumn Visit to Haikou: A Century-Old Street and Hainan Snacks Hidden Inside',
          content: 'Qilou Old Street > Chicken Shiteng',
          author: 'Haikou Hotspots',
          view: 4774,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7419792'
        },
        {
          title: 'Haikou Homestay Recommendation | Life Refueling Station',
          content: 'Haikou',
          author: 'Qin Chufei',
          view: 5993,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7406132'
        },
        {
          title: 'Chengmai, A Slow Life in Winter',
          content: 'Haikou East Railway Station > Meilan Railway Station > Haikou Railway Station > Meilan International Airport > Wugong Temple > Fushan Cafe > Jinshan Temple',
          author: 'Summers Travel',
          view: 3647,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6959552'
        },
        //  
        {
          title: 'The Best Food in Hainan is in Haikou! Authentic Flavors, Show You a Different Hainan Life',
          content: 'HNA Sun Moon Plaza > Mission Hills冯小刚Film Studio > Haikou Bell Tower > Qilou Old Street',
          author: 'Mama Explores the World',
          view: 5893,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7546822'
        },
        {
          title: 'Birthday Fun',
          content: 'Dongzhai Harbor Mangrove Forest',
          author: 'Paddleboarding Youth',
          view: 3262,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7546822'
        },
        {
          title: 'Casually Stroll and Eat in Haikou, Winter in Haikou is Warm',
          content: 'Hainan Tropical Wildlife Botanical Garden',
          author: 'Qunar User',
          view: 3483,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7436137'
        },
        //  
        {
          title: '#Share Travel Stories to Win Bonuses# | Escape the City, Go to Chengmais Countryside, Enjoy the Beautiful Moments in Peace',
          content: 'Haikou',
          author: 'ABoo',
          view: 385,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7715666'
        },
        {
          title: 'Step into Feng Xiaogang Film Studio and Become the Leading Role in a Blockbuster',
          content: 'Mission Hills冯小刚Film Studio',
          author: 'White Night Dudu',
          view: 8399,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6591702'
        },
        {
          title: 'Empty My Mind, Take a Slow Sea Journey',
          content: 'Yalong Bay > Dadonghai Bay > Sanya Bay > Jiajie Chain Hotel (Haikou Qilou Old Street Branch)',
          author: 'fzhj1030',
          view: 4783,
          topBtn: false,
          month: 'October-December',
          day: '1-3 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6035123'
        },
        //  
        //January-March 4-7 days  
        {
          title: 'Leaving a Regret ~ I Will Come Again, Car Rental Tour in Sanya',
          content: 'Leiqiong Haikou Volcanic Group World Geopark > Qilou Old Street > Haikou Qilou Snack Street > South-North Fruit Market > Meilan International Airport...',
          author: 'Shuimu Xi',
          view: 5784,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5055564'
        },
        {
          title: 'A Personal Journey, Belonging Only to Myself',
          content: 'Haikou Bauhinia International Youth Hostel > Haikou Qilou Snack Street > Holiday Beach > Coconut Dream Long Corridor > Sanya Bay > Queen Bay > Wuzhizhou...',
          author: 'Miaofeng',
          view: 389,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/2968142'
        },
        {
          title: 'One Person Takes on a Hainan Journey',
          content: 'Haikou Banana Banana International Youth Hostel > Wugong Temple > Qiongtai Academy > Haikou Qilou Snack Street > Jiefang Road Pedestrian Street > Wanghao...',
          author: 'Qunar User',
          view: 382,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/1396277'
        },
        //
        {
          title: 'Hainan Island | Countless Midsummer Night\'s Dreams Here',
          content: 'Qilou Old Street > Holiday Beach',
          author: 'Running Little Dongdong',
          view: 56,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7656996'
        },
        {
          title: 'A Spontaneous Haikou Trip, Taste the Seafood and Scenery of Haikou',
          content: 'Hai Rui Cultural Park > Qilou Old Street > Lin Jie Fragrant Seafood (Dingcun Ten Thousand People Seafood Square Branch) > Dingcun Ten Thousand People Seafood Square > Lei Qiong...',
          author: 'Qunar User',
          view: 3,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7560488'
        },
        {
          title: 'Three Girls\' Five-day Budget Trip to Hainan',
          content: 'Swan Lake Animal Base Haikou Station > Haikou East Railway Station > Haiyue Square > Sanya Bay > Qilou Old Street > Summer Mall > Dadonghai > CDF Haikou Meilan Airport Duty-free Shopping Mall',
          author: 'Ou Xiaoxia',
          view: 134,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6327064'
        },
        //  
        {
          title: 'Five-day Self-driving Tour of Hainan\'s Eastern Route',
          content: 'Qilou Old Street > North-South Fruit Market > Wanluyuan Park > Hainan Provincial Museum Swan Lake Animal Base',
          author: 'Yao Tai Flea Market',
          view: 43,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7661536'
        },
        {
          title: 'Self-driving in the "Northwest" of Hainan, A Journey from Black and White to Color (Hainan Western Route Self-driving, with Road Book)',
          content: 'Leigong Island > E\'man Town Volcanic Coast Provincial Geological Park > Ocean Flower Island Rare and Characteristic Botanical Garden > Qizi Bay > Liangzhi Forest Fishing Port Hotel...',
          author: 'Si Ye Cao islY',
          view: 112,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7724554'
        },
        {
          title: 'Spontaneous Self-driving Trip to Sanya',
          content: 'Wuzhizhou Island > West Island > Haitang Bay > Meilan International Airport > Sanya Bay > Sanya Wanjia Resort Hotel > Sanya Haitang Bay Bosheng Resort...',
          author: 'moltke5a',
          view: 1,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6252107'
        },
        //  
        {
          title: 'Taking Chou Chou to Visit Sanya',
          content: 'Haikou Qilou Snack Street > Sanya Seaview Resort Apartment Fenghuang Island Branch > Luhuitou Scenic Area > Yalong Bay International Rose Valley > Xian Guanjia Seafood...',
          author: 'Practicing Fairy',
          view: 4112,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5552325'
        },
        {
          title: 'My Travel Guide',
          content: 'Jianwai Boutique Inn (Haikou Qilou Old Street Branch) > Huashijian Inn (Haikou Movie Metropolis Branch) > Mission Hills Huayi Feng Xiaogang Movie Metropolis...',
          author: 'Crayon Xiao Wanzi XHY',
          view: 2146,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7002981'
        },
        {
          title: 'Seven-day Tour of Haikou and Sanya in Hainan',
          content: 'Haikou Century Landscape Hotel (Deleted) > Sanya Benbenyu Inn > Xiaodonghai > Luhuitou Scenic Area > Wuzhizhou Island > Yalong Bay Thermal...',
          author: 'Qunar User',
          view: 2754,
          topBtn: false,
          month: 'January-March',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5263740'
        },
        //  
        {
          title: 'YUJUN\'s Hainan Travel Notes',
          content: 'Meilan International Airport > Sanya Bay > Phoenix Island > Tianya Haijiao > Yazhou Ancient City > Haikou Qilou Snack Street',
          author: 'Qunar User',
          view: 2666,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5509237'
        },
        {
          title: 'Budget Travel, See the Sea at the Southernmost Tip',
          content: 'Xiuying Port > Haikou Bell Tower > Xian Guanjia Seafood (First Market Branch) > Sanya Bay > Yalong Bay > Dadonghai',
          author: 'Qunar User',
          view: 3418,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6496023'
        },
        //
        {
          title: 'Group Tour to Sanya, Recommended Attractions to Visit',
          content: 'Haikou Qilou Snack Street>Night Cruise on Sanya Bay>Dadonghai>Sanya Bay>Tianya-Haijiao>Xian Guanjia Seafood (First Market Branch)>First...',
          author: 'Qunar User',
          view: 6650,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7052445'
        },
        {
          title: 'Escape the Rainy Season and Embrace the Sunshine',
          content: 'Haikou Hongzhou Aiderui Royal Garden Hotel (Meilan Airport Branch)>Holiday Beach>Dadonghai>Hainan International Convention and Exhibition Center...',
          author: 'Qiu Mizi',
          view: 1120,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7475999'
        },
        {
          title: 'In Sanya, I Saw the Blue Sea and Your Smile.',
          content: 'Wuzhizhou Island>Tianya-Haijiao>Phoenix International Airport>Meilan International Airport>Senlin Inn (Wanning Riyuewan Surfing Branch)>Sanya Mountain...',
          author: 'Waist Judge Lady',
          view: 3332,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6789405'
        },
        //  
        {
          title: 'May Day Haikou Family Holiday',
          content: 'Haikou Sheraton Hotel>Sun Moon Lake Square>Haikou Sheraton Spa Pool>CDF Haikou Meilan Airport Duty Free Shop',
          author: 'psyz7425',
          view: 2052,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7780155'
        },
        {
          title: 'Taking My Mother to Visit Relatives in Haikou',
          content: 'Haikou',
          author: 'Definitely the World Cup',
          view: 779,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7702732'
        },
        {
          title: 'Recording My First RV Self-Drive',
          content: 'Beihai Yintan Tourist Resort>Nanning East Railway Station',
          author: 'wwgt5443',
          view: 2328,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7682413'
        },
        //  
        {
          title: 'Invited and Fell in Love with You │ Hainan Island Circuit',
          content: 'Haitang Bay>Meilan International Airport>Yalong Bay Tropical Paradise Forest Park>Wanlv Park',
          author: 'Swan Lady',
          view: 5039,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6893705'
        },
        {
          title: 'Stolen Time -- A Seven-Day Four-City Slow Travel Diary with Three Thousand Yuan',
          content: 'Daxiao Dongtian>Wuzhizhou Island>Sanya River>Qilou Old Street',
          author: 'Yang Xiaoyang',
          view: 25000,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6456386'
        },
        {
          title: 'Coastal Trip - Haikou Travel Guide',
          content: 'Haikou>Danzhou>Sanya',
          author: 'snof7397',
          view: 4476,
          topBtn: false,
          month: 'April-June',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7590460'
        },
        //  
        {
          title: 'Hainan is More Than Just the Sea, A Solo Trip to Hainan',
          content: 'Dadonghai>Yalong Bay>Sanya Qiangu Qing Performance>Qilou Old Street>Haitang Bay',
          author: 'Magazine Enthusiast',
          view: 3013,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6904582'
        },
        {
          title: 'My Travel Guide',
          content: 'Meilan International Airport>Sanya Railway Station>Sanya Bay Crowne Plaza Resort Hotel>Yalong Bay Tropical Paradise Forest Park>Yalong Bay>Yalong...',
          author: 'Good Name Taken',
          view: 1178,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5741818'
        },
        //
        {
          title: 'The Different Haikou - Ruhao and Sanqing, the Lost Volcanic Villages',
          content: 'Swan Lake Animal Base',
          author: 'Qunar User',
          view: 6509,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6774982'
        },
        {
          title: 'Which Museums in Haikou Are Worth Visiting?',
          content: 'Haikou Museum > Homenjoy Nanyang Museum Hotel (Haikou Qilou Old Street Branch) > Homenjoy Nanhai Museum Hotel (Haikou...',
          author: 'Qunar User',
          view: 972,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6867257'
        },
        {
          title: 'Fall in Love with Haikou, Starting with Food and Night Scenes',
          content: 'Haikou',
          author: 'xuul8036',
          view: 503,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7531562'
        },
        //  
        {
          title: 'My Dad and Moms Mission Hills Resort Trip',
          content: 'Haikou Mission Hills Golf Club > Haikou Mission Hills Resort Hotel > Mission Hills冯小刚华谊电影公社',
          author: 'Qunar User',
          view: 19000,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6614945'
        },
        {
          title: 'House Hunting in Haikou',
          content: 'Qilou Old Street > Hainan University > Haikou Railway Station > Haikou Meilan Hotel',
          author: 'Yili',
          view: 2722,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7093756'
        },
        {
          title: 'Island Hopping in the South, Haikou and Sanyas Coconut Wind and Sea Rhythm',
          content: 'Haikou East Railway Station > Haikou Qilou Snack Street > Sanya Railway Station > Wanlv Park > Sanya Scarecrow Seaside Cabin > Dadonghai > Hainan Provincial Museum...',
          author: 'Too可怕Le',
          view: 4149,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6531878'
        },
        //  
        {
          title: 'Casual Free-and-Easy Travel in Hainan Island',
          content: 'Wuzhizhou Island > Queen Bay > Sanya Bay > Haikou Qilou Snack Street > Haikou Mission Hills Resort Hotel > Meilan International Airport...',
          author: 'Huizai997',
          view: 3024,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6535915'
        },
        {
          title: 'Summer Love in Hainan',
          content: 'Sheraton Haitang Bay Resort, Sanya > Meilan International Airport > MGM Resort Sanya Yalong Bay > Wuzhizhou Island > Phoenix International...',
          author: 'irnu9595',
          view: 2740,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5776390'
        },
        {
          title: 'Haikou-Sanya Fun, Enjoy Seafood and Visit Scenic Areas',
          content: 'Qilou Old Street > Wuzhizhou Island > Yalong Bay',
          author: 'Qunar User',
          view: 3430,
          topBtn: false,
          month: 'July-September',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6593239'
        },

        //
        {
          title: '2015 First Stop: Romantic天涯, Enchanting Hainan Island',
          content: 'Haikou East Railway Station > Haikou Qilou Snack Street > Qilou Old Street > Yeyutang (Zhongshan Qilou Branch) > Haikou Bell Tower',
          author: 'Qunar User',
          view: 5078,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6698496'
        },
        {
          title: ' Leisurely Autumn-End Eastern Hainan Island Tour',
          content: 'Xiuying Port > Wanquan River > Sanya Bay > Yalong Bay',
          author: 'Elf Backpack Traveler',
          view: 2643,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6488409'
        },
        //  
        {
          title: 'Empty My Mind, A Leisurely Sea Journey',
          content: 'Xiuying Port',
          author: 'Dingding - Travel',
          view: 26000,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6146904'
        },
        {
          title: 'A Different Haikou - A Blend of Classics and Prosperity, Scenery and Cuisine',
          content: 'Qilou Old Street > Dingcun Seafood Plaza for Ten Thousand People > Haikou Peoples Park > CDF Haikou Meilan Airport Duty-Free Shop...',
          author: 'Qunar User',
          view: 1159,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7541882'
        },
        {
          title: '8-Day 7-Night In-depth Self-Drive Tour of Hainan Island',
          content: 'Qilou Old Street > Longzai Bay > Ends of the Earth',
          author: 'Qunar User',
          view: 12000,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/6114818'
        },
        //  
        {
          title: 'Haikou-Lingshui-Sanya Mother-Daughter Travel Diary',
          content: 'Rongjia Guest Rooms (Haikou High-Speed Railway East Station Branch) > Qilou Old Street > Holiday Beach > Boundary Island > Hainan Boundary Island Sea Fishing Club',
          author: 'Mingming Is Here',
          view: 7059,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6969519'
        },
        {
          title: 'Apart from Yalong Bay, Beauties Love Sanya Duty-Free City (with Shopping Guide)',
          content: 'Wuzhizhou Island > CDF Sanya International Duty-Free City > Yalong Bay > Coconut Dream Promenade > Phoenix Island > Sanya Railway Station > Meilan Railway Station > Sanya Bay > Mei...',
          author: 'Gu Ge V8',
          view: 7840,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6789649'
        },
        {
          title: 'Taking Parents to the Ends of the Earth! A Warm Christmas Holiday',
          content: 'Wuzhizhou Island > Nanshan Temple > Ends of the Earth > Sanya Bay > Coconut Dream Promenade > Nanshan Cultural Tourism Zone > Haiyue Square > Yalong Bay...',
          author: 'right791984',
          view: 2521,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/4978706'
        },
        //  
        {
          title: 'A Slow Life with My Lover',
          content: 'V8 Crowne Plaza Hotel (Haikou Qilou Old Street Branch) > Haikou Qilou Snack Street > Haikou Peoples Park > Banqiao Seafood Plaza, Row 3, No. 1...',
          author: 'Daisyligz',
          view: 6227,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6657895'
        },
        {
          title: '7-Day Tour of Haikou and Sanya',
          content: 'Haikou Bell Tower > Pullman Resort Hotel Water Sports Center > Golden Hilton Hotel Childrens Playground > Crossing the Sea Memorial Square...',
          author: 'Quietly Counting Autumn',
          view: 2636,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7548700'
        },
        {
          title: 'A Sweet Journey',
          content: 'Yalong Bay > Haikou East Railway Station > Sanya Everlasting Love > Wuzhizhou Island > Sanya Duty-Free Shop > Phoenix International Airport',
          author: 'eudj3920',
          view: 3517,
          topBtn: false,
          month: 'October-December',
          day: '4-7 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5962738'
        },
        //
        //January-March 8-10 days

        {
          title: '8-Day Travel Diary in Xisha and Hainan West Coast',
          content: 'Swan Lake Zoo Meilan International Airport>Haikou Railway Station>Wanlv Park>Haikou Bell Tower>Haikou East Railway Station>Haikou Binhai Avenue>Old Street with Arcaded Buildings>Meilan Railway Station...Base',
          author: 'tvio6781',
          view: 14000,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6245677'
        },
        //  
        //  
        //January-March 4-7 days Travel with 3-5 friends  

        {
          title: '8-Day Leisure Tour in Lingshui and Wanning, Hainan',
          content: 'Meilan International Airport',
          author: 'jingjingmama00',
          view: 7498,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6996179'
        },
        {
          title: '10-Day Tour of Haikou, Lingshui, and Sanya',
          content: 'Yeze Home Apartment Hotel (Yintong Garden Branch, Haikou)>Hai Rui Tomb>Five Officials Temple>Haikou Volcanic Clusters World GeoPark>Wanquan River...',
          author: 'firstwxm',
          view: 8855,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6249948'
        },
        {
          title: 'Three-Person Parent-Child Tour in Sanya at 30 Degrees Celsius',
          content: 'Sanya Yalong Bay Huayu Resort Hotel>Old Street with Arcaded Buildings>Mission Hills冯小刚Film Commune>Haikou Railway Station...',
          author: 'Niannian Yixia',
          view: 5457,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7008819'
        },
        //  
        {
          title: 'Fate Has Not Ended, We Will Definitely Meet Again - In the Name of Love',
          content: 'Mission Hills冯小刚Film Commune>Old Street with Arcaded Buildings>Holiday Beach>Impression Hainan Island>Sanya Songcheng Water Park...',
          author: 'Qunar User',
          view: 13000,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6732781'
        },
        {
          title: '10-Day Self-Driving Tour Along Hainans East Coast to See the Sea',
          content: 'Haikou Old Street Snack Street>Longzai Bay>Hainan Tongguling Scenic Area>Danjia Fishing Village (Hejiawang Food Court)>Qingshui Bay Tourist Area>Wuzhizhou...',
          author: 'Flying Leather Shoes',
          view: 12000,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5072096'
        },
        {
          title: 'Grant Me a Period of Time, Give You a Spring Blossom',
          content: 'Wanlv Park>Holiday Beach>Old Street with Arcaded Buildings>Haikou Museum>Yalong Bay>Sanya Bay>Phoenix International Airport...',
          author: 'Yu Xiaomao Mao',
          view: 3391,
          topBtn: false,
          month: 'January-March',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6278588'
        },
        //  
        {
          title: 'A Solo Free-and-Easy Tour in Hainan (Sanya, Haikou)',
          content: 'Fresh Steward Seafood (First Market Branch)>Wuzhizhou Island>Haikou South Coach Station>Old Street with Arcaded Buildings>Deshengsha Road>Meilan International Airport...',
          author: 'Xueli',
          view: 1203,
          topBtn: false,
          month: 'April-June',
          day: '8-10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/3277059'
        },
        //  
        //  
        //April-June 8-10 days Travel with 3-5 friends  

        {
          title: 'Looking Forward to a More Colorful Life Ahead',
          content: 'Jiefang Road Pedestrian Street>Old Street with Arcaded Buildings>Zhongshan Road, Longhua District>Haikou Old Street Snack Street>Holiday Beach>Hainan University>Haikou...',
          author: 'Little Lion Aka',
          view: 6966,
          topBtn: false,
          month: 'April-June',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6602335'
        },
        //  
        {
          title: '9 Days and 8 Nights Honeymoon Tour in Haikou and Sanya',
          content: 'Haikou Old Street Snack Street>Old Street with Arcaded Buildings>Sanya Everlasting Love>Wuzhizhou Island>Coconut Dream Corridor>Phoenix International Airport...',
          author: 'Qunar User',
          view: 3479,
          topBtn: false,
          month: 'April-June',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/5647860'
        },
        //
        //
        //July-September 8-10 days Travel alone

        //
        {
          title: 'Spend Less Money on Vacation (Sanya Travel Guide)',
          content: 'Haikou Station > Haikou East Railway Station > Sanya Kana Coast Art Inn > Coconut Dream Promenade > Shengli Shopping Plaza Wanghao Supermarket (Lantian City Mall...',
          author: 'Qunar User',
          view: 10000,
          topBtn: false,
          month: 'July-September',
          day: '8-10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/5778366'
        },
        {
          title: 'Self-Drive Hainan Ring Road East Route, Travel from Haikou to Sanya, Visit Wanning, Lingshui and Baoting',
          content: 'Monkey Island Park > Qilou Old Street > Five Officials Temple > Boundary Island > Binglang Valley > Daidai Island > Boai Road > Deshengsha Road > Hainan Provincial Museum...',
          author: 'Fan Kaikaikaizi',
          view: 19000,
          topBtn: false,
          month: 'July-September',
          day: '8-10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7703434'
        },
        //  
        {
          title: '8 Days and 7 Nights in Hainan (Danzhou Ocean Flower Island + Lingshui Boundary Island + Haikou)',
          content: 'Boundary Island > Baishamen Park > Banqiao Seafood Plaza Kitchen No.5',
          author: 'criswangxin',
          view: 2739,
          topBtn: false,
          month: 'July-September',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7691638'
        },
        //  
        {
          title: '10 Days and 9 Nights Hainan Free and Comfortable Budget Travel',
          content: 'Junrui Lingshui Sour Rice Noodles (Xinfeng Street Store) > Sanya Bus Station > Haikou East Railway Station > CDF Haikou Meilan Airport Duty-Free Shop...',
          author: 'Qunar User',
          view: 6661,
          topBtn: false,
          month: 'July-September',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7073900'
        },
        {
          title: 'Sanya Vacation, Honeymoon Travel',
          content: 'Wuzhizhou Island > Dadonghai > Tianya Haijiao > Haitang Bay > Yalong Bay > Sanya Bay > Changsha-Zhuzhou-Xiangtan Bus Station > Changsha Railway Station > Holiday...',
          author: 'dldk0316',
          view: 4368,
          topBtn: false,
          month: 'July-September',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6892590'
        },
        //  
        //  
        //October-December 8-10 days Travel alone  

        //  
        {
          title: 'Drive a Campervan, Go to Hainan, Celebrate New Year’s Eve, Goodbye 2019',
          content: 'Haikou Port Ferry Terminal > Salt Field > Sanya Nanshan Cultural Tourism Zone - Convenience Store > Sanya Yacht Rental Sailing Jianlong Club > Da K...',
          author: 'Travel Photographer DaDa',
          view: 1934,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7562084'
        },
        {
          title: 'Hainan Free and Easy Travel - Sanya Travel Guide',
          content: 'Haikou Station > Sanya Yelin Beach Hotel > Sanya Bay > Luhuitou Scenic Area > Hailuohao Seafood Restaurant (Sanya Main Store) > Rongjin Haiyue...',
          author: 'Qunar User',
          view: 7734,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/5034287'
        },
        //  
        {
          title: '2018 I Accompanied My Parents on a Trip ---- Nanning, Beihai, Haikou',
          content: 'Holiday Beach > Xixiu Beach > Five Officials Temple > Qiongtai Academy > Haikou Museum > Baishamen Park > Hainan University...',
          author: 'ulmk3119',
          view: 3716,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7450987'
        },
        {
          title: '8-Day Tour',
          content: 'Meilan International Airport > Dianchi Lake > Sifang Street > Changshui International Airport > Nanping Pedestrian Street',
          author: 'azks2675',
          view: 1558,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/6946686'
        },
        {
          title: 'Haikou - Wuzhizhou Island - Sanya Bay - Tanmen Town',
          content: 'Haikou Bell Tower > Wuzhizhou Island > Haitang Bay > Sanya Bay > Dadongtian and Xiaodongtian > Tanmen Town',
          author: 'Mengmenghu Travel Notes',
          view: 4600,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Family-friendly tour',
          src: 'https://travel.qunar.com/travelbook/note/7406376'
        },
        //
        {
          title: 'Sanya, Haikou, Chongqing Double People Nine-day Tour',
          content: 'Foreigners Street > Haitang Bay > Empress Bay > Wanlv Park > Mission Hills冯小刚Film Studio > Dadonghai > Sanya Bay > Chongqing Delicious...',
          author: 'Xiaoyinger',
          view: 5549,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6643260'
        },
        {
          title: '【Hainan · Wanning】A 2000-kilometer Self-driving Surprise, Just to Take My Dog to the Beach to Play',
          content: 'Dahua Cape > Shenzhou Peninsula > Shimei Bay Yacht Club > Riyue Bay > Shimei Bay > Xiuying Port',
          author: 'MuShichongXiMuMuZhou',
          view: 7163,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7681332'
        },
        //  
        //  
        {
          title: '【Hello! 2021】Keep Moving Forward, My Annual Travel Memories',
          content: 'Haikou > Guangzhou > Tengchong > Qinghai Lake > Kangding > Qingdao > Sanya > Guilin',
          author: 'goericgo',
          view: 1178,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7643764'
        },
        {
          title: 'My Budget Travel, Cycling and Hiking Around the World',
          content: 'Meilan International Airport > Qilou Old Street > Ends of the Earth > Holiday Beach',
          author: 'Brave Heart',
          view: 1229,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6251260'
        },
        {
          title: 'Sanya, Shenzhen, Hong Kong 15-day Tour - Hong Kong Travel Guide',
          content: 'Ends of the Earth > Hai Rui Tomb > Qiongtai Academy > Five Officials Temple > Haikou Qilou Snack Street > Wanlv Park > Wong Tai Sin Temple > Peace...',
          author: 'tgvq4842',
          view: 1983,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5360323'
        },
        //  
        {
          title: 'Shared Farming, Flower Picking and Appreciation, Watching Lanterns... On the Fourth Day of the New Year, Haikou’s Outskirts Presented a Thriving Scene',
          content: 'Holiday Beach > Wanlv Park',
          author: 'Haikou Travel and Culture Expert',
          view: 857,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7449897'
        },
        {
          title: 'Strolling Through Qilou, Experiencing Time Travel, Tasting Delicious Food... On the Third Day of the New Year, Citizens and Tourists Experienced the "Haikou New Year" with Their Families',
          content: 'Mission Hills冯小刚Film Studio > Qilou Old Street',
          author: 'Haikou Travel and Culture Expert',
          view: 933,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7449895'
        },


        {
          title: 'Sanya, Haikou, Chongqing Double People Nine-day Tour',
          content: 'Foreigners Street > Haitang Bay > Empress Bay > Wanlv Park > Mission Hills冯小刚Film Studio > Dadonghai > Sanya Bay > Chongqing Delicious...',
          author: 'Xiaoyinger',
          view: 5549,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6643260'
        },
        {
          title: '【Hainan · Wanning】A 2000-kilometer Self-driving Surprise, Just to Take My Dog to the Beach to Play',
          content: 'Dahua Cape > Shenzhou Peninsula > Shimei Bay Yacht Club > Riyue Bay > Shimei Bay > Xiuying Port',
          author: 'MuShichongXiMuMuZhou',
          view: 7163,
          topBtn: false,
          month: 'October-December',
          day: '8-10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/7681332'
        },
        //  
        //  
        {
          title: '【Hello! 2021】Keep Moving Forward, My Annual Travel Memories',
          content: 'Haikou > Guangzhou > Tengchong > Qinghai Lake > Kangding > Qingdao > Sanya > Guilin',
          author: 'goericgo',
          view: 1178,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7643764'
        },
        {
          title: 'My Budget Travel, Cycling and Hiking Around the World',
          content: 'Meilan International Airport > Qilou Old Street > Ends of the Earth > Holiday Beach',
          author: 'Brave Heart',
          view: 1229,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6251260'
        },
        {
          title: 'Sanya, Shenzhen, Hong Kong 15-day Tour - Hong Kong Travel Guide',
          content: 'Ends of the Earth > Hai Rui Tomb > Qiongtai Academy > Five Officials Temple > Haikou Qilou Snack Street > Wanlv Park > Wong Tai Sin Temple > Peace...',
          author: 'tgvq4842',
          view: 1983,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/5360323'
        },
        //  
        {
          title: 'Shared Farming, Flower Picking and Appreciation, Watching Lanterns... On the Fourth Day of the New Year, Haikou’s Outskirts Presented a Thriving Scene',
          content: 'Holiday Beach > Wanlv Park',
          author: 'Haikou Travel and Culture Expert',
          view: 857,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7449897'
        },
        {
          title: 'Strolling Through Qilou, Experiencing Time Travel, Tasting Delicious Food... On the Third Day of the New Year, Citizens and Tourists Experienced the "Haikou New Year" with Their Families',
          content: 'Mission Hills冯小刚Film Studio > Qilou Old Street',
          author: 'Haikou Travel and Culture Expert',
          view: 933,
          topBtn: false,
          month: 'January-March',
          day: 'More than 10 days',
          person: 'Travel with 3-5 friends',
          src: 'https://travel.qunar.com/travelbook/note/7449895'
        },

        //
        //
        //July-September More than 10 days Travel alone
        //July-September More than 10 days Travel with 3-5 friends
        //July-September More than 10 days Family-friendly tour
        //July-September More than 10 days 情侣甜蜜游

        //

        {
          title: 'My Dream, My Passion, Fulfilling Dreams in Hainan 2018 - Haikou, Wenchang, Boao, Sanya Dreams',
          content: 'Haikou Museum > Stone Park > Moon Bay > Qi Shui Bay > Long Zai Bay > Hainan Tongguling Scenic Area > Dadonghai > Yalong Bay...',
          author: 'ulmk3119',
          view: 6438,
          topBtn: false,
          month: 'October-December',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/7443797'
        },
        {
          title: 'A Foodies Wandering Around the Four Seas',
          content: 'Penglai Pavilion > Yantai Laishan International Airport > Jihu Beach > Taimu Mountain > Beiqi Beach > Wushan > Changle International Airport > Holiday Beach...',
          author: 'Otaku',
          view: 5112,
          topBtn: false,
          month: 'October-December',
          day: 'More than 10 days',
          person: 'Travel alone',
          src: 'https://travel.qunar.com/travelbook/note/6205620'
        },
        //  
        //  
        //July-September More than 10 days Travel with 3-5 friends  
        //July-September More than 10 days Family-friendly tour  

        //  
        {
          title: 'In December 2016, We Sweated in Hainan',
          content: 'Jinjiang Inn Pinshang (Haikou Qilou Old Street Binhai Avenue Branch) > Qilou Old Street > 7 Days Inn (Haikou Dongzhidong Railway Station Zhenxing Road Branch) > Sea...',
          author: 'Qunar User',
          view: 1997,
          topBtn: false,
          month: 'October-December',
          day: 'More than 10 days',
          person: 'Sweet walk for couples',
          src: 'https://travel.qunar.com/travelbook/note/6684922'
        },

      ],
      essayShowData: []
    }
  },
  watch: {
    monthIndex(val) {
      this.essayFilter()
    },
    dayIndex(val) {
      this.essayFilter()
    },
    personIndex(val) {
      this.essayFilter()
    }
  },
  mounted() {
    this.essayShowData = this.essayData
  },
  methods: {
    changeHomeShow(item) {
      if (item.src) {
        window.open(item.src)
      } else {
        this.$router.push('/guide/blog')
        window.scrollTo(0, 0);
      }
    },
    essayFilter() {
      let tempData = this.essayData
      if (this.monthIndex !== 'All') {
        tempData = tempData.filter(item => item.month === this.monthIndex)
      }
      if (this.dayIndex !== 'All') {
        tempData = tempData.filter(item => item.day === this.dayIndex)
      }
      if (this.personIndex !== 'All') {
        tempData = tempData.filter(item => item.person === this.personIndex)
      }
      this.essayShowData = tempData
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

.search-box {
  height: 500px;
  background-image: url('@/assets/images/homeTop.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
}

.search-box .title {
  font-size: 56px;
  color: #fff;
}

.search-box .search-content {
  height: 60px;
  display: flex;
}

.search-box .search-content input {
  font-size: 18px;
  height: 100%;
  width: 620px;
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
  color: #636363;
  padding: 20px 30px;
}

.search-box .search-content a {
  color: #fff;
  font-size: 18px;
  width: 140px;
  height: 100%;
  background-color: #28b76c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.search-box .more {
  position: absolute;
  bottom: 10px;
  right: 100px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
}

.top-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  gap: 30px;
}

.top-box .title {
  font-size: 26px;
}

.top-box .top-content {
  display: flex;
  gap: 30px;
}

.top-box .top-content .item {
  width: 350px;
  height: 350px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.top-box .top-content .item:hover .pop {
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.top-box .top-content .item .pop {
  position: absolute;
  height: 100%;
  width: 100%;
  top: calc(100% - 70px);
  left: 0;
  z-index: 1000;
  padding: 0 20px;
  color: #fff;
  transition: all .5s;
}

.top-box .top-content .item .pop .pop-title {
  line-height: 70px;
  font-size: 30px;
}

.top-box .top-content .item img {
  height: 100%;
  width: 100%;
}

.select-box {
  background-color: #f7f7f7;
  width: 1100px;
  margin: auto;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.select-box .select-item {
  display: flex;
  gap: 15px;
  align-items: center;
}

.select-box .select-item span {
  color: #3cb0d0;
  padding: 5px;
  cursor: pointer;
}

.select-box .select-item span.active {
  background-color: #3cb0d0;
  color: #fff;
}

.essay-box {
  width: 1100px;
  border-top: 1px solid #eee;
  margin: 30px auto;
}

.essay-box .essay-item {
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  position: relative;
}

.essay-box .essay-item .title {
  font-weight: 500;
  font-size: 20px;
  display: inline;
  cursor: pointer;
}

.essay-box .essay-item .title:hover {
  color: orangered;
}

.essay-box .essay-item .content {
  color: #999;
  margin-top: 20px;
}

.essay-box .essay-item .button-content {
  display: flex;
  align-items: center;
  justify-content: right;
  color: #999;
  margin-top: 30px;
  gap: 20px;
}

.essay-box .essay-item .top-btn {
  position: absolute;
  right: 10px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.essay-box .essay-none {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
}

.essay-box .essay-none img {
  height: 50px;
  width: 50px;
}

.essay-box .essay-none p {
  color: #999;
}

.footer-box {
  height: 200px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323232;
  color: #fff;
  gap: 10px;
  font-size: 20px;
}

.footer-box a:hover {
  color: #ff7400;
}
</style>