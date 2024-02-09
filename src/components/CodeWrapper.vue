<template>
  <div class="codeWrapper_container">
    <pre v-highlightjs>
      <code class="customScroll"><slot/></code>
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    lang: { type: String, default: "" },
  },
};
</script>
<style>
.codeWrapper_container {
  margin: 0px 20px !important;
}
</style>
