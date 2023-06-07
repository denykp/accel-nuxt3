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

const publicKey = ref("");
const privateKey = ref("");
const encryptResultRSA = ref("");
const decryptResultRSA = ref("");
const handleGenerateRSA = async () => {
  const { data } = await useFetch("/api/encryption/generateRSA");
  if (data.value) {
    publicKey.value = data.value.publicKey;
    privateKey.value = data.value.privateKey;
  }
};
const handleEncryptRSA = async () => {
  const { data } = await useFetch("/api/encryption/encryptRSA", {
    method: "post",
    body: {
      message: encryptSource,
      secretKey: publicKey.value,
    },
  });
  if (data.value) {
    encryptResultRSA.value = data.value;
  }
};
const handleDecryptRSA = async () => {
  const { data } = await useFetch("/api/encryption/decryptRSA", {
    method: "post",
    body: {
      message: encryptResultRSA.value,
      secretKey: privateKey.value,
    },
  });
  if (data.value) {
    decryptResultRSA.value = data.value;
  }
};
</script>

<template>
  <div class="flex justify-center p-10">
    <div>
      <div class="border border-gray-400 p-4 rounded-xl">
        <div>
          <span class="font-bold">Source : </span>
          <span>{{ hashSource }}</span>
        </div>
        <div>
          <span class="font-bold">Result : </span>
          <span>{{ hashResult }}</span>
        </div>
        <c-button class="flex mx-auto mt-2" @click="handleHMAC">Hash</c-button>
      </div>
      <div class="border border-gray-400 p-4 rounded-xl mt-5">
        <div>
          <span class="font-bold">Source : </span>
          <span>{{ encryptSource }}</span>
        </div>
        <div>
          <span class="font-bold">Encrypt Result : </span>
          <span>{{ encryptResult }}</span>
        </div>
        <div>
          <span class="font-bold">Decrypt Result : </span>
          <span>{{ decryptResult }}</span>
        </div>
        <div class="flex justify-center mt-2 gap-2">
          <c-button @click="handleEncrypt">Encrypt</c-button>
          <c-button @click="handleDecrypt">Decrypt</c-button>
        </div>
      </div>
      <div class="border border-gray-400 p-4 rounded-xl mt-5">
        <div>
          <span class="font-bold">publicKey : </span>
          <span>{{ publicKey }}</span>
        </div>
        <div>
          <span class="font-bold">privateKey : </span>
          <span>{{ privateKey }}</span>
        </div>
        <div class="break-words max-w-screen-md">
          <span class="font-bold">Encrypt Result RSA :</span>
          <div>{{ encryptResultRSA }}</div>
        </div>
        <div>
          <span class="font-bold">Decrypt Result RSA :</span>
          <div>{{ decryptResultRSA }}</div>
        </div>
        <div class="flex justify-center mt-2">
          <c-button @click="handleGenerateRSA">Generate RSA Key</c-button>
        </div>
        <div class="flex justify-center mt-2 gap-2">
          <c-button @click="handleEncryptRSA">Encrypt RSA</c-button>
          <c-button @click="handleDecryptRSA">Decrypt RSA</c-button>
        </div>
      </div>
    </div>
  </div>
</template>
