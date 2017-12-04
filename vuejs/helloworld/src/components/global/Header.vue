<template>
  <div class="main-header">
    <ul class="button-group">
      <li class="logo">Diary</li>
      <li class="link">Feeds</li>
      <li class="link">New</li>
    </ul>
  </div>
</template>


<style scoped>
.main-header {
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgba(255,255,255,0.75);
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  z-index: 999;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

li {
  width: 80px;
  cursor: pointer;
  transition: all .3s;
}

li:first-child {
  margin-left: 10px;
  margin-right: auto;
}

li:hover {
  background: #ECF4FF;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
