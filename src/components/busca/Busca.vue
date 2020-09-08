<template>
 <div :class="busca" class="container">

        <!-- TITULO -->
        <h1 class="text">Github <span>Search</span></h1>
        <!-- TITULO -->

        <!-- AREA SEARCH -->
        <div class="area-pesquisa">
            <input type="search" class="pesquisa" v-model.lazy="texto" :placeholder=" dado.login "/>
            <button @click="newSearch()" class="btn_pesquisa"><img src="../../assets/icon/shared/searchh.png" alt="Lupa"></button>
        </div>
        <!-- AREA SEARCH -->

        <!-- PROFILE -->
        <div class="profile">
           
                <img class="perfil" :src="dado.avatar_url" alt="Perfil">
            <div class="dados">
                <h2 class="dado-nome">{{ dado.name }}</h2>
                <p class="dado-bio">{{ dado.bio }}</p>
                <ul>
                    <li>
                      <img src="../../assets/icon/profile/organization.png" alt="company">  
                      {{dado.company == null ? 0 : dado.company}}
                    </li>

                    <li>
                      <img src="../../assets/icon/profile/location.png" alt="localidade">
                      {{dado.location == null ? 0 : dado.location}}
                    </li>

                    <li>
                      <img src="../../assets/icon/shared/star.png" alt="stars">
                      0
                    </li>

                    <li>
                      <img src="../../assets/icon/profile/repository.png" alt="repo">
                      {{dado.public_repos == null ? 0 : dado.public_repos}}
                    </li>

                    <li>
                      <img src="../../assets/icon/profile/followers.png" alt="followers">
                      {{dado.followers == null ? 0 : dado.followers}}
                    </li>
                </ul>
            </div>
        </div>
        <!-- PROFILE -->

        <!-- REPOSITORIOS GITHUB -->
        <div class="repositorios">
            <ul>
                <li class="lista-repo" v-for="(repo, i) of repos" :key="i">
                    <a class="link-repo" :href="repo.html_url">{{ repo.name }}</a>
                    <p class="desc-repo">{{repo.description}}</p>
                    <img class="star-repo" src="../../assets/icon/shared/star.png" alt="stars">
                    <span class="star-count-repo">{{ repo.stargazers_count }}</span>
                </li>
            </ul>
        </div>
        <!-- REPOSITORIOS GITHUB -->

    </div>
    
</template>

<script>


export default {
  data() {

    return {

      id: this.$route.params.id,
      dado: [],
      repos: [],
      texto: ''
    }
  },

  methods: {

    newSearch() {
      axios.get(`https://api.github.com/users/${this.texto}`)
            .then(resp => this.dado = resp.data)
            .catch(error => window.location.replace('http://localhost:8080/erro404'))

        axios.get(`https://api.github.com/users/${this.texto}/repos`)
            .then(resp => this.repos = resp.data)

      this.texto = ''
    }
  },

  computed: {

    busca() {
        axios.get(`https://api.github.com/users/${this.id}`)
            .then(resp => this.dado = resp.data)
            .catch(error => window.location.replace('http://localhost:8080/erro404'))

        axios.get(`https://api.github.com/users/${this.id}/repos`)
            .then(resp => this.repos = resp.data)
            
       this.texto = ''
    }
  }  
}

</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h1 {
  text-align: start;  
  font-family: Roboto Mono;
  font-weight: bold;
  font-size: 41px;
}

span {
  font-style: italic;
  font-family: Rubik;
  font-weight: 300;
}

li {
  list-style: none;
}

img {
  height: 20px;
}

.container {
    display: grid;
    grid-template-columns: 2fr 4fr;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Rubik;
}

.area-pesquisa {
    display: flex;
    align-items: center;
    justify-self: end;
}

.pesquisa {
    width: 400px;
    height: 30px;
    padding-left: 1.5px;
    border: 1px solid black;
    font-family: Rubik;
    font-size: 15px;
}

.btn_pesquisa {
    
    height: 30px;
    width: 50px;
    border: 1px solid black;
    color: white;
    background: black;
    
}

.btn_pesquisa:hover {
  cursor: pointer;
}

.perfil {
    width: 300px;
    height: 300px;
}

.dado-nome {
  font-weight: 400;
  font-size: 25px;
}

.dado-bio {
  color: #757575;
  font-size: 15px;
  margin-top: 10px;
  width: 80%;
}

.dados ul {
  margin-top: 15px;
  color: #757575;
}

.repositorios ul {
    margin-left: 10px;
}

.lista-repo {
  font-family: Rubik;
  margin-bottom: 35px;
}

.link-repo {
  color: black;
  font-size: 20px;
}

.desc-repo {
  color: #757575;
  font-size: 15px;
  font-weight: 300;
}

.star-repo {
  margin-top: 5px;
}

.star-count-repo {
  font-style: normal;
  font-size: 15px;
  color: #757575;
}

</style>