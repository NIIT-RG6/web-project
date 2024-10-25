<template>
    <footer class="footer bg-dark text-white py-4">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <!-- About us -->
                <div class="col-md-3 about-us">
                    <h5>ABOUT US</h5>
                    <p>Welcome to our website, where you can find rich travel information and the best travel strategies
                        in Haikou.</p>
                </div>

                <!-- Subscribe to our newsletter -->
                <div class="col-md-4 newsletter text-center">
                    <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <p>Stay updated with the latest travel news and exclusive offers.</p>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Enter your email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>

                <!-- Contact us -->
                <div class="col-md-3 contact-us">
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

/* Flex layout to ensure center alignment */
.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.newsletter {
    text-align: center;
}

.about-us,
.contact-us {
    margin: 0 20px;
}

/* Adjust spacing to achieve balanced look */
.col-md-3,
.col-md-4 {
    flex: 1;
}
</style>
