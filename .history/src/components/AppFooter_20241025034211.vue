<template>
    <footer class="footer bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <!-- About us -->
                <div class="col-md-4 mx-auto">
                    <!-- <img :src="" alt=""> -->
                    <h5>ABOUT US</h5>
                    <p>Welcome to our website, where you can find rich travel information and the best travel strategies
                        in Haikou.</p>
                </div>

                <!-- Quick Links -->
                <div class="col-md-4 mx-auto">
                    <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <p>Stay updated with the latest travel news and exclusive offers.</p>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Enter your email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>


                <!-- NEWSLETTER SIGNUP -->
                <div class="col-md-4 mx-5">
                    <h5>CONTACT US</h5>
                    <ul class="list-unstyled contact-info">
                        <li>
                            <i class="fas fa-phone-alt"></i> Phone: +86 123 456 789
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i> Email: contact@tourguide.com
                        </li>
                        <li class="address-item">
                            <i class="fas fa-map-marker-alt"></i> Address: No. 58 Renming Avenue, Meilan District,
                            Haikou City, Hainan Province
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col text-center">
                    <p>&copy;Rythem of Coconut and Sea. </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
.footer {
    background-color: #343a40;
    color: #ffffff;
    padding: 20px 0;
}

.contact-info li {
    margin-bottom: 10px;
}

.contact-info i {
    margin-right: 8px;
}

.footer a {
    color: #ffffff;
    transition: color 0.3s;
}

.footer a:hover {
    color: #dddddd;
}

.address-item {
    position: relative;
    padding-left: 25px;
}

.address-item i {
    position: absolute;
    left: 0;
    top: 0;
}

.address-item span {
    display: inline-block;
    margin-left: 25px;
}
</style>