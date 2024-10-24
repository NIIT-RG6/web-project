<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
          <li class="nav-item mx-4">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item dropdown mx-4">
            <router-link to="/attractions" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Attractions</router-link>
            <ul class="dropdown-menu">
              <router-link to="/attractions/college" class="dropdown-item">Hainan University</router-link>
              <router-link to="/attractions/park" class="dropdown-item">Baishamen Park</router-link>
              <router-link to="/attractions/sky" class="dropdown-item">The Sky Mountain</router-link>
              <router-link to="/attractions/street" class="dropdown-item">Qilou Street</router-link>
              <router-link to="/attractions/foods" class="dropdown-item">Haikou Foods</router-link>
            </ul>
          </li>

          <li class="nav-item mx-4">
            <router-link to="/guide" class="nav-link">Travel Guide</router-link>
          </li>

          <li class="nav-item mx-4">
            <router-link to="/community" class="nav-link">Community</router-link>
          </li>

          <li class="nav-item dropdown mx-4">
            <router-link to="/attractions" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">About us</router-link>
            <ul class="dropdown-menu">
              <router-link to="/about us/team class=" dropdown-item>Team</router-link>
              <router-link to="/about us/contract" class="dropdown-item">Contract</router-link>
              <router-link to="/about us/privacy" class="dropdown-item">Privacy</router-link>
            </ul>
          </li>


          <form class="d-flex mx-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

          <router-link to="/login" class="btn btn-outline-primary ms-5">Login</router-link>
          <router-link to="/register" class="btn btn-primary ms-2">Register</router-link>
          ul <li class="nav-item dropdown mx-4">
            <router-link to="/attractions" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">About us</router-link>
            <ul class="dropdown-menu">
              <router-link to="/about us/team class" dropdown-item>Team</router-link>
              <router-link to="/about us/contract" class="dropdown-item">Contract</router-link>
              <router-link to="/about us/privacy" class="dropdown-item">Privacy</router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>