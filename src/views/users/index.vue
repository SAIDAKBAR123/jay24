<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-0"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Управление пользователями</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Добавить
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Полное имя персонала"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.phone_number"
                      label="Телефонный номер"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.login"
                      label="Имя пользователя"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-select
                      v-model="editedItem.type"
                      :items="['admin', 'hr', 'chief', 'intern', 'staff']"
                      label="Роль пользователя"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="420px">
          <v-card>
            <p class="text-center text-h6 align-center pt-8">Are you sure you want to delete this item?</p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.type="{ item }">
      <v-chip class="px-4 rounded-lg" small :color="getTypeColor(item.type)" dark>{{ item.type }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Полное имя',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Имя пользователя', value: 'login' },
      { text: 'Пароль', value: 'password' },
      { text: 'Телефон', value: 'phone_number' },
      { text: 'Роль', value: 'type' },
      { text: 'Действия', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      login: '',
      password: '',
      phone_number: '',
      type: ''
    },
    defaultItem: {
      name: '',
      login: '',
      password: '',
      phone_number: '',
      type: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Добавить нового пользователя' : 'Изменить персонал'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    getTypeColor (value) {
      switch (value) {
        case 'hr':
          return 'red lighten-1'
        case 'chief':
          return 'indigo lighten-2'
        case 'staff':
          return 'green lighten-2'
        case 'admin':
          return 'blue lighten-2'
        case 'intern':
          return 'orange lighten-2'

        default:
          return 'white lighten-4'
      }
    },
    initialize () {
      this.desserts = [
        {
          id: 'id123',
          name: 'Saidakbar Makhmudkhujaev',
          login: '998998005598',
          password: '*********',
          phone_number: '+998977509532',
          type: 'admin'
        },
        {
          id: 'id321',
          name: 'Azamat Bakhodirov',
          login: '998997003344',
          password: '***',
          phone_number: '+998977509532',
          type: 'staff'
        },
        {
          id: 'id32431',
          name: 'Kamila Shadimetova',
          login: '998934443322',
          password: '*******',
          phone_number: '+998934443322',
          type: 'hr'
        },
        {
          id: 'id3243sd431',
          name: 'Sultonova Farida',
          login: '998954321134',
          password: '*********',
          phone_number: '+998954321134',
          type: 'chief'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
