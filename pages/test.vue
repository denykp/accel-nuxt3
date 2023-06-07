<script setup lang="ts">
const abc = ref("");
const throwing = () => {
  // useRouter().push("/asdasds");
  throw "error";
  // createError("test");
};
const kue = useCookie("kue", {
  // httpOnly: true,
});
const nasi = useCookie("nasi");
const test = () => {
  // try {
  // throwing();
  // kue.value = "lemper";
  // nasi.value = "goreng";
  $fetch("/api/kue", { method: "post" });
  // } catch (error) {
  //   console.log(error);
  // }
};
watch(kue, (value) => {
  console.log("watcher", value);
});

onMounted(() => {
  console.log(kue.value);
});
const callFetch = async () => {
  const { data } = await useFetch("/api/kue", {
    method: "get",
  });

  alert(data.value);
};
const deleteC = async () => {
  await useFetch("/api/kue", {
    method: "delete",
  });
};
</script>
<template>
  <div class="mt-4">
    button
    <button class="pointer bg-blue-500 rounded py-2 px-4" @click="test">
      click
    </button>
    <button
      class="pointer bg-blue-500 rounded py-2 px-4 mx-2"
      @click="callFetch"
    >
      fetch
    </button>
    <button class="pointer bg-blue-500 rounded py-2 px-4 mx-2" @click="deleteC">
      fetch
    </button>
  </div>
</template>
