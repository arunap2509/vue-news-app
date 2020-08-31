<template>
  <div class="search-container">
    <div class="search-card">
      <div class="form-control">
        <label for="search">Search News</label>
        <input type="text" id="search" v-model="search" placeholder="Search" />
      </div>
      <div class="form-control">
        <label for="select">Select Country</label>
        <select v-model="select" id="select">
          <option value="us">US</option>
          <option value="in">India</option>
          <option value="jp">Japan</option>
          <option value="ch">China</option>
          <option value="ca">Canada</option>
          <option value="nz">NewZealand</option>
          <option value="fr">France</option>
          <option value="au">Australia</option>
          <option value="rs">Russia</option>
          <option value="it">Italy</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-filter",
  data() {
      return {
          select: "in",
          search: ""
      }
  },
  watch: {
      search: function() {
          if(this.search.length > 4) {
              this.$emit("search:keyword", this.search);
          }
      },
      select: function() {
          this.$emit("select:country", this.select);
      }
  }
};
</script>

<style>
.search-container {
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80px;
  margin: 20px;
  padding: 0 30px;
}
.search-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}
.form-control label {
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.form-control input {
    display: inline-block;
    width: 300px;
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.form-control select {
    display: inline-block;
    width: 300px;
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>