<template>
  <form id="base">
    <h1> {{ $route.name }} </h1>

    <section class="input">
      <span>nickname inválido</span>
      <p>{{ isCadastro ?
          'Digite um Nickname Válido:' :
          'Digite o seu Nickname:'
      }}</p>
      <input type="text" placeholder="  Digite o nickname aqui">
    </section>

    <div class="buttons">
      <a href=""><input type="submit">ENVIAR</a>

      <router-link v-if="isCadastro" to="/login" class="link-button">Ou faça o login aqui</router-link>
      <router-link v-else to="/cadastro" class="link-button">Ou cadastre-se aqui</router-link>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
    }
  },
  computed: {
    isCadastro() {
      return this.$route.name == 'cadastro';
    }
  }
});
</script>

<style scoped lang="scss">
@use '@/assets/style/mixins' as *;

#base {
  text-align: center;
  @include base;
  max-width: 40%;


  h1 {
    @include title;
    text-transform: uppercase;
  }

  a input {
    display: none;
  }

  .input {
    display: block;
    text-align: center;
    width: 100%;

    span {
      background-color: rgba($color: #161bb1, $alpha: .3);
      color: rgb(218, 19, 19);
      padding: .5rem 3rem;
      display: none;
    }

    p {
      text-align: start;
      margin-block: 2rem 1rem;
      cursor: default;
    }

    input {
      @include inputForm;

      width: 100%;
      max-width: 100%;
    }
  }

  .buttons {
    a {
      display: block;
      margin: 3rem auto;
      width: 40%;
    }

    .link-button {
      background-color: transparent;
      color: #fff;
    }
  }
}
</style>



