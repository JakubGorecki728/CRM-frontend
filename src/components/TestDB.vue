<script setup lang="ts">
    import { inject, ref } from 'vue';
    import { DbService } from '../services/DbService';
    import { onMounted } from 'vue';
    import { Item } from '../../electron/local-database/entities/Item';
    import { User } from '../../electron/local-database/entities/User';
    import _ from 'lodash'
import { nextTick } from 'node:process';

    const dbService = <DbService | any>inject('DbService');
    onMounted(async () => {
        await getItems();
        sortItems();
    });
    let items = ref<Item[]>([]);

    const dialog = ref({
      show: false,
      itemId: <null | Item['id']> null,
      open: function(itemId: Item['id']) { this.itemId = itemId; this.show = true; },
      close: function() { this.show = false; this.itemId = null },
      closeAndDeleteItem: async function() { this.itemId ? await deleteItem(this.itemId) : ''; this.close() }
    })
    
    
    const getItems = async () => {  
        items.value = await dbService.getItems();
    };
    const insertItem = async () => { 
        items.value.unshift(await dbService.insertItem({ name: '', done: false } as Omit<Item, 'id'>));
    };
    const updateItem = async (item: Item) => {
        items.value[items.value.findIndex(el => el.id === item.id)] = await dbService.updateItem(item);
    };
    const deleteItem = async (itemId: Item['id']) => {
        await dbService.deleteItem(itemId);
        items.value = items.value.filter(el => el.id !== itemId);
    };

    const sortItems = () => {
      items.value = _(items.value).orderBy([o => o.done, o => o.id], ['asc', 'desc']).value()
    }




    const menuItems = [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ]

      const showMenu = ref(false)
      
      const x = ref(100)
      const y = ref(100)
      const show = function (e: MouseEvent) {
      e.preventDefault();
      console.log(dialog.value.show, dialog.value.itemId)
      showMenu.value = false;
      x.value = e.clientX;
      y.value = e.clientY;
      nextTick(() => { showMenu.value  = true })
      }
</script>


<template>
        <button 
    @click="insertItem()" 
    class="btn btn-rounded btn-success"
    >Add Item
    </button>
    <div @contextmenu="show($event)" class="overflow-auto" style="height: 80vh;">

    
    <div 
    class="card bg-muted m-2 d-flex flex-row py-1 px-3 align-items-center" 
    v-for="item of items"
    :class="{ 
        'border-success': item.done,
        'border-danger': !item.done 
    }"

    > 
        <v-checkbox-btn
        class="p-0 m-0"
        density="comfortable"
        v-model="item.done"
        :hide-details="'auto'"
        v-on:change="updateItem(item); sortItems()"
        ></v-checkbox-btn>

        <v-text-field 
        density="compact"
        variant="outlined"
        color="green-darken-2"
        class="w-100 mx-3"
        v-on:change="updateItem(item)"
        v-model="item.name"
        :hide-details="true"
        ></v-text-field>

        <v-btn
        density="compact"
        class=""
        @click="dialog.open(item.id)"
        variant="outlined"
        icon="mdi-delete"
        :color="item.done ? 'green-darken-2' : 'red-lighten-1'"
        
        ></v-btn>
    </div>


    <v-menu 
    v-model:model-value="showMenu" 
    :position-x="x" 
    :position-y="y"  
    offset-y 
    :internal-activator="false"
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>


    <v-dialog
    v-model="dialog.show"
    width="auto"
    persistent>
      <v-card>
        <v-card-text>
          Are you sure you want to delete this item?
        </v-card-text>
        <v-card-actions class="d-flex justify-content-end">
          <v-btn color="danger" @click="dialog.closeAndDeleteItem()">delete</v-btn>
          <v-btn color="warning" @click="dialog.close()">cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>


<style scoped>
</style>