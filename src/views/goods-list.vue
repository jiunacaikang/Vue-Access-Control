<style scoped>

</style>

<template>
  <div v-loading="loading" element-loading-text="正在加载...">
    <!-- 操作 -->
    <div class="operation">
      <el-button size="small" type="primary" v-has="[goods.request]" @click="fetchData">查询</el-button>
      <el-button size="small" type="danger" v-has="[goods.remove]">删除</el-button>
      <el-button size="small" v-if="$_has([goods.request]) && canReset">重置</el-button>
      <el-button size="small" type="info" @click="requestNotAllowed">尝试发起越权请求</el-button>
    </div>
    <!-- list -->
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="商品编号">
      </el-table-column>
      <el-table-column prop="name" label="商品名称">
      </el-table-column>
      <el-table-column prop="pinyin" label="拼音识别码">
      </el-table-column>
      <el-table-column prop="barcode" label="条形码">
      </el-table-column>
      <el-table-column prop="standard" label="规格型号">
      </el-table-column>
      <el-table-column prop="creation_time" label="创建时间" align="center">
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import * as goods from "../api/goods";
import * as utils from "../assets/util"

let myMixin = {
  data: function() {
    return { goods }
  }
}

export default {
  mixins: [myMixin],
  data() {
    return {
      list: [],
      loading: false,
      canReset: false
    };
  },
  methods: {
    fetchData: function() {
      let vm = this;
      vm.loading = true;
      goods.request.r(vm.queryParam).then(res => {
        vm.list = res.data.content;
        vm.list.forEach(el => el.creation_time = utils.dateFormat(el.creation_time));
        vm.loading = false;
      });
    },
    requestNotAllowed: function(){
      goods.notAllowed.r();
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
