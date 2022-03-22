<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-0"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Управление меню</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="editedItem.date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="editedItem.date"
              label="Фильтровать по дате"
              prepend-icon="mdi-calendar"
              class="mr-4"
              readonly
              flat
              hide-details
              v-bind="attrs"
              outlined
              dense
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="editedItem.date" no-title range scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(editedItem.date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Добавить
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container fluid>
                <v-row>
                  <!--
                  <v-col v-if="editedItem.image" :cols="4">
                    <v-img :src="editedItem.image"></v-img>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Отмена </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="420px">
          <v-card>
            <p class="text-center text-h6 align-center pt-8">
              Are you sure you want to delete this item?
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Отмена</v-btn
              >
              <v-btn color="red darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.date="{ item }">
      <v-chip class="rounded-sm" color="blue lighten-4">{{ item.date }}</v-chip>
    </template>
    <template v-slot:item.lunch_infos="{ item }">
      <div>{{ item.lunch_infos[0].title.ru }}</div>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    menu: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Date', value: 'date' },
      { text: 'Food', value: 'lunch_infos' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      date: [],
      lunches: ['03040426-10d5-461b-a45a-f930335c063a']
    },
    defaultItem: {
      date: [],
      lunches: ['03040426-10d5-461b-a45a-f930335c063a']
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Добавить новое меню' : 'Изменить меню'
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
    initialize () {
      this.desserts = [
        {
          id: 'e89b2122-b039-4642-a332-d420d62d21fa',
          _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
          date: Date.now(),
          lunches: ['03040426-10d5-461b-a45a-f930335c063a'],
          lunch_infos: [
            {
              title: {
                ru: 'Manti',
                uz: 'Manti',
                en: 'Manti'
              },
              slug: 'manti',
              image: ''
            }
          ]
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
