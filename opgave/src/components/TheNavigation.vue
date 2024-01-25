<template>
  <header>
    <nav>
        <ul>
            <!-- Gebruik voor een goed visueel resultaat, voor elke link die je 
            toevoegt in de navigatie, een <li> element. -->
            <li>
              <router-link to="/">Home</router-link>
            </li>
          <li>
            <router-link to="/movies">Movies</router-link>
          </li>
        </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    background-color: #d4f2d2;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    margin: 0 2rem;
  }

  router-link {
    text-decoration: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: #161616;
    padding: 0.5rem 1.5rem;
    display: inline-block;
  }

  router-link:hover {
    color: #768569;
  }
</style>