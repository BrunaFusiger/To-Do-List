<template>
  <form id="base" @submit.prevent>
    <h1> {{ $route.name }} </h1>

    <section class="input">
      <Message :msg="msg" v-show="msg" />

      <p>{{ isCadastro ?
          'Digite um Nickname Válido:' :
          'Digite o seu Nickname:'
      }}</p>
      <input v-model="nickname" type="text" placeholder="Digite o nickname aqui" />
    </section>

    <div class="buttons">
      <button v-if="isCadastro" @click="cadastrar">Cadastrar</button>
      <button v-else @click="login">Entrar</button>

      <router-link v-if="isCadastro" to="/login" class="link-button">Ou faça o login aqui</router-link>
      <router-link v-else to="/cadastro" class="link-button">Ou cadastre-se aqui</router-link>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
import Axios from 'axios';
import { useUserStore } from '@/store/userStore.js';
import Message from '@/components/Message.vue';

export default defineComponent({
  components: {
    Message
  },
  data() {
    return {
      userStore: useUserStore(),
      nickname: null,
      msg: null
    }
  },
  computed: {
    isCadastro() {
      return this.$route.name == 'cadastro';
    }
  },
  methods: {
    login() {
      Axios.create().post("https://localhost:7018/user/login",
        this.nickname,
        { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }, })
        .then(res => {
          this.userStore.setUser(res.data.entity);
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          console.log(err);
          this.msg = err.response.data.description;
          setTimeout(() => this.msg = "", 3000);
        }
        );


    },
    cadastrar() {
      Axios.create().post("https://localhost:7018/user/cadastro",
        this.nickname,
        { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } })
        .then(res => {
          this.userStore.setUser(res.data.entity);
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          console.log(err);
          this.msg = err.response.data.description;
          setTimeout(() => this.msg = "", 3000);
        }
        );
    },
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
    button {
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



