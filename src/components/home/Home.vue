<template>
    <div>
        
        <div class="pesquisa">

            <!-- TITULO -->
            <h1 class="text">Github<span class="text2">Search</span></h1>
            <!-- FIM TITULO -->

            <!-- AREA DE BUSCA -->
            <div class="areabusca">
                
                <input :class="apaga" type="search" class="busca" v-model.lazy="texto" placeholder="Nome do usuario"/>
               
                <router-link :to="{ name: 'busca', params: { id: texto } }" class="procurar">
                    <img class="lupa" src="../../assets/icon/shared/searchh.png" alt="Lupa">
                </router-link>

            </div>
            <!-- FIM AREA BUSCA -->

        </div>
        
    </div>
</template>

<script>

export default {
  data () {
    return {
        texto: ''
    }
  },

  computed: {

    apaga() {
      this.texto = ''
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .text {
    width: 98%;  
    margin-top: 10rem;
    margin-bottom: 0;
    text-align: center;
    display: block;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    
    color: #000000;
  }

  .text2 {
    font-weight: 300;
    font-style: italic;
    font-family: Rubik;
    margin-left: 20px;
  }

  .pesquisa {
    
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    
    align-items: center;    
  }  

  .areabusca {
    display: flex;
  }

  .busca {
    width: 30rem;
    height: 1.8rem;
    border: 2px solid black;
  }

  .procurar {
    background: #000000;
    width: 4rem;
    text-align: center;
    border: none;
  }

  .procurar:hover {
    cursor: pointer;
  }

  .lupa {
    margin-top: 5px;

    width: 15px;
    height: 15px;
  }


</style>
