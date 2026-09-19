<script setup>
import { fillForm } from "./lib/pdf.js"
async function bb() {
  var a = document.createElement('a');
  console.time()
  a.href = URL.createObjectURL(new Blob([await fillForm()]))
  console.timeEnd()
  a.download = 'file.pdf';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

</script>

<template>
  <div>
    <button @click="bb">查看</button>
  </div>
</template>
