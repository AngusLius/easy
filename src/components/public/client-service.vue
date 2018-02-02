<template>
  <div class="client-service"></div>
</template>

<script>
export default {
  name: 'client-service'
}
</script>

<style lang="scss">
.client-service {
  display: block;
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  background-color: #ffffff;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../../images/home/client-service.png");
  right: 30px;
  bottom: 210px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    background-image: url("../../images/home/client-service-hover.png");
  }

  &:active {
    background-color: #dcdcdc;
    background-image: url("../../images/home/client-service-active.png");
  }
}
</style>
