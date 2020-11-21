import { defineComponent } from 'vue'
import './index.scss'
import { TablePaginationData } from '@/types'

interface TableScopeData {
  index: number
  record: TableData
}

interface TableData {
  id: string
  name: string
  image: string
  price: string
  stock: number
  sales: number
  status: number
  createdAt: string
}

export default defineComponent({
  data() {
    return {
      columns: [
        {
          title: '商品名称',
          width: 200,
          ellipsis: true,
          dataIndex: 'name'
        },
        {
          title: '商品图片',
          width: 100,
          align: 'center',
          slots: { customRender: 'image' }
        },
        {
          title: '商品价格',
          align: 'center',
          dataIndex: 'price',
          sorter: (a: TableData, b: TableData) => +a.price - +b.price
        },
        {
          title: '商品库存',
          align: 'center',
          dataIndex: 'stock',
          sorter: (a: TableData, b: TableData) => a.stock - b.stock
        },
        {
          title: '商品销量',
          align: 'center',
          dataIndex: 'sales',
          sorter: (a: TableData, b: TableData) => a.sales - b.sales
        },
        {
          title: '商品状态',
          width: 100,
          align: 'center',
          slots: { customRender: 'status' }
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          ellipsis: true
        },
        {
          title: '操作',
          align: 'center',
          slots: { customRender: 'operating' }
        }
      ],
      data: [
        {
          name: '测试商品',
          image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54067_P_1563750434253.jpg_640x640.jpg',
          status: 0,
          price: '200.00',
          stock: 11,
          sales: 21,
          createdAt: '2020-10-11 20:12:00',
          id: 10
        },
        {
          name: '测试商品',
          image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54067_P_1563750434253.jpg_640x640.jpg',
          status: 1,
          price: '200.00',
          stock: 9999,
          sales: 22,
          createdAt: '2020-10-11 20:12:00',
          id: 2
        },
        {
          name: '测试商品',
          image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54067_P_1563750434253.jpg_640x640.jpg',
          status: 2,
          price: '2020.00',
          stock: 9999,
          sales: 21,
          createdAt: '2020-10-11 20:12:00',
          id: 3
        }
      ],
      pageInfos: {
        page: 1,
        size: 20,
        total: 100
      },
      formData: {
        name: '',
        status: undefined
      },
      ids: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    async getData() {
      const { status } = this.formData
      console.log({ ...this.pageInfos, ...this.formData, status: status ?? '' })
    },
    // 选择商品
    selection(ids: Array<never>) {
      this.ids = ids
    },
    // 分页数据加载
    paginationChange({ current, pageSize }: TablePaginationData) {
      const { page, size } = this.pageInfos
      if (page === current && size === pageSize) return
      this.pageInfos.page = current
      this.pageInfos.size = pageSize
      this.getData()
    }
  },
  render() {
    const {
      columns,
      data,
      selection,
      pageInfos: { size, total },
      paginationChange,
      ids,
      formData,
      getData
    } = this

    const pageHeaderSlot = {
      extra: () => (
        <div class="extra">
          <a-button type="primary">创建商品</a-button>
          <a-button disabled={!ids.length}>批量上架</a-button>
          <a-button disabled={!ids.length}>批量下架</a-button>
        </div>
      )
    }

    const locale = {
      emptyText: '暂无数据'
    }

    const tableSlots = {
      image: ({ record: { image } }: TableScopeData) => <img class="image" src={image} alt="" />,
      status: ({ record: { status } }: TableScopeData) => {
        if (status === 0)
          return (
            <a-tag color="red" v-show={status === 0}>
              已下架
            </a-tag>
          )
        else if (status === 1)
          return (
            <a-tag color="green" v-show={status === 1}>
              出售中
            </a-tag>
          )
        else
          return (
            <a-tag color="orange" v-show={status === 2}>
              已售罄
            </a-tag>
          )
      },
      operating: ({ record: { id } }: TableScopeData) => (
        <div>
          <router-link to={{ name: 'product-detail', params: { id } }}>详情</router-link>
          <a-divider type="vertical" />
          <router-link to={{ name: 'product-detail', params: { id } }}>编辑</router-link>
        </div>
      ),
      footer: () => <div>商品总数量：{total}</div>
    }

    // 表格分页器
    const tablePagination = {
      'show-quick-jumper': true,
      total,
      pageSizeOptions: ['20', '50', '100', '200'],
      showSizeChanger: true,
      defaultPageSize: size
    }

    return (
      <div class="page">
        <base-page-header v-slots={pageHeaderSlot} />
        <div class="page-container">
          <div class="page-container-filter">
            <a-form layout="inline">
              <a-form-item label="商品名称">
                <a-input class="w200" placeholder="请输入商品名称" v-model={[formData.name, 'value']} />
              </a-form-item>
              <a-form-item label="商品状态">
                <a-select class="w200" placeholder="全部" allowClear v-model={[formData.status, 'value']}>
                  <a-select-option value={0}>已下架</a-select-option>
                  <a-select-option value={1}>出售中</a-select-option>
                  <a-select-option value={2}>已售罄</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item>
                <a-button onClick={getData}>筛选</a-button>
              </a-form-item>
            </a-form>
          </div>
          <a-table columns={columns} locale={locale} data-source={data} rowKey="id" v-slots={tableSlots} row-selection={{ onChange: selection }} pagination={tablePagination} onChange={paginationChange} />
        </div>
      </div>
    )
  }
})
