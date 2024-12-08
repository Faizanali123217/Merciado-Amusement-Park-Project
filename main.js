const navbar=`
<nav class="navbar navbar-expand-lg navigation">
  <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand" href="signup.html">
      <img src="assets/images/logo pics/pic1.png" class="logo" alt="">
    </a>

    <!-- Navbar Toggle Button for Smaller Screens -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <!-- Home Link -->
        <li class="nav-item">
          <a class="nav-link navcontent" href="home.html">Home</a>
        </li>

        <!-- Gallery Link -->
        <li class="nav-item">
          <a class="nav-link navcontent" href="gallery.html">Gallery</a>
        </li>

        <!-- Attractions Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navcontent" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Attractions
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item dropanchor" href="zone and attractions.html">Zones & Attractions</a></li>
            <li><a class="dropdown-item dropanchor" href="restaurents.html">Restaurants</a></li>
            <li><a class="dropdown-item dropanchor" href="Entertainment.html">Entertainment</a></li>
          </ul>
        </li>

        <!-- Tickets & Prices Link -->
        <li class="nav-item">
          <a class="nav-link navcontent" href="tickets and prices.html">Tickets & Prices</a>
        </li>

        <!-- About Us Link -->
        <li class="nav-item">
          <a class="nav-link navcontent" href="aboutus.html">About Us</a>
        </li>

         <!-- Contact Us Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navcontent" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a class="dropdown-item dropanchor" href="contactus.html">Contact Us</a></li>
            <li><a class="dropdown-item dropanchor" href="Feedback.html">Feedback</a></li>
          </ul>
        </li>
        
        <!-- User Icon Link -->
        <li class="nav-item">
          <a class="nav-link navcontent" href="signup.html">
            <i class="fas fa-user"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`
document.getElementById("nav").innerHTML=navbar





const footer=`
<footer class="footer mt-auto py-4 text-white">
    <div class="container">
        <div class="row">
            <!-- About Section -->
            <div class="col-md-4">
                <h5 class="footer-title">About Amusement Park</h5>
                <p>Merciado Amusement Park is your destination for thrilling rides, family-friendly attractions, and unforgettable experiences. Join us for endless fun and excitement!</p>
            </div>
            <!-- Quick Links -->
            <div class="col-md-4">
                <h5 class="footer-title">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="home.html" class="footer-link">Home</a></li>
                    <li><a href="gallery.html" class="footer-link">Gallery</a></li>
                    <li><a href="zone and attractions.html" class="footer-link">Attractions</a></li>
                    <li><a href="tickets and prices.html" class="footer-link">Tickets & Prices</a></li>
                    <li><a href="contactus.html" class="footer-link">Contact Us</a></li>
                </ul>
            </div>
            <!-- Contact Information -->
            <div class="col-md-4">
                <h5 class="footer-title">Contact Us</h5>
                <p>123 Fun Ave, Adventure City, TX 78910</p>
                <p>Email: info@merciadopark.com</p>
                <p>Phone: +1 234-567-8900</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/yourpage" class="social-icon"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/yourusername" class="social-icon"><i class="bi bi-instagram"></i></a>
                    <a href="https://twitter.com/yourusername" class="social-icon"><i class="bi bi-twitter"></i></a>
                    <a href="https://www.youtube.com/c/yourchannel" class="social-icon"><i class="bi bi-youtube"></i></a>
                </div>
            </div>
        </div>
        <hr class="bg-secondary my-4">
        <div class="text-center">
            <p>&copy; 2024 Merciado Amusement Park. All Rights Reserved.</p>
        </div>
    </div>
</footer>
`
document.getElementById("footer").innerHTML=footer



