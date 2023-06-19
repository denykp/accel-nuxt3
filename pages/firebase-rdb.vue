<script setup lang="ts">
import {
  getDatabase,
  ref as firebaseRef,
  set,
  push,
  onValue,
} from "@firebase/database";
import { v4 as uuidv4 } from "uuid";
const db = getDatabase();

const usersData = ref({});

// writeUserData(uuidv4(), 'wildan', 'wildanzm21@gmail.com', 'lalala')
function writeUserData(userId: string) {
  set(firebaseRef(db, "users/" + userId), userData.value);
}
function writeData() {
  const menuRef = firebaseRef(db, "menu/");
  const newMenuRef = push(menuRef);
  set(newMenuRef, {
    idUser: userData.value.id,
    nama: "Bakso",
    harga: 10000,
  });
}

function getUserData() {
  const users = firebaseRef(db, "users");
  onValue(users, (snapshot) => {
    const data = snapshot.val();
    usersData.value = Object.keys(data).map((val) => ({
      id: val,
      ...data[val],
    }));
    console.log(Array.from(data));
  });
}

onMounted(() => {
  // writeUserData(uuidv4(), "wildan", "wildanzm21@gmail.com", "lalala");
  getUserData();
});

const userData = ref({
  id: "",
  username: "",
  email: "",
  profile_picture: "",
});
const submitUser = () => {
  writeUserData(uuidv4());
};
</script>

<template>
  <div class="flex justify-center p-10">
    <div>
      <div class="border rounded p-6">
        <div>Get Data</div>
        <pre>{{ usersData }}</pre>
      </div>
      <div class="mt-4 border rounded p-6">
        <div>Save Data</div>
        <div>
          <input
            type="text"
            v-model="userData.id"
            class="border rounded px-1 h-8 mt-2"
            placeholder="id"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="userData.username"
            class="border rounded px-1 h-8 mt-2"
            placeholder="username"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="userData.email"
            class="border rounded px-1 h-8 mt-2"
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="userData.profile_picture"
            class="border rounded px-1 h-8 mt-2"
            placeholder="profile_picture"
          />
        </div>
        <button
          @click="submitUser"
          class="bg-blue-500 text-white rounded px-2 py-1 mt-2"
        >
          Save
        </button>
        <button
          @click="writeData"
          class="bg-blue-500 text-white rounded px-2 py-1 mt-2"
        >
          Add Menu
        </button>
      </div>
    </div>
  </div>
</template>
