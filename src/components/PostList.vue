<template>
  <div class="post-list">
    <PostCards v-for="post in posts" :key="post.id" :post="post" @click="selectPost(post)" />
  </div>
</template>

<script>
import PostCards from './PostCards.vue';

export default {
  components: {
    PostCards,
  },
  data() {
    return {
      posts: [
        {
          id: 1, title: 'The sunset in Haikou CBD is so beautiful', description: 'Guoxing Avenue Dayingshan CBD has begun to take shape, and when the Hainan Center is completed in the future, the skyline of Haikou will be more layered!',
          image1: require('@/assets/images/img1.jpg'),
          image2: require('@/assets/images/img2.jpg'),
          comments: [
            { name: 'Li Xiaomeow', content: 'The weather has been really nice lately' },
            { name: '💫Vincent Tour North Carolina', content: "The weather's been really nice lately." },
            { name: 'Rose', content: 'so beatuiful!' },


          ],
        },
        {
          id: 2, title: 'Impression of Haikou', description: 'The night of Haikou Qilou Old Street is very lively, the locals get together to eat, drink and chat, and the roadside is full of electric bicycles, which is the relaxation of Haikou people.',
          image1: require('@/assets/images/img3.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 3, title: 'Haikou sea viewing platform', description: 'Shot in the blues before sunrise, for the first time with a 12mm focal length. Bask in the scenery of Haikou',
          image1: require('@/assets/images/img5.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 4, title: 'This is probably the most populous place in Haikou', description: 'I dont know if it is the off-season, which people rarely take the bus, often charter a bus to ride the old street, there are a lot of people, half poetry, half fireworks, foreign retro, Mazu bless, even eat a few days to eat dad tea',
          image1: require('@/assets/images/img4.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 5, title: 'Sunset in Haikou CBD is actually so beautiful!', description: "Guoxing Avenue Danyingshan CBD has taken shape, the future to be built in Hainan Center, Haikou's skyline will be more layered!",
          image1: require('@/assets/images/img1.jpg'),
          image2: require('@/assets/images/img2.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 6, title: 'Haikou Impression', description: 'The old street of Haikou Jialou is bustling at night, locals gather in twos and threes to eat and drink and chat, and the roadside is full of motorized bicycles, which is the sense of relaxation of Haikou people, right?',
          image1: require('@/assets/images/img3.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 7, title: 'Haikou Observation Deck', description: 'Taken in the blues before sunrise, first time using 12mm focal length. The scenery of Haikou',
          image1: require('@/assets/images/img5.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 8, title: 'This is probably the most crowded place in Haikou.', description: "I don't know if it's off-season, but there's not many people here, so I take public transportation, and often take a chartered car, but the old Jialou Street is full of people, half poetic, half fireworks, and retro, and blessed by the Mazu, with a few days of Dad's Tea.",
          image1: require('@/assets/images/img4.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 9, title: 'Haikou sea viewing platform', description: 'Shot in the blues before sunrise, for the first time with a 12mm focal length. Bask in the scenery of Haikou',
          image1: require('@/assets/images/img5.jpg'),
          image2: require('@/assets/images/img2.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 10, title: 'This is probably the most populous place in Haikou', description: 'I dont know if it is the off-season, which people rarely take the bus, often charter a bus to ride the old street, there are a lot of people, half poetry, half fireworks, foreign retro, Mazu bless, even eat a few days to eat dad tea',
          image1: require('@/assets/images/img4.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 11, title: 'Sunset in Haikou CBD is actually so beautiful!', description: "Guoxing Avenue Danyingshan CBD has taken shape, the future to be built in Hainan Center, Haikou's skyline will be more layered!",
          image1: require('@/assets/images/img1.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },
        {
          id: 12, title: 'Haikou Impression', description: 'The old street of Haikou Jialou is bustling at night, locals gather in twos and threes to eat and drink and chat, and the roadside is full of motorized bicycles, which is the sense of relaxation of Haikou people, right?',
          image1: require('@/assets/images/img3.jpg'),
          comments: [
            { name: 'Bob', content: 'There are articles and comments here' },
            { name: 'Jack', content: "We can like other's comments and like their comments" },
            { name: 'Rose', content: 'We can also send our own comments and delete them' }
          ],
        },

      ],
    };
  },
  methods: {
    selectPost(post) {
      this.$emit('post-selected', post); // trigger event to pass selected post data to parent component
    },
    deleteComment(postId, commentIndex) {
      console.log("this.posts", this.posts)
      console.log("this.posts.comments", this.posts.comments)
      // this.posts.comments.splice(index, 1);
      const post = this.posts.find(p => p.id === postId);
      if (post && post.comments) {
        post.comments.splice(commentIndex, 1); // delete comment at index
        console.log('Deleted comment at index', commentIndex);
      }
      console.log("deleted a this index", index)
      console.log("this.posts.comments", this.posts.comments)
    }
  }
};
</script>

<style scoped>
.post-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /*make cards evenly spaced*/
  padding: 16px;
}

.card-item {
  flex: 0 1 calc(33.33% - 16px);
  /*set card width to 33.33% and add 16px gutters */
  margin-bottom: 16px;
  /*add 16px margin between cards */
}

@media (max-width: 1024px) {
  .card-item {
    flex: 0 1 calc(50% - 16px);
    /*display only 2 cards per row on smaller screens */
  }
}

@media (max-width: 600px) {
  .card-item {
    flex: 0 1 100%;
    /* display only one card per row on smaller screens */
  }
}
</style>
