<template>
  <div>
    <panel transparent>
      <Form ref="form" :model="form" :label-width="60">
        <Form-item label="To">
          <Select size="small" v-model="form.to" multiple placeholder="请选择">
            <Option
              v-for="item in form.toOption"
              :key="item.value"
              :value="item.value">
              {{item.label}}
            </Option>
          </Select>
        </Form-item>
        <Form-item label="Cc">
          <Input v-model="form.cc" @input="update"/>
        </Form-item>
        <Form-item label="Subject">
          <Checkbox-group v-model="form.subjectList">
            <Checkbox label="Booking"></Checkbox>
            <Checkbox label="ISF"></Checkbox>
            <Checkbox label="Continuous Bond"></Checkbox>
            <Poptip trigger="hover" content="提示内容" placement="top">
              <Icon type="information-circled"></Icon>
            </Poptip>
          </Checkbox-group>
        </Form-item>
        <Form-item>
          <Input v-model="form.cc"/>
        </Form-item>
        <Form-item label="ATT">
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button size="small" type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
          </Upload>
          <Alert show-icon>消息提示文案</Alert>
          <GoAlert show-icon inline>请上传文件POA、BOND、营业执照、H/BL 和 IVC/PL</GoAlert>
        </Form-item>
      </Form>
    </panel>
    <panel title="Order Information">
      111
    </panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          subjectList: [],
          to: [],
          cc: '',
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
      },
      update () {
        console.log(this.form)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
