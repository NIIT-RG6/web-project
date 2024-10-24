<template>
    <div class="homepage">
        <!-- carousel slide -->

        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="firstImage" class="d-block w-100 custom-carousel-img" alt="..." />
                </div>
                <div class="carousel-item">
                    <img :src="secondImage" class="d-block w-100 custom-carousel-img" alt="..." />
                </div>
                <div class="carousel-item">
                    <img :src="thirdImage" class="d-block w-100 custom-carousel-img" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- main content -->
        <div class="container mt-5">
            <h1 class="text-center">Welcome to the Travel Guide Website!</h1>
            <p class="text-center">{{ message }}</p>
        </div>

        <!-- card -->
        <div class="container row mt-5 mx-5 justify-content-center">
            <div class="col-md-5 mb-5 card-group" v-for="(attraction, index) in Attractions" :key="index">
                <div class="card">
                    <img :src="attraction.image" class="card-img-top custom-card-img" :alt="attraction.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ attraction.name }}</h5>
                        <p class="card-text">{{ attraction.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            message: "Welcome to our website, below are the four intersting attractions recommended. Wish you a happy travel!",
            firstImage: require('@/assets/images/Carousel1.jpg'),
            secondImage: require('@/assets/images/QiLou.webp'),
            thirdImage: require('@/assets/images/SkyMountain.png'),
            Attractions: [
                {
                    name: 'Hainan University',
                    description: 'Hainan University (HNU) was a merger with the former South China University of Tropical Agriculture in August 2007. It is a comprehensive key university jointly constructed by the Ministry of Education (MOE) and the Hainan Provincial People’s Government',
                    image: require('@/assets/images/HNU.jpg')
                },
                {
                    name: 'Qilou Old Street',
                    description: 'Take a walk into Hainan’s past at the Haikou Historic Qilou Streets, where you will see the overhanging second story of the “qilou” or arcade style buildings. This architectural style shows a strong South Sea influence, and some of the buildings here are 700+ years old. Drink an old fashioned salt lemonade in the shady back gardens of Zhongshan Rd’s many cafes, shop for Hainan ...',
                    image: require('@/assets/images/QiLou.webp')
                },
                {
                    name: 'Bai Sha Men',
                    description: 'Baishamen Park is located in the northern part of Haidian Island, Meilan District, Haikou City, adjacent to the Qiongzhou Strait to the north. The park covers an area of 60 hectares and has four major tourist themed areas: Haikou Ring, Happy Ocean, Evening Coast, and Urban Station. The park explores the core of Haikou’s region and humanistic spirit, showcasing the rich historical, cultural, and cultural atmosphere of Hainan’s seaside leisure.',
                    image: require('@/assets/images/BaiShaMen.png')
                },
                {
                    name: 'The Mountain in Sky',
                    description: 'At the end of the city, enjoying the beautiful sunset by the sea is the romance that belongs exclusively to the "Mountain in the Sky". The high-standard station No. 6 in Haikou Bay - "Mountain in the Sky" is located in the northwest of the beautiful sand coast of Haidian Island, Haikou City, Hainan Province. It is surrounded by the sea on three sides, connecting the city and the seaside together, like a pearl inlaid on the seaside, dazzling.',
                    image: require('@/assets/images/SkyMountain.png')
                }
            ]
        };
    }
};
</script>

<style scoped>
.custom-carousel-img {
    height: 500px;
    object-fit: cover;
}

.card {
    margin-bottom: 20px;
}

.custom-card-img {
    height: 300px;
    object-fit: cover;
}
</style>