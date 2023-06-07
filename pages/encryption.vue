<script setup lang="ts">
const hashSource = "testing string for hash";
const hashResult = ref("");
const handleHMAC = async () => {
  const { data } = await useFetch("/api/encryption/hash", {
    method: "post",
    body: hashSource,
  });

  if (data.value) {
    hashResult.value = data.value;
  }
};

const encryptSource = "testing string for encryption";
const encryptResult = ref("");
const decryptResult = ref("");
const handleEncrypt = async () => {
  const { data } = await useFetch("/api/encryption/encrypt", {
    method: "post",
    body: encryptSource,
  });
  if (data.value) {
    encryptResult.value = data.value;
    decryptResult.value = "";
  }
};
const handleDecrypt = async () => {
  if (encryptResult.value) {
    const { data } = await useFetch("/api/encryption/decrypt", {
      method: "post",
      body: encryptResult.value,
    });
    if (data.value) {
      decryptResult.value = data.value;
    }
  } else {
    alert("Nothing to decrypt");
  }
};
</script>

<template>
  <div class="flex justify-center p-10">
    <div>
      <div class="border border-gray-400 p-4 rounded-xl">
        <div>
          <span>Source : </span>
          <span>{{ hashSource }}</span>
        </div>
        <div>
          <span>Result : </span>
          <span>{{ hashResult }}</span>
        </div>
        <c-button class="flex mx-auto mt-2" @click="handleHMAC">Hash</c-button>
      </div>
      <div class="border border-gray-400 p-4 rounded-xl mt-5">
        <div>
          <span>Source : </span>
          <span>{{ encryptSource }}</span>
        </div>
        <div>
          <span>Encrypt Result : </span>
          <span>{{ encryptResult }}</span>
        </div>
        <div>
          <span>Decrypt Result : </span>
          <span>{{ decryptResult }}</span>
        </div>
        <div class="flex justify-center mt-2 gap-2">
          <c-button @click="handleEncrypt">Encrypt</c-button>
          <c-button @click="handleDecrypt">Decrypt</c-button>
        </div>
      </div>
    </div>
  </div>
</template>
