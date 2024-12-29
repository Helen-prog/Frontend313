<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4 mx-auto">

        <form @submit.prevent="registerUser">

          <div v-show="step === 1" class="step">

            <div class="mb-3">
              <label for="name" class="form-label">Ваше имя</label>
              <input @blur="v$.name.$touch()" :class="{'is-invalid': v$.name.$error}" type="text" v-model="name" class="form-control" id="name">

              <div v-if="v$.name.$error"><small>Имя не заполнено</small></div>
            </div>

            <div class="mb-3">
              <label for="surname" class="form-label">Ваша фамилия</label>
              <input @blur="v$.surname.$touch()" :class="{'is-invalid': v$.surname.$error}" type="text" v-model="surname" class="form-control" id="surname">

              <div v-if="v$.surname.$error"><small>Фамилия не заполнена</small></div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input @blur="v$.email.$touch()" :class="{'is-invalid': v$.email.$error}" type="email" v-model="email" class="form-control" id="email">

              <div v-if="v$.email.$error"><small>Email некорректный или поле не заполнено</small></div>
            </div>

            <button 
              @click="nextStep" 
              type="button" 
              class="btn btn-primary"
              :disabled="disabledBtn1"
            >Следующий шаг</button>
          </div>

          <Transition name="fade">
            <div v-show="step === 2" class="step">
              <div class="mb-3">
                <label for="psw" class="form-label">Пароль</label>
                <input @blur="v$.psw.$touch()" :class="{'is-invalid': v$.psw.$error}" type="password" v-model="psw" class="form-control" id="psw" v-show="!showPass">
                <input @blur="v$.psw.$touch()" :class="{'is-invalid': v$.psw.$error}" type="text" v-model="psw" class="form-control"  v-show="showPass">

                <button @click="showPass = !showPass" class="form-control">
                  <span v-show="!showPass">Показать пароль</span>
                  <span v-show="showPass">Скрыть пароль</span>
                </button>

                <div v-if="v$.psw.$error"><small>Поле с паролем не заполнено или меньше 6 символов</small></div>
              </div>

              <div class="mb-3">
                <label for="psw2" class="form-label">Подтверждение пароля</label>
                <input @blur="v$.psw2.$touch()" :class="{'is-invalid': v$.psw2.$error}" type="password" v-model="psw2" class="form-control" id="psw2" v-show="!showPass2">
                <input @blur="v$.psw2.$touch()" :class="{'is-invalid': v$.psw2.$error}" type="text" v-model="psw2" class="form-control"  v-show="showPass2">
                <button @click="showPass2 = !showPass2" class="form-control">
                  <span v-show="!showPass2">Показать пароль</span>
                  <span v-show="showPass2">Скрыть пароль</span>
                </button>

                <div v-if="v$.psw2.$error"><small>Пароли не совпадают</small></div>
              </div>

              <button @click="backStep" type="button" class="btn btn-light">Назад</button>
              <button 
                @click="nextStep" 
                type="button" 
                class="btn btn-primary"
                :disabled="disabledBtn2"
              >Следующий шаг</button>
            </div>
          </Transition>

          <Transition name="fade">
            <div v-show="step === 3" class="step">
              <div class="mb-3">
                <label for="country" class="form-label">Страна</label>
                <input @blur="v$.country.$touch()" :class="{'is-invalid': v$.country.$error}" type="text" v-model="country" class="form-control" id="country">
<!-- v-molel => v-model -->
                <div v-if="v$.country.$error"><small>В поле не должны содержаться цифры и спецсимволы</small></div>
              </div>

              <div class="mb-3">
                <label for="city" class="form-label">Город</label>
                <input @blur="v$.city.$touch()" :class="{'is-invalid': v$.city.$error}" type="text" v-model="city" class="form-control" id="city">

                <div v-if="v$.city.$error"><small>В поле не должны содержаться цифры и спецсимволы</small></div>
              </div>

              <button @click="backStep" type="button" class="btn btn-light">Назад</button>
              <button class="btn btn-primary">Зарегистрироваться</button>
            </div>
          </Transition>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

const alpha = helpers.regex(/^[А-яЁёA-Za-z]*$/)

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      step: 1,
      showPass: false,
      showPass2: false,

      name: "",
      surname: "",
      email: "",
      psw: "",
      psw2: "",
      country: "",
      city: ""
    }
  },
  methods: {
    nextStep() {
      if (this.step < 3)
        this.step++
    },
    backStep() {
      if (this.step > 1)
        this.step--
    },
    async registerUser() {
      const result = await this.v$.$validate()
      if(!result){
        return
      }
      console.log("Регистрация прошла успешно");
      console.log(this.name);     

    }
  },
  computed: {
    disabledBtn1(){
      return this.v$.name.$invalid || this.v$.surname.$invalid || this.v$.email.$invalid
    },
    disabledBtn2(){
      return this.v$.psw.$invalid || this.v$.psw2.$invalid 
    }
  },
  validations () {
    return {
      name: { required },
      surname: { required },
      email: { required, email },
      psw: { required, minLength: minLength(6) },
      psw2: { required, sameAs: sameAs(this.psw) },
      country: { alpha },
      city: { alpha }
    }
  }
}
</script>

<style>
.fade-enter-active{
  transition: opacity 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
}
small{
  color: red;
}
</style>


<!-- <template>
  <div class="containet">
    <form @submit.prevent="submitHandler" class="card">
      <h1>Опрос</h1>

      <app-input
        label="Ваше имя:"
        :error="errors.name"
        v-model:value="name"
      ></app-input>

      <p>
        <label for="age">Ваш возраст:</label><br>
        <input type="number" id="age" min="0" max="70" v-model="age">
      </p>
      <p>
        <label for="city">Ваш город:</label><br>
        <select id="city" v-model="city">
          <option value="nsk">Новосибирск</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="kzn">Казань</option>
          <option value="msk">Москва</option>
        </select>
      </p>
      <p>Ваш пол: <br>
        <input type="radio" id="m" name="pol" v-model="pol" value="male">
        <label for="m">M</label><br>
        <input type="radio" id="j" name="pol" v-model="pol" value="female">
        <label for="j">Ж</label>
      </p>
      <p>Какие языки вы знаете: <br>
        <input type="checkbox" id="ru" v-model="language" value="ru">
        <label for="ru">Русский</label><br>
        <input type="checkbox" id="en" v-model="language" value="en">
        <label for="en">Английский</label><br>
        <input type="checkbox" id="de" v-model="language" value="de">
        <label for="de">Немецкий</label><br>
        <input type="checkbox" id="zh" v-model="language" value="zh">
        <label for="zh">Китайский</label><br>
      </p>

      <p>Лицензионное соглашение: <br>
        <input type="checkbox" id="agreement" v-model="agree">
        <label for="agreement">Согласен</label>
      </p>

      <button>Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './components/AppInput.vue';

export default {

  data() {
    return {
      name: "",
      age: 25,
      city: 'msk',
      pol: null,
      language: [],
      agree: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = "Имя не введено"
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
        console.log("Pol:", this.pol);
        console.log("Language:", this.language);
        console.log("Agree:", this.agree);
      }
    }
  },
  components: {AppInput}
}
</script>

<style>
.card small{
  color: red;
}

.card .invalid input{
  border-color: red;
}
</style> -->


<!-- <template>
  <div class="content">
    <div class="card">
      <h2>Динамические компоненты</h2>
    </div>
    <div class="card">
      <app-button :color="oneColor" @action="active='one'">One</app-button>
      <app-button :color="twoColor" @action="active='two'">Two</app-button>
    </div>
    <component :is="componentName"></component>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue';
import AppTextOne from './components/AppTextOne.vue';
import AppTextTwo from './components/AppTextTwo.vue';

export default {
  data(){
    return {
      active: 'one'
    }
  },
  computed: {
    componentName(){
      if (this.active === 'one'){
        return 'app-text-one'
      }
      return 'app-text-two'
    },
    oneColor(){
      return this.active === 'one' ? 'green' : ''
    },
    twoColor(){
      return this.active === 'two' ? 'green' : ''
    }
  },
  components: {AppButton, AppTextOne, AppTextTwo}
}
</script> -->


<!-- <template>
  <div class="content">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{idx, iter}">
        <span style="color: green">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Текст для нового блока</p>

      <template #left>
        <h3>Это заголовок!</h3>
      </template>

      <template #right>
        <h3>Это подвал!</h3>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './components/AppBlock.vue';
import AppList from './components/AppList.vue';

export default {
  components: { AppBlock, AppList }
}
</script> -->


<!-- <template>
  <div class="content">
    <div class="card">
      <h3>Новости: {{ now }}</h3>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
   
    <first-component
      v-for="item in news"
      :key="item"
      :title="item.title"
      :description="item.description"
      :id="item.id"
      :was-read="item.wasRead"
      v-on:open-news="openRate++"
      @read-news="readNews"
      @unmark="unmarkNews"
    ></first-component>
  
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent';

export default {
 data(){
  return{
    now: new Date().toLocaleDateString(),
    news: [
      {title: "Новость 1", description: "Описание новости 1", id: 1}, 
      {title: "Новость 2", description: "Описание новости 2", id: 2}
    ],
    openRate: 0,
    readRate: 0
  }
 },
 provide(){
  return {
    title: 'Список всех новостей',
    news: this.news
  }
 },
 methods: {
  readNews(id){
    const idx = this.news.findIndex(news => news.id === id)
    this.news[idx].wasRead = true;
    this.readRate++;
  },
  unmarkNews(id){
    const news = this.news.find(news => news.id === id)
    news.wasRead = false;
    this.readRate--
  }
 },
 components: {
  // "first-component": FirstComponent,
  // "FirstComponent": FirstComponent,
  // FirstComponent: FirstComponent,
  FirstComponent
 }
}
</script>

<style scoped>
h3{
  color: darkgoldenrod;
}
</style> -->
