import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pageSize: {
      type: Number,
      default: 20
    },
    pageTotal: {
      type: Number,
      default: 0
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const { pageSize, pageTotal, pagination } = this
    const locale = {
      emptyText: '暂无数据'
    }
    const tablePagination = {
      'show-quick-jumper': true,
      total: pageTotal,
      pageSizeOptions: ['20', '50', '100', '200'],
      showSizeChanger: true,
      defaultPageSize: pageSize
    }
    return <a-table locale={locale} pagination={pagination ? tablePagination : {}} />
  }
})
