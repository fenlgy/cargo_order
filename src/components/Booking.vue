<template>
  <div>
    <panel transparent={true}>
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="To">
          <el-select size="small" :clearable="true" :multiple="true" v-model="form.to" placeholder="请选择">
            <el-option
              v-for="item in form.toOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Cc">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="Subject">
          <el-checkbox-group v-model="form.subjectList">
            <el-checkbox label="Booking"></el-checkbox>
            <el-checkbox label="ISF"></el-checkbox>
            <el-checkbox label="Continuous Bond"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="ATT">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="form.fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
          </el-upload>
        </el-form-item>
      </el-form>
    </panel>
    <panel title="Order Information">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                            style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          subjectList: [],
          to: '',
          toOption: [
            {value: 'a', label: 'DSL (Jack)'},
            {value: 'b', label: 'IDC'},
            {value: 'c', label: 'ANL'}],
          fileList: [],
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      onSubmit () {
        console.log('submit!')
      },
      onCancel () {
        console.log('Cancel!')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
