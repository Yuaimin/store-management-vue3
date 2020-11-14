import { defineComponent } from 'vue'
import './index.scss'

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
          slots: { customRender: 'name' }
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
          dataIndex: 'price'
        },
        {
          title: '商品库存',
          align: 'center',
          dataIndex: 'stock'
        },
        {
          title: '商品销量',
          align: 'center',
          dataIndex: 'sales'
        },
        {
          title: '商品状态',
          width: 100,
          align: 'center',
          slots: { customRender: 'status' }
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt'
        },
        {
          title: '操作',
          align: 'center',
          slots: { customRender: 'operating' }
        }
      ],
      locale: {
        emptyText: '暂无数据'
      },
      data: [
        {
          name: '测试商品',
          image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54067_P_1563750434253.jpg_640x640.jpg',
          status: 0,
          price: '200.00',
          stock: 9999,
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
          sales: 21,
          createdAt: '2020-10-11 20:12:00',
          id: 2
        },
        {
          name: '测试商品',
          image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54067_P_1563750434253.jpg_640x640.jpg',
          status: 2,
          price: '200.00',
          stock: 9999,
          sales: 21,
          createdAt: '2020-10-11 20:12:00',
          id: 3
        }
      ]
    }
  },
  methods: {
    selection(ids: Array<number>) {
      console.log(ids)
    }
  },
  render() {
    const { columns, locale, data, selection } = this

    const tableSlots = {
      name: ({ record: { name, id } }: TableScopeData) => <router-link to={{ name: 'children-index', params: { id } }}>{name}</router-link>,
      image: ({ record: { image } }: TableScopeData) => <img class="image" src={image} alt="" />,
      status: ({ record: { status } }: TableScopeData) => {
        return (
          <div>
            <a-tag color="red" v-show={status === 0}>
              已下架
            </a-tag>
            <a-tag color="green" v-show={status === 1}>
              出售中
            </a-tag>
            <a-tag color="orange" v-show={status === 2}>
              已售罄
            </a-tag>
          </div>
        )
      },
      operating: () => (
        <div>
          <a-button type="link">详情</a-button>
        </div>
      )
    }

    const pageHeaderSlot = {
      extra: () => (
        <div class="extra">
          <a-button type="primary">创建商品</a-button>
          <a-button>批量上架</a-button>
          <a-button>批量下架</a-button>
        </div>
      )
    }

    return (
      <div class="page">
        <base-page-header v-slots={pageHeaderSlot} />
        <div class="page-container">
          <a-table columns={columns} locale={locale} data-source={data} rowKey="id" v-slots={tableSlots} row-selection={{ onChange: selection }} />
        </div>
      </div>
    )
  }
})
