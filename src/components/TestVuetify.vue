<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';





const dialog = ref(false)
const page = ref(1)

const selected = ref([])

const fileinput = ref()

let items = ref([0])

const desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
        ]

onMounted(() => {
    for(let i = 0; i < 1000; i++)
    items.value.push(i)
})

</script>



<template>

<v-select
  label="Select"
  :items="[
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming',
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming',
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming',
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'
  ]"
  variant="solo-filled"
></v-select>

<v-virtual-scroll
  :height="300"
  :items="items"
>
  <template v-slot:default="{ item }">
    Item {{ item }}
  </template>
</v-virtual-scroll>

<v-table
    fixed-header
    height="200px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>



<v-checkbox label="Checkbox"></v-checkbox>
<p>{{ fileinput }}</p>
<v-file-input 
show-size
density="compact"
prepend-icon="mdi-camera"
    counter
    multiple
    chips
clearable 
label="File input" 
v-model="fileinput" 
variant="solo-filled"
accept="image/*"
></v-file-input>

<v-combobox
  label="Combobox"
  :items="[
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming',
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming',
    'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'
    ]"
  variant="solo-filled"
></v-combobox>


    <p>{{ selected }}</p>
    <v-checkbox
      v-model="selected"
      label="John"
      value="John"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Jacob"
      value="Jacob"
    ></v-checkbox>



<v-sheet style="text-align: center;">
<v-btn variant="tonal">
  Button
</v-btn>

<v-btn icon="mdi-menu-left" color="red">
</v-btn>

<v-btn
        class="ma-2"
        variant="tonal"
        icon="mdi-cancel"
        color="green-darken-2"
      ></v-btn>

<v-icon
      size="large"
      variant="tonal"
      color="green-darken-2"
      icon="mdi-domain"
    >icon</v-icon>

<v-card text="test card">ddd</v-card>


<div class="text-center">
    <v-btn
      color="primary"
      @click="dialog = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-expansion-panels>
  <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
</v-expansion-panels>

<v-btn
      id="menu-activator"
      color="primary"
    >
      Sibling activator
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
          v-for="(item, index) in [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ]"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


    <v-pagination
      v-model="page"
      :length="10"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
    <v-pagination :length="2"></v-pagination>


</v-sheet>


</template>


<style scoped>
</style>