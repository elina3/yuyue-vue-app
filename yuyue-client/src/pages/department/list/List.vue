<template>
  <div class="department-list-page">
      <wv-panel title="小图文组合列表">
        <wv-cell title="文字标题" is-link to="/">
            <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="文字标题" is-link to="/">
            <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
        </wv-cell>
    </wv-panel>
    <wv-panel title="图文组合列表">
        <wv-media-box type="text"  title="心血管内科" description="目前医生37人" to="/"></wv-media-box>
        <wv-media-box title="消化内科" description="专业规模在同级医院屈指可数" to="/"></wv-media-box>

        <wv-cell title="查看更多" is-link slot="ft"></wv-cell>
    </wv-panel>
  </div>
</template>

<script>

export default {
  name: 'DepartmentList',
  data () {
    return { msg: '' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .department-list-page{

    }
</style>
