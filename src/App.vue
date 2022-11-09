<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="max-w-[90rem] my-0 mx-auto px-24 py-24">
      <h1 class="font-semibold text-3xl text-white-600">
        Lista de pessoas
      </h1>
      <div class="flex justify-between items-center mt-14">
        <div class="flex flex-col w-[48%]">
          <label class="font-semibold text-base text-grey-300">
            Pesquisar
          </label>
          <input 
            type="text" 
            name="" 
            id=""
            placeholder="Nome do aluno"
            class="bg-dark-500 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base" 
            @change="onSearch" 
            v-model="search" 
          />
        </div>

        <div class="flex flex-col w-[48%]">
          <label class="font-semibold text-base text-grey-300">
            Estado
          </label>
          <select 
            type="text" 
            name="" 
            id=""
            placeholder="Nome do aluno"
            class="bg-dark-500 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base cursor-pointer"
            @change="onSearch"
            v-model="searchState"
          >
          <option value="">Todas</option>
          <option
            v-for="nat in $store.state.dataUser"
            :key="nat.location.state"
          >
            {{nat.location.state}}
          </option>
          </select>
        </div>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
          <table class="w-full text-base text-left text-grey-300 bg-dark-400">
            <thead class="text-lg">
              <tr>
                <th scope="col" class="py-3 px-6">Nome</th>
                <th scope="col" class="py-3 px-6">Sexo</th>
                <th scope="col" class="py-3 px-6">Estado</th>
                <th scope="col" class="py-3 px-6">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-t border-grey-300"
                v-for="user in onSearch()" 
                :key="user.id.value"
              >
                <th scope="row" class="py-3 px-6 font-medium text-white-600 whitespace-nowrap">
                  {{`${user.name.first} ${user.name.last}`}}
                </th>
                <th scope="row" class="py-3 px-6 font-medium text-white-600 whitespace-nowrap">
                  {{user.gender}}
                </th>
                <th scope="row" class="py-3 px-6 font-medium text-white-600 whitespace-nowrap">
                  {{user.location.state}}
                </th>
                <th scope="row" class="py-3 px-6 font-medium text-white-600 whitespace-nowrap">
                  <button class="bg-dark-500 rounded-lg py-0.5 px-1.5 cursor-pointer hover:brightness-75 transition-all">
                    Visualizar
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {  
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      loading: false,
      search: '',
      searchState: ''
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch('getUsers').finally(() => {
      this.loading = false;
    })
  },
  methods: {
    onSearch() {
      if (this.search.length > 0) {
        return this.$store.state.dataUser.filter(a => (a.name.first.toUpperCase() || a.name.last.toUpperCase()).includes(this.search.toUpperCase()));
      } else if (this.searchState.length > 0) {
        return this.$store.state.dataUser.filter(a => a.location.state.toUpperCase().includes(this.searchState.toUpperCase()));
      } else {
        return this.$store.state.dataUser;
      }
    }
  }
}
</script>

<style>

</style>
