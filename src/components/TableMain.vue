<template>
  <div class="layout">
    <Layout>
      <!--<Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">IVIEW布局</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>-->
      <Content :style="{padding: '0 50px'}" >
        <!--<Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Table</BreadcrumbItem>
        </Breadcrumb>-->
        <Card>
          <div style="min-height: 500px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              :min-height="800"
              :max-height="800"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
              :paging-index="(pageIndex-1)*pageSize"
              @sort-change="sortChange"
            ></v-table>
            <div class="mt20 mb20 bold"></div>
            <v-pagination
              @page-change="pageChange"
              @page-size-change="pageSizeChange"
              :total="total"
              :page-size="pageSize"
              :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
            </v-pagination>
          </div>
        </Card>
      </Content>

    </Layout>
  </div>
</template>

<script>

    export default {

        name: "table-main",
        data() {
            return {
                rowData:[],
                total:0,
                pageIndex:1,
                pageSize:10,
                tableData: [ ],
                columns: [
                    {field: 'name', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'hobby', title: '邮箱', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'address', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'center',isResize:true}
                ],


            }
        },
        created() {
         //在created函数中使用axios的get请求向后台获取用户信息数据
        this.$ajax('http://localhost:8081/findAll').then(res => {
            this.tableData = res.data.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize);
            this.total=res.data.length;
            this.rowData=res.data;
            console.log(this.tableData);
            //console.log(res.data);
            }).catch(function (error) {
            console.log(error);
            });
        },
        methods:{
            getTableData(){
                console.log( this.rowData);
                this.tableData = this.rowData.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize);
                console.log( this.rowData);
            },
        pageChange(pageIndex){
            this.pageIndex = pageIndex;
            this.getTableData();
            console.log(pageIndex);
        },
        pageSizeChange(pageSize){
            this.pageIndex = 1;
            this.pageSize = pageSize;
            this.getTableData();
        },
            sortChange(params){

                if (params.height.length > 0){

                    this.tableConfig.tableData.sort(function (a, b) {

                        if (params.height === 'asc'){

                            return a.height - b.height;
                        }else if(params.height === 'desc'){

                            return b.height - a.height;
                        }else{

                            return 0;
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
