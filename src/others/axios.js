axios.post(
  'https://www.jsonstore.io/5be9b83cca5a29d60034d49e479efd74d8482c21587235ab3441aa28b9c33f76',
  {
    swiperList: [{
      id: '001',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/81743f7e8589990dd413cccadf315f8b.jpg'
    },
    {
      id: '002',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg'
    },
    {
      id: '003',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/a9658b2ee2c2c6de227c9710a8b04d48.jpg'
    },
    {
      id: '004',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg'
    }],
    iconsList: [
      {
        id: '001',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '景点门票景点门票景点门票景点门票景点门票景点门票景点门票'
      },
      {
        id: '002',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        des: '一日游'
      },
      {
        id: '003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        des: '踏青专题'
      },
      {
        id: '004',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
        des: '精品小团'
      },
      {
        id: '005',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        des: '西安必游'
      },
      {
        id: '006',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        des: '动植物园'
      },
      {
        id: '007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        des: '华清宫'
      },
      {
        id: '008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        des: '兵马俑'
      },
      {
        id: '008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        des: '兵马俑'
      }
    ],
    weekendTripList: [{
      id: '001',
      url: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
      tripTitle: '西安安梦，开启穿越的圆安梦，开启穿越的圆安梦，开启穿越的圆必打卡',
      tripDesc: '寻长安梦，开启穿越的圆安梦，开启穿越的圆安梦，开启穿越的圆梦之旅'
    }, {
      id: '002',
      url: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
      tripTitle: '西安必打卡',
      tripDesc: '寻长安梦，开启穿越的圆安梦，开启穿越的圆安梦，开启穿越的圆安梦，开启穿越的圆安梦，开启穿越的圆梦之旅'
    }]
  }
).then(function (resp) {
  console.log(resp)
})
