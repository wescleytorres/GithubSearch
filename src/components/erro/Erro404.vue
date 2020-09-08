<template>
  <div class="container">

    <!-- IMAGEM -->
    <div class="navig">
      <img src="../../assets/error/Seaman.jpg" alt="erro-navegation">
    </div>
    <!-- IMAGEM -->

    <!-- MSG DE ERROR -->
    <h1 class="error">Erro 404 page not found...</h1>
    <h2 class="aviso">Parece está perdido marujo, algo de errado não está certo!</h2>
    <!-- MSG DE ERROR -->

  </div>
</template>

<script>
export default {

}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Rubik;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
}

.error {
  grid-column: 2/2;
  grid-row: 2/2;
  margin: 10px;
}

.navig {
  height: 580px;
  grid-column: 2/2;
  grid-row: 2/2;
}

.aviso {
  width: 300px;
  grid-column: 2/2;
  grid-row: 2/2;
  margin: 90px;

}

img {
  height: 100%;
  border-radius: 10px;
}

</style>